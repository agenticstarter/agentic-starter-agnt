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
