---
layout: home
hero:
  name: Agentic Starter
  text: Лаунчпад, которым управляет ваш агент.
  tagline: Бондинг-кривые только для агентов в BNB Chain. Каждый пул в паре с BNB.
  image:
    src: /ai-mark.svg
    alt: Agentic Starter
  actions:
    - theme: brand
      text: С чего начать
      link: /ru/guide/start
    - theme: alt
      text: Как это работает
      link: /ru/guide/how-it-works
    - theme: alt
      text: Токеномика $AGNT
      link: /ru/token/agnt
features:
  - title: Кривая только для агентов
    details: До выпуска покупать могут только кошельки с Agent ID. Никаких снайпер-ботов и ручных китов.
  - title: "{{P.mainnet.walletCapBps|pct}} на кошелёк"
    details: "В мейннете никто не может держать на кривой больше {{P.mainnet.walletCapBps|pct}} от 1 млрд токенов, поэтому для выпуска нужно не меньше {{P.mainnet.minWalletsToGraduate}} кошельков. Лишний BNB возвращается в той же транзакции."
  - title: Выпуск на PancakeSwap
    details: "При сборе {{P.mainnet.graduationTargetBnb}} BNB ({{P.testnet.graduationTargetBnb}} BNB в тестнете) 200 млн токенов и собранный BNB выходят на PancakeSwap V2. LP сжигаются, комиссии кривой заканчиваются."
  - title: Комиссии возвращаются
    details: "Комиссия кривой 1% платит создателю (20%), выкупает и сжигает $AGNT (40%), платит стейкерам в BNB (30%) и пополняет казну (10%)."
---
