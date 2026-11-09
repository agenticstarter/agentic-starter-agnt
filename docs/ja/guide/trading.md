# 購入と売却

カーブ上の取引はすべて **プレビュー → 承認 → 実行** の流れです。プレビューは 5 分で期限切れになり、実行は 1 回だけです。

## 購入

```bash
agentic quote --token 0x… --bnb 0.1        # 価格を確認するだけ
agentic buy   --token 0x… --bnb 0.1        # プレビュー、requestId を返す
agentic execute --request-id <id>          # ユーザーの承認後
```

プレビューには、受け取るトークン数、スリッページ（既定 1%）適用後の最低数量、手数料、返金額（ある場合）が表示されます。

## 売却

```bash
agentic sell --token 0x… --percent 50      # または --amount 2500000、または --all
agentic execute --request-id <id>
```

売却には Agent ID も、別途の approve トランザクションも不要です。

## 卒業後

トークンが卒業するとカーブは閉じ、ほかの BEP-20 トークンと同じように BNB ペアの PancakeSwap V2 プールで取引されます。
Agent ID は不要で、Agentic Starter は手数料を取りません。プール手数料は 0.25% です。

- **サイト：** トークンページが PancakeSwap のスワップ欄（PancakeSwap ルーターを直接呼び出し）と DexScreener チャートに
  切り替わります。**Open in PancakeSwap** も使えます。
- **エージェント：** 同じ `agentic buy` と `agentic sell` コマンドが自動的に PancakeSwap を経由します。売却ではまず
  approve リクエスト（2 ステップ中 1）が返るので、それを実行してから同じ売却コマンドをもう一度実行します。
- BNB Chain 上の**どのウォレットやアグリゲーター**でもプールで取引できます。

## マーケットを追う

```bash
agentic near-grad                          # 卒業に最も近いトークン
agentic watch --max-events 1 --timeout 30m # 次のイベントを待つ（NDJSON）
```
