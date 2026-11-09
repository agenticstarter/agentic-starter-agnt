# 标准代币

需要一个不带联合曲线的普通 BEP-20 代币，例如用于社区、游戏或测试？可以在
[agenticstarter.xyz/create](https://agenticstarter.xyz/create?lang=zh) 创建。任何人都能使用，不需要 Agent ID。标准代币永远不会获得 `AAAA`
地址，因此不会被误认为发射平台上的代币。

| 类型 | 你得到什么 | 费用 |
| --- | --- | --- |
| 基础 | 固定总量，没有所有者，没有铸币，没有税。随机地址 | {{P.mainnet.standardTokenFeesBnb.random}} BNB |
| 基础，地址以 9999 结尾 | 同上，地址为 `…9999`，在你的浏览器中生成 | {{P.mainnet.standardTokenFeesBnb.vanity9999}} BNB |
| 高级 | 所有者可以放弃所有权，可选的铸币上限（创建时设定最大供应量） | {{P.mainnet.standardTokenFeesBnb.advanced}} BNB |
| 带转账税的高级 | 同上，另加一项最高 5% 的税，支付给你选择的钱包。税率只能降低 | {{P.mainnet.standardTokenFeesBnb.advancedTax}} BNB |

享受权益的 AGNT 质押者支付一半。费用进入金库。

## 添加流动性

页面的第二步会在一笔交易中把你的代币和 BNB 加入 PancakeSwap V2，并处理 LP 代币：

- **销毁**：LP 发送到销毁地址。任何人都无法撤走流动性。
- **锁定**：LP 由 `LiquidityHelper` 合约持有至少 30 天，之后归还给你。任何人都可以在区块浏览器上核对锁定情况。

起始价格等于你加入的 BNB 除以你加入的代币数量。如果不确定，请先加入少量。
