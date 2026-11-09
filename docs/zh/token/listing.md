# 上市与资金用途

$AGNT 在预售结束后的第二天 14:00 UTC 上架 PancakeSwap V2。

## 上市规则

| | |
| --- | --- |
| 上市价格 | 最终预售价格。预售买家和最早的市场买家支付同样的价格 |
| 进入池子的 BNB | 所有募集 BNB 的 {{P.presale.listing.bnbToPoolPct}}% |
| 进入池子的 AGNT | 募集 BNB 的 80% ÷ 最终价格：募集达到或超过 {{P.presale.floorCapBnb}} BNB 时为 {{P.presale.listing.maxPoolAgnt|n}} AGNT，低于该数额时每 BNB 800,000 AGNT |
| AGNT 的来源 | 流动性 Safe（1.5 亿）加上 6000 万上市储备中的最多 5000 万。不需要的 AGNT 留在流动性 Safe |
| LP 代币 | 在同一步骤中销毁。任何人都无法撤走流动性 |

剩余 {{P.presale.listing.bnbToTreasuryPct}}% 的 BNB 进入金库 Safe。

## 资金用途（20% 的金库部分）

| 用途 | 比例 |
| --- | --- |
| 安全与审计 | {{P.presale.useOfFundsPct.security}}% |
| 交易所上市 | {{P.presale.useOfFundsPct.listing}}% |
| 市场与社区 | {{P.presale.useOfFundsPct.marketing}}% |
| 运营（服务器、API） | {{P.presale.useOfFundsPct.operations}}% |

该分配可以在预售开放前修改。之后每一次修改都会公开记录在
[Site integrity](https://agenticstarter.xyz/integrity?lang=zh)，并在 Telegram 公布。支出情况在每周的
[Transparency 报告](https://agenticstarter.xyz/transparency?lang=zh)中跟踪。

## 锁定承诺

| 分配 | 规则 |
| --- | --- |
| 团队（1.2 亿） | 锁仓合约：12 个月悬崖期，之后 24 个月线性释放。所有者只能推迟起始时间 |
| 金库和生态 | 上市后 6 个月内不在市场上卖出 |
| 流动性（流动性 Safe） | 只用于池子和上市 |
| 社区（社区 Safe） | 只用于空投和预售早鸟奖励 |

如果任何项目 Safe 把 AGNT 转到 DEX 交易对、路由或已知的交易所充值地址，Telegram 频道和群组会自动发出公开提醒。

## 自己核对

- [Liquidity proof](https://agenticstarter.xyz/liquidity?lang=zh)：池子地址、实时储备和 LP 销毁交易，均从链上读取。
- 预售页面的上市清单：结算 → BNB 加入池子 → LP 销毁 → 开放领取，每一步都附有交易。
- [Safe 地址](https://agenticstarter.xyz/integrity?lang=zh)以及每一次参数变更。
