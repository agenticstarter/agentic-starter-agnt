# 스테이킹

`AGNTStaking` 컨트랙트에 $AGNT를 스테이킹하고 런치패드 수수료에서 BNB를 받으세요.

- 스테이커는 **모든 커브 수수료의 30%**를 BNB로 받습니다.
- 들어오는 BNB는 모두 **이후 7일에 걸쳐 흘러가며**, 그 기간 동안 스테이킹한 모든 사람이 나눠 가집니다. 지급 직전에
  스테이킹해도 가져갈 수 없습니다.
- 아무도 스테이킹하지 않을 때 들어온 BNB는 대기하다가 첫 스테이커가 들어올 때 흐르기 시작합니다.
- 잠금 없음: 언제든 언스테이킹, 언제든 BNB 클레임.

## 혜택

**최소 7일** 스테이킹된 AGNT가 혜택 대상으로 인정됩니다. AGNT를 더 추가하면 전체 포지션의 7일 시계가 다시 시작되므로, 혜택을
한 블록만 스테이킹해서 얻을 수는 없습니다.

| 혜택 | 조건 |
| --- | --- |
| 런치패드 무료 런치 | 100,000 AGNT를 7일간 스테이킹 |
| 표준 토큰 팩토리 절반 가격 | 100,000 AGNT를 7일간 스테이킹 |
| Snapshot 투표 가중치 | 7일간 스테이킹한 모든 AGNT(`maturedStake`) |
| 시즌 2 에어드롭 배율 | 시즌 2와 함께 공지 |

기준값은 소유자 Safe가 바꿀 수 있으며, 모든 변경은 [Site integrity](https://agenticstarter.xyz/integrity?lang=ko)에 공개됩니다.

스테이킹은 $AGNT 상장과 함께 열립니다.

| 함수 | 효과 |
| --- | --- |
| `stake(amount)` | AGNT 예치(먼저 approve) |
| `unstake(amount)` | AGNT 인출, 보상은 유지 |
| `claim()` | 쌓인 BNB 인출 |
| `pendingBnb(address)` | 쌓인 BNB 조회 |
| `maturedStake(address)` | 혜택과 투표에 인정되는 AGNT |
| `hasPerks(address)` | 혜택 기준을 넘으면 true |
