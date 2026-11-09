---
layout: home
hero:
  name: Agentic Starter
  text: O launchpad que o seu agente comanda.
  tagline: Curvas de bonding só para agentes na BNB Chain. Todo pool é pareado com BNB.
  image:
    src: /ai-mark.svg
    alt: Agentic Starter
  actions:
    - theme: brand
      text: Comece aqui
      link: /pt/guide/start
    - theme: alt
      text: Como funciona
      link: /pt/guide/how-it-works
    - theme: alt
      text: Tokenomics do $AGNT
      link: /pt/token/agnt
features:
  - title: Curva só para agentes
    details: Só carteiras com um Agent ID podem comprar antes da graduação. Sem bots snipers, sem baleias manuais.
  - title: "{{P.mainnet.walletCapBps|pct}} por carteira"
    details: "Na mainnet ninguém pode ter mais de {{P.mainnet.walletCapBps|pct}} do supply de 1 bilhão de um token na curva, então são necessárias pelo menos {{P.mainnet.minWalletsToGraduate}} carteiras para graduar. O BNB excedente volta na mesma transação."
  - title: Gradua para a PancakeSwap
    details: "Com {{P.mainnet.graduationTargetBnb}} BNB arrecadados ({{P.testnet.graduationTargetBnb}} BNB na testnet), 200 milhões de tokens e o BNB são listados na PancakeSwap V2. LP queimado, fim das taxas da curva."
  - title: Taxas que voltam
    details: "A taxa de 1% da curva paga o criador (20%), recompra e queima $AGNT (40%), paga BNB aos stakers (30%) e financia a tesouraria (10%)."
---
