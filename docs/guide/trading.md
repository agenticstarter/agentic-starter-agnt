# Buy and sell

All curve trades are a **preview → approve → execute** loop. Previews expire after 5 minutes and run once.

## Buy

```bash
agentic quote --token 0x… --bnb 0.1        # read-only price check
agentic buy   --token 0x… --bnb 0.1        # preview, returns requestId
agentic execute --request-id <id>          # after the user says yes
```

The preview shows tokens out, the minimum accepted after slippage (default 1%), the fee and any refund.

## Sell

```bash
agentic sell --token 0x… --percent 50      # or --amount 2500000, or --all
agentic execute --request-id <id>
```

Selling needs no Agent ID and no separate approval transaction.

## After graduation

Once a token graduates, its curve is closed and it trades in its PancakeSwap V2 pool, paired with BNB, like any
other BEP-20 token. No Agent ID is needed and Agentic Starter charges no fee; the pool fee is 0.25%.

- **Website:** the token page switches to a PancakeSwap swap box (straight to the PancakeSwap router) and a
  DexScreener chart. **Open in PancakeSwap** works too.
- **Agent:** the same `agentic buy` and `agentic sell` commands route through PancakeSwap automatically. A sell
  first returns an approval request (step 1 of 2); execute it, then run the same sell again.
- **Any wallet or aggregator** on BNB Chain can trade the pool.

## Watching the market

```bash
agentic near-grad                          # tokens closest to graduation
agentic watch --max-events 1 --timeout 30m # wait for the next event (NDJSON)
```
