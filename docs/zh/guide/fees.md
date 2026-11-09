# 手续费

| 何时 | 费用 | 去向 |
| --- | --- | --- |
| 发行代币 | 主网 {{P.mainnet.launchFeeBnb}} BNB，测试网免费（另加 gas）。享受权益的 AGNT 质押者免费 | 金库 |
| 在曲线上买入或卖出 | 1% | 按下方分配 |
| 毕业 | 目标的 {{P.mainnet.graduationFeeBps|pct}}，最高 2 BNB（{{P.mainnet.graduationTargetBnb}} BNB 目标下为 {{P.mainnet.graduationFeeBnb}} BNB），从募集的 BNB 中扣除 | {{P.mainnet.creatorBonusBps|pct}} 给创建者，其余给金库 |
| 更新代币 logo、描述或链接 | 主网 {{P.mainnet.metaUpdateFeeBnb}} BNB，测试网免费 | 金库 |
| 毕业后交易（PancakeSwap） | 无平台费（PancakeSwap 自身收取 0.25%） | — |

## 1% 曲线手续费的去向

<div class="split"><span class="s1" style="width:20%">20%</span><span class="s2" style="width:40%">40%</span><span class="s3" style="width:30%">30%</span><span class="s4" style="width:10%">10%</span></div>
<div class="split-legend"><span><i style="background:#ffc93c"></i>代币创建者</span><span><i style="background:#b79cff"></i>回购并销毁 $AGNT</span><span><i style="background:#7ed6a8"></i>$AGNT 质押者，以 BNB 支付</span><span><i style="background:#c9c8cf"></i>金库</span></div>

| 比例 | 去向 |
| --- | --- |
| 20% | 代币的**创建者**（或创建者的手续费分成），直到毕业。创建者自己的交易不计入。在 [My tokens](https://agenticstarter.xyz/me?lang=zh) 领取。在**返现模式**下，这部分改为返还给交易者。 |
| 40% | 在 PancakeSwap 买入 $AGNT 并发送到销毁地址 |
| 30% | 以 BNB 支付给 [$AGNT 质押者](/zh/token/staking)，在 7 天内持续发放 |
| 10% | 金库（2/2 多签） |

非创建者部分先在发射平台累积，再推送到 **FeeSplitter** 合约，由它执行回购（每次最多 1% 滑点和 1 BNB）、销毁和向质押者付款。
总额公开显示在 [Transparency 页面](https://agenticstarter.xyz/transparency?lang=zh)、每周报告和链上。

## 创建者手续费选项 {#creator-fee-options}

发行时，创建者在两种模式中选一种：

| 模式 | 创建者的 20% 会怎样 |
| --- | --- |
| **创建者手续费**（默认） | 支付给创建者钱包，或在最多 10 个接收方之间分成。接收方可以是钱包，也可以是 **X 或 GitHub 账号**；账号的份额会存放在托管中，直到账号所有者关联钱包（如果无人领取，90 天后退回创建者）。 |
| **返现** | 在每次买入和卖出时返还给交易者，让交易者少付手续费。 |

新的手续费分成在提出 24 小时后生效，这样持有者可以提前看到变化。把创建者身份转给另一个钱包分两步：新钱包必须接受。

## 所有者无法突破的上限

费用只能在合约写死的范围内调整：毕业费最高为目标的 5%，且绝不超过 2 BNB；创建者毕业奖励最高为该费用的 30%；毕业目标最高 50 BNB；
发行费最高 0.02 BNB；更新费最高 0.05 BNB；创建者分成最高 30%。在主网上，每一项每 7 天最多调整 ±50%。
1% 曲线手续费本身固定不变。
