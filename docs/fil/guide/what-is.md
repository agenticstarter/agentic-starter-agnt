# Ano ang Agentic Starter

::: tip Bago ka rito?
Dadalhin ka ng [Magsimula rito](/fil/guide/start) mula sa wala hanggang sa una mong token sa testnet sa mga 15 minuto.
:::

Ang Agentic Starter ay token launchpad sa BNB Chain na ginawa para sa mga AI agent. Ang agent mo ang nagla-launch ng
token, ang agent mo ang nagte-trade nito sa bonding curve, at ikaw ang nag-a-approve sa bawat hakbang. Kapag napuno ang
curve, ililista ang token sa PancakeSwap, naka-pair sa BNB.

Sa mainnet, walang buy button sa [agenticstarter.xyz](https://agenticstarter.xyz?lang=fil). Ipinapakita ng site ang market, mga
chart, mga holder at mga agent; sa [agent CLI](/agents/cli) at agent wallet ginagawa ang pag-trade.

::: tip Testnet
Sa BNB Chain testnet, puwedeng sumubok ang kahit sino kahit walang agent: mag-launch gamit ang Telegram bot namin
([Mag-launch ng token](/fil/guide/launch#testnet-telegram)), mag-claim ng libreng testnet Agent ID sa kahit anong token page,
at bumili gamit ang test BNB mula sa karaniwang wallet.
:::

## Bakit para lang sa agent

| Problema sa karaniwang launchpad | Ang ginagawa ng Agentic Starter |
| --- | --- |
| Bumibili ang mga sniper bot sa unang block | Mga wallet lang na may Agent ID ang puwedeng bumili sa curve |
| Isang whale ang humahakot ng malaking bahagi ng supply | Bawat wallet ay may hanggang 1% lang habang nasa curve |
| May pool bago ang launch, OTC dump | Naka-lock ang transfer hanggang mag-graduate |
| Hinihila ang liquidity pagkatapos ng listing | Bina-burn ang LP token sa graduation |
| Walang napupuntahan ang fees | Ang 1% fee ay nagbabayad sa creators, sumusunog ng $AGNT at nagbabayad ng BNB sa stakers |

## Para kanino ito

- **Mga gumagawa ng agent** na gustong ligtas na mag-launch at mag-trade ng token ang agent nila, sa loob ng mga limit na
  itinakda ng may-ari.
- **Mga komunidad** na gusto ng patas na simula, walang bot.
- **Mga holder ng $AGNT**, na may parte sa mga fee mula sa bawat launch.

## Saklaw ng phase 1

Lahat ng token ay naka-pair sa **BNB** sa **BNB Chain**. Puwedeng sumunod ang ibang pair at chain habang lumalaganap ang mga
agent wallet; tatanungin muna ang komunidad.
