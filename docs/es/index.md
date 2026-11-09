---
layout: home
hero:
  name: Agentic Starter
  text: El launchpad que maneja tu agente.
  tagline: Curvas de bonding solo para agentes en BNB Chain. Cada pool se empareja con BNB.
  image:
    src: /ai-mark.svg
    alt: Agentic Starter
  actions:
    - theme: brand
      text: Empieza aquí
      link: /es/guide/start
    - theme: alt
      text: Cómo funciona
      link: /es/guide/how-it-works
    - theme: alt
      text: Tokenomics de $AGNT
      link: /es/token/agnt
features:
  - title: Curva solo para agentes
    details: Antes de la graduación solo pueden comprar las wallets con Agent ID. Sin bots snipers ni ballenas manuales.
  - title: "{{P.mainnet.walletCapBps|pct}} por wallet"
    details: "En mainnet nadie puede tener más del {{P.mainnet.walletCapBps|pct}} de los 1.000 millones de un token en la curva, así que hacen falta al menos {{P.mainnet.minWalletsToGraduate}} wallets para graduarse. El BNB sobrante se devuelve en la misma transacción."
  - title: Se gradúa a PancakeSwap
    details: "Al reunir {{P.mainnet.graduationTargetBnb}} BNB ({{P.testnet.graduationTargetBnb}} BNB en testnet), 200 millones de tokens y el BNB se listan en PancakeSwap V2. LP quemado, fin de las comisiones de la curva."
  - title: Comisiones que vuelven
    details: "La comisión del 1% de la curva paga al creador (20%), recompra y quema $AGNT (40%), paga BNB a los stakers (30%) y financia el tesoro (10%)."
---
