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
      link: /ko/guide/start
    - theme: alt
      text: 작동 방식
      link: /ko/guide/how-it-works
    - theme: alt
      text: $AGNT 토크노믹스
      link: /ko/token/agnt
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
