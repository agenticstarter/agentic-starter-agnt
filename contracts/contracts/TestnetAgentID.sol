// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

/// @title TestnetAgentID
/// @notice Agent ID registry for BNB testnet only. Anyone can call `claim()` to get an Agent ID,
///  so testers can buy on the curve. On mainnet the launchpad points at the real Agent ID registry.
contract TestnetAgentID {
    address public immutable owner;
    mapping(address => uint256) public balanceOf;

    event Granted(address indexed agent);

    constructor() {
        owner = msg.sender;
    }

    function claim() external {
        _grant(msg.sender);
    }

    function grant(address[] calldata agents) external {
        require(msg.sender == owner, "owner only");
        for (uint256 i; i < agents.length; i++) _grant(agents[i]);
    }

    function _grant(address a) internal {
        if (balanceOf[a] == 0) {
            balanceOf[a] = 1;
            emit Granted(a);
        }
    }
}
