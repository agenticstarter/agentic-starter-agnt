# 手数料

| いつ | 手数料 | 行き先 |
| --- | --- | --- |
| トークンのローンチ | メインネット {{P.mainnet.launchFeeBnb}} BNB、テストネット無料（+ ガス）。特典付き AGNT ステーカーは無料 | トレジャリー |
| カーブでの売買 | 1% | 下記のとおり分配 |
| 卒業 | 目標額の {{P.mainnet.graduationFeeBps|pct}}、上限 2 BNB（目標 {{P.mainnet.graduationTargetBnb}} BNB で {{P.mainnet.graduationFeeBnb}} BNB）、集まった BNB から | {{P.mainnet.creatorBonusBps|pct}} は作成者へ、残りはトレジャリーへ |
| トークンのロゴ・説明・リンクの更新 | メインネット {{P.mainnet.metaUpdateFeeBnb}} BNB、テストネット無料 | トレジャリー |
| 卒業後の取引（PancakeSwap） | プラットフォーム手数料なし（PancakeSwap 自身の 0.25%） | — |

## 1% のカーブ手数料の行き先

<div class="split"><span class="s1" style="width:20%">20%</span><span class="s2" style="width:40%">40%</span><span class="s3" style="width:30%">30%</span><span class="s4" style="width:10%">10%</span></div>
<div class="split-legend"><span><i style="background:#ffc93c"></i>トークン作成者</span><span><i style="background:#b79cff"></i>$AGNT の買い戻しとバーン</span><span><i style="background:#7ed6a8"></i>$AGNT ステーカー（BNB）</span><span><i style="background:#c9c8cf"></i>トレジャリー</span></div>

| 割合 | 行き先 |
| --- | --- |
| 20% | トークンの**作成者**（または作成者の手数料分割）へ、卒業まで。作成者自身の取引では発生しません。[My tokens](https://agenticstarter.xyz/me?lang=ja) で請求。**キャッシュバックモード**では、この分は代わりにトレーダーへ戻ります。 |
| 40% | PancakeSwap で $AGNT を買い、バーンアドレスへ送る |
| 30% | [$AGNT ステーカー](/ja/token/staking)へ BNB で支払い、7 日間かけて流す |
| 10% | トレジャリー（2-of-2 マルチシグ） |

作成者分以外はローンチパッドに貯まり、**FeeSplitter** コントラクトに送られます。FeeSplitter が買い戻し
（1 回あたりスリッページ最大 1%、最大 1 BNB）、バーン、ステーカーへの支払いを行います。合計額は
[Transparency ページ](https://agenticstarter.xyz/transparency?lang=ja)、週次レポート、オンチェーンで公開されています。

## 作成者手数料のオプション {#creator-fee-options}

ローンチ時に、作成者は 2 つのモードから選びます：

| モード | 作成者の 20% の扱い |
| --- | --- |
| **作成者手数料**（既定） | 作成者ウォレット、または最大 10 受取人への分割で支払われます。受取人はウォレットでも **X または GitHub アカウント**でもかまいません。アカウント宛ての分は、持ち主がウォレットを紐づけるまでエスクローで待機します（誰も請求しなければ 90 日後に作成者へ戻ります）。 |
| **キャッシュバック** | 売買のたびにトレーダーへ戻るため、トレーダーの負担が減ります。 |

新しい手数料分割は提案から 24 時間後に適用されるため、ホルダーは変更を事前に見られます。作成者の役割を別のウォレットへ
移すのは 2 段階の移転で、新しいウォレットが承認する必要があります。

## オーナーが超えられない上限

手数料はコントラクトに書かれた範囲内でしか変えられません：卒業手数料は目標額の最大 5% かつ 2 BNB まで、作成者の卒業ボーナスは
その手数料の最大 30%、卒業目標は最大 50 BNB、ローンチ手数料は最大 0.02 BNB、更新手数料は最大 0.05 BNB、作成者の取り分は
最大 30%。メインネットでは、これらはそれぞれ 7 日間で最大 ±50% までしか動かせません。1% のカーブ手数料そのものは固定です。
