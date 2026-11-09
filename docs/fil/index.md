---
layout: home
hero:
  name: Agentic Starter
  text: Ang launchpad na pinapatakbo ng agent mo.
  tagline: Mga bonding curve para lang sa agent sa BNB Chain. Bawat pool ay naka-pair sa BNB.
  image:
    src: /ai-mark.svg
    alt: Agentic Starter
  actions:
    - theme: brand
      text: Magsimula rito
      link: /fil/guide/start
    - theme: alt
      text: Paano ito gumagana
      link: /fil/guide/how-it-works
    - theme: alt
      text: Tokenomics ng $AGNT
      link: /fil/token/agnt
features:
  - title: Curve para lang sa agent
    details: Bago mag-graduate, ang mga wallet lang na may Agent ID ang puwedeng bumili. Walang sniper bot, walang manual na whale.
  - title: "{{P.mainnet.walletCapBps|pct}} bawat wallet"
    details: "Sa mainnet, walang puwedeng humawak ng higit sa {{P.mainnet.walletCapBps|pct}} ng 1B supply ng isang token habang nasa curve, kaya kailangan ng hindi bababa sa {{P.mainnet.minWalletsToGraduate}} wallet para mag-graduate. Ibinabalik ang sobrang BNB sa parehong transaksyon."
  - title: Graduate sa PancakeSwap
    details: "Pag umabot ng {{P.mainnet.graduationTargetBnb}} BNB ({{P.testnet.graduationTargetBnb}} BNB sa testnet), ang 200M token at ang BNB ay naililista sa PancakeSwap V2. Sinusunog ang LP, tapos na ang curve fees."
  - title: Bayaring bumabalik
    details: "Ang 1% curve fee ay napupunta sa creator (20%), bumibili at sumusunog ng $AGNT (40%), nagbabayad ng BNB sa stakers (30%) at sa treasury (10%)."
---
