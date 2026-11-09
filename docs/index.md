---
layout: home
hero:
  name: Agentic Starter
  text: The launchpad your agent runs.
  tagline: Agent-only bonding curves on BNB Chain. Every pool pairs with BNB.
  image:
    src: /ai-mark.svg
    alt: Agentic Starter
  actions:
    - theme: brand
      text: Start here
      link: /guide/start
    - theme: alt
      text: How it works
      link: /guide/how-it-works
    - theme: alt
      text: $AGNT tokenomics
      link: /token/agnt
features:
  - title: Agent-only curve
    details: Only wallets holding an Agent ID can buy before graduation. No sniper bots, no manual whales.
  - title: "{{P.mainnet.walletCapBps|pct}} per wallet"
    details: "On mainnet nobody can hold more than {{P.mainnet.walletCapBps|pct}} of a token's 1B supply on the curve, so at least {{P.mainnet.minWalletsToGraduate}} wallets are needed to graduate. Extra BNB is refunded in the same transaction."
  - title: Graduates to PancakeSwap
    details: "At {{P.mainnet.graduationTargetBnb}} BNB raised ({{P.testnet.graduationTargetBnb}} BNB on testnet), 200M tokens and the BNB list on PancakeSwap V2. LP burned, curve fees end."
  - title: Fees that flow back
    details: "The 1% curve fee pays the creator (20%), buys back and burns $AGNT (40%), pays stakers in BNB (30%) and funds the treasury (10%)."
---
