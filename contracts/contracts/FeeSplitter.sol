// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Ownable, Ownable2Step} from "@openzeppelin/contracts/access/Ownable2Step.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {IPancakeRouter02, IRewardReceiver} from "./interfaces/IPancake.sol";

/// @title FeeSplitter
/// @notice Receives the platform part of the launchpad's curve fees in BNB and splits it. The creator's 20% of the
///         curve fee is paid by the launchpad directly, so this contract receives the other 80% and splits it
///         50% / 37.5% / 12.5%: AGNT buyback and burn, AGNT stakers, operations treasury. Of the whole curve fee that
///         is 40% / 30% / 10%. The treasury share is capped at 40% of what this contract receives.
contract FeeSplitter is Ownable2Step, ReentrancyGuard {
    address public constant DEAD = 0x000000000000000000000000000000000000dEaD;
    uint256 public constant BPS = 10_000;
    uint256 public constant MAX_TREASURY_BPS = 4_000;

    IPancakeRouter02 public immutable router;
    address public agnt;
    address public staking;
    address public treasury;
    address public keeper;

    uint256 public buybackBps = 5_000;
    uint256 public stakersBps = 3_750;
    uint256 public treasuryBps = 1_250;

    uint256 public totalBurnedAgnt;
    uint256 public totalBnbToBuyback;
    uint256 public totalBnbToStakers;
    uint256 public totalBnbToTreasury;

    event Distributed(uint256 bnbIn, uint256 buybackBnb, uint256 agntBurned, uint256 stakersBnb, uint256 treasuryBnb);
    event SharesSet(uint256 buybackBps, uint256 stakersBps, uint256 treasuryBps);
    event AddressesSet(address agnt, address staking, address treasury, address keeper);

    error BadShares();
    error NotKeeper();
    error NothingToSplit();
    error TransferFailed();

    constructor(address router_, address treasury_) Ownable(msg.sender) {
        router = IPancakeRouter02(router_);
        treasury = treasury_;
        keeper = msg.sender;
    }

    receive() external payable {}

    function setAddresses(address agnt_, address staking_, address treasury_, address keeper_) external onlyOwner {
        agnt = agnt_;
        staking = staking_;
        treasury = treasury_;
        keeper = keeper_;
        emit AddressesSet(agnt_, staking_, treasury_, keeper_);
    }

    function setShares(uint256 buyback_, uint256 stakers_, uint256 treasury_) external onlyOwner {
        if (buyback_ + stakers_ + treasury_ != BPS || treasury_ > MAX_TREASURY_BPS) revert BadShares();
        buybackBps = buyback_;
        stakersBps = stakers_;
        treasuryBps = treasury_;
        emit SharesSet(buyback_, stakers_, treasury_);
    }

    /// @notice Split the current balance. Keeper-only because the buyback needs a fair `minAgntOut`.
    ///         Before $AGNT is listed (agnt or staking unset) those shares wait in this contract.
    function distribute(uint256 minAgntOut) external nonReentrant {
        _distribute(minAgntOut, type(uint256).max);
    }

    /// @notice Same as distribute, but splits at most `maxBnb` this time, so large balances are bought back in
    ///         smaller pieces (less price impact, less room for sandwiches).
    function distributeUpTo(uint256 minAgntOut, uint256 maxBnb) external nonReentrant {
        _distribute(minAgntOut, maxBnb);
    }

    function _distribute(uint256 minAgntOut, uint256 maxBnb) internal {
        if (msg.sender != keeper && msg.sender != owner()) revert NotKeeper();
        uint256 bal = address(this).balance;
        if (bal > maxBnb) bal = maxBnb;
        if (bal == 0) revert NothingToSplit();

        uint256 toBuyback = (bal * buybackBps) / BPS;
        uint256 toStakers = (bal * stakersBps) / BPS;
        uint256 toTreasury = bal - toBuyback - toStakers;

        uint256 burned;
        if (agnt != address(0) && toBuyback > 0) {
            address[] memory path = new address[](2);
            path[0] = router.WETH();
            path[1] = agnt;
            uint256 before = _balanceOf(agnt, DEAD);
            router.swapExactETHForTokensSupportingFeeOnTransferTokens{value: toBuyback}(
                minAgntOut, path, DEAD, block.timestamp
            );
            burned = _balanceOf(agnt, DEAD) - before;
            totalBurnedAgnt += burned;
            totalBnbToBuyback += toBuyback;
        } else {
            toBuyback = 0;
        }

        if (staking != address(0) && toStakers > 0) {
            IRewardReceiver(staking).notifyRewardBnb{value: toStakers}();
            totalBnbToStakers += toStakers;
        } else {
            toStakers = 0;
        }

        (bool ok,) = treasury.call{value: toTreasury}("");
        if (!ok) revert TransferFailed();
        totalBnbToTreasury += toTreasury;

        emit Distributed(bal, toBuyback, burned, toStakers, toTreasury);
    }

    function _balanceOf(address token, address who) internal view returns (uint256 b) {
        (bool ok, bytes memory data) = token.staticcall(abi.encodeWithSignature("balanceOf(address)", who));
        if (ok && data.length >= 32) b = abi.decode(data, (uint256));
    }
}
