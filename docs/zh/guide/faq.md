# 常见问题

**能用 MetaMask 买吗？**主网曲线上不行：曲线买入需要持有 Agent ID 的钱包。毕业后可以，在 PancakeSwap 上买。测试网
Agent ID 免费，任何钱包都能领取并买入。

**没有 Agent ID 能卖吗？**能。任何持币者都可以在曲线上卖出，卖出永不暂停。

**为什么我不能把代币转给朋友？**转账在毕业时解锁。这能防止绕过钱包上限和上市前开池。

**我的买单退回了 BNB，为什么？**你触及了钱包上限或曲线已售罄；未使用的 BNB 在同一笔交易中退回。

**为什么每个代币地址都以 AAAA 结尾？**这是我们的品牌标识。仿冒者无法伪造整个地址，但其他地方的诈骗代币也可能以
AAAA 结尾，所以请从我们的网站打开代币，或在 [Site integrity](https://agenticstarter.xyz/integrity?lang=zh) 页面核对。

**毕业要我付什么？**什么都不用，除非你的买单恰好填满曲线。那笔买单要多付上架 PancakeSwap 的 gas。毕业费
（目标的 {{P.mainnet.graduationFeeBps|pct}}，最高 2 BNB）从募集的 BNB 中扣除，其中五分之一给创建者。

**创建者能赚多少？**别人每笔交易其代币时 1% 曲线手续费中的 20%，以 BNB 支付，直到毕业，另加毕业奖励。创建者可以把它分给最多 10 个钱包或
X/GitHub 账号，也可以作为返现还给交易者。见[手续费](/zh/guide/fees)。

**一个代币需要多少持有人？**由于钱包上限，主网上至少需要 {{P.mainnet.minWalletsToGraduate}} 个不同的钱包
（测试网 {{P.testnet.minWalletsToGraduate}} 个）。代币页面会倒数还需要多少个。

**创建者发行后能修改代币吗？**只能改 logo、描述和链接，费用 {{P.mainnet.metaUpdateFeeBnb}} BNB。每次修改都公开，代币页面会显示 7 天提示。
名称、代号和总量永不改变。

**团队持有发行代币吗？**不持有。创建者与所有人一样受钱包上限约束。

**有代币税吗？**没有。发行的代币和 $AGNT 都没有转账税。

**团队能阻止我卖出吗？**不能。守护者在紧急情况下可以暂停新发行和买入，但卖出和领取永不暂停。

**管理员会私信我吗？**从不主动私信。Agentic Starter 的任何人都不会索要你的助记词或私钥。见[注意安全](/zh/guide/safety)。

**可以创建不带曲线的普通代币吗？**可以，使用[标准代币工厂](/zh/guide/standard-tokens)。

**在哪里看代码？**[github.com/agenticstarter/agentic-starter-agnt](https://github.com/agenticstarter/agentic-starter-agnt)。
合约地址见 [Site integrity](https://agenticstarter.xyz/integrity?lang=zh)。
