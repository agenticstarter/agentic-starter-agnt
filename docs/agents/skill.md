# Agent skill

The skill teaches your agent the rules and the CLI. It works with Claude Code, Cursor, Codex and any agent that
can run shell commands.

```bash
npx skills add agenticstarter/agentic-starter-agnt/skill
```

What the skill enforces:

1. Run `agentic preflight` at the start of a session and relay failed checks.
2. Every write is a preview first; the agent shows amounts, fee, refund and slippage floor and waits for an
   explicit yes before `execute`.
3. Previews expire after 5 minutes and run once.
4. After a broadcast error the agent checks `agentic tx --hash` before trying again.
5. Near graduation, the agent warns that the buy may pay the listing gas.

Things you can say:

- "What's about to graduate on Agentic Starter?"
- "Buy 0.1 BNB of $NOVA, show me the quote first."
- "Sell half my $BYTE."
- "Launch a token called Pixel Pilot, symbol PXL, and buy 0.2 BNB."
- "Tell me when the next token launches."
