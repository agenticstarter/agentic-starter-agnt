# Mag-launch ng token

Sabihin sa agent mo kung ano ang ilalaunch, tingnan ang preview, aprubahan. Iyon na ang buong proseso.

```text
Launch a token on Agentic Starter: name "Nova Agent", symbol NOVA, description "Scouts fresh launches",
logo https://…/nova.png, X @nova_agent, and buy 0.2 BNB of it in the same transaction.
Show me the preview first and wait for my OK.
```

Pinapatakbo ng agent:

```bash
agentic create --name "Nova Agent" --symbol NOVA \
  --description "Scouts fresh launches" --logo https://…/nova.png --twitter @nova_agent \
  --telegram https://t.me/nova_agent --buy 0.2
agentic execute --request-id <id>
```

Bago ang preview, naghahanap ang CLI ng salt para magtapos sa `AAAA` ang address ng token. Ilang segundo lang ito.

Sa website, tatlong hakbang ang launch form. Mag-type ng isang pangungusap tungkol sa ideya mo at pindutin ang **Fill it
in** para makakuha ng pangalan, simbolo at paglalarawan na puwede mong i-edit. I-drop ang logo: ipi-pin ito sa IPFS at
gagamit ang prompt ng `ipfs://` link (sa CLI, ganoon din ang `--logo ./nova.png`). Pagkatapos, piliin kung saan mapupunta
ang creator fees, tingnan ang preview card, at kopyahin ang prompt para sa agent mo. May curve simulator na nagpapakita ng
presyo at market cap sa bawat yugto.

| Field | Limitasyon |
| --- | --- |
| Pangalan | 1–32 character |
| Simbolo | 2–10 malalaking letra o numero. Nakareserba ang mga ticker gaya ng AGNT, BNB, BTC, ETH, USDT, USDC at CAKE |
| Script ng pangalan at simbolo | Isang alpabeto lang bawat pangalan, kaya tinatanggihan ang mga magkakamukhang letra mula sa ibang script |
| Metadata (paglalarawan, URL ng logo, mga link) | naka-store on-chain, hanggang ~1 KB |
| Logo | `https://` / `ipfs://` URL, o lokal na PNG, JPG, GIF o WebP hanggang 1 MB (ina-upload sa IPFS) |
| Unang bili | opsyonal, kailangan ng Agent ID, may wallet cap |
| X | link o `@handle` (naka-store bilang handle) |
| Telegram | `t.me` link lang |
| Launch fee | {{P.mainnet.launchFeeBnb}} BNB sa mainnet, libre sa testnet at para sa mga AGNT staker na may perks, dagdag ang gas |
| Pair | BNB. Darating ang ibang pair sa susunod |

Walang tax, mint function o may-ari ang mga token.

## Saan napupunta ang creator fees

| Opsyon | CLI | Website |
| --- | --- | --- |
| Ang launch wallet mo (default) | — | iwanang walang laman ang fee wallet |
| Ibang wallet | `--fee-to 0xWallet:100` | field na **Creator fee wallet** |
| Hati, hanggang 10 tatanggap | `--fee-to 0xA:60,0xB:40` | itakda sa My tokens pagkatapos ng launch |
| Isang X o GitHub account | `--fee-to 0xA:80,x:@alice:20` | itakda sa My tokens pagkatapos ng launch |
| Cashback sa mga trader | `--cashback` | **Reward mode → Cashback** |

Naghihintay sa escrow ang bahagi ng mga account hanggang mapatunayan ng may-ari ng account ito at mag-link ng wallet; ang
hindi na-claim na bahagi ay babalik sa creator pagkalipas ng 90 araw. Ang pagbabago ng hati ay ilalapat 24 oras pagkatapos
mo itong imungkahi. Tingnan ang [Mga bayarin](/fil/guide/fees#creator-fee-options).

## Testnet: mag-launch gamit ang Telegram bot {#testnet-telegram}

Sa BNB Chain testnet, puwede kang mag-launch nang hindi nagse-set up ng agent. Ang bot naming si Agen ang kikilos bilang
agent at magbabayad ng gas; ang wallet mo ang itatala bilang creator.

1. Buksan ang [Launch](https://agenticstarter.xyz/launch?lang=fil), ikonekta ang wallet na magmamay-ari ng token at punan ang
   pangalan, simbolo, logo, paglalarawan at mga link.
2. Pindutin ang **Open in Telegram**. Magbubukas ang bot kasama ang launch code mo at magpapakita ng preview.
3. I-tap ang **🚀 Launch now**. Ilang segundo pagkatapos, sasagot ang bot ng address ng token, at lalabas ang token sa
   Explore page.

Kung hindi bumukas ang Telegram, kopyahin ang linyang `/launch ABCD2345` sa pahina at ipadala sa bot. Valid ang mga code nang
24 oras at isang beses lang gagana. Bawat Telegram account ay puwedeng mag-launch ng hanggang 3 token bawat araw.

Hindi bibili ang bot para sa iyo. Para bumili, buksan ang token page, kumuha ng libreng testnet Agent ID at bumili gamit ang
test BNB. Sa testnet, nagga-graduate ang token sa **{{P.testnet.graduationTargetBnb}} BNB**.

## Pagkatapos ng launch

Magpapakita ang launch page ng **post-launch kit**: handang X post, Telegram text, share image at embed widget para sa
website mo. Sa [My tokens](https://agenticstarter.xyz/me?lang=fil) puwede kang:

| Gawain | Detalye |
| --- | --- |
| Subaybayan ang progreso | Progreso ng curve, nalikom na BNB, mga holder |
| I-claim ang creator rewards | 20% ng bawat curve fee sa token mo, sa BNB, hanggang graduation, dagdag ang graduation bonus |
| I-update ang info | Palitan ang logo, paglalarawan at mga link sa halagang {{P.mainnet.metaUpdateFeeBnb}} BNB sa mainnet. Hindi kailanman nagbabago ang pangalan at simbolo. Makikita ng mga holder ang abiso nang 7 araw at pampubliko ang buong kasaysayan. |
| Hati ng fee | Magmungkahi ng bagong hati; ilalapat ito pagkalipas ng 24 oras |
| Ilipat ang creator | Magmungkahi ng bagong creator wallet; hahalili ito kapag tinanggap niya sa token page. Iyo pa rin ang mga reward na nakuha na. |
| Alokasyon ng creator | Kung saan ito ipinapatupad (testnet ngayon), i-claim ang na-unlock na bahagi pagkatapos ng graduation |
| I-verify ang X | I-link ang X account mo para magpakita ng verified creator badge sa token page |

Ang mga creator ng unang 100 token na mag-graduate sa mainnet ay makakakuha ng permanenteng **Genesis Creator** badge.
