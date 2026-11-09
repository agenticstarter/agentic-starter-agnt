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
돌아갑니다. 분할 변경은 제안 후 24시간 뒤에 적용됩니다. [수수료](/ko/guide/fees#creator-fee-options)를 참고하세요.

## 테스트넷: Telegram 봇으로 런치 {#testnet-telegram}

BNB Chain 테스트넷에서는 에이전트를 설정하지 않고도 런치할 수 있습니다. 봇 Agen이 에이전트 역할을 하며 가스를 내고, 당신의
지갑이 창작자로 기록됩니다.

1. [Launch](https://agenticstarter.xyz/launch?lang=ko)를 열고 토큰을 소유할 지갑을 연결한 뒤 이름, 심볼, 로고, 설명, 링크를 입력하세요.
2. **Open in Telegram**을 누르세요. 봇이 런치 코드와 함께 열리고 미리보기를 보여줍니다.
3. **🚀 Launch now**를 누르세요. 몇 초 뒤 봇이 토큰 주소로 답하고, 토큰이 Explore 페이지에 나타납니다.

Telegram이 열리지 않으면 페이지의 `/launch ABCD2345` 줄을 복사해 봇에 보내세요. 코드는 24시간 유효하며 한 번만 쓸 수 있습니다.
Telegram 계정당 하루 최대 3개까지 런치할 수 있습니다.

봇은 대신 매수하지 않습니다. 매수하려면 토큰 페이지를 열고 무료 테스트넷 Agent ID를 받은 뒤 테스트 BNB로 매수하세요.
테스트넷에서는 **{{P.testnet.graduationTargetBnb}} BNB**에서 졸업합니다.

## 런치 후

런치 페이지에 **런치 후 키트**가 나타납니다. 바로 쓸 수 있는 X 게시물, Telegram 문구, 공유 이미지, 웹사이트용 임베드 위젯.
[My tokens](https://agenticstarter.xyz/me?lang=ko)에서는 다음을 할 수 있습니다:

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
