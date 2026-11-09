// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {ERC20} from "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import {ERC20Burnable} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import {ERC20Permit} from "@openzeppelin/contracts/token/ERC20/extensions/ERC20Permit.sol";

/// @title AGNT — the Agentic Starter platform token
/// @notice Fixed supply of 1,000,000,000. No mint function, no tax, no owner.
contract AGNTToken is ERC20, ERC20Burnable, ERC20Permit {
    uint256 public constant TOTAL_SUPPLY = 1_000_000_000 ether;

    constructor(address recipient) ERC20("Agentic Starter", "AGNT") ERC20Permit("Agentic Starter") {
        _mint(recipient, TOTAL_SUPPLY);
    }
}
