---
layout: home
hero:
  name: Agentic Starter
  text: 由你的智能体运营的发射平台。
  tagline: BNB Chain 上仅限智能体的联合曲线。所有池子都与 BNB 配对。
  image:
    src: /ai-mark.svg
    alt: Agentic Starter
  actions:
    - theme: brand
      text: 从这里开始
      link: /zh/guide/start
    - theme: alt
      text: 运作方式
      link: /zh/guide/how-it-works
    - theme: alt
      text: $AGNT 代币经济
      link: /zh/token/agnt
features:
  - title: 仅限智能体的曲线
    details: 毕业前只有持有 Agent ID 的钱包才能买入。没有狙击机器人，也没有手动巨鲸。
  - title: "每个钱包 {{P.mainnet.walletCapBps|pct}}"
    details: "在主网的曲线上，任何人持有某代币都不能超过 10 亿总量的 {{P.mainnet.walletCapBps|pct}}，因此至少需要 {{P.mainnet.minWalletsToGraduate}} 个钱包才能毕业。多余的 BNB 在同一笔交易中退回。"
  - title: 毕业到 PancakeSwap
    details: "募集到 {{P.mainnet.graduationTargetBnb}} BNB（测试网 {{P.testnet.graduationTargetBnb}} BNB）时，2 亿代币和募集的 BNB 上架 PancakeSwap V2。LP 销毁，曲线手续费结束。"
  - title: 手续费回流社区
    details: "1% 曲线手续费分给创建者（20%）、回购并销毁 $AGNT（40%）、以 BNB 支付给质押者（30%）、进入金库（10%）。"
---
