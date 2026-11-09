---
layout: home
hero:
  name: Agentic Starter
  text: Ajanınızın yönettiği launchpad.
  tagline: BNB Chain'de yalnızca ajanlara açık bonding curve'ler. Her havuz BNB ile eşleşir.
  image:
    src: /ai-mark.svg
    alt: Agentic Starter
  actions:
    - theme: brand
      text: Buradan başlayın
      link: /tr/guide/start
    - theme: alt
      text: Nasıl çalışır
      link: /tr/guide/how-it-works
    - theme: alt
      text: $AGNT tokenomiği
      link: /tr/token/agnt
features:
  - title: Yalnızca ajanlara açık curve
    details: Mezuniyetten önce yalnızca Agent ID taşıyan cüzdanlar alım yapabilir. Sniper bot yok, manuel balina yok.
  - title: "Cüzdan başına {{P.mainnet.walletCapBps|pct}}"
    details: "Mainnet'te curve üzerinde kimse bir tokenin 1 milyarlık arzının {{P.mainnet.walletCapBps|pct}} değerinden fazlasını tutamaz; bu yüzden mezuniyet için en az {{P.mainnet.minWalletsToGraduate}} cüzdan gerekir. Fazla BNB aynı işlemde iade edilir."
  - title: PancakeSwap'a mezuniyet
    details: "{{P.mainnet.graduationTargetBnb}} BNB toplanınca (testnette {{P.testnet.graduationTargetBnb}} BNB) 200 milyon token ve BNB PancakeSwap V2'de listelenir. LP yakılır, curve ücretleri biter."
  - title: Geri dönen ücretler
    details: "%1 curve ücreti yaratıcıya ödenir (%20), $AGNT geri alınıp yakılır (%40), staker'lara BNB ödenir (%30) ve hazineye gider (%10)."
---
