# Listeleme ve fonların kullanımı

$AGNT, ön satışın bitmesinden bir gün sonra, 14:00 UTC'de PancakeSwap V2'de listelenir.

## Listeleme kuralı

| | |
| --- | --- |
| Listeleme fiyatı | Nihai ön satış fiyatı. Ön satış alıcıları ve ilk piyasa alıcıları aynı fiyatı öder |
| Havuza giren BNB | Toplanan tüm BNB'nin %{{P.presale.listing.bnbToPoolPct}}'i |
| Havuza giren AGNT | Toplanan BNB'nin %80'i ÷ nihai fiyat: {{P.presale.floorCapBnb}} BNB veya daha fazlası toplandığında {{P.presale.listing.maxPoolAgnt|n}} AGNT, bunun altında BNB başına 800.000 AGNT |
| AGNT nereden gelir | Liquidity Safe (150M) artı 60M listeleme rezervinin 50M'a kadar kısmı. Gerekmeyen AGNT Liquidity Safe'te kalır |
| LP tokenleri | Aynı adımda yakılır. Likiditeyi kimse çekemez |

BNB'nin geri kalan %{{P.presale.listing.bnbToTreasuryPct}}'i Treasury Safe'e gider.

## Fonların kullanımı (%20'lik Hazine payı)

| Kullanım | Pay |
| --- | --- |
| Güvenlik ve denetimler | %{{P.presale.useOfFundsPct.security}} |
| Borsa listelemeleri | %{{P.presale.useOfFundsPct.listing}} |
| Pazarlama ve topluluk | %{{P.presale.useOfFundsPct.marketing}} |
| Operasyonlar (sunucular, API'ler) | %{{P.presale.useOfFundsPct.operations}} |

Dağılım ön satış açılana kadar düzenlenebilir. Bundan sonra her değişiklik [Site integrity](https://agenticstarter.xyz/integrity?lang=tr)
sayfasında herkese açık olarak kaydedilir ve Telegram'da duyurulur. Harcamalar haftalık
[Transparency raporunda](https://agenticstarter.xyz/transparency?lang=tr) izlenir.

## Kilit taahhütleri

| Tahsis | Kural |
| --- | --- |
| Ekip (120M) | Vesting kontratı: 12 ay cliff, ardından 24 ay doğrusal. Sahip yalnızca başlangıcı erteleyebilir |
| Hazine ve Ekosistem | Listeleme + 6 aya kadar piyasada satış yok |
| Likidite (Liquidity Safe) | Yalnızca havuz ve listelemeler için kullanılır |
| Topluluk (Community Safe) | Yalnızca airdrop'lar ve ön satış erken bonusu için kullanılır |

Herhangi bir proje Safe'i AGNT'yi bir DEX çiftine, bir router'a veya bilinen bir borsa yatırma adresine taşırsa, Telegram
kanalında ve grubunda otomatik olarak herkese açık bir uyarı yayımlanır.

## Kendiniz kontrol edin

- [Liquidity proof](https://agenticstarter.xyz/liquidity?lang=tr): havuz adresi, canlı rezervler ve LP yakım işlemi, zincirden okunur.
- Ön satış sayfasının listeleme kontrol listesi: Sonlandırma → BNB havuza eklendi → LP yakıldı → claim'ler açıldı, her biri
  kendi işlemiyle.
- Her parametre değişikliğiyle birlikte [Safe adresleri](https://agenticstarter.xyz/integrity?lang=tr).
