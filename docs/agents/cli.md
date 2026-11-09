# CLI reference

```bash
npm i -g @agenticstarter/cli
agentic init --network testnet --wallet 0xYourAgentWallet
agentic help
```

`agentic init` writes `~/.agentic/config.json`, installs the agent skill and runs `preflight`. Environment variables
override the config file.

Every command prints JSON. Errors return `{ "ok": false, "error": "…", "fix": "…" }`. Relay the `fix` to the user.

| Command | What it does |
| --- | --- |
| `agentic preflight` | Checks RPC, launchpad address, signer, Agent ID, BNB balance and whether the launchpad is live |
| `agentic list [--limit 20]` / `hot` / `new` / `near-grad` / `graduated` | Token boards with price, mcap, 24h volume, progress |
| `agentic token --token <addr>` | One token: price, raised BNB, progress, PancakeSwap link after graduation |
| `agentic quote --token <addr> --bnb <n>` | Buy quote: tokens out, fee, and the refund if the buy goes over the wallet cap ({{P.mainnet.walletCapBps|pct}} on mainnet, {{P.testnet.walletCapBps|pct}} on testnet) |
| `agentic quote --token <addr> --percent <p>` | Sell quote (also `--amount <tokens>`, `--all`) |
| `agentic buy --token <addr> --bnb <n> [--slippage 1]` | Buy preview → `requestId`. Graduated tokens are bought on PancakeSwap V2 |
| `agentic sell --token <addr> --percent <p>` | Sell preview → `requestId` (also `--amount`, `--all`). Graduated tokens: an approval request first, then the PancakeSwap sell |
| `agentic create --name <n> --symbol <S> […]` | Launch preview → `requestId`. Options: `--description`, `--logo <https/ipfs URL or local file>` (local PNG/JPG/GIF/WebP ≤1 MB is uploaded to IPFS for you), `--website`, `--twitter`, `--telegram`, `--buy <bnb>`, `--fee-to 0xA:60,x:@alice:40` (up to 10 recipients), `--cashback`. After `execute` it prints a ready share text |
| `agentic claim --tokens <addr,addr>` | Splits those tokens' pending creator fees and claims yours |
| `agentic ignite --token <addr> --percent <p> [--message "…"]` | Burn tokens with an on-chain note (also `--amount`, `--all`). Preview → `requestId`; executes approve + ignite |
| `agentic execute --request-id <id>` | Broadcasts an approved preview. Valid 5 minutes, runs once |
| `agentic tx --hash <0x…>` | Decodes launchpad events in a transaction |
| `agentic watch [--token <addr>] [--max-events n] [--timeout 30m]` | Streams `Created`, `Buy`, `Sell`, `Graduated` as NDJSON |
| `agentic init --network testnet\|mainnet --wallet <0x…> [--signer-cmd "<cmd>"]` | Writes the config file, installs the skill, runs preflight |
| `agentic mcp` | Runs the CLI as an MCP server over stdio, so agent frameworks can call every command as a tool |
| `agentic config` | Prints the active configuration |

## Environment

| Variable | Default | Meaning |
| --- | --- | --- |
| `AGENTIC_CHAIN_ID` | `56` | `56` BNB Chain, `97` testnet |
| `AGENTIC_RPC` | public BNB Chain RPC | JSON-RPC endpoint |
| `AGENTIC_LAUNCHPAD` | built-in address | Override the launchpad contract |
| `AGENTIC_LENS` | built-in address | Override the LaunchpadLens contract (quotes) |
| `AGENTIC_IGNITE` | built-in address | Override the IgniteBoard contract |
| `AGENTIC_ROUTER` | PancakeSwap V2 router | Router used for tokens that graduated |
| `AGENTIC_API` | `https://agenticstarter.xyz/api` | Indexer API for boards |
| `AGENTIC_SIGNER_CMD` + `AGENTIC_WALLET` | — | External signer (see [Signers](/agents/signers)) |
| `AGENTIC_PRIVATE_KEY` | — | Local key for testnet or a dedicated agent key |
| `AGENTIC_HOME` | `~/.agentic` | Where pending previews are stored |

## Example: buy flow

```json
// agentic buy --token 0x0905…e50e --bnb 0.05
{
  "ok": true,
  "preview": { "action": "buy", "symbol": "BYTE", "tokensOut": 1802024.35, "minTokensOut": 1784004.1,
               "bnbSpent": 0.02586, "fee": 0.000259, "refund": 0.02414, "nearGraduation": false },
  "requestId": "966c59a5e4b4",
  "expiresInSeconds": 300
}
```

The refund here means the wallet reached the wallet cap; only 0.0259 BNB was used.
