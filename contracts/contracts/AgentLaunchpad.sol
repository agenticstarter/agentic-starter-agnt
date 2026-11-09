// SPDX-License-Identifier: MIT
pragma solidity 0.8.24;

import {Ownable, Ownable2Step} from "@openzeppelin/contracts/access/Ownable2Step.sol";
import {ReentrancyGuard} from "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import {Math} from "@openzeppelin/contracts/utils/math/Math.sol";
import {Clones} from "@openzeppelin/contracts/proxy/Clones.sol";
import {LaunchToken} from "./LaunchToken.sol";
import {LaunchRules} from "./LaunchRules.sol";
import {IAgentGate, IGraduationAdapter, IStakingPerks, IAccountFeeEscrow} from "./interfaces/IPancake.sol";

/// @title AgentLaunchpad (version 3)
/// @notice Agent-only bonding-curve launchpad on BNB Chain.
///  - Anyone can create a token (an EIP-1167 clone of the audited template). Supply 1,000,000,000: 800M on the
///    curve, 200M for liquidity. Every token address ends with the platform suffix (CREATE2; the salt starts with
///    the creator's address so nobody can take another creator's salt).
///  - Only wallets the Agent Gate accepts can buy on the curve. Anyone can sell.
///  - A wallet may hold at most the token's wallet cap while on the curve; extra BNB is refunded.
///  - 1% fee on curve trades. The creator part (20%) goes to the token's fee split (up to 10 recipients, including
///    X/GitHub accounts held in escrow) or, in cashback mode, back to the trader. The rest goes to the fee splitter.
///  - At graduation the graduation fee (a share of the target) goes to the treasury, part of it to the creator, and
///    the rest of the BNB plus 200M tokens become burned liquidity through the token's graduation adapter.
///  - No path anywhere lets the owner take users' funds. Settings are capped, fee and target changes are limited
///    to +-50% per 7 days, and modules (gate, template, adapter, escrow, perks) change only after a 48 h timelock.
///  - Each token snapshots its settings and adapter at creation. Pausing stops launches and buys only; sells,
///    claims and withdrawals never stop.
contract AgentLaunchpad is Ownable2Step, ReentrancyGuard {
    // ------------------------------------------------------------------ constants
    string public constant VERSION = "3";
    uint256 public constant TOTAL_SUPPLY = 1_000_000_000 ether;
    uint256 public constant CURVE_SUPPLY = 800_000_000 ether;
    uint256 public constant LP_SUPPLY = 200_000_000 ether;
    uint256 public constant FEE_BPS = 100; // 1% curve fee
    uint256 public constant BPS = 10_000;
    uint256 public constant MODULE_TIMELOCK = 48 hours;
    uint256 public constant SPLIT_DELAY = 24 hours;
    uint256 public constant RATE_WINDOW = 7 days;
    address public constant DEAD = 0x000000000000000000000000000000000000dEaD;

    uint256 public constant MAX_CREATOR_SHARE_BPS = 3_000;
    uint256 public constant MAX_GRADUATION_FEE_BPS = 500; // 5% of the target
    uint256 public constant MAX_GRADUATION_FEE = 2 ether;
    uint256 public constant MAX_GRADUATION_BONUS_BPS = 3_000; // 30% of the graduation fee
    uint256 public constant MAX_LAUNCH_FEE = 0.02 ether;
    uint256 public constant MAX_META_FEE = 0.05 ether;
    uint256 public constant MAX_TARGET = 50 ether;
    uint256 public constant MAX_ALLOC_BPS = 300; // creator allocation, 3% of supply
    uint256 public constant MAX_ALLOC_UNLOCK = 90 days;
    uint256 public constant MAX_MIN_CURVE_TIME = 7 days;
    uint256 public constant MAX_RECIPIENTS = 10;

    uint8 public constant MODE_CREATOR = 0;
    uint8 public constant MODE_CASHBACK = 1;

    bytes32 public constant M_GATE = "gate";
    bytes32 public constant M_TEMPLATE = "template";
    bytes32 public constant M_ADAPTER = "adapter";
    bytes32 public constant M_ESCROW = "escrow";
    bytes32 public constant M_PERKS = "perks";

    // ------------------------------------------------------------------ immutables (deploy parameters)
    uint256 public immutable minTarget;
    uint256 public immutable minWalletCapBps;
    uint256 public immutable maxWalletCapBps;
    bool public immutable rateLimited;
    uint160 public immutable suffixMask;
    uint160 public immutable suffix;

    // ------------------------------------------------------------------ storage
    struct Curve {
        address creator;
        uint64 createdAt;
        uint64 minEnd; // earliest graduation time
        bool graduated;
        uint8 rewardMode;
        uint16 walletCapBps;
        uint16 graduationBonusBps;
        address adapter;
        uint64 graduatedAt;
        uint64 allocUnlock;
        address pair;
        uint256 target;
        uint256 graduationFee;
        uint256 virtualBnb;
        uint256 virtualToken;
        uint256 tokensSold;
        uint256 realBnb;
        uint256 creatorFees; // accrued, not yet split
        uint256 allocTokens;
        uint256 allocClaimed;
    }

    /// @notice A fee-split recipient: either a wallet, or an X/GitHub account (keccak256 of "x:handle") paid to
    ///  the account escrow. `bps` of the creator part; all recipients add up to 10,000.
    struct Recipient {
        address wallet;
        bytes32 account;
        uint16 bps;
    }

    struct CreateParams {
        string name;
        string symbol;
        string metaURI;
        bytes32 salt;
        address quote; // address(0) = BNB; other quote tokens arrive with a later module
        uint8 rewardMode;
        Recipient[] recipients; // empty = 100% to the creator
    }

    struct Anchor {
        uint128 value;
        uint64 at;
    }

    mapping(address => Curve) private _curves;
    mapping(address => Recipient[]) private _splits;
    mapping(address => Recipient[]) private _pendingSplits;
    mapping(address => uint256) public pendingSplitAt;
    mapping(address => address) public pendingCreator;
    address[] public allTokens;

    // settings (owner, within the caps above)
    uint256 public creatorShareBps = 2_000;
    uint256 public graduationTarget;
    uint256 public graduationFeeBps;
    uint256 public graduationBonusBps = 2_000;
    uint256 public launchFee;
    uint256 public metaUpdateFee;
    uint256 public walletCapBps;
    uint256 public minCurveTime;
    uint256 public creatorAllocBps;
    uint256 public creatorAllocUnlock;
    address public feeRecipient; // FeeSplitter
    address public treasury;
    address public guardian;
    mapping(address => bool) public launchers;
    mapping(bytes32 => bool) public reservedSymbol;
    mapping(bytes32 => Anchor) private _anchors;

    // modules (48 h timelock)
    IAgentGate public agentGate;
    address public tokenTemplate;
    address public adapter;
    address public escrow;
    address public perks;
    mapping(bytes32 => address) public pendingModule;
    mapping(bytes32 => uint256) public pendingModuleAt;
    bool public paused;

    // balances
    uint256 public feesAccrued;
    uint256 public treasuryAccrued;
    mapping(address => uint256) public creatorRewards;
    mapping(address => uint256) public pendingWithdrawals;
    uint256 public totalCreatorRewards;
    uint256 public totalTreasuryFees;

    // ------------------------------------------------------------------ events
    event Created(
        address indexed token,
        address indexed creator,
        string name,
        string symbol,
        string metaURI,
        uint256 target,
        uint256 walletCapBps
    );
    event CurveOptions(
        address indexed token, uint8 rewardMode, uint256 graduationFee, uint256 minEnd, address adapter, uint256 allocUnlock
    );
    event Buy(
        address indexed token,
        address indexed buyer,
        uint256 bnbIn,
        uint256 tokensOut,
        uint256 fee,
        uint256 refund,
        uint256 realBnb,
        uint256 tokensSold
    );
    event Sell(
        address indexed token,
        address indexed seller,
        uint256 tokensIn,
        uint256 bnbOut,
        uint256 fee,
        uint256 realBnb,
        uint256 tokensSold
    );
    event CreatorFee(address indexed token, address indexed to, uint256 amount);
    event Cashback(address indexed token, address indexed trader, uint256 amount);
    event CreatorFeesSplit(address indexed token, uint256 amount);
    event SplitSet(address indexed token, Recipient[] recipients);
    event SplitProposed(address indexed token, uint256 readyAt);
    event CreatorRewardsClaimed(address indexed creator, uint256 amount);
    event CreatorProposed(address indexed token, address indexed to);
    event CreatorTransferred(address indexed token, address indexed from, address indexed to);
    event AllocationEscrowed(address indexed token, address indexed creator, uint256 tokens);
    event AllocationClaimed(address indexed token, address indexed to, uint256 tokens);
    event MetaUpdated(address indexed token, address indexed by, string metaURI, uint256 fee);
    event Graduated(
        address indexed token, address indexed pair, uint256 tokenAmount, uint256 bnbAmount, uint256 graduationFee
    );
    event GraduationBonus(address indexed token, address indexed creator, uint256 amount);
    event FeesCollected(address indexed to, uint256 amount);
    event TreasuryFeesCollected(address indexed to, uint256 amount);
    event PaymentDeferred(address indexed to, uint256 amount);
    event SettingChanged(bytes32 indexed key, uint256 value);
    event AddressChanged(bytes32 indexed key, address value);
    event LauncherSet(address indexed launcher, bool allowed);
    event ReservedSet(bytes32 indexed symbolHash, bool reserved);
    event ModuleProposed(bytes32 indexed key, address module, uint256 effectiveAt);
    event ModuleSet(bytes32 indexed key, address module);
    event PausedSet(bool paused, address indexed by);

    // ------------------------------------------------------------------ errors
    error UnknownToken();
    error AlreadyGraduated();
    error NotGraduated();
    error NotReady();
    error ZeroAmount();
    error Slippage();
    error NotAgent();
    error WalletCapReached();
    error IsPaused();
    error TimelockActive();
    error NothingPending();
    error ZeroAddress();
    error BadName();
    error ReservedSymbol();
    error BadSalt();
    error BadSplit();
    error BadQuote();
    error PayoutFailed();
    error NotLauncher();
    error NotCreator();
    error NotGuardian();
    error FeeTooLow();
    error OutOfBounds();
    error RateLimited();

    struct InitParams {
        address gate; // address(0) = open mode (local tests only)
        address template;
        address adapter;
        address escrow; // may be address(0)
        address perks; // may be address(0)
        address feeRecipient;
        address treasury;
        address guardian;
        uint256 graduationTarget;
        uint256 graduationFeeBps;
        uint256 launchFee;
        uint256 metaUpdateFee;
        uint256 walletCapBps;
        uint256 minTarget;
        uint256 minWalletCapBps;
        uint256 maxWalletCapBps;
        uint256 creatorAllocBps;
        uint256 creatorAllocUnlock;
        bool rateLimited;
        uint160 suffixMask;
        uint160 suffix;
    }

    constructor(InitParams memory p) Ownable(msg.sender) {
        if (p.template == address(0) || p.adapter == address(0) || p.feeRecipient == address(0) || p.treasury == address(0))
        {
            revert ZeroAddress();
        }
        if ((p.suffix & ~p.suffixMask) != 0) revert OutOfBounds();
        if (p.minWalletCapBps == 0 || p.minWalletCapBps > p.maxWalletCapBps || p.maxWalletCapBps > 2_000) {
            revert OutOfBounds();
        }
        minTarget = p.minTarget;
        minWalletCapBps = p.minWalletCapBps;
        maxWalletCapBps = p.maxWalletCapBps;
        rateLimited = p.rateLimited;
        suffixMask = p.suffixMask;
        suffix = p.suffix;
        agentGate = IAgentGate(p.gate);
        tokenTemplate = p.template;
        adapter = p.adapter;
        escrow = p.escrow;
        perks = p.perks;
        feeRecipient = p.feeRecipient;
        treasury = p.treasury;
        guardian = p.guardian;
        if (
            p.graduationFeeBps > MAX_GRADUATION_FEE_BPS || p.launchFee > MAX_LAUNCH_FEE || p.metaUpdateFee > MAX_META_FEE
                || p.walletCapBps < p.minWalletCapBps || p.walletCapBps > p.maxWalletCapBps
                || p.creatorAllocBps > MAX_ALLOC_BPS || p.creatorAllocUnlock > MAX_ALLOC_UNLOCK
        ) revert OutOfBounds();
        graduationFeeBps = p.graduationFeeBps;
        _checkTarget(p.graduationTarget);
        graduationTarget = p.graduationTarget;
        launchFee = p.launchFee;
        metaUpdateFee = p.metaUpdateFee;
        walletCapBps = p.walletCapBps;
        creatorAllocBps = p.creatorAllocBps;
        creatorAllocUnlock = p.creatorAllocUnlock;
    }

    receive() external payable {}

    modifier whenNotPaused() {
        if (paused) revert IsPaused();
        _;
    }

    // ================================================================== create
    /// @notice Create a token. `salt` must start with the creator's address and give a token address with the
    ///  platform suffix (see predictTokenAddress).
    function create(CreateParams calldata p) external payable nonReentrant whenNotPaused returns (address token) {
        uint256 fee = _takeLaunchFee(msg.sender, msg.value);
        token = _create(msg.sender, p);
        if (msg.value > fee) _pay(msg.sender, msg.value - fee);
    }

    /// @notice Create a token for `creator`. Only approved launchers (the launch bot) may call this. No buy.
    function createFor(address creator, CreateParams calldata p)
        external
        payable
        nonReentrant
        whenNotPaused
        returns (address token)
    {
        if (!launchers[msg.sender]) revert NotLauncher();
        if (creator == address(0)) revert ZeroAddress();
        uint256 fee = _takeLaunchFee(creator, msg.value);
        token = _create(creator, p);
        if (msg.value > fee) _pay(msg.sender, msg.value - fee);
    }

    /// @notice Create a token and make the creator's first buy. The creator must pass the Agent Gate. When a
    ///  creator allocation is enabled, the first tokens bought (up to the allocation) are held by the launchpad,
    ///  outside the wallet cap, and unlock linearly after graduation.
    function createAndBuy(CreateParams calldata p, uint256 minTokensOut)
        external
        payable
        nonReentrant
        whenNotPaused
        returns (address token, uint256 tokensOut)
    {
        uint256 fee = _takeLaunchFee(msg.sender, msg.value);
        token = _create(msg.sender, p);
        tokensOut = _buy(token, msg.sender, msg.value - fee, minTokensOut, (TOTAL_SUPPLY * creatorAllocBps) / BPS);
    }

    function launchFeeFor(address creator) public view returns (uint256) {
        if (perks != address(0)) {
            try IStakingPerks(perks).hasPerks(creator) returns (bool ok) {
                if (ok) return 0;
            } catch {}
        }
        return launchFee;
    }

    function _takeLaunchFee(address creator, uint256 value) internal returns (uint256 fee) {
        fee = launchFeeFor(creator);
        if (value < fee) revert FeeTooLow();
        if (fee > 0) {
            treasuryAccrued += fee;
            totalTreasuryFees += fee;
        }
    }

    function _create(address creator, CreateParams calldata p) internal returns (address token) {
        if (p.quote != address(0)) revert BadQuote();
        if (p.rewardMode > MODE_CASHBACK) revert OutOfBounds();
        if (reservedSymbol[LaunchRules.checkNames(p.name, p.symbol)]) revert ReservedSymbol();
        if (bytes(p.metaURI).length > 1024) revert BadName();
        if (address(bytes20(p.salt)) != creator) revert BadSalt();

        token = Clones.cloneDeterministic(tokenTemplate, p.salt);
        if ((uint160(token) & suffixMask) != suffix) revert BadSalt();
        LaunchToken(token).initialize(p.name, p.symbol, p.metaURI, TOTAL_SUPPLY);

        Curve storage c = _curves[token];
        uint256 target = graduationTarget;
        uint256 gFee = Math.min((target * graduationFeeBps) / BPS, MAX_GRADUATION_FEE);
        (c.virtualBnb, c.virtualToken) = _virtualReserves(target, gFee);
        c.creator = creator;
        c.createdAt = uint64(block.timestamp);
        c.minEnd = uint64(block.timestamp + minCurveTime);
        c.rewardMode = p.rewardMode;
        c.walletCapBps = uint16(walletCapBps);
        c.graduationBonusBps = uint16(graduationBonusBps);
        c.adapter = adapter;
        c.allocUnlock = uint64(creatorAllocUnlock);
        c.target = target;
        c.graduationFee = gFee;
        if (p.recipients.length > 0) {
            _validateSplit(p.recipients);
            for (uint256 i = 0; i < p.recipients.length; i++) _splits[token].push(p.recipients[i]);
            emit SplitSet(token, p.recipients);
        }
        allTokens.push(token);
        emit Created(token, creator, p.name, p.symbol, p.metaURI, target, c.walletCapBps);
        emit CurveOptions(token, p.rewardMode, gFee, c.minEnd, c.adapter, c.allocUnlock);
    }

    function _validateSplit(Recipient[] calldata r) internal view {
        if (r.length > MAX_RECIPIENTS) revert BadSplit();
        uint256 sum;
        for (uint256 i = 0; i < r.length; i++) {
            bool isWallet = r[i].wallet != address(0);
            bool isAccount = r[i].account != bytes32(0);
            if (isWallet == isAccount || r[i].bps == 0) revert BadSplit();
            if (isAccount && escrow == address(0)) revert BadSplit();
            sum += r[i].bps;
        }
        if (sum != BPS) revert BadSplit();
    }

    // ================================================================== trade
    function buy(address token, uint256 minTokensOut)
        external
        payable
        nonReentrant
        whenNotPaused
        returns (uint256 tokensOut)
    {
        tokensOut = _buy(token, msg.sender, msg.value, minTokensOut, 0);
    }

    function _buy(address token, address buyer, uint256 bnbGross, uint256 minTokensOut, uint256 allocRoom)
        internal
        returns (uint256 tokensOut)
    {
        if (bnbGross == 0) revert ZeroAmount();
        if (!isAgent(buyer)) revert NotAgent();
        Curve storage c = _live(token);

        (uint256 out, uint256 netUsed, uint256 fee, uint256 refund) =
            _quoteBuy(c, bnbGross, walletRoom(token, buyer) + allocRoom);
        if (out == 0) revert WalletCapReached();
        if (out < minTokensOut) revert Slippage();

        c.tokensSold += out;
        c.realBnb += netUsed;
        _splitFee(token, c, buyer, fee);
        tokensOut = out;

        uint256 held = Math.min(out, allocRoom);
        if (held > 0) {
            c.allocTokens += held;
            emit AllocationEscrowed(token, buyer, held);
        }
        if (out > held && !LaunchToken(token).transfer(buyer, out - held)) revert PayoutFailed();
        emit Buy(token, buyer, netUsed + fee, out, fee, refund, c.realBnb, c.tokensSold);

        if (refund > 0) _pay(buyer, refund);
        if (c.tokensSold >= CURVE_SUPPLY && block.timestamp >= c.minEnd) _graduate(token, c);
    }

    function sell(address token, uint256 tokensIn, uint256 minBnbOut) external nonReentrant returns (uint256 bnbOut) {
        if (tokensIn == 0) revert ZeroAmount();
        Curve storage c = _live(token);
        uint256 gross = _bnbOut(c, tokensIn);
        uint256 fee = (gross * FEE_BPS) / BPS;
        bnbOut = gross - fee;
        if (bnbOut < minBnbOut) revert Slippage();

        c.tokensSold -= tokensIn;
        c.realBnb -= gross;
        _splitFee(token, c, msg.sender, fee);

        LaunchToken(token).pullForSell(msg.sender, tokensIn);
        emit Sell(token, msg.sender, tokensIn, bnbOut, fee, c.realBnb, c.tokensSold);
        _pay(msg.sender, bnbOut);
    }

    /// @notice Graduate a sold-out token once its minimum curve time has passed. Anyone may call.
    function graduate(address token) external nonReentrant {
        Curve storage c = _live(token);
        if (c.tokensSold < CURVE_SUPPLY || block.timestamp < c.minEnd) revert NotReady();
        _graduate(token, c);
    }

    /// @dev Creator mode: the creator part accrues to the token's split, except on the creator's own trades.
    ///      Cashback mode: the creator part goes back to the trader.
    function _splitFee(address token, Curve storage c, address trader, uint256 fee) internal {
        uint256 cut = (fee * creatorShareBps) / BPS;
        if (c.rewardMode == MODE_CASHBACK) {
            creatorRewards[trader] += cut;
            totalCreatorRewards += cut;
            emit Cashback(token, trader, cut);
        } else if (trader != c.creator && cut > 0) {
            c.creatorFees += cut;
            totalCreatorRewards += cut;
            emit CreatorFee(token, c.creator, cut);
        } else {
            cut = 0;
        }
        feesAccrued += fee - cut;
    }

    function withdraw() external nonReentrant {
        uint256 amt = pendingWithdrawals[msg.sender];
        if (amt == 0) revert NothingPending();
        pendingWithdrawals[msg.sender] = 0;
        (bool ok,) = msg.sender.call{value: amt}("");
        if (!ok) revert PayoutFailed();
    }

    // ================================================================== creators
    /// @notice Split a token's accrued creator fees to its recipients. Anyone may call.
    function distributeCreatorFees(address token) public nonReentrant {
        _distribute(token);
    }

    function _distribute(address token) internal {
        Curve storage c = _known(token);
        uint256 amt = c.creatorFees;
        if (amt == 0) return;
        c.creatorFees = 0;
        Recipient[] storage r = _splits[token];
        uint256 n = r.length;
        emit CreatorFeesSplit(token, amt);
        if (n == 0) {
            creatorRewards[c.creator] += amt;
            return;
        }
        uint256 left = amt;
        for (uint256 i = 0; i < n; i++) {
            uint256 share = i == n - 1 ? left : (amt * r[i].bps) / BPS;
            left -= share;
            if (r[i].account != bytes32(0)) {
                IAccountFeeEscrow(escrow).credit{value: share}(token, r[i].account);
            } else {
                creatorRewards[r[i].wallet] += share;
            }
        }
    }

    function claimCreatorRewards() external nonReentrant {
        _claim();
    }

    /// @notice Split the given tokens' fees, then claim the caller's balance.
    function claimFor(address[] calldata tokens) external nonReentrant {
        for (uint256 i = 0; i < tokens.length; i++) _distribute(tokens[i]);
        _claim();
    }

    function _claim() internal {
        uint256 amt = creatorRewards[msg.sender];
        if (amt == 0) revert NothingPending();
        creatorRewards[msg.sender] = 0;
        emit CreatorRewardsClaimed(msg.sender, amt);
        (bool ok,) = msg.sender.call{value: amt}("");
        if (!ok) revert PayoutFailed();
    }

    /// @notice Step 1 of handing the creator role to another wallet.
    function proposeCreator(address token, address newCreator) external {
        Curve storage c = _known(token);
        if (msg.sender != c.creator) revert NotCreator();
        pendingCreator[token] = newCreator;
        emit CreatorProposed(token, newCreator);
    }

    /// @notice Step 2: the new wallet accepts. Fees already accrued are split to the old recipients first.
    function acceptCreator(address token) external nonReentrant {
        Curve storage c = _known(token);
        if (msg.sender != pendingCreator[token] || msg.sender == address(0)) revert NotCreator();
        _distribute(token);
        address from = c.creator;
        c.creator = msg.sender;
        delete pendingCreator[token];
        emit CreatorTransferred(token, from, msg.sender);
    }

    /// @notice Propose a new fee split; the creator applies it after 24 hours (so a stolen creator key cannot
    ///  redirect fees in one transaction, and holders can see the change coming). Empty = 100% to the creator.
    function proposeSplit(address token, Recipient[] calldata recipients) external {
        Curve storage c = _known(token);
        if (msg.sender != c.creator) revert NotCreator();
        if (recipients.length > 0) _validateSplit(recipients);
        delete _pendingSplits[token];
        for (uint256 i = 0; i < recipients.length; i++) _pendingSplits[token].push(recipients[i]);
        pendingSplitAt[token] = block.timestamp + SPLIT_DELAY;
        emit SplitProposed(token, block.timestamp + SPLIT_DELAY);
    }

    function applySplit(address token) external nonReentrant {
        Curve storage c = _known(token);
        if (msg.sender != c.creator) revert NotCreator();
        uint256 at = pendingSplitAt[token];
        if (at == 0) revert NothingPending();
        if (block.timestamp < at) revert TimelockActive();
        _distribute(token);
        delete _splits[token];
        Recipient[] storage p = _pendingSplits[token];
        for (uint256 i = 0; i < p.length; i++) _splits[token].push(p[i]);
        delete _pendingSplits[token];
        pendingSplitAt[token] = 0;
        emit SplitSet(token, _splits[token]);
    }

    /// @notice Release the vested part of the creator allocation to the current creator (after graduation).
    function claimAllocation(address token) external nonReentrant {
        Curve storage c = _known(token);
        if (!c.graduated) revert NotGraduated();
        uint256 amt = claimableAllocation(token);
        if (amt == 0) revert NothingPending();
        c.allocClaimed += amt;
        if (!LaunchToken(token).transfer(c.creator, amt)) revert PayoutFailed();
        emit AllocationClaimed(token, c.creator, amt);
    }

    function claimableAllocation(address token) public view returns (uint256) {
        Curve storage c = _curves[token];
        if (!c.graduated || c.allocTokens == 0) return 0;
        uint256 vested = c.allocUnlock == 0
            ? c.allocTokens
            : Math.mulDiv(c.allocTokens, Math.min(block.timestamp - c.graduatedAt, c.allocUnlock), c.allocUnlock);
        return vested - c.allocClaimed;
    }

    function updateMeta(address token, string calldata metaURI) external payable nonReentrant {
        Curve storage c = _known(token);
        if (msg.sender != c.creator) revert NotCreator();
        if (bytes(metaURI).length > 1024) revert BadName();
        uint256 fee = metaUpdateFee;
        if (msg.value < fee) revert FeeTooLow();
        if (fee > 0) {
            treasuryAccrued += fee;
            totalTreasuryFees += fee;
        }
        LaunchToken(token).setMetaURI(metaURI);
        emit MetaUpdated(token, msg.sender, metaURI, fee);
        if (msg.value > fee) _pay(msg.sender, msg.value - fee);
    }

    // ================================================================== graduation
    function _graduate(address token, Curve storage c) internal {
        c.graduated = true;
        c.graduatedAt = uint64(block.timestamp);
        LaunchToken t = LaunchToken(token);
        t.markGraduated();

        uint256 raised = c.realBnb;
        uint256 gFee = Math.min(c.graduationFee, raised);
        uint256 bnbAmount = raised - gFee;
        uint256 bonus = (gFee * c.graduationBonusBps) / BPS;
        if (bonus > 0) {
            creatorRewards[c.creator] += bonus;
            totalCreatorRewards += bonus;
            emit GraduationBonus(token, c.creator, bonus);
        }
        if (gFee > bonus) {
            treasuryAccrued += gFee - bonus;
            totalTreasuryFees += gFee - bonus;
        }
        // Rounding dust left on the curve is burned so the pool opens at the curve's end price. The creator
        // allocation stays here until it vests.
        uint256 leftover = t.balanceOf(address(this)) - LP_SUPPLY - c.allocTokens;
        if (leftover > 0 && !t.transfer(DEAD, leftover)) revert PayoutFailed();

        if (!t.transfer(c.adapter, LP_SUPPLY)) revert PayoutFailed();
        address pair = IGraduationAdapter(c.adapter).graduate{value: bnbAmount}(token, LP_SUPPLY);
        c.pair = pair;
        emit Graduated(token, pair, LP_SUPPLY, bnbAmount, gFee);
    }

    // ================================================================== fees
    function collectFees() external nonReentrant {
        uint256 toSplitter = feesAccrued;
        uint256 toTreasury = treasuryAccrued;
        if (toSplitter == 0 && toTreasury == 0) revert NothingPending();
        feesAccrued = 0;
        treasuryAccrued = 0;
        if (toSplitter > 0) {
            (bool ok,) = feeRecipient.call{value: toSplitter}("");
            if (!ok) revert PayoutFailed();
            emit FeesCollected(feeRecipient, toSplitter);
        }
        if (toTreasury > 0) {
            (bool ok,) = treasury.call{value: toTreasury}("");
            if (!ok) revert PayoutFailed();
            emit TreasuryFeesCollected(treasury, toTreasury);
        }
    }

    // ================================================================== views
    function isAgent(address account) public view returns (bool) {
        if (address(agentGate) == address(0)) return true;
        return agentGate.isAgent(account);
    }

    function curves(address token) external view returns (Curve memory) {
        return _curves[token];
    }

    function creatorOf(address token) external view returns (address) {
        return _curves[token].creator;
    }

    function splitOf(address token) external view returns (Recipient[] memory) {
        return _splits[token];
    }

    function maxPerWallet(address token) public view returns (uint256) {
        return (TOTAL_SUPPLY * _curves[token].walletCapBps) / BPS;
    }

    function walletRoom(address token, address buyer) public view returns (uint256) {
        uint256 cap = maxPerWallet(token);
        uint256 bal = LaunchToken(token).balanceOf(buyer);
        return bal >= cap ? 0 : cap - bal;
    }

    function tokenCount() external view returns (uint256) {
        return allTokens.length;
    }

    /// @notice CREATE2 init code hash of a token clone. Launch tools search salts off-chain with
    ///  address = keccak256(0xff ++ launchpad ++ salt ++ tokenInitCodeHash)[12:].
    function tokenInitCodeHash() public view returns (bytes32) {
        return keccak256(
            abi.encodePacked(
                hex"3d602d80600a3d3981f3363d3d373d3d3d363d73", tokenTemplate, hex"5af43d82803e903d91602b57fd5bf3"
            )
        );
    }

    function predictTokenAddress(bytes32 salt) external view returns (address) {
        return Clones.predictDeterministicAddress(tokenTemplate, salt);
    }

    // ================================================================== admin (owner = Safe)
    function setCreatorShareBps(uint256 v) external onlyOwner {
        if (v > MAX_CREATOR_SHARE_BPS) revert OutOfBounds();
        _limit("creatorShareBps", creatorShareBps, v);
        creatorShareBps = v;
        emit SettingChanged("creatorShareBps", v);
    }

    function setGraduationFeeBps(uint256 v) external onlyOwner {
        if (v > MAX_GRADUATION_FEE_BPS) revert OutOfBounds();
        _limit("graduationFeeBps", graduationFeeBps, v);
        graduationFeeBps = v;
        emit SettingChanged("graduationFeeBps", v);
    }

    function setGraduationBonusBps(uint256 v) external onlyOwner {
        if (v > MAX_GRADUATION_BONUS_BPS) revert OutOfBounds();
        graduationBonusBps = v;
        emit SettingChanged("graduationBonusBps", v);
    }

    function setLaunchFee(uint256 v) external onlyOwner {
        if (v > MAX_LAUNCH_FEE) revert OutOfBounds();
        _limit("launchFee", launchFee, v);
        launchFee = v;
        emit SettingChanged("launchFee", v);
    }

    function setMetaUpdateFee(uint256 v) external onlyOwner {
        if (v > MAX_META_FEE) revert OutOfBounds();
        _limit("metaUpdateFee", metaUpdateFee, v);
        metaUpdateFee = v;
        emit SettingChanged("metaUpdateFee", v);
    }

    /// @notice Graduation target for tokens created from now on.
    function setGraduationTarget(uint256 v) external onlyOwner {
        _checkTarget(v);
        _limit("graduationTarget", graduationTarget, v);
        graduationTarget = v;
        emit SettingChanged("graduationTarget", v);
    }

    function setWalletCapBps(uint256 v) external onlyOwner {
        if (v < minWalletCapBps || v > maxWalletCapBps) revert OutOfBounds();
        walletCapBps = v;
        emit SettingChanged("walletCapBps", v);
    }

    function setMinCurveTime(uint256 v) external onlyOwner {
        if (v > MAX_MIN_CURVE_TIME) revert OutOfBounds();
        minCurveTime = v;
        emit SettingChanged("minCurveTime", v);
    }

    function setCreatorAllocation(uint256 bps, uint256 unlock) external onlyOwner {
        if (bps > MAX_ALLOC_BPS || unlock > MAX_ALLOC_UNLOCK) revert OutOfBounds();
        creatorAllocBps = bps;
        creatorAllocUnlock = unlock;
        emit SettingChanged("creatorAllocBps", bps);
        emit SettingChanged("creatorAllocUnlock", unlock);
    }

    function setFeeRecipient(address v) external onlyOwner {
        if (v == address(0)) revert ZeroAddress();
        feeRecipient = v;
        emit AddressChanged("feeRecipient", v);
    }

    function setTreasury(address v) external onlyOwner {
        if (v == address(0)) revert ZeroAddress();
        treasury = v;
        emit AddressChanged("treasury", v);
    }

    /// @notice The guardian may pause but never unpause or change anything else. address(0) removes it.
    function setGuardian(address v) external onlyOwner {
        guardian = v;
        emit AddressChanged("guardian", v);
    }

    function setLauncher(address launcher, bool allowed) external onlyOwner {
        if (launcher == address(0)) revert ZeroAddress();
        launchers[launcher] = allowed;
        emit LauncherSet(launcher, allowed);
    }

    /// @notice Reserve tickers (uppercase) so nobody can launch a token posing as a known asset or as AGNT.
    function setReserved(string[] calldata symbols, bool reserved) external onlyOwner {
        for (uint256 i = 0; i < symbols.length; i++) {
            bytes32 h = keccak256(bytes(symbols[i]));
            reservedSymbol[h] = reserved;
            emit ReservedSet(h, reserved);
        }
    }

    function pause() external {
        if (msg.sender != guardian && msg.sender != owner()) revert NotGuardian();
        paused = true;
        emit PausedSet(true, msg.sender);
    }

    function unpause() external onlyOwner {
        paused = false;
        emit PausedSet(false, msg.sender);
    }

    /// @notice Module changes (gate, template, adapter, escrow, perks) wait 48 hours in public.
    function proposeModule(bytes32 key, address module) external onlyOwner {
        if (key != M_GATE && key != M_TEMPLATE && key != M_ADAPTER && key != M_ESCROW && key != M_PERKS) {
            revert OutOfBounds();
        }
        if (module == address(0) && key != M_GATE && key != M_PERKS && key != M_ESCROW) revert ZeroAddress();
        pendingModule[key] = module;
        pendingModuleAt[key] = block.timestamp + MODULE_TIMELOCK;
        emit ModuleProposed(key, module, block.timestamp + MODULE_TIMELOCK);
    }

    function cancelModule(bytes32 key) external {
        if (msg.sender != guardian && msg.sender != owner()) revert NotGuardian();
        pendingModuleAt[key] = 0;
        emit ModuleProposed(key, address(0), 0);
    }

    function applyModule(bytes32 key) external onlyOwner {
        uint256 at = pendingModuleAt[key];
        if (at == 0) revert NothingPending();
        if (block.timestamp < at) revert TimelockActive();
        address m = pendingModule[key];
        pendingModuleAt[key] = 0;
        if (key == M_GATE) agentGate = IAgentGate(m);
        else if (key == M_TEMPLATE) tokenTemplate = m;
        else if (key == M_ADAPTER) adapter = m;
        else if (key == M_ESCROW) escrow = m;
        else perks = m;
        emit ModuleSet(key, m);
    }

    // ================================================================== internals
    function _checkTarget(uint256 target) internal view {
        if (target < minTarget || target > MAX_TARGET || target == 0) revert OutOfBounds();
    }

    /// @dev Fees and the graduation target may move at most +-50% from where they stood at the start of the
    ///      current 7-day window (mainnet). A value of 0 can be raised to anything within its cap.
    function _limit(bytes32 key, uint256 current, uint256 next) internal {
        if (!rateLimited) return;
        Anchor storage a = _anchors[key];
        if (a.at == 0 || block.timestamp >= a.at + RATE_WINDOW) {
            a.value = uint128(current);
            a.at = uint64(block.timestamp);
        }
        uint256 base = a.value;
        if (base > 0 && (next * 2 < base || next * 2 > base * 3)) revert RateLimited();
    }

    /// @dev Virtual reserves chosen so that selling exactly CURVE_SUPPLY raises `target`, and the last curve price
    ///      equals the pool opening price (target - gFee) / LP_SUPPLY.
    function _virtualReserves(uint256 target, uint256 gFee) internal pure returns (uint256 vBnb, uint256 vToken) {
        uint256 denom = CURVE_SUPPLY * (target - gFee) - LP_SUPPLY * target;
        uint256 vPlusTarget = Math.mulDiv(CURVE_SUPPLY * target, target - gFee, denom);
        vBnb = vPlusTarget - target;
        vToken = Math.mulDiv(vPlusTarget, CURVE_SUPPLY, target);
    }

    function _known(address token) internal view returns (Curve storage c) {
        c = _curves[token];
        if (c.creator == address(0)) revert UnknownToken();
    }

    function _live(address token) internal view returns (Curve storage c) {
        c = _known(token);
        if (c.graduated) revert AlreadyGraduated();
    }

    function _quoteBuy(Curve storage c, uint256 bnbGross, uint256 room)
        internal
        view
        returns (uint256 out, uint256 netUsed, uint256 fee, uint256 refund)
    {
        uint256 fullFee = (bnbGross * FEE_BPS) / BPS;
        uint256 net = bnbGross - fullFee;
        uint256 cap = Math.min(room, CURVE_SUPPLY - c.tokensSold);
        if (cap == 0) return (0, 0, 0, bnbGross);
        out = _tokensOut(c, net);
        if (out > cap) {
            out = cap;
            netUsed = _bnbInFor(c, out);
            if (netUsed > net) netUsed = net;
            fee = Math.mulDiv(netUsed, FEE_BPS, BPS - FEE_BPS, Math.Rounding.Ceil);
            if (netUsed + fee > bnbGross) fee = bnbGross - netUsed;
        } else {
            netUsed = net;
            fee = fullFee;
        }
        refund = bnbGross - netUsed - fee;
    }

    function _tokensOut(Curve storage c, uint256 bnbIn) internal view returns (uint256) {
        uint256 x = c.virtualBnb + c.realBnb;
        uint256 y = c.virtualToken - c.tokensSold;
        return y - Math.ceilDiv(c.virtualBnb * c.virtualToken, x + bnbIn);
    }

    function _bnbInFor(Curve storage c, uint256 tokensOut) internal view returns (uint256) {
        uint256 x = c.virtualBnb + c.realBnb;
        uint256 y = c.virtualToken - c.tokensSold;
        return Math.ceilDiv(c.virtualBnb * c.virtualToken, y - tokensOut) - x;
    }

    function _bnbOut(Curve storage c, uint256 tokensIn) internal view returns (uint256) {
        uint256 x = c.virtualBnb + c.realBnb;
        uint256 y = c.virtualToken - c.tokensSold;
        uint256 out = x - Math.ceilDiv(c.virtualBnb * c.virtualToken, y + tokensIn);
        return out > c.realBnb ? c.realBnb : out;
    }

    function _pay(address to, uint256 amount) internal {
        (bool ok,) = to.call{value: amount, gas: 30_000}("");
        if (!ok) {
            pendingWithdrawals[to] += amount;
            emit PaymentDeferred(to, amount);
        }
    }
}
