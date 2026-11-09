# Listing and use of funds

$AGNT lists on PancakeSwap V2 the day after the presale ends, at 14:00 UTC.

## The listing rule

| | |
| --- | --- |
| Listing price | The final presale price. Presale buyers and the first market buyers pay the same |
| BNB into the pool | {{P.presale.listing.bnbToPoolPct}}% of all BNB raised |
| AGNT into the pool | 80% of raised BNB ÷ the final price: {{P.presale.listing.maxPoolAgnt|n}} AGNT when {{P.presale.floorCapBnb}} BNB or more was raised, 800,000 AGNT per BNB below that |
| Where the AGNT comes from | The Liquidity Safe (150M) plus up to 50M of the 60M listing reserve. AGNT not needed stays in the Liquidity Safe |
| LP tokens | Burned in the same step. Nobody can remove the liquidity |

The remaining {{P.presale.listing.bnbToTreasuryPct}}% of the BNB goes to the Treasury Safe.

## Use of funds (the 20% Treasury part)

| Use | Share |
| --- | --- |
| Security and audits | {{P.presale.useOfFundsPct.security}}% |
| Exchange listings | {{P.presale.useOfFundsPct.listing}}% |
| Marketing and community | {{P.presale.useOfFundsPct.marketing}}% |
| Operations (servers, APIs) | {{P.presale.useOfFundsPct.operations}}% |

The split can be edited until the presale opens. After that, every change is logged publicly on
[Site integrity](https://agenticstarter.xyz/integrity) and announced in Telegram. Spending is tracked in the weekly
[Transparency report](https://agenticstarter.xyz/transparency).

## Lock commitments

| Allocation | Rule |
| --- | --- |
| Team (120M) | Vesting contract: 12-month cliff, then 24 months linear. The owner can only postpone the start |
| Treasury and Ecosystem | No market selling before listing + 6 months |
| Liquidity (Liquidity Safe) | Used only for the pool and listings |
| Community (Community Safe) | Used only for airdrops and the presale early bonus |

If any project Safe moves AGNT to a DEX pair, a router or a known exchange deposit address, a public alert goes out
in the Telegram channel and group automatically.

## Check it yourself

- [Liquidity proof](https://agenticstarter.xyz/liquidity): the pool address, live reserves and the LP burn
  transaction, read from the chain.
- The presale page's listing checklist: Finalize → BNB added to the pool → LP burned → claims open, each with its
  transaction.
- [Safe addresses](https://agenticstarter.xyz/integrity) with every parameter change.
