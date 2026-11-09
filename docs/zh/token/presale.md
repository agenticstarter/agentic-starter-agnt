# 预售

使用任何支持 BNB Chain 的浏览器钱包，在 [presale.agenticstarter.xyz](https://presale.agenticstarter.xyz?lang=zh) 参与。无需 KYC，
无需邮箱，只要一个钱包。只有一轮公开预售，**所有人同一价格**。

::: warning 只在预售页面购买
不要向任何人转账 BNB，也不要转到合约地址：直接转账会被拒绝。管理员绝不会先私信你。
请把合约地址与 [Site integrity](https://agenticstarter.xyz/integrity?lang=zh) 核对。
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
3. 预售结束后，80% 的 BNB 会在上市时进入 PancakeSwap 池子，LP 被销毁。每一步都链接在预售页面的上市清单中。见[上市](/zh/token/listing)。

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
