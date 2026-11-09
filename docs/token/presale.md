# Presale

Join at [presale.agenticstarter.xyz](https://presale.agenticstarter.xyz) with any BNB Chain browser wallet. No KYC,
no email, only a wallet. It is one public round with **one price for everyone**.

::: warning Only buy on the presale page
Never send BNB to anyone, and never to the contract address: plain transfers are rejected. Admins never DM first.
Compare the contract address with [Site integrity](https://agenticstarter.xyz/integrity).
:::

## How the price works ("250+")

| Raised | What happens |
| --- | --- |
| Below {{P.presale.softCapBnb}} BNB (soft cap) | The sale fails. Every buyer refunds 100% of their BNB on the presale page |
| {{P.presale.softCapBnb}} to {{P.presale.floorCapBnb}} BNB | Everyone buys at the floor: **1 BNB = {{P.presale.floorAgntPerBnb|n}} AGNT**. AGNT not sold is burned at finalize |
| Above {{P.presale.floorCapBnb}} BNB | The {{P.presale.saleTokens|n}} AGNT for sale are shared by BNB contributed. Everyone pays the same final price, a little higher with every BNB. There is no hard cap |

Examples at the end of the sale, for a buyer who sent 1 BNB:

| Total raised | 1 BNB buys |
| --- | --- |
| 120 BNB | 1,000,000 AGNT (130M unsold AGNT are burned) |
| 250 BNB | 1,000,000 AGNT |
| 500 BNB | 500,000 AGNT |
| 1,000 BNB | 250,000 AGNT |

The page shows the live price, a simulator and your own position ("Where is my money?"). While the sale is above
{{P.presale.floorCapBnb}} BNB, your AGNT amount can still go down a little as others buy; your BNB stays the same.

| Parameter | Value |
| --- | --- |
| Floor price | 1 BNB = {{P.presale.floorAgntPerBnb|n}} AGNT, up to {{P.presale.floorCapBnb}} BNB raised |
| AGNT for sale | {{P.presale.saleTokens|n}} (25% of supply), deposited in the contract before the sale opens |
| Soft cap | {{P.presale.softCapBnb}} BNB |
| Per wallet | {{P.presale.perWalletBnb.0}} BNB minimum, {{P.presale.perWalletBnb.1}} BNB maximum in total |
| Early bonus | +{{P.presale.earlyBonusPct}}% AGNT for buys in the first {{P.presale.earlyBonusHours}} hours, pool capped at {{P.presale.earlyBonusCap|n}} AGNT (shared pro rata if it fills), paid with the claim |
| Duration | {{P.presale.days}} days. Start and end times are in UTC on the presale page |
| Claim | 100% at listing |

If a contribution goes over your wallet maximum, the extra BNB is refunded in the same transaction.

## How your BNB is protected

1. Your BNB stays in the presale contract. The team cannot withdraw it before the sale ends.
2. Below the soft cap the sale fails and every buyer refunds 100% on the presale page.
3. After the sale, 80% of the BNB goes into the PancakeSwap pool at listing and the LP is burned. Every step is
   linked on the presale page's listing checklist. See [Listing](/token/listing).

## Invite friends

Connect your wallet on the presale page to get your invite link (`presale.agenticstarter.xyz/?ref=<your wallet>`).
When someone buys through it, the presale contract records the invite together with the buy (`contributeWithRef`).
It costs the buyer nothing extra and does not change their allocation.

- Every wallet that buys 0.05 BNB or more through your link adds **100 airdrop points** to your score (quest Q6, up to
  50 buyers).
- Joining the presale yourself is quest Q5: from 0.05 BNB **+500 points**, then +100 per 0.01 BNB (up to 10,000), and
  buying in the first 48 hours adds **500**. Bought with another wallet than your airdrop wallet? Link it once on the
  airdrop page (Q5 card).
- Points count once your wallet finishes the airdrop's three required quests.
- Buying through your own link does not count, and refunded buys are removed.

## After the sale

1. **Finalize**: the BNB goes to the Treasury Safe and unsold AGNT is burned.
2. **Listing** the next day at 14:00 UTC: 80% of the BNB goes into the AGNT/BNB pool at the final presale price, the
   LP is burned, then claims open.
3. You claim 100% of your AGNT (and the early bonus) on the presale page.

Each step ticks on the presale page's listing checklist with a link to the transaction. Turn on a reminder there
(Telegram or calendar) to know when claims open.

## Refunds

Contributions are final, with two exceptions:

- **The sale fails**: it ends below the soft cap. Refunds open automatically.
- **The team opens refund mode** before claims open. If this happens after finalize, the team must send the full
  amount back to the presale contract first, so every buyer can be refunded in full.

In both cases you refund 100% of your BNB on the presale page.
