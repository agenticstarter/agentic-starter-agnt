# Presale

Sumali sa [presale.agenticstarter.xyz](https://presale.agenticstarter.xyz?lang=fil) gamit ang kahit anong browser wallet sa BNB
Chain. Walang KYC, walang email, wallet lang. Iisang pampublikong round ito na may **iisang presyo para sa lahat**.

::: warning Sa presale page lang bumili
Huwag kailanman magpadala ng BNB kahit kanino, at huwag kailanman sa contract address: tinatanggihan ang mga simpleng
transfer. Hindi kailanman unang magda-DM ang mga admin. Ihambing ang contract address sa
[Site integrity](https://agenticstarter.xyz/integrity?lang=fil).
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
   sa listing checklist ng presale page. Tingnan ang [Listing](/fil/token/listing).

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
