# Fees

| When | Fee | Goes to |
| --- | --- | --- |
| Launching a token | {{P.mainnet.launchFeeBnb}} BNB on mainnet, free on testnet (+ gas). Free for AGNT stakers with perks | Treasury |
| Buying or selling on the curve | 1% | Split below |
| Graduation | {{P.mainnet.graduationFeeBps|pct}} of the target, at most 2 BNB ({{P.mainnet.graduationFeeBnb}} BNB at {{P.mainnet.graduationTargetBnb}} BNB), taken from the raised BNB | {{P.mainnet.creatorBonusBps|pct}} to the creator, the rest to the treasury |
| Updating a token's logo, description or links | {{P.mainnet.metaUpdateFeeBnb}} BNB on mainnet, free on testnet | Treasury |
| Trading after graduation (PancakeSwap) | No platform fee (PancakeSwap's own 0.25%) | — |

## Where the 1% curve fee goes

<div class="split"><span class="s1" style="width:20%">20%</span><span class="s2" style="width:40%">40%</span><span class="s3" style="width:30%">30%</span><span class="s4" style="width:10%">10%</span></div>
<div class="split-legend"><span><i style="background:#ffc93c"></i>Token creator</span><span><i style="background:#b79cff"></i>Buy back and burn $AGNT</span><span><i style="background:#7ed6a8"></i>$AGNT stakers, in BNB</span><span><i style="background:#c9c8cf"></i>Treasury</span></div>

| Share | Goes to |
| --- | --- |
| 20% | The token's **creator** (or the creator's fee split), until graduation. The creator's own trades don't earn it. Claim it on [My tokens](https://agenticstarter.xyz/me). In **cashback mode** this part goes back to the trader instead. |
| 40% | Buys $AGNT on PancakeSwap and sends it to the burn address |
| 30% | Paid in BNB to [$AGNT stakers](/token/staking), streamed over 7 days |
| 10% | Treasury (2-of-2 multisig) |

The non-creator part collects in the launchpad and is pushed to the **FeeSplitter** contract, which buys back
(at most 1% slippage and 1 BNB per run), burns and pays stakers. Totals are public on the
[Transparency page](https://agenticstarter.xyz/transparency), in the weekly report, and on-chain.

## Creator fee options {#creator-fee-options}

When launching, the creator picks one of two modes:

| Mode | What happens to the creator 20% |
| --- | --- |
| **Creator fees** (default) | Paid to the creator wallet, or split between up to 10 recipients. A recipient can be a wallet or an **X or GitHub account**; account shares wait in an escrow until the account owner links a wallet (they go back to the creator after 90 days if nobody claims). |
| **Cashback** | Paid back to the trader on every buy and sell, so traders pay less. |

A new fee split applies 24 hours after it is proposed, so holders can see the change coming. Moving the creator role
to another wallet is a two-step transfer: the new wallet must accept.

## Limits the owner can't exceed

Fees can only move inside limits written into the contracts: graduation fee at most 5% of the target and never more
than 2 BNB, creator graduation bonus at most 30% of that fee, graduation target at most 50 BNB, launch fee up to
0.02 BNB, update fee up to 0.05 BNB and creator share up to 30%. On mainnet each of these can move at most ±50% per
7 days. The 1% curve fee itself is fixed.
