// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {Ownable, Ownable2Step} from "@openzeppelin/contracts/access/Ownable2Step.sol";

/// @title AGNTStaking
/// @notice Stake $AGNT, earn BNB from launchpad fees.
///  - Every BNB that arrives is streamed to stakers over the next 7 days (added to what is still streaming), so
///    staking just before a distribution earns almost nothing and the first staker gets no windfall.
///  - While nobody is staked the stream is held back and re-streamed when someone stakes.
///  - Perks (free launch, vote weight, airdrop multiplier) count only AGNT staked for at least 7 days: any top-up
///    restarts the clock for the whole position. Unstaking is always possible; the owner can only set the perk
///    threshold and can never touch staked AGNT or rewards.
contract AGNTStaking is ReentrancyGuard, Ownable2Step {
    using SafeERC20 for IERC20;

    uint256 public constant DURATION = 7 days;
    uint256 public constant PERK_AGE = 7 days;
    uint256 private constant ACC = 1e18;

    IERC20 public immutable agnt;
    uint256 public totalStaked;
    uint256 public rewardRate; // BNB wei per second, scaled by ACC
    uint256 public periodFinish;
    uint256 public lastUpdate;
    uint256 public rewardPerTokenStored;
    uint256 public heldBack; // stream that passed while nobody was staked (scaled by ACC)
    uint256 public totalBnbReceived;
    uint256 public perkThreshold;

    struct Position {
        uint256 amount;
        uint256 paidPerToken;
        uint256 owed;
        uint64 since;
    }

    mapping(address => Position) public positions;

    event Staked(address indexed user, uint256 amount);
    event Unstaked(address indexed user, uint256 amount);
    event Claimed(address indexed user, uint256 bnb);
    event RewardAdded(uint256 bnb, uint256 rate, uint256 periodFinish);
    event PerkThresholdSet(uint256 amount);

    error ZeroAmount();
    error TooMuch();
    error TransferFailed();

    constructor(address agnt_, address owner_, uint256 perkThreshold_) Ownable(owner_) {
        agnt = IERC20(agnt_);
        perkThreshold = perkThreshold_;
    }

    // ------------------------------------------------------------ stream
    function lastApplicable() public view returns (uint256) {
        return block.timestamp < periodFinish ? block.timestamp : periodFinish;
    }

    function rewardPerToken() public view returns (uint256) {
        if (totalStaked == 0) return rewardPerTokenStored;
        return rewardPerTokenStored + ((lastApplicable() - lastUpdate) * rewardRate) / totalStaked;
    }

    function _update(address user) internal {
        uint256 t = lastApplicable();
        if (totalStaked == 0) {
            if (t > lastUpdate) heldBack += (t - lastUpdate) * rewardRate;
        } else {
            rewardPerTokenStored += ((t - lastUpdate) * rewardRate) / totalStaked;
        }
        lastUpdate = t;
        if (user != address(0)) {
            Position storage p = positions[user];
            p.owed += (p.amount * (rewardPerTokenStored - p.paidPerToken)) / ACC;
            p.paidPerToken = rewardPerTokenStored;
        }
    }

    /// @notice Add BNB to the stream (the fee splitter calls this). Anyone may add rewards.
    function notifyRewardBnb() external payable {
        if (msg.value == 0) revert ZeroAmount();
        _update(address(0));
        _restream(msg.value * ACC);
        totalBnbReceived += msg.value;
    }

    function _restream(uint256 addScaled) internal {
        uint256 remaining = block.timestamp < periodFinish ? (periodFinish - block.timestamp) * rewardRate : 0;
        uint256 pool = remaining + addScaled;
        if (totalStaked > 0) {
            pool += heldBack;
            heldBack = 0;
        }
        rewardRate = pool / DURATION;
        lastUpdate = block.timestamp;
        periodFinish = block.timestamp + DURATION;
        emit RewardAdded(addScaled / ACC, rewardRate, periodFinish);
    }

    // ------------------------------------------------------------ stake
    function stake(uint256 amount) external nonReentrant {
        if (amount == 0) revert ZeroAmount();
        _update(msg.sender);
        bool wasEmpty = totalStaked == 0;
        agnt.safeTransferFrom(msg.sender, address(this), amount);
        Position storage p = positions[msg.sender];
        p.amount += amount;
        p.since = uint64(block.timestamp);
        totalStaked += amount;
        if (wasEmpty && heldBack > 0) _restream(0);
        emit Staked(msg.sender, amount);
    }

    function unstake(uint256 amount) external nonReentrant {
        Position storage p = positions[msg.sender];
        if (amount == 0) revert ZeroAmount();
        if (amount > p.amount) revert TooMuch();
        _update(msg.sender);
        p.amount -= amount;
        totalStaked -= amount;
        agnt.safeTransfer(msg.sender, amount);
        emit Unstaked(msg.sender, amount);
    }

    function claim() external nonReentrant {
        _update(msg.sender);
        Position storage p = positions[msg.sender];
        uint256 amt = p.owed;
        if (amt == 0) revert ZeroAmount();
        p.owed = 0;
        (bool ok,) = msg.sender.call{value: amt}("");
        if (!ok) revert TransferFailed();
        emit Claimed(msg.sender, amt);
    }

    // ------------------------------------------------------------ views
    function pendingBnb(address user) external view returns (uint256) {
        Position storage p = positions[user];
        return p.owed + (p.amount * (rewardPerToken() - p.paidPerToken)) / ACC;
    }

    /// @notice AGNT that counts for perks and votes: the position, once it is at least 7 days old.
    function maturedStake(address user) public view returns (uint256) {
        Position storage p = positions[user];
        return p.amount > 0 && block.timestamp >= p.since + PERK_AGE ? p.amount : 0;
    }

    function hasPerks(address user) external view returns (bool) {
        uint256 m = maturedStake(user);
        return perkThreshold > 0 && m >= perkThreshold;
    }

    function setPerkThreshold(uint256 amount) external onlyOwner {
        perkThreshold = amount;
        emit PerkThresholdSet(amount);
    }
}
