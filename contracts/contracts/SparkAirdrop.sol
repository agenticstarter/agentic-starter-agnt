// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Ownable, Ownable2Step} from "@openzeppelin/contracts/access/Ownable2Step.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {MerkleProof} from "@openzeppelin/contracts/utils/cryptography/MerkleProof.sol";

/// @title SparkAirdrop
/// @notice Seasonal $AGNT airdrops for Spark Points. Each season has its own Merkle root
///         (leaf = keccak256(bytes.concat(keccak256(abi.encode(account, amount))))) and a claim deadline,
///         after which unclaimed tokens return to the community pool.
contract SparkAirdrop is Ownable2Step {
    using SafeERC20 for IERC20;

    IERC20 public immutable agnt;
    address public communityPool;

    struct Season {
        bytes32 root;
        uint256 total;
        uint256 claimed;
        uint64 deadline;
        bool swept;
    }

    mapping(uint256 => Season) public seasons;
    mapping(uint256 => mapping(address => bool)) public hasClaimed;
    uint256 public seasonCount;

    event SeasonOpened(uint256 indexed season, bytes32 root, uint256 total, uint64 deadline);
    event Claimed(uint256 indexed season, address indexed account, uint256 amount);
    event Swept(uint256 indexed season, uint256 amount);

    error BadSeason();
    error Expired();
    error AlreadyClaimed();
    error BadProof();
    error NotExpired();

    constructor(address agnt_, address communityPool_) Ownable(msg.sender) {
        agnt = IERC20(agnt_);
        communityPool = communityPool_;
    }

    /// @notice Pull `total` AGNT from the owner and open a new season.
    function openSeason(bytes32 root, uint256 total, uint64 deadline) external onlyOwner returns (uint256 id) {
        if (deadline <= block.timestamp || root == bytes32(0)) revert BadSeason();
        id = ++seasonCount;
        seasons[id] = Season({root: root, total: total, claimed: 0, deadline: deadline, swept: false});
        agnt.safeTransferFrom(msg.sender, address(this), total);
        emit SeasonOpened(id, root, total, deadline);
    }

    function claim(uint256 season, uint256 amount, bytes32[] calldata proof) external {
        _claim(season, msg.sender, amount, proof);
    }

    /// @notice Anyone may submit a claim for `account`; tokens always go to `account`.
    function claimFor(uint256 season, address account, uint256 amount, bytes32[] calldata proof) external {
        _claim(season, account, amount, proof);
    }

    function _claim(uint256 season, address account, uint256 amount, bytes32[] calldata proof) internal {
        Season storage s = seasons[season];
        if (s.root == bytes32(0)) revert BadSeason();
        if (block.timestamp > s.deadline) revert Expired();
        if (hasClaimed[season][account]) revert AlreadyClaimed();
        bytes32 leaf = keccak256(bytes.concat(keccak256(abi.encode(account, amount))));
        if (!MerkleProof.verifyCalldata(proof, s.root, leaf)) revert BadProof();
        hasClaimed[season][account] = true;
        s.claimed += amount;
        agnt.safeTransfer(account, amount);
        emit Claimed(season, account, amount);
    }

    function sweep(uint256 season) external {
        Season storage s = seasons[season];
        if (s.root == bytes32(0) || s.swept) revert BadSeason();
        if (block.timestamp <= s.deadline) revert NotExpired();
        s.swept = true;
        uint256 left = s.total - s.claimed;
        if (left > 0) agnt.safeTransfer(communityPool, left);
        emit Swept(season, left);
    }

    function setCommunityPool(address pool) external onlyOwner {
        communityPool = pool;
    }
}
