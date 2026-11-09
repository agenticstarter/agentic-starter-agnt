# 수수료

| 언제 | 수수료 | 가는 곳 |
| --- | --- | --- |
| 토큰 런치 | 메인넷 {{P.mainnet.launchFeeBnb}} BNB, 테스트넷 무료(+ 가스). 혜택이 있는 AGNT 스테이커는 무료 | 트레저리 |
| 커브에서 매수·매도 | 1% | 아래처럼 분배 |
| 졸업 | 목표의 {{P.mainnet.graduationFeeBps|pct}}, 최대 2 BNB({{P.mainnet.graduationTargetBnb}} BNB에서 {{P.mainnet.graduationFeeBnb}} BNB), 모인 BNB에서 차감 | {{P.mainnet.creatorBonusBps|pct}}는 창작자에게, 나머지는 트레저리 |
| 토큰 로고·설명·링크 업데이트 | 메인넷 {{P.mainnet.metaUpdateFeeBnb}} BNB, 테스트넷 무료 | 트레저리 |
| 졸업 후 거래(PancakeSwap) | 플랫폼 수수료 없음(PancakeSwap 자체 0.25%) | — |

## 1% 커브 수수료는 어디로 가나

<div class="split"><span class="s1" style="width:20%">20%</span><span class="s2" style="width:40%">40%</span><span class="s3" style="width:30%">30%</span><span class="s4" style="width:10%">10%</span></div>
<div class="split-legend"><span><i style="background:#ffc93c"></i>토큰 창작자</span><span><i style="background:#b79cff"></i>$AGNT 바이백 및 소각</span><span><i style="background:#7ed6a8"></i>$AGNT 스테이커, BNB로</span><span><i style="background:#c9c8cf"></i>트레저리</span></div>

| 비율 | 가는 곳 |
| --- | --- |
| 20% | 토큰 **창작자**(또는 창작자의 수수료 분할), 졸업 전까지. 창작자 본인의 거래에서는 발생하지 않습니다. [My tokens](https://agenticstarter.xyz/me?lang=ko)에서 클레임. **캐시백 모드**에서는 이 몫이 대신 트레이더에게 돌아갑니다. |
| 40% | PancakeSwap에서 $AGNT를 사서 소각 주소로 보냄 |
| 30% | [$AGNT 스테이커](/ko/token/staking)에게 BNB로 지급, 7일에 걸쳐 흘러감 |
| 10% | 트레저리(2-of-2 멀티시그) |

창작자 몫을 제외한 부분은 런치패드에 쌓였다가 **FeeSplitter** 컨트랙트로 보내지며, 이 컨트랙트가 바이백(1회 실행당 슬리피지
최대 1%, 최대 1 BNB), 소각, 스테이커 지급을 처리합니다. 누적액은 [Transparency 페이지](https://agenticstarter.xyz/transparency?lang=ko),
주간 리포트, 온체인에 공개됩니다.

## 창작자 수수료 옵션 {#creator-fee-options}

런치할 때 창작자는 두 가지 모드 중 하나를 고릅니다.

| 모드 | 창작자 몫 20%는 어떻게 되나 |
| --- | --- |
| **Creator fees**(기본값) | 창작자 지갑에 지급되거나, 최대 10명에게 나뉩니다. 수령인은 지갑 또는 **X나 GitHub 계정**이 될 수 있습니다. 계정 몫은 계정 소유자가 지갑을 연결할 때까지 에스크로에 보관되며(아무도 찾아가지 않으면 90일 뒤 창작자에게 돌아갑니다). |
| **Cashback** | 모든 매수·매도마다 트레이더에게 돌려주므로 트레이더의 비용이 줄어듭니다. |

새 수수료 분할은 제안 후 24시간 뒤에 적용되므로 홀더가 변경을 미리 볼 수 있습니다. 창작자 역할을 다른 지갑으로 옮기는 것은
2단계 이전이며, 새 지갑이 수락해야 합니다.

## 소유자가 넘을 수 없는 한도

수수료는 컨트랙트에 적힌 한도 안에서만 바뀔 수 있습니다. 졸업 수수료는 목표의 최대 5%이며 2 BNB를 넘지 않고, 창작자
졸업 보너스는 그 수수료의 최대 30%, 졸업 목표는 최대 50 BNB, 런치 수수료는 최대 0.02 BNB, 업데이트 수수료는 최대
0.05 BNB, 창작자 몫은 최대 30%입니다. 메인넷에서는 이 항목들이 7일마다 최대 ±50%까지만 움직일 수 있습니다. 1% 커브 수수료
자체는 고정입니다.
