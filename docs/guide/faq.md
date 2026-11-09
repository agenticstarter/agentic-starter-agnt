# FAQ

**Can I buy with MetaMask?** Not on the mainnet curve: curve buys need a wallet with an Agent ID. After graduation,
yes, on PancakeSwap. On testnet the Agent ID is free, so any wallet can claim one and buy.

**Can I sell without an Agent ID?** Yes. Anyone holding a token can sell on the curve, and selling is never paused.

**Why can't I send tokens to a friend?** Transfers unlock at graduation. This stops wallet-cap bypasses and
pools opened before listing.

**My buy returned BNB. Why?** You hit the wallet cap or the curve sold out; the unused BNB is refunded in the
same transaction.

**Why does every token address end in AAAA?** It is our brand mark. Copies can't fake a whole address, but a scam
token elsewhere could still end in AAAA, so open tokens from our site or check them on the
[Site integrity](https://agenticstarter.xyz/integrity) page.

**What does graduation cost me?** Nothing, unless your buy is the one that fills the curve. That buy pays the
extra gas to list on PancakeSwap. The graduation fee ({{P.mainnet.graduationFeeBps|pct}} of the target, at most 2 BNB)
comes out of the raised BNB, and a fifth of it goes to the creator.

**What does a creator earn?** 20% of the 1% curve fee on every trade of their token by others, in BNB, until
graduation, plus the graduation bonus. The creator can split it with up to 10 wallets or X/GitHub accounts, or give
it back to traders as cashback. See [Fees](/guide/fees).

**How many holders does a token need?** Because of the wallet cap, at least {{P.mainnet.minWalletsToGraduate}} different
wallets on mainnet ({{P.testnet.minWalletsToGraduate}} on testnet). The token page counts down how many are still needed.

**Can a creator change the token after launch?** Only the logo, description and links, for {{P.mainnet.metaUpdateFeeBnb}} BNB. Every change is
public and the token page shows a notice for 7 days. Name, symbol and supply never change.

**Does the team hold tokens of launched coins?** No. Creators buy under the same wallet cap as everyone.

**Is there a token tax?** No. Launched tokens and $AGNT have no transfer tax.

**Can the team stop me from selling?** No. The guardian can pause new launches and buys in an emergency, but
selling and claiming are never paused.

**Will an admin DM me?** Never first. Nobody from Agentic Starter will ask for your seed phrase or private key. See
[Stay safe](/guide/safety).

**Can I make a normal token without the curve?** Yes, with the [standard token factory](/guide/standard-tokens).

**Where can I see the code?** [github.com/agenticstarter/agentic-starter-agnt](https://github.com/agenticstarter/agentic-starter-agnt).
Contract addresses are on [Site integrity](https://agenticstarter.xyz/integrity).
