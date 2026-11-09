=== CONFIG ===
description = Dokumentasyon ng Agentic Starter, ang launchpad para sa mga AI agent sa BNB Chain.
guide = Gabay
forAgents = Para sa mga agent
contracts = Mga kontrata
apps = Mga app
launchpad = Launchpad
presale = Presale
airdrop = Airdrop
whatIs = Ano ang Agentic Starter
how = Paano ito gumagana
wallet = I-set up ang agent wallet
launch = Mag-launch ng token
trading = Bumili at magbenta
ignite = Ignite (burn + mensahe)
fees = Mga bayarin
faq = Mga madalas itanong
cli = CLI reference
skill = Agent skill
signers = Mga signer
api = Indexer API
tokenomics = Tokenomics
presalePage = Presale
airdropPage = Airdrop
staking = Staking
reference = Reference
contractsPage = Mga smart contract
brand = Brand kit
risks = Mga panganib
inEnglish = Ingles
outline = Sa pahinang ito
prev = Nakaraang pahina
next = Susunod na pahina
updated = Huling na-update
top = Bumalik sa itaas
menu = Menu
appearance = Itsura
toLight = Lumipat sa light theme
toDark = Lumipat sa dark theme
langMenu = Palitan ang wika
footer = Napakapabago-bago ng presyo ng crypto. Walang anuman dito na payong pinansyal.
edit = I-edit ang pahinang ito sa GitHub
search = Maghanap
noResults = Walang resulta para sa
nfTitle = HINDI NAHANAP ANG PAHINA
nfQuote = Wala ang pahinang hinahanap mo o nailipat na ito.
nfLink = Bumalik sa home
start = Magsimula rito
glossary = Glosaryo
standardTokens = Mga standard token
telegram = Komunidad sa Telegram
community = Mga programa ng komunidad
safety = Manatiling ligtas
listing = Listing at paggamit ng pondo
installApp = I-install ang app sa phone

=== FILE index.md ===
---
layout: home
hero:
  name: Agentic Starter
  text: Ang launchpad na pinapatakbo ng agent mo.
  tagline: Mga bonding curve para lang sa agent sa BNB Chain. Bawat pool ay naka-pair sa BNB.
  image:
    src: /ai-mark.svg
    alt: Agentic Starter
  actions:
    - theme: brand
      text: Magsimula rito
      link: /guide/start
    - theme: alt
      text: Paano ito gumagana
      link: /guide/how-it-works
    - theme: alt
      text: Tokenomics ng $AGNT
      link: /token/agnt
features:
  - title: Curve para lang sa agent
    details: Bago mag-graduate, ang mga wallet lang na may Agent ID ang puwedeng bumili. Walang sniper bot, walang manual na whale.
  - title: "{{P.mainnet.walletCapBps|pct}} bawat wallet"
    details: "Sa mainnet, walang puwedeng humawak ng higit sa {{P.mainnet.walletCapBps|pct}} ng 1B supply ng isang token habang nasa curve, kaya kailangan ng hindi bababa sa {{P.mainnet.minWalletsToGraduate}} wallet para mag-graduate. Ibinabalik ang sobrang BNB sa parehong transaksyon."
  - title: Graduate sa PancakeSwap
    details: "Pag umabot ng {{P.mainnet.graduationTargetBnb}} BNB ({{P.testnet.graduationTargetBnb}} BNB sa testnet), ang 200M token at ang BNB ay naililista sa PancakeSwap V2. Sinusunog ang LP, tapos na ang curve fees."
  - title: Bayaring bumabalik
    details: "Ang 1% curve fee ay napupunta sa creator (20%), bumibili at sumusunog ng $AGNT (40%), nagbabayad ng BNB sa stakers (30%) at sa treasury (10%)."
---

=== FILE guide/start.md ===
# Magsimula rito

Bago sa crypto o sa Agentic Starter? Dadalhin ka ng pahinang ito mula sa wala hanggang sa una mong token sa mga 15 minuto.
Lahat ng nasa ibaba ay tumatakbo sa **BNB Chain testnet**, kung saan libreng test money ang BNB, kaya wala kang mawawala.

<div class="flow">
  <div><b>1. Wallet</b><small>Mag-install ng wallet app</small></div>
  <div class="arrow">→</div>
  <div><b>2. Test BNB</b><small>Libre mula sa faucet</small></div>
  <div class="arrow">→</div>
  <div><b>3. Agent ID</b><small>Libre sa testnet</small></div>
  <div class="arrow">→</div>
  <div><b>4. Mag-trade</b><small>Bumili at magbenta sa curve</small></div>
  <div class="arrow">→</div>
  <div><b>5. Mag-launch</b><small>Sarili mong token</small></div>
</div>

## 1. Kumuha ng wallet

Ang wallet ay app na naglalaman ng crypto mo at pumipirma ng mga transaksyon. Mag-install ng wallet na sumusuporta sa BNB
Chain, gaya ng MetaMask, Trust Wallet o Rabby.

Kapag ginawa mo ito, magpapakita ang app ng **seed phrase** (12 o 24 na salita). Isulat ito sa papel at itago offline.
Kontrolado ng sinumang may hawak nito ang wallet mo. Walang taga-Agentic Starter na hihingi nito kailanman.

## 2. Kumuha ng libreng test BNB

1. Buksan ang [agenticstarter.xyz](https://agenticstarter.xyz) at pindutin ang **Connect**. Hihilingin ng site sa wallet mo
   na lumipat sa **BNB Smart Chain Testnet** (chain 97). Tanggapin.
2. Kopyahin ang address ng wallet mo (nagsisimula sa `0x`).
3. Buksan ang faucet ng BNB Chain testnet, i-paste ang address at humingi ng tBNB. Darating ito sa loob ng isa o dalawang [bnbchain.org/en/testnet-faucet](https://www.bnbchain.org/en/testnet-faucet)
   minuto.

Ang [Start page](https://agenticstarter.xyz/start) sa launchpad ay dumadaan sa parehong mga hakbang at tsine-check ang mga ito
habang ginagawa mo.

## 3. Kumuha ng Agent ID

Kailangan ng **Agent ID** sa wallet mo para bumili sa bonding curve. Libre ito sa testnet: buksan ang kahit anong token page
at pindutin ang **Get Agent ID**. Kaunting test gas lang ang babayaran mo.

## 4. Gawin ang unang trade mo

Sa parehong token page, bumili ng kaunti, tapos magbenta ng bahagi. Panoorin ang progress bar na umuusad papuntang
PancakeSwap. Hindi kailanman kailangan ng Agent ID para magbenta.

## 5. I-launch ang sarili mong token

Buksan ang [Launch](https://agenticstarter.xyz/launch), ilagay ang pangalan, simbolo at logo, at pindutin ang
**Open in Telegram**. Ilalaunch ito ng bot naming si Agen para sa wallet mo at siya ang magbabayad ng gas. Detalye sa
[Mag-launch ng token](/guide/launch#testnet-telegram).

## Habang nandito ka: ang airdrop

Bawat hakbang na ito ay nagbibigay rin ng [airdrop points](/token/airdrop): pag-launch, pag-trade, ang araw-araw na quiz at
iba pa.

## Mga salitang makikita mo

Hindi sigurado kung ano ang "curve", "graduation" o "gas"? Tingnan ang [glosaryo](/guide/glossary). Natigil pa rin? Tanungin
si Agen, ang chat bubble sa sulok ng bawat site, o sa Telegram group namin.

=== FILE guide/glossary.md ===
# Glosaryo

| Salita | Kahulugan |
| --- | --- |
| **AAAA address** | Bawat token na nilaunch dito ay may contract address na nagtatapos sa `AAAA`. Brand mark ito, hindi safety check: laging buksan ang mga token mula sa site namin. |
| **Agent** | AI program na kumikilos para sa iyo; dito, naglalaunch at nagte-trade ito ng token mula sa sarili nitong wallet, sa loob ng limitasyong itinakda mo. |
| **Agent ID** | Credential na hawak ng agent wallet. Kailangan ito para bumili sa bonding curve. Libre sa testnet. |
| **Agent wallet** | Hiwalay na wallet na ginagamit ng agent mo, may spending limit, para hiwalay ang pangunahing pondo mo. |
| **Airdrop** | Libreng $AGNT na ibinibigay sa mga eligible na wallet pagkatapos ng season, ayon sa proporsyon ng points nila. |
| **BNB** | Ang native coin ng BNB Chain. Pambayad ng gas, at lahat ng token dito ay may presyo sa BNB. |
| **BNB Chain** | Ang blockchain kung saan tumatakbo ang Agentic Starter. |
| **Bonding curve** | Contract na nagbebenta ng bagong token sa presyong itinakda ng formula: tumataas ang presyo sa bawat bili, bumababa sa bawat benta. Hindi kailangan ng order book. |
| **Burn** | Pagpapadala ng token sa address na walang kumokontrol, kaya nawawala ito nang tuluyan. |
| **Creator** | Ang wallet na pinaglaunchan ng token. Kumikita ito ng bahagi ng curve fees hanggang graduation (o ibinibigay ito sa mga trader bilang cashback). |
| **Cashback** | Opsyon sa launch: ang bahagi ng creator sa curve fee ay ibinabalik sa trader sa bawat trade. |
| **Featured** | Puwesto sa Explore na binabayaran sa pamamagitan ng pag-burn ng AGNT. Patalastas ito, hindi review. |
| **Golden hour** | Isang oras bawat araw kung kailan doble ang bilang ng airdrop points. |
| **Curve fee** | 1% ng bawat bili at benta sa bonding curve. Tingnan ang [Mga bayarin](/guide/fees). |
| **Faucet** | Website na namimigay ng libreng testnet BNB. |
| **Gas** | Maliit na bayad na kinukuha ng network sa bawat transaksyon, binabayaran sa BNB. |
| **Genesis Creator** | Permanenteng badge para sa mga creator ng unang 100 token na mag-graduate sa mainnet. |
| **Graduation** | Ang sandaling mapuno ang curve: lilipat ang token sa PancakeSwap na may naka-lock na liquidity at magsasara ang curve. |
| **Ignite** | Pagsunog ng bahagi ng token na may kasamang pampublikong mensahe. Tingnan ang [Ignite](/guide/ignite). |
| **LP tokens** | Patunay ng bahagi sa isang PancakeSwap pool. Sinusunog namin ang mga ito sa graduation, kaya hindi kailanman mahihila ang liquidity. |
| **Mainnet** | Ang totoong network, may totoong pera. |
| **PancakeSwap** | Ang pinakamalaking exchange sa BNB Chain. Doon tine-trade ang mga graduated na token. |
| **Presale** | Ang unang pampublikong bentahan ng $AGNT, bago ito mailista. Tingnan ang [Presale](/token/presale). |
| **Seed phrase** | 12 o 24 na salitang kumokontrol sa wallet. Huwag kailanman ibahagi, kahit kanino. |
| **Slippage** | Gaano kalaki ang puwedeng galaw ng presyo mula preview hanggang trade bago ito tanggihan. |
| **Snapshot** | Ang sandaling ifi-freeze ang points at kinukuwenta ang hati sa airdrop. |
| **Staking** | Pag-lock ng $AGNT sa contract para kumita ng bahagi ng fees sa BNB. Tingnan ang [Staking](/token/staking). |
| **Testnet** | Practice na kopya ng BNB Chain kung saan libre at walang halaga ang BNB. |
| **TGE** | Token generation event: ang araw na mailista ang $AGNT sa PancakeSwap at magbukas ang presale claims. |
| **Wallet cap** | Ang pinakamaraming token na puwedeng hawakan ng isang wallet habang nasa curve pa ito ({{P.mainnet.walletCapBps|pct}} sa mainnet, {{P.testnet.walletCapBps|pct}} sa testnet). |

=== FILE guide/what-is.md ===
# Ano ang Agentic Starter

::: tip Bago ka rito?
Dadalhin ka ng [Magsimula rito](/guide/start) mula sa wala hanggang sa una mong token sa testnet sa mga 15 minuto.
:::

Ang Agentic Starter ay token launchpad sa BNB Chain na ginawa para sa mga AI agent. Ang agent mo ang nagla-launch ng
token, ang agent mo ang nagte-trade nito sa bonding curve, at ikaw ang nag-a-approve sa bawat hakbang. Kapag napuno ang
curve, ililista ang token sa PancakeSwap, naka-pair sa BNB.

Sa mainnet, walang buy button sa [agenticstarter.xyz](https://agenticstarter.xyz). Ipinapakita ng site ang market, mga
chart, mga holder at mga agent; sa [agent CLI](/agents/cli) at agent wallet ginagawa ang pag-trade.

::: tip Testnet
Sa BNB Chain testnet, puwedeng sumubok ang kahit sino kahit walang agent: mag-launch gamit ang Telegram bot namin
([Mag-launch ng token](/guide/launch#testnet-telegram)), mag-claim ng libreng testnet Agent ID sa kahit anong token page,
at bumili gamit ang test BNB mula sa karaniwang wallet.
:::

## Bakit para lang sa agent

| Problema sa karaniwang launchpad | Ang ginagawa ng Agentic Starter |
| --- | --- |
| Bumibili ang mga sniper bot sa unang block | Mga wallet lang na may Agent ID ang puwedeng bumili sa curve |
| Isang whale ang humahakot ng malaking bahagi ng supply | Bawat wallet ay may hanggang 1% lang habang nasa curve |
| May pool bago ang launch, OTC dump | Naka-lock ang transfer hanggang mag-graduate |
| Hinihila ang liquidity pagkatapos ng listing | Bina-burn ang LP token sa graduation |
| Walang napupuntahan ang fees | Ang 1% fee ay nagbabayad sa creators, sumusunog ng $AGNT at nagbabayad ng BNB sa stakers |

## Para kanino ito

- **Mga gumagawa ng agent** na gustong ligtas na mag-launch at mag-trade ng token ang agent nila, sa loob ng mga limit na
  itinakda ng may-ari.
- **Mga komunidad** na gusto ng patas na simula, walang bot.
- **Mga holder ng $AGNT**, na may parte sa mga fee mula sa bawat launch.

## Saklaw ng phase 1

Lahat ng token ay naka-pair sa **BNB** sa **BNB Chain**. Puwedeng sumunod ang ibang pair at chain habang lumalaganap ang mga
agent wallet; tatanungin muna ang komunidad.

=== FILE guide/how-it-works.md ===
# Paano ito gumagana

Iisa ang dinaraanan ng bawat token: **launch → bonding curve → graduation sa PancakeSwap**.

<div class="flow">
  <div><b>Launch</b><small>Gagawa ng 1B token. 800M ang mapupunta sa curve, 200M ang itatabi para sa liquidity.</small></div>
  <div class="arrow">→</div>
  <div><b>Bonding curve</b><small>Mga agent ang bumibili, kahit sino ay puwedeng magbenta. Tumataas ang presyo sa bawat bili. 1% fee bawat trade.</small></div>
  <div class="arrow">→</div>
  <div><b>Graduation</b><small>Sa {{P.mainnet.graduationTargetBnb}} BNB, maililista ang token sa PancakeSwap. Sinunog ang LP, sarado ang curve.</small></div>
</div>

## 1. Ikonekta ang agent wallet

Kumikilos ang agent mo sa pamamagitan ng agent wallet na may araw-araw na limitasyong ikaw ang nagtakda. Kailangan ng
wallet ng **Agent ID** para bumili sa curve. Tingnan ang [Mag-set up ng agent wallet](/guide/agent-wallet). Sa testnet,
puwedeng kumuha ng libreng Agent ID ang kahit anong wallet.

## 2. Mag-launch sa bonding curve

Ang pag-launch ay gumagawa ng token na may fixed supply na **1,000,000,000**:

| Bahagi | Dami | Layunin |
| --- | --- | --- |
| Curve | 800,000,000 | Ibinebenta sa bonding curve |
| Liquidity | 200,000,000 | Idinadagdag sa PancakeSwap sa graduation |

Laging nagtatapos sa **`AAAA`** ang address ng token. Brand mark namin iyon, hindi garantiya, kaya laging buksan ang mga
token mula sa [agenticstarter.xyz](https://agenticstarter.xyz) o suriin ang mga ito sa [Site integrity](https://agenticstarter.xyz/integrity).

Sumusunod ang presyo sa constant-product formula: tumataas kapag bumili, bumababa kapag nagbenta. Puwedeng gawin ng creator
ang unang bili sa launch transaction, sa parehong wallet cap ng lahat.

Mga patakaran habang nasa curve:

- **Bili:** mga may Agent ID lang, sinusuri on-chain sa bawat bili.
- **Benta:** kahit sinong holder, walang kailangang approve na transaksyon. Hindi kailanman pinapahinto ang benta.
- **Wallet cap:** {{P.mainnet.walletCapBps|pct}} ng supply bawat wallet sa mainnet ({{P.testnet.walletCapBps|pct}} sa testnet). Ang
  biling lalampas dito ay babawasan at ibabalik ang natitirang BNB sa parehong transaksyon. Dahil sa cap, kailangan ng token
  ng hindi bababa sa **{{P.mainnet.minWalletsToGraduate}} magkakaibang wallet** para mag-graduate sa mainnet
  ({{P.testnet.minWalletsToGraduate}} sa testnet). Ipinapakita ng token page kung ilan pang holder ang kailangan.
- **Fee:** 1% sa bili at benta. Tingnan ang [Mga bayarin](/guide/fees).
- **Transfers:** naka-lock. Gumagalaw lang ang token sa pagitan ng curve at mga trader, kaya walang makakaiwas sa cap o
  makakapagbukas ng pool nang maaga.

Pinananatili ng bawat token ang settings nito noong nilaunch (graduation target, wallet cap, graduation fee at bonus). Kung
babaguhin ng team ang isang setting, sa mga bagong token lang ito ilalapat.

## 3. Graduation sa PancakeSwap

Kapag naabot ng curve ang target (**{{P.mainnet.graduationTargetBnb}} BNB** na nalikom sa mainnet,
**{{P.testnet.graduationTargetBnb}} BNB** sa testnet), ang graduation ay:

1. magbubukas ng transfers nang tuluyan;
2. kukuha ng graduation fee: {{P.mainnet.graduationFeeBps|pct}} ng target, hanggang 2 BNB lang
   ({{P.mainnet.graduationFeeBnb}} BNB sa mainnet target). Ang ikalimang bahagi nito ({{P.mainnet.creatorBonusBps|pct}}) ay
   **graduation bonus para sa creator**, ang natitira ay para sa treasury;
3. magdadagdag ng 200M liquidity token at ng natitirang BNB sa PancakeSwap V2, at direktang magmi-mint ng LP papunta sa
   burn address, kaya naka-lock ang liquidity magpakailanman.

Ang biling pumupuno sa curve ang nagpapatakbo ng graduation. Kung hindi ito mangyari (halimbawa kapag may minimum curve
time ang token), kahit sino ay puwedeng tumawag ng `graduate(token)` kapag naabot na ang target. Kapareho ng huling presyo
sa curve ang listing price, kaya walang talon. Pagkatapos ng graduation, walang platform fee at kahit sino ay puwedeng
mag-trade sa PancakeSwap, may Agent ID man o wala.

::: tip Ang biling pumupuno sa curve ang nagbabayad ng listing
Ang huling bili ang nagpapatakbo ng migration, kaya mas mahal ang gas nito. Minamarkahan ito ng CLI bilang `nearGraduation`.
:::

## Alokasyon ng creator (testnet)

Sa testnet, natatanggap ng creator ang {{P.testnet.creatorAllocBps|pct}} ng supply sa presyo ng launch, labas sa wallet
cap. Hawak ito ng launchpad, hindi maibebenta bago mag-graduate, at unti-unting nag-a-unlock sa loob ng
{{P.testnet.creatorAllocUnlockDays}} araw pagkatapos ng graduation. Sa mainnet, nakatakda ito ngayon sa
{{P.mainnet.creatorAllocBps|pct}}; puwede lang itong itaas ng team para sa mga bagong token, at pampubliko ang bawat
pagbabago sa [Site integrity](https://agenticstarter.xyz/integrity).

## Mga safety switch

Walang upgradeable proxy ang mga contract. Ang may-ari ay 2-of-2 multisig (Safe). Puwedeng ihinto ng guardian wallet ang
**mga bagong launch at bili** sa emergency; ang may-ari lang ang makakapagpatuloy. **Hindi kailanman pinapahinto ang benta,
refund, claims at graduation.** Ang pagpapalit ng module (ang Agent ID check, ang token template, ang listing adapter, ang
fee escrow o ang staking perks) ay naghihintay sa pampublikong **48-oras na timelock**. Sa mainnet, ang fees at ang
graduation target ay puwedeng gumalaw nang hanggang ±50% lang kada 7 araw, laging sa loob ng hard cap na nakasulat sa
contract.

=== FILE guide/agent-wallet.md ===
# I-set up ang agent wallet

Tatlong bagay ang kailangan mo: agentic wallet, Agent ID sa wallet na iyon, at kaunting BNB.

1. **Gumawa ng agentic wallet** sa wallet app na sumusuporta sa mga AI agent. Hiwalay itong sub-wallet na walang
   nakalantad na key at may sariling balance, kaya hiwalay ang pangunahing pondo mo.
2. **Itakda ang mga proteksyon:** daily spending limit, kung aling token ang puwedeng i-trade ng agent, at kung paano
   kinukumpirma ang mga mapanganib na transaksyon. I-on ang automated signing para makakilos ang agent sa loob ng mga limit na iyon.
3. **Mag-claim ng Agent ID** para sa wallet na iyon. Chine-check ito ng launchpad on-chain sa bawat bili sa curve.
4. **Lagyan ng BNB** para sa gas at pagbili (sapat na ang 0.05 BNB para magsimula).
5. **I-install ang skill at CLI** sa agent mo:

```bash
npx skills add agenticstarter/agentic-starter-agnt/skill
npm i -g @agenticstarter/cli
```

6. **Ikonekta ang signer.** Ituro ang CLI sa signing command ng wallet mo (tingnan ang [Mga signer](/agents/signers)).
7. **I-check:** ipa-run sa agent mo ang `agentic preflight`. Bawat bagsak na check ay may kasamang paraan para ayusin.

Puwede mo ring i-paste ang address ng wallet sa [Agent check](https://agenticstarter.xyz/check) para makita ang Agent ID
status at mga hawak nito.

::: warning
Huwag na huwag ibigay sa agent ang seed phrase ng pangunahing wallet mo. Gumamit ng hiwalay na agent wallet na may limit.
:::

=== FILE guide/launch.md ===
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
mo itong imungkahi. Tingnan ang [Mga bayarin](/guide/fees#creator-fee-options).

## Testnet: mag-launch gamit ang Telegram bot {#testnet-telegram}

Sa BNB Chain testnet, puwede kang mag-launch nang hindi nagse-set up ng agent. Ang bot naming si Agen ang kikilos bilang
agent at magbabayad ng gas; ang wallet mo ang itatala bilang creator.

1. Buksan ang [Launch](https://agenticstarter.xyz/launch), ikonekta ang wallet na magmamay-ari ng token at punan ang
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
website mo. Sa [My tokens](https://agenticstarter.xyz/me) puwede kang:

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

=== FILE guide/trading.md ===
# Bumili at magbenta

Lahat ng trade sa curve ay sumusunod sa **preview → approve → execute**. Nag-e-expire ang preview pagkalipas ng 5 minuto
at isang beses lang tumatakbo.

## Bumili

```bash
agentic quote --token 0x… --bnb 0.1        # read-only price check
agentic buy   --token 0x… --bnb 0.1        # preview, returns requestId
agentic execute --request-id <id>          # after the user says yes
```

Ipinapakita ng preview ang dami ng token na makukuha mo, ang minimum na tatanggapin pagkatapos ng slippage (default 1%), ang
fee, at anumang refund.

## Magbenta

```bash
agentic sell --token 0x… --percent 50      # or --amount 2500000, or --all
agentic execute --request-id <id>
```

Hindi kailangan ng Agent ID o hiwalay na approve na transaksyon para magbenta.

## Pagkatapos ng graduation

Kapag nag-graduate ang token, sarado na ang curve nito at sa PancakeSwap V2 pool na ito tine-trade, naka-pair sa BNB,
gaya ng ibang BEP-20 token. Hindi kailangan ng Agent ID at walang fee ang Agentic Starter; 0.25% ang pool fee.

- **Website:** nagiging PancakeSwap swap box ang token page (direkta sa PancakeSwap router) kasama ang DexScreener chart.
  Gumagana rin ang **Open in PancakeSwap**.
- **Agent:** ang parehong `agentic buy` at `agentic sell` ay awtomatikong dumadaan sa PancakeSwap. Sa benta, approve
  request muna ang ibinabalik (hakbang 1 sa 2); i-execute iyon, saka patakbuhin ulit ang parehong sell command.
- **Kahit anong wallet o aggregator** sa BNB Chain ay puwedeng mag-trade sa pool.

## Bantayan ang market

```bash
agentic near-grad                          # tokens closest to graduation
agentic watch --max-events 1 --timeout 30m # wait for the next event (NDJSON)
```

=== FILE guide/ignite.md ===
# Ignite

Sa Ignite, puwedeng mag-burn ng bahagi ng token ang kahit sinong holder at mag-iwan ng maikling pampublikong mensahe.
Permanenteng napupunta ang token sa dead address (`0x…dEaD`), at naka-store on-chain ang mensahe kasama ng burn. Ito ang
pinakamalakas na paraan para sabihing "naniniwala ako sa token na ito": token ang ibinabayad mo, kaya hindi puwedeng mag-spam
nang libre.

Nasa bawat token page ito (ang **Ignite** button sa tabi ng chart) at sa [Ignite board](https://agenticstarter.xyz/ignite),
na nagpapakita ng pinakabago at pinakamalalaking burn sa buong launchpad, pati ang mga nangungunang nag-burn.

| | |
| --- | --- |
| Ano ang bina-burn | Kahit anong dami ng token na hawak mo, bago o pagkatapos ng graduation |
| Mensahe | Hanggang 140 byte. Itinatago sa website ang mga mensaheng may link |
| Mga reply | Puwedeng mag-reply ang isang ignite sa naunang ignite (`replyTo`) |
| Gastos | Ang token na bina-burn mo + gas. Walang platform fee |
| Kontrata | `IgniteBoard`, event `Ignited(id, token, from, amount, message, replyTo)` |

## Mula sa website

1. Magbukas ng token at i-click ang **Ignite**.
2. Pumili ng dami (25%, 50%, 100% o custom) at isulat ang mensahe mo.
3. I-approve ang token nang isang beses, saka kumpirmahin ang ignite.

## Mula sa agent mo

```bash
agentic ignite --token 0x0905…e50e --percent 10 --message "Shipping v2 this week"
agentic execute --request-id <id>   # sends approve + ignite
```

Ipinapakita ng bawat token page ang kabuuang na-burn sa ignite, at nasa **Ignites** tab nito ang lahat ng mensahe.

=== FILE guide/fees.md ===
# Mga bayarin

| Kailan | Bayad | Saan napupunta |
| --- | --- | --- |
| Pag-launch ng token | {{P.mainnet.launchFeeBnb}} BNB sa mainnet, libre sa testnet (+ gas). Libre para sa mga AGNT staker na may perks | Treasury |
| Pagbili o pagbenta sa curve | 1% | Hati sa ibaba |
| Graduation | {{P.mainnet.graduationFeeBps|pct}} ng target, hanggang 2 BNB lang ({{P.mainnet.graduationFeeBnb}} BNB sa {{P.mainnet.graduationTargetBnb}} BNB), kinukuha sa nalikom na BNB | {{P.mainnet.creatorBonusBps|pct}} sa creator, ang natitira sa treasury |
| Pag-update ng logo, paglalarawan o link ng token | {{P.mainnet.metaUpdateFeeBnb}} BNB sa mainnet, libre sa testnet | Treasury |
| Pag-trade pagkatapos ng graduation (PancakeSwap) | Walang platform fee (sariling 0.25% ng PancakeSwap) | — |

## Saan napupunta ang 1% curve fee

<div class="split"><span class="s1" style="width:20%">20%</span><span class="s2" style="width:40%">40%</span><span class="s3" style="width:30%">30%</span><span class="s4" style="width:10%">10%</span></div>
<div class="split-legend"><span><i style="background:#ffc93c"></i>Creator ng token</span><span><i style="background:#b79cff"></i>Buyback at burn ng $AGNT</span><span><i style="background:#7ed6a8"></i>$AGNT stakers, sa BNB</span><span><i style="background:#c9c8cf"></i>Treasury</span></div>

| Bahagi | Saan napupunta |
| --- | --- |
| 20% | Sa **creator** ng token (o sa hati ng fee ng creator), hanggang graduation. Hindi ito kinikita sa sariling trade ng creator. I-claim sa [My tokens](https://agenticstarter.xyz/me). Sa **cashback mode**, ang bahaging ito ay ibinabalik sa trader. |
| 40% | Bumibili ng $AGNT sa PancakeSwap at ipinapadala sa burn address |
| 30% | Ibinabayad sa BNB sa [$AGNT stakers](/token/staking), pinapadaloy sa loob ng 7 araw |
| 10% | Treasury (2-of-2 multisig) |

Naiipon sa launchpad ang bahaging hindi sa creator at ipinapadala sa **FeeSplitter** contract, na siyang bumibili
(hanggang 1% slippage at 1 BNB lang bawat takbo), sumusunog at nagbabayad sa stakers. Pampubliko ang kabuuan sa
[Transparency page](https://agenticstarter.xyz/transparency), sa lingguhang ulat, at on-chain.

## Mga opsyon sa creator fee {#creator-fee-options}

Sa pag-launch, pumipili ang creator ng isa sa dalawang mode:

| Mode | Ano ang nangyayari sa 20% ng creator |
| --- | --- |
| **Creator fees** (default) | Binabayad sa creator wallet, o hinahati sa hanggang 10 tatanggap. Ang tatanggap ay puwedeng wallet o **X o GitHub account**; naghihintay sa escrow ang bahagi ng mga account hanggang mag-link ng wallet ang may-ari ng account (babalik ito sa creator pagkalipas ng 90 araw kung walang mag-claim). |
| **Cashback** | Ibinabalik sa trader sa bawat bili at benta, kaya mas mababa ang binabayaran ng mga trader. |

Ang bagong hati ng fee ay ilalapat 24 oras pagkatapos itong imungkahi, para makita ng mga holder ang paparating na pagbabago.
Ang paglipat ng creator role sa ibang wallet ay two-step transfer: kailangang tanggapin ito ng bagong wallet.

## Mga limitasyong hindi malalampasan ng may-ari

Puwede lang gumalaw ang fees sa loob ng mga limitasyong nakasulat sa mga contract: graduation fee hanggang 5% ng target at
hindi hihigit sa 2 BNB, graduation bonus ng creator hanggang 30% ng fee na iyon, graduation target hanggang 50 BNB, launch
fee hanggang 0.02 BNB, update fee hanggang 0.05 BNB at bahagi ng creator hanggang 30%. Sa mainnet, bawat isa dito ay puwedeng
gumalaw nang hanggang ±50% lang kada 7 araw. Fixed ang 1% curve fee mismo.

=== FILE guide/standard-tokens.md ===
# Mga standard token

Kailangan mo ng simpleng BEP-20 token na walang bonding curve, halimbawa para sa komunidad, laro o pagsubok? Gumawa nito sa
[agenticstarter.xyz/create](https://agenticstarter.xyz/create). Puwede itong gamitin ng kahit sino; hindi kailangan ng Agent
ID. Hindi kailanman nagkakaroon ng `AAAA` address ang mga standard token, kaya hindi sila mapagkakamalang token ng launchpad.

| Uri | Ano ang makukuha mo | Fee |
| --- | --- | --- |
| Basic | Fixed supply, walang may-ari, walang mint, walang tax. Random na address | {{P.mainnet.standardTokenFeesBnb.random}} BNB |
| Basic, address na nagtatapos sa 9999 | Pareho, pero may `…9999` na address na hinanap sa browser mo | {{P.mainnet.standardTokenFeesBnb.vanity9999}} BNB |
| Advanced | May-ari na puwedeng mag-renounce, opsyonal na mint cap (itinatakda ang max supply sa paggawa) | {{P.mainnet.standardTokenFeesBnb.advanced}} BNB |
| Advanced na may transfer tax | Gaya ng nasa itaas, dagdag ang tax na hanggang 5% lang papunta sa wallet na pipiliin mo. Puwede lang bumaba ang tax | {{P.mainnet.standardTokenFeesBnb.advancedTax}} BNB |

Kalahati ang binabayaran ng mga AGNT staker na may perks. Napupunta ang fee sa Treasury.

## Magdagdag ng liquidity

Sa ikalawang hakbang ng pahina, idinadagdag ang token mo at BNB sa PancakeSwap V2 sa isang transaksyon, at inaasikaso ang
mga LP token:

- **Burn**: napupunta ang LP sa dead address. Walang makakapag-alis ng liquidity kailanman.
- **Lock**: hawak ng `LiquidityHelper` contract ang LP nang hindi bababa sa 30 araw, saka ito babalik sa iyo. Kahit sino ay
  puwedeng mag-check ng lock sa explorer.

Ang panimulang presyo ay ang BNB na idinagdag mo na hinati sa mga token na idinagdag mo. Magdagdag muna ng maliit na halaga
kung hindi ka sigurado.

=== FILE guide/telegram.md ===
# Komunidad sa Telegram

| Lugar | Link | Para saan |
| --- | --- | --- |
| Channel | [t.me/agenticstarter](https://t.me/agenticstarter) | Mga anunsyo lang |
| Group | [t.me/agentic_starter](https://t.me/agentic_starter) | Chat, ang araw-araw na quiz, mga tanong kay Agen |
| Agen (bot) | [t.me/agenticstarter_bot](https://t.me/agenticstarter_bot) | Airdrop Mini App, mga paalala, testnet launch |

## Pagsali sa group

Pipindutin ng mga bagong miyembro ang **I'm not a bot** sa welcome message bago sila makapag-type. Tinatanggal pagkalipas ng
ilang sandali ang mga welcome at join message para manatiling malinis ang chat.

## Tanungin si Agen

Isulat ang `@Agen` kahit saan sa mensahe mo sa group, halimbawa `@Agen paano gumagana ang graduation?`. Sumasagot si Agen sa wika mo mula sa mga docs na ito at live na data. Sa group lang niya sinasagot ang tanong tungkol sa proyekto para makita ng lahat; sa private, tumutulong siya sa sarili mong bagay (launch, puntos, paalala).

Hindi sumasagot si Agen sa mga tanong na maaaring maglagay sa panganib sa iyo o sa proyekto (mga key, seed phrase, paano
umatake sa contract), o sa mga tanong na walang kinalaman sa Agentic Starter. Ang mga tanong na paulit-ulit na itinatanong ay
sinasagot ng link sa tamang pahina ng docs.

## Mga command

| Command | Saan | Ano ang ginagawa |
| --- | --- | --- |
| `@Agen <tanong>` | group | Magtanong kay Agen (puwede rin ang `/agen`) |
| `/points` | private | Ang airdrop points mo at kung ano ang kulang |
| `/earn` | group o private | Ang mga magagawa mo pa para sa puntos, pinakamalaki muna |
| `/challenge` | group o private | Ang challenge ngayong araw at ang streak mo |
| `/help` | group o private | Lahat ng command |
| `/watch <token>` | private | Mensahe sa 80%, 90% at graduation |
| `/remind presale` · `claim` · `mainnet` | private | Mensahe kapag nagbukas na ito |
| `/report` | reply sa mensahe sa group | Mag-ulat sa team ng scam o pekeng admin |
| `/launch <code>` | private | Testnet launch mula sa website (tingnan ang [Mag-launch ng token](/guide/launch#testnet-telegram)) |
| `/faucet` | private | Kung saan kukuha ng test BNB (puwede kang lagyan minsan ng airdrop page pagkatapos ng Q2) |
| `/settings` | private | Aling private message ang ipapadala ni Agen: box, quiz reminder, buod at iba pa |
| `/agentid` | private | Mag-check ng Agent ID |

May **I-off ang mga ito** na button ang bawat private message ni Agen. I-on ulit kahit kailan gamit ang `/settings`.

## Mga patakaran ng group

- Maging mabait. Walang insulto, walang kampanya ng FUD, walang spam, walang pag-shill ng ibang proyekto.
- Mga link: opisyal na link lang (tingnan ang [Manatiling ligtas](/guide/safety)). Tinatanggal ang ibang link.
- Mga strike: ang mabibigat na insulto ay may agarang strike; ang paulit-ulit na magagaan ay pagkatapos ng babala. Ang **5
  strike** sa loob ng 20 araw ay ban. Nawawala ang mga strike pagkalipas ng 20 araw.
- Hindi kailanman unang magda-DM ang mga admin at hindi hihingi ng key, seed phrase o BNB.
- Nami-mute ang mga pangalang ginagaya ang team (admin, support, Agentic Starter, Agen), at binubura ang mga mensaheng "DM me", seed phrase at "i-validate ang wallet".

Kung sa tingin mo ay mali ang isang aksyon ng moderation, sumulat sa isang admin sa group.

=== FILE guide/community.md ===
# Mga programa ng komunidad

## Hall of Fame

Itinatago nang permanente ng [agenticstarter.xyz/hall-of-fame](https://agenticstarter.xyz/hall-of-fame) ang mga unang token
na nag-graduate, ang mga agent of the week at ang mga nanguna sa bawat season ng airdrop. Ang mga creator ng unang 100 token
na mag-graduate sa mainnet ay makakakuha ng permanenteng **Genesis Creator** badge.

## Agent of the week

Tuwing Lunes, pumipili ang team ng isang agent wallet para sa mga launch at trade nito sa curve, sa testnet at sa mainnet.
Ipinopost ito sa channel at sa X, ipinapakita sa Hall of Fame, at nagbibigay ng airdrop points.

## Lingguhang recap

Bawat linggo, nagpopost si Agen ng maikling recap sa group at sa channel: mga bagong miyembro, launch, graduation at mga
nangungunang agent. Ipinapakita ng lingguhang [Transparency report](https://agenticstarter.xyz/transparency) ang fees, ang
na-burn na AGNT, ang BNB na naibayad sa stakers at ang balance ng bawat Safe.

## Mga partner at creator (KOL programme)

Ang mga creator at komunidad ay may sarili nilang code at link (`agenticstarter.xyz/?ref=<code>`). Nakikita ng team ang mga
bisita, mga wallet na sumali, mga natapos na quest at presale BNB bawat code, at ginagantimpalaan ang mga partner ayon sa
resulta. Pareho ang airdrop rules ng mga partner wallet sa lahat. Para mag-apply, sumulat sa team sa Telegram group o sa X.

## Mga sticker

[t.me/addstickers/agentic_starter_vibes](https://t.me/addstickers/agentic_starter_vibes)

=== FILE guide/safety.md ===
# Manatiling ligtas

::: danger Walang taga-Agentic Starter na kailanman ay
- mauuna sa pag-DM sa iyo,
- hihingi ng seed phrase o private key mo,
- hihiling na magpadala ka ng BNB para "i-verify", "i-unlock" o "i-claim" ang anumang bagay.
:::

## Mga opisyal na link

Ang mga ito lang ang amin. Ang iba ay hindi.

| | |
| --- | --- |
| Mga site | agenticstarter.xyz at ang mga subdomain nito: docs., presale., airdrop., status. |
| X | [@agentic_starter](https://x.com/agentic_starter) |
| Telegram | [channel](https://t.me/agenticstarter) · [group](https://t.me/agentic_starter) · [Agen](https://t.me/agenticstarter_bot) |
| Code | [github.com/agenticstarter](https://github.com/agenticstarter) |
| Iba pa | [Discord](https://discord.gg/S9GJWW9AE7) · [YouTube](https://www.youtube.com/@AgenticStarter) · [TikTok](https://www.tiktok.com/@agenticstarter) · [Medium](https://medium.com/@agenticstarter) |
| Security email | security@agenticstarter.xyz |

## Suriin bago pumirma

Nakalista sa [Site integrity](https://agenticstarter.xyz/integrity) ang bawat opisyal na contract at Safe address, bawat
pagbabago ng parameter, ang mga opisyal na link at ang kasalukuyang build ng bawat site. Inihahambing ng isang watcher ang
mga live na site sa mga inilathalang build; kung magbago ang isang site sa labas ng planadong deploy, mapupunta ito sa
maintenance hanggang masuri ng team. Nakalista rin doon ang mga kilalang pekeng domain.

Bago ka mag-approve ng transaksyon:

1. Ang address ng site ay `agenticstarter.xyz` (o subdomain nito) at may padlock.
2. Tugma ang contract na ipinapakita ng wallet mo sa Site integrity.
3. Hindi ka kailanman nag-a-approve ng "unlimited" na paggastos: laging eksaktong halaga ang hinihingi ng mga site namin.

## Mga panganib ng token

Ang token na nilaunch dito ay puwede pa ring mapunta sa zero. Ang mga token sa curve ay walang may-ari, walang mint at walang
tax, at sinusunog ang liquidity sa graduation, pero puwedeng ibenta ng creator ang sarili niyang token gaya ng iba. Basahin
ang [Mga panganib](/risks).

## Mag-ulat ng problema

- Security bug: [agenticstarter.xyz/security](https://agenticstarter.xyz/security) o security@agenticstarter.xyz. Mangyaring
  bigyan ng oras ang team na ayusin ito bago mo ibahagi nang publiko. Ang mga kumpirmadong bug ay may bounty points.
- Scam o pekeng admin sa Telegram: i-reply ang mensahe ng `/report`.
- May hindi gumagana: tingnan ang [Status](https://agenticstarter.xyz/status). Hindi kailanman nakadepende sa mga server
  namin ang mga pondo on-chain; gumagana nang direkta sa mga contract ang pagbebenta, mga refund at claims.

=== FILE guide/faq.md ===
# FAQ

**Puwede ba akong bumili gamit ang MetaMask?** Hindi sa mainnet curve: kailangan ng wallet na may Agent ID para bumili sa
curve. Pagkatapos ng graduation, oo, sa PancakeSwap. Sa testnet libre ang Agent ID, kaya kahit anong wallet ay puwedeng
kumuha at bumili.

**Puwede ba akong magbenta nang walang Agent ID?** Oo. Kahit sinong may hawak ng token ay puwedeng magbenta sa curve, at
hindi kailanman pinapahinto ang benta.

**Bakit hindi ako makapagpadala ng token sa kaibigan?** Nagbubukas ang transfers sa graduation. Pinipigilan nito ang
pag-iwas sa wallet cap at pagbubukas ng pool bago ang listing.

**Ibinalik ng bili ko ang BNB. Bakit?** Naabot mo ang wallet cap o naubos na ang curve; ibinabalik ang hindi nagamit na BNB
sa parehong transaksyon.

**Bakit nagtatapos sa AAAA ang bawat token address?** Brand mark namin iyon. Hindi kayang pekein ng kopya ang buong address,
pero ang scam token sa ibang lugar ay puwede ring magtapos sa AAAA, kaya buksan ang mga token mula sa site namin o suriin sa
[Site integrity](https://agenticstarter.xyz/integrity) page.

**Magkano ang gastos ko sa graduation?** Wala, maliban kung ang bili mo ang pumuno sa curve. Ang biling iyon ang magbabayad ng
dagdag na gas para mailista sa PancakeSwap. Ang graduation fee ({{P.mainnet.graduationFeeBps|pct}} ng target, hanggang 2 BNB
lang) ay kinukuha sa nalikom na BNB, at ikalimang bahagi nito ay napupunta sa creator.

**Magkano ang kinikita ng creator?** 20% ng 1% curve fee sa bawat trade ng ibang tao sa token nila, sa BNB, hanggang
graduation, dagdag ang graduation bonus. Puwede itong hatiin ng creator sa hanggang 10 wallet o X/GitHub account, o ibalik
sa mga trader bilang cashback. Tingnan ang [Mga bayarin](/guide/fees).

**Ilang holder ang kailangan ng isang token?** Dahil sa wallet cap, hindi bababa sa {{P.mainnet.minWalletsToGraduate}}
magkakaibang wallet sa mainnet ({{P.testnet.minWalletsToGraduate}} sa testnet). Binibilang ng token page kung ilan pa ang
kailangan.

**Puwede bang baguhin ng creator ang token pagkatapos ng launch?** Ang logo, paglalarawan at mga link lang, sa halagang
{{P.mainnet.metaUpdateFeeBnb}} BNB. Pampubliko ang bawat pagbabago at magpapakita ang token page ng abiso nang 7 araw. Hindi
kailanman nagbabago ang pangalan, simbolo at supply.

**May hawak bang token ang team sa mga nilaunch na coin?** Wala. Bumibili ang mga creator sa parehong wallet cap ng lahat.

**May token tax ba?** Wala. Walang transfer tax ang mga nilaunch na token at ang $AGNT.

**Puwede ba akong pigilan ng team na magbenta?** Hindi. Puwedeng ihinto ng guardian ang mga bagong launch at bili sa
emergency, pero hindi kailanman pinapahinto ang benta at claims.

**Magme-message ba sa akin ang admin?** Hindi kailanman mauuna. Walang taga-Agentic Starter na hihingi ng seed phrase o
private key mo. Tingnan ang [Manatiling ligtas](/guide/safety).

**Puwede ba akong gumawa ng normal na token na walang curve?** Oo, gamit ang [standard token factory](/guide/standard-tokens).

**Saan ko makikita ang code?** [github.com/agenticstarter/agentic-starter-agnt](https://github.com/agenticstarter/agentic-starter-agnt).
Nasa [Site integrity](https://agenticstarter.xyz/integrity) ang mga contract address.

=== FILE token/agnt.md ===
# Tokenomics ng $AGNT

Ang $AGNT ang platform token ng Agentic Starter sa BNB Chain (BEP-20). Nakapirming supply, walang mint, walang tax, walang owner.

**Kabuuang supply: 1,000,000,000 AGNT**

| Alokasyon | Parte | Token | Saan nakalagay | Unlock |
| --- | --- | --- | --- | --- |
| Presale | 25% | 250M | Presale contract | 100% sa claim; sinusunog sa finalize ang hindi nabentang AGNT |
| Komunidad at airdrops | 20% | 200M | Community Safe | Mga seasonal airdrop at ang early bonus ng presale |
| Liquidity (AGNT/BNB) | 15% | 150M | Liquidity Safe | Idinadagdag sa pool sa listing, sinusunog ang LP |
| Team | 12% | 120M | Vesting contract | 12 buwang cliff, saka linear sa loob ng 24 na buwan |
| Ecosystem at marketing | 12% | 120M | Vesting contract → Ecosystem Safe | 3 buwang cliff, saka linear sa loob ng 18 buwan |
| Treasury | 10% | 100M | Vesting contract → Treasury Safe | Linear sa loob ng 12 buwan |
| Reserba para sa listing | 6% | 60M | Liquidity Safe | Hanggang 50M ang nagdadagdag sa pool sa listing; ang natitira ay itatabi para sa mga susunod na listing |

Lahat ng Safe ay 2-of-2 multisig. Nasa [Listing](/token/listing) ang mga patakaran sa lock at ang pangako na walang ibebenta.

## Saan nanggagaling ang halaga

Bawat curve trade ay nagbabayad ng 1% fee. [Sa fee na iyon](/guide/fees):

- **40%** ay bumibili muli ng $AGNT sa PancakeSwap at sinusunog ito,
- **30%** ay ibinabayad sa BNB sa $AGNT [stakers](/token/staking),
- **20%** ay napupunta sa creator ng token (o ibinabalik sa mga trader sa cashback mode), hanggang graduation,
- **10%** ay para sa treasury.

## Gamit sa listing

Gumagana ang lahat ng nasa ibaba mula unang araw. Walang pangako rito tungkol sa presyo.

| Gamit | Paano |
| --- | --- |
| Bahagi sa fees | I-stake ang AGNT at kumita ng BNB mula sa bawat curve trade ([Staking](/token/staking)) |
| Libreng launch | Ang mga staker na may perks (hindi bababa sa 100,000 AGNT na naka-stake nang 7 araw) ay walang launch fee, at kalahating presyo sa standard token factory |
| Mga boto | Mga boto sa Snapshot na may timbang ayon sa AGNT na naka-stake nang hindi bababa sa 7 araw |
| Boost sa airdrop | Ang Season 2 ay magbibigay sa stakers ng points multiplier |
| Featured sa Explore | I-burn ang AGNT sa Ignite board para ipakita ang token sa Featured row (1 oras bawat 10,000 AGNT, hanggang 24 oras lang bawat burn) |

Ang iba pa ay nasa roadmap at ilalagay muna sa boto.

=== FILE token/presale.md ===
# Presale

Sumali sa [presale.agenticstarter.xyz](https://presale.agenticstarter.xyz) gamit ang kahit anong browser wallet sa BNB
Chain. Walang KYC, walang email, wallet lang. Iisang pampublikong round ito na may **iisang presyo para sa lahat**.

::: warning Sa presale page lang bumili
Huwag kailanman magpadala ng BNB kahit kanino, at huwag kailanman sa contract address: tinatanggihan ang mga simpleng
transfer. Hindi kailanman unang magda-DM ang mga admin. Ihambing ang contract address sa
[Site integrity](https://agenticstarter.xyz/integrity).
:::

## Paano gumagana ang presyo ("250+")

| Nalikom | Ano ang mangyayari |
| --- | --- |
| Mas mababa sa {{P.presale.softCapBnb}} BNB (soft cap) | Bigo ang sale. Ang bawat bumili ay makakakuha ng 100% refund ng BNB nila sa presale page |
| {{P.presale.softCapBnb}} hanggang {{P.presale.floorCapBnb}} BNB | Lahat ay bumibili sa floor: **1 BNB = {{P.presale.floorAgntPerBnb|n}} AGNT**. Sinusunog sa finalize ang hindi nabentang AGNT |
| Higit sa {{P.presale.floorCapBnb}} BNB | Ang {{P.presale.saleTokens|n}} AGNT na ibinebenta ay hinahati ayon sa BNB na ibinigay. Lahat ay nagbabayad ng parehong huling presyo, medyo tumataas sa bawat BNB. Walang hard cap |

Mga halimbawa sa pagtatapos ng sale, para sa bumiling nagpadala ng 1 BNB:

| Kabuuang nalikom | Mabibili ng 1 BNB |
| --- | --- |
| 120 BNB | 1,000,000 AGNT (sinusunog ang 130M hindi nabentang AGNT) |
| 250 BNB | 1,000,000 AGNT |
| 500 BNB | 500,000 AGNT |
| 1,000 BNB | 250,000 AGNT |

Ipinapakita ng pahina ang live na presyo, isang simulator at ang sarili mong posisyon ("Where is my money?"). Habang nasa
itaas ng {{P.presale.floorCapBnb}} BNB ang sale, puwede pang bumaba nang kaunti ang dami ng AGNT mo habang may bumibili pa;
hindi nagbabago ang BNB mo.

| Parameter | Halaga |
| --- | --- |
| Floor price | 1 BNB = {{P.presale.floorAgntPerBnb|n}} AGNT, hanggang {{P.presale.floorCapBnb}} BNB na nalikom |
| AGNT na ibinebenta | {{P.presale.saleTokens|n}} (25% ng supply), idineposito sa contract bago magbukas ang sale |
| Soft cap | {{P.presale.softCapBnb}} BNB |
| Bawat wallet | Minimum na {{P.presale.perWalletBnb.0}} BNB, maximum na {{P.presale.perWalletBnb.1}} BNB sa kabuuan |
| Early bonus | +{{P.presale.earlyBonusPct}}% AGNT para sa mga bili sa unang {{P.presale.earlyBonusHours}} oras, may cap ang pool na {{P.presale.earlyBonusCap|n}} AGNT (hinahati nang pro rata kung mapuno), binabayaran kasama ng claim |
| Tagal | {{P.presale.days}} araw. Nasa UTC ang simula at pagtatapos sa presale page |
| Claim | 100% sa listing |

Kung lumampas ang ambag mo sa max ng wallet mo, ibinabalik ang sobrang BNB sa parehong transaksyon.

## Paano pinoprotektahan ang BNB mo

1. Nananatili ang BNB mo sa presale contract. Hindi ito mailalabas ng team bago matapos ang sale.
2. Kapag mas mababa sa soft cap, bigo ang sale at 100% ang refund ng bawat bumili sa presale page.
3. Pagkatapos ng sale, 80% ng BNB ay mapupunta sa PancakeSwap pool sa listing at sinusunog ang LP. Bawat hakbang ay may link
   sa listing checklist ng presale page. Tingnan ang [Listing](/token/listing).

## Mag-imbita ng mga kaibigan

Ikonekta ang wallet mo sa presale page para makuha ang invite link mo (`presale.agenticstarter.xyz/?ref=<wallet mo>`).
Kapag may bumili gamit ito, itinatala ng presale contract ang imbitasyon kasama ng bili (`contributeWithRef`). Hindi
nagbabayad nang mas malaki ang bumibili at hindi nagbabago ang alokasyon niya.

- Bawat wallet na bumili ng 0.05 BNB o higit pa gamit ang link mo ay nagdadagdag ng **100 airdrop points** sa score mo
  (quest Q6, hanggang 50 buyer).
- Ang pagsali mo mismo sa presale ay quest Q5: mula 0.05 BNB **+500 puntos**, tapos +100 bawat 0.01 BNB (hanggang 10,000),
  at ang pagbili sa unang 48 oras ay dagdag na **500**. Bumili gamit ang ibang wallet kaysa sa airdrop wallet mo? I-link ito
  nang isang beses sa airdrop page (Q5 card).
- Mabibilang ang points kapag natapos ng wallet mo ang tatlong required na quest ng airdrop.
- Hindi bilang ang pagbili gamit ang sarili mong link, at tinatanggal ang mga na-refund na bili.

## Pagkatapos ng sale

1. **Finalize**: mapupunta ang BNB sa Treasury Safe at sinusunog ang hindi nabentang AGNT.
2. **Listing** sa susunod na araw, 14:00 UTC: 80% ng BNB ay mapupunta sa AGNT/BNB pool sa huling presyo ng presale, sinusunog
   ang LP, saka bubuksan ang claims.
3. I-claim mo ang 100% ng AGNT mo (at ang early bonus) sa presale page.

Bawat hakbang ay nata-tick sa listing checklist ng presale page kasama ang link sa transaksyon. I-on ang paalala roon
(Telegram o calendar) para malaman kung kailan magbubukas ang claims.

## Mga refund

Pinal ang mga ambag, maliban sa dalawang kaso:

- **Bigo ang sale**: natapos nang mas mababa sa soft cap. Awtomatikong bumubukas ang refund.
- **Binuksan ng team ang refund mode** bago magbukas ang claims. Kung mangyari ito pagkatapos ng finalize, kailangan munang
  ibalik ng team ang buong halaga sa presale contract, para makakuha ng buong refund ang bawat bumili.

Sa parehong kaso, mare-refund mo ang 100% ng BNB mo sa presale page.

=== FILE token/listing.md ===
# Listing at paggamit ng pondo

Ang $AGNT ay ililista sa PancakeSwap V2 sa araw pagkatapos ng presale, sa 14:00 UTC.

## Ang patakaran sa listing

| | |
| --- | --- |
| Listing price | Ang huling presyo ng presale. Pareho ang binabayaran ng mga bumili sa presale at ng mga unang bumili sa market |
| BNB sa pool | {{P.presale.listing.bnbToPoolPct}}% ng lahat ng nalikom na BNB |
| AGNT sa pool | 80% ng nalikom na BNB ÷ ang huling presyo: {{P.presale.listing.maxPoolAgnt|n}} AGNT kapag {{P.presale.floorCapBnb}} BNB o higit pa ang nalikom, 800,000 AGNT bawat BNB kapag mas mababa roon |
| Saan galing ang AGNT | Ang Liquidity Safe (150M) dagdag ang hanggang 50M mula sa 60M listing reserve. Ang AGNT na hindi kailangan ay mananatili sa Liquidity Safe |
| LP tokens | Sinusunog sa parehong hakbang. Walang makakapag-alis ng liquidity |

Ang natitirang {{P.presale.listing.bnbToTreasuryPct}}% ng BNB ay mapupunta sa Treasury Safe.

## Paggamit ng pondo (ang 20% na bahagi ng Treasury)

| Gamit | Parte |
| --- | --- |
| Seguridad at mga audit | {{P.presale.useOfFundsPct.security}}% |
| Mga exchange listing | {{P.presale.useOfFundsPct.listing}}% |
| Marketing at komunidad | {{P.presale.useOfFundsPct.marketing}}% |
| Operasyon (mga server, API) | {{P.presale.useOfFundsPct.operations}}% |

Puwedeng i-edit ang hati hanggang magbukas ang presale. Pagkatapos noon, bawat pagbabago ay pampublikong itinatala sa
[Site integrity](https://agenticstarter.xyz/integrity) at inaanunsyo sa Telegram. Sinusubaybayan ang paggastos sa
lingguhang [Transparency report](https://agenticstarter.xyz/transparency).

## Mga pangako sa lock

| Alokasyon | Patakaran |
| --- | --- |
| Team (120M) | Vesting contract: 12 buwang cliff, saka linear sa loob ng 24 na buwan. Ang owner ay puwede lang ipagpaliban ang simula |
| Treasury at Ecosystem | Walang pagbebenta sa market bago ang listing + 6 na buwan |
| Liquidity (Liquidity Safe) | Para lang sa pool at mga listing |
| Komunidad (Community Safe) | Para lang sa mga airdrop at sa early bonus ng presale |

Kung maglipat ang anumang Safe ng proyekto ng AGNT sa isang DEX pair, router o kilalang exchange deposit address,
awtomatikong may pampublikong alerto sa Telegram channel at group.

## Suriin mo mismo

- [Liquidity proof](https://agenticstarter.xyz/liquidity): ang address ng pool, mga live na reserve at ang transaksyon ng
  LP burn, binabasa mula sa chain.
- Ang listing checklist ng presale page: Finalize → naidagdag ang BNB sa pool → nasunog ang LP → bukas na ang claims, bawat
  isa ay may transaksyon.
- [Mga Safe address](https://agenticstarter.xyz/integrity) kasama ang bawat pagbabago ng parameter.

=== FILE token/airdrop.md ===
# Airdrop

Ang airdrop points ang nagtatakda ng bahagi mo sa seasonal na $AGNT airdrop. Iyon lang ang gamit nila: hindi token ang
points at hindi ito puwedeng i-trade. Sumali sa [airdrop.agenticstarter.xyz](https://airdrop.agenticstarter.xyz), o buksan
ito sa loob ng Telegram mula sa bot naming si Agen.

## Season 1

| | |
| --- | --- |
| Pool | 50M AGNT, tataas sa 75M sa 5,000 eligible na wallet at 100M sa 15,000 |
| Sino ang qualified | Mga wallet na tapos ang tatlong required na quest (Q1–Q3) |
| Hatian | `ang AGNT mo = pool × points mo ÷ points ng lahat ng eligible na wallet` |
| Snapshot | Pagkatapos ng $AGNT presale |
| Araw | Bawat araw ay nagsisimula at nagtatapos sa 00:00 UTC |

<div class="flow">
  <div><b>Mag-sign in</b><small>Ikonekta ang wallet at pumirma ng libreng mensahe</small></div>
  <div class="arrow">→</div>
  <div><b>Q1–Q3</b><small>X, Telegram, chat. Eligible ka na</small></div>
  <div class="arrow">→</div>
  <div><b>Kumita pa</b><small>Mag-launch, mag-trade, quiz, mag-imbita</small></div>
  <div class="arrow">→</div>
  <div><b>Mag-claim</b><small>Pagkatapos ng snapshot</small></div>
</div>

## Mga quest

| # | Quest | Puntos |
| --- | --- | --- |
| Q1 | I-follow ang @agentic_starter sa X at i-quote ang naka-pin na post, tapos i-paste ang link ng quote mo. **Required** | 300 |
| Q2 | I-link ang Telegram gamit ang airdrop bot, tapos manatili sa Telegram channel at group (sinusuri ulit araw-araw). **Required** | 200 |
| Q3 | Mag-chat sa Telegram group: bawat 2 mensahe = 1 puntos, hanggang 50 kada araw. **Required** (hindi bababa sa 1 puntos) | hanggang 50 / araw |
| Q4 | Launch & Trade sa testnet launchpad: mag-launch ng token +100 · 5 trade na 0.005 BNB o higit pa (curve o PancakeSwap) +100 · nag-graduate ang token mo +300 (ang hamon) | hanggang 500 |
| Q5 | Sumali sa $AGNT presale: mula 0.05 BNB +500, tapos +100 bawat 0.01 BNB | hanggang 10,000 |
| Q6 | Mag-imbita ng presale buyers (0.05 BNB o higit pa) gamit ang presale link mo | 100 bawat isa, hanggang 50 buyer |

TBA ang Q5 at Q6 hanggang magbukas ang presale. Mananatili ang mga puntos mula sa naunang listahan ng quest. Ang pagtapos ng
anim na quest ay may **Season 1 OG** badge. Bawat quest card ay may isang button na magdadala sa iyo sa tamang lugar at kusang
mache-check pagbalik mo; ang mga tapos na quest ay nagiging isang berdeng linya sa ibaba.

## Dagdag na puntos

| Gawain | Puntos |
| --- | --- |
| Mag-imbita ng kaibigang tumapos sa Q1–Q3 at gumawa ng isa pang totoong gawain (chat sa 2 magkaibang araw, isang trade, o ang presale) | 100 bawat isa |
| Mga level ng invite: 5 / 20 kaibigang bilang | +200 / +1,000 |
| Daily quiz sa Telegram group | 5 bawat tamang sagot, hanggang 45 kada araw |
| Quiz streak (isang tamang sagot kada araw): 7 / 14 / 21 / 28 araw na sunod-sunod | +50 / +100 / +300 / +400 |
| Mag-chat sa group nang 7 araw na sunod-sunod | 50 |
| Bumili sa unang 48 oras ng presale | 500 |
| Weekly top 10, tuwing Lunes (bilang lang ang chat, quiz, box, trade at invite ng linggong iyon) | 300 / 200 / 100, tapos 50 |
| Lagyan ng test BNB ang testnet launch bot | 20 bawat 0.1 tBNB, hanggang 100 |
| Mga bug report na kinumpirma ng team | 50 hanggang 500 |
| Daily challenge (isang gawain kada araw, nasa **Today** card) | 50 |
| 7 daily challenge na sunod-sunod | 100 |
| X raids (i-quote ang post na ibinahagi ng team sa oras ng raid) | depende sa raid, kadalasan 30 |
| I-share ang milestone sa X (Bronze, Silver, Gold, 7-araw na streak, unang graduation, Season 1 OG) | 50 hanggang 100, tig-isang beses |
| Scam report na kinumpirma ng team | 10 |

## Golden hour

Isang random na oras bawat araw (hindi kailanman katabi ng quiz) ang **golden hour**: doble ang bilang ng bawat point na
kikitain mo sa oras na iyon (chat, quiz at curve trade; umiiral pa rin ang daily cap). Inaanunsyo ni Agen ang bawat golden
hour sa channel at group, at binibilang ito pababa ng Today card.

## Agen Gift Hour

Araw-araw mula **14:00 hanggang 15:00 UTC**, bumili ng hindi bababa sa **0.01 BNB** na testnet $AGNT sa
agenticstarter.xyz. Ang una mong buy sa oras na iyon ay magbibigay sa wallet mo ng isang **gift box**: lalabas ito sa
site, at pagbukas mo, makikita mo kung ilang **totoong $AGNT** ang laman. Iba-iba ang dami sa bawat box.

- Isang box kada wallet bawat araw: ang unang buy na hindi bababa sa 0.01 BNB sa loob ng oras ang bilang. Ang box na
  hindi mo agad nabuksan ay maghihintay sa iyo sa site.
- Ang $AGNT mula sa Gift Hour ay ibinibigay kasabay ng airdrop, sa mga wallet na tapos ang required quests (Q1–Q3) at
  hindi natanggal dahil sa pang-aabuso.
- Makikita ang kabuuan mo sa Gift Hour sa tabi ng points mo sa airdrop page at sa /points ni Agen.
- Pagkabukas, i-share ang larawan sa X o sa Telegram group.
- Pagkatapos ng oras, isa sa mga box ng araw ang mabubunot nang random bilang **lucky box**: madodoble ang $AGNT nito
  (x2). Ia-anunsyo ito ni Agen sa group at sasabihan ang nanalo.
- Sampung minuto bago matapos ang oras, magpo-post si Agen ng paalala sa group, at ipapaalala ng app sa mga wallet na
  wala pang box.
- **Layunin ng group:** habang dumarami ang wallet na nakakuha ng box sa isang araw, lumalaki ang laman ng bawat box sa araw na iyon: 100 wallet **+5%**, 250 **+10%**, 500 **+20%**, idinadagdag pagkatapos ng oras. Ipinapakita ng bar sa Gift Hour strip kung gaano kalapit ang susunod na level, at kusang nag-a-update ang Gift Hour post ni Agen sa group sa bawat level.

## Agen Morning Box

Araw-araw mula **08:00 hanggang 10:00 UTC**, buksan ang Agentic Starter **app** nang naka-connect ang wallet: ang
Morning Box ay nagbibigay ng **20 hanggang 100 airdrop points**, isang box kada araw. Pagkalipas ng 10:00 UTC, mawawala
ito hanggang sa susunod na umaga. Nasa [naka-install na app](/guide/install-app) lang ang Morning Box, wala sa website.

Buksan ito nang sunod-sunod na araw para sa **streak bonus**: 7 araw **+100**, 14 araw **+200**, 21 araw **+300** at 28
naraw **+500** points, saka uulit ang apat na linggo. Kapag may araw na nalaktawan, magsisimula ulit sa 1 ang streak.

Mga **1 sa 100** Morning Box ay **golden box** na may **500 puntos**. Pagsara ng Morning Box, binabanggit ni Agen ang lahat ng golden box ng araw sa iisang post sa group, at nakalista sa airdrop page ang pinakabagong lucky at golden box.

**Welcome back:** kung higit 7 araw kang hindi nagbukas ng Morning Box, **x2** ang unang box mo pagkatapos ng pahinga.
Babatiin ka ni Agen sa DM.

Sa app, ang **Menu → Settings → Notifications** ay nagpapaalala para sa Gift Hour, Morning Box, daily quiz (5 minuto bago,
isang beses kada araw) at sarili mong balita sa airdrop (eligible ka na, nabilang ang kaibigan, nagbayad ang streak).
Hanggang 4 kada araw at hindi kailanman sa gabi sa time zone mo. Laging dumarating ang balita ng presale.

## Mga titulo

| Titulo | Points |
| --- | --- |
| Bronze | 1,000 |
| Silver | 5,000 |
| Gold | 10,000 |

Makikita ang mga titulo sa profile mo, sa leaderboard at sa share image mo.

## Telegram muna

Puwede kang magsimula sa Telegram bago magkonekta ng wallet: buksan ang airdrop mula sa menu ni Agen at ang chat at quiz
points mo ay mananatili sa Telegram account mo. Kapag nag-link ka ng wallet mamaya, lilipat ang mga ito roon.

Ipinapakita ng airdrop bot [@agenticstarter_airdrop_bot](https://t.me/agenticstarter_airdrop_bot) ang mga quest mo na may
check, ang puntos mo at kung paano gawin ang bawat hakbang, sa wika mo. Gumagana rin doon ang invite links
(`t.me/agenticstarter_airdrop_bot?start=ref_CODEMO`): ang kaibigang nag-start ng bot gamit ang link mo at nag-link ng
wallet ay bilang na invite mo.

Sa airdrop bot, puwede mo ring suriin ang kahit anong wallet (ipadala ang address), i-on ang buod sa gabi sa 20:00 ng oras mo (naka-off sa simula), at i-share ang invite card mo sa kahit anong chat: i-type ang `@agenticstarter_airdrop_bot` sa message box.

## Tuwing Lunes

Nagpo-post si Agen ng isang mensahe sa group tuwing Lunes: ang top 10 ng linggo na may larawan, ang pinakamahusay na nag-imbita ngayong linggo (ang top 3 ay may +500, +300 at +200 puntos; bilang ang kaibigan kung nag-sign up sa linggong iyon at bilang na), ang pinakamahabang quiz streak, at ang meme contest.

**Meme contest:** sagutin ang Lunes na post gamit ang meme mo tungkol sa Agentic Starter. Pipili ang team ng top 3, na may +500, +300 at +200 puntos sa susunod na Lunes (kailangang naka-link ang Telegram mo sa isang wallet).

**Community goal:** sa 5,000, 10,000 at 15,000 eligible na wallet, x2 ang Gift Hour sa susunod na Sabado: doble ang $AGNT sa bawat gift box. Ipinapakita ng bar sa airdrop page kung gaano kalapit ang susunod na goal.

## Ang araw-araw na quiz

Tatlong session kada araw sa Telegram group, sa **03:00, 14:00 at 19:00 UTC**. Bawat session ay may tatlong multiple-choice na tanong tungkol sa Agentic Starter, limang minuto bawat isa. Sumagot gamit ang A/B/C/D na button; ang huling sagot mo ang bilang. Ang unang 20 tamang sagot sa bawat tanong ay may 5 puntos. Nananatili sa group ang mga tanong at sagot para may mapag-aralan. Gusto mo ng paalala limang minuto bago? I-on ang quiz notifications sa app, o piliin ang mga round sa `/settings` ni Agen.

Isang tamang sagot kada araw para tuloy ang **quiz streak** mo: 7, 14, 21 at 28 araw nang sunod-sunod ay may +50, +100, +300 at +400 puntos. Kapag lumiban ng isang araw, uulit sa simula. Binabanggit ka ni Agen sa resulta ng round at pinapadalhan ka ng private message na may larawang puwedeng i-share.

## Paano gumagana ang verification

1. **Wallet.** Ikonekta at pumirma ng mensahe. Libre ito at walang ipinapadalang transaksyon.
2. **X (Q1).** Gamitin ang Follow at Quote na button, tapos i-paste ang link ng quote post mo. Karamihan ng post ay awtomatikong
   sinusuri sa loob ng ilang segundo; ang iba ay dumadaan sa mabilis na review ng team. Namamarkahan ang link na nagamit na ng
   ibang wallet.
3. **Telegram (Q2).** I-tap ang **Buksan ang Telegram**, tapos **Start** sa airdrop bot. Ili-link nito ang Telegram account
   mo sa wallet at magpapakita ng Join buttons para sa channel at group; kusang mache-check ang card. Kapag umalis sa alinman,
   mawawala ang puntos.
4. **Chat (Q3).** Binibilang ni Agen ang mga mensahe mo. Hindi bilang ang mensaheng mas maikli sa 3 character, paulit-ulit,
   forwarded, at ipinadala sa loob ng 5 segundo mula sa huli mong mensahe.
5. **On-chain (Q4–Q6)** ay awtomatikong binabasa mula sa BNB Chain. Ang presale na binili gamit ang ibang wallet ay bilang
   kapag pumirma ang wallet na iyon ng libreng mensahe para i-link ito (Q5 card). Isang presale wallet ay naka-link sa isang
   airdrop wallet pang-habambuhay.

Bawat X account, Telegram account at presale wallet ay maaaring i-link sa iisang airdrop wallet lang.

## Paano kumita ng pinakamaraming puntos

1. **Tapusin muna ang Q1–Q3.** Hanggang doon, hindi pa bilang sa pool ang puntos mo.
2. **Q4 Launch & Trade:** mag-launch ng isang token, gumawa ng 5 trade na 0.005 BNB o higit pa, at subukang i-graduate ang
   token mo (+300).
3. **Araw-araw:** mag-chat sa group (hanggang 50), sumagot sa quiz (hanggang 45) at panatilihin ang streak, buksan ang
   Morning Box sa app, at abutan ang Gift Hour.
4. **Mag-imbita ng mga kaibigang talagang sumasali:** +100 bawat isa, +200 sa 5 at +1,000 sa 20.
5. **Presale:** mula 0.05 BNB, hanggang 10,000 puntos, dagdag 100 bawat buyer na dinala mo.

Tanungin si Agen sa group ("paano kumita ng pinakamaraming puntos?") o i-tap ang **Kumita nang pinakamarami** sa airdrop bot:
makakakuha ka ng listahan ng mga hindi mo pa nagagawa lang, pinakamalaki muna. Humihinto ang puntos ng Season 1 sa snapshot
(pagtatapos ng presale); ang puntos pagkatapos nito ay para sa Season 2.

## Handa na ba ako?

Inililista ng **Ready to claim?** card ang bawat requirement kasama ang kung ano pa ang kulang at kung paano ito aayusin,
pati ang tinatayang saklaw ng AGNT. Nakadepende ang saklaw sa huling pool at sa dami ng wallet na qualified, kaya gabay
lang ito, hindi pangako.

Sa testnet, ang mga wallet na tapos ang Q2 ay puwedeng makakuha ng maliit na top-up ng test BNB nang isang beses (0.005
tBNB), habang may laman ang faucet.

## Suriin ang kahit anong wallet

Ipinapakita ng **Check** box sa airdrop page ang mga quest, points ayon sa pinagmulan, eligibility, rank at tinatayang $AGNT
ng kahit anong wallet. Nasa parehong pahina ang pampublikong top 100.

## Claims

1. Sa snapshot, gagawing $AGNT ang points at ilalathala ang Merkle tree.
2. Bubuksan ng airdrop contract ang season gamit ang root na iyon at isang claim deadline.
3. Magke-claim ang mga eligible na wallet sa airdrop page (gas lang). Babalik sa community pool ang hindi na-claim na token.

## Patas na laro

Tinatanggal bago ang snapshot ang spam, farm account, wash trading at mga multi-account cluster. Tinitingnan ng team ang
mga wallet na may parehong network address o nagte-trade ng parehong token sa parehong block, at nagpapasya nang manwal;
walang awtomatikong tinatanggal. Itinatala kasama ang dahilan ang bawat manwal na pagbabago sa points.

Kung nagkamali ang pag-exclude sa wallet mo, pindutin ang **Appeal** sa Ready card at ipaliwanag sa ilang pangungusap.
Sasagot ang team sa parehong card.

=== FILE token/staking.md ===
# Staking

I-stake ang $AGNT sa `AGNTStaking` contract para kumita ng BNB mula sa launchpad fees.

- Nakakatanggap ang stakers ng **30% ng bawat curve fee**, binabayaran sa BNB.
- Ang bawat BNB na dumarating ay **pinapadaloy sa susunod na 7 araw**, hinahati sa lahat ng naka-stake sa panahong iyon. Hindi
  makakakuha ng bahagi ang magsta-stake bago lang ang payout.
- Ang BNB na dumating habang walang nag-i-stake ay naghihintay at magsisimulang dumaloy kapag sumali ang unang staker.
- Walang lock-up: mag-unstake anumang oras; mag-claim ng BNB anumang oras.

## Perks

Ang AGNT na naka-stake nang **hindi bababa sa 7 araw** ay binibilang para sa perks. Ang pagdagdag ng AGNT ay nire-restart
ang 7-araw na orasan para sa buong posisyon, kaya hindi mabibili ang perks para sa isang block lang.

| Perk | Kailangan |
| --- | --- |
| Libreng launch sa launchpad | 100,000 AGNT na naka-stake nang 7 araw |
| Kalahating presyo sa standard token factory | 100,000 AGNT na naka-stake nang 7 araw |
| Timbang ng boto sa Snapshot | Kahit anong AGNT na naka-stake nang 7 araw (`maturedStake`) |
| Multiplier sa airdrop ng Season 2 | Iaanunsyo kasabay ng Season 2 |

Ang threshold ay mababago ng owner Safe; pampubliko ang bawat pagbabago sa
[Site integrity](https://agenticstarter.xyz/integrity).

Magbubukas ang staking kasabay ng listing ng $AGNT.

| Function | Epekto |
| --- | --- |
| `stake(amount)` | Magdeposito ng AGNT (mag-approve muna) |
| `unstake(amount)` | Mag-withdraw ng AGNT, nananatili ang rewards |
| `claim()` | I-withdraw ang naipong BNB |
| `pendingBnb(address)` | Tingnan ang naipong BNB |
| `maturedStake(address)` | AGNT na binibilang para sa perks at boto |
| `hasPerks(address)` | True kapag lampas sa perk threshold |

=== FILE risks.md ===
# Mga panganib

- **Panganib sa market.** Spekulatibo ang mga token na na-launch dito at puwedeng maging zero. Ganoon din ang $AGNT.
- **Panganib sa agent.** Kusang kumikilos ang mga agent. Ang maling prompt, bug o na-hack na tool ay puwedeng gumawa ng
  trade na hindi mo gusto. Magtakda ng mahigpit na limit at tingnan ang bawat preview.
- **Panganib sa smart contract.** Binabawasan ng audit ang posibilidad ng bug, pero hindi ito tuluyang nawawala.
- **Panganib sa dependency.** Mga third-party na serbisyo ang Agent ID registry, mga wallet, RPC at PancakeSwap.
- **Mga gayang token.** Bawat token dito ay nagtatapos sa `AAAA`, pero kahit sino ay makakagawa ng address na nagtatapos sa
  AAAA sa ibang lugar. Buksan ang mga token mula sa site namin at suriin ang mga link sa [Site integrity](https://agenticstarter.xyz/integrity) page.
- **Pagsasanay lang ang testnet.** Walang halaga ang testnet BNB at testnet token at hindi kailanman ipapalit sa anuman.
- **Panganib sa regulasyon.** Puwedeng limitado ang pagbebenta at pag-trade ng token kung saan ka nakatira.

Hindi kailanman unang magme-message ang mga admin at hindi kailanman hihingi ng seed phrase, private key o "wallet
verification". Magtiwala lang sa mga link na pinost ng [@agentic_starter](https://x.com/agentic_starter).

=== FILE guide/install-app.md ===
# I-install ang app sa phone

Gumagana ang Agentic Starter na parang app sa phone mo: full screen, may tabs sa ibaba, isang tap mula sa home screen.
Ito mismo ang website, kaya walang kailangang i-update at walang app store. Humihingi pa rin ng kumpirmasyon ang wallet
mo bago ang bawat pirma.

## iPhone at iPad

1. Buksan ang [agenticstarter.xyz](https://agenticstarter.xyz) sa **Safari**. Kung nasa loob ka ng Telegram, X o wallet
   app, buksan muna ang page sa Safari: baka hindi makapagdagdag ng web app ang ibang browser sa iPhone.
2. I-tap ang **Share** (ang kahon na may arrow) sa bar ng Safari. Kung hindi mo makita, i-tap muna ang **⋯**.
3. I-tap ang **Add to Home Screen**, tapos **Add**.
4. Buksan ang Agentic Starter mula sa home screen.

## Android

### Chrome

1. Buksan ang [agenticstarter.xyz](https://agenticstarter.xyz) sa **Chrome**. Kung bumukas ang link sa loob ng Telegram,
   X o wallet app, i-tap muna ang **⋮** sa kanang itaas at piliin ang **Open in Chrome**: hindi puwedeng mag-install ng
   app mula roon.
2. I-tap ang **⋮** sa kanang itaas ng Chrome.
3. I-tap ang **Install app** o **Add to Home screen**, tapos **Install**.
4. Buksan ang Agentic Starter mula sa home screen o sa listahan ng apps.

Kapag may **Install** button ang Chrome sa page o sa address bar, pareho lang ang mangyayari kapag tinap mo iyon.

### Samsung Internet

1. I-tap ang **☰** sa ibaba.
2. I-tap ang **Add page to**, tapos **Home screen**.

### App file (APK)

Mas gusto ng file? [I-download ang agentic-starter.apk](https://agenticstarter.xyz/download/agentic-starter.apk) (bersyon 1.0, 1.7 MB). Binubuksan nito ang parehong site nang full screen sa pamamagitan ng Chrome, at isang beses magtatanong ang Android kung papayagan ang pag-install mula sa browser mo. Suriin ang file bago i-install:

- SHA-256 ng file: `be55ac38090acbcf8ddcbf732463176306ad6a10365d9402b63fac81cd135479`
- SHA-256 ng signing certificate: `A2:7C:83:5E:EE:EF:C6:39:0B:CC:79:77:53:29:DD:84:7D:E2:6D:47:93:1E:2A:A5:66:D2:86:76:AD:E9:A7:5B`

## Sa loob ng app

- **Wika:** i-tap ang larawan mo sa kaliwang itaas para buksan ang menu, tapos **Settings → Wika** para pumili sa
  listahan.
- **App lock:** humihingi ang **Settings → App lock** ng Face ID, fingerprint, passcode ng device o sarili mong
  password bago bumukas ang app. Nasa phone mo lang ang lock.
- **Avatar:** i-tap ang larawan mo sa menu para pumili ng litrato o kulay. Nasa phone mo lang ito; walang ina-upload.

## Mga tanong

**Wala akong makitang Install app.** I-update ang Chrome sa Play Store at i-reload ang page. Kung naka-install na ang
app, **Open app** ang lalabas sa parehong menu.

**Ligtas ba ito?** Ito rin ang site na agenticstarter.xyz at hindi nito maaabot ang mga key ng wallet mo: binubuksan ng
bawat transaksyon ang wallet para aprubahan mo. Mag-install lang mula sa agenticstarter.xyz. Hindi kailanman
nagpapadala ang team ng file o link ng app sa private message.

**Paano ito tanggalin?** Gaya ng ibang app: pindutin nang matagal ang icon, tapos **Remove** o **Uninstall**.
