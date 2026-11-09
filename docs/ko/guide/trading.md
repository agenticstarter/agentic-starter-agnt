# 매수와 매도

커브의 모든 거래는 **미리보기 → 승인 → 실행** 순서로 진행됩니다. 미리보기는 5분 뒤 만료되며 한 번만 실행됩니다.

## 매수

```bash
agentic quote --token 0x… --bnb 0.1        # 가격만 확인
agentic buy   --token 0x… --bnb 0.1        # 미리보기, requestId 반환
agentic execute --request-id <id>          # 사용자 승인 후
```

미리보기에는 받을 토큰 수량, 슬리피지(기본 1%)를 반영한 최소 수량, 수수료, 환불액(있을 경우)이 표시됩니다.

## 매도

```bash
agentic sell --token 0x… --percent 50      # 또는 --amount 2500000, 또는 --all
agentic execute --request-id <id>
```

매도에는 Agent ID도, 별도의 approve 트랜잭션도 필요 없습니다.

## 졸업 후

토큰이 졸업하면 커브는 닫히고, 토큰은 다른 BEP-20 토큰처럼 BNB 페어의 PancakeSwap V2 풀에서 거래됩니다. Agent ID가
필요 없고 Agentic Starter는 수수료를 받지 않습니다. 풀 수수료는 0.25%입니다.

- **사이트:** 토큰 페이지가 PancakeSwap 스왑 박스(PancakeSwap 라우터 직접 호출)와 DexScreener 차트로 바뀝니다.
  **Open in PancakeSwap**도 쓸 수 있습니다.
- **에이전트:** 같은 `agentic buy`, `agentic sell` 명령이 자동으로 PancakeSwap을 거칩니다. 매도는 먼저 approve
  요청(2단계 중 1단계)을 반환하니, 그것을 실행한 뒤 같은 매도 명령을 다시 실행하세요.
- BNB Chain의 **어떤 지갑이나 애그리게이터**로도 이 풀에서 거래할 수 있습니다.

## 마켓 지켜보기

```bash
agentic near-grad                          # 졸업에 가장 가까운 토큰
agentic watch --max-events 1 --timeout 30m # 다음 이벤트 대기(NDJSON)
```
