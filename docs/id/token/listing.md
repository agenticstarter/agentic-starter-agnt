# Listing dan penggunaan dana

$AGNT listing di PancakeSwap V2 sehari setelah presale berakhir, pukul 14:00 UTC.

## Aturan listing

| | |
| --- | --- |
| Harga listing | Harga akhir presale. Pembeli presale dan pembeli pasar pertama membayar harga yang sama |
| BNB ke pool | {{P.presale.listing.bnbToPoolPct}}% dari seluruh BNB yang terkumpul |
| AGNT ke pool | 80% BNB terkumpul ÷ harga akhir: {{P.presale.listing.maxPoolAgnt|n}} AGNT bila terkumpul {{P.presale.floorCapBnb}} BNB atau lebih, 800.000 AGNT per BNB di bawah itu |
| Asal AGNT | Liquidity Safe (150M) ditambah hingga 50M dari 60M cadangan listing. AGNT yang tidak dibutuhkan tetap di Liquidity Safe |
| Token LP | Dibakar di langkah yang sama. Tidak ada yang bisa menarik likuiditas |

Sisa {{P.presale.listing.bnbToTreasuryPct}}% BNB masuk ke Treasury Safe.

## Penggunaan dana (bagian Treasury 20%)

| Penggunaan | Porsi |
| --- | --- |
| Keamanan dan audit | {{P.presale.useOfFundsPct.security}}% |
| Listing di bursa | {{P.presale.useOfFundsPct.listing}}% |
| Marketing dan komunitas | {{P.presale.useOfFundsPct.marketing}}% |
| Operasional (server, API) | {{P.presale.useOfFundsPct.operations}}% |

Pembagian ini bisa diubah sampai presale dibuka. Setelahnya, setiap perubahan dicatat secara publik di
[Site integrity](https://agenticstarter.xyz/integrity?lang=id) dan diumumkan di Telegram. Pengeluaran dilacak di
[laporan Transparency](https://agenticstarter.xyz/transparency?lang=id) mingguan.

## Komitmen penguncian

| Alokasi | Aturan |
| --- | --- |
| Tim (120M) | Kontrak vesting: cliff 12 bulan, lalu linear 24 bulan. Pemilik hanya bisa menunda awal |
| Treasury dan Ekosistem | Tidak ada penjualan di pasar sebelum listing + 6 bulan |
| Likuiditas (Liquidity Safe) | Hanya dipakai untuk pool dan listing |
| Komunitas (Community Safe) | Hanya dipakai untuk airdrop dan bonus awal presale |

Jika Safe proyek mana pun memindahkan AGNT ke pasangan DEX, router, atau alamat deposit bursa yang dikenal, peringatan
publik otomatis dikirim di channel dan grup Telegram.

## Periksa sendiri

- [Liquidity proof](https://agenticstarter.xyz/liquidity?lang=id): alamat pool, cadangan langsung, dan transaksi burn LP,
  dibaca dari chain.
- Daftar periksa listing di halaman presale: Finalisasi → BNB ditambahkan ke pool → LP dibakar → klaim dibuka, masing-masing
  dengan transaksinya.
- [Alamat Safe](https://agenticstarter.xyz/integrity?lang=id) beserta setiap perubahan parameter.
