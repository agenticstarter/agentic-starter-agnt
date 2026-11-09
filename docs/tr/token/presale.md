# Ön satış

BNB Chain'i destekleyen herhangi bir tarayıcı cüzdanıyla [presale.agenticstarter.xyz](https://presale.agenticstarter.xyz?lang=tr)
adresinden katılın. KYC yok, e-posta yok, yalnızca bir cüzdan. **Herkes için tek fiyatlı** tek bir halka açık turdur.

::: warning Yalnızca ön satış sayfasından alın
Asla kimseye BNB göndermeyin ve asla kontrat adresine doğrudan göndermeyin: düz transferler reddedilir. Yöneticiler asla
önce DM atmaz. Kontrat adresini [Site integrity](https://agenticstarter.xyz/integrity?lang=tr) ile karşılaştırın.
:::

## Fiyat nasıl işler ("250+")

| Toplanan | Ne olur |
| --- | --- |
| {{P.presale.softCapBnb}} BNB'nin altı (soft cap) | Satış başarısız olur. Her alıcı BNB'sinin %100'ünü ön satış sayfasından iade alır |
| {{P.presale.softCapBnb}} ile {{P.presale.floorCapBnb}} BNB arası | Herkes taban fiyattan alır: **1 BNB = {{P.presale.floorAgntPerBnb|n}} AGNT**. Satılmayan AGNT sonlandırmada yakılır |
| {{P.presale.floorCapBnb}} BNB üstü | Satıştaki {{P.presale.saleTokens|n}} AGNT, katılınan BNB oranında paylaşılır. Herkes aynı nihai fiyatı öder; bu fiyat her BNB ile biraz yükselir. Hard cap yoktur |

Satışın sonunda 1 BNB gönderen bir alıcı için örnekler:

| Toplam toplanan | 1 BNB ile alınan |
| --- | --- |
| 120 BNB | 1.000.000 AGNT (satılmayan 130M AGNT yakılır) |
| 250 BNB | 1.000.000 AGNT |
| 500 BNB | 500.000 AGNT |
| 1.000 BNB | 250.000 AGNT |

Sayfa canlı fiyatı, bir simülatörü ve kendi pozisyonunuzu ("Where is my money?") gösterir. Satış {{P.presale.floorCapBnb}} BNB'nin
üstündeyken, başkaları aldıkça AGNT miktarınız biraz düşebilir; BNB'niz aynı kalır.

| Parametre | Değer |
| --- | --- |
| Taban fiyat | 1 BNB = {{P.presale.floorAgntPerBnb|n}} AGNT, {{P.presale.floorCapBnb}} BNB toplanana kadar |
| Satıştaki AGNT | {{P.presale.saleTokens|n}} (arzın %25'i), satış açılmadan önce kontrata yatırılır |
| Soft cap | {{P.presale.softCapBnb}} BNB |
| Cüzdan başına | Toplamda en az {{P.presale.perWalletBnb.0}} BNB, en fazla {{P.presale.perWalletBnb.1}} BNB |
| Erken bonus | İlk {{P.presale.earlyBonusHours}} saatteki alımlara +%{{P.presale.earlyBonusPct}} AGNT, havuz {{P.presale.earlyBonusCap|n}} AGNT ile sınırlı (dolarsa oranlı paylaşılır), claim ile ödenir |
| Süre | {{P.presale.days}} gün. Başlangıç ve bitiş saatleri UTC'dir ve ön satış sayfasında gösterilir |
| Claim | Listelemede %100 |

Bir katkı cüzdan maksimumunuzu aşarsa fazla BNB aynı işlemde iade edilir.

## BNB'niz nasıl korunur

1. BNB'niz ön satış kontratında kalır. Ekip satış bitmeden onu çekemez.
2. Soft cap'in altında satış başarısız olur ve her alıcı %100'ünü ön satış sayfasından iade alır.
3. Satıştan sonra, BNB'nin %80'i listelemede PancakeSwap havuzuna girer ve LP yakılır. Her adım, ön satış sayfasının listeleme
   kontrol listesinde bağlantılıdır. Bkz. [Listeleme](/tr/token/listing).

## Arkadaşlarınızı davet edin

Davet bağlantınızı (`presale.agenticstarter.xyz/?ref=<cüzdanınız>`) almak için ön satış sayfasında cüzdanınızı bağlayın. Biri bu
bağlantıyla alım yaptığında ön satış kontratı daveti alımla birlikte kaydeder (`contributeWithRef`). Alıcı fazladan ödemez
ve tahsisi değişmez.

- Bağlantınla 0.05 BNB veya üzeri alan her cüzdan puanına **100 airdrop puanı** ekler (görev Q6, en fazla 50 alıcı).
- Ön satışa kendin katılmak görev Q5'tir: 0.05 BNB'den itibaren **+500 puan**, sonra her 0.01 BNB için +100 (en fazla
  10.000), ilk 48 saatte almak **500** ekler. Airdrop cüzdanından farklı bir cüzdanla mı aldın? Airdrop sayfasında bir kez
  bağla (Q5 kartı).
- Puanlar, cüzdanınız airdrop'un üç zorunlu görevini tamamladığında sayılır.
- Kendi bağlantınızla almak sayılmaz ve iade edilen alımlar çıkarılır.

## Satıştan sonra

1. **Sonlandırma**: BNB Treasury Safe'e gider ve satılmayan AGNT yakılır.
2. **Listeleme** ertesi gün 14:00 UTC'de: BNB'nin %80'i nihai ön satış fiyatından AGNT/BNB havuzuna girer, LP yakılır, ardından
   claim'ler açılır.
3. AGNT'nizin (ve erken bonusun) %100'ünü ön satış sayfasından claim edersiniz.

Her adım, ön satış sayfasının listeleme kontrol listesinde işlem bağlantısıyla işaretlenir. Claim'lerin ne zaman açıldığını
öğrenmek için oradaki bir hatırlatmayı (Telegram veya takvim) açın.

## İadeler

Katkılar kesindir, iki istisna dışında:

- **Satış başarısız olur**: soft cap'in altında biter. İadeler otomatik açılır.
- **Ekip iade modunu açar**, claim'ler açılmadan önce. Bu, sonlandırmadan sonra olursa ekip önce tutarın tamamını ön satış
  kontratına geri göndermelidir; böylece her alıcı tam iade alabilir.

Her iki durumda da BNB'nizin %100'ünü ön satış sayfasından iade alırsınız.
