# Cara kerjanya

Setiap token menempuh jalur yang sama: **peluncuran → bonding curve → lulus ke PancakeSwap**.

<div class="flow">
  <div><b>Peluncuran</b><small>1 miliar token dibuat. 800 juta masuk curve, 200 juta disimpan untuk likuiditas.</small></div>
  <div class="arrow">→</div>
  <div><b>Bonding curve</b><small>Agen membeli, siapa saja bisa menjual. Harga naik di setiap beli. Biaya 1% per transaksi.</small></div>
  <div class="arrow">→</div>
  <div><b>Lulus</b><small>Di {{P.mainnet.graduationTargetBnb}} BNB token listing di PancakeSwap. LP dibakar, curve ditutup.</small></div>
</div>

## 1. Hubungkan wallet agen

Agen Anda bertindak lewat wallet agen dengan batas harian yang Anda tetapkan. Wallet itu butuh **Agent ID** untuk membeli
di curve. Lihat [Menyiapkan wallet agen](/id/guide/agent-wallet). Di testnet wallet apa pun bisa mengklaim Agent ID gratis.

## 2. Peluncuran di bonding curve

Peluncuran membuat token dengan suplai tetap **1.000.000.000**:

| Bagian | Jumlah | Tujuan |
| --- | --- | --- |
| Curve | 800.000.000 | Dijual sepanjang bonding curve |
| Likuiditas | 200.000.000 | Ditambahkan ke PancakeSwap saat lulus |

Alamat token selalu berakhiran **`AAAA`**. Itu tanda merek kami, bukan jaminan, jadi selalu buka token dari
[agenticstarter.xyz](https://agenticstarter.xyz?lang=id) atau periksa di [Site integrity](https://agenticstarter.xyz/integrity?lang=id).

Harga mengikuti rumus constant-product: membeli menaikkannya, menjual menurunkannya. Kreator boleh melakukan pembelian
pertama di transaksi peluncuran, dengan batas per wallet yang sama seperti semua orang.

Aturan selama di curve:

- **Beli:** hanya pemegang Agent ID, dicek on-chain di setiap pembelian.
- **Jual:** semua holder, tanpa transaksi approve. Penjualan tidak pernah dijeda.
- **Batas per wallet:** {{P.mainnet.walletCapBps|pct}} suplai per wallet di mainnet ({{P.testnet.walletCapBps|pct}} di testnet).
  Pembelian yang melewati batas dipotong dan sisa BNB dikembalikan di transaksi yang sama. Karena batas ini, sebuah token
  butuh minimal **{{P.mainnet.minWalletsToGraduate}} wallet berbeda** agar lulus di mainnet
  ({{P.testnet.minWalletsToGraduate}} di testnet). Halaman token menunjukkan berapa holder lagi yang dibutuhkan.
- **Biaya:** 1% untuk beli dan jual. Lihat [Biaya](/id/guide/fees).
- **Transfer:** dikunci. Token hanya bergerak antara curve dan trader, sehingga tidak ada yang bisa mengakali batas atau
  membuka pool lebih awal.

Setiap token menyimpan pengaturan saat diluncurkan (target lulus, batas per wallet, biaya lulus, dan bonus). Jika tim
mengubah pengaturan kemudian, perubahan hanya berlaku untuk token baru.

## 3. Lulus ke PancakeSwap

Saat curve mencapai targetnya (**{{P.mainnet.graduationTargetBnb}} BNB** terkumpul di mainnet,
**{{P.testnet.graduationTargetBnb}} BNB** di testnet), kelulusan akan:

1. membuka transfer untuk selamanya;
2. mengambil biaya lulus: {{P.mainnet.graduationFeeBps|pct}} dari target, maksimal 2 BNB
   ({{P.mainnet.graduationFeeBnb}} BNB pada target mainnet). Seperlimanya ({{P.mainnet.creatorBonusBps|pct}}) adalah
   **bonus lulus untuk kreator**, sisanya ke treasury;
3. menambahkan 200 juta token likuiditas dan sisa BNB ke PancakeSwap V2, dengan LP langsung dicetak ke alamat burn,
   sehingga likuiditas terkunci selamanya.

Pembelian yang memenuhi curve memicu kelulusan. Jika tidak terpicu (misalnya saat token punya waktu curve minimum),
siapa pun bisa memanggil `graduate(token)` setelah target tercapai. Harga listing sama dengan harga terakhir di curve,
jadi tidak ada lonjakan. Setelah lulus tidak ada biaya platform dan siapa pun bisa trading di PancakeSwap, dengan atau
tanpa Agent ID.

::: tip Pembelian yang memenuhi curve membayar listing
Pembelian terakhir menjalankan migrasi, jadi gasnya lebih mahal. CLI menandainya sebagai `nearGraduation`.
:::

## Alokasi kreator (testnet)

Di testnet kreator menerima {{P.testnet.creatorAllocBps|pct}} suplai dengan harga peluncuran, di luar batas per wallet.
Alokasi ini disimpan oleh launchpad, tidak bisa dijual sebelum lulus, dan terbuka secara linear selama
{{P.testnet.creatorAllocUnlockDays}} hari setelah lulus. Di mainnet saat ini nilainya {{P.mainnet.creatorAllocBps|pct}};
tim bisa menaikkannya hanya untuk token baru, dan setiap perubahan bersifat publik di
[Site integrity](https://agenticstarter.xyz/integrity?lang=id).

## Saklar keamanan

Kontrak tidak memakai proxy yang bisa di-upgrade. Pemiliknya adalah multisig 2-dari-2 (Safe). Wallet guardian bisa menjeda
**peluncuran baru dan pembelian** dalam keadaan darurat; hanya pemilik yang bisa melanjutkan. **Penjualan, refund, klaim,
dan kelulusan tidak pernah dijeda.** Mengganti sebuah modul (pengecekan Agent ID, templat token, adaptor listing, escrow
biaya, atau perk staking) menunggu **timelock publik 48 jam**. Di mainnet, biaya dan target lulus hanya bisa berubah
paling banyak ±50% per 7 hari, selalu dalam batas keras yang tertulis di kontrak.
