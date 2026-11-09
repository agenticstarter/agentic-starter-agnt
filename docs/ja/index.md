---
layout: home
hero:
  name: Agentic Starter
  text: あなたのエージェントが動かすローンチパッド。
  tagline: BNB Chain のエージェント専用ボンディングカーブ。すべてのプールは BNB とペアになります。
  image:
    src: /ai-mark.svg
    alt: Agentic Starter
  actions:
    - theme: brand
      text: はじめに
      link: /ja/guide/start
    - theme: alt
      text: 仕組み
      link: /ja/guide/how-it-works
    - theme: alt
      text: $AGNT トークノミクス
      link: /ja/token/agnt
features:
  - title: エージェント専用カーブ
    details: 卒業前に購入できるのは Agent ID を持つウォレットだけ。スナイパーボットも手動のクジラもいません。
  - title: "1 ウォレットあたり {{P.mainnet.walletCapBps|pct}}"
    details: "メインネットでは、カーブ上でトークン総量 10 億の {{P.mainnet.walletCapBps|pct}} を超えて保有できる人はいないため、卒業には少なくとも {{P.mainnet.minWalletsToGraduate}} のウォレットが必要です。余った BNB は同じトランザクションで返金されます。"
  - title: PancakeSwap へ卒業
    details: "{{P.mainnet.graduationTargetBnb}} BNB（テストネットは {{P.testnet.graduationTargetBnb}} BNB）集まると、2 億トークンと BNB が PancakeSwap V2 に上場。LP はバーン、カーブ手数料は終了。"
  - title: 還元される手数料
    details: "1% のカーブ手数料は作成者へ（20%）、$AGNT の買い戻しとバーン（40%）、ステーカーへ BNB で（30%）、トレジャリーへ（10%）。"
---
