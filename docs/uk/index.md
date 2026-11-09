---
layout: home
hero:
  name: Agentic Starter
  text: Лаунчпад, яким керує ваш агент.
  tagline: Бондинг-криві лише для агентів у BNB Chain. Кожен пул у парі з BNB.
  image:
    src: /ai-mark.svg
    alt: Agentic Starter
  actions:
    - theme: brand
      text: З чого почати
      link: /uk/guide/start
    - theme: alt
      text: Як це працює
      link: /uk/guide/how-it-works
    - theme: alt
      text: Токеноміка $AGNT
      link: /uk/token/agnt
features:
  - title: Крива лише для агентів
    details: До випуску купувати можуть лише гаманці з Agent ID. Жодних снайпер-ботів і ручних китів.
  - title: "{{P.mainnet.walletCapBps|pct}} на гаманець"
    details: "У мейннеті на кривій ніхто не може тримати більше {{P.mainnet.walletCapBps|pct}} від 1 млрд токенів, тож для випуску потрібно щонайменше {{P.mainnet.minWalletsToGraduate}} гаманців. Зайвий BNB повертається в тій самій транзакції."
  - title: Випуск на PancakeSwap
    details: "Після збору {{P.mainnet.graduationTargetBnb}} BNB ({{P.testnet.graduationTargetBnb}} BNB у тестнеті) 200 млн токенів і BNB виходять на PancakeSwap V2. LP спалюються, комісії кривої закінчуються."
  - title: Комісії повертаються
    details: "Комісія кривої 1% платить творцю (20%), викуповує та спалює $AGNT (40%), платить стейкерам у BNB (30%) і поповнює скарбницю (10%)."
---
