// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

/// @notice Minimal PancakeSwap V2 interfaces used by Agentic Starter.
interface IPancakeFactory {
    function getPair(address tokenA, address tokenB) external view returns (address pair);
    function createPair(address tokenA, address tokenB) external returns (address pair);
}

interface IPancakeRouter02 {
    function factory() external view returns (address);
    function WETH() external view returns (address);

    function addLiquidityETH(
        address token,
        uint256 amountTokenDesired,
        uint256 amountTokenMin,
        uint256 amountETHMin,
        address to,
        uint256 deadline
    ) external payable returns (uint256 amountToken, uint256 amountETH, uint256 liquidity);

    function swapExactETHForTokensSupportingFeeOnTransferTokens(
        uint256 amountOutMin,
        address[] calldata path,
        address to,
        uint256 deadline
    ) external payable;
}

interface IPancakePair {
    function mint(address to) external returns (uint256 liquidity);
}

interface IWBNB {
    function deposit() external payable;
    function transfer(address to, uint256 value) external returns (bool);
}

/// @notice Anything that answers balanceOf(address) > 0 for verified agents
///         (for example a soulbound Agent ID NFT).
interface IAgentRegistry {
    function balanceOf(address owner) external view returns (uint256);
}

/// @notice The launchpad's agent check. Implementations decide what counts as a verified agent.
interface IAgentGate {
    function isAgent(address account) external view returns (bool);
}

interface IRewardReceiver {
    function notifyRewardBnb() external payable;
}

/// @notice Moves a graduating token's liquidity to a DEX. The launchpad sends the tokens first, then calls with the
///         BNB as value. The adapter must lock or burn the LP so the liquidity can never be pulled.
interface IGraduationAdapter {
    function router() external view returns (address);
    function graduate(address token, uint256 tokenAmount) external payable returns (address pair);
}

/// @notice Staker perks (free launch) read by the launchpad.
interface IStakingPerks {
    function hasPerks(address account) external view returns (bool);
}

/// @notice Holds creator-fee shares named for an X or GitHub account until the account's owner claims them.
interface IAccountFeeEscrow {
    function credit(address token, bytes32 account) external payable;
}
