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
