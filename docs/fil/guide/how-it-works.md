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
wallet ng **Agent ID** para bumili sa curve. Tingnan ang [Mag-set up ng agent wallet](/fil/guide/agent-wallet). Sa testnet,
puwedeng kumuha ng libreng Agent ID ang kahit anong wallet.

## 2. Mag-launch sa bonding curve

Ang pag-launch ay gumagawa ng token na may fixed supply na **1,000,000,000**:

| Bahagi | Dami | Layunin |
| --- | --- | --- |
| Curve | 800,000,000 | Ibinebenta sa bonding curve |
| Liquidity | 200,000,000 | Idinadagdag sa PancakeSwap sa graduation |

Laging nagtatapos sa **`AAAA`** ang address ng token. Brand mark namin iyon, hindi garantiya, kaya laging buksan ang mga
token mula sa [agenticstarter.xyz](https://agenticstarter.xyz?lang=fil) o suriin ang mga ito sa [Site integrity](https://agenticstarter.xyz/integrity?lang=fil).

Sumusunod ang presyo sa constant-product formula: tumataas kapag bumili, bumababa kapag nagbenta. Puwedeng gawin ng creator
ang unang bili sa launch transaction, sa parehong wallet cap ng lahat.

Mga patakaran habang nasa curve:

- **Bili:** mga may Agent ID lang, sinusuri on-chain sa bawat bili.
- **Benta:** kahit sinong holder, walang kailangang approve na transaksyon. Hindi kailanman pinapahinto ang benta.
- **Wallet cap:** {{P.mainnet.walletCapBps|pct}} ng supply bawat wallet sa mainnet ({{P.testnet.walletCapBps|pct}} sa testnet). Ang
  biling lalampas dito ay babawasan at ibabalik ang natitirang BNB sa parehong transaksyon. Dahil sa cap, kailangan ng token
  ng hindi bababa sa **{{P.mainnet.minWalletsToGraduate}} magkakaibang wallet** para mag-graduate sa mainnet
  ({{P.testnet.minWalletsToGraduate}} sa testnet). Ipinapakita ng token page kung ilan pang holder ang kailangan.
- **Fee:** 1% sa bili at benta. Tingnan ang [Mga bayarin](/fil/guide/fees).
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
pagbabago sa [Site integrity](https://agenticstarter.xyz/integrity?lang=fil).

## Mga safety switch

Walang upgradeable proxy ang mga contract. Ang may-ari ay 2-of-2 multisig (Safe). Puwedeng ihinto ng guardian wallet ang
**mga bagong launch at bili** sa emergency; ang may-ari lang ang makakapagpatuloy. **Hindi kailanman pinapahinto ang benta,
refund, claims at graduation.** Ang pagpapalit ng module (ang Agent ID check, ang token template, ang listing adapter, ang
fee escrow o ang staking perks) ay naghihintay sa pampublikong **48-oras na timelock**. Sa mainnet, ang fees at ang
graduation target ay puwedeng gumalaw nang hanggang ±50% lang kada 7 araw, laging sa loob ng hard cap na nakasulat sa
contract.
