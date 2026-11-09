// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Ownable, Ownable2Step} from "@openzeppelin/contracts/access/Ownable2Step.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {EIP712} from "@openzeppelin/contracts/utils/cryptography/EIP712.sol";
import {ECDSA} from "@openzeppelin/contracts/utils/cryptography/ECDSA.sol";

interface ICreatorOf {
    function creatorOf(address token) external view returns (address);
}

/// @title AccountFeeEscrow
/// @notice Holds creator-fee shares that a launcher named for an X or GitHub account (`account` = keccak256 of
///         the normalised handle, e.g. "x:alice"). The account's owner proves the account off-chain; the attester
///         signs a binding (account → wallet). The binding waits 72 hours in public, during which the owner or the
///         guardian can cancel it. Then the bound wallet claims. Shares nobody claims within 90 days of the first
///         credit go back to the token's current creator.
contract AccountFeeEscrow is Ownable2Step, ReentrancyGuard, EIP712 {
    uint256 public constant BIND_DELAY = 72 hours;
    uint256 public constant EXPIRY = 90 days;
    bytes32 private constant BIND_TYPEHASH = keccak256("Bind(bytes32 account,address wallet,uint256 deadline)");

    address public launchpad; // set once
    address public attester;
    address public guardian;

    struct Credit {
        uint128 amount;
        uint64 firstAt;
    }

    mapping(address => mapping(bytes32 => Credit)) public credits;
    mapping(bytes32 => address) public boundWallet;
    mapping(bytes32 => uint256) public boundAt;

    event Credited(address indexed token, bytes32 indexed account, uint256 amount);
    event BindRequested(bytes32 indexed account, address indexed wallet, uint256 readyAt);
    event BindCancelled(bytes32 indexed account, address indexed by);
    event Claimed(address indexed token, bytes32 indexed account, address indexed wallet, uint256 amount);
    event Expired(address indexed token, bytes32 indexed account, address indexed creator, uint256 amount);
    event RolesSet(address attester, address guardian);

    error BadSignature();
    error Expired_();
    error NotBound();
    error NotReady();
    error NothingToClaim();
    error NotExpired();
    error NotAllowed();
    error PayoutFailed();

    error LaunchpadSet();

    constructor(address launchpad_, address owner_, address attester_, address guardian_)
        Ownable(owner_)
        EIP712("AgenticAccountEscrow", "1")
    {
        launchpad = launchpad_;
        attester = attester_;
        guardian = guardian_;
    }

    /// @notice Sets the launchpad once, when the escrow was deployed before it.
    function setLaunchpad(address launchpad_) external onlyOwner {
        if (launchpad != address(0)) revert LaunchpadSet();
        launchpad = launchpad_;
    }

    function credit(address token, bytes32 account) external payable {
        if (msg.value == 0) return;
        if (msg.sender != launchpad) revert NotAllowed();
        Credit storage c = credits[token][account];
        if (c.amount == 0) c.firstAt = uint64(block.timestamp);
        c.amount += uint128(msg.value);
        emit Credited(token, account, msg.value);
    }

    /// @notice Anyone may submit the attester's signature; the binding takes effect after 72 hours.
    function requestBind(bytes32 account, address wallet, uint256 deadline, bytes calldata sig) external {
        if (block.timestamp > deadline) revert Expired_();
        bytes32 digest = _hashTypedDataV4(keccak256(abi.encode(BIND_TYPEHASH, account, wallet, deadline)));
        if (ECDSA.recover(digest, sig) != attester || wallet == address(0)) revert BadSignature();
        boundWallet[account] = wallet;
        boundAt[account] = block.timestamp + BIND_DELAY;
        emit BindRequested(account, wallet, block.timestamp + BIND_DELAY);
    }

    function cancelBind(bytes32 account) external {
        if (msg.sender != owner() && msg.sender != guardian) revert NotAllowed();
        delete boundWallet[account];
        delete boundAt[account];
        emit BindCancelled(account, msg.sender);
    }

    function claim(address[] calldata tokens, bytes32 account) external nonReentrant {
        address wallet = boundWallet[account];
        if (wallet == address(0)) revert NotBound();
        if (block.timestamp < boundAt[account]) revert NotReady();
        uint256 total;
        for (uint256 i = 0; i < tokens.length; i++) {
            Credit storage c = credits[tokens[i]][account];
            uint256 amt = c.amount;
            if (amt == 0) continue;
            c.amount = 0;
            total += amt;
            emit Claimed(tokens[i], account, wallet, amt);
        }
        if (total == 0) revert NothingToClaim();
        (bool ok,) = wallet.call{value: total}("");
        if (!ok) revert PayoutFailed();
    }

    /// @notice After 90 days without a claim, anyone can send the share back to the token's current creator.
    function expire(address token, bytes32 account) external nonReentrant {
        Credit storage c = credits[token][account];
        uint256 amt = c.amount;
        if (amt == 0) revert NothingToClaim();
        if (block.timestamp < c.firstAt + EXPIRY) revert NotExpired();
        if (boundWallet[account] != address(0) && block.timestamp >= boundAt[account]) revert NotAllowed();
        c.amount = 0;
        address creator = ICreatorOf(launchpad).creatorOf(token);
        emit Expired(token, account, creator, amt);
        (bool ok,) = creator.call{value: amt}("");
        if (!ok) revert PayoutFailed();
    }

    function setRoles(address attester_, address guardian_) external onlyOwner {
        attester = attester_;
        guardian = guardian_;
        emit RolesSet(attester_, guardian_);
    }
}
