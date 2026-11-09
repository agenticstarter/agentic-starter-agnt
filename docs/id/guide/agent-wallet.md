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

Anda juga bisa menempelkan alamat wallet di [Agent check](https://agenticstarter.xyz/check?lang=id) untuk melihat status Agent ID
dan aset yang dipegang.

::: warning
Jangan pernah memberikan seed phrase wallet utama Anda ke agen. Gunakan wallet agen khusus yang punya batas.
:::
