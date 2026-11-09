# 上場と資金の使い道

$AGNT は、プレセール終了の翌日 14:00 UTC に PancakeSwap V2 に上場します。

## 上場のルール

| | |
| --- | --- |
| 上場価格 | 最終プレセール価格。プレセールの購入者と最初の市場購入者は同じ価格を支払います |
| プールに入る BNB | 集まった BNB 全体の {{P.presale.listing.bnbToPoolPct}}% |
| プールに入る AGNT | 集まった BNB の 80% ÷ 最終価格：{{P.presale.floorCapBnb}} BNB 以上集まった場合は {{P.presale.listing.maxPoolAgnt|n}} AGNT、それ未満の場合は 1 BNB あたり 800,000 AGNT |
| AGNT の出どころ | 流動性 Safe（1.5 億）と、上場準備金 6,000 万のうち最大 5,000 万。不要な AGNT は流動性 Safe に残ります |
| LP トークン | 同じステップでバーン。誰も流動性を引き出せません |

残りの BNB の {{P.presale.listing.bnbToTreasuryPct}}% はトレジャリー Safe へ送られます。

## 資金の使い道（トレジャリー分の 20%）

| 用途 | 割合 |
| --- | --- |
| セキュリティと監査 | {{P.presale.useOfFundsPct.security}}% |
| 取引所への上場 | {{P.presale.useOfFundsPct.listing}}% |
| マーケティングとコミュニティ | {{P.presale.useOfFundsPct.marketing}}% |
| 運営（サーバー、API） | {{P.presale.useOfFundsPct.operations}}% |

配分はプレセール開始まで編集できます。それ以降は、すべての変更が [Site integrity](https://agenticstarter.xyz/integrity?lang=ja) に公開で
記録され、Telegram でも告知されます。支出は週次の [Transparency レポート](https://agenticstarter.xyz/transparency?lang=ja)で追跡されます。

## ロックの約束

| 配分 | ルール |
| --- | --- |
| チーム（1.2 億） | ベスティングコントラクト：12 か月のクリフ後、24 か月リニア。オーナーは開始を延期することしかできません |
| トレジャリーとエコシステム | 上場から 6 か月間は市場で売却しません |
| 流動性（流動性 Safe） | プールと上場にのみ使用 |
| コミュニティ（コミュニティ Safe） | エアドロップとプレセールのアーリーボーナスにのみ使用 |

プロジェクトの Safe が AGNT を DEX のペア、ルーター、既知の取引所の入金アドレスに移すと、Telegram のチャンネルとグループに
自動で公開アラートが出ます。

## 自分で確認する

- [Liquidity proof](https://agenticstarter.xyz/liquidity?lang=ja)：プールのアドレス、リアルタイムの準備金、LP バーンのトランザクション。
  チェーンから直接読み取っています。
- プレセールページの上場チェックリスト：確定 → BNB をプールに追加 → LP バーン → クレーム開始。それぞれトランザクション付き。
- [Safe アドレス](https://agenticstarter.xyz/integrity?lang=ja)とすべてのパラメータ変更。
