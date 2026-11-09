=== CONFIG ===
description = Agentic Starter 文档：BNB Chain 上专为 AI 智能体打造的发射平台。
guide = 指南
forAgents = 智能体开发
contracts = 合约
apps = 应用
launchpad = 发射平台
presale = 预售
airdrop = 空投
whatIs = 什么是 Agentic Starter
how = 运作方式
wallet = 设置智能体钱包
launch = 发行代币
trading = 买入与卖出
ignite = Ignite（销毁 + 留言）
fees = 手续费
faq = 常见问题
cli = CLI 参考
skill = 智能体技能
signers = 签名器
api = 索引器 API
tokenomics = 代币经济
presalePage = 预售
airdropPage = 空投
staking = 质押
reference = 参考
contractsPage = 智能合约
brand = 品牌资源
risks = 风险
inEnglish = 英文
outline = 本页内容
prev = 上一页
next = 下一页
updated = 最后更新
top = 返回顶部
menu = 菜单
appearance = 外观
toLight = 切换到浅色模式
toDark = 切换到深色模式
langMenu = 切换语言
footer = 加密资产波动剧烈。本站内容不构成任何投资建议。
edit = 在 GitHub 上编辑此页
search = 搜索
noResults = 没有找到结果：
nfTitle = 页面不存在
nfQuote = 你要找的页面不存在或已被移动。
nfLink = 返回首页
start = 从这里开始
glossary = 术语表
standardTokens = 标准代币
telegram = Telegram 社区
community = 社区计划
safety = 注意安全
listing = 上市与资金用途
installApp = 在手机上安装应用

=== FILE index.md ===
---
layout: home
hero:
  name: Agentic Starter
  text: 由你的智能体运营的发射平台。
  tagline: BNB Chain 上仅限智能体的联合曲线。所有池子都与 BNB 配对。
  image:
    src: /ai-mark.svg
    alt: Agentic Starter
  actions:
    - theme: brand
      text: 从这里开始
      link: /guide/start
    - theme: alt
      text: 运作方式
      link: /guide/how-it-works
    - theme: alt
      text: $AGNT 代币经济
      link: /token/agnt
features:
  - title: 仅限智能体的曲线
    details: 毕业前只有持有 Agent ID 的钱包才能买入。没有狙击机器人，也没有手动巨鲸。
  - title: "每个钱包 {{P.mainnet.walletCapBps|pct}}"
    details: "在主网的曲线上，任何人持有某代币都不能超过 10 亿总量的 {{P.mainnet.walletCapBps|pct}}，因此至少需要 {{P.mainnet.minWalletsToGraduate}} 个钱包才能毕业。多余的 BNB 在同一笔交易中退回。"
  - title: 毕业到 PancakeSwap
    details: "募集到 {{P.mainnet.graduationTargetBnb}} BNB（测试网 {{P.testnet.graduationTargetBnb}} BNB）时，2 亿代币和募集的 BNB 上架 PancakeSwap V2。LP 销毁，曲线手续费结束。"
  - title: 手续费回流社区
    details: "1% 曲线手续费分给创建者（20%）、回购并销毁 $AGNT（40%）、以 BNB 支付给质押者（30%）、进入金库（10%）。"
---

=== FILE guide/start.md ===
# 从这里开始

刚接触加密货币或 Agentic Starter？本页带你在约 15 分钟内从零发行第一个代币。以下全部在 **BNB Chain 测试网**上
进行，测试网 BNB 是免费的测试币，所以你不会有任何损失。

<div class="flow">
  <div><b>1. 钱包</b><small>安装钱包应用</small></div>
  <div class="arrow">→</div>
  <div><b>2. 测试 BNB</b><small>从水龙头免费领取</small></div>
  <div class="arrow">→</div>
  <div><b>3. Agent ID</b><small>测试网免费</small></div>
  <div class="arrow">→</div>
  <div><b>4. 交易</b><small>在曲线上买卖</small></div>
  <div class="arrow">→</div>
  <div><b>5. 发行</b><small>你自己的代币</small></div>
</div>

## 1. 准备钱包

钱包是保管加密资产并签署交易的应用。安装一个支持 BNB Chain 的钱包，例如 MetaMask、Trust Wallet 或 Rabby。

创建钱包时，应用会显示一组**助记词**（12 或 24 个单词）。把它抄在纸上并离线保存。拿到它的人就能控制你的钱包。
Agentic Starter 的任何人都不会向你索要它。

## 2. 领取免费测试 BNB

1. 打开 [agenticstarter.xyz](https://agenticstarter.xyz) 并点击 **Connect**。网站会请求钱包切换到
   **BNB Smart Chain Testnet**（链 ID 97），请同意。
2. 复制你的钱包地址（以 `0x` 开头）。
3. 打开 BNB Chain 测试网水龙头，粘贴地址并申请 tBNB，一两分钟内到账。 [bnbchain.org/en/testnet-faucet](https://www.bnbchain.org/en/testnet-faucet)

发射平台上的 [Start 页面](https://agenticstarter.xyz/start)会带你走完同样的步骤，并在完成后打勾。

## 3. 领取 Agent ID

在联合曲线上买入需要钱包里有 **Agent ID**。测试网上免费：打开任意代币页面，点击 **Get Agent ID**，只需支付少量
测试 gas。

## 4. 完成第一笔交易

在同一个代币页面买入一点，再卖出一部分。看进度条向 PancakeSwap 推进。卖出从不需要 Agent ID。

## 5. 发行你自己的代币

打开 [Launch](https://agenticstarter.xyz/launch)，填写名称、代号和 logo，然后点击 **Open in Telegram**。机器人 Agen
会为你的钱包发行并代付 gas。详见[发行代币](/guide/launch#testnet-telegram)。

## 顺便参加空投

以上每一步都能获得[空投积分](/token/airdrop)：发行、交易、每日问答等等。

## 你会遇到的词

不清楚“曲线”“毕业”“gas”是什么？请看[术语表](/guide/glossary)。还有问题？问问 Agen（每个网站角落的聊天气泡），
或在我们的 Telegram 群里提问。

=== FILE guide/glossary.md ===
# 术语表

| 术语 | 含义 |
| --- | --- |
| **AAAA 地址** | 在这里发行的每个代币合约地址都以 `AAAA` 结尾。这是品牌标识，不是安全检查：请始终从我们的网站打开代币。 |
| **智能体（Agent）** | 代表你行动的 AI 程序，在这里是在你设定的限额内，用它自己的钱包发行和交易代币。 |
| **Agent ID** | 智能体钱包持有的凭证。在联合曲线上买入必须持有。测试网免费。 |
| **智能体钱包** | 智能体使用的独立钱包，带有消费限额，让你的主资金保持分离。 |
| **空投** | 每季结束后按积分比例发给合格钱包的免费 $AGNT。 |
| **BNB** | BNB Chain 的原生币。用于支付 gas，这里所有代币都以它计价。 |
| **BNB Chain** | Agentic Starter 运行的区块链。 |
| **联合曲线** | 按公式定价出售新代币的合约：每次买入价格上涨，每次卖出价格下降，不需要订单簿。 |
| **销毁** | 把代币发送到无人控制的地址，使其永久消失。 |
| **创建者** | 代币为其发行的钱包。毕业前可获得曲线手续费的一部分（或把这部分作为返现交给交易者）。 |
| **返现（Cashback）** | 发行时的一种选项：曲线手续费中属于创建者的部分，在每笔交易时返还给交易者。 |
| **推荐位（Featured）** | Explore 页面上通过销毁 AGNT 获得的展示位。它是广告，不是评测。 |
| **黄金一小时** | 每天有一小时，空投积分按双倍计算。 |
| **曲线手续费** | 联合曲线上每次买卖的 1%。见[手续费](/guide/fees)。 |
| **水龙头** | 免费发放测试网 BNB 的网站。 |
| **Gas** | 网络对每笔交易收取的小额费用，用 BNB 支付。 |
| **Genesis Creator** | 主网上前 100 个毕业代币的创建者获得的永久徽章。 |
| **毕业** | 曲线填满的时刻：代币带着锁定的流动性转到 PancakeSwap，曲线关闭。 |
| **Ignite** | 销毁部分代币并附上一条公开留言。见 [Ignite](/guide/ignite)。 |
| **LP 代币** | PancakeSwap 池子份额的凭证。我们在毕业时销毁它们，流动性永远无法被撤走。 |
| **主网** | 真实网络，真实资金。 |
| **PancakeSwap** | BNB Chain 上最大的交易所。毕业的代币在那里交易。 |
| **预售** | $AGNT 上市前的首次公开发售。见[预售](/token/presale)。 |
| **助记词** | 控制钱包的 12 或 24 个单词。绝不与任何人分享。 |
| **滑点** | 从预览到成交之间允许的价格变动幅度，超出则交易被拒绝。 |
| **快照** | 积分被冻结并计算空投份额的时刻。 |
| **质押** | 把 $AGNT 锁在合约中以获得 BNB 形式的手续费分成。见[质押](/token/staking)。 |
| **测试网** | BNB Chain 的练习副本，BNB 免费且没有价值。 |
| **TGE** | 代币生成事件：$AGNT 在 PancakeSwap 上市、预售开放领取的那一天。 |
| **钱包上限** | 代币在曲线上时单个钱包最多可持有的数量（主网 {{P.mainnet.walletCapBps|pct}}，测试网 {{P.testnet.walletCapBps|pct}}）。 |

=== FILE guide/what-is.md ===
# 什么是 Agentic Starter

::: tip 新来的？
[从这里开始](/guide/start)页面带你在约 15 分钟内在测试网上从零发行第一个代币。
:::

Agentic Starter 是 BNB Chain 上为 AI 智能体打造的代币发射平台。你的智能体发行代币，你的智能体在联合曲线上交易，
而每一步都由你来批准。曲线填满后，代币上线 PancakeSwap，与 BNB 配对。

在主网上，[agenticstarter.xyz](https://agenticstarter.xyz) 没有买入按钮。网站展示市场、图表、持有人和智能体；
交易通过 [agent CLI](/agents/cli) 和智能体钱包完成。

::: tip 测试网
在 BNB Chain 测试网上，任何人都可以不用智能体直接体验：通过我们的 Telegram 机器人发行代币
（[发行代币](/guide/launch#testnet-telegram)），在任意代币页面免费领取测试网 Agent ID，再用普通钱包和测试 BNB 买入。
:::

## 为什么只限智能体

| 普通发射平台的问题 | Agentic Starter 的做法 |
| --- | --- |
| 狙击机器人抢第一个区块 | 只有持有 Agent ID 的钱包才能在曲线上买入 |
| 一个巨鲸买走大部分供应量 | 曲线阶段每个钱包最多持有 1% |
| 上线前建池、场外抛售 | 毕业前代币禁止转账 |
| 上线后撤走流动性 | 毕业时 LP 代币被销毁 |
| 手续费没有去处 | 1% 手续费分给创建者、销毁 $AGNT，并以 BNB 支付给质押者 |

## 适合谁

- **智能体开发者**：希望自己的智能体在所有者设定的额度内安全地发行和交易代币。
- **社区**：想要一个没有机器人的公平起点。
- **$AGNT 持有人**：分享每一次发行产生的手续费。

## 第一阶段范围

所有代币都在 **BNB Chain** 上与 **BNB** 配对。随着智能体钱包普及，可能会增加更多交易对和链，届时会先征求社区意见。

=== FILE guide/how-it-works.md ===
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
[设置智能体钱包](/guide/agent-wallet)。测试网上任何钱包都能免费领取 Agent ID。

## 2. 在联合曲线上发行

发行会创建一个总量固定为 **1,000,000,000** 的代币：

| 部分 | 数量 | 用途 |
| --- | --- | --- |
| 曲线 | 800,000,000 | 沿联合曲线出售 |
| 流动性 | 200,000,000 | 毕业时加入 PancakeSwap |

代币地址总是以 **`AAAA`** 结尾。这是我们的品牌标识而不是保证，请始终从 [agenticstarter.xyz](https://agenticstarter.xyz)
打开代币，或在 [Site integrity](https://agenticstarter.xyz/integrity) 核对。

价格遵循恒定乘积公式：买入推高价格，卖出压低价格。创建者可以在发行交易中完成首笔买入，与其他人适用同样的钱包上限。

曲线阶段的规则：

- **买入：**仅限 Agent ID 持有者，每次买入都在链上检查。
- **卖出：**任何持有者均可，无需授权交易。卖出永不暂停。
- **钱包上限：**主网每个钱包最多持有总量的 {{P.mainnet.walletCapBps|pct}}（测试网 {{P.testnet.walletCapBps|pct}}）。超过上限的买单会被截断，
  剩余 BNB 在同一笔交易中退回。由于有这个上限，代币在主网上至少需要 **{{P.mainnet.minWalletsToGraduate}} 个不同的钱包**才能毕业
  （测试网 {{P.testnet.minWalletsToGraduate}} 个）。代币页面会显示还需要多少位持有人。
- **手续费：**买卖各 1%。见[手续费](/guide/fees)。
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
[Site integrity](https://agenticstarter.xyz/integrity)。

## 安全开关

合约没有可升级代理。所有者是 2/2 多签（Safe）。守护钱包在紧急情况下可以暂停**新发行和买入**，只有所有者能恢复。
**卖出、退款、领取和毕业永不暂停。**更换某个模块（Agent ID 检查、代币模板、上架适配器、手续费托管或质押权益）需要经过公开的
**48 小时时间锁**。在主网上，手续费和毕业目标每 7 天最多调整 ±50%，并且始终在写入合约的硬性上限之内。

=== FILE guide/agent-wallet.md ===
# 设置智能体钱包

你需要三样东西：一个智能体钱包、钱包上的 Agent ID，以及少量 BNB。

1. **创建智能体钱包**：在支持 AI 智能体的钱包应用中创建。它是独立的、无需暴露私钥的子钱包，有自己的余额，
   你的主资金因此保持隔离。
2. **设置防护：** 每日花费上限、智能体可以交易哪些代币，以及高风险交易如何确认。开启自动签名，让智能体在这些限制内行动。
3. **为该钱包领取 Agent ID。** 每次在曲线上买入时，发射平台都会在链上检查。
4. **充值 BNB** 用于 gas 和买入（0.05 BNB 就足够起步）。
5. **为智能体安装技能和 CLI：**

```bash
npx skills add agenticstarter/agentic-starter-agnt/skill
npm i -g @agenticstarter/cli
```

6. **连接签名器。** 让 CLI 指向你钱包的签名命令（参见[签名器](/agents/signers)）。
7. **检查：** 让智能体运行 `agentic preflight`。每一项未通过的检查都会附带修复方法。

你也可以把钱包地址粘贴到 [Agent check](https://agenticstarter.xyz/check)，查看它的 Agent ID 状态和持仓。

::: warning
永远不要把主钱包的助记词交给智能体。请使用带额度限制的专用智能体钱包。
:::

=== FILE guide/launch.md ===
# 发行代币

告诉智能体要发行什么，查看预览，批准。就这么简单。

```text
Launch a token on Agentic Starter: name "Nova Agent", symbol NOVA, description "Scouts fresh launches",
logo https://…/nova.png, X @nova_agent, and buy 0.2 BNB of it in the same transaction.
Show me the preview first and wait for my OK.
```

智能体会运行：

```bash
agentic create --name "Nova Agent" --symbol NOVA \
  --description "Scouts fresh launches" --logo https://…/nova.png --twitter @nova_agent \
  --telegram https://t.me/nova_agent --buy 0.2
agentic execute --request-id <id>
```

显示预览前，CLI 会搜索一个 salt，使代币地址以 `AAAA` 结尾，需要几秒钟。

在网站上，发行表单分三步。用一句话写下你的想法，点击 **Fill it in**，就会得到可以编辑的名称、代号和描述。
再放入 logo：它会被固定到 IPFS，提示词使用 `ipfs://` 链接（在 CLI 中 `--logo ./nova.png` 效果相同）。然后选择创建者手续费的去向，
查看预览卡片，并复制给智能体的提示词。曲线模拟器会显示各阶段的价格和市值。

| 字段 | 限制 |
| --- | --- |
| 名称 | 1–32 个字符 |
| 代号 | 2–10 个大写字母或数字。AGNT、BNB、BTC、ETH、USDT、USDC、CAKE 等代号为保留 |
| 名称和代号的文字 | 每个名称只能使用一种字母表，因此来自其他文字的相似字母会被拒绝 |
| 元数据（描述、logo URL、链接） | 存储在链上，最多约 1 KB |
| Logo | `https://` / `ipfs://` URL，或不超过 1 MB 的本地 PNG、JPG、GIF、WebP（上传到 IPFS） |
| 首笔买入 | 可选，需要 Agent ID，适用钱包上限 |
| X | 链接或 `@handle`（以用户名存储） |
| Telegram | 只能是 `t.me` 链接 |
| 发行费 | 主网 {{P.mainnet.launchFeeBnb}} BNB，测试网免费，享受权益的 AGNT 质押者也免费，另加 gas |
| 交易对 | BNB。其他交易对以后推出 |

代币没有税，没有铸币函数，也没有所有者。

## 创建者手续费的去向

| 选项 | CLI | 网站 |
| --- | --- | --- |
| 你的发行钱包（默认） | — | 手续费钱包留空 |
| 另一个钱包 | `--fee-to 0xWallet:100` | **Creator fee wallet** 字段 |
| 分成，最多 10 个接收方 | `--fee-to 0xA:60,0xB:40` | 发行后在 My tokens 中设置 |
| X 或 GitHub 账号 | `--fee-to 0xA:80,x:@alice:20` | 发行后在 My tokens 中设置 |
| 返现给交易者 | `--cashback` | **Reward mode → Cashback** |

账号的份额会存放在托管中，直到账号所有者证明账号并关联钱包；90 天内无人领取的份额会退回创建者。分成变更在你提出 24 小时后生效。
见[手续费](/guide/fees#creator-fee-options)。

## 测试网：用 Telegram 机器人发行 {#testnet-telegram}

在 BNB Chain 测试网上，不设置智能体也能发行。机器人 Agen 充当智能体并支付 gas，你的钱包被记录为创建者。

1. 打开 [Launch](https://agenticstarter.xyz/launch)，连接将拥有代币的钱包，填写名称、代号、logo、描述和链接。
2. 点击 **Open in Telegram**。机器人会带着你的发行码打开并显示预览。
3. 点击 **🚀 Launch now**。几秒后机器人回复代币地址，代币出现在 Explore 页面。

如果 Telegram 没有打开，复制页面上的 `/launch ABCD2345` 一行发给机器人。发行码 24 小时内有效且只能用一次。每个
Telegram 账号每天最多发行 3 个代币。

机器人不会替你买入。要买入，请打开代币页面，领取免费测试网 Agent ID，然后用测试 BNB 买入。测试网上代币在
**{{P.testnet.graduationTargetBnb}} BNB** 时毕业。

## 发行之后

发行页面随后会显示**发行后工具包**：现成的 X 帖子、Telegram 文案、分享图片和可嵌入你网站的小组件。在
[My tokens](https://agenticstarter.xyz/me) 中你可以：

| 操作 | 说明 |
| --- | --- |
| 跟踪进度 | 曲线进度、已募集 BNB、持有者 |
| 领取创建者奖励 | 你的代币上每笔曲线手续费的 20%，以 BNB 支付，直到毕业，另加毕业奖励 |
| 更新信息 | 在主网上花 {{P.mainnet.metaUpdateFeeBnb}} BNB 修改 logo、描述和链接。名称和代号永不改变。持有者会看到 7 天提示，完整历史始终公开。 |
| 手续费分成 | 提出新的分成方案，24 小时后生效 |
| 转移创建者 | 提出新的创建者钱包；它在代币页面接受后接管。已赚取的奖励仍由你领取。 |
| 创建者份额 | 在适用的地方（目前是测试网），毕业后领取已解锁的部分 |
| 验证 X | 关联你的 X 账号，在代币页面显示已验证创建者徽章 |

主网上前 100 个毕业代币的创建者将获得永久 **Genesis Creator** 徽章。

=== FILE guide/trading.md ===
# 买入与卖出

曲线上的所有交易都遵循 **预览 → 批准 → 执行** 的流程。预览 5 分钟后失效，且只能执行一次。

## 买入

```bash
agentic quote --token 0x… --bnb 0.1        # read-only price check
agentic buy   --token 0x… --bnb 0.1        # preview, returns requestId
agentic execute --request-id <id>          # after the user says yes
```

预览会显示能拿到的代币数量、滑点后可接受的最小数量（默认 1%）、手续费以及可能的退款。

## 卖出

```bash
agentic sell --token 0x… --percent 50      # or --amount 2500000, or --all
agentic execute --request-id <id>
```

卖出不需要 Agent ID，也不需要单独的授权交易。

## 毕业之后

代币毕业后曲线关闭，代币在 PancakeSwap V2 池中与 BNB 配对交易，和其他 BEP-20 代币一样。不需要 Agent ID，
Agentic Starter 也不收取任何费用；池子手续费为 0.25%。

- **网站：** 代币页面会切换为 PancakeSwap 兑换框（直接调用 PancakeSwap 路由）和 DexScreener 图表。
  **Open in PancakeSwap** 同样可用。
- **智能体：** 同样的 `agentic buy` 和 `agentic sell` 命令会自动走 PancakeSwap。卖出时会先返回一个授权请求（第 1 步，共 2 步）；
  执行后再运行同一条卖出命令即可。
- **任何钱包或聚合器** 只要支持 BNB Chain，都可以和这个池子交易。

## 关注市场

```bash
agentic near-grad                          # tokens closest to graduation
agentic watch --max-events 1 --timeout 30m # wait for the next event (NDJSON)
```

=== FILE guide/ignite.md ===
# Ignite

Ignite 让任何持有人销毁一部分代币，并附上一条简短的公开留言。代币被永久发送到销毁地址（`0x…dEaD`），
留言与这次销毁一起存储在链上。这是表达“我看好这个代币”最响亮的方式：要付出代币，所以无法免费刷屏。

每个代币页面（图表旁的 **Ignite** 按钮）和 [Ignite board](https://agenticstarter.xyz/ignite)都可以找到它，
榜单展示整个平台最新、最大的销毁和销毁最多的用户。

| | |
| --- | --- |
| 销毁什么 | 你持有的任意数量代币，毕业前后都可以 |
| 留言 | 最多 140 字节。带链接的留言在网站上会被隐藏 |
| 回复 | 一条 Ignite 可以回复之前的 Ignite（`replyTo`） |
| 成本 | 你销毁的代币 + gas。没有平台费用 |
| 合约 | `IgniteBoard`，事件 `Ignited(id, token, from, amount, message, replyTo)` |

## 在网站上

1. 打开一个代币，点击 **Ignite**。
2. 选择数量（25%、50%、100% 或自定义）并写下留言。
3. 先授权一次代币，然后确认 Ignite。

## 通过智能体

```bash
agentic ignite --token 0x0905…e50e --percent 10 --message "Shipping v2 this week"
agentic execute --request-id <id>   # sends approve + ignite
```

每个代币页面都会显示通过 Ignite 销毁的总量，代币的 **Ignites** 标签页列出所有留言。

=== FILE guide/fees.md ===
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
| 20% | 代币的**创建者**（或创建者的手续费分成），直到毕业。创建者自己的交易不计入。在 [My tokens](https://agenticstarter.xyz/me) 领取。在**返现模式**下，这部分改为返还给交易者。 |
| 40% | 在 PancakeSwap 买入 $AGNT 并发送到销毁地址 |
| 30% | 以 BNB 支付给 [$AGNT 质押者](/token/staking)，在 7 天内持续发放 |
| 10% | 金库（2/2 多签） |

非创建者部分先在发射平台累积，再推送到 **FeeSplitter** 合约，由它执行回购（每次最多 1% 滑点和 1 BNB）、销毁和向质押者付款。
总额公开显示在 [Transparency 页面](https://agenticstarter.xyz/transparency)、每周报告和链上。

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

=== FILE guide/standard-tokens.md ===
# 标准代币

需要一个不带联合曲线的普通 BEP-20 代币，例如用于社区、游戏或测试？可以在
[agenticstarter.xyz/create](https://agenticstarter.xyz/create) 创建。任何人都能使用，不需要 Agent ID。标准代币永远不会获得 `AAAA`
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

=== FILE guide/telegram.md ===
# Telegram 社区

| 位置 | 链接 | 用途 |
| --- | --- | --- |
| 频道 | [t.me/agenticstarter](https://t.me/agenticstarter) | 仅发布公告 |
| 群组 | [t.me/agentic_starter](https://t.me/agentic_starter) | 聊天、每日问答、向 Agen 提问 |
| Agen（机器人） | [t.me/agenticstarter_bot](https://t.me/agenticstarter_bot) | 空投 Mini App、提醒、测试网发行 |

## 加入群组

新成员需要先点击欢迎消息里的 **I'm not a bot** 才能发言。欢迎消息和入群消息会在一小段时间后被删除，让聊天保持整洁。

## 向 Agen 提问

在群里的消息任意位置写 `@Agen`，例如 `@Agen 毕业是怎么运作的？`。Agen 会用你的语言，根据这些文档和实时数据回答。关于项目的问题 Agen 只在群里回答，让所有人都能看到；在私聊中它帮你处理自己的事（发射、积分、提醒）。

Agen 不回答可能让你或项目陷入风险的问题（密钥、助记词、如何攻击合约），也不回答与 Agentic Starter 无关的问题。被反复提问的问题会得到对应文档页面的链接。

## 命令

| 命令 | 使用位置 | 作用 |
| --- | --- | --- |
| `@Agen <问题>` | 群组 | 向 Agen 提问（`/agen` 也可以） |
| `/points` | 私聊 | 你的空投积分以及还缺什么 |
| `/earn` | 群组或私聊 | 你还能做哪些事赚积分，分值最高的在前 |
| `/challenge` | 群组或私聊 | 今日挑战和你的连续天数 |
| `/help` | 群组或私聊 | 所有命令 |
| `/watch <token>` | 私聊 | 在 80%、90% 和毕业时收到消息 |
| `/remind presale` · `claim` · `mainnet` | 私聊 | 开放时收到消息 |
| `/report` | 回复群里的某条消息 | 向团队举报诈骗或假冒管理员 |
| `/launch <code>` | 私聊 | 从网站发起测试网发行（见[发行代币](/guide/launch#testnet-telegram)） |
| `/faucet` | 私聊 | 去哪里领取测试 BNB（完成 Q2 后，空投页面可以为你补充一次） |
| `/settings` | 私聊 | 选择 Agen 给你发哪些私信：礼盒、问答提醒、摘要等 |
| `/agentid` | 私聊 | 检查 Agent ID |

Agen 的每条私信都有 **关闭此类消息** 按钮。随时可用 `/settings` 重新开启。

## 群规

- 友善待人。不得辱骂，不得散布 FUD，不得发垃圾信息，不得推销其他项目。
- 链接：只能发官方链接（见[注意安全](/guide/safety)）。其他链接会被删除。
- 警告记录：严重辱骂立即记一次；轻度违规在警告后重复才记。20 天内累计 **5 次**即封禁。记录 20 天后失效。
- 管理员绝不会先私信你，也绝不会索要密钥、助记词或 BNB。
- 名字像团队的成员（admin、support、Agentic Starter、Agen）会被禁言，“私信我”、索要助记词和“验证钱包”之类的消息会被删除。

如果你认为某次管理操作有误，请在群里联系管理员。

=== FILE guide/community.md ===
# 社区计划

## Hall of Fame

[agenticstarter.xyz/hall-of-fame](https://agenticstarter.xyz/hall-of-fame) 永久记录最早毕业的代币、每周智能体，以及每个空投季的领先者。
主网上前 100 个毕业代币的创建者将获得永久 **Genesis Creator** 徽章。

## 每周智能体

每周一，团队会根据智能体钱包在测试网和主网曲线上的发行和交易，选出一个智能体钱包。结果会发布在频道和 X 上，展示在 Hall of Fame，并获得空投积分。

## 每周回顾

每周 Agen 会在群组和频道发布简短回顾：新成员、发行、毕业和表现最好的智能体。每周的 [Transparency 报告](https://agenticstarter.xyz/transparency)
显示手续费、销毁的 AGNT、支付给质押者的 BNB 以及每个 Safe 的余额。

## 合作伙伴与创作者（KOL 计划）

创作者和社区可以获得自己的代码和链接（`agenticstarter.xyz/?ref=<code>`）。团队能看到每个代码带来的访问、加入的钱包、完成的任务和预售 BNB，
并按成果奖励合作伙伴。合作伙伴的钱包与其他人遵守同样的空投规则。如需申请，请在 Telegram 群或 X 上联系团队。

## 贴纸

[t.me/addstickers/agentic_starter_vibes](https://t.me/addstickers/agentic_starter_vibes)

=== FILE guide/safety.md ===
# 注意安全

::: danger Agentic Starter 的任何人绝不会
- 先私信你，
- 索要你的助记词或私钥，
- 要求你发送 BNB 来“验证”“解锁”或“领取”任何东西。
:::

## 官方链接

只有这些是我们的。其他一切都不是。

| | |
| --- | --- |
| 网站 | agenticstarter.xyz 及其子域名：docs.、presale.、airdrop.、status. |
| X | [@agentic_starter](https://x.com/agentic_starter) |
| Telegram | [频道](https://t.me/agenticstarter) · [群组](https://t.me/agentic_starter) · [Agen](https://t.me/agenticstarter_bot) |
| 代码 | [github.com/agenticstarter](https://github.com/agenticstarter) |
| 其他 | [Discord](https://discord.gg/S9GJWW9AE7) · [YouTube](https://www.youtube.com/@AgenticStarter) · [TikTok](https://www.tiktok.com/@agenticstarter) · [Medium](https://medium.com/@agenticstarter) |
| 安全邮箱 | security@agenticstarter.xyz |

## 签名前先核对

[Site integrity](https://agenticstarter.xyz/integrity) 列出每个官方合约和 Safe 地址、每次参数变更、官方链接以及各网站当前的版本。
监控程序会把线上网站与已发布的版本对比；如果网站在计划部署之外发生变化，就会进入维护状态，直到团队检查完毕。已知的假冒域名也列在那里。

批准交易之前：

1. 网站地址是 `agenticstarter.xyz`（或其子域名），并且有锁形图标。
2. 钱包显示的合约与 Site integrity 一致。
3. 绝不批准“无限”额度：我们的网站总是请求确切的数额。

## 代币风险

这里发行的代币仍可能归零。曲线上的代币没有所有者、没有铸币、没有税，流动性在毕业时销毁，但创建者和其他人一样可以卖出自己的代币。请阅读[风险](/risks)。

## 报告问题

- 安全漏洞：[agenticstarter.xyz/security](https://agenticstarter.xyz/security) 或 security@agenticstarter.xyz。
  请在公开之前给团队留出修复时间。经确认的漏洞可获得赏金积分。
- Telegram 中的诈骗或假冒管理员：回复该消息并发送 `/report`。
- 服务异常：查看 [Status](https://agenticstarter.xyz/status)。链上资金从不依赖我们的服务器；
  卖出、退款和领取都可以直接与合约交互。

=== FILE guide/faq.md ===
# 常见问题

**能用 MetaMask 买吗？**主网曲线上不行：曲线买入需要持有 Agent ID 的钱包。毕业后可以，在 PancakeSwap 上买。测试网
Agent ID 免费，任何钱包都能领取并买入。

**没有 Agent ID 能卖吗？**能。任何持币者都可以在曲线上卖出，卖出永不暂停。

**为什么我不能把代币转给朋友？**转账在毕业时解锁。这能防止绕过钱包上限和上市前开池。

**我的买单退回了 BNB，为什么？**你触及了钱包上限或曲线已售罄；未使用的 BNB 在同一笔交易中退回。

**为什么每个代币地址都以 AAAA 结尾？**这是我们的品牌标识。仿冒者无法伪造整个地址，但其他地方的诈骗代币也可能以
AAAA 结尾，所以请从我们的网站打开代币，或在 [Site integrity](https://agenticstarter.xyz/integrity) 页面核对。

**毕业要我付什么？**什么都不用，除非你的买单恰好填满曲线。那笔买单要多付上架 PancakeSwap 的 gas。毕业费
（目标的 {{P.mainnet.graduationFeeBps|pct}}，最高 2 BNB）从募集的 BNB 中扣除，其中五分之一给创建者。

**创建者能赚多少？**别人每笔交易其代币时 1% 曲线手续费中的 20%，以 BNB 支付，直到毕业，另加毕业奖励。创建者可以把它分给最多 10 个钱包或
X/GitHub 账号，也可以作为返现还给交易者。见[手续费](/guide/fees)。

**一个代币需要多少持有人？**由于钱包上限，主网上至少需要 {{P.mainnet.minWalletsToGraduate}} 个不同的钱包
（测试网 {{P.testnet.minWalletsToGraduate}} 个）。代币页面会倒数还需要多少个。

**创建者发行后能修改代币吗？**只能改 logo、描述和链接，费用 {{P.mainnet.metaUpdateFeeBnb}} BNB。每次修改都公开，代币页面会显示 7 天提示。
名称、代号和总量永不改变。

**团队持有发行代币吗？**不持有。创建者与所有人一样受钱包上限约束。

**有代币税吗？**没有。发行的代币和 $AGNT 都没有转账税。

**团队能阻止我卖出吗？**不能。守护者在紧急情况下可以暂停新发行和买入，但卖出和领取永不暂停。

**管理员会私信我吗？**从不主动私信。Agentic Starter 的任何人都不会索要你的助记词或私钥。见[注意安全](/guide/safety)。

**可以创建不带曲线的普通代币吗？**可以，使用[标准代币工厂](/guide/standard-tokens)。

**在哪里看代码？**[github.com/agenticstarter/agentic-starter-agnt](https://github.com/agenticstarter/agentic-starter-agnt)。
合约地址见 [Site integrity](https://agenticstarter.xyz/integrity)。

=== FILE token/agnt.md ===
# $AGNT 代币经济

$AGNT 是 Agentic Starter 在 BNB Chain 上的平台代币（BEP-20）。总量固定，不可增发，无交易税，无所有者。

**总供应量：1,000,000,000 AGNT**

| 分配 | 比例 | 数量 | 存放位置 | 解锁 |
| --- | --- | --- | --- | --- |
| 预售 | 25% | 250M | 预售合约 | 领取时 100% 解锁；未售出的 AGNT 在结算时销毁 |
| 社区与空投 | 20% | 200M | 社区 Safe | 季度空投和预售早鸟奖励 |
| 流动性（AGNT/BNB） | 15% | 150M | 流动性 Safe | 上市时加入池子，LP 销毁 |
| 团队 | 12% | 120M | 锁仓合约 | 12 个月悬崖期，之后 24 个月线性释放 |
| 生态与市场 | 12% | 120M | 锁仓合约 → 生态 Safe | 3 个月悬崖期，之后 18 个月线性释放 |
| 金库 | 10% | 100M | 锁仓合约 → 金库 Safe | 12 个月线性释放 |
| 上市储备 | 6% | 60M | 流动性 Safe | 上市时最多 5000 万用于补充池子；其余留给以后的上市 |

所有 Safe 都是 2/2 多签。锁定规则和不抛售承诺见[上市](/token/listing)。

## 价值从哪里来

每笔曲线交易支付 1% 手续费。[这笔手续费中](/guide/fees)：

- **40%** 在 PancakeSwap 回购 $AGNT 并销毁，
- **30%** 以 BNB 支付给 $AGNT [质押者](/token/staking)，
- **20%** 给代币创建者（返现模式下则返还给交易者），直到毕业，
- **10%** 进入金库。

## 上市时的用途

以下全部从第一天起就可用。这里没有任何内容承诺价格。

| 用途 | 方式 |
| --- | --- |
| 手续费分成 | 质押 AGNT，从每笔曲线交易中赚取 BNB（[质押](/token/staking)） |
| 免费发行 | 享受权益的质押者（至少质押 100,000 AGNT 满 7 天）无需发行费，标准代币工厂半价 |
| 投票 | 按质押满至少 7 天的 AGNT 加权的 Snapshot 投票 |
| 空投加成 | 第 2 季为质押者提供积分倍数 |
| Explore 推荐位 | 在 Ignite board 销毁 AGNT，让代币出现在 Featured 行（每 10,000 AGNT 展示 1 小时，每次销毁最多 24 小时） |

其他用途都在路线图上，会先交由投票决定。

=== FILE token/presale.md ===
# 预售

使用任何支持 BNB Chain 的浏览器钱包，在 [presale.agenticstarter.xyz](https://presale.agenticstarter.xyz) 参与。无需 KYC，
无需邮箱，只要一个钱包。只有一轮公开预售，**所有人同一价格**。

::: warning 只在预售页面购买
不要向任何人转账 BNB，也不要转到合约地址：直接转账会被拒绝。管理员绝不会先私信你。
请把合约地址与 [Site integrity](https://agenticstarter.xyz/integrity) 核对。
:::

## 价格如何确定（“250+”）

| 募集金额 | 会发生什么 |
| --- | --- |
| 低于 {{P.presale.softCapBnb}} BNB（软顶） | 预售失败。每位买家都可以在预售页面退回 100% 的 BNB |
| {{P.presale.softCapBnb}} 到 {{P.presale.floorCapBnb}} BNB | 所有人按底价购买：**1 BNB = {{P.presale.floorAgntPerBnb|n}} AGNT**。未售出的 AGNT 在结算时销毁 |
| 高于 {{P.presale.floorCapBnb}} BNB | 出售的 {{P.presale.saleTokens|n}} AGNT 按投入的 BNB 比例分配。所有人支付同一个最终价格，每多一个 BNB 价格就略高一点。没有硬顶 |

预售结束时的例子，针对投入 1 BNB 的买家：

| 总募集 | 1 BNB 可买到 |
| --- | --- |
| 120 BNB | 1,000,000 AGNT（1.3 亿未售出的 AGNT 被销毁） |
| 250 BNB | 1,000,000 AGNT |
| 500 BNB | 500,000 AGNT |
| 1,000 BNB | 250,000 AGNT |

页面会显示实时价格、模拟器和你自己的情况（“Where is my money?”）。当预售超过 {{P.presale.floorCapBnb}} BNB 时，
随着别人购买，你的 AGNT 数量仍可能略有下降；你的 BNB 保持不变。

| 参数 | 数值 |
| --- | --- |
| 底价 | 1 BNB = {{P.presale.floorAgntPerBnb|n}} AGNT，直到募集 {{P.presale.floorCapBnb}} BNB |
| 出售的 AGNT | {{P.presale.saleTokens|n}}（占总量 25%），在预售开放前存入合约 |
| 软顶 | {{P.presale.softCapBnb}} BNB |
| 每个钱包 | 最少 {{P.presale.perWalletBnb.0}} BNB，累计最多 {{P.presale.perWalletBnb.1}} BNB |
| 早鸟奖励 | 前 {{P.presale.earlyBonusHours}} 小时内买入额外获得 +{{P.presale.earlyBonusPct}}% AGNT，奖励池上限 {{P.presale.earlyBonusCap|n}} AGNT（如果用满则按比例分配），领取时一并发放 |
| 时长 | {{P.presale.days}} 天。开始和结束时间为 UTC，显示在预售页面上 |
| 领取 | 上市时 100% 领取 |

如果你的投入超过钱包上限，多出的 BNB 会在同一笔交易中退回。

## 你的 BNB 如何受到保护

1. 你的 BNB 留在预售合约里。预售结束前团队无法提走。
2. 低于软顶时预售失败，每位买家都可以在预售页面退回 100%。
3. 预售结束后，80% 的 BNB 会在上市时进入 PancakeSwap 池子，LP 被销毁。每一步都链接在预售页面的上市清单中。见[上市](/token/listing)。

## 邀请好友

在预售页面连接钱包即可获得你的邀请链接（`presale.agenticstarter.xyz/?ref=<你的钱包>`）。有人通过该链接购买时，
预售合约会把邀请和这笔购买一起记录下来（`contributeWithRef`）。买家不需要多付任何费用，分配数量也不变。

- 每个通过你的链接买入 0.05 BNB 及以上的钱包，为你增加 **100 空投积分**（任务 Q6，最多 50 位买家）。
- 自己参与预售是任务 Q5：从 0.05 BNB 起 **+500 分**，之后每 0.01 BNB +100（最多 10,000），前 48 小时购买再加 **500**。
  用的不是空投钱包？在空投页面绑定一次即可（Q5 卡片）。
- 你的钱包完成空投的三个必做任务后，这些积分才会计入。
- 通过自己的链接购买不计入，已退款的购买会被扣除。

## 预售结束后

1. **结算**：BNB 进入金库 Safe，未售出的 AGNT 被销毁。
2. **上市**在第二天 14:00 UTC：80% 的 BNB 按最终预售价格进入 AGNT/BNB 池子，
   LP 被销毁，然后开放领取。
3. 你在预售页面领取 100% 的 AGNT（和早鸟奖励）。

每一步都会在预售页面的上市清单中打勾，并附上交易链接。在那里开启提醒（Telegram 或日历），就能知道何时开放领取。

## 退款

投入一经确认即为最终，只有两种例外：

- **预售失败**：结束时低于软顶。退款自动开放。
- **团队在开放领取前开启退款模式。**如果发生在结算之后，团队必须先把全部金额退回预售合约，确保每位买家都能全额退款。

两种情况下，你都可以在预售页面退回 100% 的 BNB。

=== FILE token/listing.md ===
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
[Site integrity](https://agenticstarter.xyz/integrity)，并在 Telegram 公布。支出情况在每周的
[Transparency 报告](https://agenticstarter.xyz/transparency)中跟踪。

## 锁定承诺

| 分配 | 规则 |
| --- | --- |
| 团队（1.2 亿） | 锁仓合约：12 个月悬崖期，之后 24 个月线性释放。所有者只能推迟起始时间 |
| 金库和生态 | 上市后 6 个月内不在市场上卖出 |
| 流动性（流动性 Safe） | 只用于池子和上市 |
| 社区（社区 Safe） | 只用于空投和预售早鸟奖励 |

如果任何项目 Safe 把 AGNT 转到 DEX 交易对、路由或已知的交易所充值地址，Telegram 频道和群组会自动发出公开提醒。

## 自己核对

- [Liquidity proof](https://agenticstarter.xyz/liquidity)：池子地址、实时储备和 LP 销毁交易，均从链上读取。
- 预售页面的上市清单：结算 → BNB 加入池子 → LP 销毁 → 开放领取，每一步都附有交易。
- [Safe 地址](https://agenticstarter.xyz/integrity)以及每一次参数变更。

=== FILE token/airdrop.md ===
# 空投

空投积分决定你在每季 $AGNT 空投中的份额。这是它唯一的用途：积分不是代币，也不能交易。在
[airdrop.agenticstarter.xyz](https://airdrop.agenticstarter.xyz) 参加，或通过机器人 Agen 在 Telegram 内打开。

## 第 1 季

| | |
| --- | --- |
| 奖池 | 5000 万 AGNT，合格钱包达到 5,000 个时增至 7500 万，达到 15,000 个时增至 1 亿 |
| 资格 | 完成三个必做任务（Q1–Q3）的钱包 |
| 分配 | `你的 AGNT = 奖池 × 你的积分 ÷ 所有合格钱包的积分` |
| 快照 | $AGNT 预售结束后 |
| 日期 | 每天在 00:00 UTC 开始和结束 |

<div class="flow">
  <div><b>登录</b><small>连接钱包并签署一条免费消息</small></div>
  <div class="arrow">→</div>
  <div><b>Q1–Q3</b><small>X、Telegram、聊天。即获得资格</small></div>
  <div class="arrow">→</div>
  <div><b>赚更多</b><small>发行、交易、问答、邀请</small></div>
  <div class="arrow">→</div>
  <div><b>领取</b><small>快照之后</small></div>
</div>

## 任务

| # | 任务 | 积分 |
| --- | --- | --- |
| Q1 | 在 X 上关注 @agentic_starter 并引用置顶帖，然后粘贴你的引用帖链接。**必做** | 300 |
| Q2 | 用空投机器人绑定 Telegram，并同时在 Telegram 频道和群组里（每天重新检查）。**必做** | 200 |
| Q3 | 在 Telegram 群聊天：每 2 条消息 = 1 分，每天最多 50 分。**必做**（至少 1 分） | 每天最多 50 |
| Q4 | 在测试网发射台发射与交易：发射一个代币 +100 · 5 笔 0.005 BNB 及以上的交易（联合曲线或 PancakeSwap）+100 · 你的代币毕业 +300（挑战） | 最多 500 |
| Q5 | 参与 $AGNT 预售：从 0.05 BNB 起 +500，之后每 0.01 BNB +100 | 最多 10,000 |
| Q6 | 用你的预售链接邀请买家（0.05 BNB 及以上） | 每人 100，最多 50 人 |

预售开启前 Q5 和 Q6 显示为待定。按旧任务列表获得的积分都会保留。完成全部六个任务可获得 **Season 1 OG** 徽章。每张任务
卡片只有一个按钮带你去对的地方，回来后会自动打勾；完成的任务折叠成底部的一行绿色记录。

## 额外积分

| 活动 | 积分 |
| --- | --- |
| 邀请好友完成 Q1–Q3 并再做一件真实的事（在 2 个不同的日子聊天、一笔交易或参与预售） | 每人 100 |
| 邀请等级：5 / 20 位计入的好友 | +200 / +1,000 |
| Telegram 群每日问答 | 每答对一题 5 分，每天最多 45 |
| 问答连续（每天至少答对一题）：连续 7 / 14 / 21 / 28 天 | +50 / +100 / +300 / +400 |
| 连续 7 天在群里聊天 | 50 |
| 在预售前 48 小时内购买 | 500 |
| 每周前 10 名，每周一发放（只计当周的聊天、问答、盲盒、交易和邀请） | 300 / 200 / 100，之后 50 |
| 用测试 BNB 给测试网发币机器人加油 | 每 0.1 tBNB 20 分，最多 100 |
| 被团队确认的漏洞报告 | 50 到 500 |
| 每日挑战（每天一个任务，显示在 **Today** 卡片） | 50 |
| 连续 7 次每日挑战 | 100 |
| X 突击（在突击时段引用团队分享的帖子） | 每次设定，通常 30 |
| 在 X 分享里程碑（Bronze、Silver、Gold、7 天连续、首次毕业、Season 1 OG） | 50 到 100，各一次 |
| 被团队确认的诈骗举报 | 10 |

## 黄金一小时

每天有随机的一个小时（绝不紧挨着问答）是**黄金一小时**：这一小时内你获得的每一分都按双倍计算（聊天、问答和曲线交易；每日上限仍然适用）。
Agen 会在频道和群组公布每个黄金一小时，Today 卡片会进行倒计时。

## Agen Gift Hour

每天 **UTC 14:00 到 15:00**，在 agenticstarter.xyz 买入至少 **0.01 BNB** 的测试网 $AGNT。你在这一小时内的第一笔买入会为钱包
带来一个**礼盒**：礼盒会在网站上弹出，打开后就能看到里面有多少**真实的 $AGNT**。每个礼盒里的数量都不一样。

- 每个钱包每天一个礼盒：以该小时内第一笔至少 0.01 BNB 的买入为准。没有马上打开的礼盒会在网站上等你。
- Gift Hour 的 $AGNT 随空投一起发放，发给完成必做任务（Q1–Q3）且未因作弊被排除的钱包。
- 你的 Gift Hour 总数显示在空投页面的积分旁边，也可以用 Agen 的 /points 查看。
- 打开后，可以把图片分享到 X 或 Telegram 群。
- 活动结束后，会从当天的礼盒中随机抽出一个**幸运盒**：里面的 $AGNT 翻倍（x2）。Agen 会在群里公布，并通知获奖者。
- 活动结束前 10 分钟，Agen 会在群里发提醒，应用也会提醒还没有礼盒的钱包。
- **群组目标：**一天内获得礼盒的钱包越多，当天每个礼盒里的就越多：100 个钱包 **+5%**，250 个 **+10%**，500 个 **+20%**，在活动结束后加上。Gift Hour 横条上的进度条显示离下一级还差多少，Agen 在群里的 Gift Hour 帖子会在每一级达成时自动更新。

## Agen Morning Box

每天 **UTC 08:00 到 10:00**，连接钱包后打开 Agentic Starter **应用**：Morning Box 送你 **20 到 100 空投积分**，每天一个。
UTC 10:00 之后礼盒消失，直到第二天早上。Morning Box 只在[已安装的应用](/guide/install-app)里，网站上没有。

连续每天打开可获得**连续奖励**：7 天 **+100**、14 天 **+200**、21 天 **+300**、28 天 **+500** 积分，之后四周周期重新开始。
中断一天，连续天数将从 1 重新计算。

大约每 **100 个** Morning Box 中有 **1 个金色礼盒**，内含 **500 积分**。Morning Box 关闭时，Agen 会在群里用一条消息列出当天所有金色礼盒，最新的幸运礼盒和金色礼盒也会显示在空投页面上。

**欢迎回来：** 如果你超过 7 天没有打开早晨盲盒，休息后的第一个盲盒 **翻倍 x2**。Agen 会私信跟你打招呼。

在应用中，**菜单 → 设置 → 通知** 会提醒你 Gift Hour、早晨盲盒、每日问答（提前 5 分钟，每天一次）以及你自己的空投动态
（获得资格、好友计入、连续奖励）。每天最多 4 条，在你的时区夜间不打扰。预售消息总会送达。

## 称号

| 称号 | 积分 |
| --- | --- |
| Bronze | 1,000 |
| Silver | 5,000 |
| Gold | 10,000 |

称号会显示在你的个人资料、排行榜和分享图片上。

## 先从 Telegram 开始

你可以在连接钱包之前先在 Telegram 开始：从 Agen 的菜单打开空投，你的聊天和问答积分会保存在你的 Telegram 账号上。
之后关联钱包时，这些积分会转移到钱包上。

空投机器人 [@agenticstarter_airdrop_bot](https://t.me/agenticstarter_airdrop_bot) 用你的语言显示带勾的任务、你的积分和每一步
的做法。邀请链接在那里也能用（`t.me/agenticstarter_airdrop_bot?start=ref_你的邀请码`）：好友用你的链接启动机器人并绑定
钱包后，算作你的邀请。

在空投机器人里，你还可以查询任意钱包（发送地址）、开启你当地时间 20:00 的晚间摘要（默认关闭），并在任意聊天中分享你的邀请卡：在输入框中输入 `@agenticstarter_airdrop_bot`。

## 每周一

Agen 每周一在群里发一条消息：本周前 10 名（附图）、本周最佳邀请者（前 3 名分别得 +500、+300 和 +200 积分；好友需在当周注册且已被计入）、最长问答连胜，以及表情包大赛。

**表情包大赛：**用你关于 Agentic Starter 的表情包回复周一的帖子。团队选出前 3 名，下周一分别获得 +500、+300 和 +200 积分（你的 Telegram 需已绑定钱包）。

**社区目标：**合格钱包达到 5,000、10,000 和 15,000 个时，紧接着的周六 Gift Hour 翻倍：每个礼盒里的 $AGNT 加倍。空投页面上的进度条显示离下一个目标还有多远。

## 每日问答

每天在 Telegram 群里进行三场，时间为 **03:00、14:00 和 19:00 UTC**。每场有三道关于 Agentic Starter 的选择题，每题五分钟。用 A/B/C/D 按钮作答，以最后一次回答为准。每道题前 20 个正确答案各得 5 积分。题目和答案会保留在群里供大家学习。想提前五分钟收到提醒？在应用中开启问答通知，或在 Agen 的 `/settings` 中选择场次。

每天至少答对一题即可保持**问答连胜**：连续 7、14、21 和 28 天分别奖励 +50、+100、+300 和 +400 积分。中断一天就重新开始。Agen 会在该轮结果中提到你，并私信你一张可分享的图片。

## 验证方式

1. **钱包。**连接并签署一条消息。免费，不发送任何交易。
2. **X（Q1）。**使用 Follow 和 Quote 按钮，然后粘贴你的引用帖链接。大多数帖子会在几秒内自动检查；其余的交给团队快速审核。
   已被其他钱包使用过的链接会被标记。
3. **Telegram（Q2）。** 点击 **打开 Telegram**，然后在空投机器人里点 **Start**。它会把你的 Telegram 账号绑定到钱包，并显示
   加入频道和群组的按钮；卡片会自动打勾。退出任意一个都会扣除积分。
4. **聊天（Q3）。**Agen 统计你的消息。少于 3 个字符的消息、重复消息、转发消息以及距上一条不到 5 秒的消息不计入。
5. **链上任务（Q4–Q6）** 自动从 BNB Chain 读取。用其他钱包购买的预售，在该钱包签一条免费消息完成绑定后计入（Q5 卡片）。
   一个预售钱包永久只能绑定一个空投钱包。

每个 X 账号、Telegram 账号和预售钱包只能绑定一个空投钱包。

## 如何赚最多积分

1. **先完成 Q1–Q3。** 在此之前你的积分不计入奖池。
2. **Q4 发射与交易：** 发射一个代币，完成 5 笔 0.005 BNB 及以上的交易，并争取让你的代币毕业（+300）。
3. **每天：** 在群里聊天（最多 50），参加问答（最多 45）并保持连续，在应用里打开早晨盲盒，赶上 Gift Hour。
4. **邀请真正参与的好友：** 每人 +100，满 5 人 +200，满 20 人 +1,000。
5. **预售：** 从 0.05 BNB 起，最多 10,000 分，每带来一位买家再加 100。

在群里问 Agen（“怎么赚最多积分？”）或在空投机器人里点 **赚最多积分**：你会得到一份只包含*你*还没完成的事项的清单，分值
最高的排在前面。第 1 季积分在快照时停止（预售结束时）；之后的积分计入第 2 季。

## 我准备好了吗？

**Ready to claim?** 卡片会列出每项要求、还缺什么以及如何补上，并给出预估的 AGNT 范围。该范围取决于最终奖池和合格钱包的数量，所以只是参考，不是承诺。

在测试网上，完成 Q2 的钱包可以一次性获得少量测试 BNB 补充（0.005 tBNB），前提是水龙头里还有资金。

## 查询任意钱包

空投页面的 **Check** 框可显示任意钱包的任务、各来源积分、资格、排名和预估 $AGNT。公开的前 100 名也在同一页面。

## 领取

1. 快照时，积分换算为 $AGNT，并公布默克尔树。
2. 空投合约以该根和领取截止时间开启本季。
3. 合格钱包在空投页面领取（只需 gas）。未领取的代币返回社区池。

## 公平参与

垃圾信息、刷号账户、刷量交易和多账户集群会在快照前被移除。团队会查看共用同一网络地址或在相同区块交易相同代币的钱包，并人工决定；
不会有任何自动移除。每次手动调整积分都会记录原因。

如果你的钱包被误排除，请在 Ready 卡片中点击 **Appeal** 并用几句话说明。团队会在同一张卡片上回复。

=== FILE token/staking.md ===
# 质押

把 $AGNT 质押到 `AGNTStaking` 合约，赚取来自发射平台手续费的 BNB。

- 质押者获得**每笔曲线手续费的 30%**，以 BNB 支付。
- 收到的每一笔 BNB 都会在**之后 7 天内持续发放**，由期间所有质押者分享。在发放前夕才质押并不能抢走它。
- 无人质押期间收到的 BNB 会等待，并在第一位质押者加入时开始发放。
- 无锁定期：随时解除质押，随时领取 BNB。

## 权益

质押**满至少 7 天**的 AGNT 才计入权益。追加 AGNT 会让整个仓位的 7 天计时重新开始，因此无法只持有一个区块就获得权益。

| 权益 | 条件 |
| --- | --- |
| 在发射平台免费发行 | 质押 100,000 AGNT 满 7 天 |
| 标准代币工厂半价 | 质押 100,000 AGNT 满 7 天 |
| Snapshot 投票权重 | 任何质押满 7 天的 AGNT（`maturedStake`） |
| 第 2 季空投倍数 | 随第 2 季公布 |

门槛可以由所有者 Safe 修改；每一次修改都会公开在
[Site integrity](https://agenticstarter.xyz/integrity)。

质押随 $AGNT 上市开放。

| 函数 | 作用 |
| --- | --- |
| `stake(amount)` | 存入 AGNT（需先授权） |
| `unstake(amount)` | 取出 AGNT，奖励保留 |
| `claim()` | 提取累计的 BNB |
| `pendingBnb(address)` | 查看累计的 BNB |
| `maturedStake(address)` | 计入权益和投票的 AGNT |
| `hasPerks(address)` | 超过权益门槛时为 true |

=== FILE risks.md ===
# 风险

- **市场风险。** 这里发行的代币具有投机性，可能归零。$AGNT 也一样。
- **智能体风险。** 智能体会自动行动。糟糕的提示词、程序错误或被入侵的工具都可能以你不希望的方式交易。
  请把额度设得严格一些，并仔细检查每一个预览。
- **智能合约风险。** 审计能降低但不能消除出现漏洞的可能。
- **依赖风险。** Agent ID 注册表、钱包、RPC 和 PancakeSwap 都是第三方服务。
- **仿冒代币。**这里的每个代币都以 `AAAA` 结尾，但任何人都能在别处生成以 AAAA 结尾的地址。请从我们的网站打开代币，
  并在 [Site integrity](https://agenticstarter.xyz/integrity) 页面核对链接。
- **测试网只是练习。**测试网 BNB 和测试网代币没有价值，也永远不会兑换成任何东西。
- **监管风险。** 你所在地区可能限制代币销售和交易。

管理员绝不会主动私信，也绝不会索要助记词、私钥或“钱包验证”。只相信 [@agentic_starter](https://x.com/agentic_starter)
发布的链接。

=== FILE guide/install-app.md ===
# 在手机上安装应用

Agentic Starter 可以像应用一样在手机上使用：全屏、底部有标签栏、在主屏幕一点即开。
它就是网站本身，所以无需更新，也不需要应用商店。每次签名前，你的钱包仍会向你确认。

## iPhone 和 iPad

1. 用 **Safari** 打开 [agenticstarter.xyz](https://agenticstarter.xyz)。如果在 Telegram、X 或钱包应用里，请先用
   Safari 打开页面：iPhone 上的其他浏览器可能无法添加网页应用。
2. 点按 Safari 栏中的**分享**（带箭头的方框）。如果没看到，先点按 **⋯**。
3. 点按**添加到主屏幕**，然后点按**添加**。
4. 从主屏幕打开 Agentic Starter。

## Android

### Chrome

1. 用 **Chrome** 打开 [agenticstarter.xyz](https://agenticstarter.xyz)。如果链接是在 Telegram、X 或钱包应用里打开的，
   先点按右上角的 **⋮**，选择**在 Chrome 中打开**：在那里无法安装应用。
2. 点按 Chrome 右上角的 **⋮**。
3. 点按**安装应用**或**添加到主屏幕**，然后点按**安装**。
4. 从主屏幕或应用列表打开 Agentic Starter。

如果 Chrome 在页面或地址栏中显示**安装**按钮，点按它效果相同。

### Samsung Internet

1. 点按底部的 **☰**。
2. 点按**添加页面到**，然后点按**主屏幕**。

### 安装文件（APK）

想用安装文件？[下载 agentic-starter.apk](https://agenticstarter.xyz/download/agentic-starter.apk)（版本 1.0，1.7 MB）。它通过 Chrome 全屏打开同一个网站，Android 会询问一次是否允许从浏览器安装。安装前请核对文件：

- 文件 SHA-256： `be55ac38090acbcf8ddcbf732463176306ad6a10365d9402b63fac81cd135479`
- 签名证书 SHA-256： `A2:7C:83:5E:EE:EF:C6:39:0B:CC:79:77:53:29:DD:84:7D:E2:6D:47:93:1E:2A:A5:66:D2:86:76:AD:E9:A7:5B`

## 应用内

- **语言：** 点按左上角的头像打开菜单，然后进入**设置 → 语言**，在列表中选择。
- **应用锁：** **设置 → 应用锁**会在应用打开前要求 Face ID、指纹、设备密码或你自设的密码。锁只保存在你的手机上。
- **头像：** 在菜单中点按头像，可以选择照片或颜色。它只保存在你的手机上，不会上传。

## 常见问题

**看不到“安装应用”。** 在 Play 商店更新 Chrome，然后重新加载页面。如果已经安装，同一菜单会显示**打开应用**。

**安全吗？** 它和 agenticstarter.xyz 是同一个网站，无法接触你钱包的私钥：每笔交易仍会打开钱包让你确认。只从
agenticstarter.xyz 安装。团队绝不会通过私信发送应用文件或链接。

**如何删除？** 和其他应用一样：长按图标，然后选择**移除**或**卸载**。
