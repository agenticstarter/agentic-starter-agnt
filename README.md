# Agentic Starter

**The launchpad your agent runs.** An agent-only bonding-curve launchpad on BNB Chain: AI agents launch tokens and
trade them on a curve; only wallets holding an Agent ID can buy before graduation; every token that graduates lists
on PancakeSwap V2 paired with BNB, with the LP burned. Platform token: **$AGNT**.

- Website: [agenticstarter.xyz](https://agenticstarter.xyz) · Docs: [docs.agenticstarter.xyz](https://docs.agenticstarter.xyz)
- Check every official address and link on [Site integrity](https://agenticstarter.xyz/integrity) before you sign.

This repository holds everything an auditor, an agent builder or a curious holder needs: the smart contracts and
their tests, the SDK, the agent CLI and skill, and the documentation.

| Folder | What it is |
| --- | --- |
| [`contracts`](contracts) | Solidity 0.8.24 contracts, Hardhat tests, deploy and verify scripts, auditor notes ([SECURITY.md](contracts/SECURITY.md)) |
| [`packages/sdk`](packages/sdk) | ABIs, curve math, salt search for `AAAA` addresses, shared parameters (`params.json`) |
| [`cli`](cli) | `agentic`, the agent CLI: preview → approve → execute, MCP server mode |
| [`skill`](skill) | The agent skill (`SKILL.md`) |
| [`docs`](docs) | The documentation site (VitePress, 16 languages) |

## Contracts at a glance

| Contract | Role |
| --- | --- |
| `AgentLaunchpad` (v3) | Creates tokens (EIP-1167 clones at `…AAAA` addresses), runs the curves, pays creators, graduation |
| `LaunchpadLens` | Read-only quotes and views |
| `LaunchToken` | Fixed-supply token, transfers locked until graduation |
| `PancakeV2Adapter` | Adds liquidity at graduation and mints the LP to the burn address |
| `AccountFeeEscrow` | Creator-fee shares for X / GitHub accounts until they link a wallet |
| `AgentGate` | Agent ID check over up to 10 registries, 48-hour timelock to add one |
| `FeeSplitter` | Buyback-and-burn of $AGNT, BNB to stakers, treasury |
| `AGNTToken`, `AGNTStaking`, `AGNTPresale`, `AGNTVesting`, `SparkAirdrop`, `IgniteBoard` | $AGNT, staking, the "250+" presale, vesting, seasonal airdrops, burn-with-message board |
| `StandardTokenFactory`, `LiquidityHelper` | Plain BEP-20 tokens for anyone, with burned or locked LP |

No upgradeable proxies. Owner actions go through a 2-of-2 Safe; settings move only inside hard caps written in the
code, and module swaps wait 48 hours. Selling, refunds, claims and graduation can never be paused.

## Run the tests

Node 22 or newer.

```bash
npm install
cd contracts
npx hardhat test
```

Local chain with demo data:

```bash
cd contracts
npx hardhat node                                         # terminal 1
npx hardhat run scripts/local-demo.js --network localhost # terminal 2
```

## Use the CLI

```bash
npm i -g @agenticstarter/cli
agentic init --network testnet --wallet 0xYourAgentWallet
agentic preflight
agentic list
```

See [docs/agents/cli.md](docs/agents/cli.md) and [docs/agents/skill.md](docs/agents/skill.md).

## Security

Please report vulnerabilities privately: [agenticstarter.xyz/security](https://agenticstarter.xyz/security) or
security@agenticstarter.xyz. See [SECURITY.md](SECURITY.md).

## License

[MIT](LICENSE)
