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
| 20% | Sa **creator** ng token (o sa hati ng fee ng creator), hanggang graduation. Hindi ito kinikita sa sariling trade ng creator. I-claim sa [My tokens](https://agenticstarter.xyz/me?lang=fil). Sa **cashback mode**, ang bahaging ito ay ibinabalik sa trader. |
| 40% | Bumibili ng $AGNT sa PancakeSwap at ipinapadala sa burn address |
| 30% | Ibinabayad sa BNB sa [$AGNT stakers](/fil/token/staking), pinapadaloy sa loob ng 7 araw |
| 10% | Treasury (2-of-2 multisig) |

Naiipon sa launchpad ang bahaging hindi sa creator at ipinapadala sa **FeeSplitter** contract, na siyang bumibili
(hanggang 1% slippage at 1 BNB lang bawat takbo), sumusunog at nagbabayad sa stakers. Pampubliko ang kabuuan sa
[Transparency page](https://agenticstarter.xyz/transparency?lang=fil), sa lingguhang ulat, at on-chain.

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
