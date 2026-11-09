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
[Site integrity](https://agenticstarter.xyz/integrity?lang=fil) at inaanunsyo sa Telegram. Sinusubaybayan ang paggastos sa
lingguhang [Transparency report](https://agenticstarter.xyz/transparency?lang=fil).

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

- [Liquidity proof](https://agenticstarter.xyz/liquidity?lang=fil): ang address ng pool, mga live na reserve at ang transaksyon ng
  LP burn, binabasa mula sa chain.
- Ang listing checklist ng presale page: Finalize → naidagdag ang BNB sa pool → nasunog ang LP → bukas na ang claims, bawat
  isa ay may transaksyon.
- [Mga Safe address](https://agenticstarter.xyz/integrity?lang=fil) kasama ang bawat pagbabago ng parameter.
