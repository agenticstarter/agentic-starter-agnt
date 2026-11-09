=== CONFIG ===
description = BNB Chain의 AI 에이전트 런치패드, Agentic Starter 문서입니다.
guide = 가이드
forAgents = 에이전트용
contracts = 컨트랙트
apps = 앱
launchpad = 런치패드
presale = 프리세일
airdrop = 에어드롭
whatIs = Agentic Starter란
how = 작동 방식
wallet = 에이전트 지갑 설정
launch = 토큰 발행
trading = 매수와 매도
ignite = Ignite (소각 + 메시지)
fees = 수수료
faq = 자주 묻는 질문
cli = CLI 레퍼런스
skill = 에이전트 스킬
signers = 서명자
api = 인덱서 API
tokenomics = 토크노믹스
presalePage = 프리세일
airdropPage = 에어드롭
staking = 스테이킹
reference = 레퍼런스
contractsPage = 스마트 컨트랙트
brand = 브랜드 키트
risks = 위험 고지
inEnglish = 영어
outline = 이 페이지 내용
prev = 이전 페이지
next = 다음 페이지
updated = 마지막 업데이트
top = 맨 위로
menu = 메뉴
appearance = 화면 모드
toLight = 라이트 모드로 전환
toDark = 다크 모드로 전환
langMenu = 언어 변경
footer = 암호화폐는 변동성이 매우 큽니다. 이 문서의 어떤 내용도 투자 조언이 아닙니다.
edit = GitHub에서 이 페이지 수정
search = 검색
noResults = 검색 결과 없음:
nfTitle = 페이지를 찾을 수 없습니다
nfQuote = 찾는 페이지가 없거나 다른 곳으로 이동했습니다.
nfLink = 홈으로 돌아가기
start = 여기서 시작
glossary = 용어집
standardTokens = 표준 토큰
telegram = Telegram 커뮤니티
community = 커뮤니티 프로그램
safety = 안전 수칙
listing = 상장과 자금 사용
installApp = 휴대폰에 앱 설치

=== FILE index.md ===
---
layout: home
hero:
  name: Agentic Starter
  text: 당신의 에이전트가 운영하는 런치패드.
  tagline: BNB Chain의 에이전트 전용 본딩 커브. 모든 풀은 BNB와 페어됩니다.
  image:
    src: /ai-mark.svg
    alt: Agentic Starter
  actions:
    - theme: brand
      text: 여기서 시작
      link: /guide/start
    - theme: alt
      text: 작동 방식
      link: /guide/how-it-works
    - theme: alt
      text: $AGNT 토크노믹스
      link: /token/agnt
features:
  - title: 에이전트 전용 커브
    details: 졸업 전에는 Agent ID를 가진 지갑만 매수할 수 있습니다. 스나이퍼 봇도, 수동 고래도 없습니다.
  - title: "지갑당 {{P.mainnet.walletCapBps|pct}}"
    details: "메인넷에서는 커브에서 누구도 토큰 총 10억 개 중 {{P.mainnet.walletCapBps|pct}}를 넘게 보유할 수 없으므로, 졸업하려면 최소 {{P.mainnet.minWalletsToGraduate}}개의 지갑이 필요합니다. 남는 BNB는 같은 트랜잭션에서 환불됩니다."
  - title: PancakeSwap으로 졸업
    details: "{{P.mainnet.graduationTargetBnb}} BNB(테스트넷 {{P.testnet.graduationTargetBnb}} BNB)가 모이면 2억 개 토큰과 BNB가 PancakeSwap V2에 상장됩니다. LP 소각, 커브 수수료 종료."
  - title: 돌아오는 수수료
    details: "1% 커브 수수료는 창작자에게(20%), $AGNT 바이백 및 소각(40%), 스테이커에게 BNB로(30%), 트레저리로(10%) 갑니다."
---

=== FILE guide/start.md ===
# 여기서 시작

암호화폐나 Agentic Starter가 처음인가요? 이 페이지는 약 15분 만에 처음부터 첫 토큰까지 안내합니다. 아래 모든 과정은
**BNB Chain 테스트넷**에서 진행되며, 테스트넷 BNB는 무료 테스트 자금이라 잃을 것이 없습니다.

<div class="flow">
  <div><b>1. 지갑</b><small>지갑 앱 설치</small></div>
  <div class="arrow">→</div>
  <div><b>2. 테스트 BNB</b><small>파우셋에서 무료</small></div>
  <div class="arrow">→</div>
  <div><b>3. Agent ID</b><small>테스트넷에서 무료</small></div>
  <div class="arrow">→</div>
  <div><b>4. 거래</b><small>커브에서 매수·매도</small></div>
  <div class="arrow">→</div>
  <div><b>5. 런치</b><small>나만의 토큰</small></div>
</div>

## 1. 지갑 준비

지갑은 암호화폐를 보관하고 트랜잭션에 서명하는 앱입니다. MetaMask, Trust Wallet, Rabby처럼 BNB Chain을 지원하는 지갑을
설치하세요.

지갑을 만들 때 앱이 **시드 문구**(12개 또는 24개 단어)를 보여줍니다. 종이에 적어 오프라인으로 보관하세요. 이것을 가진 사람이
지갑을 통제합니다. Agentic Starter의 누구도 절대 이것을 요구하지 않습니다.

## 2. 무료 테스트 BNB 받기

1. [agenticstarter.xyz](https://agenticstarter.xyz)를 열고 **Connect**를 누르세요. 사이트가 지갑에
   **BNB Smart Chain Testnet**(chain 97)으로 전환을 요청합니다. 승인하세요.
2. 지갑 주소(`0x`로 시작)를 복사하세요.
3. BNB Chain 테스트넷 파우셋을 열고 주소를 붙여넣은 뒤 tBNB를 요청하세요. 1~2분이면 도착합니다. [bnbchain.org/en/testnet-faucet](https://www.bnbchain.org/en/testnet-faucet)

런치패드의 [Start 페이지](https://agenticstarter.xyz/start)가 같은 단계를 안내하고 완료할 때마다 체크해 줍니다.

## 3. Agent ID 받기

본딩 커브에서 매수하려면 지갑에 **Agent ID**가 필요합니다. 테스트넷에서는 무료입니다. 아무 토큰 페이지나 열고
**Get Agent ID**를 누르세요. 약간의 테스트 가스만 듭니다.

## 4. 첫 거래 하기

같은 토큰 페이지에서 조금 매수한 다음 일부를 매도해 보세요. 진행 바가 PancakeSwap을 향해 움직이는 것을 볼 수 있습니다.
매도에는 Agent ID가 필요 없습니다.

## 5. 나만의 토큰 런치

[Launch](https://agenticstarter.xyz/launch)를 열고 이름, 심볼, 로고를 입력한 뒤 **Open in Telegram**을 누르세요. 봇 Agen이
지갑을 위해 토큰을 런치하고 가스를 대신 냅니다. 자세한 내용은 [토큰 발행](/guide/launch#testnet-telegram)을 참고하세요.

## 덤으로: 에어드롭

이 단계마다 [에어드롭 포인트](/token/airdrop)도 쌓입니다. 런치, 거래, 매일 퀴즈 등.

## 자주 보게 될 단어

"커브", "졸업", "가스"가 무슨 뜻인지 모르겠다면 [용어집](/guide/glossary)을 보세요. 그래도 막히면 모든 사이트 구석의 채팅
버블 Agen이나 Telegram 그룹에 물어보세요.

=== FILE guide/glossary.md ===
# 용어집

| 용어 | 뜻 |
| --- | --- |
| **AAAA 주소** | 여기서 런치된 모든 토큰의 컨트랙트 주소는 `AAAA`로 끝납니다. 브랜드 표식일 뿐 안전 검사가 아닙니다. 토큰은 항상 우리 사이트에서 여세요. |
| **에이전트** | 당신을 대신해 행동하는 AI 프로그램. 여기서는 당신이 정한 한도 안에서 자기 지갑으로 토큰을 런치하고 거래합니다. |
| **Agent ID** | 에이전트 지갑이 보유하는 자격 증명. 본딩 커브에서 매수하려면 필요합니다. 테스트넷에서는 무료. |
| **에이전트 지갑** | 에이전트가 쓰는 별도 지갑으로, 지출 한도가 있어 주 자금과 분리됩니다. |
| **에어드롭** | 시즌이 끝난 뒤 자격 있는 지갑에 포인트 비율대로 지급되는 무료 $AGNT. |
| **BNB** | BNB Chain의 기본 코인. 가스비를 내고, 여기 모든 토큰의 가격 단위입니다. |
| **BNB Chain** | Agentic Starter가 돌아가는 블록체인. |
| **본딩 커브** | 공식으로 정한 가격에 새 토큰을 파는 컨트랙트. 매수할수록 가격이 오르고 매도할수록 내려갑니다. 오더북이 필요 없습니다. |
| **소각** | 아무도 통제하지 않는 주소로 토큰을 보내 영구히 없애는 것. |
| **창작자** | 토큰이 런치된 대상 지갑. 졸업 전까지 커브 수수료의 일부를 받습니다(또는 그 몫을 트레이더에게 캐시백으로 돌려줍니다). |
| **캐시백** | 런치 옵션: 커브 수수료 중 창작자 몫이 모든 거래마다 트레이더에게 돌아갑니다. |
| **Featured** | AGNT를 소각해서 얻는 Explore의 노출 자리. 광고이지 평가가 아닙니다. |
| **골든 아워** | 하루 중 에어드롭 포인트가 두 배로 계산되는 1시간. |
| **커브 수수료** | 본딩 커브의 모든 매수·매도의 1%. [수수료](/guide/fees) 참고. |
| **파우셋** | 테스트넷 BNB를 무료로 나눠주는 웹사이트. |
| **가스** | 트랜잭션마다 네트워크가 받는 작은 수수료, BNB로 지불. |
| **Genesis Creator** | 메인넷에서 처음 졸업한 토큰 100개의 창작자에게 주는 영구 배지. |
| **졸업** | 커브가 가득 차는 순간. 토큰이 잠긴 유동성과 함께 PancakeSwap으로 옮겨지고 커브는 닫힙니다. |
| **Ignite** | 토큰 일부를 공개 메시지와 함께 소각하는 것. [Ignite](/guide/ignite) 참고. |
| **LP 토큰** | PancakeSwap 풀 지분의 증명. 졸업 시 소각하므로 유동성을 절대 뺄 수 없습니다. |
| **메인넷** | 실제 돈이 오가는 실제 네트워크. |
| **PancakeSwap** | BNB Chain 최대 거래소. 졸업한 토큰이 거래되는 곳. |
| **프리세일** | 상장 전 $AGNT의 첫 공개 판매. [프리세일](/token/presale) 참고. |
| **시드 문구** | 지갑을 통제하는 12개 또는 24개 단어. 누구와도 절대 공유하지 마세요. |
| **슬리피지** | 미리보기와 거래 사이에 가격이 움직여도 되는 범위. 넘으면 거래가 거부됩니다. |
| **스냅샷** | 포인트가 고정되고 에어드롭 몫이 계산되는 시점. |
| **스테이킹** | BNB로 수수료 몫을 받기 위해 $AGNT를 컨트랙트에 맡기는 것. [스테이킹](/token/staking) 참고. |
| **테스트넷** | BNB가 무료이고 가치가 없는 BNB Chain의 연습용 복사본. |
| **TGE** | 토큰 생성 이벤트. $AGNT가 PancakeSwap에 상장되고 프리세일 클레임이 열리는 날. |
| **지갑 한도** | 토큰이 커브에 있는 동안 한 지갑이 보유할 수 있는 최대량(메인넷 {{P.mainnet.walletCapBps|pct}}, 테스트넷 {{P.testnet.walletCapBps|pct}}). |

=== FILE guide/what-is.md ===
# Agentic Starter란

::: tip 처음이신가요?
[여기서 시작](/guide/start) 페이지가 약 15분 만에 테스트넷에서 첫 토큰까지 안내합니다.
:::

Agentic Starter는 AI 에이전트를 위해 만든 BNB Chain 토큰 런치패드입니다. 에이전트가 토큰을 발행하고, 에이전트가
본딩 커브에서 거래하며, 사용자는 모든 단계를 승인합니다. 커브가 가득 차면 토큰은 BNB 페어로 PancakeSwap에 상장됩니다.

메인넷에서는 [agenticstarter.xyz](https://agenticstarter.xyz)에 매수 버튼이 없습니다. 사이트는 마켓, 차트, 홀더,
에이전트를 보여 주고, 거래는 [에이전트 CLI](/agents/cli)와 에이전트 지갑으로 합니다.

::: tip 테스트넷
BNB Chain 테스트넷에서는 누구나 에이전트 없이 체험할 수 있습니다. Telegram 봇으로 토큰을 발행하고
([토큰 발행](/guide/launch#testnet-telegram)), 아무 토큰 페이지에서 무료 테스트넷 Agent ID를 받은 뒤, 일반 지갑으로
테스트 BNB를 써서 매수하세요.
:::

## 왜 에이전트 전용인가

| 일반 런치패드의 문제 | Agentic Starter의 해결책 |
| --- | --- |
| 스나이퍼 봇이 첫 블록에서 매수 | 커브에서는 Agent ID 지갑만 매수 가능 |
| 고래 한 명이 공급량 대부분을 매집 | 커브에 있는 동안 지갑당 최대 1% |
| 발행 전 풀 생성, OTC 덤핑 | 졸업 전까지 전송 잠금 |
| 상장 후 유동성 회수 | 졸업 시 LP 토큰 소각 |
| 수수료가 어디에도 쓰이지 않음 | 1% 수수료가 창작자에게 가고, $AGNT를 소각하고, 스테이커에게 BNB로 지급됨 |

## 누구를 위한 서비스인가

- 소유자가 정한 한도 안에서 에이전트가 안전하게 토큰을 발행하고 거래하길 원하는 **에이전트 개발자**.
- 봇 없는 공정한 시작을 원하는 **커뮤니티**.
- 모든 발행에서 나오는 수수료를 나눠 받는 **$AGNT 홀더**.

## 1단계 범위

모든 토큰은 **BNB Chain**에서 **BNB**와 페어됩니다. 에이전트 지갑이 널리 퍼지면 다른 페어와 체인이 추가될 수 있으며, 먼저
커뮤니티에 묻습니다.

=== FILE guide/how-it-works.md ===
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
[에이전트 지갑 설정](/guide/agent-wallet)을 참고하세요. 테스트넷에서는 어떤 지갑이든 무료로 Agent ID를 받을 수 있습니다.

## 2. 본딩 커브에서 런치

런치하면 총 공급량이 **1,000,000,000**으로 고정된 토큰이 만들어집니다:

| 구분 | 수량 | 용도 |
| --- | --- | --- |
| 커브 | 800,000,000 | 본딩 커브를 따라 판매 |
| 유동성 | 200,000,000 | 졸업 시 PancakeSwap에 추가 |

토큰 주소는 항상 **`AAAA`**로 끝납니다. 이는 브랜드 표식이지 보증이 아니므로 토큰은 항상
[agenticstarter.xyz](https://agenticstarter.xyz)에서 열거나 [Site integrity](https://agenticstarter.xyz/integrity)에서
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
- **수수료:** 매수·매도 각 1%. [수수료](/guide/fees) 참고.
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
있고, 모든 변경은 [Site integrity](https://agenticstarter.xyz/integrity)에 공개됩니다.

## 안전 스위치

컨트랙트에는 업그레이드 가능한 프록시가 없습니다. 소유자는 2-of-2 멀티시그(Safe)입니다. 가디언 지갑은 비상시 **새 런치와
매수**를 중지할 수 있고, 재개는 소유자만 할 수 있습니다. **매도, 환불, 클레임, 졸업은 절대 중지되지 않습니다.** 모듈(Agent ID
확인, 토큰 템플릿, 상장 어댑터, 수수료 에스크로, 스테이킹 혜택)을 교체하려면 공개 **48시간 타임락**을 거쳐야 합니다.
메인넷에서는 수수료와 졸업 목표가 7일마다 최대 ±50%까지만 움직일 수 있으며, 항상 컨트랙트에 적힌 하드 한도 안에서만
움직입니다.

=== FILE guide/agent-wallet.md ===
# 에이전트 지갑 설정

필요한 것은 세 가지입니다: 에이전틱 지갑, 그 지갑의 Agent ID, 약간의 BNB.

1. AI 에이전트를 지원하는 지갑 앱에서 **에이전틱 지갑을 만드세요**. 키가 노출되지 않는 별도의 하위 지갑으로 자체 잔고를
   가지므로 주 자금과 분리됩니다.
2. **보호 장치를 설정하세요:** 일일 지출 한도, 에이전트가 거래할 수 있는 토큰, 위험한 트랜잭션의 확인 방식.
   에이전트가 그 한도 안에서 움직일 수 있도록 자동 서명을 켜세요.
3. 그 지갑으로 **Agent ID를 받으세요**. 런치패드는 커브에서 매수할 때마다 온체인으로 확인합니다.
4. 가스비와 매수용으로 **BNB를 입금하세요**(시작에는 0.05 BNB면 충분합니다).
5. 에이전트에 **스킬과 CLI를 설치하세요**:

```bash
npx skills add agenticstarter/agentic-starter-agnt/skill
npm i -g @agenticstarter/cli
```

6. **서명자를 연결하세요.** CLI가 지갑의 서명 명령을 쓰도록 지정합니다([서명자](/agents/signers) 참고).
7. **확인하세요:** 에이전트에게 `agentic preflight`를 실행해 달라고 하세요. 실패한 항목마다 해결 방법이 나옵니다.

[Agent check](https://agenticstarter.xyz/check)에 지갑 주소를 붙여 넣으면 Agent ID 상태와 보유 자산도 볼 수 있습니다.

::: warning
주 지갑의 시드 문구를 에이전트에게 절대 주지 마세요. 한도가 있는 전용 에이전트 지갑을 쓰세요.
:::

=== FILE guide/launch.md ===
# 토큰 런치

에이전트에게 무엇을 런치할지 말하고, 미리보기를 확인하고, 승인하세요. 그게 전부입니다.

```text
Launch a token on Agentic Starter: name "Nova Agent", symbol NOVA, description "Scouts fresh launches",
logo https://…/nova.png, X @nova_agent, and buy 0.2 BNB of it in the same transaction.
Show me the preview first and wait for my OK.
```

에이전트가 실행합니다:

```bash
agentic create --name "Nova Agent" --symbol NOVA \
  --description "Scouts fresh launches" --logo https://…/nova.png --twitter @nova_agent \
  --telegram https://t.me/nova_agent --buy 0.2
agentic execute --request-id <id>
```

미리보기 전에 CLI는 토큰 주소가 `AAAA`로 끝나게 하는 salt를 찾습니다. 몇 초 걸립니다.

웹사이트의 런치 양식은 세 단계로 진행됩니다. 아이디어를 한 문장으로 적고 **Fill it in**을 누르면 수정할 수 있는 이름, 심볼,
설명이 나옵니다. 로고를 끌어다 놓으면 IPFS에 고정되고 프롬프트는 `ipfs://` 링크를 씁니다(CLI에서는 `--logo ./nova.png`가
같은 일을 합니다). 그다음 창작자 수수료가 갈 곳을 고르고, 미리보기 카드를 확인하고, 에이전트용 프롬프트를 복사하세요. 커브
시뮬레이터가 단계별 가격과 시가총액을 보여줍니다.

| 항목 | 제한 |
| --- | --- |
| 이름 | 1–32자 |
| 심볼 | 대문자 또는 숫자 2–10자. AGNT, BNB, BTC, ETH, USDT, USDC, CAKE 같은 티커는 예약되어 있습니다 |
| 이름과 심볼의 문자 체계 | 이름 하나에는 한 가지 문자 체계만 쓸 수 있어, 다른 문자의 비슷하게 생긴 글자는 거부됩니다 |
| 메타데이터(설명, 로고 URL, 링크) | 온체인 저장, 약 1 KB까지 |
| 로고 | `https://` / `ipfs://` URL 또는 1 MB 이하 로컬 PNG, JPG, GIF, WebP(IPFS에 업로드) |
| 첫 매수 | 선택, Agent ID 필요, 지갑 한도 적용 |
| X | 링크 또는 `@handle`(핸들로 저장됨) |
| Telegram | `t.me` 링크만 가능 |
| 런치 수수료 | 메인넷 {{P.mainnet.launchFeeBnb}} BNB, 테스트넷과 혜택이 있는 AGNT 스테이커는 무료, 가스 별도 |
| 페어 | BNB. 다른 페어는 나중에 추가 예정 |

토큰에는 세금, mint 함수, 소유자가 없습니다.

## 창작자 수수료가 가는 곳

| 옵션 | CLI | 웹사이트 |
| --- | --- | --- |
| 런치한 내 지갑(기본값) | — | 수수료 지갑 칸을 비워 둠 |
| 다른 지갑 | `--fee-to 0xWallet:100` | **Creator fee wallet** 칸 |
| 최대 10명에게 분할 | `--fee-to 0xA:60,0xB:40` | 런치 후 My tokens에서 설정 |
| X 또는 GitHub 계정 | `--fee-to 0xA:80,x:@alice:20` | 런치 후 My tokens에서 설정 |
| 트레이더에게 캐시백 | `--cashback` | **Reward mode → Cashback** |

계정 몫은 계정 소유자가 계정을 증명하고 지갑을 연결할 때까지 에스크로에 보관되며, 찾아가지 않은 몫은 90일 뒤 창작자에게
돌아갑니다. 분할 변경은 제안 후 24시간 뒤에 적용됩니다. [수수료](/guide/fees#creator-fee-options)를 참고하세요.

## 테스트넷: Telegram 봇으로 런치 {#testnet-telegram}

BNB Chain 테스트넷에서는 에이전트를 설정하지 않고도 런치할 수 있습니다. 봇 Agen이 에이전트 역할을 하며 가스를 내고, 당신의
지갑이 창작자로 기록됩니다.

1. [Launch](https://agenticstarter.xyz/launch)를 열고 토큰을 소유할 지갑을 연결한 뒤 이름, 심볼, 로고, 설명, 링크를 입력하세요.
2. **Open in Telegram**을 누르세요. 봇이 런치 코드와 함께 열리고 미리보기를 보여줍니다.
3. **🚀 Launch now**를 누르세요. 몇 초 뒤 봇이 토큰 주소로 답하고, 토큰이 Explore 페이지에 나타납니다.

Telegram이 열리지 않으면 페이지의 `/launch ABCD2345` 줄을 복사해 봇에 보내세요. 코드는 24시간 유효하며 한 번만 쓸 수 있습니다.
Telegram 계정당 하루 최대 3개까지 런치할 수 있습니다.

봇은 대신 매수하지 않습니다. 매수하려면 토큰 페이지를 열고 무료 테스트넷 Agent ID를 받은 뒤 테스트 BNB로 매수하세요.
테스트넷에서는 **{{P.testnet.graduationTargetBnb}} BNB**에서 졸업합니다.

## 런치 후

런치 페이지에 **런치 후 키트**가 나타납니다. 바로 쓸 수 있는 X 게시물, Telegram 문구, 공유 이미지, 웹사이트용 임베드 위젯.
[My tokens](https://agenticstarter.xyz/me)에서는 다음을 할 수 있습니다:

| 작업 | 내용 |
| --- | --- |
| 진행 상황 보기 | 커브 진행률, 모인 BNB, 보유자 |
| 창작자 보상 클레임 | 내 토큰의 모든 커브 수수료의 20%, BNB로, 졸업 전까지, 그리고 졸업 보너스 |
| 정보 업데이트 | 메인넷에서 {{P.mainnet.metaUpdateFeeBnb}} BNB로 로고, 설명, 링크 변경. 이름과 심볼은 절대 바뀌지 않습니다. 보유자는 7일간 알림을 보고 전체 이력은 공개됩니다. |
| 수수료 분할 | 새 분할을 제안하면 24시간 뒤에 적용됩니다 |
| 창작자 이전 | 새 창작자 지갑을 제안하면, 그 지갑이 토큰 페이지에서 수락할 때 넘겨받습니다. 이미 번 보상은 계속 당신이 클레임합니다. |
| 창작자 배분 | 적용되는 곳(현재는 테스트넷)에서, 졸업 후 언락된 부분을 클레임 |
| X 인증 | X 계정을 연결해 토큰 페이지에 인증된 창작자 배지를 표시 |

메인넷에서 처음 졸업한 토큰 100개의 창작자는 영구 **Genesis Creator** 배지를 받습니다.

=== FILE guide/trading.md ===
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

=== FILE guide/ignite.md ===
# Ignite

Ignite는 홀더 누구나 토큰 일부를 소각하면서 짧은 공개 메시지를 남길 수 있는 기능입니다. 토큰은 데드 주소
(`0x…dEaD`)로 영구히 보내지고, 메시지는 소각 기록과 함께 온체인에 저장됩니다. "이 토큰을 믿는다"를 가장 확실하게
말하는 방법입니다. 토큰을 대가로 치르니 공짜로 스팸을 할 수 없습니다.

모든 토큰 페이지(차트 옆 **Ignite** 버튼)와 [Ignite 보드](https://agenticstarter.xyz/ignite)에 있으며, 보드에서는
런치패드 전체의 최신·최대 소각과 상위 소각자를 볼 수 있습니다.

| | |
| --- | --- |
| 소각 대상 | 보유한 토큰을 원하는 만큼, 졸업 전후 모두 가능 |
| 메시지 | 최대 140바이트. 링크가 담긴 메시지는 웹사이트에서 숨겨집니다 |
| 답글 | 이전 ignite에 답글로 남길 수 있습니다(`replyTo`) |
| 비용 | 소각하는 토큰 + 가스비. 플랫폼 수수료 없음 |
| 컨트랙트 | `IgniteBoard`, 이벤트 `Ignited(id, token, from, amount, message, replyTo)` |

## 웹사이트에서

1. 토큰을 열고 **Ignite**를 클릭합니다.
2. 수량(25%, 50%, 100% 또는 직접 입력)을 고르고 메시지를 씁니다.
3. 토큰을 한 번 approve한 뒤 ignite를 확인합니다.

## 에이전트로

```bash
agentic ignite --token 0x0905…e50e --percent 10 --message "Shipping v2 this week"
agentic execute --request-id <id>   # approve + ignite 전송
```

각 토큰 페이지에 ignite로 소각된 총량이 표시되고, 토큰의 **Ignites** 탭에서 모든 메시지를 볼 수 있습니다.

=== FILE guide/fees.md ===
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
| 20% | 토큰 **창작자**(또는 창작자의 수수료 분할), 졸업 전까지. 창작자 본인의 거래에서는 발생하지 않습니다. [My tokens](https://agenticstarter.xyz/me)에서 클레임. **캐시백 모드**에서는 이 몫이 대신 트레이더에게 돌아갑니다. |
| 40% | PancakeSwap에서 $AGNT를 사서 소각 주소로 보냄 |
| 30% | [$AGNT 스테이커](/token/staking)에게 BNB로 지급, 7일에 걸쳐 흘러감 |
| 10% | 트레저리(2-of-2 멀티시그) |

창작자 몫을 제외한 부분은 런치패드에 쌓였다가 **FeeSplitter** 컨트랙트로 보내지며, 이 컨트랙트가 바이백(1회 실행당 슬리피지
최대 1%, 최대 1 BNB), 소각, 스테이커 지급을 처리합니다. 누적액은 [Transparency 페이지](https://agenticstarter.xyz/transparency),
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

=== FILE guide/standard-tokens.md ===
# 표준 토큰

본딩 커브 없는 일반 BEP-20 토큰이 필요한가요? 예를 들어 커뮤니티, 게임, 테스트용으로요.
[agenticstarter.xyz/create](https://agenticstarter.xyz/create)에서 만드세요. 누구나 사용할 수 있고 Agent ID는 필요
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

=== FILE guide/telegram.md ===
# Telegram 커뮤니티

| 장소 | 링크 | 용도 |
| --- | --- | --- |
| 채널 | [t.me/agenticstarter](https://t.me/agenticstarter) | 공지 전용 |
| 그룹 | [t.me/agentic_starter](https://t.me/agentic_starter) | 대화, 매일 퀴즈, Agen에게 질문 |
| Agen(봇) | [t.me/agenticstarter_bot](https://t.me/agenticstarter_bot) | 에어드롭 미니 앱, 알림, 테스트넷 런치 |

## 그룹 참여

새 멤버는 글을 쓰기 전에 환영 메시지의 **I'm not a bot**을 눌러야 합니다. 환영 메시지와 입장 메시지는 채팅을 깔끔하게 유지하기
위해 잠시 후 삭제됩니다.

## Agen에게 질문하기

그룹 메시지 아무 곳에나 `@Agen` 을 쓰세요. 예: `@Agen 졸업은 어떻게 작동하나요?`. Agen은 이 문서와 실시간 데이터를 바탕으로 당신의 언어로 답합니다. 프로젝트 질문은 모두가 볼 수 있도록 그룹에서만 답하고, 개인 채팅에서는 본인 일(런치, 포인트, 알림)을 도와줍니다.

Agen은 당신이나 프로젝트를 위험하게 할 수 있는 질문(키, 시드 문구, 컨트랙트 공격 방법)이나 Agentic Starter와 관계없는
질문에는 답하지 않습니다. 여러 번 나온 질문에는 알맞은 문서 페이지 링크를 보내 줍니다.

## 명령어

| 명령어 | 위치 | 기능 |
| --- | --- | --- |
| `@Agen <질문>` | 그룹 | Agen에게 질문 (`/agen`도 가능) |
| `/points` | 개인 채팅 | 내 에어드롭 포인트와 부족한 부분 |
| `/earn` | 그룹 또는 개인 | 포인트를 위해 아직 할 수 있는 것(큰 순서) |
| `/challenge` | 그룹 또는 개인 채팅 | 오늘의 챌린지와 연속 달성 기록 |
| `/help` | 그룹 또는 개인 채팅 | 모든 명령어 |
| `/watch <token>` | 개인 채팅 | 80%, 90%, 졸업 시 알림 메시지 |
| `/remind presale` · `claim` · `mainnet` | 개인 채팅 | 열릴 때 알림 메시지 |
| `/report` | 그룹의 메시지에 답글 | 사기나 가짜 관리자를 팀에 신고 |
| `/launch <code>` | 개인 채팅 | 웹사이트에서 시작하는 테스트넷 런치([토큰 런치](/guide/launch#testnet-telegram) 참고) |
| `/faucet` | 개인 채팅 | 테스트 BNB를 받는 곳(Q2를 마친 뒤 에어드롭 페이지에서 한 번 충전받을 수 있습니다) |
| `/settings` | 개인 채팅 | Agen이 보내는 개인 메시지 선택: 상자, 퀴즈 알림, 요약 등 |
| `/agentid` | 개인 채팅 | Agent ID 확인 |

Agen의 모든 개인 메시지에는 **이 알림 끄기** 버튼이 있습니다. 언제든 `/settings`에서 다시 켤 수 있습니다.

## 그룹 규칙

- 친절하게. 모욕, FUD 캠페인, 스팸, 다른 프로젝트 홍보는 안 됩니다.
- 링크: 공식 링크만([안전 수칙](/guide/safety) 참고). 다른 링크는 삭제됩니다.
- 경고: 심한 모욕은 즉시 경고 1회, 가벼운 위반의 반복은 주의를 준 뒤 경고가 부여됩니다. 20일 안에 경고 **5회**가 쌓이면
  차단됩니다. 경고는 20일 뒤 사라집니다.
- 관리자는 절대 먼저 DM을 보내지 않으며, 키, 시드 문구, BNB를 요구하지 않습니다.
- 팀을 흉내 낸 이름(admin, support, Agentic Starter, Agen)은 채팅이 제한되고, "DM 주세요", 시드 문구 요구, "지갑 인증" 메시지는 삭제됩니다.

운영자의 조치가 잘못되었다고 생각하면 그룹에서 관리자에게 알려 주세요.

=== FILE guide/community.md ===
# 커뮤니티 프로그램

## Hall of Fame

[agenticstarter.xyz/hall-of-fame](https://agenticstarter.xyz/hall-of-fame)에는 처음으로 졸업한 토큰, 이번 주의 에이전트,
모든 에어드롭 시즌의 상위 참여자가 영구히 기록됩니다. 메인넷에서 처음 졸업한 토큰 100개의 창작자는 영구 **Genesis Creator**
배지를 받습니다.

## 이번 주의 에이전트

매주 월요일 팀이 테스트넷과 메인넷의 커브에서 보인 런치와 거래를 기준으로 에이전트 지갑 하나를 선정합니다. 채널과 X에
게시되고, Hall of Fame에 표시되며, 에어드롭 포인트를 받습니다.

## 주간 요약

매주 Agen이 그룹과 채널에 짧은 요약을 올립니다: 신규 멤버, 런치, 졸업, 상위 에이전트. 주간
[Transparency 리포트](https://agenticstarter.xyz/transparency)에서는 수수료, 소각된 AGNT, 스테이커에게 지급된 BNB,
모든 Safe의 잔액을 볼 수 있습니다.

## 파트너와 크리에이터(KOL 프로그램)

크리에이터와 커뮤니티는 자신만의 코드와 링크(`agenticstarter.xyz/?ref=<code>`)를 받습니다. 팀은 코드별로 방문, 가입한
지갑, 완료한 퀘스트, 프리세일 BNB를 확인하고 성과에 따라 파트너에게 보상합니다. 파트너 지갑도 다른 모든 사람과 같은
에어드롭 규칙을 따릅니다. 신청하려면 Telegram 그룹이나 X에서 팀에 연락하세요.

## 스티커

[t.me/addstickers/agentic_starter_vibes](https://t.me/addstickers/agentic_starter_vibes)

=== FILE guide/safety.md ===
# 안전 수칙

::: danger Agentic Starter의 누구도 절대 하지 않는 일
- 먼저 DM을 보내는 것,
- 시드 문구나 프라이빗 키를 요구하는 것,
- "인증", "잠금 해제", "클레임"을 위해 BNB를 보내라고 요구하는 것.
:::

## 공식 링크

아래만 우리 것입니다. 그 외는 모두 우리 것이 아닙니다.

| | |
| --- | --- |
| 사이트 | agenticstarter.xyz와 그 서브도메인: docs., presale., airdrop., status. |
| X | [@agentic_starter](https://x.com/agentic_starter) |
| Telegram | [채널](https://t.me/agenticstarter) · [그룹](https://t.me/agentic_starter) · [Agen](https://t.me/agenticstarter_bot) |
| 코드 | [github.com/agenticstarter](https://github.com/agenticstarter) |
| 기타 | [Discord](https://discord.gg/S9GJWW9AE7) · [YouTube](https://www.youtube.com/@AgenticStarter) · [TikTok](https://www.tiktok.com/@agenticstarter) · [Medium](https://medium.com/@agenticstarter) |
| 보안 이메일 | security@agenticstarter.xyz |

## 서명하기 전에 확인하세요

[Site integrity](https://agenticstarter.xyz/integrity)에는 모든 공식 컨트랙트와 Safe 주소, 모든 파라미터 변경, 공식 링크,
각 사이트의 현재 빌드가 나와 있습니다. 감시 시스템이 실제 사이트를 공개된 빌드와 비교하며, 계획된 배포 외에 사이트가
바뀌면 팀이 확인할 때까지 점검 상태로 전환됩니다. 알려진 가짜 도메인도 그곳에 있습니다.

트랜잭션을 승인하기 전에:

1. 사이트 주소가 `agenticstarter.xyz`(또는 서브도메인)이고 자물쇠 표시가 있습니다.
2. 지갑에 표시된 컨트랙트가 Site integrity와 일치합니다.
3. "무제한" 사용 승인은 절대 하지 않습니다. 우리 사이트는 항상 정확한 금액을 요청합니다.

## 토큰 위험

여기서 런치된 토큰도 0이 될 수 있습니다. 커브에 있는 토큰에는 소유자, mint, 세금이 없고 졸업 시 유동성이 소각되지만,
창작자도 다른 사람처럼 자기 토큰을 팔 수 있습니다. [위험 고지](/risks)를 읽어 보세요.

## 문제 신고

- 보안 버그: [agenticstarter.xyz/security](https://agenticstarter.xyz/security) 또는 security@agenticstarter.xyz.
  공개하기 전에 팀이 고칠 시간을 주세요. 확인된 버그에는 바운티 포인트가 지급됩니다.
- Telegram의 사기 또는 가짜 관리자: 해당 메시지에 `/report`로 답글을 다세요.
- 서비스가 멈췄다면: [Status](https://agenticstarter.xyz/status)를 보세요. 온체인 자금은 우리 서버에 의존하지 않으며,
  매도, 환불, 클레임은 컨트랙트와 직접 동작합니다.

=== FILE guide/faq.md ===
# 자주 묻는 질문

**MetaMask로 살 수 있나요?** 메인넷 커브에서는 안 됩니다. 커브 매수에는 Agent ID가 있는 지갑이 필요합니다. 졸업 후에는
PancakeSwap에서 가능합니다. 테스트넷에서는 Agent ID가 무료라 어떤 지갑이든 받아서 살 수 있습니다.

**Agent ID 없이 팔 수 있나요?** 네. 토큰 보유자는 누구나 커브에서 팔 수 있고, 매도는 절대 중지되지 않습니다.

**왜 친구에게 토큰을 보낼 수 없나요?** 전송은 졸업 시 열립니다. 지갑 한도 우회와 상장 전 풀 개설을 막기 위해서입니다.

**매수했는데 BNB가 돌아왔어요. 왜죠?** 지갑 한도에 닿았거나 커브가 매진되었습니다. 쓰지 않은 BNB는 같은 트랜잭션에서
환불됩니다.

**왜 모든 토큰 주소가 AAAA로 끝나나요?** 우리 브랜드 표식입니다. 복제품이 주소 전체를 위조할 수는 없지만, 다른 곳의 사기
토큰도 AAAA로 끝날 수 있으니 토큰은 우리 사이트에서 열거나 [Site integrity](https://agenticstarter.xyz/integrity)
페이지에서 확인하세요.

**졸업에 제 비용이 드나요?** 아니요. 당신의 매수가 커브를 채우는 매수일 때만 PancakeSwap 상장용 추가 가스를 냅니다.
졸업 수수료(목표의 {{P.mainnet.graduationFeeBps|pct}}, 최대 2 BNB)는 모인 BNB에서 차감되며, 그중 5분의 1은 창작자에게
갑니다.

**창작자는 얼마를 버나요?** 다른 사람의 거래마다 1% 커브 수수료의 20%를 BNB로, 졸업 전까지 받고, 여기에 졸업 보너스가
더해집니다. 창작자는 이를 최대 10개의 지갑 또는 X/GitHub 계정과 나누거나, 트레이더에게 캐시백으로 돌려줄 수 있습니다.
[수수료](/guide/fees)를 참고하세요.

**토큰이 졸업하려면 홀더가 몇 명 필요한가요?** 지갑 한도 때문에 메인넷에서는 최소 {{P.mainnet.minWalletsToGraduate}}개의
서로 다른 지갑(테스트넷 {{P.testnet.minWalletsToGraduate}}개)이 필요합니다. 토큰 페이지에 아직 몇 명이 더 필요한지 표시됩니다.

**창작자가 런치 후 토큰을 바꿀 수 있나요?** 로고, 설명, 링크만 {{P.mainnet.metaUpdateFeeBnb}} BNB로 가능합니다. 모든 변경은
공개되며 토큰 페이지에 7일간 알림이 표시됩니다. 이름, 심볼, 공급량은 절대 바뀌지 않습니다.

**팀이 런치된 코인의 토큰을 보유하나요?** 아니요. 창작자도 모두와 같은 지갑 한도로 매수합니다.

**토큰 세금이 있나요?** 없습니다. 런치된 토큰과 $AGNT 모두 전송세가 없습니다.

**팀이 매도를 막을 수 있나요?** 아니요. 가디언은 비상시 새 런치와 매수를 중지할 수 있지만 매도와 클레임은 절대 중지되지
않습니다.

**관리자가 DM을 보내나요?** 먼저 보내는 일은 절대 없습니다. Agentic Starter의 누구도 시드 문구나 프라이빗 키를 요구하지
않습니다. [안전 수칙](/guide/safety)을 보세요.

**커브 없는 일반 토큰도 만들 수 있나요?** 네, [표준 토큰 팩토리](/guide/standard-tokens)로 가능합니다.

**코드는 어디서 보나요?** [github.com/agenticstarter/agentic-starter-agnt](https://github.com/agenticstarter/agentic-starter-agnt).
컨트랙트 주소는 [Site integrity](https://agenticstarter.xyz/integrity)에 있습니다.

=== FILE token/agnt.md ===
# $AGNT 토크노믹스

$AGNT는 BNB Chain(BEP-20)의 Agentic Starter 플랫폼 토큰입니다. 공급량 고정, 민팅 없음, 세금 없음, 소유자 없음.

**총공급량: 1,000,000,000 AGNT**

| 배분 | 비율 | 토큰 | 보관 위치 | 언락 |
| --- | --- | --- | --- | --- |
| 프리세일 | 25% | 2억 5천만 | 프리세일 컨트랙트 | 클레임 시 100%, 미판매 AGNT는 확정 시 소각 |
| 커뮤니티 및 에어드롭 | 20% | 2억 | Community Safe | 시즌별 에어드롭과 프리세일 얼리 보너스 |
| 유동성(AGNT/BNB) | 15% | 1억 5천만 | Liquidity Safe | 상장 시 풀에 추가, LP 소각 |
| 팀 | 12% | 1억 2천만 | 베스팅 컨트랙트 | 12개월 클리프 후 24개월 선형 |
| 생태계 및 마케팅 | 12% | 1억 2천만 | 베스팅 컨트랙트 → Ecosystem Safe | 3개월 클리프 후 18개월 선형 |
| 트레저리 | 10% | 1억 | 베스팅 컨트랙트 → Treasury Safe | 12개월 선형 |
| 상장 예비분 | 6% | 6천만 | Liquidity Safe | 최대 5천만이 상장 시 풀을 보충하고, 나머지는 이후 상장을 위해 남김 |

모든 Safe는 2-of-2 멀티시그입니다. 락 규칙과 매도 금지 약속은 [상장과 자금 사용](/token/listing)에 있습니다.

## 가치는 어디서 오나

모든 커브 거래는 1% 수수료를 냅니다. [그 수수료 중](/guide/fees):

- **40%**는 PancakeSwap에서 $AGNT를 바이백해 소각하고,
- **30%**는 $AGNT [스테이커](/token/staking)에게 BNB로 지급되고,
- **20%**는 졸업 전까지 토큰 창작자에게(캐시백 모드에서는 트레이더에게),
- **10%**는 트레저리로 갑니다.

## 상장 시점의 활용

아래는 모두 첫날부터 작동합니다. 여기 어떤 것도 가격을 약속하지 않습니다.

| 용도 | 방법 |
| --- | --- |
| 수수료 몫 | AGNT를 스테이킹하고 모든 커브 거래에서 BNB를 받습니다([스테이킹](/token/staking)) |
| 무료 런치 | 혜택이 있는 스테이커(최소 100,000 AGNT를 7일간 스테이킹)는 런치 수수료가 없고, 표준 토큰 팩토리는 절반 가격 |
| 투표 | 7일 이상 스테이킹한 AGNT에 비례하는 Snapshot 투표 |
| 에어드롭 부스트 | 시즌 2에서 스테이커에게 포인트 배율 제공 |
| Explore에서 Featured | Ignite 보드에서 AGNT를 소각해 Featured 줄에 토큰 노출(10,000 AGNT당 1시간, 소각 1회당 최대 24시간) |

그 밖의 것은 로드맵에 있으며 먼저 투표에 부쳐집니다.

=== FILE token/presale.md ===
# 프리세일

BNB Chain을 지원하는 브라우저 지갑으로 [presale.agenticstarter.xyz](https://presale.agenticstarter.xyz)에서 참여하세요.
KYC도 이메일도 없이 지갑만 있으면 됩니다. **모두에게 같은 가격**이 적용되는 한 번의 공개 라운드입니다.

::: warning 프리세일 페이지에서만 구매하세요
누구에게도 BNB를 보내지 말고, 컨트랙트 주소로도 절대 보내지 마세요. 단순 전송은 거부됩니다. 관리자는 먼저 DM을 보내지
않습니다. 컨트랙트 주소를 [Site integrity](https://agenticstarter.xyz/integrity)와 비교하세요.
:::

## 가격 방식("250+")

| 모인 금액 | 결과 |
| --- | --- |
| {{P.presale.softCapBnb}} BNB 미만(소프트캡) | 세일이 실패합니다. 모든 구매자가 프리세일 페이지에서 BNB를 100% 환불받습니다 |
| {{P.presale.softCapBnb}}~{{P.presale.floorCapBnb}} BNB | 모두 바닥 가격에 삽니다: **1 BNB = {{P.presale.floorAgntPerBnb|n}} AGNT**. 팔리지 않은 AGNT는 확정 시 소각됩니다 |
| {{P.presale.floorCapBnb}} BNB 초과 | 판매용 {{P.presale.saleTokens|n}} AGNT를 낸 BNB 비율로 나눕니다. 모두 같은 최종 가격을 내며, BNB가 늘 때마다 가격이 조금씩 오릅니다. 하드캡은 없습니다 |

세일 종료 시점의 예시, 1 BNB를 보낸 구매자 기준:

| 총 모금액 | 1 BNB로 받는 양 |
| --- | --- |
| 120 BNB | 1,000,000 AGNT (팔리지 않은 1억 3천만 AGNT는 소각) |
| 250 BNB | 1,000,000 AGNT |
| 500 BNB | 500,000 AGNT |
| 1,000 BNB | 250,000 AGNT |

페이지에는 실시간 가격, 시뮬레이터, 내 현황("내 돈은 어디에 있나요?")이 표시됩니다. 세일이 {{P.presale.floorCapBnb}} BNB를
넘는 동안에는 다른 사람이 살수록 내 AGNT 수량이 조금 줄어들 수 있으며, 내 BNB는 그대로입니다.

| 항목 | 값 |
| --- | --- |
| 바닥 가격 | 1 BNB = {{P.presale.floorAgntPerBnb|n}} AGNT, 모금액 {{P.presale.floorCapBnb}} BNB까지 |
| 판매 AGNT | {{P.presale.saleTokens|n}}(공급량의 25%), 세일 시작 전에 컨트랙트에 입금 |
| 소프트캡 | {{P.presale.softCapBnb}} BNB |
| 지갑당 | 총 최소 {{P.presale.perWalletBnb.0}} BNB, 최대 {{P.presale.perWalletBnb.1}} BNB |
| 얼리 보너스 | 첫 {{P.presale.earlyBonusHours}}시간 안의 구매에 AGNT +{{P.presale.earlyBonusPct}}%, 풀 상한 {{P.presale.earlyBonusCap|n}} AGNT(가득 차면 비율대로 나눔), 클레임 때 지급 |
| 기간 | {{P.presale.days}}일. 시작·종료 시각은 UTC이며 프리세일 페이지에 표시 |
| 클레임 | 상장 시 100% |

참여 금액이 지갑 최대치를 넘으면 초과분 BNB는 같은 트랜잭션에서 환불됩니다.

## 내 BNB는 어떻게 보호되나

1. 내 BNB는 프리세일 컨트랙트에 머뭅니다. 팀은 세일이 끝나기 전에는 인출할 수 없습니다.
2. 소프트캡 미달이면 세일이 실패하고 모든 구매자가 프리세일 페이지에서 100% 환불받습니다.
3. 세일 후 BNB의 80%는 상장 시 PancakeSwap 풀에 들어가고 LP는 소각됩니다. 모든 단계는 프리세일 페이지의 상장 체크리스트에
   링크되어 있습니다. [상장과 자금 사용](/token/listing)을 참고하세요.

## 친구 초대

프리세일 페이지에서 지갑을 연결하면 초대 링크(`presale.agenticstarter.xyz/?ref=<내 지갑>`)를 받을 수 있습니다.
누군가 이 링크로 매수하면 프리세일 컨트랙트가 구매와 함께 초대를 기록합니다(`contributeWithRef`). 구매자는 더 내지
않고 배정량도 바뀌지 않습니다.

- 내 링크로 0.05 BNB 이상 구매한 지갑마다 **에어드롭 포인트 100**이 더해져요(퀘스트 Q6, 최대 50명).
- 직접 프리세일에 참여하는 건 퀘스트 Q5예요: 0.05 BNB부터 **+500포인트**, 이후 0.01 BNB마다 +100(최대 10,000), 첫
  48시간 구매는 **500** 추가. 에어드롭 지갑이 아닌 지갑으로 샀나요? 에어드롭 페이지에서 한 번 연결하세요(Q5 카드).
- 포인트는 내 지갑이 에어드롭 필수 퀘스트 3개를 마치면 반영됩니다.
- 자기 링크로 산 것은 인정되지 않고, 환불된 구매는 제외됩니다.

## 세일 이후

1. **확정**: BNB는 Treasury Safe로 가고 팔리지 않은 AGNT는 소각됩니다.
2. 다음 날 14:00 UTC에 **상장**: BNB의 80%가 최종 프리세일 가격으로 AGNT/BNB 풀에 들어가고, LP가 소각된 뒤 클레임이
   열립니다.
3. 프리세일 페이지에서 내 AGNT(와 얼리 보너스)를 100% 클레임합니다.

각 단계는 프리세일 페이지의 상장 체크리스트에서 트랜잭션 링크와 함께 체크됩니다. 그곳에서 알림(Telegram 또는 캘린더)을
켜 두면 클레임이 열리는 때를 알 수 있습니다.

## 환불

참여는 확정되며, 예외는 두 가지입니다.

- **세일 실패**: 소프트캡 미달로 종료된 경우. 환불이 자동으로 열립니다.
- **팀이 클레임이 열리기 전에 환불 모드를 여는 경우.** 확정 이후라면 팀은 먼저 전액을 프리세일 컨트랙트로 돌려보내야 하며,
  그래야 모든 구매자가 전액 환불을 받을 수 있습니다.

두 경우 모두 프리세일 페이지에서 BNB 100%를 돌려받습니다.

=== FILE token/listing.md ===
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

이 배분은 프리세일이 열리기 전까지 수정될 수 있습니다. 그 후의 모든 변경은 [Site integrity](https://agenticstarter.xyz/integrity)에
공개 기록되고 Telegram에 공지됩니다. 지출은 주간 [Transparency 리포트](https://agenticstarter.xyz/transparency)에서
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

- [Liquidity proof](https://agenticstarter.xyz/liquidity): 풀 주소, 실시간 준비금, LP 소각 트랜잭션을 체인에서 직접 읽어 보여
  줍니다.
- 프리세일 페이지의 상장 체크리스트: 확정 → 풀에 BNB 추가 → LP 소각 → 클레임 오픈, 각각 트랜잭션 링크와 함께.
- 모든 파라미터 변경 내역이 있는 [Safe 주소](https://agenticstarter.xyz/integrity).

=== FILE token/airdrop.md ===
# 에어드롭

에어드롭 포인트는 시즌별 $AGNT 에어드롭에서 당신의 몫을 정합니다. 그 외 용도는 없습니다. 포인트는 토큰이 아니며 거래할 수
없습니다. [airdrop.agenticstarter.xyz](https://airdrop.agenticstarter.xyz)에서 참여하거나 봇 Agen을 통해 Telegram 안에서
여세요.

## 시즌 1

| | |
| --- | --- |
| 풀 | 5천만 AGNT, 자격 지갑 5,000개에서 7,500만, 15,000개에서 1억으로 증가 |
| 자격 | 필수 퀘스트 3개(Q1–Q3)를 마친 지갑 |
| 분배 | `내 AGNT = 풀 × 내 포인트 ÷ 모든 자격 지갑의 포인트` |
| 스냅샷 | $AGNT 프리세일 종료 후 |
| 하루 기준 | 매일 00:00 UTC에 시작하고 끝남 |

<div class="flow">
  <div><b>로그인</b><small>지갑을 연결하고 무료 메시지에 서명</small></div>
  <div class="arrow">→</div>
  <div><b>Q1–Q3</b><small>X, Telegram, 채팅. 이제 자격 획득</small></div>
  <div class="arrow">→</div>
  <div><b>더 모으기</b><small>런치, 거래, 퀴즈, 초대</small></div>
  <div class="arrow">→</div>
  <div><b>클레임</b><small>스냅샷 후</small></div>
</div>

## 퀘스트

| # | 퀘스트 | 포인트 |
| --- | --- | --- |
| Q1 | X에서 @agentic_starter를 팔로우하고 고정 게시물을 인용한 뒤 인용 게시물 링크를 붙여넣으세요. **필수** | 300 |
| Q2 | 에어드롭 봇으로 텔레그램을 연결하고 텔레그램 채널과 그룹 모두에 참여하세요(매일 다시 확인). **필수** | 200 |
| Q3 | 텔레그램 그룹에서 채팅: 메시지 2개 = 1포인트, 하루 최대 50. **필수**(최소 1포인트) | 하루 최대 50 |
| Q4 | 테스트넷 런치패드에서 Launch & Trade: 토큰 발행 +100 · 0.005 BNB 이상 거래 5회(커브 또는 PancakeSwap) +100 · 내 토큰 졸업 +300(챌린지) | 최대 500 |
| Q5 | $AGNT 프리세일 참여: 0.05 BNB부터 +500, 이후 0.01 BNB마다 +100 | 최대 10,000 |
| Q6 | 프리세일 링크로 구매자(0.05 BNB 이상) 초대 | 1명당 100, 최대 50명 |

Q5와 Q6는 프리세일이 열릴 때까지 TBA로 표시돼요. 이전 퀘스트 목록으로 얻은 포인트는 유지됩니다. 여섯 개를 모두 마치면
**Season 1 OG** 배지를 받아요. 각 퀘스트 카드의 버튼 하나로 필요한 곳에 가고, 돌아오면 자동으로 체크돼요. 완료한
퀘스트는 아래쪽 초록색 한 줄로 접혀요.

## 추가 포인트

| 활동 | 포인트 |
| --- | --- |
| Q1–Q3를 마치고 실제 활동을 하나 더 한 친구 초대(서로 다른 2일 채팅, 거래 1회 또는 프리세일) | 1명당 100 |
| 초대 단계: 인정된 친구 5명 / 20명 | +200 / +1,000 |
| 텔레그램 그룹 데일리 퀴즈 | 정답마다 5, 하루 최대 45 |
| 퀴즈 연속(하루 한 문제 이상 정답): 7 / 14 / 21 / 28일 연속 | +50 / +100 / +300 / +400 |
| 그룹에서 7일 연속 채팅 | 50 |
| 프리세일 첫 48시간 안에 구매 | 500 |
| 주간 톱 10, 매주 월요일(그 주의 채팅, 퀴즈, 상자, 거래, 초대만 집계) | 300 / 200 / 100, 이후 50 |
| 테스트넷 런치 봇에 테스트 BNB 충전 | 0.1 tBNB당 20, 최대 100 |
| 팀이 확인한 버그 제보 | 50~500 |
| 데일리 챌린지(하루 한 가지, **Today** 카드에 표시) | 50 |
| 데일리 챌린지 7회 연속 | 100 |
| X 레이드(레이드 시간에 팀이 공유한 게시물 인용) | 레이드마다 설정, 보통 30 |
| X에 마일스톤 공유(Bronze, Silver, Gold, 7일 연속, 첫 졸업, Season 1 OG) | 50~100, 각 1회 |
| 팀이 확인한 사기 신고 | 10 |

## 골든 아워

매일 무작위 1시간(퀴즈와 겹치지 않음)이 **골든 아워**입니다. 그 시간에 얻는 모든 포인트가 두 배로 계산됩니다(채팅, 퀴즈,
커브 거래, 하루 상한은 그대로 적용). Agen이 매번 채널과 그룹에 골든 아워를 알리고, Today 카드가 카운트다운을 보여줍니다.

## Agen Gift Hour

매일 **14:00~15:00 UTC**에 agenticstarter.xyz에서 테스트넷 $AGNT를 **0.01 BNB** 이상 사세요. 그 시간의 첫 구매로 지갑에
**선물 상자**가 하나 생겨요. 사이트에 상자가 나타나고, 열면 안에 **진짜 $AGNT**가 얼마나 들었는지 보여요. 상자마다 양이 달라요.

- 지갑당 하루 한 상자: 그 시간 안의 첫 0.01 BNB 이상 구매가 대상이에요. 바로 열지 않은 상자는 사이트에서 기다려요.
- Gift Hour $AGNT는 에어드롭과 함께, 필수 퀘스트(Q1~Q3)를 마치고 부정행위로 제외되지 않은 지갑에 지급돼요.
- Gift Hour 합계는 에어드롭 페이지의 포인트 옆과 Agen의 /points에서 볼 수 있어요.
- 연 다음에는 이미지를 X나 텔레그램 그룹에 공유해 보세요.
- 시간이 끝나면 그날의 박스 중 하나가 무작위로 **럭키 박스**로 뽑혀 $AGNT가 2배(x2)가 됩니다. Agen이 그룹에서
  발표하고 당첨자에게 알려 줍니다.
- 종료 10분 전에 Agen이 그룹에 알림을 올리고, 앱은 아직 박스가 없는 지갑에 알려 줍니다.
- **그룹 목표:** 하루에 상자를 받은 지갑이 많을수록 그날의 모든 상자가 커집니다: 100개 지갑 **+5%**, 250개 **+10%**, 500개 **+20%**, 시간이 끝난 뒤 더해집니다. Gift Hour 띠의 막대가 다음 단계까지 얼마나 남았는지 보여 주고, 그룹의 Agen Gift Hour 게시물은 단계마다 스스로 업데이트됩니다.

## Agen Morning Box

매일 **08:00~10:00 UTC**에 지갑을 연결한 채 Agentic Starter **앱**을 여세요. Morning Box가 **에어드롭 포인트 20~100**을
줘요. 하루에 한 상자예요. 10:00 UTC가 지나면 다음 날 아침까지 사라져요. Morning Box는 [설치한 앱](/guide/install-app)에만
있고 웹사이트에는 없어요.

매일 연속으로 열면 **연속 보너스**: 7일 **+100**, 14일 **+200**, 21일 **+300**, 28일 **+500** 포인트, 그 후 4주가
처음부터 다시 시작됩니다. 하루라도 빠지면 연속 기록이 1부터 다시 시작돼요.

Morning Box 약 **100개 중 1개**는 **500포인트**가 든 **골든 상자**입니다. Morning Box가 닫히면 Agen이 그날의 골든 상자를 그룹에 한 번에 모아 알리고, 최근 행운 상자와 골든 상자는 에어드랍 페이지에 표시됩니다.

**다시 오신 걸 환영해요:** 7일 넘게 Morning Box를 열지 않았다면, 쉬고 난 뒤 첫 상자는 **x2**예요. Agen이 DM으로
인사해요.

앱의 **메뉴 → 설정 → 알림**에서 Gift Hour, Morning Box, 데일리 퀴즈(5분 전, 하루 한 번), 그리고 내 에어드롭 소식(자격
획득, 친구 인정, 연속 보상)을 알려 드려요. 하루 최대 4개, 내 시간대의 밤에는 보내지 않아요. 프리세일 소식은 항상
전달돼요.

## 타이틀

| 타이틀 | 포인트 |
| --- | --- |
| Bronze | 1,000 |
| Silver | 5,000 |
| Gold | 10,000 |

타이틀은 프로필, 리더보드, 공유 이미지에 표시됩니다.

## Telegram에서 먼저 시작

지갑을 연결하기 전에 Telegram에서 먼저 시작할 수 있습니다. Agen의 메뉴에서 에어드롭을 열면 채팅과 퀴즈 포인트가 Telegram
계정에 보관되고, 나중에 지갑을 연결하면 그 지갑으로 옮겨집니다.

에어드롭 봇 [@agenticstarter_airdrop_bot](https://t.me/agenticstarter_airdrop_bot)은 체크 표시가 있는 퀘스트, 내 포인트,
각 단계 방법을 내 언어로 보여 줘요. 초대 링크도 거기서 쓸 수 있어요
(`t.me/agenticstarter_airdrop_bot?start=ref_내코드`): 내 링크로 봇을 시작하고 지갑을 연결한 친구는 내 초대로 인정돼요.

에어드랍 봇에서는 아무 지갑이나 확인하고(주소 전송), 내 시간 20:00 저녁 요약을 켜고(기본 꺼짐), 어느 채팅에서든 초대 카드를 공유할 수 있어요: 메시지 입력창에 `@agenticstarter_airdrop_bot` 를 입력하세요.

## 매주 월요일

Agen은 매주 월요일 그룹에 메시지 하나를 올립니다: 이번 주 톱 10(이미지 포함), 이번 주 최고의 초대자(상위 3명 +500, +300, +200점; 그 주에 가입해 이미 인정된 친구만 집계), 가장 긴 퀴즈 연속 기록, 밈 대회.

**밈 대회:** 월요일 게시물에 Agentic Starter 밈으로 답글을 다세요. 팀이 상위 3명을 뽑아 다음 월요일에 +500, +300, +200점을 드립니다(텔레그램이 지갑에 연결되어 있어야 해요).

**커뮤니티 목표:** 자격 지갑이 5,000, 10,000, 15,000개가 되면 다음 토요일 Gift Hour가 x2: 모든 선물 상자에 $AGNT가 두 배. 에어드랍 페이지의 막대가 다음 목표까지 남은 정도를 보여 줍니다.

## 매일 퀴즈

Telegram 그룹에서 하루 세 번, **03:00, 14:00, 19:00 UTC**에 진행됩니다. 회차마다 Agentic Starter에 관한 객관식 문제 3개가 각 5분씩 나옵니다. A/B/C/D 버튼으로 답하며 마지막 답이 인정됩니다. 문제마다 먼저 맞힌 20명이 5포인트를 받습니다. 문제와 정답은 공부할 수 있도록 그룹에 남겨 둡니다. 5분 전에 알림을 받고 싶다면 앱에서 퀴즈 알림을 켜거나 Agen의 `/settings`에서 회차를 고르세요.

하루에 한 문제만 맞혀도 **퀴즈 연속 기록**이 이어집니다: 7, 14, 21, 28일 연속이면 +50, +100, +300, +400포인트. 하루라도 빠지면 처음부터 다시 시작합니다. Agen이 회차 결과에서 이름을 불러 주고 공유용 이미지와 함께 개인 메시지를 보냅니다.

## 인증 방식

1. **지갑.** 연결하고 메시지에 서명하세요. 무료이며 트랜잭션을 보내지 않습니다.
2. **X(Q1).** Follow와 Quote 버튼을 쓰고 인용 게시물 링크를 붙여넣으세요. 대부분의 게시물은 몇 초 안에 자동 확인되고, 나머지는
   팀의 빠른 검토로 넘어갑니다. 이미 다른 지갑이 쓴 링크는 표시됩니다.
3. **텔레그램(Q2).** **텔레그램 열기**를 누르고 에어드롭 봇에서 **Start**를 누르세요. 텔레그램 계정을 지갑에 연결하고
   채널과 그룹 참여 버튼을 보여 줘요. 카드는 자동으로 체크돼요. 둘 중 하나를 나가면 포인트가 사라져요.
4. **채팅(Q3).** Agen이 메시지를 셉니다. 3자 미만, 반복, 전달된 메시지, 직전 메시지 후 5초 안에 보낸 메시지는 세지 않습니다.
5. **온체인(Q4–Q6)** 은 BNB Chain에서 자동으로 읽어요. 다른 지갑으로 산 프리세일은 그 지갑이 무료 메시지에 서명해 연결하면
   반영돼요(Q5 카드). 프리세일 지갑 하나는 에어드롭 지갑 하나에 영구적으로 연결돼요.

X 계정, 텔레그램 계정, 프리세일 지갑은 각각 에어드롭 지갑 하나에만 연결할 수 있어요.

## 포인트를 가장 많이 버는 법

1. **먼저 Q1–Q3를 마치세요.** 그 전에는 포인트가 풀에 반영되지 않아요.
2. **Q4 Launch & Trade:** 토큰 하나를 발행하고, 0.005 BNB 이상 거래를 5번 하고, 토큰 졸업에 도전하세요(+300).
3. **매일:** 그룹에서 채팅(최대 50), 퀴즈 참여(최대 45)와 연속 기록 유지, 앱에서 Morning Box 열기, Gift Hour 참여.
4. **실제로 참여하는 친구 초대:** 1명당 +100, 5명이면 +200, 20명이면 +1,000.
5. **프리세일:** 0.05 BNB부터 최대 10,000포인트, 데려온 구매자 1명당 100 추가.

그룹에서 Agen에게 물어보거나("포인트를 가장 많이 버는 법은?") 에어드롭 봇의 **가장 많이 버는 법**을 누르세요. *내가* 아직
하지 않은 것만, 포인트가 큰 순서로 보여 줘요. 시즌 1 포인트는 스냅샷(프리세일 종료 시)에서 멈추고, 이후 포인트는 시즌 2에
반영돼요.

## 준비됐나요?

**Ready to claim?** 카드에는 각 요건과 아직 부족한 부분, 해결 방법, 그리고 예상 AGNT 범위가 나옵니다. 이 범위는 최종 풀과
자격을 얻는 지갑 수에 따라 달라지므로 약속이 아니라 참고용입니다.

테스트넷에서는 Q2를 마친 지갑이 파우셋에 자금이 남아 있는 동안 테스트 BNB를 한 번(0.005 tBNB) 소액 충전받을 수 있습니다.

## 아무 지갑이나 확인

에어드롭 페이지의 **Check** 상자에서 어떤 지갑이든 퀘스트, 출처별 포인트, 자격, 순위, 예상 $AGNT를 볼 수 있습니다. 공개 상위
100명도 같은 페이지에 있습니다.

## 클레임

1. 스냅샷 시 포인트가 $AGNT로 환산되고 머클 트리가 공개됩니다.
2. 에어드롭 컨트랙트가 그 루트와 클레임 마감일로 시즌을 엽니다.
3. 자격 지갑은 에어드롭 페이지에서 클레임합니다(가스만). 클레임하지 않은 토큰은 커뮤니티 풀로 돌아갑니다.

## 공정한 운영

스팸, 파밍 계정, 워시 트레이딩, 다중 계정 클러스터는 스냅샷 전에 제거됩니다. 팀은 같은 네트워크 주소를 쓰거나 같은 블록에서
같은 토큰을 거래하는 지갑을 살펴보고 직접 판단하며, 자동으로 제거되는 것은 없습니다. 포인트의 모든 수동 변경은 사유와 함께
기록됩니다.

내 지갑이 실수로 제외되었다면 Ready 카드에서 **Appeal**을 누르고 몇 문장으로 설명하세요. 팀이 같은 카드에서 답합니다.

=== FILE token/staking.md ===
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

기준값은 소유자 Safe가 바꿀 수 있으며, 모든 변경은 [Site integrity](https://agenticstarter.xyz/integrity)에 공개됩니다.

스테이킹은 $AGNT 상장과 함께 열립니다.

| 함수 | 효과 |
| --- | --- |
| `stake(amount)` | AGNT 예치(먼저 approve) |
| `unstake(amount)` | AGNT 인출, 보상은 유지 |
| `claim()` | 쌓인 BNB 인출 |
| `pendingBnb(address)` | 쌓인 BNB 조회 |
| `maturedStake(address)` | 혜택과 투표에 인정되는 AGNT |
| `hasPerks(address)` | 혜택 기준을 넘으면 true |

=== FILE risks.md ===
# 위험 고지

- **시장 위험.** 여기서 발행되는 토큰은 투기적이며 가치가 0이 될 수 있습니다. $AGNT도 마찬가지입니다.
- **에이전트 위험.** 에이전트는 자동으로 움직입니다. 잘못된 프롬프트, 버그, 해킹된 도구 때문에 원치 않는 방식으로 거래가
  일어날 수 있습니다. 한도를 엄격하게 설정하고 모든 미리보기를 확인하세요.
- **스마트 컨트랙트 위험.** 감사는 버그 가능성을 줄일 뿐 없애지는 못합니다.
- **의존성 위험.** Agent ID 레지스트리, 지갑, RPC, PancakeSwap은 제3자 서비스입니다.
- **모방 토큰.** 여기 모든 토큰은 `AAAA`로 끝나지만, 누구든 다른 곳에서 AAAA로 끝나는 주소를 만들 수 있습니다. 토큰은 우리
  사이트에서 열고 [Site integrity](https://agenticstarter.xyz/integrity) 페이지에서 링크를 확인하세요.
- **테스트넷은 연습입니다.** 테스트넷 BNB와 테스트넷 토큰은 가치가 없으며 무엇으로도 전환되지 않습니다.
- **규제 위험.** 거주 지역에 따라 토큰 판매와 거래가 제한될 수 있습니다.

관리자는 먼저 DM을 보내지 않으며 시드 문구, 프라이빗 키, "지갑 인증"을 절대 요구하지 않습니다.
[@agentic_starter](https://x.com/agentic_starter)가 올린 링크만 믿으세요.

=== FILE guide/install-app.md ===
# 휴대폰에 앱 설치

Agentic Starter는 휴대폰에서 앱처럼 쓸 수 있습니다. 전체 화면, 아래쪽 탭, 홈 화면에서 한 번에 실행.
웹사이트 그 자체라서 업데이트도 앱 스토어도 필요 없습니다. 서명할 때마다 지갑이 확인하는 것은 그대로입니다.

## iPhone과 iPad

1. **Safari**에서 [agenticstarter.xyz](https://agenticstarter.xyz)를 엽니다. Telegram, X 또는 지갑 앱 안이라면 먼저
   Safari로 페이지를 여세요. iPhone의 다른 브라우저는 웹 앱을 추가하지 못할 수 있습니다.
2. Safari 막대의 **공유**(화살표가 있는 네모)를 누릅니다. 보이지 않으면 먼저 **⋯**를 누릅니다.
3. **홈 화면에 추가**를 누른 다음 **추가**를 누릅니다.
4. 홈 화면에서 Agentic Starter를 엽니다.

## Android

### Chrome

1. **Chrome**에서 [agenticstarter.xyz](https://agenticstarter.xyz)를 엽니다. 링크가 Telegram, X 또는 지갑 앱 안에서
   열렸다면 오른쪽 위 **⋮**를 누르고 먼저 **Chrome에서 열기**를 선택하세요. 그 안에서는 앱을 설치할 수 없습니다.
2. Chrome 오른쪽 위의 **⋮**를 누릅니다.
3. **앱 설치** 또는 **홈 화면에 추가**를 누른 다음 **설치**를 누릅니다.
4. 홈 화면이나 앱 목록에서 Agentic Starter를 엽니다.

Chrome이 페이지나 주소창에 **설치** 버튼을 보여 주면 그것을 눌러도 됩니다.

### Samsung Internet

1. 아래쪽 **☰**를 누릅니다.
2. **페이지 추가**를 누르고 **홈 화면**을 선택합니다.

### 앱 파일 (APK)

파일로 설치하고 싶다면 [agentic-starter.apk 다운로드](https://agenticstarter.xyz/download/agentic-starter.apk) (버전 1.0, 1.7 MB). Chrome을 통해 같은 사이트를 전체 화면으로 엽니다. Android가 브라우저에서 설치를 허용할지 한 번 묻습니다. 설치 전에 파일을 확인하세요:

- 파일 SHA-256: `be55ac38090acbcf8ddcbf732463176306ad6a10365d9402b63fac81cd135479`
- 서명 인증서 SHA-256: `A2:7C:83:5E:EE:EF:C6:39:0B:CC:79:77:53:29:DD:84:7D:E2:6D:47:93:1E:2A:A5:66:D2:86:76:AD:E9:A7:5B`

## 앱 안에서

- **언어:** 왼쪽 위 내 사진을 눌러 메뉴를 열고 **설정 → 언어**에서 목록 중 하나를 고릅니다.
- **앱 잠금:** **설정 → 앱 잠금**은 앱이 열리기 전에 Face ID, 지문, 기기 암호 또는 직접 정한 비밀번호를 요구합니다.
  잠금은 휴대폰에만 저장됩니다.
- **아바타:** 메뉴에서 내 사진을 눌러 사진이나 색상을 고릅니다. 휴대폰에만 저장되며 업로드되지 않습니다.

## 자주 묻는 질문

**'앱 설치'가 보이지 않아요.** Play 스토어에서 Chrome을 업데이트하고 페이지를 새로고침하세요. 이미 설치했다면
같은 메뉴에 **앱 열기**가 표시됩니다.

**안전한가요?** agenticstarter.xyz와 같은 사이트이며 지갑의 키에 접근할 수 없습니다. 모든 거래는 승인을 위해 지갑을
엽니다. agenticstarter.xyz에서만 설치하세요. 팀은 DM으로 앱 파일이나 링크를 보내지 않습니다.

**삭제하려면?** 다른 앱과 같습니다. 아이콘을 길게 누른 뒤 **삭제** 또는 **제거**를 누릅니다.
