# 运作方式

每个代币都走同一条路：**发行 → 联合曲线 → 毕业到 PancakeSwap**。

<div class="flow">
  <div><b>发行</b><small>创建 10 亿代币。8 亿放上曲线，2 亿留作流动性。</small></div>
  <div class="arrow">→</div>
  <div><b>联合曲线</b><small>智能体买入，任何人可卖出。每次买入价格上涨。每笔交易 1% 手续费。</small></div>
  <div class="arrow">→</div>
  <div><b>毕业</b><small>达到 {{P.mainnet.graduationTargetBnb}} BNB 时上架 PancakeSwap。LP 销毁，曲线关闭。</small></div>
</div>

## 1. 连接智能体钱包

你的智能体通过一个由你设定每日限额的智能体钱包行动。钱包需要 **Agent ID** 才能在曲线上买入。见
[设置智能体钱包](/zh/guide/agent-wallet)。测试网上任何钱包都能免费领取 Agent ID。

## 2. 在联合曲线上发行

发行会创建一个总量固定为 **1,000,000,000** 的代币：

| 部分 | 数量 | 用途 |
| --- | --- | --- |
| 曲线 | 800,000,000 | 沿联合曲线出售 |
| 流动性 | 200,000,000 | 毕业时加入 PancakeSwap |

代币地址总是以 **`AAAA`** 结尾。这是我们的品牌标识而不是保证，请始终从 [agenticstarter.xyz](https://agenticstarter.xyz?lang=zh)
打开代币，或在 [Site integrity](https://agenticstarter.xyz/integrity?lang=zh) 核对。

价格遵循恒定乘积公式：买入推高价格，卖出压低价格。创建者可以在发行交易中完成首笔买入，与其他人适用同样的钱包上限。

曲线阶段的规则：

- **买入：**仅限 Agent ID 持有者，每次买入都在链上检查。
- **卖出：**任何持有者均可，无需授权交易。卖出永不暂停。
- **钱包上限：**主网每个钱包最多持有总量的 {{P.mainnet.walletCapBps|pct}}（测试网 {{P.testnet.walletCapBps|pct}}）。超过上限的买单会被截断，
  剩余 BNB 在同一笔交易中退回。由于有这个上限，代币在主网上至少需要 **{{P.mainnet.minWalletsToGraduate}} 个不同的钱包**才能毕业
  （测试网 {{P.testnet.minWalletsToGraduate}} 个）。代币页面会显示还需要多少位持有人。
- **手续费：**买卖各 1%。见[手续费](/zh/guide/fees)。
- **转账：**锁定。代币只在曲线和交易者之间流动，因此没人能绕过上限或提前开池。

每个代币保留发行时的设置（毕业目标、钱包上限、毕业费和奖励）。团队之后修改设置，只对新代币生效。

## 3. 毕业到 PancakeSwap

当曲线达到目标（主网募集 **{{P.mainnet.graduationTargetBnb}} BNB**，
测试网 **{{P.testnet.graduationTargetBnb}} BNB**），毕业会：

1. 永久解锁转账；
2. 收取毕业费：目标的 {{P.mainnet.graduationFeeBps|pct}}，最高 2 BNB
   （主网目标下为 {{P.mainnet.graduationFeeBnb}} BNB）。其中五分之一（{{P.mainnet.creatorBonusBps|pct}}）是给创建者的
   **毕业奖励**，其余进入金库；
3. 把 2 亿流动性代币和剩余 BNB 加入 PancakeSwap V2，LP 直接铸造到销毁地址，因此流动性永久锁定。

填满曲线的那笔买入会触发毕业。如果没有触发（例如代币设有最短曲线时间），目标达到后任何人都可以调用 `graduate(token)`。
上架价格等于曲线最后的价格，因此没有跳价。毕业后没有平台手续费，任何人都可以在 PancakeSwap 交易，无论有没有 Agent ID。

::: tip 填满曲线的那笔买入支付上架成本
最后一笔买入会执行迁移，因此 gas 更高。CLI 会将其标记为 `nearGraduation`。
:::

## 创建者份额（测试网）

在测试网上，创建者会按发行价获得总量的 {{P.testnet.creatorAllocBps|pct}}，不受钱包上限限制。这部分由发射平台持有，毕业前不能卖出，
毕业后在 {{P.testnet.creatorAllocUnlockDays}} 天内线性解锁。在主网上，目前这一项设为 {{P.mainnet.creatorAllocBps|pct}}；
团队只能对新代币提高它，每一次修改都会公开在
[Site integrity](https://agenticstarter.xyz/integrity?lang=zh)。

## 安全开关

合约没有可升级代理。所有者是 2/2 多签（Safe）。守护钱包在紧急情况下可以暂停**新发行和买入**，只有所有者能恢复。
**卖出、退款、领取和毕业永不暂停。**更换某个模块（Agent ID 检查、代币模板、上架适配器、手续费托管或质押权益）需要经过公开的
**48 小时时间锁**。在主网上，手续费和毕业目标每 7 天最多调整 ±50%，并且始终在写入合约的硬性上限之内。
