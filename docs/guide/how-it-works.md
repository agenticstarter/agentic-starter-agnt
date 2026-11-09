# How it works

Every token follows the same path: **launch → bonding curve → graduation to PancakeSwap**.

<div class="flow">
  <div><b>Launch</b><small>1B tokens are created. 800M go on the curve, 200M are kept for liquidity.</small></div>
  <div class="arrow">→</div>
  <div><b>Bonding curve</b><small>Agents buy, anyone sells. Price rises with each buy. 1% fee per trade.</small></div>
  <div class="arrow">→</div>
  <div><b>Graduation</b><small>At {{P.mainnet.graduationTargetBnb}} BNB the token lists on PancakeSwap. LP burned, curve closed.</small></div>
</div>

## 1. Connect an agent wallet

Your agent acts through an agent wallet with daily limits that you set. The wallet needs an **Agent ID** to buy on
the curve. See [Set up an agent wallet](/guide/agent-wallet). On testnet any wallet can claim a free Agent ID.

## 2. Launch on a bonding curve

Launching creates a token with a fixed supply of **1,000,000,000**:

| Part | Amount | Purpose |
| --- | --- | --- |
| Curve | 800,000,000 | Sold along the bonding curve |
| Liquidity | 200,000,000 | Added to PancakeSwap at graduation |

The token address always ends in **`AAAA`**. That is our brand mark; it is not a guarantee, so always open tokens
from [agenticstarter.xyz](https://agenticstarter.xyz) or check them on [Site integrity](https://agenticstarter.xyz/integrity).

The price follows a constant-product formula: buying moves it up, selling moves it down. The creator can make the
first buy in the launch transaction, under the same wallet cap as everyone.

Rules while on the curve:

- **Buy:** Agent ID holders only, checked on-chain on every buy.
- **Sell:** any holder, no approval transaction needed. Selling is never paused.
- **Wallet cap:** {{P.mainnet.walletCapBps|pct}} of supply per wallet on mainnet ({{P.testnet.walletCapBps|pct}} on testnet). A
  buy that would cross it is trimmed and the rest of the BNB is refunded in the same transaction. Because of the cap
  a token needs at least **{{P.mainnet.minWalletsToGraduate}} different wallets** to graduate on mainnet
  ({{P.testnet.minWalletsToGraduate}} on testnet). The token page shows how many more holders are needed.
- **Fee:** 1% on buys and sells. See [Fees](/guide/fees).
- **Transfers:** locked. Tokens move only between the curve and traders, so nobody can dodge the cap or open a pool
  early.

Each token keeps the settings it was launched with (graduation target, wallet cap, graduation fee and bonus). If the
team changes a setting later, it only applies to new tokens.

## 3. Graduate to PancakeSwap

When the curve reaches its target (**{{P.mainnet.graduationTargetBnb}} BNB** raised on mainnet,
**{{P.testnet.graduationTargetBnb}} BNB** on testnet), graduation:

1. unlocks transfers for good;
2. takes the graduation fee: {{P.mainnet.graduationFeeBps|pct}} of the target, at most 2 BNB
   ({{P.mainnet.graduationFeeBnb}} BNB at the mainnet target). A fifth of it ({{P.mainnet.creatorBonusBps|pct}}) is a
   **graduation bonus for the creator**, the rest goes to the treasury;
3. adds the 200M liquidity tokens and the rest of the BNB to PancakeSwap V2, minting the LP straight to the
   burn address, so the liquidity is locked forever.

The buy that fills the curve triggers graduation. If it does not (for example when a token has a minimum curve
time), anyone can call `graduate(token)` once the target is reached. The listing price matches the curve's last
price, so there is no jump. After graduation there is no platform fee and anyone can trade on PancakeSwap, with or
without an Agent ID.

::: tip The buy that fills the curve pays for listing
The final buy runs the migration, so it costs more gas. The CLI flags this as `nearGraduation`.
:::

## Creator allocation (testnet)

On testnet the creator receives {{P.testnet.creatorAllocBps|pct}} of the supply at the launch price, outside the wallet
cap. It is held by the launchpad, cannot be sold before graduation, and unlocks linearly over
{{P.testnet.creatorAllocUnlockDays}} days after graduation. On mainnet this is set to {{P.mainnet.creatorAllocBps|pct}}
today; the team can raise it for new tokens only, and every change is public on
[Site integrity](https://agenticstarter.xyz/integrity).

## Safety switches

The contracts have no upgrade proxies. The owner is a 2-of-2 multisig (Safe). A guardian wallet can pause **new
launches and buys** in an emergency; only the owner can unpause. **Selling, refunds, claims and graduation are never
paused.** Swapping a module (the Agent ID check, the token template, the listing adapter, the fee escrow or the
staking perks) waits in a public **48-hour timelock**. On mainnet, fees and the graduation target can move at most
±50% per 7 days, always inside hard caps written into the contract.
