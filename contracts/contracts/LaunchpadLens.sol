// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";
import {AgentLaunchpad} from "./AgentLaunchpad.sol";
import {IGraduationAdapter} from "./interfaces/IPancake.sol";

/// @title LaunchpadLens
/// @notice Read-only helpers for sites, the CLI and agents: quotes, prices, progress and lists. It holds no funds
///         and has no owner; it reproduces the launchpad's curve math exactly (tests compare both).
contract LaunchpadLens {
    uint256 public constant FEE_BPS = 100;
    uint256 public constant BPS = 10_000;
    uint256 public constant CURVE_SUPPLY = 800_000_000 ether;

    AgentLaunchpad public immutable launchpad;

    error UnknownToken();
    error AlreadyGraduated();

    constructor(address payable launchpad_) {
        launchpad = AgentLaunchpad(launchpad_);
    }

    function _live(address token) internal view returns (AgentLaunchpad.Curve memory c) {
        c = launchpad.curves(token);
        if (c.creator == address(0)) revert UnknownToken();
        if (c.graduated) revert AlreadyGraduated();
    }

    /// @return tokensOut tokens received · bnbUsed gross BNB spent (fee included) · fee · refund
    function quoteBuy(address token, address buyer, uint256 bnbGross)
        external
        view
        returns (uint256 tokensOut, uint256 bnbUsed, uint256 fee, uint256 refund)
    {
        AgentLaunchpad.Curve memory c = _live(token);
        uint256 room = launchpad.walletRoom(token, buyer);
        uint256 fullFee = (bnbGross * FEE_BPS) / BPS;
        uint256 net = bnbGross - fullFee;
        uint256 cap = Math.min(room, CURVE_SUPPLY - c.tokensSold);
        if (cap == 0) return (0, 0, 0, bnbGross);
        tokensOut = _tokensOut(c, net);
        uint256 netUsed;
        if (tokensOut > cap) {
            tokensOut = cap;
            netUsed = _bnbInFor(c, tokensOut);
            if (netUsed > net) netUsed = net;
            fee = Math.mulDiv(netUsed, FEE_BPS, BPS - FEE_BPS, Math.Rounding.Ceil);
            if (netUsed + fee > bnbGross) fee = bnbGross - netUsed;
        } else {
            netUsed = net;
            fee = fullFee;
        }
        refund = bnbGross - netUsed - fee;
        bnbUsed = netUsed + fee;
    }

    function quoteSell(address token, uint256 tokensIn) external view returns (uint256 bnbOut, uint256 fee) {
        AgentLaunchpad.Curve memory c = _live(token);
        uint256 x = c.virtualBnb + c.realBnb;
        uint256 y = c.virtualToken - c.tokensSold;
        uint256 gross = x - Math.ceilDiv(c.virtualBnb * c.virtualToken, y + tokensIn);
        if (gross > c.realBnb) gross = c.realBnb;
        fee = (gross * FEE_BPS) / BPS;
        bnbOut = gross - fee;
    }

    /// @notice Current price in BNB per whole token, scaled by 1e18.
    function spotPrice(address token) external view returns (uint256) {
        AgentLaunchpad.Curve memory c = launchpad.curves(token);
        if (c.creator == address(0)) revert UnknownToken();
        return Math.mulDiv(c.virtualBnb + c.realBnb, 1e18, c.virtualToken - c.tokensSold);
    }

    function progressBps(address token) external view returns (uint256) {
        AgentLaunchpad.Curve memory c = launchpad.curves(token);
        if (c.graduated) return BPS;
        return (c.tokensSold * BPS) / CURVE_SUPPLY;
    }

    function routerOf(address token) external view returns (address) {
        address a = launchpad.curves(token).adapter;
        return a == address(0) ? address(0) : IGraduationAdapter(a).router();
    }

    function tokensSlice(uint256 offset, uint256 limit) external view returns (address[] memory out) {
        uint256 n = launchpad.tokenCount();
        if (offset >= n) return new address[](0);
        uint256 end = Math.min(n, offset + limit);
        out = new address[](end - offset);
        for (uint256 i = offset; i < end; i++) out[i - offset] = launchpad.allTokens(i);
    }

    function _tokensOut(AgentLaunchpad.Curve memory c, uint256 bnbIn) internal pure returns (uint256) {
        uint256 x = c.virtualBnb + c.realBnb;
        uint256 y = c.virtualToken - c.tokensSold;
        return y - Math.ceilDiv(c.virtualBnb * c.virtualToken, x + bnbIn);
    }

    function _bnbInFor(AgentLaunchpad.Curve memory c, uint256 tokensOut) internal pure returns (uint256) {
        uint256 x = c.virtualBnb + c.realBnb;
        uint256 y = c.virtualToken - c.tokensSold;
        return Math.ceilDiv(c.virtualBnb * c.virtualToken, y - tokensOut) - x;
    }
}
