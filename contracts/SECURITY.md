# Security notes

Notes for auditors and reviewers. Contact: security@agenticstarter.xyz or https://agenticstarter.xyz/security.

## Trust model

- Owner actions go through a 2-of-2 Safe. Ownership uses `Ownable2Step`, so the Safe must accept it.
- No contract is upgradeable. Settings move only inside hard caps written in the code:
  - creator share of the curve fee: 0 to 30%;
  - graduation fee: at most 5% of the target and never more than 2 BNB;
  - creator graduation bonus: at most 30% of the graduation fee;
  - graduation target: from the immutable `minTarget` to 50 BNB;
  - wallet cap: between the immutable deploy bounds (mainnet 0.5% to 2%);
  - launch fee: up to 0.02 BNB; info update fee: up to 0.05 BNB;
  - creator allocation: up to 3%, unlocking over up to 90 days;
  - minimum curve time: up to 7 days.
- With `rateLimited` (immutable, on for mainnet) fees and the target can move at most ±50% per 7 days.
- Curve settings are copied into each token at creation. Later changes never touch existing tokens.
- Modules (`gate`, `template`, `adapter`, `escrow`, `perks`) change only through `proposeModule` → 48 hours →
  `applyModule`; `cancelModule` drops a pending change.
- The guardian can only `pause()`. Pausing stops new launches and buys. Sells, graduation, creator claims,
  withdrawals and fee collection keep working. Only the owner can `unpause()`.
- Launchers (the testnet Telegram bot) can create tokens for a user via `createFor`. They cannot trade for anyone and
  the user is recorded as the creator.

## Design points worth a look

- **Clones at branded addresses.** Each token is an EIP-1167 clone of `LaunchToken`, deployed with CREATE2. The salt's
  first 20 bytes must equal the creator, so a salt cannot be front-run by another account. The suffix rule
  (`uint160(token) & suffixMask == suffix`) is a branding check only; a matching suffix does not prove authenticity,
  Site integrity does. The template is initialised and locked at deploy.
- **Graduation without the router.** `PancakeV2Adapter` mints liquidity directly on the pair (WBNB deposit +
  `mint(DEAD)`). A pair created early with donated WBNB would make the router's ratio math revert and leave a token
  stuck just below 100%; minting directly turns any donation into extra burned liquidity.
- **Graduation is public.** The buy that fills the curve graduates it; if it does not (minimum curve time), anyone can
  call `graduate(token)` once the target is met.
- **Curve end price equals the opening price** even with a graduation fee: virtual reserves are solved from the target
  `G` and fee `F` so that selling 800M raises `G` and `(vB + G) / (vT - 800M) = (G - F) / 200M`.
- **Fee splits.** Up to 10 recipients (wallets or account keys held by `AccountFeeEscrow`). A new split applies 24 hours
  after `proposeSplit`. `claimFor(tokens[])` pushes pending fees into balances; claims are pull-based.
- **Account escrow.** Account keys are `keccak256("x:<handle>")` or `"github:<login>"`. A wallet binds to an account
  with an EIP-712 attestation from the attester; the claim then waits 72 hours. Shares unclaimed after 90 days go back
  to the creator. `credit` is callable only by the launchpad (`setLaunchpad` once).
- **Cashback mode.** The creator part of the fee is paid back to the trader in the same trade.
- **Creator allocation.** Held by the launchpad outside the wallet cap, unsellable before graduation, then linear.
- **Agent ID check.** `AgentGate` calls each registry with a 50k gas limit and skips registries that revert or run
  out of gas, so one bad registry cannot block buys. At most 10 registries; adding one waits 48 hours, removing is
  instant.
- **Payouts** to traders use a 30k-gas push with a pull fallback (`pendingWithdrawals`), so a reverting wallet cannot
  block a trade.
- **Presale "250+".** Sale tokens are deposited before the sale opens; `receive()` reverts, so BNB only enters through
  `contribute`. Pro-rata amounts round down; dust and unsold AGNT are burned at `finalize`. The 48-hour bonus pool is
  capped and shared pro rata above the cap. Refund mode after finalize requires the full BNB back first.
- **Staking.** Rewards stream over 7 days; BNB that arrives with nobody staked waits. Perks count only stake at least
  7 days old, and any top-up resets the clock.
- **FeeSplitter** `distributeUpTo` bounds the buyback per call (the keeper uses at most 1% slippage and 1 BNB per run).

## Slither triage

`slither . --exclude-informational --exclude-low --filter-paths "node_modules|mocks"` (Slither 0.11): 24 results, none
open.

| Finding | Status |
| --- | --- |
| `arbitrary-send-eth` in `AgentLaunchpad.collectFees`, `StandardTokenFactory._fee`, `AccountFeeEscrow.expire` | Accepted: the destinations are the owner-set fee splitter and treasury, and the token's own creator after expiry. |
| `reentrancy-eth` / `reentrancy-balance` in `_buy`, `_graduate`, `_distribute`, `acceptCreator`, `applySplit`, `claimFor` | Not exploitable: every external entry point is `nonReentrant`; the internal calls go to the launchpad's own token clone, the timelocked adapter and escrow modules, or use the 30k-gas push with a pull fallback. Covered by the reentrant-refunder tests. |
| `divide-before-multiply` in `AGNTStaking._restream` | Accepted: the rate is scaled by `ACC` (1e18); rounding loses less than one scaled unit per second of the 7-day stream. |
| `incorrect-equality` (`== 0` checks) | Intended exact checks on amounts. |
| `uninitialized-local` (`sum`, `total`, `burned`, `owed`, `latin`, `other`) | Intended zero defaults. |
| `unused-return` (`pair.mint`) | The LP is minted to the dead address; the amount is not needed. |
| `cache-array-length` in `AgentGate` | Style only; at most 10 registries. |

## Tests

`npx hardhat test` covers curve math, wallet caps, fees and creator rewards, fee splits and the account escrow,
cashback, graduation (including the donation attack and public `graduate`), salts and suffixes, guardian, module
timelocks and rate limits, setting caps, the creator allocation, vesting, the presale (floor, pro rata, bonus cap,
refunds, finalize burns), staking streams and perks, the standard token factory and liquidity helper, and attacker
cases (reentrant refunders, rejecting wallets, gas-bomb and reverting registries).

## Known limits

- The launchpad bytecode is close to the 24,576-byte limit; views live in `LaunchpadLens` and the name rules in the
  `LaunchRules` library.
- An external audit is required before mainnet. The report will be linked in the docs.
