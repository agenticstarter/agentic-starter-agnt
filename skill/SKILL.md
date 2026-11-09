---
name: agentic-starter
description: |
  Use when the user wants to launch, buy, sell or look up tokens on Agentic Starter — the agent-only
  bonding-curve launchpad on BNB Chain where every pool pairs with BNB. Triggers: agentic starter,
  agenticstarter.xyz, launch a token for my agent, buy/sell on the curve, about to graduate, new launches,
  wallet cap, Agent ID, creator fees, $AGNT.
metadata:
  version: "0.3.0"
  requires:
    bins: [agentic]
  install:
    - kind: node
      package: "@agenticstarter/cli@latest"
      bins: [agentic]
---

# Agentic Starter skill

Agentic Starter is a bonding-curve launchpad on BNB Chain. Only wallets holding an **Agent ID** can buy on
the curve; anyone can sell. While a token is on the curve each wallet may hold at most the token's **wallet cap**
(1% of supply on mainnet) — extra BNB is refunded in the same transaction. Curve buys and sells pay **1%**:
20% to the token's creator split (or back to the trader in cashback mode), the rest to buyback-and-burn of
$AGNT, $AGNT stakers and the treasury. When the token's **graduation target** is raised (16 BNB on mainnet at
launch) it graduates: 3% of the target is the graduation fee (a fifth of it goes to the creator), the remaining
BNB and 200M tokens become burned liquidity on PancakeSwap. Before graduation tokens cannot be transferred.

The `agentic` CLI reads the chain and builds transactions. It never asks for seed phrases. Every command
prints JSON. `agentic mcp` exposes the same tools to MCP clients.

## Rules for the agent

1. First run: `agentic init --network testnet|mainnet --wallet <agent wallet>` (writes the config and runs
   preflight). Start every later session with `agentic preflight`. If `ok` is false, relay each `fix`.
2. Writes are always two steps: a preview (`buy`, `sell`, `create`, `claim`, `ignite`) returns a `requestId`;
   show the preview to the user and **wait for an explicit yes** before `agentic execute --request-id <id>`.
3. A `requestId` expires after 5 minutes and can be executed only once. If it expired, preview again.
4. Never execute on the user's behalf without approval; never retry `execute` after a broadcast error without
   checking `agentic tx --hash` first.
5. If `preview.nearGraduation` is true, tell the user this buy may pay the gas to list on PancakeSwap.
6. Graduated tokens trade on PancakeSwap; `agentic token` returns the `trade` link.
7. After a successful launch, `execute` returns `share.text`: offer it to the user as a ready post.

## Commands

| Intent | Command |
| --- | --- |
| Set up | `agentic init --network testnet --wallet 0x… [--signer-cmd "<cmd>"]` |
| Am I ready? | `agentic preflight` |
| What's hot / new / about to graduate | `agentic hot` · `agentic new` · `agentic near-grad` |
| One token | `agentic token --token <addr>` |
| Price check | `agentic quote --token <addr> --bnb <n>` · `agentic quote --token <addr> --percent <p>` |
| Buy | `agentic buy --token <addr> --bnb <n> [--slippage 1]` → `agentic execute --request-id <id>` |
| Sell | `agentic sell --token <addr> --percent <p>` (or `--amount <n>` / `--all`) → execute |
| Launch | `agentic create --name <n> --symbol <S> [--description d] [--logo ./logo.png] [--twitter @h] [--telegram url] [--buy <bnb>] [--fee-to 0xA:80,x:@handle:20] [--cashback]` → execute |
| Creator fees | `agentic claim --tokens <addr,addr>` → execute |
| Burn + message | `agentic ignite --token <addr> --percent <p> --message "gm"` → execute |
| What happened | `agentic tx --hash <0x…>` |
| Stream events | `agentic watch [--token <addr>] [--max-events 1] [--timeout 30m]` (NDJSON) |
| MCP server | `agentic mcp` (tools: agentic_preflight, _list, _token, _quote, _buy, _sell, _launch, _execute) |

## Signer setup

- `AGENTIC_SIGNER_CMD` + `AGENTIC_WALLET`: an external command that receives `{chainId,to,data,value}` on
  stdin and prints the transaction hash — use this to connect the user's agentic wallet CLI.
- `AGENTIC_PRIVATE_KEY`: a dedicated key for testnet or a separate agent wallet. Never ask the user to paste
  the key of their main wallet.

Network defaults to BNB Chain (`AGENTIC_CHAIN_ID=56`); use `97` for testnet. Docs: https://docs.agenticstarter.xyz/agents/cli
