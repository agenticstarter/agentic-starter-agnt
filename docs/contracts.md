# Smart contracts

Solidity 0.8.24, OpenZeppelin 5, Cancun EVM. Source and tests: [github.com/agenticstarter/agentic-starter-agnt](https://github.com/agenticstarter/agentic-starter-agnt)
(`contracts/`). No upgradeable proxies. Owner actions go through a 2-of-2 Safe multisig.

| Contract | Role |
| --- | --- |
| `AgentLaunchpad` (version 3) | Creates tokens, runs curves, pays creators, graduation |
| `LaunchpadLens` | Read-only quotes and views for sites and agents |
| `LaunchRules` (library) | Name and symbol rules, reserved tickers, one alphabet per name |
| `LaunchToken` | Template cloned once per launch (EIP-1167). Fixed supply, transfer-locked until graduation. Address ends in `AAAA` |
| `PancakeV2Adapter` | Graduation: adds the liquidity to PancakeSwap V2 and mints the LP to the burn address |
| `AccountFeeEscrow` | Holds creator-fee shares for X / GitHub accounts until they link a wallet; 72-hour claim delay, back to the creator after 90 days |
| `AgentGate` | Agent ID check over up to 10 registries; adding a registry waits 48 hours, removing one is instant |
| `FeeSplitter` | Of the BNB it receives: 50% buyback-burn, 37.5% stakers, 12.5% treasury (= 40 / 30 / 10% of the whole curve fee) |
| `AGNTToken` | $AGNT, 1B fixed supply, no mint, no tax, no owner |
| `AGNTStaking` | Stake AGNT, earn BNB streamed over 7 days; perks after 7 days staked |
| `AGNTPresale` | "250+" sale: floor price up to {{P.presale.floorCapBnb}} BNB, pro rata above, soft cap {{P.presale.softCapBnb}} BNB, 48-hour bonus, unsold burned |
| `IgniteBoard` | Burn any token with an on-chain message (also used for Featured slots with AGNT) |
| `SparkAirdrop` | Seasonal Merkle claims |
| `AGNTVesting` ×3 | Team, ecosystem, treasury vesting |
| `StandardTokenFactory` | Plain BEP-20 tokens for anyone (basic or advanced) |
| `LiquidityHelper` | Adds liquidity for standard tokens and burns or locks the LP |

Live addresses are listed on [Site integrity](https://agenticstarter.xyz/integrity) and returned by the API at
`/contracts` and `/integrity`.

## AgentLaunchpad

| Constant | Value |
| --- | --- |
| `TOTAL_SUPPLY` | 1,000,000,000 |
| `CURVE_SUPPLY` | 800,000,000 |
| `LP_SUPPLY` | 200,000,000 |
| `FEE_BPS` | 100 (1%), fixed |
| `MODULE_TIMELOCK` | 48 hours |
| `SPLIT_DELAY` | 24 hours |
| `MAX_RECIPIENTS` | 10 |

Settings the owner can change, within hard limits. Curve settings are copied into each token at creation, so a
change only affects tokens created afterwards. On mainnet fees and the target can move at most ±50% per 7 days.

| Setting | Mainnet | Testnet | Limits |
| --- | --- | --- | --- |
| Graduation target | {{P.mainnet.graduationTargetBnb}} BNB | {{P.testnet.graduationTargetBnb}} BNB | {{P.mainnet.targetBoundsBnb.0}} (mainnet floor) to 50 BNB |
| Graduation fee | {{P.mainnet.graduationFeeBps|pct}} of the target | {{P.testnet.graduationFeeBps|pct}} | at most 5% and 2 BNB |
| Creator graduation bonus | {{P.mainnet.creatorBonusBps|pct}} of the graduation fee | {{P.testnet.creatorBonusBps|pct}} | at most 30% |
| Wallet cap | {{P.mainnet.walletCapBps|pct}} | {{P.testnet.walletCapBps|pct}} | mainnet 0.5% to 2% (set at deploy) |
| Launch fee | {{P.mainnet.launchFeeBnb}} BNB | {{P.testnet.launchFeeBnb}} | up to 0.02 BNB |
| Info update fee | {{P.mainnet.metaUpdateFeeBnb}} BNB | {{P.testnet.metaUpdateFeeBnb}} | up to 0.05 BNB |
| Creator share of the curve fee | 20% | 20% | up to 30% |
| Creator allocation | {{P.mainnet.creatorAllocBps|pct}} | {{P.testnet.creatorAllocBps|pct}} over {{P.testnet.creatorAllocUnlockDays}} days | up to 3%, unlock up to 90 days |
| Minimum curve time | 0 | 0 | up to 7 days |

Virtual reserves are derived per token so that selling exactly 800M raises the target, and the last curve price
equals the PancakeSwap listing price.

| Function | Who | Notes |
| --- | --- | --- |
| `create(p)` | anyone | `p = { name, symbol, metaURI, salt, quote, rewardMode, recipients[] }`; `quote` must be zero (BNB). Pays `launchFeeFor(creator)` |
| `createFor(creator, p)` | approved launchers | Testnet bot launches for a user's wallet |
| `createAndBuy(p, minTokensOut)` | agents | Launch + first buy |
| `buy(token, minTokensOut)` | agents | 1% fee, wallet cap, refund |
| `sell(token, tokensIn, minBnbOut)` | any holder | No approve needed |
| `graduate(token)` | anyone | Lists a token that reached its target |
| `claimFor(tokens[])` | anyone | Pushes pending creator fees into each recipient's balance |
| `claimCreatorRewards()` | creators, recipients | Withdraw BNB |
| `proposeSplit` / `applySplit` | creator / anyone after 24 h | Change who receives the creator fees |
| `proposeCreator` / `acceptCreator` | creator / new creator | Two-step creator transfer |
| `claimAllocation(token)` | creator | Vested creator allocation after graduation |
| `updateMeta(token, metaURI)` | creator | Pays the info update fee |
| `predictTokenAddress(salt)`, `tokenInitCodeHash()` | view | Used to find an `AAAA` salt |
| `collectFees()` | anyone | Sends fees to the FeeSplitter and treasury |
| `pause()` / `unpause()` | guardian or owner / owner | Stops create and buy, never sell, claims or graduation |
| `proposeModule` / `applyModule` / `cancelModule` | owner | Swap gate, template, adapter, escrow or perks after 48 h |

## Security notes

- Sells, refunds, claims and graduation cannot be paused.
- BNB that cannot be pushed to a wallet is kept for `withdraw()`.
- The owner is a multisig behind `Ownable2Step`; there is no function to move user tokens or curve BNB.
- A registry that reverts or uses too much gas is skipped by the Agent ID check, so it can't block buys.
- An external audit is required before mainnet; the report will be linked here.
- Found a bug? Use [agenticstarter.xyz/security](https://agenticstarter.xyz/security). Confirmed bugs earn bounty
  points.
