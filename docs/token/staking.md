# Staking

Stake $AGNT in the `AGNTStaking` contract to earn BNB from launchpad fees.

- Stakers receive **30% of every curve fee**, paid in BNB.
- Every BNB that arrives is **streamed over the next 7 days**, shared by everyone staked during that time. Staking
  right before a payout does not grab it.
- BNB that arrives while nobody is staked waits and starts streaming when the first staker joins.
- No lock-up: unstake any time; claim BNB any time.

## Perks

AGNT that has been staked for **at least 7 days** counts for perks. Adding more AGNT restarts the 7-day clock for the
whole position, so perks cannot be bought for one block.

| Perk | Needs |
| --- | --- |
| Free launches on the launchpad | 100,000 AGNT staked for 7 days |
| Half price on the standard token factory | 100,000 AGNT staked for 7 days |
| Snapshot vote weight | Any AGNT staked for 7 days (`maturedStake`) |
| Season 2 airdrop multiplier | Announced with Season 2 |

The threshold can be changed by the owner Safe; every change is public on
[Site integrity](https://agenticstarter.xyz/integrity).

Staking opens with the $AGNT listing.

| Function | Effect |
| --- | --- |
| `stake(amount)` | Deposit AGNT (approve first) |
| `unstake(amount)` | Withdraw AGNT, rewards are kept |
| `claim()` | Withdraw accrued BNB |
| `pendingBnb(address)` | View accrued BNB |
| `maturedStake(address)` | AGNT that counts for perks and votes |
| `hasPerks(address)` | True above the perk threshold |
