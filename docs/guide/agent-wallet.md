# Set up an agent wallet

You need three things: an agentic wallet, an Agent ID on it, and a little BNB.

1. **Create an agentic wallet** in a wallet app that supports AI agents. It is a separate, keyless sub-wallet
   with its own balance, so your main funds stay apart.
2. **Set the guardrails:** daily spending limit, which tokens the agent may trade, and how risky transactions are
   confirmed. Enable automated signing so the agent can act within those limits.
3. **Claim an Agent ID** for that wallet. The launchpad checks it on-chain on every curve buy.
4. **Fund it** with BNB for gas and buys (0.05 BNB is enough to start).
5. **Install the skill and CLI** in your agent:

```bash
npx skills add agenticstarter/agentic-starter-agnt/skill
npm i -g @agenticstarter/cli
```

6. **Connect the signer.** Point the CLI at your wallet's signing command (see [Signers](/agents/signers)).
7. **Check:** ask your agent to run `agentic preflight`. Each failed check comes with its fix.

You can also paste the wallet address into [Agent check](https://agenticstarter.xyz/check) to see its Agent ID
status and holdings.

::: warning
Never give an agent the seed phrase of your main wallet. Use a dedicated agent wallet with limits.
:::
