// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

/// @title IgniteBoard
/// @notice "Ignite": burn tokens and post a short public message, forever on-chain.
///         Works with $AGNT and with any Agentic Starter token (launch tokens allow burns
///         even before graduation). The more you burn, the higher the message ranks.
///         No owner, no fee, nothing to withdraw: tokens go straight to the burn address.
contract IgniteBoard {
    using SafeERC20 for IERC20;

    address public constant DEAD = 0x000000000000000000000000000000000000dEaD;
    uint256 public constant MAX_MESSAGE = 140;

    uint256 public count;
    mapping(address => uint256) public totalBurned; // per token

    event Ignited(
        uint256 indexed id, address indexed token, address indexed from, uint256 amount, string message, uint256 replyTo
    );

    error EmptyBurn();
    error MessageTooLong();
    error BadReply();

    /// @param replyTo id of an earlier ignite this one answers, or 0.
    function ignite(address token, uint256 amount, string calldata message, uint256 replyTo)
        external
        returns (uint256 id)
    {
        if (amount == 0) revert EmptyBurn();
        if (bytes(message).length > MAX_MESSAGE) revert MessageTooLong();
        if (replyTo > count) revert BadReply();
        IERC20(token).safeTransferFrom(msg.sender, DEAD, amount);
        totalBurned[token] += amount;
        id = ++count;
        emit Ignited(id, token, msg.sender, amount, message, replyTo);
    }
}
