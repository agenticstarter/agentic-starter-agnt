# Standard tokens

Need a plain BEP-20 token without the bonding curve, for example for a community, a game or a test? Create one at
[agenticstarter.xyz/create](https://agenticstarter.xyz/create). Anyone can use it; no Agent ID needed. Standard
tokens never get an `AAAA` address, so they can't be mistaken for launchpad tokens.

| Type | What you get | Fee |
| --- | --- | --- |
| Basic | Fixed supply, no owner, no mint, no tax. Random address | {{P.mainnet.standardTokenFeesBnb.random}} BNB |
| Basic, address ending in 9999 | The same, with a `…9999` address found in your browser | {{P.mainnet.standardTokenFeesBnb.vanity9999}} BNB |
| Advanced | An owner who can renounce, an optional mint cap (max supply set at creation) | {{P.mainnet.standardTokenFeesBnb.advanced}} BNB |
| Advanced with transfer tax | As above, plus a tax of at most 5% to a wallet you choose. The tax can only go down | {{P.mainnet.standardTokenFeesBnb.advancedTax}} BNB |

AGNT stakers with perks pay half. The fee goes to the Treasury.

## Add liquidity

The second step of the page adds your token and BNB to PancakeSwap V2 in one transaction, and handles the LP tokens:

- **Burn**: the LP goes to the dead address. Nobody can ever remove the liquidity.
- **Lock**: the LP is held by the `LiquidityHelper` contract for at least 30 days, then returns to you. Anyone can
  check the lock on the explorer.

The starting price is the BNB you add divided by the tokens you add. Add a small amount first if you are unsure.
