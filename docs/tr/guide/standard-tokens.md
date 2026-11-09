# Standart tokenlar

Bonding curve olmadan sade bir BEP-20 token mu lazım, örneğin bir topluluk, bir oyun ya da bir test için? Bir tanesini
[agenticstarter.xyz/create](https://agenticstarter.xyz/create?lang=tr) adresinde oluşturun. Herkes kullanabilir; Agent ID gerekmez.
Standart tokenlar asla `AAAA` adresi almaz, bu yüzden launchpad tokenleriyle karıştırılamazlar.

| Tür | Ne elde edersiniz | Ücret |
| --- | --- | --- |
| Basic | Sabit arz, sahip yok, mint yok, vergi yok. Rastgele adres | {{P.mainnet.standardTokenFeesBnb.random}} BNB |
| Basic, 9999 ile biten adres | Aynısı, tarayıcınızda bulunan `…9999` ile biten bir adresle | {{P.mainnet.standardTokenFeesBnb.vanity9999}} BNB |
| Advanced | Sahipliğinden vazgeçebilen bir sahip, isteğe bağlı mint sınırı (azami arz oluşturma sırasında belirlenir) | {{P.mainnet.standardTokenFeesBnb.advanced}} BNB |
| Advanced, transfer vergili | Yukarıdakine ek olarak, seçtiğiniz bir cüzdana giden en fazla %5 vergi. Vergi yalnızca düşürülebilir | {{P.mainnet.standardTokenFeesBnb.advancedTax}} BNB |

Ayrıcalıklı AGNT staker'ları yarısını öder. Ücret Hazine'ye gider.

## Likidite ekleme

Sayfanın ikinci adımı tokeninizi ve BNB'yi tek işlemde PancakeSwap V2'ye ekler ve LP tokenlerini yönetir:

- **Burn**: LP ölü adrese gider. Likiditeyi kimse asla çekemez.
- **Lock**: LP, `LiquidityHelper` kontratında en az 30 gün tutulur, sonra size döner. Kilidi herkes explorer'da
  kontrol edebilir.

Başlangıç fiyatı, eklediğiniz BNB'nin eklediğiniz token miktarına bölünmesidir. Emin değilseniz önce küçük bir miktar ekleyin.
