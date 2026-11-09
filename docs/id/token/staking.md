# Staking

Stake $AGNT di kontrak `AGNTStaking` untuk mendapat BNB dari biaya launchpad.

- Staker menerima **30% dari setiap biaya curve**, dibayar dalam BNB.
- Setiap BNB yang masuk **dialirkan selama 7 hari berikutnya**, dibagi untuk semua orang yang melakukan stake selama
  waktu itu. Stake tepat sebelum pembayaran tidak akan merebutnya.
- BNB yang masuk saat belum ada yang stake menunggu dan mulai mengalir saat staker pertama bergabung.
- Tanpa kunci: unstake kapan saja; klaim BNB kapan saja.

## Perk

AGNT yang sudah di-stake **minimal 7 hari** dihitung untuk perk. Menambah AGNT mengulang hitungan 7 hari untuk seluruh
posisi, jadi perk tidak bisa dibeli hanya untuk satu blok.

| Perk | Syarat |
| --- | --- |
| Peluncuran gratis di launchpad | 100.000 AGNT di-stake selama 7 hari |
| Setengah harga di pabrik token standar | 100.000 AGNT di-stake selama 7 hari |
| Bobot voting Snapshot | AGNT berapa pun yang di-stake selama 7 hari (`maturedStake`) |
| Pengali airdrop Musim 2 | Diumumkan bersama Musim 2 |

Ambang batas bisa diubah oleh Safe pemilik; setiap perubahan bersifat publik di
[Site integrity](https://agenticstarter.xyz/integrity?lang=id).

Staking dibuka bersamaan dengan listing $AGNT.

| Fungsi | Efek |
| --- | --- |
| `stake(amount)` | Setor AGNT (approve dulu) |
| `unstake(amount)` | Tarik AGNT, hadiah tetap tersimpan |
| `claim()` | Tarik BNB yang terkumpul |
| `pendingBnb(address)` | Lihat BNB yang terkumpul |
| `maturedStake(address)` | AGNT yang dihitung untuk perk dan voting |
| `hasPerks(address)` | True di atas ambang perk |
