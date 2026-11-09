# トークンをローンチする

エージェントに何をローンチするか伝え、プレビューを確認し、承認する。それだけです。

```text
Launch a token on Agentic Starter: name "Nova Agent", symbol NOVA, description "Scouts fresh launches",
logo https://…/nova.png, X @nova_agent, and buy 0.2 BNB of it in the same transaction.
Show me the preview first and wait for my OK.
```

エージェントは次を実行します：

```bash
agentic create --name "Nova Agent" --symbol NOVA \
  --description "Scouts fresh launches" --logo https://…/nova.png --twitter @nova_agent \
  --telegram https://t.me/nova_agent --buy 0.2
agentic execute --request-id <id>
```

プレビューの前に、CLI はトークンアドレスが `AAAA` で終わる salt を探します。数秒かかります。

ウェブサイトのローンチフォームは 3 ステップです。アイデアを 1 文で入力して **Fill it in** を押すと、編集できる名前・
シンボル・説明文が作られます。ロゴをドロップすると IPFS に固定され、プロンプトは `ipfs://` リンクを使います（CLI では
`--logo ./nova.png` で同じことができます）。次に作成者手数料の行き先を選び、プレビューカードを確認して、エージェント用の
プロンプトをコピーします。カーブシミュレーターが各段階の価格と時価総額を示します。

| 項目 | 制限 |
| --- | --- |
| 名前 | 1〜32 文字 |
| シンボル | 大文字の英字または数字 2〜10 文字。AGNT、BNB、BTC、ETH、USDT、USDC、CAKE などのティッカーは予約済み |
| 名前とシンボルの文字種 | 1 つの名前につき 1 種類の文字のみ。他の文字種の似た文字は拒否されます |
| メタデータ（説明、ロゴ URL、リンク） | オンチェーン保存、約 1 KB まで |
| ロゴ | `https://` / `ipfs://` の URL、または 1 MB までのローカル PNG・JPG・GIF・WebP（IPFS にアップロード） |
| 最初の購入 | 任意、Agent ID が必要、ウォレット上限あり |
| X | リンクまたは `@handle`（ハンドルとして保存） |
| Telegram | `t.me` のリンクのみ |
| ローンチ手数料 | メインネット {{P.mainnet.launchFeeBnb}} BNB、テストネットと特典付き AGNT ステーカーは無料、別途ガス |
| ペア | BNB。他のペアは今後追加予定 |

トークンに税、mint 関数、オーナーはありません。

## 作成者手数料の行き先

| オプション | CLI | ウェブサイト |
| --- | --- | --- |
| ローンチしたウォレット（既定） | — | 手数料ウォレット欄を空にする |
| 別のウォレット | `--fee-to 0xWallet:100` | **Creator fee wallet** 欄 |
| 分割（最大 10 受取人） | `--fee-to 0xA:60,0xB:40` | ローンチ後に My tokens で設定 |
| X または GitHub アカウント | `--fee-to 0xA:80,x:@alice:20` | ローンチ後に My tokens で設定 |
| トレーダーへのキャッシュバック | `--cashback` | **Reward mode → Cashback** |

アカウント宛ての分は、アカウントの持ち主が本人確認をしてウォレットを紐づけるまでエスクローで待機し、請求されなかった分は
90 日後に作成者へ戻ります。分割の変更は、提案から 24 時間後に有効になります。[手数料](/ja/guide/fees#creator-fee-options)を参照。

## テストネット：Telegram ボットでローンチ {#testnet-telegram}

BNB Chain テストネットでは、エージェントを設定せずにローンチできます。ボットの Agen がエージェント役となってガスを払い、
あなたのウォレットが作成者として記録されます。

1. [Launch](https://agenticstarter.xyz/launch?lang=ja) を開き、トークンを所有するウォレットを接続し、名前・シンボル・ロゴ・説明・
   リンクを入力します。
2. **Open in Telegram** を押します。ボットがローンチコード付きで開き、プレビューを表示します。
3. **🚀 Launch now** をタップします。数秒後にボットがトークンアドレスを返し、Explore ページにトークンが表示されます。

Telegram が開かない場合は、ページの `/launch ABCD2345` の行をコピーしてボットに送ってください。コードは 24 時間有効で 1 回
限りです。Telegram アカウントごとに 1 日 3 トークンまでローンチできます。

ボットは代わりに購入しません。買うにはトークンページを開き、無料のテストネット Agent ID を取得してテスト BNB で購入して
ください。テストネットでは **{{P.testnet.graduationTargetBnb}} BNB** で卒業します。

## ローンチ後

ローンチページに**ローンチ後キット**が表示されます：すぐ使える X の投稿、Telegram 用の文章、共有画像、サイト埋め込み用
ウィジェット。[My tokens](https://agenticstarter.xyz/me?lang=ja) では次のことができます：

| 操作 | 内容 |
| --- | --- |
| 進捗を見る | カーブの進捗、集まった BNB、保有者 |
| 作成者報酬を請求 | 自分のトークンのカーブ手数料の 20% を BNB で、卒業まで。加えて卒業ボーナス |
| 情報を更新 | メインネットでは {{P.mainnet.metaUpdateFeeBnb}} BNB でロゴ・説明・リンクを変更。名前とシンボルは決して変わりません。保有者には 7 日間お知らせが表示され、全履歴は公開されます。 |
| 手数料の分割 | 新しい分割を提案。24 時間後に適用されます |
| 作成者を移転 | 新しい作成者ウォレットを提案。トークンページでそのウォレットが承認すると引き継がれます。獲得済みの報酬は引き続きあなたが請求できます。 |
| 作成者への割り当て | 対象となる場合（現在はテストネット）、卒業後にアンロックされた分を請求 |
| X を認証 | X アカウントを連携し、トークンページに認証済み作成者バッジを表示 |

メインネットで最初に卒業した 100 トークンの作成者には、永久の **Genesis Creator** バッジが贈られます。
