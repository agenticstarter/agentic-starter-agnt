# Token standar

Butuh token BEP-20 biasa tanpa bonding curve, misalnya untuk komunitas, game, atau uji coba? Buat di
[agenticstarter.xyz/create](https://agenticstarter.xyz/create?lang=id). Siapa pun bisa memakainya; tanpa Agent ID. Token standar
tidak pernah mendapat alamat `AAAA`, jadi tidak bisa tertukar dengan token launchpad.

| Tipe | Yang Anda dapat | Biaya |
| --- | --- | --- |
| Basic | Suplai tetap, tanpa pemilik, tanpa mint, tanpa pajak. Alamat acak | {{P.mainnet.standardTokenFeesBnb.random}} BNB |
| Basic, alamat berakhiran 9999 | Sama, dengan alamat `…9999` yang dicari di browser Anda | {{P.mainnet.standardTokenFeesBnb.vanity9999}} BNB |
| Advanced | Pemilik yang bisa melepas kepemilikan (renounce), batas mint opsional (suplai maksimal ditetapkan saat pembuatan) | {{P.mainnet.standardTokenFeesBnb.advanced}} BNB |
| Advanced dengan pajak transfer | Seperti di atas, ditambah pajak maksimal 5% ke wallet pilihan Anda. Pajak hanya bisa diturunkan | {{P.mainnet.standardTokenFeesBnb.advancedTax}} BNB |

Staker AGNT dengan perk membayar separuhnya. Biaya masuk ke Treasury.

## Tambahkan likuiditas

Langkah kedua di halaman itu menambahkan token dan BNB Anda ke PancakeSwap V2 dalam satu transaksi, dan mengurus token LP:

- **Burn**: LP dikirim ke alamat mati. Tidak ada yang bisa menarik likuiditas selamanya.
- **Lock**: LP ditahan kontrak `LiquidityHelper` minimal 30 hari, lalu kembali ke Anda. Siapa pun bisa memeriksa
  kuncinya di explorer.

Harga awal adalah BNB yang Anda tambahkan dibagi token yang Anda tambahkan. Tambahkan jumlah kecil dulu jika Anda ragu.
