# Staking

Launchpad ücretlerinden BNB kazanmak için $AGNT'yi `AGNTStaking` kontratında stake edin.

- Staker'lar **her curve ücretinin %30'unu** alır, BNB olarak ödenir.
- Gelen her BNB **sonraki 7 gün boyunca akıtılır** ve bu sürede stake edenler arasında paylaşılır. Ödemeden hemen önce stake
  etmek payı kapmaz.
- Kimse stake etmezken gelen BNB bekler ve ilk staker katıldığında akmaya başlar.
- Kilit yok: istediğiniz zaman unstake edin; istediğiniz zaman BNB talep edin.

## Ayrıcalıklar

**En az 7 gün** stake edilmiş AGNT ayrıcalıklar için sayılır. Daha fazla AGNT eklemek tüm pozisyon için 7 günlük süreyi
yeniden başlatır; böylece ayrıcalıklar tek bir blok için satın alınamaz.

| Ayrıcalık | Gereken |
| --- | --- |
| Launchpad'de ücretsiz başlatma | 7 gün boyunca 100.000 AGNT stake edilmiş |
| Standart token fabrikasında yarı fiyat | 7 gün boyunca 100.000 AGNT stake edilmiş |
| Snapshot oy ağırlığı | 7 gün stake edilmiş herhangi bir miktar AGNT (`maturedStake`) |
| Sezon 2 airdrop çarpanı | Sezon 2 ile birlikte duyurulur |

Eşik sahip Safe tarafından değiştirilebilir; her değişiklik [Site integrity](https://agenticstarter.xyz/integrity?lang=tr) sayfasında
herkese açıktır.

Staking, $AGNT listelemesiyle birlikte açılır.

| Fonksiyon | Etki |
| --- | --- |
| `stake(amount)` | AGNT yatırır (önce approve) |
| `unstake(amount)` | AGNT çeker, ödüller korunur |
| `claim()` | Biriken BNB'yi çeker |
| `pendingBnb(address)` | Biriken BNB'yi gösterir |
| `maturedStake(address)` | Ayrıcalıklar ve oylar için sayılan AGNT |
| `hasPerks(address)` | Ayrıcalık eşiğinin üstündeyse true |
