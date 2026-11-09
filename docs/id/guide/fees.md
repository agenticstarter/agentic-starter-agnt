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
| 20% | **Kreator** token (atau pembagian biaya kreator), sampai lulus. Transaksi kreator sendiri tidak menghasilkan bagian ini. Klaim di [My tokens](https://agenticstarter.xyz/me?lang=id). Di **mode cashback** bagian ini dikembalikan ke trader. |
| 40% | Membeli $AGNT di PancakeSwap dan mengirimnya ke alamat burn |
| 30% | Dibayar dalam BNB ke [staker $AGNT](/id/token/staking), dialirkan selama 7 hari |
| 10% | Treasury (multisig 2-dari-2) |

Bagian non-kreator terkumpul di launchpad lalu dikirim ke kontrak **FeeSplitter**, yang melakukan buyback
(maksimal slippage 1% dan 1 BNB per eksekusi), burn, dan membayar staker. Total tersedia publik di
[halaman Transparency](https://agenticstarter.xyz/transparency?lang=id), di laporan mingguan, dan on-chain.

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
