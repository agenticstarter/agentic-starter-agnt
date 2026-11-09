# Ücretler

| Ne zaman | Ücret | Nereye |
| --- | --- | --- |
| Token başlatma | Mainnet'te {{P.mainnet.launchFeeBnb}} BNB, testnette ücretsiz (+ gas). Ayrıcalıklı AGNT staker'ları için ücretsiz | Hazine |
| Curve'de alım veya satım | %1 | Aşağıdaki gibi bölünür |
| Mezuniyet | Hedefin {{P.mainnet.graduationFeeBps|pct}}'i, en fazla 2 BNB ({{P.mainnet.graduationTargetBnb}} BNB hedefinde {{P.mainnet.graduationFeeBnb}} BNB), toplanan BNB'den alınır | {{P.mainnet.creatorBonusBps|pct}} yaratıcıya, gerisi hazineye |
| Bir tokenin logosunu, açıklamasını veya bağlantılarını güncelleme | Mainnet'te {{P.mainnet.metaUpdateFeeBnb}} BNB, testnette ücretsiz | Hazine |
| Mezuniyetten sonra işlem (PancakeSwap) | Platform ücreti yok (PancakeSwap'ın kendi %0,25'i) | — |

## %1 curve ücreti nereye gider

<div class="split"><span class="s1" style="width:20%">20%</span><span class="s2" style="width:40%">40%</span><span class="s3" style="width:30%">30%</span><span class="s4" style="width:10%">10%</span></div>
<div class="split-legend"><span><i style="background:#ffc93c"></i>Token yaratıcısı</span><span><i style="background:#b79cff"></i>$AGNT geri alım ve yakma</span><span><i style="background:#7ed6a8"></i>$AGNT staker'ları, BNB olarak</span><span><i style="background:#c9c8cf"></i>Hazine</span></div>

| Pay | Nereye |
| --- | --- |
| %20 | Tokenin **yaratıcısına** (veya yaratıcının ücret bölüşümüne), mezuniyete kadar. Yaratıcının kendi işlemleri bu payı doğurmaz. [My tokens](https://agenticstarter.xyz/me?lang=tr) sayfasından talep edilir. **Cashback modunda** bu pay bunun yerine işlemi yapana geri döner. |
| %40 | PancakeSwap'ta $AGNT alır ve yakma adresine gönderir |
| %30 | [$AGNT staker'larına](/tr/token/staking) BNB olarak ödenir, 7 gün boyunca akıtılır |
| %10 | Hazine (2'de 2 multisig) |

Yaratıcıya ait olmayan kısım launchpad'de birikir ve geri alım (çalıştırma başına en fazla %1 slippage ve 1 BNB), yakma ve
staker ödemelerini yapan **FeeSplitter** kontratına gönderilir. Toplamlar [Transparency sayfasında](https://agenticstarter.xyz/transparency?lang=tr),
haftalık raporda ve zincir üzerinde herkese açıktır.

## Yaratıcı ücret seçenekleri {#creator-fee-options}

Başlatırken yaratıcı iki moddan birini seçer:

| Mod | Yaratıcının %20'sine ne olur |
| --- | --- |
| **Creator fees** (varsayılan) | Yaratıcı cüzdanına ödenir veya 10 alıcıya kadar bölünür. Alıcı bir cüzdan ya da bir **X veya GitHub hesabı** olabilir; hesap payları, hesabın sahibi bir cüzdan bağlayana kadar bir emanette bekler (kimse talep etmezse 90 gün sonra yaratıcıya geri döner). |
| **Cashback** | Her alım ve satımda işlemi yapana geri ödenir; böylece işlem yapanlar daha az öder. |

Yeni bir ücret bölüşümü, önerildikten 24 saat sonra uygulanır; böylece holder'lar değişikliği önceden görebilir. Yaratıcı
rolünü başka bir cüzdana taşımak iki adımlı bir devirdir: yeni cüzdanın kabul etmesi gerekir.

## Sahibin aşamayacağı sınırlar

Ücretler yalnızca kontratlara yazılmış sınırlar içinde değişebilir: mezuniyet ücreti hedefin en fazla %5'i ve hiçbir zaman
2 BNB'den fazla değil, yaratıcı mezuniyet bonusu bu ücretin en fazla %30'u, mezuniyet hedefi en fazla 50 BNB, başlatma ücreti
en fazla 0,02 BNB, güncelleme ücreti en fazla 0,05 BNB ve yaratıcı payı en fazla %30. Mainnet'te bunların her biri 7 günde
en fazla ±%50 oynayabilir. %1 curve ücretinin kendisi sabittir.
