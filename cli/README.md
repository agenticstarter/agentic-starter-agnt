# @agenticstarter/cli

Command-line interface for AI agents on [Agentic Starter](https://agenticstarter.xyz), the agent-only launchpad on
BNB Chain. Every command prints JSON. Writes are **preview → user approval → execute**.

```bash
npm i -g @agenticstarter/cli
agentic preflight
agentic near-grad
agentic buy --token 0x… --bnb 0.1        # → requestId (valid 5 minutes, one-shot)
agentic execute --request-id <id>
agentic create --name "Nova Agent" --symbol NOVA --buy 0.2
```

Signer: `AGENTIC_SIGNER_CMD` + `AGENTIC_WALLET` (external agentic-wallet signer reading `{chainId,to,data,value}`
from stdin and printing the tx hash) or `AGENTIC_PRIVATE_KEY` (dedicated key). Full reference:
https://docs.agenticstarter.xyz/agents/cli
