# 상장과 자금 사용

$AGNT는 프리세일이 끝난 다음 날 14:00 UTC에 PancakeSwap V2에 상장됩니다.

## 상장 규칙

| | |
| --- | --- |
| 상장 가격 | 최종 프리세일 가격. 프리세일 구매자와 첫 시장 구매자가 같은 가격을 냅니다 |
| 풀에 들어가는 BNB | 모금된 전체 BNB의 {{P.presale.listing.bnbToPoolPct}}% |
| 풀에 들어가는 AGNT | 모금 BNB의 80% ÷ 최종 가격: {{P.presale.floorCapBnb}} BNB 이상 모였다면 {{P.presale.listing.maxPoolAgnt|n}} AGNT, 그 미만이면 BNB당 800,000 AGNT |
| AGNT의 출처 | Liquidity Safe(1억 5천만) + 6천만 상장 예비분 중 최대 5천만. 필요하지 않은 AGNT는 Liquidity Safe에 남습니다 |
| LP 토큰 | 같은 단계에서 소각. 누구도 유동성을 뺄 수 없습니다 |

나머지 {{P.presale.listing.bnbToTreasuryPct}}%의 BNB는 Treasury Safe로 갑니다.

## 자금 사용(20% 트레저리 몫)

| 용도 | 비율 |
| --- | --- |
| 보안 및 감사 | {{P.presale.useOfFundsPct.security}}% |
| 거래소 상장 | {{P.presale.useOfFundsPct.listing}}% |
| 마케팅 및 커뮤니티 | {{P.presale.useOfFundsPct.marketing}}% |
| 운영(서버, API) | {{P.presale.useOfFundsPct.operations}}% |

이 배분은 프리세일이 열리기 전까지 수정될 수 있습니다. 그 후의 모든 변경은 [Site integrity](https://agenticstarter.xyz/integrity?lang=ko)에
공개 기록되고 Telegram에 공지됩니다. 지출은 주간 [Transparency 리포트](https://agenticstarter.xyz/transparency?lang=ko)에서
추적됩니다.

## 락 약속

| 배분 | 규칙 |
| --- | --- |
| 팀(1억 2천만) | 베스팅 컨트랙트: 12개월 클리프 후 24개월 선형. 소유자는 시작을 미룰 수만 있습니다 |
| 트레저리와 생태계 | 상장 + 6개월 전까지 시장 매도 금지 |
| 유동성(Liquidity Safe) | 풀과 상장에만 사용 |
| 커뮤니티(Community Safe) | 에어드롭과 프리세일 얼리 보너스에만 사용 |

프로젝트 Safe가 AGNT를 DEX 페어, 라우터 또는 알려진 거래소 입금 주소로 옮기면, Telegram 채널과 그룹에 공개 알림이 자동으로
올라갑니다.

## 직접 확인하기

- [Liquidity proof](https://agenticstarter.xyz/liquidity?lang=ko): 풀 주소, 실시간 준비금, LP 소각 트랜잭션을 체인에서 직접 읽어 보여
  줍니다.
- 프리세일 페이지의 상장 체크리스트: 확정 → 풀에 BNB 추가 → LP 소각 → 클레임 오픈, 각각 트랜잭션 링크와 함께.
- 모든 파라미터 변경 내역이 있는 [Safe 주소](https://agenticstarter.xyz/integrity?lang=ko).
