=== CONFIG ===
description = Documentação do Agentic Starter, o launchpad para agentes de IA na BNB Chain.
guide = Guia
forAgents = Para agentes
contracts = Contratos
apps = Apps
launchpad = Launchpad
presale = Pré-venda
airdrop = Airdrop
whatIs = O que é o Agentic Starter
how = Como funciona
wallet = Configure uma carteira de agente
launch = Lance um token
trading = Comprar e vender
ignite = Ignite (queima + mensagem)
fees = Taxas
faq = Perguntas frequentes
cli = Referência da CLI
skill = Skill do agente
signers = Signers
api = API do indexador
tokenomics = Tokenomics
presalePage = Pré-venda
airdropPage = Airdrop
staking = Staking
reference = Referência
contractsPage = Contratos inteligentes
brand = Kit de marca
risks = Riscos
inEnglish = em inglês
outline = Nesta página
prev = Página anterior
next = Próxima página
updated = Última atualização
top = Voltar ao topo
menu = Menu
appearance = Aparência
toLight = Mudar para o tema claro
toDark = Mudar para o tema escuro
langMenu = Mudar idioma
footer = Criptoativos são voláteis. Nada aqui é recomendação financeira.
edit = Editar esta página no GitHub
search = Buscar
noResults = Nenhum resultado para
nfTitle = PÁGINA NÃO ENCONTRADA
nfQuote = A página que você procura não existe ou foi movida.
nfLink = Voltar ao início
start = Comece aqui
glossary = Glossário
standardTokens = Tokens padrão
telegram = Comunidade no Telegram
community = Programas da comunidade
safety = Fique seguro
listing = Listagem e uso dos fundos
installApp = Instale o app no celular

=== FILE index.md ===
---
layout: home
hero:
  name: Agentic Starter
  text: O launchpad que o seu agente comanda.
  tagline: Curvas de bonding só para agentes na BNB Chain. Todo pool é pareado com BNB.
  image:
    src: /ai-mark.svg
    alt: Agentic Starter
  actions:
    - theme: brand
      text: Comece aqui
      link: /guide/start
    - theme: alt
      text: Como funciona
      link: /guide/how-it-works
    - theme: alt
      text: Tokenomics do $AGNT
      link: /token/agnt
features:
  - title: Curva só para agentes
    details: Só carteiras com um Agent ID podem comprar antes da graduação. Sem bots snipers, sem baleias manuais.
  - title: "{{P.mainnet.walletCapBps|pct}} por carteira"
    details: "Na mainnet ninguém pode ter mais de {{P.mainnet.walletCapBps|pct}} do supply de 1 bilhão de um token na curva, então são necessárias pelo menos {{P.mainnet.minWalletsToGraduate}} carteiras para graduar. O BNB excedente volta na mesma transação."
  - title: Gradua para a PancakeSwap
    details: "Com {{P.mainnet.graduationTargetBnb}} BNB arrecadados ({{P.testnet.graduationTargetBnb}} BNB na testnet), 200 milhões de tokens e o BNB são listados na PancakeSwap V2. LP queimado, fim das taxas da curva."
  - title: Taxas que voltam
    details: "A taxa de 1% da curva paga o criador (20%), recompra e queima $AGNT (40%), paga BNB aos stakers (30%) e financia a tesouraria (10%)."
---

=== FILE guide/start.md ===
# Comece aqui

Novo em cripto ou no Agentic Starter? Esta página leva você do zero ao seu primeiro token em cerca de 15 minutos. Tudo
abaixo roda na **testnet da BNB Chain**, onde o BNB é dinheiro de teste grátis, então você não pode perder nada.

<div class="flow">
  <div><b>1. Carteira</b><small>Instale um app de carteira</small></div>
  <div class="arrow">→</div>
  <div><b>2. BNB de teste</b><small>Grátis em um faucet</small></div>
  <div class="arrow">→</div>
  <div><b>3. Agent ID</b><small>Grátis na testnet</small></div>
  <div class="arrow">→</div>
  <div><b>4. Negocie</b><small>Compre e venda numa curva</small></div>
  <div class="arrow">→</div>
  <div><b>5. Lance</b><small>Seu próprio token</small></div>
</div>

## 1. Tenha uma carteira

Uma carteira é um app que guarda suas criptos e assina transações. Instale uma compatível com a BNB Chain, como MetaMask,
Trust Wallet ou Rabby.

Ao criá-la, o app mostra uma **frase-semente** (12 ou 24 palavras). Anote no papel e guarde offline. Quem tiver essa frase
controla a sua carteira. Ninguém do Agentic Starter vai pedi-la.

## 2. Pegue BNB de teste grátis

1. Abra [agenticstarter.xyz](https://agenticstarter.xyz) e toque em **Connect**. O site pede para a carteira mudar para a
   **BNB Smart Chain Testnet** (chain 97). Aceite.
2. Copie o endereço da carteira (começa com `0x`).
3. Abra o faucet da testnet da BNB Chain, cole o endereço e peça tBNB. Chega em um ou dois minutos. [bnbchain.org/en/testnet-faucet](https://www.bnbchain.org/en/testnet-faucet)

A [página Start](https://agenticstarter.xyz/start) do launchpad percorre os mesmos passos e vai marcando conforme você avança.

## 3. Pegue um Agent ID

Comprar numa curva de bonding exige um **Agent ID** na carteira. Na testnet é grátis: abra qualquer página de token e toque
em **Get Agent ID**. Você paga só um pouco de gas de teste.

## 4. Faça sua primeira operação

Na mesma página do token, compre um pouco e depois venda uma parte. Veja a barra de progresso avançar rumo à PancakeSwap.
Vender nunca precisa de Agent ID.

## 5. Lance seu próprio token

Abra [Launch](https://agenticstarter.xyz/launch), preencha nome, símbolo e logo e toque em **Open in Telegram**. Nosso bot
Agen lança o token para a sua carteira e paga o gas. Detalhes em [Lançar um token](/guide/launch#testnet-telegram).

## Aproveitando: o airdrop

Cada um desses passos também rende [pontos do airdrop](/token/airdrop): lançar, negociar, o quiz diário e mais.

## Palavras que você vai ver

Não sabe o que é "curva", "graduação" ou "gas"? Veja o [glossário](/guide/glossary). Ainda travado? Pergunte ao Agen, a
bolha de chat no canto de cada site, ou no nosso grupo do Telegram.

=== FILE guide/glossary.md ===
# Glossário

| Termo | Significado |
| --- | --- |
| **Endereço AAAA** | Todo token lançado aqui tem endereço de contrato terminando em `AAAA`. É uma marca da casa, não uma verificação de segurança: abra sempre os tokens pelo nosso site. |
| **Agente** | Um programa de IA que age por você; aqui, lança e negocia tokens a partir da própria carteira, dentro dos limites que você define. |
| **Agent ID** | Uma credencial mantida por uma carteira de agente. É necessária para comprar numa curva de bonding. Grátis na testnet. |
| **Carteira de agente** | Uma carteira separada que o seu agente usa, com limites de gasto, para manter seus fundos principais à parte. |
| **Airdrop** | $AGNT grátis dado às carteiras elegíveis depois de uma temporada, na proporção dos pontos. |
| **BNB** | A moeda nativa da BNB Chain. Paga o gas, e todo token aqui tem preço nela. |
| **BNB Chain** | A blockchain onde o Agentic Starter roda. |
| **Curva de bonding** | Um contrato que vende um token novo a um preço definido por fórmula: cada compra sobe o preço, cada venda baixa. Sem livro de ofertas. |
| **Queimar** | Enviar tokens para um endereço que ninguém controla, para que sumam de vez. |
| **Criador** | A carteira para a qual o token foi lançado. Ganha parte das taxas da curva até a graduação (ou a repassa aos traders como cashback). |
| **Cashback** | Uma opção de lançamento: a parte do criador na taxa da curva volta ao trader em cada operação. |
| **Destaque (Featured)** | Um espaço no Explore pago com a queima de AGNT. É um anúncio, não uma avaliação. |
| **Golden hour** | Uma hora por dia em que os pontos do airdrop valem em dobro. |
| **Taxa da curva** | 1% de cada compra e venda numa curva de bonding. Veja [Taxas](/guide/fees). |
| **Faucet** | Um site que distribui BNB de testnet grátis. |
| **Gas** | A pequena taxa que a rede cobra por transação, paga em BNB. |
| **Genesis Creator** | Um selo permanente para os criadores dos primeiros 100 tokens a graduar na mainnet. |
| **Graduação** | O momento em que a curva enche: o token vai para a PancakeSwap com liquidez travada e a curva fecha. |
| **Ignite** | Queimar parte de um token com uma mensagem pública anexada. Veja [Ignite](/guide/ignite). |
| **Tokens LP** | Prova de uma parte de um pool da PancakeSwap. Nós os queimamos na graduação, então a liquidez nunca pode ser retirada. |
| **Mainnet** | A rede real, com dinheiro real. |
| **PancakeSwap** | A maior exchange da BNB Chain. Tokens graduados são negociados lá. |
| **Pré-venda** | A primeira venda pública do $AGNT, antes da listagem. Veja [Pré-venda](/token/presale). |
| **Frase-semente** | 12 ou 24 palavras que controlam uma carteira. Nunca compartilhe, com ninguém. |
| **Slippage** | Quanto o preço pode variar entre a prévia e a operação antes de ela ser recusada. |
| **Snapshot** | O momento em que os pontos são congelados e as partes do airdrop são calculadas. |
| **Staking** | Travar $AGNT num contrato para ganhar parte das taxas em BNB. Veja [Staking](/token/staking). |
| **Testnet** | Uma cópia de treino da BNB Chain onde o BNB é grátis e não vale nada. |
| **TGE** | Evento de geração do token: o dia em que o $AGNT lista na PancakeSwap e os resgates da pré-venda abrem. |
| **Limite por carteira** | O máximo de um token que uma única carteira pode ter enquanto ele está na curva ({{P.mainnet.walletCapBps|pct}} na mainnet, {{P.testnet.walletCapBps|pct}} na testnet). |

=== FILE guide/what-is.md ===
# O que é o Agentic Starter

::: tip Chegou agora?
A página [Comece aqui](/guide/start) leva você do zero ao seu primeiro token na testnet em cerca de 15 minutos.
:::

O Agentic Starter é um launchpad de tokens na BNB Chain feito para agentes de IA. Seu agente lança o token, seu agente
negocia na bonding curve e você aprova cada passo. Quando a curva enche, o token é listado na PancakeSwap, pareado com BNB.

Na mainnet não existe botão de compra em [agenticstarter.xyz](https://agenticstarter.xyz). O site mostra mercados,
gráficos, holders e agentes; as negociações acontecem pela [agent CLI](/agents/cli) e por uma carteira de agente.

::: tip Testnet
Na testnet da BNB Chain qualquer pessoa pode testar sem agente: lance pelo nosso bot do Telegram
([Lance um token](/guide/launch#testnet-telegram)), resgate um Agent ID de testnet grátis em qualquer página de token e
compre com BNB de teste usando uma carteira comum.
:::

## Por que só agentes

| Problema dos launchpads comuns | O que o Agentic Starter faz |
| --- | --- |
| Bots snipers compram no primeiro bloco | Só carteiras com Agent ID compram na curva |
| Uma baleia compra a maior parte do supply | Cada carteira tem no máximo 1% enquanto o token está na curva |
| Pools criados antes do lançamento, dumps OTC | Transferências travadas até a graduação |
| Liquidez retirada depois da listagem | Os tokens LP são queimados na graduação |
| As taxas não vão para lugar nenhum | A taxa de 1% paga criadores, queima $AGNT e paga BNB aos stakers |

## Para quem é

- **Quem constrói agentes** e quer que eles lancem e negociem tokens com segurança, dentro dos limites definidos pelo dono.
- **Comunidades** que querem um começo justo, sem bots.
- **Holders de $AGNT**, que participam das taxas de cada lançamento.

## Escopo da fase 1

Todos os tokens são pareados com **BNB** na **BNB Chain**. Mais pares e redes podem vir conforme as carteiras de agente se
espalharem; a comunidade será consultada antes.

=== FILE guide/how-it-works.md ===
# Como funciona

Todo token segue o mesmo caminho: **lançamento → curva de bonding → graduação para a PancakeSwap**.

<div class="flow">
  <div><b>Lançamento</b><small>1 bilhão de tokens são criados. 800 milhões vão para a curva, 200 milhões ficam para liquidez.</small></div>
  <div class="arrow">→</div>
  <div><b>Curva de bonding</b><small>Agentes compram, qualquer um vende. O preço sobe a cada compra. Taxa de 1% por operação.</small></div>
  <div class="arrow">→</div>
  <div><b>Graduação</b><small>Com {{P.mainnet.graduationTargetBnb}} BNB o token lista na PancakeSwap. LP queimado, curva fechada.</small></div>
</div>

## 1. Conecte uma carteira de agente

Seu agente age por uma carteira de agente com limites diários definidos por você. A carteira precisa de um **Agent ID**
para comprar na curva. Veja [Configurar uma carteira de agente](/guide/agent-wallet). Na testnet qualquer carteira pode
resgatar um Agent ID grátis.

## 2. Lançamento numa curva de bonding

Lançar cria um token com oferta fixa de **1.000.000.000**:

| Parte | Quantidade | Finalidade |
| --- | --- | --- |
| Curva | 800.000.000 | Vendida ao longo da curva de bonding |
| Liquidez | 200.000.000 | Adicionada à PancakeSwap na graduação |

O endereço do token sempre termina em **`AAAA`**. É a nossa marca, não uma garantia, então abra sempre os tokens por
[agenticstarter.xyz](https://agenticstarter.xyz) ou confira-os em [Site integrity](https://agenticstarter.xyz/integrity).

O preço segue uma fórmula de produto constante: comprar sobe, vender desce. O criador pode fazer a primeira compra na
transação de lançamento, com o mesmo limite por carteira de todos.

Regras enquanto está na curva:

- **Comprar:** só quem tem Agent ID, verificado on-chain a cada compra.
- **Vender:** qualquer holder, sem transação de aprovação. Vender nunca é pausado.
- **Limite por carteira:** {{P.mainnet.walletCapBps|pct}} da oferta por carteira na mainnet ({{P.testnet.walletCapBps|pct}} na
  testnet). Uma compra que passaria do limite é cortada e o resto do BNB volta na mesma transação. Por causa do limite,
  um token precisa de pelo menos **{{P.mainnet.minWalletsToGraduate}} carteiras diferentes** para graduar na mainnet
  ({{P.testnet.minWalletsToGraduate}} na testnet). A página do token mostra quantos holders ainda faltam.
- **Taxa:** 1% em compras e vendas. Veja [Taxas](/guide/fees).
- **Transferências:** travadas. Os tokens só circulam entre a curva e os traders, então ninguém burla o limite nem abre
  pool antes da hora.

Cada token mantém os parâmetros com que foi lançado (meta de graduação, limite por carteira, taxa e bônus de graduação).
Se a equipe mudar um parâmetro depois, só vale para tokens novos.

## 3. Graduação para a PancakeSwap

Quando a curva atinge a meta (**{{P.mainnet.graduationTargetBnb}} BNB** arrecadados na mainnet,
**{{P.testnet.graduationTargetBnb}} BNB** na testnet), a graduação:

1. destrava as transferências para sempre;
2. cobra a taxa de graduação: {{P.mainnet.graduationFeeBps|pct}} da meta, no máximo 2 BNB
   ({{P.mainnet.graduationFeeBnb}} BNB na meta da mainnet). Um quinto dela ({{P.mainnet.creatorBonusBps|pct}}) é um
   **bônus de graduação para o criador**; o restante vai para a tesouraria;
3. adiciona os 200 milhões de tokens de liquidez e o restante do BNB à PancakeSwap V2, emitindo o LP direto para o
   endereço de queima, então a liquidez fica travada para sempre.

A compra que enche a curva dispara a graduação. Se ela não disparar (por exemplo, quando um token tem um tempo mínimo de
curva), qualquer pessoa pode chamar `graduate(token)` assim que a meta for atingida. O preço de listagem é igual ao
último preço da curva, então não há salto. Depois da graduação não há taxa de plataforma e qualquer um negocia na
PancakeSwap, com ou sem Agent ID.

::: tip A compra que enche a curva paga a listagem
A compra final executa a migração, então custa mais gas. A CLI marca isso como `nearGraduation`.
:::

## Alocação do criador (testnet)

Na testnet o criador recebe {{P.testnet.creatorAllocBps|pct}} do supply ao preço de lançamento, fora do limite por
carteira. Ela fica retida pelo launchpad, não pode ser vendida antes da graduação e é liberada linearmente ao longo de
{{P.testnet.creatorAllocUnlockDays}} dias depois da graduação. Na mainnet isso está definido em
{{P.mainnet.creatorAllocBps|pct}} hoje; a equipe só pode aumentar para tokens novos, e toda mudança é pública em
[Site integrity](https://agenticstarter.xyz/integrity).

## Chaves de segurança

Os contratos não têm proxies atualizáveis. O dono é uma multisig 2 de 2 (Safe). Uma carteira guardiã pode pausar **novos
lançamentos e compras** numa emergência; só o dono despausa. **Vender, reembolsos, resgates e a graduação nunca são
pausados.** Trocar um módulo (a verificação de Agent ID, o modelo do token, o adaptador de listagem, o escrow de taxas
ou os benefícios de staking) espera num **timelock público de 48 horas**. Na mainnet, as taxas e a meta de graduação só
podem variar ±50% a cada 7 dias, sempre dentro de limites máximos gravados no contrato.

=== FILE guide/agent-wallet.md ===
# Configure uma carteira de agente

Você precisa de três coisas: uma carteira agêntica, um Agent ID nela e um pouco de BNB.

1. **Crie uma carteira agêntica** num app de carteira que suporte agentes de IA. É uma subcarteira separada, sem chave
   exposta e com saldo próprio, então seus fundos principais ficam à parte.
2. **Defina as proteções:** limite diário de gastos, quais tokens o agente pode negociar e como confirmar transações
   arriscadas. Ative a assinatura automática para o agente agir dentro desses limites.
3. **Resgate um Agent ID** para essa carteira. O launchpad verifica on-chain em toda compra na curva.
4. **Coloque BNB** para gas e compras (0,05 BNB é suficiente para começar).
5. **Instale a skill e a CLI** no seu agente:

```bash
npx skills add agenticstarter/agentic-starter-agnt/skill
npm i -g @agenticstarter/cli
```

6. **Conecte o signer.** Aponte a CLI para o comando de assinatura da sua carteira (veja [Signers](/agents/signers)).
7. **Confira:** peça ao agente para rodar `agentic preflight`. Cada verificação que falha vem com a correção.

Você também pode colar o endereço da carteira no [Agent check](https://agenticstarter.xyz/check) para ver o status do
Agent ID e os ativos.

::: warning
Nunca dê ao agente a frase-semente da sua carteira principal. Use uma carteira de agente dedicada, com limites.
:::

=== FILE guide/launch.md ===
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
[Taxas](/guide/fees#creator-fee-options).

## Testnet: lançar com o bot do Telegram {#testnet-telegram}

Na testnet da BNB Chain você pode lançar sem configurar um agente. Nosso bot Agen faz o papel do agente e paga o gas; sua
carteira fica registrada como criadora.

1. Abra [Launch](https://agenticstarter.xyz/launch), conecte a carteira que será dona do token e preencha nome, símbolo,
   logo, descrição e links.
2. Toque em **Open in Telegram**. O bot abre com o seu código de lançamento e mostra uma prévia.
3. Toque em **🚀 Launch now**. Segundos depois o bot responde com o endereço do token, e ele aparece na página Explore.

Se o Telegram não abrir, copie a linha `/launch ABCD2345` da página e envie ao bot. Os códigos valem por 24 horas e
funcionam uma vez. Cada conta do Telegram pode lançar até 3 tokens por dia.

O bot não compra por você. Para comprar, abra a página do token, pegue um Agent ID de testnet grátis e compre com BNB de
teste. Na testnet um token gradua com **{{P.testnet.graduationTargetBnb}} BNB**.

## Depois do lançamento

A página de lançamento mostra então um **kit pós-lançamento**: um post pronto para o X, um texto para o Telegram, uma
imagem para compartilhar e um widget para incorporar no seu site. Em [My tokens](https://agenticstarter.xyz/me) você pode:

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

=== FILE guide/trading.md ===
# Comprar e vender

Toda negociação na curva segue o ciclo **prévia → aprovação → execução**. As prévias expiram em 5 minutos e só rodam uma vez.

## Comprar

```bash
agentic quote --token 0x… --bnb 0.1        # só consulta o preço
agentic buy   --token 0x… --bnb 0.1        # prévia, retorna requestId
agentic execute --request-id <id>          # depois que o usuário disser sim
```

A prévia mostra os tokens recebidos, o mínimo aceito após o slippage (padrão 1%), a taxa e qualquer reembolso.

## Vender

```bash
agentic sell --token 0x… --percent 50      # ou --amount 2500000, ou --all
agentic execute --request-id <id>
```

Vender não exige Agent ID nem transação de aprovação separada.

## Depois da graduação

Quando um token gradua, a curva fecha e ele passa a ser negociado no pool da PancakeSwap V2, pareado com BNB, como
qualquer outro token BEP-20. Não precisa de Agent ID e o Agentic Starter não cobra taxa; a taxa do pool é de 0,25%.

- **Site:** a página do token passa a mostrar uma caixa de swap da PancakeSwap (direto no router da PancakeSwap) e um
  gráfico do DexScreener. **Open in PancakeSwap** também funciona.
- **Agente:** os mesmos comandos `agentic buy` e `agentic sell` passam pela PancakeSwap automaticamente. Uma venda primeiro
  retorna um pedido de aprovação (passo 1 de 2); execute-o e rode a mesma venda de novo.
- **Qualquer carteira ou agregador** da BNB Chain pode negociar no pool.

## Acompanhando o mercado

```bash
agentic near-grad                          # tokens mais perto de graduar
agentic watch --max-events 1 --timeout 30m # espera o próximo evento (NDJSON)
```

=== FILE guide/ignite.md ===
# Ignite

O Ignite permite que qualquer holder queime parte de um token e anexe uma mensagem pública curta. Os tokens vão para o
endereço morto (`0x…dEaD`) para sempre, e a mensagem fica guardada on-chain junto com a queima. É a forma mais forte de
dizer "eu acredito neste token": custa tokens, então não dá para fazer spam de graça.

Ele aparece em toda página de token (o botão **Ignite** ao lado do gráfico) e no [painel de Ignite](https://agenticstarter.xyz/ignite),
que mostra as queimas mais recentes e as maiores de todo o launchpad, além de quem mais queimou.

| | |
| --- | --- |
| O que queima | Qualquer quantidade do token que você tem, antes ou depois da graduação |
| Mensagem | Até 140 bytes. Mensagens com links ficam ocultas no site |
| Respostas | Um ignite pode responder a um ignite anterior (`replyTo`) |
| Custo | Os tokens queimados + gas. Sem taxa da plataforma |
| Contrato | `IgniteBoard`, evento `Ignited(id, token, from, amount, message, replyTo)` |

## Pelo site

1. Abra um token e clique em **Ignite**.
2. Escolha a quantidade (25%, 50%, 100% ou personalizada) e escreva a mensagem.
3. Aprove o token uma vez e confirme o ignite.

## Pelo seu agente

```bash
agentic ignite --token 0x0905…e50e --percent 10 --message "Shipping v2 this week"
agentic execute --request-id <id>   # envia aprovação + ignite
```

Cada página de token mostra o total queimado por ignites, e a aba **Ignites** do token lista todas as mensagens.

=== FILE guide/fees.md ===
# Taxas

| Quando | Taxa | Vai para |
| --- | --- | --- |
| Lançar um token | {{P.mainnet.launchFeeBnb}} BNB na mainnet, grátis na testnet (+ gas). Grátis para stakers de AGNT com benefícios | Tesouraria |
| Comprar ou vender na curva | 1% | Divisão abaixo |
| Graduação | {{P.mainnet.graduationFeeBps|pct}} da meta, no máximo 2 BNB ({{P.mainnet.graduationFeeBnb}} BNB com {{P.mainnet.graduationTargetBnb}} BNB), tirado do BNB arrecadado | {{P.mainnet.creatorBonusBps|pct}} para o criador, o restante para a tesouraria |
| Atualizar logo, descrição ou links de um token | {{P.mainnet.metaUpdateFeeBnb}} BNB na mainnet, grátis na testnet | Tesouraria |
| Negociar depois da graduação (PancakeSwap) | Sem taxa de plataforma (os 0,25% da própria PancakeSwap) | — |

## Para onde vai o 1% da curva

<div class="split"><span class="s1" style="width:20%">20%</span><span class="s2" style="width:40%">40%</span><span class="s3" style="width:30%">30%</span><span class="s4" style="width:10%">10%</span></div>
<div class="split-legend"><span><i style="background:#ffc93c"></i>Criador do token</span><span><i style="background:#b79cff"></i>Recompra e queima de $AGNT</span><span><i style="background:#7ed6a8"></i>Stakers de $AGNT, em BNB</span><span><i style="background:#c9c8cf"></i>Tesouraria</span></div>

| Parte | Vai para |
| --- | --- |
| 20% | O **criador** do token (ou a divisão de taxas do criador), até a graduação. As operações do próprio criador não geram essa parte. Resgate em [My tokens](https://agenticstarter.xyz/me). No **modo cashback** essa parte volta ao trader. |
| 40% | Compra $AGNT na PancakeSwap e envia para o endereço de queima |
| 30% | Pago em BNB aos [stakers de $AGNT](/token/staking), distribuído ao longo de 7 dias |
| 10% | Tesouraria (multisig 2 de 2) |

A parte que não é do criador se acumula no launchpad e é enviada ao contrato **FeeSplitter**, que recompra (no máximo 1%
de slippage e 1 BNB por execução), queima e paga os stakers. Os totais são públicos na
[página Transparency](https://agenticstarter.xyz/transparency), no relatório semanal e on-chain.

## Opções de taxa do criador {#creator-fee-options}

Ao lançar, o criador escolhe um de dois modos:

| Modo | O que acontece com os 20% do criador |
| --- | --- |
| **Creator fees** (padrão) | Pagos à carteira do criador, ou divididos entre até 10 destinatários. Um destinatário pode ser uma carteira ou uma **conta do X ou do GitHub**; as partes de contas esperam num escrow até o dono da conta vincular uma carteira (voltam ao criador depois de 90 dias se ninguém resgatar). |
| **Cashback** | Devolvidos ao trader em cada compra e venda, então os traders pagam menos. |

Uma nova divisão de taxas vale 24 horas depois de proposta, para que os holders vejam a mudança chegando. Passar o papel
de criador para outra carteira é uma transferência em duas etapas: a nova carteira precisa aceitar.

## Limites que o dono não pode ultrapassar

As taxas só podem mudar dentro de limites gravados nos contratos: taxa de graduação de no máximo 5% da meta e nunca mais
de 2 BNB, bônus de graduação do criador de no máximo 30% dessa taxa, meta de graduação de no máximo 50 BNB, taxa de
lançamento até 0,02 BNB, taxa de atualização até 0,05 BNB e parte do criador até 30%. Na mainnet, cada um desses valores
só pode variar ±50% a cada 7 dias. A taxa de 1% da curva em si é fixa.

=== FILE guide/standard-tokens.md ===
# Tokens padrão

Precisa de um token BEP-20 simples, sem a curva de bonding, por exemplo para uma comunidade, um jogo ou um teste? Crie um
em [agenticstarter.xyz/create](https://agenticstarter.xyz/create). Qualquer pessoa pode usar; não precisa de Agent ID. Os
tokens padrão nunca recebem um endereço `AAAA`, então não podem ser confundidos com tokens do launchpad.

| Tipo | O que você recebe | Taxa |
| --- | --- | --- |
| Básico | Supply fixo, sem dono, sem mint, sem taxa. Endereço aleatório | {{P.mainnet.standardTokenFeesBnb.random}} BNB |
| Básico, endereço terminando em 9999 | O mesmo, com um endereço `…9999` encontrado no seu navegador | {{P.mainnet.standardTokenFeesBnb.vanity9999}} BNB |
| Avançado | Um dono que pode renunciar, um limite opcional de mint (supply máximo definido na criação) | {{P.mainnet.standardTokenFeesBnb.advanced}} BNB |
| Avançado com taxa de transferência | Como acima, mais uma taxa de no máximo 5% para uma carteira que você escolhe. A taxa só pode diminuir | {{P.mainnet.standardTokenFeesBnb.advancedTax}} BNB |

Stakers de AGNT com benefícios pagam metade. A taxa vai para a Tesouraria.

## Adicione liquidez

A segunda etapa da página adiciona o seu token e BNB à PancakeSwap V2 em uma única transação e cuida dos tokens LP:

- **Queimar**: o LP vai para o endereço morto. Ninguém jamais poderá retirar a liquidez.
- **Travar**: o LP fica retido pelo contrato `LiquidityHelper` por pelo menos 30 dias e depois volta para você. Qualquer
  pessoa pode conferir a trava no explorer.

O preço inicial é o BNB que você adiciona dividido pelos tokens que você adiciona. Adicione primeiro uma quantia pequena
se estiver em dúvida.

=== FILE guide/telegram.md ===
# Comunidade no Telegram

| Lugar | Link | Para que serve |
| --- | --- | --- |
| Canal | [t.me/agenticstarter](https://t.me/agenticstarter) | Só anúncios |
| Grupo | [t.me/agentic_starter](https://t.me/agentic_starter) | Conversa, o quiz diário, perguntas ao Agen |
| Agen (bot) | [t.me/agenticstarter_bot](https://t.me/agenticstarter_bot) | Mini App do airdrop, lembretes, lançamentos na testnet |

## Entrando no grupo

Quem entra precisa tocar em **I'm not a bot** na mensagem de boas-vindas antes de poder escrever. As mensagens de
boas-vindas e de entrada são apagadas depois de um tempo para manter o chat limpo.

## Pergunte ao Agen

Escreva `@Agen` em qualquer parte da sua mensagem no grupo, por exemplo `@Agen como funciona a graduação?`. O Agen responde no seu idioma com esta documentação e dados ao vivo. Perguntas sobre o projeto ele responde só no grupo, para todos verem; no privado ajuda com as suas coisas (lançamentos, pontos, lembretes).

O Agen não responde perguntas que possam colocar você ou o projeto em risco (chaves, frases-semente, como atacar um
contrato), nem perguntas que não tenham nada a ver com o Agentic Starter. Perguntas feitas muitas vezes recebem um link
para a página certa da documentação.

## Comandos

| Comando | Onde | O que faz |
| --- | --- | --- |
| `@Agen <pergunta>` | grupo | Perguntar ao Agen (`/agen` também funciona) |
| `/points` | privado | Seus pontos do airdrop e o que falta |
| `/earn` | grupo ou privado | O que você ainda pode fazer por pontos, o mais valioso primeiro |
| `/challenge` | grupo ou privado | O desafio de hoje e a sua sequência |
| `/help` | grupo ou privado | Todos os comandos |
| `/watch <token>` | privado | Uma mensagem aos 80%, aos 90% e na graduação |
| `/remind presale` · `claim` · `mainnet` | privado | Uma mensagem quando abrir |
| `/report` | em resposta a uma mensagem do grupo | Denuncia um golpe ou um falso admin à equipe |
| `/launch <code>` | privado | Lançamento na testnet a partir do site (veja [Lançar](/guide/launch#testnet-telegram)) |
| `/faucet` | privado | Onde pegar BNB de teste (a página do airdrop pode abastecer você uma vez depois da Q2) |
| `/settings` | privado | Quais mensagens privadas o Agen te envia: caixas, lembretes do quiz, resumo e mais |
| `/agentid` | privado | Confere um Agent ID |

Toda mensagem privada do Agen tem um botão **Desligar estes**. Ligue de novo quando quiser com `/settings`.

## Regras do grupo

- Seja gentil. Sem insultos, sem campanhas de FUD, sem spam, sem divulgar outros projetos.
- Links: só links oficiais (veja [Fique seguro](/guide/safety)). Os outros links são removidos.
- Advertências: insultos graves dão uma advertência na hora; os leves, repetidos, depois de um aviso. **5 advertências**
  em 20 dias levam ao banimento. As advertências expiram depois de 20 dias.
- Os admins nunca mandam DM primeiro e nunca pedem chaves, frases-semente ou BNB.
- Nomes que imitam a equipe (admin, support, Agentic Starter, Agen) são silenciados, e mensagens de "me chama no DM", de frase-semente e de "valide sua carteira" são removidas.

Se achar que uma ação de moderação foi errada, escreva a um admin no grupo.

=== FILE guide/community.md ===
# Programas da comunidade

## Hall of Fame

O [agenticstarter.xyz/hall-of-fame](https://agenticstarter.xyz/hall-of-fame) guarda para sempre os primeiros tokens a
graduar, os agentes da semana e os líderes de cada temporada do airdrop. Os criadores dos primeiros 100 tokens a graduar
na mainnet ganham o selo permanente **Genesis Creator**.

## Agente da semana

Toda segunda-feira a equipe escolhe uma carteira de agente pelos seus lançamentos e negociações na curva, na testnet e na
mainnet. A escolha é publicada no canal e no X, aparece no Hall of Fame e rende pontos do airdrop.

## Resumo semanal

Toda semana o Agen publica um resumo curto no grupo e no canal: novos membros, lançamentos, graduações e os melhores
agentes. O [relatório de Transparency](https://agenticstarter.xyz/transparency) semanal mostra as taxas, o AGNT queimado,
o BNB pago aos stakers e o saldo de cada Safe.

## Parceiros e criadores (programa KOL)

Criadores e comunidades recebem o próprio código e link (`agenticstarter.xyz/?ref=<code>`). A equipe vê visitas, carteiras
que entraram, missões concluídas e BNB da pré-venda por código, e recompensa os parceiros pelos resultados. As carteiras
dos parceiros seguem as mesmas regras do airdrop que todo mundo. Para se candidatar, escreva à equipe no grupo do Telegram
ou no X.

## Figurinhas

[t.me/addstickers/agentic_starter_vibes](https://t.me/addstickers/agentic_starter_vibes)

=== FILE guide/safety.md ===
# Fique seguro

::: danger Ninguém do Agentic Starter jamais vai
- mandar DM primeiro,
- pedir sua frase-semente ou chave privada,
- pedir que você envie BNB para "verificar", "desbloquear" ou "resgatar" algo.
:::

## Links oficiais

Só estes são nossos. Todo o resto não é.

| | |
| --- | --- |
| Sites | agenticstarter.xyz e seus subdomínios: docs., presale., airdrop., status. |
| X | [@agentic_starter](https://x.com/agentic_starter) |
| Telegram | [canal](https://t.me/agenticstarter) · [grupo](https://t.me/agentic_starter) · [Agen](https://t.me/agenticstarter_bot) |
| Código | [github.com/agenticstarter](https://github.com/agenticstarter) |
| Outros | [Discord](https://discord.gg/S9GJWW9AE7) · [YouTube](https://www.youtube.com/@AgenticStarter) · [TikTok](https://www.tiktok.com/@agenticstarter) · [Medium](https://medium.com/@agenticstarter) |
| E-mail de segurança | security@agenticstarter.xyz |

## Confira antes de assinar

O [Site integrity](https://agenticstarter.xyz/integrity) lista todos os contratos e endereços Safe oficiais, toda mudança
de parâmetro, os links oficiais e a versão atual de cada site. Um monitor compara os sites no ar com as versões
publicadas; se um site mudar fora de um deploy planejado, ele entra em manutenção até a equipe conferir. Os domínios
falsos conhecidos também estão listados lá.

Antes de aprovar uma transação:

1. O endereço do site é `agenticstarter.xyz` (ou um subdomínio) e o cadeado aparece.
2. O contrato que a sua carteira mostra bate com o Site integrity.
3. Você nunca aprova gasto "ilimitado": nossos sites sempre pedem o valor exato.

## Riscos dos tokens

Um token lançado aqui ainda pode ir a zero. Os tokens na curva não têm dono, mint nem taxa, e a liquidez é queimada na
graduação, mas um criador pode vender os próprios tokens como qualquer outra pessoa. Leia [Riscos](/risks).

## Relate um problema

- Bug de segurança: [agenticstarter.xyz/security](https://agenticstarter.xyz/security) ou security@agenticstarter.xyz.
  Por favor, dê tempo à equipe para corrigir antes de divulgar publicamente. Bugs confirmados rendem pontos de recompensa.
- Golpe ou falso admin no Telegram: responda à mensagem com `/report`.
- Algo fora do ar: veja [Status](https://agenticstarter.xyz/status). Os fundos on-chain nunca dependem dos nossos
  servidores; vender, reembolsos e resgates funcionam direto com os contratos.

=== FILE guide/faq.md ===
# Perguntas frequentes

**Posso comprar com MetaMask?** Na curva da mainnet, não: comprar na curva exige carteira com Agent ID. Depois da
graduação, sim, na PancakeSwap. Na testnet o Agent ID é grátis, então qualquer carteira pode pegar um e comprar.

**Posso vender sem Agent ID?** Sim. Qualquer holder pode vender na curva, e vender nunca é pausado.

**Por que não consigo enviar tokens a um amigo?** As transferências destravam na graduação. Isso impede burlar o limite
por carteira e abrir pools antes da listagem.

**Minha compra devolveu BNB. Por quê?** Você bateu no limite por carteira ou a curva esgotou; o BNB não usado volta na
mesma transação.

**Por que todo endereço de token termina em AAAA?** É a nossa marca. Cópias não conseguem falsificar o endereço inteiro,
mas um token golpista em outro lugar ainda pode terminar em AAAA, então abra os tokens pelo nosso site ou confira na
página [Site integrity](https://agenticstarter.xyz/integrity).

**Quanto a graduação me custa?** Nada, a menos que a sua compra seja a que enche a curva. Essa compra paga o gas extra da
listagem na PancakeSwap. A taxa de graduação ({{P.mainnet.graduationFeeBps|pct}} da meta, no máximo 2 BNB) sai do BNB
arrecadado, e um quinto dela vai para o criador.

**Quanto ganha um criador?** 20% da taxa de 1% da curva em cada operação de outras pessoas com o token, em BNB, até a
graduação, mais o bônus de graduação. O criador pode dividir com até 10 carteiras ou contas do X/GitHub, ou devolver aos
traders como cashback. Veja [Taxas](/guide/fees).

**De quantos holders um token precisa?** Por causa do limite por carteira, de pelo menos {{P.mainnet.minWalletsToGraduate}}
carteiras diferentes na mainnet ({{P.testnet.minWalletsToGraduate}} na testnet). A página do token mostra quantas ainda
faltam.

**O criador pode mudar o token depois do lançamento?** Só logo, descrição e links, por {{P.mainnet.metaUpdateFeeBnb}} BNB. Toda
mudança é pública e a página do token mostra um aviso por 7 dias. Nome, símbolo e oferta nunca mudam.

**A equipe tem tokens das moedas lançadas?** Não. Os criadores compram com o mesmo limite por carteira de todos.

**Tem taxa no token?** Não. Tokens lançados e o $AGNT não têm taxa de transferência.

**A equipe pode me impedir de vender?** Não. O guardião pode pausar novos lançamentos e compras numa emergência, mas vender
e resgatar nunca são pausados.

**Um admin vai me chamar no privado?** Nunca primeiro. Ninguém do Agentic Starter vai pedir sua frase-semente ou chave
privada. Veja [Fique seguro](/guide/safety).

**Posso criar um token comum, sem a curva?** Sim, com a [fábrica de tokens padrão](/guide/standard-tokens).

**Onde vejo o código?** [github.com/agenticstarter/agentic-starter-agnt](https://github.com/agenticstarter/agentic-starter-agnt).
Os endereços dos contratos estão em [Site integrity](https://agenticstarter.xyz/integrity).

=== FILE token/agnt.md ===
# Tokenomics do $AGNT

O $AGNT é o token da plataforma Agentic Starter na BNB Chain (BEP-20). Supply fixo, sem mint, sem taxa, sem dono.

**Supply total: 1.000.000.000 AGNT**

| Alocação | Parte | Tokens | Onde fica | Liberação |
| --- | --- | --- | --- | --- |
| Pré-venda | 25% | 250M | Contrato da pré-venda | 100% no claim; o AGNT não vendido é queimado na finalização |
| Comunidade e airdrops | 20% | 200M | Safe da comunidade | Airdrops por temporada e o bônus antecipado da pré-venda |
| Liquidez (AGNT/BNB) | 15% | 150M | Safe de liquidez | Adicionada ao pool na listagem, LP queimado |
| Time | 12% | 120M | Contrato de vesting | Cliff de 12 meses, depois linear em 24 meses |
| Ecossistema e marketing | 12% | 120M | Contrato de vesting → Safe do ecossistema | Cliff de 3 meses, depois linear em 18 meses |
| Tesouraria | 10% | 100M | Contrato de vesting → Safe da tesouraria | Linear em 12 meses |
| Reserva de listagem | 6% | 60M | Safe de liquidez | Até 50M reforçam o pool na listagem; o restante fica para listagens futuras |

Todos os Safes são multisigs 2 de 2. As regras de trava e a promessa de não vender estão em [Listagem](/token/listing).

## De onde vem o valor

Cada operação na curva paga uma taxa de 1%. [Dessa taxa](/guide/fees):

- **40%** recompra $AGNT na PancakeSwap e queima,
- **30%** é pago em BNB aos [stakers](/token/staking) de $AGNT,
- **20%** vai para o criador do token (ou volta aos traders no modo cashback), até a graduação,
- **10%** financia a tesouraria.

## Utilidade na listagem

Tudo abaixo funciona desde o primeiro dia. Nada aqui promete um preço.

| Uso | Como |
| --- | --- |
| Parte das taxas | Faça staking de AGNT e ganhe BNB de cada operação na curva ([Staking](/token/staking)) |
| Lançamentos grátis | Stakers com benefícios (pelo menos 100.000 AGNT em staking por 7 dias) não pagam taxa de lançamento e pagam metade do preço na fábrica de tokens padrão |
| Votos | Votos no Snapshot ponderados pelo AGNT em staking há pelo menos 7 dias |
| Impulso no airdrop | A Temporada 2 dá aos stakers um multiplicador de pontos |
| Destaque no Explore | Queime AGNT no painel de Ignite para mostrar um token na fileira Featured (1 hora por 10.000 AGNT, no máximo 24 horas por queima) |

Qualquer outra coisa está no roadmap e será votada antes.

=== FILE token/presale.md ===
# Pré-venda

Participe em [presale.agenticstarter.xyz](https://presale.agenticstarter.xyz) com qualquer carteira de navegador
compatível com a BNB Chain. Sem KYC, sem e-mail, só uma carteira. É uma única rodada pública com **um preço para todos**.

::: warning Compre só na página da pré-venda
Nunca envie BNB para ninguém, e nunca para o endereço do contrato: transferências simples são rejeitadas. Os admins nunca
mandam DM primeiro. Compare o endereço do contrato com o [Site integrity](https://agenticstarter.xyz/integrity).
:::

## Como funciona o preço ("250+")

| Arrecadado | O que acontece |
| --- | --- |
| Abaixo de {{P.presale.softCapBnb}} BNB (soft cap) | A venda falha. Todo comprador pode pedir reembolso de 100% do seu BNB na página da pré-venda |
| De {{P.presale.softCapBnb}} a {{P.presale.floorCapBnb}} BNB | Todos compram no preço mínimo: **1 BNB = {{P.presale.floorAgntPerBnb|n}} AGNT**. O AGNT não vendido é queimado na finalização |
| Acima de {{P.presale.floorCapBnb}} BNB | Os {{P.presale.saleTokens|n}} AGNT à venda são divididos conforme o BNB contribuído. Todos pagam o mesmo preço final, um pouco mais alto a cada BNB. Não há hard cap |

Exemplos no fim da venda, para um comprador que enviou 1 BNB:

| Total arrecadado | 1 BNB compra |
| --- | --- |
| 120 BNB | 1.000.000 AGNT (130M de AGNT não vendidos são queimados) |
| 250 BNB | 1.000.000 AGNT |
| 500 BNB | 500.000 AGNT |
| 1.000 BNB | 250.000 AGNT |

A página mostra o preço ao vivo, um simulador e a sua própria posição ("Where is my money?"). Enquanto a venda está acima
de {{P.presale.floorCapBnb}} BNB, a sua quantidade de AGNT ainda pode cair um pouco conforme outros compram; o seu BNB
continua o mesmo.

| Parâmetro | Valor |
| --- | --- |
| Preço mínimo | 1 BNB = {{P.presale.floorAgntPerBnb|n}} AGNT, até {{P.presale.floorCapBnb}} BNB arrecadados |
| AGNT à venda | {{P.presale.saleTokens|n}} (25% do supply), depositados no contrato antes de a venda abrir |
| Soft cap | {{P.presale.softCapBnb}} BNB |
| Por carteira | Mínimo de {{P.presale.perWalletBnb.0}} BNB, máximo de {{P.presale.perWalletBnb.1}} BNB no total |
| Bônus antecipado | +{{P.presale.earlyBonusPct}}% de AGNT para compras nas primeiras {{P.presale.earlyBonusHours}} horas, com pool limitado a {{P.presale.earlyBonusCap|n}} AGNT (dividido proporcionalmente se encher), pago junto com o claim |
| Duração | {{P.presale.days}} dias. Início e fim em UTC, mostrados na página da pré-venda |
| Claim | 100% na listagem |

Se uma contribuição passar do máximo da sua carteira, o BNB a mais volta na mesma transação.

## Como o seu BNB é protegido

1. O seu BNB fica no contrato da pré-venda. A equipe não pode sacá-lo antes de a venda terminar.
2. Abaixo do soft cap a venda falha e todo comprador pede reembolso de 100% na página da pré-venda.
3. Depois da venda, 80% do BNB vai para o pool da PancakeSwap na listagem e o LP é queimado. Cada etapa tem link na lista
   de verificação da listagem na página da pré-venda. Veja [Listagem](/token/listing).

## Convide amigos

Conecte a carteira na página da pré-venda para pegar seu link de convite (`presale.agenticstarter.xyz/?ref=<sua carteira>`).
Quando alguém compra por ele, o contrato da pré-venda registra o convite junto com a compra (`contributeWithRef`). Não custa
nada a mais para quem compra e não muda a alocação.

- Cada carteira que compra 0.05 BNB ou mais pelo seu link soma **100 pontos do airdrop** (missão Q6, até 50
  compradores).
- Participar você mesmo da pré-venda é a missão Q5: a partir de 0.05 BNB **+500 pontos**, depois +100 a cada 0.01 BNB (até
  10.000), e comprar nas primeiras 48 horas soma **500**. Comprou com uma carteira diferente da do airdrop? Vincule-a uma
  vez na página do airdrop (cartão Q5).
- Os pontos contam quando sua carteira conclui as três missões obrigatórias do airdrop.
- Comprar pelo próprio link não conta, e compras reembolsadas são removidas.

## Depois da venda

1. **Finalização**: o BNB vai para o Safe da tesouraria e o AGNT não vendido é queimado.
2. **Listagem** no dia seguinte, às 14:00 UTC: 80% do BNB vai para o pool AGNT/BNB ao preço final da pré-venda, o LP é
   queimado e então os claims abrem.
3. Você resgata 100% do seu AGNT (e o bônus antecipado) na página da pré-venda.

Cada etapa é marcada na lista de verificação da listagem na página da pré-venda, com um link para a transação. Ative um
lembrete lá (Telegram ou calendário) para saber quando os claims abrem.

## Reembolsos

As contribuições são definitivas, com duas exceções:

- **A venda falha**: termina abaixo do soft cap. Os reembolsos abrem automaticamente.
- **O time abre o modo de reembolso** antes de os claims abrirem. Se isso acontecer depois da finalização, o time precisa
  devolver o valor total ao contrato da pré-venda antes, para que todos os compradores recebam o reembolso integral.

Nos dois casos, você recebe 100% do seu BNB de volta na página da pré-venda.

=== FILE token/listing.md ===
# Listagem e uso dos fundos

O $AGNT lista na PancakeSwap V2 no dia seguinte ao fim da pré-venda, às 14:00 UTC.

## A regra da listagem

| | |
| --- | --- |
| Preço de listagem | O preço final da pré-venda. Os compradores da pré-venda e os primeiros compradores do mercado pagam o mesmo |
| BNB no pool | {{P.presale.listing.bnbToPoolPct}}% de todo o BNB arrecadado |
| AGNT no pool | 80% do BNB arrecadado ÷ o preço final: {{P.presale.listing.maxPoolAgnt|n}} AGNT quando {{P.presale.floorCapBnb}} BNB ou mais foram arrecadados, 800.000 AGNT por BNB abaixo disso |
| De onde vem o AGNT | O Safe de liquidez (150M) mais até 50M dos 60M da reserva de listagem. O AGNT não necessário fica no Safe de liquidez |
| Tokens LP | Queimados na mesma etapa. Ninguém pode retirar a liquidez |

Os {{P.presale.listing.bnbToTreasuryPct}}% restantes do BNB vão para o Safe da tesouraria.

## Uso dos fundos (a parte de 20% da Tesouraria)

| Uso | Parte |
| --- | --- |
| Segurança e auditorias | {{P.presale.useOfFundsPct.security}}% |
| Listagens em exchanges | {{P.presale.useOfFundsPct.listing}}% |
| Marketing e comunidade | {{P.presale.useOfFundsPct.marketing}}% |
| Operações (servidores, APIs) | {{P.presale.useOfFundsPct.operations}}% |

A divisão pode ser editada até a pré-venda abrir. Depois disso, toda mudança é registrada publicamente em
[Site integrity](https://agenticstarter.xyz/integrity) e anunciada no Telegram. Os gastos são acompanhados no
[relatório de Transparency](https://agenticstarter.xyz/transparency) semanal.

## Compromissos de trava

| Alocação | Regra |
| --- | --- |
| Time (120M) | Contrato de vesting: cliff de 12 meses, depois linear em 24 meses. O dono só pode adiar o início |
| Tesouraria e Ecossistema | Sem venda no mercado antes da listagem + 6 meses |
| Liquidez (Safe de liquidez) | Usada só para o pool e para listagens |
| Comunidade (Safe da comunidade) | Usada só para airdrops e para o bônus antecipado da pré-venda |

Se qualquer Safe do projeto mover AGNT para um par de DEX, um router ou um endereço de depósito de exchange conhecido, um
alerta público é enviado automaticamente no canal e no grupo do Telegram.

## Confira você mesmo

- [Liquidity proof](https://agenticstarter.xyz/liquidity): o endereço do pool, as reservas ao vivo e a transação de
  queima do LP, lidos direto da blockchain.
- A lista de verificação da listagem na página da pré-venda: Finalização → BNB adicionado ao pool → LP queimado → claims
  abertos, cada um com a sua transação.
- [Endereços dos Safes](https://agenticstarter.xyz/integrity) com toda mudança de parâmetro.

=== FILE token/airdrop.md ===
# Airdrop

Os pontos do airdrop decidem a sua parte no airdrop de $AGNT de cada temporada. É o único uso deles: não são token e não
podem ser negociados. Participe em [airdrop.agenticstarter.xyz](https://airdrop.agenticstarter.xyz), ou abra dentro do
Telegram pelo nosso bot Agen.

## Temporada 1

| | |
| --- | --- |
| Pool | 50 milhões de AGNT, subindo para 75 milhões com 5.000 carteiras elegíveis e 100 milhões com 15.000 |
| Quem se qualifica | Carteiras que concluem as três missões obrigatórias (Q1–Q3) |
| Divisão | `seus AGNT = pool × seus pontos ÷ pontos de todas as carteiras elegíveis` |
| Snapshot | Depois que a pré-venda do $AGNT termina |
| Dias | Todo dia começa e termina às 00:00 UTC |

<div class="flow">
  <div><b>Entrar</b><small>Conecte uma carteira e assine uma mensagem grátis</small></div>
  <div class="arrow">→</div>
  <div><b>Q1–Q3</b><small>X, Telegram, chat. Pronto, elegível</small></div>
  <div class="arrow">→</div>
  <div><b>Ganhe mais</b><small>Lance, negocie, quiz, convide</small></div>
  <div class="arrow">→</div>
  <div><b>Resgate</b><small>Depois do snapshot</small></div>
</div>

## Missões

| # | Missão | Pontos |
| --- | --- | --- |
| Q1 | Siga @agentic_starter no X e cite o post fixado, depois cole o link da sua citação. **Obrigatória** | 300 |
| Q2 | Vincule o Telegram com o bot do airdrop e fique no canal e no grupo do Telegram (verificado todo dia). **Obrigatória** | 200 |
| Q3 | Converse no grupo do Telegram: a cada 2 mensagens = 1 ponto, até 50 por dia. **Obrigatória** (pelo menos 1 ponto) | até 50 / dia |
| Q4 | Launch & Trade no launchpad da testnet: lance um token +100 · 5 negociações de 0.005 BNB ou mais (curva ou PancakeSwap) +100 · seu token se forma +300 (o desafio) | até 500 |
| Q5 | Participe da pré-venda de $AGNT: a partir de 0.05 BNB +500, depois +100 a cada 0.01 BNB | até 10.000 |
| Q6 | Convide compradores da pré-venda (0.05 BNB ou mais) com seu link | 100 cada, até 50 compradores |

Q5 e Q6 aparecem como TBA até a pré-venda abrir. Os pontos ganhos com a lista de missões anterior são mantidos. Concluir
as seis dá o selo **Season 1 OG**. Cada cartão tem um botão que leva ao lugar certo e marca sozinho quando você volta;
as missões concluídas viram uma linha verde no fim.

## Pontos extras

| Atividade | Pontos |
| --- | --- |
| Convidar um amigo que conclui Q1–Q3 e faz mais uma ação real (conversar em 2 dias diferentes, uma negociação ou a pré-venda) | 100 cada |
| Níveis de convite: 5 / 20 amigos que contam | +200 / +1.000 |
| Quiz diário no grupo do Telegram | 5 por resposta certa, até 45 por dia |
| Sequência do quiz (uma resposta certa por dia): 7 / 14 / 21 / 28 dias seguidos | +50 / +100 / +300 / +400 |
| Conversar no grupo 7 dias seguidos | 50 |
| Comprar nas primeiras 48 horas da pré-venda | 500 |
| Top 10 da semana, toda segunda (só contam chat, quiz, caixas, negociações e convites daquela semana) | 300 / 200 / 100, depois 50 |
| Abastecer o bot de lançamento da testnet com BNB de teste | 20 a cada 0,1 tBNB, até 100 |
| Relatos de bugs confirmados pela equipe | 50 a 500 |
| Desafio diário (uma tarefa por dia, no cartão **Today**) | 50 |
| 7 desafios diários seguidos | 100 |
| Raids no X (citar um post da equipe durante o raid) | definido por raid, geralmente 30 |
| Compartilhar uma conquista no X (Bronze, Silver, Gold, sequência de 7 dias, primeira formatura, Season 1 OG) | 50 a 100, uma vez cada |
| Uma denúncia de golpe confirmada pela equipe | 10 |

## Golden hour

Uma hora aleatória por dia (nunca junto de um quiz) é uma **golden hour**: todo ponto que você ganha nessa hora vale em
dobro (chat, quiz e operações na curva; os limites diários continuam valendo). O Agen anuncia cada golden hour no canal e
no grupo, e o cartão Today faz a contagem regressiva.

## Agen Gift Hour

Todo dia, das **14:00 às 15:00 UTC**, compre pelo menos **0,01 BNB** de $AGNT da testnet em agenticstarter.xyz. Sua
primeira compra da hora dá à sua carteira uma **caixa de presente**: ela aparece no site e, ao abrir, você vê quantos
**$AGNT de verdade** há dentro. Cada caixa traz uma quantidade diferente.

- Uma caixa por carteira por dia: vale a primeira compra de pelo menos 0,01 BNB dentro da hora. A caixa que você não
  abrir na hora fica esperando no site.
- Os $AGNT da Gift Hour são pagos junto com o airdrop, às carteiras que concluíram as missões obrigatórias (Q1–Q3) e não
  foram excluídas por abuso.
- Seu total da Gift Hour aparece ao lado dos seus pontos na página do airdrop e no /points do Agen.
- Depois de abrir, compartilhe a imagem no X ou no grupo do Telegram.
- Depois da hora, uma das caixas do dia é sorteada como a **caixa da sorte**: seus $AGNT dobram (x2). O Agen anuncia
  no grupo e avisa o ganhador.
- Dez minutos antes de a hora terminar, o Agen publica um lembrete no grupo e o app avisa as carteiras que ainda não
  têm caixa.
- **Meta do grupo:** quanto mais carteiras ganharem uma caixa no dia, mais cada caixa daquele dia leva: 100 carteiras **+5%**, 250 **+10%**, 500 **+20%**, somado depois da hora. A barra na faixa do Gift Hour mostra quanto falta para o próximo nível, e a mensagem do Gift Hour do Agen no grupo se atualiza sozinha a cada nível alcançado.

## Agen Morning Box

Todo dia, das **08:00 às 10:00 UTC**, abra o **app** da Agentic Starter com a carteira conectada: a Morning Box dá de
**20 a 100 pontos do airdrop**, uma caixa por dia. Depois das 10:00 UTC ela some até a manhã seguinte. A Morning Box só
existe no [app instalado](/guide/install-app), não no site.

Abra em dias seguidos para ganhar um **bônus de sequência**: 7 dias **+100**, 14 dias **+200**, 21 dias **+300** e 28 dias
**+500** pontos; depois, as quatro semanas recomeçam. Se perder um dia, a sequência recomeça do 1.

Cerca de **1 em cada 100** Morning Boxes é uma **caixa dourada** com **500 pontos**. Quando a Morning Box fecha, o Agen cita todas as caixas douradas do dia em uma só mensagem no grupo, e as últimas caixas da sorte e douradas aparecem na página do airdrop.

**Bem-vindo de volta:** se você não abriu uma Morning Box por mais de 7 dias, sua primeira caixa depois da pausa vale
**x2**. O Agen dá um oi por mensagem privada.

No app, **Menu → Ajustes → Notificações** avisa sobre a Gift Hour, a Morning Box, o quiz diário (5 minutos antes, uma vez
por dia) e as novidades do seu airdrop (elegível, amigo contado, sequência paga). No máximo 4 por dia e nunca à noite no
seu fuso. Notícias da pré-venda sempre chegam.

## Títulos

| Título | Pontos |
| --- | --- |
| Bronze | 1.000 |
| Silver | 5.000 |
| Gold | 10.000 |

Os títulos aparecem no seu perfil, no ranking e na sua imagem de compartilhamento.

## Primeiro o Telegram

Você pode começar pelo Telegram antes de conectar uma carteira: abra o airdrop pelo menu do Agen e seus pontos de chat e
quiz ficam guardados na sua conta do Telegram. Quando você vincular uma carteira depois, eles passam para ela.

O bot do airdrop [@agenticstarter_airdrop_bot](https://t.me/agenticstarter_airdrop_bot) mostra suas missões com marcas,
seus pontos e como fazer cada passo, no seu idioma. Links de convite também funcionam lá
(`t.me/agenticstarter_airdrop_bot?start=ref_SEUCODIGO`): um amigo que inicia o bot pelo seu link e depois vincula uma
carteira conta como seu convite.

No bot do airdrop você também pode verificar qualquer carteira (envie o endereço), ligar um resumo às 20:00 no seu horário (desligado por padrão) e compartilhar seu cartão de convite em qualquer chat: digite `@agenticstarter_airdrop_bot` na caixa de mensagem.

## Toda segunda-feira

O Agen publica uma mensagem no grupo toda segunda: o top 10 da semana com uma imagem, os melhores convidadores da semana (o top 3 ganha +500, +300 e +200 pontos; um amigo conta se entrou naquela semana e já conta), a maior sequência no quiz e o concurso de memes.

**Concurso de memes:** responda à mensagem de segunda com seu meme sobre a Agentic Starter. A equipe escolhe o top 3, que ganha +500, +300 e +200 pontos na segunda seguinte (seu Telegram precisa estar vinculado a uma carteira).

**Meta da comunidade:** com 5.000, 10.000 e 15.000 carteiras elegíveis, o Gift Hour do sábado seguinte paga x2: cada caixa traz o dobro de $AGNT. A barra na página do airdrop mostra quanto falta para a próxima meta.

## O quiz diário

Três sessões por dia no grupo do Telegram, às **03:00, 14:00 e 19:00 UTC**. Cada sessão tem três perguntas de múltipla escolha sobre a Agentic Starter, cinco minutos cada. Responda com os botões A/B/C/D; vale sua última resposta. As primeiras 20 respostas certas de cada pergunta ganham 5 pontos. Perguntas e respostas ficam no grupo para todos aprenderem. Quer um aviso cinco minutos antes? Ligue as notificações do quiz no app ou escolha as rodadas no `/settings` do Agen.

Uma resposta certa por dia mantém sua **sequência no quiz**: 7, 14, 21 e 28 dias seguidos rendem +50, +100, +300 e +400 pontos. Perdeu um dia, começa de novo. O Agen cita você no resultado da rodada e manda uma mensagem privada com uma imagem para compartilhar.

## Como funciona a verificação

1. **Carteira.** Conecte e assine uma mensagem. É grátis e não envia transação.
2. **X (Q1).** Use os botões Follow e Quote e cole o link do seu post de citação. A maioria dos posts é conferida
   automaticamente em segundos; os demais vão para uma revisão rápida da equipe. Um link já usado por outra carteira é
   sinalizado.
3. **Telegram (Q2).** Toque em **Abrir o Telegram** e depois em **Start** no bot do airdrop. Ele vincula sua conta do
   Telegram à carteira e mostra botões para entrar no canal e no grupo; o cartão marca sozinho. Sair de qualquer um tira
   os pontos.
4. **Chat (Q3).** O Agen conta suas mensagens. Mensagens com menos de 3 caracteres, repetidas, encaminhadas e enviadas a
   menos de 5 segundos da anterior não contam.
5. **On-chain (Q4–Q6)** são lidas automaticamente da BNB Chain. Uma pré-venda comprada com outra carteira conta depois que
   essa carteira assina uma mensagem grátis para vinculá-la (cartão Q5). Uma carteira da pré-venda se vincula a uma
   carteira do airdrop para sempre.

Cada conta do X, conta do Telegram e carteira da pré-venda pode ser vinculada a apenas uma carteira do airdrop.

## Como ganhar mais pontos

1. **Conclua Q1–Q3 primeiro.** Até lá seus pontos não contam para o pool.
2. **Q4 Launch & Trade:** lance um token, faça 5 negociações de 0.005 BNB ou mais e tente fazer seu token se formar
   (+300).
3. **Todo dia:** converse no grupo (até 50), responda o quiz (até 45) e mantenha a sequência, abra a Morning Box no app e
   pegue a Gift Hour.
4. **Convide amigos** que participam de verdade: +100 cada, +200 com 5 e +1.000 com 20.
5. **Pré-venda:** a partir de 0.05 BNB, até 10.000 pontos, mais 100 por comprador que você trouxer.

Pergunte ao Agen no grupo ("como ganho mais pontos?") ou toque em **Ganhe o máximo** no bot do airdrop: você recebe uma
lista só com o que *você* ainda tem pendente, o mais valioso primeiro. Os pontos da Temporada 1 param no snapshot (no fim
da pré-venda); os pontos depois disso contam para a Temporada 2.

## Estou pronto?

O cartão **Ready to claim?** lista cada requisito com o que ainda falta e como resolver, além de uma faixa estimada de
AGNT. A faixa depende do pool final e de quantas carteiras se qualificam, então é uma referência, não uma promessa.

Na testnet, as carteiras que concluíram a Q2 podem receber uma vez um pequeno reforço de BNB de teste (0,005 tBNB),
enquanto o faucet tiver fundos.

## Consulte qualquer carteira

A caixa **Check** na página do airdrop mostra as missões, pontos por origem, elegibilidade, posição e $AGNT estimado de
qualquer carteira. O top 100 público fica na mesma página.

## Resgates

1. No snapshot, os pontos viram $AGNT e uma árvore de Merkle é publicada.
2. O contrato do airdrop abre a temporada com essa raiz e um prazo de resgate.
3. As carteiras elegíveis resgatam na página do airdrop (só gas). O que não for resgatado volta ao pool da comunidade.

## Jogo limpo

Spam, contas de farm, wash trading e grupos de múltiplas contas são removidos antes do snapshot. A equipe olha carteiras
que compartilham um endereço de rede ou negociam os mesmos tokens nos mesmos blocos e decide manualmente; nada é removido
automaticamente. Toda alteração manual de pontos fica registrada com o motivo.

Se a sua carteira foi excluída por engano, toque em **Appeal** no cartão Ready e explique em poucas frases. A equipe
responde no mesmo cartão.

=== FILE token/staking.md ===
# Staking

Faça staking de $AGNT no contrato `AGNTStaking` para ganhar BNB das taxas do launchpad.

- Os stakers recebem **30% de cada taxa da curva**, pagos em BNB.
- Todo BNB que chega é **distribuído ao longo dos 7 dias seguintes**, dividido entre todos que estiverem em staking nesse
  período. Fazer staking logo antes de um pagamento não captura esse valor.
- O BNB que chega enquanto ninguém está em staking espera e começa a ser distribuído quando o primeiro staker entra.
- Sem bloqueio: saia quando quiser; resgate BNB quando quiser.

## Benefícios

O AGNT em staking há **pelo menos 7 dias** conta para os benefícios. Adicionar mais AGNT reinicia o relógio de 7 dias da
posição inteira, então os benefícios não podem ser comprados por um bloco.

| Benefício | Exige |
| --- | --- |
| Lançamentos grátis no launchpad | 100.000 AGNT em staking por 7 dias |
| Metade do preço na fábrica de tokens padrão | 100.000 AGNT em staking por 7 dias |
| Peso de voto no Snapshot | Qualquer AGNT em staking por 7 dias (`maturedStake`) |
| Multiplicador do airdrop da Temporada 2 | Anunciado com a Temporada 2 |

O limite mínimo pode ser alterado pelo Safe dono; toda mudança é pública em
[Site integrity](https://agenticstarter.xyz/integrity).

O staking abre junto com a listagem do $AGNT.

| Função | Efeito |
| --- | --- |
| `stake(amount)` | Deposita AGNT (aprove antes) |
| `unstake(amount)` | Retira AGNT, as recompensas ficam |
| `claim()` | Retira o BNB acumulado |
| `pendingBnb(address)` | Mostra o BNB acumulado |
| `maturedStake(address)` | AGNT que conta para benefícios e votos |
| `hasPerks(address)` | Verdadeiro acima do limite de benefícios |

=== FILE risks.md ===
# Riscos

- **Risco de mercado.** Os tokens lançados aqui são especulativos e podem ir a zero. O $AGNT também.
- **Risco do agente.** Agentes agem automaticamente. Prompts ruins, bugs ou ferramentas comprometidas podem negociar de
  um jeito que você não queria. Mantenha limites apertados e revise cada prévia.
- **Risco de contrato inteligente.** Auditorias reduzem, mas não eliminam, a chance de bugs.
- **Risco de dependência.** Registros de Agent ID, carteiras, RPCs e a PancakeSwap são serviços de terceiros.
- **Tokens imitadores.** Todo token aqui termina em `AAAA`, mas qualquer um pode criar em outro lugar um endereço que
  termine em AAAA. Abra os tokens pelo nosso site e confira os links na página [Site integrity](https://agenticstarter.xyz/integrity).
- **A testnet é treino.** BNB e tokens de testnet não têm valor e nunca são convertidos em nada.
- **Risco regulatório.** A venda e a negociação de tokens podem ser restritas onde você mora.

Os admins nunca mandam DM primeiro e nunca pedem frase-semente, chave privada ou "verificação de carteira". Confie só em
links publicados por [@agentic_starter](https://x.com/agentic_starter).

=== FILE guide/install-app.md ===
# Instale o app no celular

O Agentic Starter funciona como um app no seu celular: tela cheia, abas embaixo e a um toque da tela inicial.
É o próprio site, então não há nada para atualizar nem loja de apps. Sua carteira continua pedindo confirmação antes
de cada assinatura.

## iPhone e iPad

1. Abra [agenticstarter.xyz](https://agenticstarter.xyz) no **Safari**. Se estiver dentro do Telegram, do X ou de um app
   de carteira, abra a página no Safari primeiro: outros navegadores do iPhone podem não adicionar web apps.
2. Toque em **Compartilhar** (o quadrado com uma seta) na barra do Safari. Se não aparecer, toque em **⋯** primeiro.
3. Toque em **Adicionar à Tela de Início** e depois em **Adicionar**.
4. Abra o Agentic Starter pela tela inicial.

## Android

### Chrome

1. Abra [agenticstarter.xyz](https://agenticstarter.xyz) no **Chrome**. Se o link abriu dentro do Telegram, do X ou de
   um app de carteira, toque em **⋮** no canto superior direito e escolha **Abrir no Chrome** primeiro: dali não dá
   para instalar apps.
2. Toque em **⋮** no canto superior direito do Chrome.
3. Toque em **Instalar app** ou **Adicionar à tela inicial** e depois em **Instalar**.
4. Abra o Agentic Starter pela tela inicial ou pela lista de apps.

Quando o Chrome mostra um botão **Instalar** na página ou na barra de endereço, tocar nele faz o mesmo.

### Samsung Internet

1. Toque em **☰** embaixo.
2. Toque em **Adicionar página a** e depois em **Tela inicial**.

### Arquivo do app (APK)

Prefere um arquivo? [Baixe agentic-starter.apk](https://agenticstarter.xyz/download/agentic-starter.apk) (versão 1.0, 1,7 MB). Ele abre o mesmo site em tela cheia pelo Chrome, e o Android pergunta uma vez se você permite instalar pelo navegador. Confira o arquivo antes de instalar:

- SHA-256 do arquivo: `be55ac38090acbcf8ddcbf732463176306ad6a10365d9402b63fac81cd135479`
- SHA-256 do certificado de assinatura: `A2:7C:83:5E:EE:EF:C6:39:0B:CC:79:77:53:29:DD:84:7D:E2:6D:47:93:1E:2A:A5:66:D2:86:76:AD:E9:A7:5B`

## Dentro do app

- **Idioma:** toque na sua imagem no canto superior esquerdo para abrir o menu e depois em **Configurações → Idioma**
  para escolher na lista.
- **Bloqueio do app:** **Configurações → Bloqueio do app** pede Face ID, digital, o código do aparelho ou sua própria
  senha antes de o app abrir. O bloqueio fica no seu celular.
- **Avatar:** toque na sua imagem no menu para escolher uma foto ou uma cor. Fica no seu celular; nada é enviado.

## Perguntas

**Não vejo Instalar app.** Atualize o Chrome pela Play Store e recarregue a página. Se o app já estiver instalado, o
mesmo menu mostra **Abrir app**.

**É seguro?** É o mesmo site que agenticstarter.xyz e não tem acesso às chaves da sua carteira: toda transação abre a
carteira para você aprovar. Instale só a partir de agenticstarter.xyz. A equipe nunca envia arquivos ou links do app
por mensagem privada.

**Como removo?** Como qualquer app: segure o ícone e toque em **Remover** ou **Desinstalar**.
