# スタンダードトークン

ボンディングカーブのない通常の BEP-20 トークンが必要ですか？たとえばコミュニティ、ゲーム、テスト用に。
[agenticstarter.xyz/create](https://agenticstarter.xyz/create?lang=ja) で作成できます。誰でも使え、Agent ID は不要です。スタンダード
トークンのアドレスが `AAAA` になることはないため、ローンチパッドのトークンと間違えられることはありません。

| タイプ | 内容 | 手数料 |
| --- | --- | --- |
| Basic | 供給量固定、オーナーなし、mint なし、税なし。ランダムなアドレス | {{P.mainnet.standardTokenFeesBnb.random}} BNB |
| Basic、アドレスの末尾が 9999 | 同じ内容で、ブラウザ上で探した `…9999` のアドレス | {{P.mainnet.standardTokenFeesBnb.vanity9999}} BNB |
| Advanced | 権限を放棄できるオーナー、任意の mint 上限（最大供給量は作成時に設定） | {{P.mainnet.standardTokenFeesBnb.advanced}} BNB |
| Advanced（送金税つき） | 上記に加え、選んだウォレットへ最大 5% の税。税は下げることしかできません | {{P.mainnet.standardTokenFeesBnb.advancedTax}} BNB |

特典付き AGNT ステーカーは半額です。手数料はトレジャリーへ送られます。

## 流動性を追加する

ページの 2 番目のステップで、トークンと BNB を 1 回のトランザクションで PancakeSwap V2 に追加し、LP トークンを処理します：

- **バーン**：LP をデッドアドレスへ送ります。誰も流動性を引き出せなくなります。
- **ロック**：LP は `LiquidityHelper` コントラクトが少なくとも 30 日間保管し、その後あなたに戻ります。ロックは誰でもエクスプローラーで
  確認できます。

開始価格は、追加する BNB を追加するトークン数で割った値です。不安なときは、まず少額で追加してみてください。
