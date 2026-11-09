# Lançar um token

Diga ao seu agente o que lançar, revise a prévia e aprove. É todo o fluxo.

```text
Launch a token on Agentic Starter: name "Nova Agent", symbol NOVA, description "Scouts fresh launches",
logo https://…/nova.png, X @nova_agent, and buy 0.2 BNB of it in the same transaction.
Show me the preview first and wait for my OK.
```

O agente executa:

```bash
agentic create --name "Nova Agent" --symbol NOVA \
  --description "Scouts fresh launches" --logo https://…/nova.png --twitter @nova_agent \
  --telegram https://t.me/nova_agent --buy 0.2
agentic execute --request-id <id>
```

Antes da prévia, a CLI procura um salt que faça o endereço do token terminar em `AAAA`. Leva alguns segundos.

No site, o formulário de lançamento funciona em três etapas. Escreva uma frase sobre a sua ideia e toque em **Fill it in**
para receber um nome, símbolo e descrição que você pode editar. Arraste o logo: ele é fixado no IPFS e o prompt usa o
link `ipfs://` (pela CLI, `--logo ./nova.png` faz o mesmo). Depois escolha para onde vão as taxas do criador, confira o
cartão de prévia e copie o prompt para o seu agente. Um simulador de curva mostra o preço e o market cap em cada etapa.

| Campo | Limite |
| --- | --- |
| Nome | 1–32 caracteres |
| Símbolo | 2–10 letras maiúsculas ou dígitos. Tickers como AGNT, BNB, BTC, ETH, USDT, USDC e CAKE são reservados |
| Alfabeto do nome e do símbolo | Um alfabeto por nome, então letras parecidas de outros alfabetos são rejeitadas |
| Metadados (descrição, URL do logo, links) | guardados on-chain, até ~1 KB |
| Logo | uma URL `https://` / `ipfs://`, ou um PNG, JPG, GIF ou WebP local de até 1 MB (enviado ao IPFS) |
| Primeira compra | opcional, precisa de Agent ID, vale o limite por carteira |
| X | um link ou `@usuario` (guardado como o usuário) |
| Telegram | somente um link `t.me` |
| Taxa de lançamento | {{P.mainnet.launchFeeBnb}} BNB na mainnet, grátis na testnet e para stakers de AGNT com benefícios, mais gas |
| Par | BNB. Outros pares virão depois |

Os tokens não têm taxa de transferência, função de mint nem dono.

## Para onde vão as taxas do criador

| Opção | CLI | Site |
| --- | --- | --- |
| Sua carteira de lançamento (padrão) | — | deixe a carteira de taxas vazia |
| Outra carteira | `--fee-to 0xWallet:100` | campo **Creator fee wallet** |
| Uma divisão, até 10 destinatários | `--fee-to 0xA:60,0xB:40` | definida em My tokens depois do lançamento |
| Uma conta do X ou do GitHub | `--fee-to 0xA:80,x:@alice:20` | definida em My tokens depois do lançamento |
| Cashback para os traders | `--cashback` | **Reward mode → Cashback** |

As partes de contas esperam num escrow até o dono da conta comprovar a conta e vincular uma carteira; as partes não
resgatadas voltam ao criador depois de 90 dias. Uma mudança na divisão vale 24 horas depois de proposta. Veja
[Taxas](/pt/guide/fees#creator-fee-options).

## Testnet: lançar com o bot do Telegram {#testnet-telegram}

Na testnet da BNB Chain você pode lançar sem configurar um agente. Nosso bot Agen faz o papel do agente e paga o gas; sua
carteira fica registrada como criadora.

1. Abra [Launch](https://agenticstarter.xyz/launch?lang=pt), conecte a carteira que será dona do token e preencha nome, símbolo,
   logo, descrição e links.
2. Toque em **Open in Telegram**. O bot abre com o seu código de lançamento e mostra uma prévia.
3. Toque em **🚀 Launch now**. Segundos depois o bot responde com o endereço do token, e ele aparece na página Explore.

Se o Telegram não abrir, copie a linha `/launch ABCD2345` da página e envie ao bot. Os códigos valem por 24 horas e
funcionam uma vez. Cada conta do Telegram pode lançar até 3 tokens por dia.

O bot não compra por você. Para comprar, abra a página do token, pegue um Agent ID de testnet grátis e compre com BNB de
teste. Na testnet um token gradua com **{{P.testnet.graduationTargetBnb}} BNB**.

## Depois do lançamento

A página de lançamento mostra então um **kit pós-lançamento**: um post pronto para o X, um texto para o Telegram, uma
imagem para compartilhar e um widget para incorporar no seu site. Em [My tokens](https://agenticstarter.xyz/me?lang=pt) você pode:

| Ação | Detalhes |
| --- | --- |
| Acompanhar o progresso | Progresso da curva, BNB arrecadado, holders |
| Resgatar recompensas de criador | 20% de cada taxa de curva do seu token, pagos em BNB, até a graduação, mais o bônus de graduação |
| Atualizar informações | Mude logo, descrição e links por {{P.mainnet.metaUpdateFeeBnb}} BNB na mainnet. Nome e símbolo nunca mudam. Os holders veem um aviso por 7 dias e o histórico completo fica público. |
| Divisão das taxas | Proponha uma nova divisão; ela vale depois de 24 horas |
| Transferir o criador | Proponha uma nova carteira de criador; ela assume quando aceitar na página do token. O que você já ganhou continua seu para resgatar. |
| Alocação do criador | Onde se aplica (hoje, na testnet), resgate a parte liberada depois da graduação |
| Verificar X | Vincule sua conta do X para mostrar um selo de criador verificado na página do token |

Os criadores dos primeiros 100 tokens a graduar na mainnet ganham o selo permanente **Genesis Creator**.
