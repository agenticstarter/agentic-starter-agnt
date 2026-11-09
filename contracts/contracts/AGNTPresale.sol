// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Ownable, Ownable2Step} from "@openzeppelin/contracts/access/Ownable2Step.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

/// @title AGNTPresale (model "250+")
/// @notice $AGNT presale paid in BNB with a price floor and no hard cap.
///  - `saleTokens` (250M AGNT) are deposited in this contract before the sale opens.
///  - Up to `floorCap` raised (250 BNB) everyone buys at the floor (1 BNB = 1,000,000 AGNT). Above it the
///    250M are shared pro rata to the BNB contributed, so the price rises with every BNB.
///  - Below `softCap` (50 BNB) the sale fails and every buyer refunds themselves. The owner can also open refund
///    mode before or after finalize (after finalize the BNB must be sent back in the same call).
///  - Each wallet contributes between `minBuy` and `maxBuy` (0.05-5 BNB) in total; the excess is refunded.
///  - Contributions in the first `bonusWindow` (48 h) earn +`bonusBps` (10%) AGNT, paid from a bonus pool the
///    Community Safe deposits before claims open; the pool is capped at `bonusCap` (25M), pro rata above the cap.
///  - BNB enters only through contribute(); a plain transfer reverts.
///  - finalize() sends the raised BNB to the project Safe and burns the unsold sale tokens forever.
///  - Allocations round down; the rounding dust stays locked in this contract.
contract AGNTPresale is Ownable2Step, ReentrancyGuard {
    using SafeERC20 for IERC20;

    address public constant DEAD = 0x000000000000000000000000000000000000dEaD;
    uint256 public constant BPS = 10_000;

    IERC20 public immutable agnt;
    address public immutable projectWallet;
    uint256 public immutable floorRate; // AGNT (wei) per 1 BNB (wei) at the floor
    uint256 public immutable saleTokens;
    uint256 public immutable floorCap; // BNB raised at which saleTokens are sold at the floor
    uint256 public immutable softCap;
    uint256 public immutable minBuy;
    uint256 public immutable maxBuy;
    uint256 public immutable bonusBps;
    uint256 public immutable bonusCap;
    uint256 public immutable bonusWindow;

    uint64 public startTime;
    uint64 public endTime;

    uint256 public totalRaised;
    uint256 public totalEarly;
    uint256 public contributors;
    uint256 public totalClaimed;
    uint256 public totalRefunded;
    uint256 public burnedUnsold;
    bool public finalized;
    bool public claimOpen;
    bool public refundsOpen;

    mapping(address => uint256) public contributed;
    mapping(address => uint256) public early;
    mapping(address => bool) public claimed;

    event Contributed(address indexed buyer, uint256 bnb, uint256 refunded, bool early);
    event Referred(address indexed buyer, address indexed referrer, uint256 bnb);
    event Finalized(uint256 raised, address indexed projectWallet, uint256 unsoldBurned);
    event ClaimOpened(uint256 tokensRequired);
    event Claimed(address indexed buyer, uint256 tokens, uint256 bonus);
    event Refunded(address indexed buyer, uint256 bnb);
    event RefundsOpened(uint256 bnbDeposited);
    event ScheduleSet(uint64 start, uint64 end);

    error NotOpen();
    error BelowMin();
    error WalletCapReached();
    error CannotFinalize();
    error ClaimNotOpen();
    error AlreadyClaimed();
    error NothingToClaim();
    error NotRefundable();
    error NothingToRefund();
    error BadConfig();
    error AlreadyStarted();
    error TransferFailed();
    error InsufficientTokens();
    error InsufficientBnb();

    struct Config {
        address agnt;
        address projectWallet;
        uint256 floorRate;
        uint256 saleTokens;
        uint256 softCap;
        uint256 minBuy;
        uint256 maxBuy;
        uint256 bonusBps;
        uint256 bonusCap;
        uint256 bonusWindow;
        uint64 startTime;
        uint64 endTime;
    }

    constructor(Config memory c) Ownable(msg.sender) {
        if (c.projectWallet == address(0) || c.agnt == address(0) || c.floorRate == 0 || c.saleTokens == 0) {
            revert BadConfig();
        }
        if (c.startTime >= c.endTime || c.minBuy > c.maxBuy || c.bonusBps > 5_000) revert BadConfig();
        agnt = IERC20(c.agnt);
        projectWallet = c.projectWallet;
        floorRate = c.floorRate;
        saleTokens = c.saleTokens;
        floorCap = (c.saleTokens * 1 ether) / c.floorRate;
        if (c.softCap > floorCap) revert BadConfig();
        softCap = c.softCap;
        minBuy = c.minBuy;
        maxBuy = c.maxBuy;
        bonusBps = c.bonusBps;
        bonusCap = c.bonusCap;
        bonusWindow = c.bonusWindow;
        startTime = c.startTime;
        endTime = c.endTime;
    }

    // ------------------------------------------------------------ views
    /// @return 0 upcoming · 1 live · 2 ended (awaiting finalize) · 3 finalized (awaiting listing)
    ///         · 4 claim open · 5 refunds (sale failed or refund mode opened)
    function phase() public view returns (uint8) {
        if (refundsOpen) return 5;
        if (claimOpen) return 4;
        if (finalized) return 3;
        if (block.timestamp < startTime) return 0;
        if (block.timestamp < endTime) return 1;
        if (totalRaised < softCap) return 5;
        return 2;
    }

    function failed() public view returns (bool) {
        return !finalized && !refundsOpen && block.timestamp >= endTime && totalRaised < softCap;
    }

    /// @notice AGNT (wei) per 1 BNB right now: the floor up to floorCap, then saleTokens / raised.
    function currentRate() public view returns (uint256) {
        if (totalRaised <= floorCap) return floorRate;
        return Math.mulDiv(saleTokens, 1 ether, totalRaised);
    }

    /// @notice Sale tokens sold so far (at most saleTokens).
    function tokensSold() public view returns (uint256) {
        return totalRaised <= floorCap ? (totalRaised * floorRate) / 1 ether : saleTokens;
    }

    function _tokensForBnb(uint256 bnb) internal view returns (uint256) {
        if (totalRaised <= floorCap) return (bnb * floorRate) / 1 ether;
        return Math.mulDiv(bnb, saleTokens, totalRaised);
    }

    /// @notice The whole bonus pool owed: 10% of the AGNT bought in the first 48 h, at most bonusCap.
    function bonusPool() public view returns (uint256) {
        return Math.min((_tokensForBnb(totalEarly) * bonusBps) / BPS, bonusCap);
    }

    function tokensFor(address buyer) public view returns (uint256) {
        return _tokensForBnb(contributed[buyer]);
    }

    function bonusFor(address buyer) public view returns (uint256) {
        uint256 e = early[buyer];
        if (e == 0) return 0;
        uint256 raw = (_tokensForBnb(e) * bonusBps) / BPS;
        uint256 rawTotal = (_tokensForBnb(totalEarly) * bonusBps) / BPS;
        if (rawTotal <= bonusCap) return raw;
        return Math.mulDiv(raw, bonusCap, rawTotal);
    }

    /// @notice What `amount` BNB more from `buyer` would receive at the current total (simulator).
    function simulate(address buyer, uint256 amount) external view returns (uint256 accepted, uint256 tokens) {
        uint256 already = contributed[buyer];
        uint256 room = maxBuy > already ? maxBuy - already : 0;
        accepted = Math.min(amount, room);
        uint256 raised = totalRaised + accepted;
        uint256 mine = already + accepted;
        tokens = raised <= floorCap ? (mine * floorRate) / 1 ether : Math.mulDiv(mine, saleTokens, raised);
    }

    // ------------------------------------------------------------ buy
    function contribute() external payable nonReentrant {
        _contribute(address(0));
    }

    function contributeWithRef(address referrer) external payable nonReentrant {
        _contribute(referrer);
    }

    function _contribute(address referrer) internal {
        if (phase() != 1) revert NotOpen();
        uint256 already = contributed[msg.sender];
        if (already == 0 && msg.value < minBuy) revert BelowMin();
        uint256 room = maxBuy > already ? maxBuy - already : 0;
        if (room == 0) revert WalletCapReached();
        uint256 accepted = Math.min(msg.value, room);
        uint256 excess = msg.value - accepted;

        if (already == 0) contributors++;
        contributed[msg.sender] = already + accepted;
        totalRaised += accepted;
        bool isEarly = block.timestamp < startTime + bonusWindow;
        if (isEarly) {
            early[msg.sender] += accepted;
            totalEarly += accepted;
        }
        emit Contributed(msg.sender, accepted, excess, isEarly);
        if (referrer != address(0) && referrer != msg.sender) emit Referred(msg.sender, referrer, accepted);

        if (excess > 0) {
            (bool ok,) = msg.sender.call{value: excess}("");
            if (!ok) revert TransferFailed();
        }
    }

    receive() external payable {
        revert NotOpen();
    }

    // ------------------------------------------------------------ settle
    /// @notice Sends the raised BNB to the project Safe and burns the unsold sale tokens. Only after the sale
    ///  ended at or above the soft cap. The sale tokens must be in this contract.
    function finalize() external onlyOwner nonReentrant {
        if (phase() != 2) revert CannotFinalize();
        if (agnt.balanceOf(address(this)) < saleTokens) revert InsufficientTokens();
        finalized = true;
        uint256 unsold = saleTokens - tokensSold();
        burnedUnsold = unsold;
        if (unsold > 0) agnt.safeTransfer(DEAD, unsold);
        uint256 amount = address(this).balance;
        (bool ok,) = projectWallet.call{value: amount}("");
        if (!ok) revert TransferFailed();
        emit Finalized(totalRaised, projectWallet, unsold);
    }

    /// @notice Opens claims at listing. The contract must hold every token sold plus the bonus pool.
    function openClaim() external onlyOwner {
        if (!finalized || claimOpen || refundsOpen) revert CannotFinalize();
        uint256 need = tokensSold() + bonusPool() - totalClaimed;
        if (agnt.balanceOf(address(this)) < need) revert InsufficientTokens();
        claimOpen = true;
        emit ClaimOpened(need);
    }

    function claim() external nonReentrant {
        if (!claimOpen) revert ClaimNotOpen();
        if (claimed[msg.sender]) revert AlreadyClaimed();
        uint256 amt = tokensFor(msg.sender);
        if (amt == 0) revert NothingToClaim();
        uint256 bonus = bonusFor(msg.sender);
        claimed[msg.sender] = true;
        totalClaimed += amt + bonus;
        agnt.safeTransfer(msg.sender, amt + bonus);
        emit Claimed(msg.sender, amt, bonus);
    }

    function refund() external nonReentrant {
        if (phase() != 5) revert NotRefundable();
        uint256 amt = contributed[msg.sender];
        if (amt == 0) revert NothingToRefund();
        contributed[msg.sender] = 0;
        totalRefunded += amt;
        (bool ok,) = msg.sender.call{value: amt}("");
        if (!ok) revert TransferFailed();
        emit Refunded(msg.sender, amt);
    }

    // ------------------------------------------------------------ admin
    /// @notice Refund mode for every buyer, not possible once claims are open. After finalize the caller must
    ///  send back enough BNB with this call so every buyer can be refunded in full.
    function openRefunds() external payable onlyOwner {
        if (claimOpen || refundsOpen) revert NotRefundable();
        if (address(this).balance < totalRaised - totalRefunded) revert InsufficientBnb();
        refundsOpen = true;
        emit RefundsOpened(msg.value);
    }

    function setSchedule(uint64 start, uint64 end) external onlyOwner {
        if (block.timestamp >= startTime) revert AlreadyStarted();
        if (!(block.timestamp < start && start < end)) revert BadConfig();
        startTime = start;
        endTime = end;
        emit ScheduleSet(start, end);
    }

    /// @notice Return AGNT beyond what buyers can still claim to the project wallet (for example the sale tokens
    ///  after a failed sale, or bonus deposited above the pool).
    function sweepSurplus() external onlyOwner {
        uint256 owed;
        if (phase() != 5 && (finalized || claimOpen)) owed = tokensSold() + bonusPool() - totalClaimed;
        else if (phase() != 5) owed = saleTokens; // sale tokens stay locked until finalize or failure
        uint256 bal = agnt.balanceOf(address(this));
        if (bal > owed) agnt.safeTransfer(projectWallet, bal - owed);
    }
}
