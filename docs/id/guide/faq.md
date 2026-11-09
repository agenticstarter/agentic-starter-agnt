# FAQ

**Bisakah membeli dengan MetaMask?** Tidak di curve mainnet: pembelian di curve butuh wallet dengan Agent ID. Setelah lulus,
bisa, di PancakeSwap. Di testnet Agent ID gratis, jadi wallet apa pun bisa mengklaimnya dan membeli.

**Bisakah menjual tanpa Agent ID?** Bisa. Siapa pun yang memegang token bisa menjual di curve, dan penjualan tidak pernah
dijeda.

**Kenapa saya tidak bisa mengirim token ke teman?** Transfer terbuka saat lulus. Ini mencegah akal-akalan batas per wallet
dan pembukaan pool sebelum listing.

**Pembelian saya mengembalikan BNB. Kenapa?** Anda mencapai batas per wallet atau curve sudah habis; BNB yang tak terpakai
dikembalikan di transaksi yang sama.

**Kenapa setiap alamat token berakhiran AAAA?** Itu tanda merek kami. Tiruan tidak bisa memalsukan seluruh alamat, tetapi
token penipuan di tempat lain tetap bisa berakhiran AAAA, jadi buka token dari situs kami atau periksa di halaman
[Site integrity](https://agenticstarter.xyz/integrity?lang=id).

**Berapa biaya lulus bagi saya?** Tidak ada, kecuali pembelian Anda yang memenuhi curve. Pembelian itu membayar gas tambahan
untuk listing di PancakeSwap. Biaya lulus ({{P.mainnet.graduationFeeBps|pct}} dari target, maksimal 2 BNB)
diambil dari BNB yang terkumpul, dan seperlimanya masuk ke kreator.

**Berapa penghasilan kreator?** 20% dari biaya curve 1% di setiap transaksi orang lain atas tokennya, dalam BNB, sampai
lulus, ditambah bonus lulus. Kreator bisa membaginya dengan hingga 10 wallet atau akun X/GitHub, atau mengembalikannya ke
trader sebagai cashback. Lihat [Biaya](/id/guide/fees).

**Berapa holder yang dibutuhkan sebuah token?** Karena batas per wallet, minimal {{P.mainnet.minWalletsToGraduate}} wallet
berbeda di mainnet ({{P.testnet.minWalletsToGraduate}} di testnet). Halaman token menghitung mundur berapa yang masih dibutuhkan.

**Bisakah kreator mengubah token setelah peluncuran?** Hanya logo, deskripsi, dan tautan, dengan {{P.mainnet.metaUpdateFeeBnb}} BNB. Setiap perubahan
bersifat publik dan halaman token menampilkan pemberitahuan selama 7 hari. Nama, simbol, dan suplai tidak pernah berubah.

**Apakah tim memegang token dari koin yang diluncurkan?** Tidak. Kreator membeli dengan batas per wallet yang sama seperti
semua orang.

**Ada pajak token?** Tidak. Token yang diluncurkan dan $AGNT tidak punya pajak transfer.

**Bisakah tim menghalangi saya menjual?** Tidak. Guardian bisa menjeda peluncuran baru dan pembelian dalam keadaan darurat,
tetapi penjualan dan klaim tidak pernah dijeda.

**Apakah admin akan DM saya?** Tidak pernah lebih dulu. Tidak ada orang dari Agentic Starter yang akan meminta seed phrase
atau private key Anda. Lihat [Tetap aman](/id/guide/safety).

**Bisakah saya membuat token biasa tanpa curve?** Bisa, lewat [pabrik token standar](/id/guide/standard-tokens).

**Di mana melihat kodenya?** [github.com/agenticstarter/agentic-starter-agnt](https://github.com/agenticstarter/agentic-starter-agnt).
Alamat kontrak ada di [Site integrity](https://agenticstarter.xyz/integrity?lang=id).
