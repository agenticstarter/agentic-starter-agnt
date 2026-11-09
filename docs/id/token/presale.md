# Presale

Ikuti di [presale.agenticstarter.xyz](https://presale.agenticstarter.xyz?lang=id) dengan wallet browser apa pun yang mendukung
BNB Chain. Tanpa KYC, tanpa email, hanya wallet. Ini satu putaran publik dengan **satu harga untuk semua orang**.

::: warning Beli hanya di halaman presale
Jangan pernah mengirim BNB ke siapa pun, dan jangan pernah ke alamat kontrak: transfer biasa ditolak. Admin tidak pernah
DM lebih dulu. Bandingkan alamat kontrak dengan [Site integrity](https://agenticstarter.xyz/integrity?lang=id).
:::

## Cara kerja harga ("250+")

| Terkumpul | Yang terjadi |
| --- | --- |
| Di bawah {{P.presale.softCapBnb}} BNB (soft cap) | Penjualan gagal. Setiap pembeli me-refund 100% BNB-nya di halaman presale |
| {{P.presale.softCapBnb}} sampai {{P.presale.floorCapBnb}} BNB | Semua orang membeli di harga dasar: **1 BNB = {{P.presale.floorAgntPerBnb|n}} AGNT**. AGNT yang tidak terjual dibakar saat finalisasi |
| Di atas {{P.presale.floorCapBnb}} BNB | {{P.presale.saleTokens|n}} AGNT yang dijual dibagi berdasarkan BNB yang disumbang. Semua orang membayar harga akhir yang sama, sedikit naik dengan setiap BNB. Tidak ada hard cap |

Contoh di akhir penjualan, untuk pembeli yang mengirim 1 BNB:

| Total terkumpul | 1 BNB membeli |
| --- | --- |
| 120 BNB | 1.000.000 AGNT (130M AGNT yang tidak terjual dibakar) |
| 250 BNB | 1.000.000 AGNT |
| 500 BNB | 500.000 AGNT |
| 1.000 BNB | 250.000 AGNT |

Halaman menampilkan harga langsung, simulator, dan posisi Anda sendiri ("Where is my money?"). Selama penjualan di atas
{{P.presale.floorCapBnb}} BNB, jumlah AGNT Anda masih bisa turun sedikit saat orang lain membeli; BNB Anda tetap sama.

| Parameter | Nilai |
| --- | --- |
| Harga dasar | 1 BNB = {{P.presale.floorAgntPerBnb|n}} AGNT, hingga {{P.presale.floorCapBnb}} BNB terkumpul |
| AGNT untuk dijual | {{P.presale.saleTokens|n}} (25% suplai), disetor ke kontrak sebelum penjualan dibuka |
| Soft cap | {{P.presale.softCapBnb}} BNB |
| Per wallet | Minimal {{P.presale.perWalletBnb.0}} BNB, maksimal {{P.presale.perWalletBnb.1}} BNB secara total |
| Bonus awal | +{{P.presale.earlyBonusPct}}% AGNT untuk pembelian di {{P.presale.earlyBonusHours}} jam pertama, pool dibatasi {{P.presale.earlyBonusCap|n}} AGNT (dibagi proporsional jika penuh), dibayar bersama klaim |
| Durasi | {{P.presale.days}} hari. Waktu mulai dan selesai dalam UTC di halaman presale |
| Klaim | 100% saat listing |

Jika kontribusi melebihi batas maksimal wallet Anda, kelebihan BNB dikembalikan di transaksi yang sama.

## Bagaimana BNB Anda dilindungi

1. BNB Anda tetap di kontrak presale. Tim tidak bisa menariknya sebelum penjualan berakhir.
2. Di bawah soft cap penjualan gagal dan setiap pembeli me-refund 100% di halaman presale.
3. Setelah penjualan, 80% BNB masuk ke pool PancakeSwap saat listing dan LP dibakar. Setiap langkah ditautkan di
   daftar periksa listing di halaman presale. Lihat [Listing](/id/token/listing).

## Undang teman

Hubungkan wallet di halaman presale untuk mendapatkan tautan undangan (`presale.agenticstarter.xyz/?ref=<wallet Anda>`).
Saat seseorang membeli lewat tautan itu, kontrak presale mencatat undangan bersama pembeliannya (`contributeWithRef`).
Pembeli tidak membayar lebih dan alokasinya tidak berubah.

- Setiap wallet yang membeli 0.05 BNB atau lebih lewat link kamu menambah **100 poin airdrop** (misi Q6, maks. 50
  pembeli).
- Ikut presale sendiri adalah misi Q5: mulai 0.05 BNB **+500 poin**, lalu +100 per 0.01 BNB (maks. 10.000), dan membeli di
  48 jam pertama menambah **500**. Beli dengan wallet berbeda dari wallet airdrop? Hubungkan sekali di halaman airdrop
  (kartu Q5).
- Poin dihitung setelah wallet Anda menyelesaikan tiga misi wajib airdrop.
- Membeli lewat tautan sendiri tidak dihitung, dan pembelian yang di-refund dihapus.

## Setelah penjualan

1. **Finalisasi**: BNB masuk ke Treasury Safe dan AGNT yang tidak terjual dibakar.
2. **Listing** keesokan harinya pukul 14:00 UTC: 80% BNB masuk ke pool AGNT/BNB dengan harga akhir presale, LP
   dibakar, lalu klaim dibuka.
3. Anda mengklaim 100% AGNT Anda (dan bonus awal) di halaman presale.

Setiap langkah dicentang di daftar periksa listing di halaman presale lengkap dengan tautan transaksinya. Aktifkan
pengingat di sana (Telegram atau kalender) untuk tahu kapan klaim dibuka.

## Refund

Kontribusi bersifat final, dengan dua pengecualian:

- **Penjualan gagal**: berakhir di bawah soft cap. Refund otomatis dibuka.
- **Tim membuka mode refund** sebelum klaim dibuka. Jika ini terjadi setelah finalisasi, tim harus mengirim kembali
  seluruh jumlahnya ke kontrak presale terlebih dulu, agar setiap pembeli bisa di-refund penuh.

Dalam kedua kasus, Anda me-refund 100% BNB Anda di halaman presale.
