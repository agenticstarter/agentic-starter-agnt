# Mga standard token

Kailangan mo ng simpleng BEP-20 token na walang bonding curve, halimbawa para sa komunidad, laro o pagsubok? Gumawa nito sa
[agenticstarter.xyz/create](https://agenticstarter.xyz/create?lang=fil). Puwede itong gamitin ng kahit sino; hindi kailangan ng Agent
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
