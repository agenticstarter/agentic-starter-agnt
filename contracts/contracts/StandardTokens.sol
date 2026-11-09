// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {Ownable, Ownable2Step} from "@openzeppelin/contracts/access/Ownable2Step.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {Clones} from "@openzeppelin/contracts/proxy/Clones.sol";
import {IPancakeRouter02, IPancakeFactory, IStakingPerks} from "./interfaces/IPancake.sol";

/// @title BasicToken
/// @notice Fixed supply, minted once to the creator. No owner, no mint, no tax. Clone template.
contract BasicToken is ERC20 {
    error AlreadyInitialized();

    bool private _init;
    string private _n;
    string private _s;

    constructor() ERC20("", "") {
        _init = true;
    }

    function initialize(string calldata name_, string calldata symbol_, uint256 supply, address to) external {
        if (_init) revert AlreadyInitialized();
        _init = true;
        _n = name_;
        _s = symbol_;
        _mint(to, supply);
    }

    function name() public view override returns (string memory) {
        return _n;
    }

    function symbol() public view override returns (string memory) {
        return _s;
    }
}

/// @title AdvancedToken
/// @notice Clone template with optional features chosen at creation and shown on the token page:
///  - mintable: the owner may mint up to `maxSupply` (0 = not mintable);
///  - tax: up to 5% on transfers to or from the pairs the owner marks; the owner can lower the tax, never raise it;
///  - the owner can renounce, which freezes everything as it is.
contract AdvancedToken is ERC20 {
    uint256 public constant MAX_TAX_BPS = 500;

    bool private _init;
    string private _n;
    string private _s;
    address public owner;
    uint256 public maxSupply;
    uint256 public taxBps;
    address public taxWallet;
    mapping(address => bool) public isPair;

    event OwnershipTransferred(address indexed from, address indexed to);
    event TaxSet(uint256 bps, address wallet);
    event PairSet(address indexed pair, bool isPair);

    error AlreadyInitialized();
    error NotOwner();
    error OverMax();
    error TaxUp();

    constructor() ERC20("", "") {
        _init = true;
    }

    struct Init {
        string name;
        string symbol;
        uint256 supply;
        uint256 maxSupply; // 0 or == supply: not mintable
        uint256 taxBps;
        address taxWallet;
        address owner;
    }

    function initialize(Init calldata p) external {
        if (_init) revert AlreadyInitialized();
        if (p.taxBps > MAX_TAX_BPS || (p.maxSupply != 0 && p.maxSupply < p.supply)) revert OverMax();
        _init = true;
        _n = p.name;
        _s = p.symbol;
        owner = p.owner;
        maxSupply = p.maxSupply == 0 ? p.supply : p.maxSupply;
        taxBps = p.taxBps;
        taxWallet = p.taxWallet == address(0) ? p.owner : p.taxWallet;
        _mint(p.owner, p.supply);
        emit OwnershipTransferred(address(0), p.owner);
    }

    modifier onlyOwner() {
        if (msg.sender != owner) revert NotOwner();
        _;
    }

    function name() public view override returns (string memory) {
        return _n;
    }

    function symbol() public view override returns (string memory) {
        return _s;
    }

    function mint(address to, uint256 amount) external onlyOwner {
        if (totalSupply() + amount > maxSupply) revert OverMax();
        _mint(to, amount);
    }

    function setTax(uint256 bps, address wallet) external onlyOwner {
        if (bps > taxBps) revert TaxUp();
        taxBps = bps;
        if (wallet != address(0)) taxWallet = wallet;
        emit TaxSet(bps, taxWallet);
    }

    function setPair(address pair, bool v) external onlyOwner {
        isPair[pair] = v;
        emit PairSet(pair, v);
    }

    function transferOwnership(address to) external onlyOwner {
        emit OwnershipTransferred(owner, to);
        owner = to;
    }

    function renounceOwnership() external onlyOwner {
        emit OwnershipTransferred(owner, address(0));
        owner = address(0);
    }

    function _update(address from, address to, uint256 value) internal override {
        uint256 t = taxBps;
        if (t > 0 && from != address(0) && to != address(0) && (isPair[from] || isPair[to]) && from != taxWallet
            && to != taxWallet)
        {
            uint256 tax = (value * t) / 10_000;
            super._update(from, taxWallet, tax);
            value -= tax;
        }
        super._update(from, to, value);
    }
}

/// @title StandardTokenFactory
/// @notice "Create token" without a curve or an Agent ID. Fees in BNB go straight to the treasury; AGNT stakers
///  with perks pay half. Address styles: random (never the curve suffix AAAA) or a vanity suffix 9999.
contract StandardTokenFactory is Ownable2Step, ReentrancyGuard {
    uint160 public constant CURVE_MASK = 0xFFFF;
    uint160 public constant CURVE_SUFFIX = 0xAAAA;
    uint160 public constant VANITY_SUFFIX = 0x9999;
    uint256 public constant MAX_FEE = 0.2 ether;

    address public immutable basicTemplate;
    address public immutable advancedTemplate;
    address public treasury;
    address public perks;
    uint256 public feeRandom = 0.01 ether;
    uint256 public feeVanity = 0.02 ether;
    uint256 public feeAdvanced = 0.05 ether;
    uint256 public feeAdvancedTax = 0.1 ether;

    address[] public allTokens;

    event StandardCreated(
        address indexed token, address indexed creator, uint8 kind, bool vanity, string name, string symbol, uint256 fee
    );
    event FeesSet(uint256 random, uint256 vanity, uint256 advanced, uint256 advancedTax);
    event AddressesSet(address treasury, address perks);

    error FeeTooLow();
    error BadSalt();
    error BadName();
    error OutOfBounds();
    error PayoutFailed();

    constructor(address owner_, address treasury_, address perks_) Ownable(owner_) {
        basicTemplate = address(new BasicToken());
        advancedTemplate = address(new AdvancedToken());
        treasury = treasury_;
        perks = perks_;
    }

    function feeFor(address creator, bool advanced, bool tax, bool vanity) public view returns (uint256 fee) {
        fee = advanced ? (tax ? feeAdvancedTax : feeAdvanced) : (vanity ? feeVanity : feeRandom);
        if (advanced && vanity) fee += feeVanity - feeRandom;
        if (perks != address(0)) {
            try IStakingPerks(perks).hasPerks(creator) returns (bool ok) {
                if (ok) fee /= 2;
            } catch {}
        }
    }

    function predict(bool advanced, bytes32 salt) external view returns (address) {
        return Clones.predictDeterministicAddress(advanced ? advancedTemplate : basicTemplate, salt);
    }

    function initCodeHash(bool advanced) external view returns (bytes32) {
        return keccak256(
            abi.encodePacked(
                hex"3d602d80600a3d3981f3363d3d373d3d3d363d73",
                advanced ? advancedTemplate : basicTemplate,
                hex"5af43d82803e903d91602b57fd5bf3"
            )
        );
    }

    /// @param salt first 20 bytes = the creator (msg.sender)
    function createBasic(string calldata name, string calldata symbol, uint256 supply, bytes32 salt, bool vanity)
        external
        payable
        nonReentrant
        returns (address token)
    {
        _checkName(name, symbol, supply);
        uint256 fee = _fee(msg.sender, false, false, vanity);
        token = _clone(basicTemplate, salt, vanity);
        BasicToken(token).initialize(name, symbol, supply, msg.sender);
        emit StandardCreated(token, msg.sender, 0, vanity, name, symbol, fee);
    }

    function createAdvanced(AdvancedToken.Init calldata p, bytes32 salt, bool vanity)
        external
        payable
        nonReentrant
        returns (address token)
    {
        _checkName(p.name, p.symbol, p.supply);
        uint256 fee = _fee(msg.sender, true, p.taxBps > 0, vanity);
        token = _clone(advancedTemplate, salt, vanity);
        AdvancedToken.Init memory q = p;
        q.owner = msg.sender;
        AdvancedToken(token).initialize(q);
        emit StandardCreated(token, msg.sender, p.taxBps > 0 ? 2 : 1, vanity, p.name, p.symbol, fee);
    }

    function tokenCount() external view returns (uint256) {
        return allTokens.length;
    }

    function setFees(uint256 random_, uint256 vanity_, uint256 advanced_, uint256 advancedTax_) external onlyOwner {
        if (random_ > MAX_FEE || vanity_ > MAX_FEE || advanced_ > MAX_FEE || advancedTax_ > MAX_FEE) revert OutOfBounds();
        if (vanity_ < random_) revert OutOfBounds();
        (feeRandom, feeVanity, feeAdvanced, feeAdvancedTax) = (random_, vanity_, advanced_, advancedTax_);
        emit FeesSet(random_, vanity_, advanced_, advancedTax_);
    }

    function setAddresses(address treasury_, address perks_) external onlyOwner {
        if (treasury_ == address(0)) revert OutOfBounds();
        treasury = treasury_;
        perks = perks_;
        emit AddressesSet(treasury_, perks_);
    }

    function _clone(address template, bytes32 salt, bool vanity) internal returns (address token) {
        if (address(bytes20(salt)) != msg.sender) revert BadSalt();
        token = Clones.cloneDeterministic(template, salt);
        uint160 tail = uint160(token) & CURVE_MASK;
        if (tail == CURVE_SUFFIX || (vanity && tail != VANITY_SUFFIX)) revert BadSalt();
        allTokens.push(token);
    }

    function _fee(address creator, bool advanced, bool tax, bool vanity) internal returns (uint256 fee) {
        fee = feeFor(creator, advanced, tax, vanity);
        if (msg.value < fee) revert FeeTooLow();
        if (fee > 0) {
            (bool ok,) = treasury.call{value: fee}("");
            if (!ok) revert PayoutFailed();
        }
        if (msg.value > fee) {
            (bool ok,) = msg.sender.call{value: msg.value - fee}("");
            if (!ok) revert PayoutFailed();
        }
    }

    function _checkName(string calldata name, string calldata symbol, uint256 supply) internal pure {
        uint256 n = bytes(name).length;
        uint256 s = bytes(symbol).length;
        if (n == 0 || n > 32 || s == 0 || s > 12 || supply == 0 || supply > 1e30 ether) revert BadName();
    }
}

/// @title LiquidityHelper
/// @notice Adds token + BNB liquidity on PancakeSwap V2 for a standard token and either burns the LP tokens or
///  locks them here until a chosen date. Locked LP can only go back to the wallet that locked it, after unlock.
contract LiquidityHelper is ReentrancyGuard {
    using SafeERC20 for IERC20;

    address public constant DEAD = 0x000000000000000000000000000000000000dEaD;
    IPancakeRouter02 public immutable router;

    struct Lock {
        address owner;
        address lp;
        uint256 amount;
        uint64 unlockAt;
    }

    Lock[] public locks;

    event LiquidityAdded(address indexed token, address indexed by, uint256 tokenAmount, uint256 bnbAmount, uint256 lp, bool burned);
    event Locked(uint256 indexed id, address indexed owner, address indexed lp, uint256 amount, uint64 unlockAt);
    event Unlocked(uint256 indexed id, address indexed owner, uint256 amount);

    error NotOwner();
    error StillLocked();
    error BadUnlock();
    error PayoutFailed();

    constructor(address router_) {
        router = IPancakeRouter02(router_);
    }

    /// @param unlockAt 0 = burn the LP forever; otherwise lock it until this time (at least 30 days ahead)
    function addLiquidity(address token, uint256 tokenAmount, uint256 minToken, uint256 minBnb, uint64 unlockAt)
        external
        payable
        nonReentrant
        returns (uint256 lpAmount, uint256 lockId)
    {
        if (unlockAt != 0 && unlockAt < block.timestamp + 30 days) revert BadUnlock();
        IERC20(token).safeTransferFrom(msg.sender, address(this), tokenAmount);
        IERC20(token).forceApprove(address(router), tokenAmount);
        address to = unlockAt == 0 ? DEAD : address(this);
        (uint256 usedToken, uint256 usedBnb, uint256 lp) =
            router.addLiquidityETH{value: msg.value}(token, tokenAmount, minToken, minBnb, to, block.timestamp);
        lpAmount = lp;
        if (usedToken < tokenAmount) IERC20(token).safeTransfer(msg.sender, tokenAmount - usedToken);
        if (usedBnb < msg.value) {
            (bool ok,) = msg.sender.call{value: msg.value - usedBnb}("");
            if (!ok) revert PayoutFailed();
        }
        emit LiquidityAdded(token, msg.sender, usedToken, usedBnb, lp, unlockAt == 0);
        if (unlockAt != 0) {
            address pair = IPancakeFactory(router.factory()).getPair(token, router.WETH());
            lockId = locks.length;
            locks.push(Lock(msg.sender, pair, lp, unlockAt));
            emit Locked(lockId, msg.sender, pair, lp, unlockAt);
        }
    }

    function unlock(uint256 id) external nonReentrant {
        Lock storage l = locks[id];
        if (msg.sender != l.owner) revert NotOwner();
        if (block.timestamp < l.unlockAt) revert StillLocked();
        uint256 amt = l.amount;
        l.amount = 0;
        IERC20(l.lp).safeTransfer(l.owner, amt);
        emit Unlocked(id, l.owner, amt);
    }

    receive() external payable {}
}
