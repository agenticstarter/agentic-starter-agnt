=== CONFIG ===
description = Dokumentasi Agentic Starter, launchpad untuk agen AI di BNB Chain.
guide = Panduan
forAgents = Untuk agen
contracts = Kontrak
apps = Aplikasi
launchpad = Launchpad
presale = Presale
airdrop = Airdrop
whatIs = Apa itu Agentic Starter
how = Cara kerja
wallet = Siapkan dompet agen
launch = Luncurkan token
trading = Beli dan jual
ignite = Ignite (burn + pesan)
fees = Biaya
faq = Pertanyaan umum
cli = Referensi CLI
skill = Skill agen
signers = Signer
api = API indexer
tokenomics = Tokenomik
presalePage = Presale
airdropPage = Airdrop
staking = Staking
reference = Referensi
contractsPage = Smart contract
brand = Kit merek
risks = Risiko
inEnglish = bahasa Inggris
outline = Di halaman ini
prev = Halaman sebelumnya
next = Halaman berikutnya
updated = Terakhir diperbarui
top = Kembali ke atas
menu = Menu
appearance = Tampilan
toLight = Ganti ke tema terang
toDark = Ganti ke tema gelap
langMenu = Ganti bahasa
footer = Aset kripto sangat fluktuatif. Tidak ada isi di sini yang merupakan nasihat keuangan.
edit = Edit halaman ini di GitHub
search = Cari
noResults = Tidak ada hasil untuk
nfTitle = HALAMAN TIDAK DITEMUKAN
nfQuote = Halaman yang kamu cari tidak ada atau sudah dipindahkan.
nfLink = Kembali ke beranda
start = Mulai di sini
glossary = Glosarium
standardTokens = Token standar
telegram = Komunitas Telegram
community = Program komunitas
safety = Tetap aman
listing = Listing dan penggunaan dana
installApp = Pasang aplikasi di ponsel

=== FILE index.md ===
---
layout: home
hero:
  name: Agentic Starter
  text: Launchpad yang dijalankan agen Anda.
  tagline: Bonding curve khusus agen di BNB Chain. Setiap pool berpasangan dengan BNB.
  image:
    src: /ai-mark.svg
    alt: Agentic Starter
  actions:
    - theme: brand
      text: Mulai di sini
      link: /guide/start
    - theme: alt
      text: Cara kerjanya
      link: /guide/how-it-works
    - theme: alt
      text: Tokenomik $AGNT
      link: /token/agnt
features:
  - title: Curve khusus agen
    details: Sebelum lulus, hanya wallet yang memegang Agent ID yang bisa membeli. Tanpa bot sniper, tanpa paus manual.
  - title: "{{P.mainnet.walletCapBps|pct}} per wallet"
    details: "Di mainnet tidak ada yang bisa memegang lebih dari {{P.mainnet.walletCapBps|pct}} dari 1 miliar suplai sebuah token di curve, jadi dibutuhkan minimal {{P.mainnet.minWalletsToGraduate}} wallet agar token bisa lulus. Kelebihan BNB dikembalikan di transaksi yang sama."
  - title: Lulus ke PancakeSwap
    details: "Saat terkumpul {{P.mainnet.graduationTargetBnb}} BNB ({{P.testnet.graduationTargetBnb}} BNB di testnet), 200 juta token dan BNB-nya listing di PancakeSwap V2. LP dibakar, biaya curve berakhir."
  - title: Biaya yang kembali
    details: "Biaya curve 1% membayar kreator (20%), membeli kembali dan membakar $AGNT (40%), membayar staker dalam BNB (30%) dan mendanai treasury (10%)."
---

=== FILE guide/start.md ===
# Mulai di sini

Baru di dunia kripto atau di Agentic Starter? Halaman ini membawa Anda dari nol sampai token pertama dalam sekitar 15 menit.
Semua langkah di bawah berjalan di **testnet BNB Chain**, tempat BNB adalah uang uji gratis, jadi Anda tidak bisa rugi apa pun.

<div class="flow">
  <div><b>1. Wallet</b><small>Pasang aplikasi wallet</small></div>
  <div class="arrow">→</div>
  <div><b>2. BNB uji</b><small>Gratis dari faucet</small></div>
  <div class="arrow">→</div>
  <div><b>3. Agent ID</b><small>Gratis di testnet</small></div>
  <div class="arrow">→</div>
  <div><b>4. Trading</b><small>Beli dan jual di curve</small></div>
  <div class="arrow">→</div>
  <div><b>5. Luncurkan</b><small>Token Anda sendiri</small></div>
</div>

## 1. Siapkan wallet

Wallet adalah aplikasi yang menyimpan kripto Anda dan menandatangani transaksi. Pasang wallet yang mendukung BNB Chain,
seperti MetaMask, Trust Wallet, atau Rabby.

Saat dibuat, aplikasi menampilkan **seed phrase** (12 atau 24 kata). Tulis di kertas dan simpan secara offline. Siapa pun
yang memilikinya menguasai wallet Anda. Tidak ada orang dari Agentic Starter yang akan memintanya.

## 2. Dapatkan BNB uji gratis

1. Buka [agenticstarter.xyz](https://agenticstarter.xyz) lalu tekan **Connect**. Situs meminta wallet beralih ke
   **BNB Smart Chain Testnet** (chain 97). Setujui.
2. Salin alamat wallet Anda (diawali `0x`).
3. Buka faucet testnet BNB Chain, tempel alamatnya, dan minta tBNB. Masuk dalam satu atau dua menit. [bnbchain.org/en/testnet-faucet](https://www.bnbchain.org/en/testnet-faucet)

[Halaman Start](https://agenticstarter.xyz/start) di launchpad memandu langkah yang sama dan mencentangnya saat Anda selesai.

## 3. Klaim Agent ID

Membeli di bonding curve memerlukan **Agent ID** di wallet Anda. Di testnet gratis: buka halaman token mana saja dan tekan
**Get Agent ID**. Anda hanya membayar sedikit gas uji.

## 4. Lakukan trading pertama

Di halaman token yang sama, beli sedikit, lalu jual sebagian. Lihat bilah progres bergerak menuju PancakeSwap.
Menjual tidak pernah butuh Agent ID.

## 5. Luncurkan token Anda

Buka [Launch](https://agenticstarter.xyz/launch), isi nama, simbol, dan logo, lalu tekan **Open in Telegram**. Bot kami,
Agen, meluncurkannya untuk wallet Anda dan membayar gasnya. Detail di [Meluncurkan token](/guide/launch#testnet-telegram).

## Sekalian: airdrop

Setiap langkah ini juga memberi [poin airdrop](/token/airdrop): meluncurkan, trading, kuis harian, dan lainnya.

## Istilah yang akan Anda temui

Belum paham arti "curve", "lulus", atau "gas"? Lihat [glosarium](/guide/glossary). Masih bingung? Tanya Agen,
gelembung chat di pojok setiap situs, atau di grup Telegram kami.

=== FILE guide/glossary.md ===
# Glosarium

| Istilah | Arti |
| --- | --- |
| **Alamat AAAA** | Setiap token yang diluncurkan di sini memiliki alamat kontrak berakhiran `AAAA`. Ini tanda merek, bukan pemeriksaan keamanan: selalu buka token dari situs kami. |
| **Agen** | Program AI yang bertindak untuk Anda; di sini, meluncurkan dan memperdagangkan token dari wallet-nya sendiri, dalam batas yang Anda tetapkan. |
| **Agent ID** | Kredensial yang dipegang wallet agen. Diperlukan untuk membeli di bonding curve. Gratis di testnet. |
| **Wallet agen** | Wallet terpisah yang dipakai agen Anda, dengan batas pengeluaran, agar dana utama Anda tetap terpisah. |
| **Airdrop** | $AGNT gratis yang dibagikan ke wallet yang memenuhi syarat setelah satu musim, sebanding dengan poinnya. |
| **BNB** | Koin asli BNB Chain. Dipakai membayar gas, dan semua token di sini diberi harga dalam BNB. |
| **BNB Chain** | Blockchain tempat Agentic Starter berjalan. |
| **Bonding curve** | Kontrak yang menjual token baru dengan harga yang ditentukan rumus: setiap beli menaikkan harga, setiap jual menurunkannya. Tanpa order book. |
| **Bakar (burn)** | Mengirim token ke alamat yang tidak dikendalikan siapa pun, sehingga hilang selamanya. |
| **Kreator** | Wallet yang menjadi pemilik peluncuran token. Mendapat bagian biaya curve sampai lulus (atau memberikannya kepada trader sebagai cashback). |
| **Cashback** | Opsi peluncuran: bagian kreator dari biaya curve dikembalikan ke trader di setiap transaksi. |
| **Featured** | Slot di Explore yang dibayar dengan membakar AGNT. Ini iklan, bukan ulasan. |
| **Golden hour** | Satu jam setiap hari saat poin airdrop dihitung dua kali lipat. |
| **Biaya curve** | 1% dari setiap beli dan jual di bonding curve. Lihat [Biaya](/guide/fees). |
| **Faucet** | Situs yang membagikan BNB testnet gratis. |
| **Gas** | Biaya kecil yang ditarik jaringan untuk setiap transaksi, dibayar dengan BNB. |
| **Genesis Creator** | Lencana permanen untuk kreator 100 token pertama yang lulus di mainnet. |
| **Lulus (graduation)** | Saat curve terisi penuh: token pindah ke PancakeSwap dengan likuiditas terkunci dan curve ditutup. |
| **Ignite** | Membakar sebagian token dengan pesan publik terlampir. Lihat [Ignite](/guide/ignite). |
| **Token LP** | Bukti kepemilikan bagian pool PancakeSwap. Kami membakarnya saat lulus, jadi likuiditas tidak pernah bisa ditarik. |
| **Mainnet** | Jaringan sungguhan, dengan uang sungguhan. |
| **PancakeSwap** | Bursa terbesar di BNB Chain. Token yang lulus diperdagangkan di sana. |
| **Presale** | Penjualan publik pertama $AGNT, sebelum listing. Lihat [Presale](/token/presale). |
| **Seed phrase** | 12 atau 24 kata yang mengendalikan wallet. Jangan pernah dibagikan kepada siapa pun. |
| **Slippage** | Seberapa jauh harga boleh bergerak antara pratinjau dan transaksi sebelum ditolak. |
| **Snapshot** | Saat poin dibekukan dan bagian airdrop dihitung. |
| **Staking** | Mengunci $AGNT di kontrak untuk mendapat bagian biaya dalam BNB. Lihat [Staking](/token/staking). |
| **Testnet** | Salinan latihan BNB Chain tempat BNB gratis dan tidak bernilai. |
| **TGE** | Token generation event: hari $AGNT listing di PancakeSwap dan klaim presale dibuka. |
| **Batas per wallet** | Jumlah maksimum suatu token yang boleh dipegang satu wallet selama masih di curve ({{P.mainnet.walletCapBps|pct}} di mainnet, {{P.testnet.walletCapBps|pct}} di testnet). |

=== FILE guide/what-is.md ===
# Apa itu Agentic Starter

::: tip Baru di sini?
Halaman [Mulai di sini](/guide/start) membawa Anda dari nol ke token pertama di testnet dalam sekitar 15 menit.
:::

Agentic Starter adalah launchpad token di BNB Chain yang dibuat untuk agen AI. Agen Anda meluncurkan token, agen Anda
memperdagangkannya di bonding curve, dan Anda menyetujui setiap langkah. Saat curve penuh, token listing di PancakeSwap,
dipasangkan dengan BNB.

Di mainnet tidak ada tombol beli di [agenticstarter.xyz](https://agenticstarter.xyz). Situs menampilkan market, grafik,
holder, dan agen; trading dilakukan lewat [agent CLI](/agents/cli) dan wallet agen.

::: tip Testnet
Di testnet BNB Chain siapa pun bisa mencobanya tanpa agen: luncurkan lewat bot Telegram kami
([Luncurkan token](/guide/launch#testnet-telegram)), klaim Agent ID testnet gratis di halaman token mana pun, lalu beli
dengan BNB uji dari wallet biasa.
:::

## Kenapa khusus agen

| Masalah di launchpad biasa | Yang dilakukan Agentic Starter |
| --- | --- |
| Bot sniper membeli di blok pertama | Hanya wallet dengan Agent ID yang bisa membeli di curve |
| Satu whale memborong sebagian besar suplai | Setiap wallet memegang maksimal 1% selama di curve |
| Pool dibuat sebelum peluncuran, dump OTC | Transfer dikunci sampai lulus |
| Likuiditas ditarik setelah listing | Token LP dibakar saat lulus |
| Biaya tidak ke mana-mana | Biaya 1% membayar kreator, membakar $AGNT, dan membayar staker dalam BNB |

## Untuk siapa

- **Pembuat agen** yang ingin agennya meluncurkan dan memperdagangkan token dengan aman, dalam batas yang diatur pemiliknya.
- **Komunitas** yang ingin awal yang adil tanpa bot.
- **Pemegang $AGNT**, yang ikut menikmati biaya dari setiap peluncuran.

## Cakupan fase 1

Semua token berpasangan dengan **BNB** di **BNB Chain**. Pasangan dan chain lain mungkin menyusul seiring meluasnya wallet
agen; komunitas akan ditanya lebih dulu.

=== FILE guide/how-it-works.md ===
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
di curve. Lihat [Menyiapkan wallet agen](/guide/agent-wallet). Di testnet wallet apa pun bisa mengklaim Agent ID gratis.

## 2. Peluncuran di bonding curve

Peluncuran membuat token dengan suplai tetap **1.000.000.000**:

| Bagian | Jumlah | Tujuan |
| --- | --- | --- |
| Curve | 800.000.000 | Dijual sepanjang bonding curve |
| Likuiditas | 200.000.000 | Ditambahkan ke PancakeSwap saat lulus |

Alamat token selalu berakhiran **`AAAA`**. Itu tanda merek kami, bukan jaminan, jadi selalu buka token dari
[agenticstarter.xyz](https://agenticstarter.xyz) atau periksa di [Site integrity](https://agenticstarter.xyz/integrity).

Harga mengikuti rumus constant-product: membeli menaikkannya, menjual menurunkannya. Kreator boleh melakukan pembelian
pertama di transaksi peluncuran, dengan batas per wallet yang sama seperti semua orang.

Aturan selama di curve:

- **Beli:** hanya pemegang Agent ID, dicek on-chain di setiap pembelian.
- **Jual:** semua holder, tanpa transaksi approve. Penjualan tidak pernah dijeda.
- **Batas per wallet:** {{P.mainnet.walletCapBps|pct}} suplai per wallet di mainnet ({{P.testnet.walletCapBps|pct}} di testnet).
  Pembelian yang melewati batas dipotong dan sisa BNB dikembalikan di transaksi yang sama. Karena batas ini, sebuah token
  butuh minimal **{{P.mainnet.minWalletsToGraduate}} wallet berbeda** agar lulus di mainnet
  ({{P.testnet.minWalletsToGraduate}} di testnet). Halaman token menunjukkan berapa holder lagi yang dibutuhkan.
- **Biaya:** 1% untuk beli dan jual. Lihat [Biaya](/guide/fees).
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
[Site integrity](https://agenticstarter.xyz/integrity).

## Saklar keamanan

Kontrak tidak memakai proxy yang bisa di-upgrade. Pemiliknya adalah multisig 2-dari-2 (Safe). Wallet guardian bisa menjeda
**peluncuran baru dan pembelian** dalam keadaan darurat; hanya pemilik yang bisa melanjutkan. **Penjualan, refund, klaim,
dan kelulusan tidak pernah dijeda.** Mengganti sebuah modul (pengecekan Agent ID, templat token, adaptor listing, escrow
biaya, atau perk staking) menunggu **timelock publik 48 jam**. Di mainnet, biaya dan target lulus hanya bisa berubah
paling banyak ±50% per 7 hari, selalu dalam batas keras yang tertulis di kontrak.

=== FILE guide/agent-wallet.md ===
# Siapkan dompet agen

Anda butuh tiga hal: wallet agentic, Agent ID di wallet itu, dan sedikit BNB.

1. **Buat wallet agentic** di aplikasi wallet yang mendukung agen AI. Ini sub-wallet terpisah tanpa kunci dengan
   saldo sendiri, jadi dana utama Anda tetap terpisah.
2. **Atur pengaman:** batas belanja harian, token apa saja yang boleh diperdagangkan agen, dan cara konfirmasi transaksi
   berisiko. Aktifkan tanda tangan otomatis agar agen bisa bertindak dalam batas itu.
3. **Klaim Agent ID** untuk wallet tersebut. Launchpad mengeceknya on-chain di setiap pembelian di curve.
4. **Isi BNB** untuk gas dan pembelian (0,05 BNB cukup untuk mulai).
5. **Pasang skill dan CLI** di agen Anda:

```bash
npx skills add agenticstarter/agentic-starter-agnt/skill
npm i -g @agenticstarter/cli
```

6. **Hubungkan signer.** Arahkan CLI ke perintah tanda tangan wallet Anda (lihat [Signer](/agents/signers)).
7. **Cek:** minta agen menjalankan `agentic preflight`. Setiap cek yang gagal disertai cara memperbaikinya.

Anda juga bisa menempelkan alamat wallet di [Agent check](https://agenticstarter.xyz/check) untuk melihat status Agent ID
dan aset yang dipegang.

::: warning
Jangan pernah memberikan seed phrase wallet utama Anda ke agen. Gunakan wallet agen khusus yang punya batas.
:::

=== FILE guide/launch.md ===
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
[Biaya](/guide/fees#creator-fee-options).

## Testnet: luncurkan dengan bot Telegram {#testnet-telegram}

Di testnet BNB Chain Anda bisa meluncurkan tanpa menyiapkan agen. Bot kami, Agen, bertindak sebagai agen dan membayar gas;
wallet Anda tercatat sebagai kreator.

1. Buka [Launch](https://agenticstarter.xyz/launch), hubungkan wallet yang akan memiliki token, dan isi nama, simbol,
   logo, deskripsi, dan tautan.
2. Tekan **Open in Telegram**. Bot terbuka dengan kode peluncuran Anda dan menampilkan pratinjau.
3. Ketuk **🚀 Launch now**. Beberapa detik kemudian bot membalas dengan alamat token, dan token muncul di halaman Explore.

Jika Telegram tidak terbuka, salin baris `/launch ABCD2345` dari halaman dan kirim ke bot. Kode berlaku 24 jam dan hanya
sekali pakai. Setiap akun Telegram bisa meluncurkan hingga 3 token per hari.

Bot tidak membeli untuk Anda. Untuk membeli, buka halaman token, klaim Agent ID testnet gratis, lalu beli dengan BNB uji.
Di testnet token lulus di **{{P.testnet.graduationTargetBnb}} BNB**.

## Setelah peluncuran

Halaman peluncuran lalu menampilkan **kit pasca-peluncuran**: postingan X siap pakai, teks Telegram, gambar untuk dibagikan,
dan widget sematan untuk situs Anda. Di [My tokens](https://agenticstarter.xyz/me) Anda bisa:

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

=== FILE guide/trading.md ===
# Beli dan jual

Semua trade di curve mengikuti alur **pratinjau → setujui → eksekusi**. Pratinjau kedaluwarsa setelah 5 menit dan hanya
berjalan sekali.

## Beli

```bash
agentic quote --token 0x… --bnb 0.1        # cek harga saja
agentic buy   --token 0x… --bnb 0.1        # pratinjau, mengembalikan requestId
agentic execute --request-id <id>          # setelah pengguna setuju
```

Pratinjau menampilkan jumlah token yang didapat, jumlah minimum setelah slippage (default 1%), biaya, dan refund bila ada.

## Jual

```bash
agentic sell --token 0x… --percent 50      # atau --amount 2500000, atau --all
agentic execute --request-id <id>
```

Menjual tidak perlu Agent ID dan tidak perlu transaksi approve terpisah.

## Setelah lulus

Setelah token lulus, curve-nya ditutup dan token diperdagangkan di pool PancakeSwap V2, dipasangkan dengan BNB, seperti
token BEP-20 lainnya. Tidak perlu Agent ID dan Agentic Starter tidak memungut biaya; biaya pool 0,25%.

- **Situs:** halaman token berganti menjadi kotak swap PancakeSwap (langsung ke router PancakeSwap) dan grafik
  DexScreener. **Open in PancakeSwap** juga bisa dipakai.
- **Agen:** perintah `agentic buy` dan `agentic sell` yang sama otomatis lewat PancakeSwap. Penjualan pertama-tama
  mengembalikan permintaan approve (langkah 1 dari 2); eksekusi itu, lalu jalankan perintah jual yang sama lagi.
- **Wallet atau aggregator apa pun** di BNB Chain bisa trading di pool tersebut.

## Memantau market

```bash
agentic near-grad                          # token yang paling dekat lulus
agentic watch --max-events 1 --timeout 30m # tunggu event berikutnya (NDJSON)
```

=== FILE guide/ignite.md ===
# Ignite

Ignite memungkinkan holder mana pun membakar sebagian token dan menyertakan pesan publik singkat. Token dikirim ke alamat
mati (`0x…dEaD`) selamanya, dan pesannya disimpan on-chain di samping burn tersebut. Ini cara paling lantang untuk bilang
"saya percaya token ini": Anda mengorbankan token, jadi tidak bisa di-spam gratis.

Fitur ini ada di setiap halaman token (tombol **Ignite** di samping grafik) dan di [papan Ignite](https://agenticstarter.xyz/ignite),
yang menampilkan burn terbaru dan terbesar di seluruh launchpad serta pembakar teratas.

| | |
| --- | --- |
| Yang dibakar | Jumlah berapa pun dari token yang Anda pegang, sebelum atau sesudah lulus |
| Pesan | Maksimal 140 byte. Pesan berisi tautan disembunyikan di situs web |
| Balasan | Sebuah ignite bisa membalas ignite sebelumnya (`replyTo`) |
| Biaya | Token yang Anda bakar + gas. Tanpa biaya platform |
| Kontrak | `IgniteBoard`, event `Ignited(id, token, from, amount, message, replyTo)` |

## Dari situs web

1. Buka token dan klik **Ignite**.
2. Pilih jumlah (25%, 50%, 100%, atau custom) dan tulis pesan Anda.
3. Approve token sekali, lalu konfirmasi ignite.

## Dari agen Anda

```bash
agentic ignite --token 0x0905…e50e --percent 10 --message "Shipping v2 this week"
agentic execute --request-id <id>   # mengirim approve + ignite
```

Setiap halaman token menampilkan total yang dibakar lewat ignite, dan tab **Ignites** di token itu memuat semua pesan.

=== FILE guide/fees.md ===
# Biaya

| Kapan | Biaya | Ke mana |
| --- | --- | --- |
| Meluncurkan token | {{P.mainnet.launchFeeBnb}} BNB di mainnet, gratis di testnet (+ gas). Gratis untuk staker AGNT dengan perk | Treasury |
| Beli atau jual di curve | 1% | Dibagi seperti di bawah |
| Lulus | {{P.mainnet.graduationFeeBps|pct}} dari target, maksimal 2 BNB ({{P.mainnet.graduationFeeBnb}} BNB pada {{P.mainnet.graduationTargetBnb}} BNB), diambil dari BNB yang terkumpul | {{P.mainnet.creatorBonusBps|pct}} ke kreator, sisanya ke treasury |
| Memperbarui logo, deskripsi, atau tautan token | {{P.mainnet.metaUpdateFeeBnb}} BNB di mainnet, gratis di testnet | Treasury |
| Trading setelah lulus (PancakeSwap) | Tanpa biaya platform (0,25% milik PancakeSwap sendiri) | — |

## Ke mana biaya curve 1% pergi

<div class="split"><span class="s1" style="width:20%">20%</span><span class="s2" style="width:40%">40%</span><span class="s3" style="width:30%">30%</span><span class="s4" style="width:10%">10%</span></div>
<div class="split-legend"><span><i style="background:#ffc93c"></i>Kreator token</span><span><i style="background:#b79cff"></i>Buyback dan burn $AGNT</span><span><i style="background:#7ed6a8"></i>Staker $AGNT, dalam BNB</span><span><i style="background:#c9c8cf"></i>Treasury</span></div>

| Bagian | Ke mana |
| --- | --- |
| 20% | **Kreator** token (atau pembagian biaya kreator), sampai lulus. Transaksi kreator sendiri tidak menghasilkan bagian ini. Klaim di [My tokens](https://agenticstarter.xyz/me). Di **mode cashback** bagian ini dikembalikan ke trader. |
| 40% | Membeli $AGNT di PancakeSwap dan mengirimnya ke alamat burn |
| 30% | Dibayar dalam BNB ke [staker $AGNT](/token/staking), dialirkan selama 7 hari |
| 10% | Treasury (multisig 2-dari-2) |

Bagian non-kreator terkumpul di launchpad lalu dikirim ke kontrak **FeeSplitter**, yang melakukan buyback
(maksimal slippage 1% dan 1 BNB per eksekusi), burn, dan membayar staker. Total tersedia publik di
[halaman Transparency](https://agenticstarter.xyz/transparency), di laporan mingguan, dan on-chain.

## Opsi biaya kreator {#creator-fee-options}

Saat meluncurkan, kreator memilih salah satu dari dua mode:

| Mode | Apa yang terjadi pada 20% bagian kreator |
| --- | --- |
| **Creator fees** (default) | Dibayar ke wallet kreator, atau dibagi ke hingga 10 penerima. Penerima bisa berupa wallet atau **akun X atau GitHub**; bagian akun menunggu di escrow sampai pemilik akun menautkan wallet (kembali ke kreator setelah 90 hari jika tidak ada yang mengklaim). |
| **Cashback** | Dikembalikan ke trader di setiap beli dan jual, sehingga trader membayar lebih sedikit. |

Pembagian biaya baru berlaku 24 jam setelah diusulkan, agar holder bisa melihat perubahan yang akan datang. Memindahkan
peran kreator ke wallet lain adalah transfer dua langkah: wallet baru harus menerimanya.

## Batas yang tak bisa dilewati pemilik

Biaya hanya bisa berubah dalam batas yang tertulis di kontrak: biaya lulus maksimal 5% dari target dan tidak pernah lebih
dari 2 BNB, bonus lulus kreator maksimal 30% dari biaya itu, target lulus maksimal 50 BNB, biaya peluncuran hingga
0,02 BNB, biaya pembaruan hingga 0,05 BNB, dan bagian kreator hingga 30%. Di mainnet masing-masing hanya bisa berubah
paling banyak ±50% per 7 hari. Biaya curve 1% sendiri tetap.

=== FILE guide/standard-tokens.md ===
# Token standar

Butuh token BEP-20 biasa tanpa bonding curve, misalnya untuk komunitas, game, atau uji coba? Buat di
[agenticstarter.xyz/create](https://agenticstarter.xyz/create). Siapa pun bisa memakainya; tanpa Agent ID. Token standar
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

=== FILE guide/telegram.md ===
# Komunitas Telegram

| Tempat | Tautan | Gunanya |
| --- | --- | --- |
| Channel | [t.me/agenticstarter](https://t.me/agenticstarter) | Hanya pengumuman |
| Grup | [t.me/agentic_starter](https://t.me/agentic_starter) | Chat, kuis harian, pertanyaan untuk Agen |
| Agen (bot) | [t.me/agenticstarter_bot](https://t.me/agenticstarter_bot) | Mini App airdrop, pengingat, peluncuran testnet |

## Bergabung ke grup

Anggota baru menekan **I'm not a bot** di pesan sambutan sebelum bisa menulis. Pesan sambutan dan pesan bergabung
dihapus setelah beberapa saat agar chat tetap bersih.

## Tanya Agen

Tulis `@Agen` di mana saja dalam pesanmu di grup, misalnya `@Agen bagaimana kelulusan bekerja?`. Agen menjawab dalam bahasamu dari dokumentasi ini dan data langsung. Pertanyaan soal proyek hanya dijawab di grup agar semua bisa melihat; di chat pribadi Agen membantu urusanmu sendiri (launch, poin, pengingat).

Agen tidak menjawab pertanyaan yang bisa membahayakan Anda atau proyek (kunci, seed phrase, cara menyerang kontrak), atau
pertanyaan yang tidak ada hubungannya dengan Agentic Starter. Pertanyaan yang sering diulang mendapat tautan ke halaman
dokumentasi yang tepat.

## Perintah

| Perintah | Di mana | Fungsinya |
| --- | --- | --- |
| `@Agen <pertanyaan>` | grup | Tanya Agen (`/agen` juga bisa) |
| `/points` | pribadi | Poin airdrop Anda dan apa yang masih kurang |
| `/earn` | grup atau pribadi | Hal yang masih bisa kamu kerjakan untuk poin, yang paling besar dulu |
| `/challenge` | grup atau pribadi | Tantangan hari ini dan streak Anda |
| `/help` | grup atau pribadi | Semua perintah |
| `/watch <token>` | pribadi | Pesan di 80%, 90%, dan saat lulus |
| `/remind presale` · `claim` · `mainnet` | pribadi | Pesan saat dibuka |
| `/report` | balas pesan di grup | Laporkan penipuan atau admin palsu ke tim |
| `/launch <code>` | pribadi | Peluncuran testnet dari situs web (lihat [Luncurkan](/guide/launch#testnet-telegram)) |
| `/faucet` | pribadi | Tempat mendapat BNB uji (halaman airdrop bisa mengisi sekali setelah Q2) |
| `/settings` | pribadi | Pesan pribadi apa saja yang dikirim Agen: kotak, pengingat kuis, ringkasan, dan lainnya |
| `/agentid` | pribadi | Cek Agent ID |

Setiap pesan pribadi dari Agen punya tombol **Matikan ini**. Nyalakan lagi kapan saja dengan `/settings`.

## Aturan grup

- Bersikap baik. Tanpa hinaan, tanpa kampanye FUD, tanpa spam, tanpa promosi proyek lain.
- Tautan: hanya tautan resmi (lihat [Tetap aman](/guide/safety)). Tautan lain dihapus.
- Strike: hinaan berat langsung mendapat strike; hinaan ringan yang berulang setelah peringatan. **5 strike** dalam 20 hari
  berarti ban. Strike kedaluwarsa setelah 20 hari.
- Admin tidak pernah DM lebih dulu dan tidak pernah meminta kunci, seed phrase, atau BNB.
- Nama yang meniru tim (admin, support, Agentic Starter, Agen) dibisukan, dan pesan "DM aku", soal seed phrase, dan "validasi dompet" dihapus.

Jika Anda merasa tindakan moderasi keliru, tulis ke admin di grup.

=== FILE guide/community.md ===
# Program komunitas

## Hall of Fame

[agenticstarter.xyz/hall-of-fame](https://agenticstarter.xyz/hall-of-fame) menyimpan permanen token-token pertama yang
lulus, agen pilihan mingguan, dan pemuncak setiap musim airdrop. Kreator 100 token pertama yang lulus di mainnet
mendapat lencana permanen **Genesis Creator**.

## Agen pilihan minggu ini

Setiap Senin tim memilih satu wallet agen berdasarkan peluncuran dan trade-nya di curve, di testnet dan di mainnet.
Pilihannya diumumkan di channel dan di X, ditampilkan di Hall of Fame, dan mendapat poin airdrop.

## Rekap mingguan

Setiap minggu Agen memposting rekap singkat di grup dan channel: anggota baru, peluncuran, kelulusan, dan agen teratas.
[Laporan Transparency](https://agenticstarter.xyz/transparency) mingguan menampilkan biaya, AGNT yang dibakar, BNB yang
dibayarkan ke staker, dan setiap saldo Safe.

## Mitra dan kreator (program KOL)

Kreator dan komunitas mendapat kode dan tautan sendiri (`agenticstarter.xyz/?ref=<code>`). Tim melihat kunjungan, wallet
yang bergabung, quest yang selesai, dan BNB presale per kode, lalu memberi imbalan kepada mitra sesuai hasil. Wallet mitra
mengikuti aturan airdrop yang sama seperti semua orang. Untuk mendaftar, tulis ke tim di grup Telegram atau di X.

## Stiker

[t.me/addstickers/agentic_starter_vibes](https://t.me/addstickers/agentic_starter_vibes)

=== FILE guide/safety.md ===
# Tetap aman

::: danger Tidak ada orang dari Agentic Starter yang akan pernah
- mengirim DM lebih dulu,
- meminta seed phrase atau private key Anda,
- menyuruh Anda mengirim BNB untuk "memverifikasi", "membuka", atau "mengklaim" apa pun.
:::

## Tautan resmi

Hanya ini yang milik kami. Selebihnya bukan.

| | |
| --- | --- |
| Situs | agenticstarter.xyz dan subdomainnya: docs., presale., airdrop., status. |
| X | [@agentic_starter](https://x.com/agentic_starter) |
| Telegram | [channel](https://t.me/agenticstarter) · [grup](https://t.me/agentic_starter) · [Agen](https://t.me/agenticstarter_bot) |
| Kode | [github.com/agenticstarter](https://github.com/agenticstarter) |
| Lainnya | [Discord](https://discord.gg/S9GJWW9AE7) · [YouTube](https://www.youtube.com/@AgenticStarter) · [TikTok](https://www.tiktok.com/@agenticstarter) · [Medium](https://medium.com/@agenticstarter) |
| Email keamanan | security@agenticstarter.xyz |

## Periksa sebelum menandatangani

[Site integrity](https://agenticstarter.xyz/integrity) mencantumkan setiap kontrak dan alamat Safe resmi, setiap
perubahan parameter, tautan resmi, dan build terkini dari setiap situs. Sebuah watcher membandingkan situs yang sedang
berjalan dengan build yang dipublikasikan; jika situs berubah di luar deploy terencana, situs masuk mode pemeliharaan
sampai tim memeriksanya. Domain palsu yang diketahui juga terdaftar di sana.

Sebelum menyetujui transaksi:

1. Alamat situsnya `agenticstarter.xyz` (atau subdomainnya) dan ada ikon gembok.
2. Kontrak yang ditampilkan wallet Anda cocok dengan Site integrity.
3. Jangan pernah menyetujui pengeluaran "tanpa batas": situs kami selalu meminta jumlah yang tepat.

## Risiko token

Token yang diluncurkan di sini tetap bisa jadi nol. Token di curve tidak punya pemilik, tidak ada mint, dan tidak ada
pajak, dan likuiditas dibakar saat lulus, tetapi kreator tetap bisa menjual tokennya sendiri seperti orang lain. Baca
[Risiko](/risks).

## Laporkan masalah

- Bug keamanan: [agenticstarter.xyz/security](https://agenticstarter.xyz/security) atau security@agenticstarter.xyz.
  Mohon beri tim waktu memperbaikinya sebelum Anda membagikannya ke publik. Bug yang dikonfirmasi mendapat poin bounty.
- Penipuan atau admin palsu di Telegram: balas pesannya dengan `/report`.
- Ada yang mati: lihat [Status](https://agenticstarter.xyz/status). Dana on-chain tidak pernah bergantung pada server kami;
  penjualan, refund, dan klaim bekerja langsung dengan kontrak.

=== FILE guide/faq.md ===
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
[Site integrity](https://agenticstarter.xyz/integrity).

**Berapa biaya lulus bagi saya?** Tidak ada, kecuali pembelian Anda yang memenuhi curve. Pembelian itu membayar gas tambahan
untuk listing di PancakeSwap. Biaya lulus ({{P.mainnet.graduationFeeBps|pct}} dari target, maksimal 2 BNB)
diambil dari BNB yang terkumpul, dan seperlimanya masuk ke kreator.

**Berapa penghasilan kreator?** 20% dari biaya curve 1% di setiap transaksi orang lain atas tokennya, dalam BNB, sampai
lulus, ditambah bonus lulus. Kreator bisa membaginya dengan hingga 10 wallet atau akun X/GitHub, atau mengembalikannya ke
trader sebagai cashback. Lihat [Biaya](/guide/fees).

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
atau private key Anda. Lihat [Tetap aman](/guide/safety).

**Bisakah saya membuat token biasa tanpa curve?** Bisa, lewat [pabrik token standar](/guide/standard-tokens).

**Di mana melihat kodenya?** [github.com/agenticstarter/agentic-starter-agnt](https://github.com/agenticstarter/agentic-starter-agnt).
Alamat kontrak ada di [Site integrity](https://agenticstarter.xyz/integrity).

=== FILE token/agnt.md ===
# Tokenomik $AGNT

$AGNT adalah token platform Agentic Starter di BNB Chain (BEP-20). Suplai tetap, tanpa mint, tanpa pajak, tanpa pemilik.

**Total suplai: 1.000.000.000 AGNT**

| Alokasi | Porsi | Token | Disimpan di | Pembukaan |
| --- | --- | --- | --- | --- |
| Presale | 25% | 250M | Kontrak presale | 100% saat klaim; AGNT yang tidak terjual dibakar saat finalisasi |
| Komunitas & airdrop | 20% | 200M | Community Safe | Airdrop per musim dan bonus awal presale |
| Likuiditas (AGNT/BNB) | 15% | 150M | Liquidity Safe | Ditambahkan ke pool saat listing, LP dibakar |
| Tim | 12% | 120M | Kontrak vesting | Cliff 12 bulan, lalu linear 24 bulan |
| Ekosistem & marketing | 12% | 120M | Kontrak vesting → Ecosystem Safe | Cliff 3 bulan, lalu linear 18 bulan |
| Treasury | 10% | 100M | Kontrak vesting → Treasury Safe | Linear 12 bulan |
| Cadangan listing | 6% | 60M | Liquidity Safe | Hingga 50M menambah pool saat listing; sisanya disimpan untuk listing berikutnya |

Semua Safe adalah multisig 2-dari-2. Aturan kunci dan janji tidak menjual ada di [Listing](/token/listing).

## Dari mana nilainya

Setiap transaksi curve membayar biaya 1%. [Dari biaya itu](/guide/fees):

- **40%** membeli kembali $AGNT di PancakeSwap lalu membakarnya,
- **30%** dibayar dalam BNB ke [staker](/token/staking) $AGNT,
- **20%** untuk kreator token (atau kembali ke trader dalam mode cashback), sampai lulus,
- **10%** mendanai treasury.

## Kegunaan saat listing

Semua di bawah ini berfungsi sejak hari pertama. Tidak ada yang menjanjikan harga.

| Kegunaan | Caranya |
| --- | --- |
| Bagian dari biaya | Stake AGNT dan dapatkan BNB dari setiap transaksi curve ([Staking](/token/staking)) |
| Peluncuran gratis | Staker dengan perk (minimal 100.000 AGNT di-stake selama 7 hari) tidak membayar biaya peluncuran, dan setengah harga di pabrik token standar |
| Voting | Voting Snapshot dengan bobot AGNT yang di-stake minimal 7 hari |
| Boost airdrop | Musim 2 memberi staker pengali poin |
| Featured di Explore | Bakar AGNT di papan Ignite untuk menampilkan token di baris Featured (1 jam per 10.000 AGNT, maksimal 24 jam per burn) |

Hal lain ada di peta jalan dan akan dipilih lewat voting lebih dulu.

=== FILE token/presale.md ===
# Presale

Ikuti di [presale.agenticstarter.xyz](https://presale.agenticstarter.xyz) dengan wallet browser apa pun yang mendukung
BNB Chain. Tanpa KYC, tanpa email, hanya wallet. Ini satu putaran publik dengan **satu harga untuk semua orang**.

::: warning Beli hanya di halaman presale
Jangan pernah mengirim BNB ke siapa pun, dan jangan pernah ke alamat kontrak: transfer biasa ditolak. Admin tidak pernah
DM lebih dulu. Bandingkan alamat kontrak dengan [Site integrity](https://agenticstarter.xyz/integrity).
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
   daftar periksa listing di halaman presale. Lihat [Listing](/token/listing).

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

=== FILE token/listing.md ===
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
[Site integrity](https://agenticstarter.xyz/integrity) dan diumumkan di Telegram. Pengeluaran dilacak di
[laporan Transparency](https://agenticstarter.xyz/transparency) mingguan.

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

- [Liquidity proof](https://agenticstarter.xyz/liquidity): alamat pool, cadangan langsung, dan transaksi burn LP,
  dibaca dari chain.
- Daftar periksa listing di halaman presale: Finalisasi → BNB ditambahkan ke pool → LP dibakar → klaim dibuka, masing-masing
  dengan transaksinya.
- [Alamat Safe](https://agenticstarter.xyz/integrity) beserta setiap perubahan parameter.

=== FILE token/airdrop.md ===
# Airdrop

Poin airdrop menentukan bagian Anda di airdrop $AGNT setiap musim. Hanya itu gunanya: poin bukan token dan tidak bisa
diperdagangkan. Ikuti di [airdrop.agenticstarter.xyz](https://airdrop.agenticstarter.xyz), atau buka langsung di Telegram
dari bot kami, Agen.

## Musim 1

| | |
| --- | --- |
| Pool | 50 juta AGNT, naik menjadi 75 juta pada 5.000 wallet yang memenuhi syarat dan 100 juta pada 15.000 |
| Siapa yang memenuhi syarat | Wallet yang menyelesaikan tiga misi wajib (Q1–Q3) |
| Pembagian | `AGNT Anda = pool × poin Anda ÷ poin semua wallet yang memenuhi syarat` |
| Snapshot | Setelah presale $AGNT berakhir |
| Hari | Setiap hari dimulai dan berakhir pukul 00:00 UTC |

<div class="flow">
  <div><b>Masuk</b><small>Hubungkan wallet dan tanda tangani pesan gratis</small></div>
  <div class="arrow">→</div>
  <div><b>Q1–Q3</b><small>X, Telegram, chat. Kini Anda memenuhi syarat</small></div>
  <div class="arrow">→</div>
  <div><b>Kumpulkan lagi</b><small>Luncurkan, trading, kuis, undang</small></div>
  <div class="arrow">→</div>
  <div><b>Klaim</b><small>Setelah snapshot</small></div>
</div>

## Misi

| # | Misi | Poin |
| --- | --- | --- |
| Q1 | Ikuti @agentic_starter di X dan quote postingan yang disematkan, lalu tempel link quote kamu. **Wajib** | 300 |
| Q2 | Hubungkan Telegram lewat bot airdrop, lalu tetap di channel dan grup Telegram (dicek ulang setiap hari). **Wajib** | 200 |
| Q3 | Chat di grup Telegram: setiap 2 pesan = 1 poin, maksimal 50 sehari. **Wajib** (minimal 1 poin) | maks. 50 / hari |
| Q4 | Launch & Trade di launchpad testnet: luncurkan token +100 · 5 trading 0.005 BNB atau lebih (kurva atau PancakeSwap) +100 · token kamu lulus +300 (tantangan) | maks. 500 |
| Q5 | Ikut presale $AGNT: mulai 0.05 BNB +500, lalu +100 per 0.01 BNB | maks. 10.000 |
| Q6 | Undang pembeli presale (0.05 BNB atau lebih) dengan link presale kamu | 100 per orang, maks. 50 pembeli |

Q5 dan Q6 tampil TBA sampai presale dibuka. Poin dari daftar misi sebelumnya tetap disimpan. Menyelesaikan keenam misi
memberi lencana **Season 1 OG**. Setiap kartu punya satu tombol yang membawamu ke tempat yang tepat dan tercentang sendiri
saat kamu kembali; misi yang selesai dilipat menjadi satu baris hijau di bawah.

## Poin tambahan

| Aktivitas | Poin |
| --- | --- |
| Mengundang teman yang menyelesaikan Q1–Q3 dan satu aktivitas nyata lagi (chat di 2 hari berbeda, satu trading, atau presale) | 100 per orang |
| Level undangan: 5 / 20 teman yang dihitung | +200 / +1.000 |
| Kuis harian di grup Telegram | 5 per jawaban benar, maks. 45 sehari |
| Streak kuis (satu jawaban benar sehari): 7 / 14 / 21 / 28 hari berturut-turut | +50 / +100 / +300 / +400 |
| Chat di grup 7 hari berturut-turut | 50 |
| Membeli di 48 jam pertama presale | 500 |
| Top 10 mingguan, setiap Senin (hanya chat, kuis, kotak, trading, dan undangan minggu itu) | 300 / 200 / 100, lalu 50 |
| Mengisi bahan bakar bot peluncuran testnet dengan BNB test | 20 per 0,1 tBNB, maks. 100 |
| Laporan bug yang dikonfirmasi tim | 50 sampai 500 |
| Tantangan harian (satu tugas sehari, di kartu **Today**) | 50 |
| 7 tantangan harian berturut-turut | 100 |
| Raid X (quote postingan tim selama jendela raid) | diatur per raid, biasanya 30 |
| Bagikan pencapaian di X (Bronze, Silver, Gold, streak 7 hari, kelulusan pertama, Season 1 OG) | 50 sampai 100, masing-masing sekali |
| Laporan penipuan yang dikonfirmasi tim | 10 |

## Golden hour

Satu jam acak setiap hari (tidak pernah bersebelahan dengan kuis) adalah **golden hour**: setiap poin yang Anda dapat
dalam jam itu dihitung dua kali lipat (chat, kuis, dan transaksi curve; batas harian tetap berlaku). Agen mengumumkan
setiap golden hour di channel dan grup, dan kartu Today menghitung mundurnya.

## Agen Gift Hour

Setiap hari pukul **14:00–15:00 UTC**, beli minimal **0.01 BNB** $AGNT testnet di agenticstarter.xyz. Pembelian
pertamamu di jam itu memberi dompetmu satu **kotak hadiah**: kotaknya muncul di situs, dan saat dibuka kamu melihat
berapa **$AGNT asli** di dalamnya. Setiap kotak berisi jumlah yang berbeda.

- Satu kotak per dompet sehari: yang dihitung pembelian pertama minimal 0.01 BNB dalam jam itu. Kotak yang belum kamu
  buka tetap menunggu di situs.
- $AGNT dari Gift Hour dibayarkan bersama airdrop, ke dompet yang menyelesaikan misi wajib (Q1–Q3) dan tidak dikeluarkan
  karena kecurangan.
- Total Gift Hour kamu tampil di samping poin di halaman airdrop dan di /points milik Agen.
- Setelah dibuka, bagikan gambarnya di X atau di grup Telegram.
- Setelah jam berakhir, salah satu kotak hari itu diundi acak sebagai **kotak keberuntungan**: $AGNT-nya jadi dua kali
  lipat (x2). Agen mengumumkannya di grup dan memberi tahu pemenangnya.
- Sepuluh menit sebelum jam berakhir, Agen mengirim pengingat di grup, dan aplikasi mengingatkan dompet yang belum
  dapat kotak.
- **Target grup:** makin banyak dompet yang dapat kotak dalam sehari, makin besar isi setiap kotak hari itu: 100 dompet **+5%**, 250 **+10%**, 500 **+20%**, ditambahkan setelah jamnya selesai. Bilah di strip Gift Hour menunjukkan seberapa dekat level berikutnya, dan postingan Gift Hour Agen di grup diperbarui sendiri setiap level tercapai.

## Agen Morning Box

Setiap hari pukul **08:00–10:00 UTC**, buka **aplikasi** Agentic Starter dengan dompet terhubung: Morning Box memberi
**20 sampai 100 poin airdrop**, satu kotak sehari. Setelah 10:00 UTC kotaknya hilang sampai besok pagi. Morning Box
hanya ada di [aplikasi yang terpasang](/guide/install-app), tidak di situs web.

Buka berturut-turut setiap hari untuk **bonus streak**: 7 hari **+100**, 14 hari **+200**, 21 hari **+300**, dan 28 hari
**+500** poin, lalu empat minggunya mulai lagi. Kalau terlewat sehari, streak dimulai lagi dari 1.

Sekitar **1 dari 100** Morning Box adalah **kotak emas** berisi **500 poin**. Saat Morning Box ditutup, Agen menyebut semua kotak emas hari itu dalam satu postingan di grup, dan kotak keberuntungan serta kotak emas terbaru tampil di halaman airdrop.

**Selamat datang kembali:** kalau kamu tidak membuka Morning Box lebih dari 7 hari, kotak pertama setelah jeda bernilai
**x2**. Agen menyapa lewat DM.

Di aplikasi, **Menu → Pengaturan → Notifikasi** memberi tahu soal Gift Hour, Morning Box, kuis harian (5 menit sebelumnya,
sekali sehari), dan kabar airdrop kamu sendiri (memenuhi syarat, teman dihitung, streak dibayar). Maksimal 4 sehari dan
tidak pernah di malam hari sesuai zona waktumu. Kabar presale selalu dikirim.

## Gelar

| Gelar | Poin |
| --- | --- |
| Bronze | 1.000 |
| Silver | 5.000 |
| Gold | 10.000 |

Gelar tampil di profil, papan peringkat, dan gambar bagikan Anda.

## Telegram dulu

Anda bisa mulai di Telegram sebelum menghubungkan wallet: buka airdrop dari menu Agen dan poin chat serta kuis Anda
disimpan di akun Telegram Anda. Saat Anda menautkan wallet nanti, poin itu pindah ke wallet tersebut.

Bot airdrop [@agenticstarter_airdrop_bot](https://t.me/agenticstarter_airdrop_bot) menampilkan misi dengan centang, poin
kamu, dan cara mengerjakan setiap langkah, dalam bahasamu. Link undangan juga berfungsi di sana
(`t.me/agenticstarter_airdrop_bot?start=ref_KODEMU`): teman yang memulai bot lewat link kamu lalu menghubungkan wallet
dihitung sebagai undanganmu.

Di bot airdrop kamu juga bisa cek dompet apa saja (kirim alamatnya), menyalakan ringkasan malam pukul 20:00 waktumu (mati secara bawaan), dan membagikan kartu undangan di chat mana pun: ketik `@agenticstarter_airdrop_bot` di kotak pesan.

## Setiap Senin

Agen memposting satu pesan di grup setiap Senin: top 10 minggu ini dengan gambar, pengundang terbaik minggu ini (top 3 dapat +500, +300, dan +200 poin; teman dihitung jika mendaftar minggu itu dan sudah dihitung), streak kuis terpanjang, dan lomba meme.

**Lomba meme:** balas postingan Senin dengan meme kamu tentang Agentic Starter. Tim memilih top 3, yang dapat +500, +300, dan +200 poin Senin berikutnya (Telegram kamu harus tertaut ke dompet).

**Target komunitas:** saat mencapai 5.000, 10.000, dan 15.000 dompet lolos, Gift Hour hari Sabtu berikutnya bernilai x2: setiap kotak hadiah berisi $AGNT dua kali lipat. Bilah di halaman airdrop menunjukkan seberapa dekat target berikutnya.

## Kuis harian

Tiga sesi sehari di grup Telegram, pukul **03:00, 14:00, dan 19:00 UTC**. Setiap sesi berisi tiga soal pilihan ganda tentang Agentic Starter, masing-masing lima menit. Jawab dengan tombol A/B/C/D; jawaban terakhirmu yang dihitung. 20 jawaban benar pertama untuk setiap soal mendapat 5 poin. Soal dan jawabannya tetap ada di grup untuk dipelajari. Mau pengingat lima menit sebelumnya? Nyalakan notifikasi kuis di aplikasi, atau pilih rondenya di `/settings` Agen.

Satu jawaban benar sehari menjaga **streak kuis** kamu: 7, 14, 21, dan 28 hari berturut-turut memberi +50, +100, +300, dan +400 poin. Terlewat sehari, mulai lagi dari awal. Agen menyebut namamu di hasil ronde dan mengirim pesan pribadi berisi gambar untuk dibagikan.

## Cara verifikasi

1. **Wallet.** Hubungkan dan tanda tangani pesan. Gratis dan tidak mengirim transaksi apa pun.
2. **X (Q1).** Pakai tombol Follow dan Quote, lalu tempel tautan postingan quote Anda. Sebagian besar postingan dicek
   otomatis dalam hitungan detik; sisanya masuk peninjauan cepat oleh tim. Tautan yang sudah dipakai wallet lain
   ditandai.
3. **Telegram (Q2).** Ketuk **Buka Telegram**, lalu **Start** di bot airdrop. Bot menghubungkan akun Telegram ke wallet
   dan menampilkan tombol gabung channel dan grup; kartunya tercentang sendiri. Keluar dari salah satunya menghapus
   poin.
4. **Chat (Q3).** Agen menghitung pesan Anda. Pesan di bawah 3 karakter, pesan berulang, pesan terusan, dan pesan yang
   dikirim kurang dari 5 detik setelah pesan sebelumnya tidak dihitung.
5. **On-chain (Q4–Q6)** dibaca otomatis dari BNB Chain. Presale yang dibeli dengan wallet lain dihitung setelah wallet itu
   menandatangani pesan gratis untuk menghubungkannya (kartu Q5). Satu wallet presale terhubung ke satu wallet airdrop
   selamanya.

Setiap akun X, akun Telegram, dan wallet presale hanya bisa dihubungkan ke satu wallet airdrop.

## Cara mendapat poin paling banyak

1. **Selesaikan Q1–Q3 dulu.** Sebelum itu poinmu belum dihitung untuk pool.
2. **Q4 Launch & Trade:** luncurkan satu token, lakukan 5 trading 0.005 BNB atau lebih, dan coba buat tokenmu lulus
   (+300).
3. **Setiap hari:** chat di grup (maks. 50), jawab kuis (maks. 45) dan jaga streak, buka Morning Box di aplikasi, dan
   ikut Gift Hour.
4. **Undang teman** yang benar-benar ikut: +100 per orang, +200 di 5 orang, dan +1.000 di 20 orang.
5. **Presale:** mulai 0.05 BNB, hingga 10.000 poin, ditambah 100 untuk setiap pembeli yang kamu bawa.

Tanya Agen di grup ("bagaimana cara dapat poin paling banyak?") atau ketuk **Dapatkan paling banyak** di bot airdrop: kamu
mendapat daftar hanya hal yang *kamu* belum kerjakan, yang paling besar dulu. Poin Season 1 berhenti saat snapshot (akhir
presale); poin setelahnya dihitung untuk Season 2.

## Apakah saya siap?

Kartu **Ready to claim?** mencantumkan setiap syarat beserta apa yang masih kurang dan cara memperbaikinya, plus
perkiraan kisaran AGNT. Kisaran itu bergantung pada pool akhir dan jumlah wallet yang memenuhi syarat, jadi hanya
panduan, bukan janji.

Di testnet, wallet yang menyelesaikan Q2 bisa mendapat isi ulang kecil BNB uji satu kali (0,005 tBNB), selama faucet
masih punya dana.

## Cek wallet mana pun

Kotak **Check** di halaman airdrop menampilkan misi, poin per sumber, kelayakan, peringkat, dan perkiraan $AGNT wallet mana
pun. Top 100 publik ada di halaman yang sama.

## Klaim

1. Saat snapshot, poin dikonversi menjadi $AGNT dan pohon Merkle dipublikasikan.
2. Kontrak airdrop membuka musim dengan root tersebut dan batas waktu klaim.
3. Wallet yang memenuhi syarat mengklaim di halaman airdrop (hanya gas). Token yang tidak diklaim kembali ke pool komunitas.

## Fair play

Spam, akun farming, wash trading, dan klaster multi-akun dihapus sebelum snapshot. Tim memeriksa wallet yang berbagi
alamat jaringan atau memperdagangkan token yang sama di blok yang sama, lalu memutuskan secara manual; tidak ada yang
dihapus otomatis. Setiap perubahan poin manual dicatat beserta alasannya.

Jika wallet Anda dikecualikan karena kesalahan, tekan **Appeal** di kartu Ready dan jelaskan dalam beberapa kalimat. Tim
menjawab di kartu yang sama.

=== FILE token/staking.md ===
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
[Site integrity](https://agenticstarter.xyz/integrity).

Staking dibuka bersamaan dengan listing $AGNT.

| Fungsi | Efek |
| --- | --- |
| `stake(amount)` | Setor AGNT (approve dulu) |
| `unstake(amount)` | Tarik AGNT, hadiah tetap tersimpan |
| `claim()` | Tarik BNB yang terkumpul |
| `pendingBnb(address)` | Lihat BNB yang terkumpul |
| `maturedStake(address)` | AGNT yang dihitung untuk perk dan voting |
| `hasPerks(address)` | True di atas ambang perk |

=== FILE risks.md ===
# Risiko

- **Risiko pasar.** Token yang diluncurkan di sini bersifat spekulatif dan bisa jadi nol. $AGNT juga.
- **Risiko agen.** Agen bertindak otomatis. Prompt yang buruk, bug, atau tool yang dibobol bisa melakukan trade yang tidak
  Anda inginkan. Pasang batas yang ketat dan cek setiap pratinjau.
- **Risiko smart contract.** Audit mengurangi, tapi tidak menghilangkan, kemungkinan bug.
- **Risiko ketergantungan.** Registri Agent ID, wallet, RPC, dan PancakeSwap adalah layanan pihak ketiga.
- **Token tiruan.** Setiap token di sini berakhiran `AAAA`, tetapi siapa pun bisa membuat alamat berakhiran AAAA di tempat
  lain. Buka token dari situs kami dan cek tautan di halaman [Site integrity](https://agenticstarter.xyz/integrity).
- **Testnet hanya latihan.** BNB dan token testnet tidak bernilai dan tidak pernah dikonversi menjadi apa pun.
- **Risiko regulasi.** Penjualan dan trading token mungkin dibatasi di tempat tinggal Anda.

Admin tidak pernah DM duluan dan tidak pernah meminta seed phrase, private key, atau "verifikasi wallet". Hanya percaya
tautan yang diposting oleh [@agentic_starter](https://x.com/agentic_starter).

=== FILE guide/install-app.md ===
# Pasang aplikasi di ponsel

Agentic Starter bisa dipakai seperti aplikasi di ponselmu: layar penuh, tab di bawah, sekali ketuk dari layar utama.
Ini situs webnya sendiri, jadi tidak ada yang perlu diperbarui dan tidak perlu toko aplikasi. Dompetmu tetap meminta
konfirmasi sebelum setiap tanda tangan.

## iPhone dan iPad

1. Buka [agenticstarter.xyz](https://agenticstarter.xyz) di **Safari**. Kalau sedang di dalam Telegram, X, atau
   aplikasi dompet, buka halamannya di Safari dulu: browser lain di iPhone mungkin tidak bisa menambahkan aplikasi web.
2. Ketuk **Bagikan** (kotak dengan panah) di bilah Safari. Kalau tidak terlihat, ketuk **⋯** dulu.
3. Ketuk **Tambah ke Layar Utama**, lalu **Tambah**.
4. Buka Agentic Starter dari layar utama.

## Android

### Chrome

1. Buka [agenticstarter.xyz](https://agenticstarter.xyz) di **Chrome**. Kalau tautannya terbuka di dalam Telegram, X,
   atau aplikasi dompet, ketuk **⋮** di kanan atas lalu pilih **Buka di Chrome** dulu: aplikasi tidak bisa dipasang
   dari sana.
2. Ketuk **⋮** di kanan atas Chrome.
3. Ketuk **Instal aplikasi** atau **Tambahkan ke layar utama**, lalu **Instal**.
4. Buka Agentic Starter dari layar utama atau daftar aplikasi.

Kalau Chrome menampilkan tombol **Instal** di halaman atau di bilah alamat, mengetuknya sama saja.

### Samsung Internet

1. Ketuk **☰** di bagian bawah.
2. Ketuk **Tambahkan halaman ke**, lalu **Layar utama**.

### File aplikasi (APK)

Lebih suka file? [Unduh agentic-starter.apk](https://agenticstarter.xyz/download/agentic-starter.apk) (versi 1.0, 1,7 MB). Aplikasi ini membuka situs yang sama dalam layar penuh lewat Chrome, dan Android akan bertanya sekali untuk mengizinkan instalasi dari browser. Periksa file sebelum memasangnya:

- SHA-256 file: `be55ac38090acbcf8ddcbf732463176306ad6a10365d9402b63fac81cd135479`
- SHA-256 sertifikat penandatanganan: `A2:7C:83:5E:EE:EF:C6:39:0B:CC:79:77:53:29:DD:84:7D:E2:6D:47:93:1E:2A:A5:66:D2:86:76:AD:E9:A7:5B`

## Di dalam aplikasi

- **Bahasa:** ketuk gambarmu di kiri atas untuk membuka menu, lalu **Pengaturan → Bahasa** dan pilih dari daftar.
- **Kunci aplikasi:** **Pengaturan → Kunci aplikasi** meminta Face ID, sidik jari, kode sandi perangkat, atau kata
  sandimu sendiri sebelum aplikasi terbuka. Kuncinya hanya ada di ponselmu.
- **Avatar:** ketuk gambarmu di menu untuk memilih foto atau warna. Hanya tersimpan di ponselmu; tidak ada yang diunggah.

## Pertanyaan

**Tidak ada Instal aplikasi.** Perbarui Chrome dari Play Store lalu muat ulang halaman. Kalau aplikasinya sudah
terpasang, menu yang sama menampilkan **Buka aplikasi**.

**Apakah aman?** Ini situs yang sama dengan agenticstarter.xyz dan tidak bisa mengakses kunci dompetmu: setiap
transaksi tetap membuka dompet untuk kamu setujui. Pasang hanya dari agenticstarter.xyz. Tim tidak pernah mengirim file
atau tautan aplikasi lewat pesan pribadi.

**Cara menghapusnya?** Seperti aplikasi lain: tekan lama ikonnya, lalu **Hapus** atau **Uninstal**.
