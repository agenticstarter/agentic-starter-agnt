# Meluncurkan token

Beri tahu agen apa yang ingin diluncurkan, periksa pratinjaunya, setujui. Itu saja alurnya.

```text
Launch a token on Agentic Starter: name "Nova Agent", symbol NOVA, description "Scouts fresh launches",
logo https://…/nova.png, X @nova_agent, and buy 0.2 BNB of it in the same transaction.
Show me the preview first and wait for my OK.
```

Agen menjalankan:

```bash
agentic create --name "Nova Agent" --symbol NOVA \
  --description "Scouts fresh launches" --logo https://…/nova.png --twitter @nova_agent \
  --telegram https://t.me/nova_agent --buy 0.2
agentic execute --request-id <id>
```

Sebelum pratinjau, CLI mencari salt yang membuat alamat token berakhiran `AAAA`. Ini butuh beberapa detik.

Di situs web, formulir peluncuran berjalan dalam tiga langkah. Ketik satu kalimat tentang ide Anda lalu tekan **Fill it in**
untuk mendapat nama, simbol, dan deskripsi yang bisa Anda edit. Masukkan logo: logo disematkan ke IPFS dan prompt memakai
tautan `ipfs://` (dari CLI, `--logo ./nova.png` melakukan hal yang sama). Lalu pilih ke mana biaya kreator mengalir, periksa
kartu pratinjau, dan salin prompt untuk agen Anda. Simulator curve menampilkan harga dan market cap di setiap tahap.

| Kolom | Batas |
| --- | --- |
| Nama | 1–32 karakter |
| Simbol | 2–10 huruf kapital atau angka. Ticker seperti AGNT, BNB, BTC, ETH, USDT, USDC, dan CAKE dicadangkan |
| Aksara nama dan simbol | Satu alfabet per nama, jadi huruf mirip dari aksara lain ditolak |
| Metadata (deskripsi, URL logo, tautan) | disimpan on-chain, hingga ~1 KB |
| Logo | URL `https://` / `ipfs://`, atau file PNG, JPG, GIF, WebP lokal hingga 1 MB (diunggah ke IPFS) |
| Pembelian pertama | opsional, butuh Agent ID, berlaku batas per wallet |
| X | tautan atau `@handle` (disimpan sebagai handle) |
| Telegram | hanya tautan `t.me` |
| Biaya peluncuran | {{P.mainnet.launchFeeBnb}} BNB di mainnet, gratis di testnet dan untuk staker AGNT dengan perk, ditambah gas |
| Pasangan | BNB. Pasangan lain akan menyusul |

Token tidak punya pajak, tidak punya fungsi mint, dan tidak punya pemilik.

## Ke mana biaya kreator mengalir

| Opsi | CLI | Situs web |
| --- | --- | --- |
| Wallet peluncuran Anda (default) | — | biarkan wallet biaya kosong |
| Wallet lain | `--fee-to 0xWallet:100` | kolom **Creator fee wallet** |
| Pembagian, hingga 10 penerima | `--fee-to 0xA:60,0xB:40` | diatur di My tokens setelah peluncuran |
| Akun X atau GitHub | `--fee-to 0xA:80,x:@alice:20` | diatur di My tokens setelah peluncuran |
| Cashback untuk trader | `--cashback` | **Reward mode → Cashback** |

Bagian untuk akun menunggu di escrow sampai pemilik akun membuktikan akunnya dan menautkan wallet; bagian yang tidak
diklaim kembali ke kreator setelah 90 hari. Perubahan pembagian berlaku 24 jam setelah Anda mengusulkannya. Lihat
[Biaya](/id/guide/fees#creator-fee-options).

## Testnet: luncurkan dengan bot Telegram {#testnet-telegram}

Di testnet BNB Chain Anda bisa meluncurkan tanpa menyiapkan agen. Bot kami, Agen, bertindak sebagai agen dan membayar gas;
wallet Anda tercatat sebagai kreator.

1. Buka [Launch](https://agenticstarter.xyz/launch?lang=id), hubungkan wallet yang akan memiliki token, dan isi nama, simbol,
   logo, deskripsi, dan tautan.
2. Tekan **Open in Telegram**. Bot terbuka dengan kode peluncuran Anda dan menampilkan pratinjau.
3. Ketuk **🚀 Launch now**. Beberapa detik kemudian bot membalas dengan alamat token, dan token muncul di halaman Explore.

Jika Telegram tidak terbuka, salin baris `/launch ABCD2345` dari halaman dan kirim ke bot. Kode berlaku 24 jam dan hanya
sekali pakai. Setiap akun Telegram bisa meluncurkan hingga 3 token per hari.

Bot tidak membeli untuk Anda. Untuk membeli, buka halaman token, klaim Agent ID testnet gratis, lalu beli dengan BNB uji.
Di testnet token lulus di **{{P.testnet.graduationTargetBnb}} BNB**.

## Setelah peluncuran

Halaman peluncuran lalu menampilkan **kit pasca-peluncuran**: postingan X siap pakai, teks Telegram, gambar untuk dibagikan,
dan widget sematan untuk situs Anda. Di [My tokens](https://agenticstarter.xyz/me?lang=id) Anda bisa:

| Aksi | Detail |
| --- | --- |
| Pantau progres | Progres curve, BNB terkumpul, holder |
| Klaim hadiah kreator | 20% dari setiap biaya curve token Anda, dibayar dalam BNB, sampai lulus, ditambah bonus lulus |
| Perbarui info | Ubah logo, deskripsi, dan tautan dengan {{P.mainnet.metaUpdateFeeBnb}} BNB di mainnet. Nama dan simbol tidak pernah berubah. Holder melihat pemberitahuan selama 7 hari dan seluruh riwayat tetap publik. |
| Pembagian biaya | Usulkan pembagian baru; berlaku setelah 24 jam |
| Pindahkan kreator | Usulkan wallet kreator baru; ia mengambil alih setelah menerima di halaman token. Hadiah yang sudah didapat tetap bisa Anda klaim. |
| Alokasi kreator | Di tempat yang berlaku (testnet saat ini), klaim bagian yang sudah terbuka setelah lulus |
| Verifikasi X | Tautkan akun X untuk menampilkan lencana kreator terverifikasi di halaman token |

Kreator 100 token pertama yang lulus di mainnet mendapat lencana permanen **Genesis Creator**.
