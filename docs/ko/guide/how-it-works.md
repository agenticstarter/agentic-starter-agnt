# 작동 방식

모든 토큰은 같은 길을 갑니다: **런치 → 본딩 커브 → PancakeSwap 졸업**.

<div class="flow">
  <div><b>런치</b><small>토큰 10억 개 생성. 8억 개는 커브로, 2억 개는 유동성용으로 보관.</small></div>
  <div class="arrow">→</div>
  <div><b>본딩 커브</b><small>에이전트가 매수, 누구나 매도. 매수할 때마다 가격 상승. 거래당 1% 수수료.</small></div>
  <div class="arrow">→</div>
  <div><b>졸업</b><small>{{P.mainnet.graduationTargetBnb}} BNB에서 PancakeSwap 상장. LP 소각, 커브 종료.</small></div>
</div>

## 1. 에이전트 지갑 연결

에이전트는 당신이 정한 일일 한도가 있는 에이전트 지갑으로 행동합니다. 커브에서 매수하려면 지갑에 **Agent ID**가 필요합니다.
[에이전트 지갑 설정](/ko/guide/agent-wallet)을 참고하세요. 테스트넷에서는 어떤 지갑이든 무료로 Agent ID를 받을 수 있습니다.

## 2. 본딩 커브에서 런치

런치하면 총 공급량이 **1,000,000,000**으로 고정된 토큰이 만들어집니다:

| 구분 | 수량 | 용도 |
| --- | --- | --- |
| 커브 | 800,000,000 | 본딩 커브를 따라 판매 |
| 유동성 | 200,000,000 | 졸업 시 PancakeSwap에 추가 |

토큰 주소는 항상 **`AAAA`**로 끝납니다. 이는 브랜드 표식이지 보증이 아니므로 토큰은 항상
[agenticstarter.xyz](https://agenticstarter.xyz?lang=ko)에서 열거나 [Site integrity](https://agenticstarter.xyz/integrity?lang=ko)에서
확인하세요.

가격은 상수곱 공식을 따릅니다. 매수하면 오르고 매도하면 내립니다. 창작자는 런치 트랜잭션에서 첫 매수를 할 수 있으며, 모두와
같은 지갑 한도가 적용됩니다.

커브에 있는 동안의 규칙:

- **매수:** Agent ID 보유자만, 매수마다 온체인 확인.
- **매도:** 모든 보유자, approve 트랜잭션 불필요. 매도는 절대 중지되지 않습니다.
- **지갑 한도:** 지갑당 공급량의 {{P.mainnet.walletCapBps|pct}}(테스트넷 {{P.testnet.walletCapBps|pct}}). 한도를 넘는
  매수는 잘리고 남은 BNB는 같은 트랜잭션에서 환불됩니다. 이 한도 때문에 메인넷에서 졸업하려면 토큰마다 최소
  **{{P.mainnet.minWalletsToGraduate}}개의 서로 다른 지갑**이 필요합니다(테스트넷 {{P.testnet.minWalletsToGraduate}}개).
  토큰 페이지에 몇 명의 홀더가 더 필요한지 표시됩니다.
- **수수료:** 매수·매도 각 1%. [수수료](/ko/guide/fees) 참고.
- **전송:** 잠김. 토큰은 커브와 트레이더 사이에서만 움직이므로 아무도 한도를 피하거나 풀을 먼저 열 수 없습니다.

각 토큰은 런치 당시의 설정(졸업 목표, 지갑 한도, 졸업 수수료와 보너스)을 유지합니다. 팀이 나중에 설정을 바꾸면 새 토큰에만
적용됩니다.

## 3. PancakeSwap으로 졸업

커브가 목표(메인넷 **{{P.mainnet.graduationTargetBnb}} BNB**, 테스트넷 **{{P.testnet.graduationTargetBnb}} BNB**)에
도달하면 졸업이 진행됩니다.

1. 전송을 영구히 해제하고;
2. 졸업 수수료를 받습니다: 목표의 {{P.mainnet.graduationFeeBps|pct}}, 최대 2 BNB(메인넷 목표에서
   {{P.mainnet.graduationFeeBnb}} BNB). 그중 5분의 1({{P.mainnet.creatorBonusBps|pct}})은 **창작자의 졸업 보너스**이고,
   나머지는 트레저리로 갑니다;
3. 유동성 토큰 2억 개와 남은 BNB를 PancakeSwap V2에 추가하고, LP를 곧바로 소각 주소로 발행해 유동성을 영구히 잠급니다.

커브를 채우는 매수가 졸업을 실행합니다. 그렇지 않은 경우(예: 토큰에 최소 커브 시간이 있을 때) 목표에 도달한 뒤 누구나
`graduate(token)`을 호출할 수 있습니다. 상장 가격은 커브의 마지막 가격과 같아서 가격 점프가 없습니다. 졸업 후에는 플랫폼
수수료가 없고 Agent ID 유무와 상관없이 누구나 PancakeSwap에서 거래할 수 있습니다.

::: tip 커브를 채우는 매수가 상장 비용을 냅니다
마지막 매수가 마이그레이션을 실행하므로 가스가 더 듭니다. CLI는 이를 `nearGraduation`으로 표시합니다.
:::

## 창작자 배분(테스트넷)

테스트넷에서 창작자는 지갑 한도와 별개로 공급량의 {{P.testnet.creatorAllocBps|pct}}를 런치 가격에 받습니다. 이 물량은
런치패드가 보관하고, 졸업 전에는 매도할 수 없으며, 졸업 후 {{P.testnet.creatorAllocUnlockDays}}일에 걸쳐 선형으로
언락됩니다. 메인넷에서는 현재 {{P.mainnet.creatorAllocBps|pct}}로 설정되어 있습니다. 팀은 새 토큰에 대해서만 이를 올릴 수
있고, 모든 변경은 [Site integrity](https://agenticstarter.xyz/integrity?lang=ko)에 공개됩니다.

## 안전 스위치

컨트랙트에는 업그레이드 가능한 프록시가 없습니다. 소유자는 2-of-2 멀티시그(Safe)입니다. 가디언 지갑은 비상시 **새 런치와
매수**를 중지할 수 있고, 재개는 소유자만 할 수 있습니다. **매도, 환불, 클레임, 졸업은 절대 중지되지 않습니다.** 모듈(Agent ID
확인, 토큰 템플릿, 상장 어댑터, 수수료 에스크로, 스테이킹 혜택)을 교체하려면 공개 **48시간 타임락**을 거쳐야 합니다.
메인넷에서는 수수료와 졸업 목표가 7일마다 최대 ±50%까지만 움직일 수 있으며, 항상 컨트랙트에 적힌 하드 한도 안에서만
움직입니다.
