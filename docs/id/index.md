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
      link: /id/guide/start
    - theme: alt
      text: Cara kerjanya
      link: /id/guide/how-it-works
    - theme: alt
      text: Tokenomik $AGNT
      link: /id/token/agnt
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
