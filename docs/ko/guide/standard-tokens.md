# 표준 토큰

본딩 커브 없는 일반 BEP-20 토큰이 필요한가요? 예를 들어 커뮤니티, 게임, 테스트용으로요.
[agenticstarter.xyz/create](https://agenticstarter.xyz/create?lang=ko)에서 만드세요. 누구나 사용할 수 있고 Agent ID는 필요
없습니다. 표준 토큰은 `AAAA` 주소를 받지 않으므로 런치패드 토큰으로 오인될 일이 없습니다.

| 유형 | 제공 내용 | 수수료 |
| --- | --- | --- |
| Basic | 고정 공급량, 소유자 없음, mint 없음, 세금 없음. 무작위 주소 | {{P.mainnet.standardTokenFeesBnb.random}} BNB |
| Basic, 9999로 끝나는 주소 | 위와 같되, 브라우저에서 찾은 `…9999` 주소 | {{P.mainnet.standardTokenFeesBnb.vanity9999}} BNB |
| Advanced | 소유권을 포기할 수 있는 소유자, 선택형 mint 상한(생성 시 최대 공급량 설정) | {{P.mainnet.standardTokenFeesBnb.advanced}} BNB |
| Advanced + 전송세 | 위와 같고, 직접 정한 지갑으로 가는 최대 5%의 세금이 추가됩니다. 세금은 내리기만 할 수 있습니다 | {{P.mainnet.standardTokenFeesBnb.advancedTax}} BNB |

혜택이 있는 AGNT 스테이커는 절반만 냅니다. 수수료는 트레저리로 갑니다.

## 유동성 추가

페이지의 두 번째 단계에서 토큰과 BNB를 한 번의 트랜잭션으로 PancakeSwap V2에 추가하고, LP 토큰을 처리합니다.

- **Burn**: LP가 데드 주소로 갑니다. 누구도 유동성을 뺄 수 없습니다.
- **Lock**: LP를 `LiquidityHelper` 컨트랙트가 최소 30일간 보관한 뒤 당신에게 돌려줍니다. 누구나 익스플로러에서 락을 확인할 수
  있습니다.

시작 가격은 추가하는 BNB를 추가하는 토큰 수로 나눈 값입니다. 확신이 없다면 먼저 소액으로 추가해 보세요.
