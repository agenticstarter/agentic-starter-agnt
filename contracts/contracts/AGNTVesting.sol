// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Ownable, Ownable2Step} from "@openzeppelin/contracts/access/Ownable2Step.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

/// @title AGNTVesting
/// @notice Linear vesting with a cliff for the team, ecosystem and treasury allocations.
///         Nothing is released before `start + cliff`; everything is released by `start + duration`.
/// @dev `start` is the planned TGE. Contracts are deployed before the listing date is final, so the owner may move
///      `start` later (never earlier) until vesting begins. Anyone can call `release`; tokens always go to the
///      beneficiary.
contract AGNTVesting is Ownable2Step {
    using SafeERC20 for IERC20;

    address public immutable beneficiary;
    uint64 public immutable duration;
    uint64 public immutable cliff;
    uint64 public start;

    mapping(address => uint256) public released;

    event Released(address indexed token, uint256 amount);
    event StartPostponed(uint64 oldStart, uint64 newStart);

    error ZeroAddress();
    error BadSchedule();
    error AlreadyStarted();
    error NotLater();

    constructor(address beneficiary_, uint64 start_, uint64 duration_, uint64 cliff_, address owner_)
        Ownable(owner_)
    {
        if (beneficiary_ == address(0)) revert ZeroAddress();
        if (cliff_ > duration_ || duration_ == 0) revert BadSchedule();
        beneficiary = beneficiary_;
        start = start_;
        duration = duration_;
        cliff = cliff_;
    }

    /// @notice Push the start (planned TGE) to a later time. Only before vesting has begun.
    function postponeStart(uint64 newStart) external onlyOwner {
        if (block.timestamp >= start) revert AlreadyStarted();
        if (newStart <= start) revert NotLater();
        emit StartPostponed(start, newStart);
        start = newStart;
    }

    function end() public view returns (uint256) {
        return uint256(start) + duration;
    }

    function vestedAmount(address token, uint64 timestamp) public view returns (uint256) {
        uint256 total = IERC20(token).balanceOf(address(this)) + released[token];
        if (timestamp < uint256(start) + cliff) return 0;
        if (timestamp >= end()) return total;
        return (total * (timestamp - start)) / duration;
    }

    function releasable(address token) public view returns (uint256) {
        return vestedAmount(token, uint64(block.timestamp)) - released[token];
    }

    function release(address token) external {
        uint256 amount = releasable(token);
        released[token] += amount;
        emit Released(token, amount);
        IERC20(token).safeTransfer(beneficiary, amount);
    }
}
