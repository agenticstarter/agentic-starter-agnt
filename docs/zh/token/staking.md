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
[Site integrity](https://agenticstarter.xyz/integrity?lang=zh)。

质押随 $AGNT 上市开放。

| 函数 | 作用 |
| --- | --- |
| `stake(amount)` | 存入 AGNT（需先授权） |
| `unstake(amount)` | 取出 AGNT，奖励保留 |
| `claim()` | 提取累计的 BNB |
| `pendingBnb(address)` | 查看累计的 BNB |
| `maturedStake(address)` | 计入权益和投票的 AGNT |
| `hasPerks(address)` | 超过权益门槛时为 true |
