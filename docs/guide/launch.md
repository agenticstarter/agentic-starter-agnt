# Launch a token

Tell your agent what to launch, review the preview, approve. That is the whole flow.

```text
Launch a token on Agentic Starter: name "Nova Agent", symbol NOVA, description "Scouts fresh launches",
logo https://…/nova.png, X @nova_agent, and buy 0.2 BNB of it in the same transaction.
Show me the preview first and wait for my OK.
```

The agent runs:

```bash
agentic create --name "Nova Agent" --symbol NOVA \
  --description "Scouts fresh launches" --logo https://…/nova.png --twitter @nova_agent \
  --telegram https://t.me/nova_agent --buy 0.2
agentic execute --request-id <id>
```

Before the preview, the CLI searches for a salt that gives the token an address ending in `AAAA`. This takes a few
seconds.

On the website, the launch form works in three steps. Type one sentence about your idea and press **Fill it in** to
get a name, symbol and description you can edit. Drop the logo in: it is pinned to IPFS and the prompt uses the
`ipfs://` link (from the CLI, `--logo ./nova.png` does the same). Then pick where the creator fees go, check the
preview card, and copy the prompt for your agent. A curve simulator shows the price and market cap at each stage.

| Field | Limit |
| --- | --- |
| Name | 1–32 characters |
| Symbol | 2–10 capital letters or digits. Tickers like AGNT, BNB, BTC, ETH, USDT, USDC and CAKE are reserved |
| Name and symbol script | One alphabet per name, so look-alike letters from other scripts are rejected |
| Metadata (description, logo URL, links) | stored on-chain, up to ~1 KB |
| Logo | an `https://` / `ipfs://` URL, or a local PNG, JPG, GIF or WebP up to 1 MB (uploaded to IPFS) |
| First buy | optional, needs an Agent ID, wallet cap applies |
| X | a link or `@handle` (stored as the handle) |
| Telegram | a `t.me` link only |
| Launch fee | {{P.mainnet.launchFeeBnb}} BNB on mainnet, free on testnet and for AGNT stakers with perks, plus gas |
| Pair | BNB. Other pairs are coming later |

Tokens have no tax, no mint function and no owner.

## Where the creator fees go

| Option | CLI | Website |
| --- | --- | --- |
| Your launch wallet (default) | — | leave the fee wallet empty |
| Another wallet | `--fee-to 0xWallet:100` | **Creator fee wallet** field |
| A split, up to 10 recipients | `--fee-to 0xA:60,0xB:40` | set on My tokens after launch |
| An X or GitHub account | `--fee-to 0xA:80,x:@alice:20` | set on My tokens after launch |
| Cashback to traders | `--cashback` | **Reward mode → Cashback** |

Account shares wait in an escrow until the account owner proves the account and links a wallet; unclaimed shares go
back to the creator after 90 days. A split change applies 24 hours after you propose it. See [Fees](/guide/fees#creator-fee-options).

## Testnet: launch with the Telegram bot {#testnet-telegram}

On BNB Chain testnet you can launch without setting up an agent. Our bot Agen acts as the agent and pays the gas;
your wallet is recorded as the creator.

1. Open [Launch](https://agenticstarter.xyz/launch), connect the wallet that will own the token and fill in the
   name, symbol, logo, description and links.
2. Press **Open in Telegram**. The bot opens with your launch code and shows a preview.
3. Tap **🚀 Launch now**. A few seconds later the bot replies with the token address, and the token appears on
   the Explore page.

If Telegram does not open, copy the `/launch ABCD2345` line from the page and send it to the bot. Codes are
valid for 24 hours and work once. Each Telegram account can launch up to 3 tokens a day.

The bot does not buy for you. To buy, open the token page, claim a free testnet Agent ID and buy with test BNB. On
testnet a token graduates at **{{P.testnet.graduationTargetBnb}} BNB**.

## After launch

The launch page then shows a **post-launch kit**: a ready X post, a Telegram text, a share image and an embed widget
for your website. On [My tokens](https://agenticstarter.xyz/me) you can:

| Action | Details |
| --- | --- |
| Follow progress | Curve progress, BNB raised, holders |
| Claim creator rewards | 20% of every curve fee on your token, paid in BNB, until graduation, plus the graduation bonus |
| Update info | Change logo, description and links for {{P.mainnet.metaUpdateFeeBnb}} BNB on mainnet. Name and symbol never change. Holders see a notice for 7 days and the full history stays public. |
| Fee split | Propose a new split; it applies after 24 hours |
| Transfer creator | Propose a new creator wallet; it takes over when it accepts on the token page. Rewards already earned stay claimable by you. |
| Creator allocation | Where it applies (testnet today), claim the unlocked part after graduation |
| Verify X | Link your X account to show a verified creator badge on the token page |

The creators of the first 100 tokens to graduate on mainnet get a permanent **Genesis Creator** badge.
