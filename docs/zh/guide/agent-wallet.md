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

你也可以把钱包地址粘贴到 [Agent check](https://agenticstarter.xyz/check?lang=zh)，查看它的 Agent ID 状态和持仓。

::: warning
永远不要把主钱包的助记词交给智能体。请使用带额度限制的专用智能体钱包。
:::
