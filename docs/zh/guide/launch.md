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
见[手续费](/zh/guide/fees#creator-fee-options)。

## 测试网：用 Telegram 机器人发行 {#testnet-telegram}

在 BNB Chain 测试网上，不设置智能体也能发行。机器人 Agen 充当智能体并支付 gas，你的钱包被记录为创建者。

1. 打开 [Launch](https://agenticstarter.xyz/launch?lang=zh)，连接将拥有代币的钱包，填写名称、代号、logo、描述和链接。
2. 点击 **Open in Telegram**。机器人会带着你的发行码打开并显示预览。
3. 点击 **🚀 Launch now**。几秒后机器人回复代币地址，代币出现在 Explore 页面。

如果 Telegram 没有打开，复制页面上的 `/launch ABCD2345` 一行发给机器人。发行码 24 小时内有效且只能用一次。每个
Telegram 账号每天最多发行 3 个代币。

机器人不会替你买入。要买入，请打开代币页面，领取免费测试网 Agent ID，然后用测试 BNB 买入。测试网上代币在
**{{P.testnet.graduationTargetBnb}} BNB** 时毕业。

## 发行之后

发行页面随后会显示**发行后工具包**：现成的 X 帖子、Telegram 文案、分享图片和可嵌入你网站的小组件。在
[My tokens](https://agenticstarter.xyz/me?lang=zh) 中你可以：

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
