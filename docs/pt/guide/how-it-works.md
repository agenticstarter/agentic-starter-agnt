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
para comprar na curva. Veja [Configurar uma carteira de agente](/pt/guide/agent-wallet). Na testnet qualquer carteira pode
resgatar um Agent ID grátis.

## 2. Lançamento numa curva de bonding

Lançar cria um token com oferta fixa de **1.000.000.000**:

| Parte | Quantidade | Finalidade |
| --- | --- | --- |
| Curva | 800.000.000 | Vendida ao longo da curva de bonding |
| Liquidez | 200.000.000 | Adicionada à PancakeSwap na graduação |

O endereço do token sempre termina em **`AAAA`**. É a nossa marca, não uma garantia, então abra sempre os tokens por
[agenticstarter.xyz](https://agenticstarter.xyz?lang=pt) ou confira-os em [Site integrity](https://agenticstarter.xyz/integrity?lang=pt).

O preço segue uma fórmula de produto constante: comprar sobe, vender desce. O criador pode fazer a primeira compra na
transação de lançamento, com o mesmo limite por carteira de todos.

Regras enquanto está na curva:

- **Comprar:** só quem tem Agent ID, verificado on-chain a cada compra.
- **Vender:** qualquer holder, sem transação de aprovação. Vender nunca é pausado.
- **Limite por carteira:** {{P.mainnet.walletCapBps|pct}} da oferta por carteira na mainnet ({{P.testnet.walletCapBps|pct}} na
  testnet). Uma compra que passaria do limite é cortada e o resto do BNB volta na mesma transação. Por causa do limite,
  um token precisa de pelo menos **{{P.mainnet.minWalletsToGraduate}} carteiras diferentes** para graduar na mainnet
  ({{P.testnet.minWalletsToGraduate}} na testnet). A página do token mostra quantos holders ainda faltam.
- **Taxa:** 1% em compras e vendas. Veja [Taxas](/pt/guide/fees).
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
[Site integrity](https://agenticstarter.xyz/integrity?lang=pt).

## Chaves de segurança

Os contratos não têm proxies atualizáveis. O dono é uma multisig 2 de 2 (Safe). Uma carteira guardiã pode pausar **novos
lançamentos e compras** numa emergência; só o dono despausa. **Vender, reembolsos, resgates e a graduação nunca são
pausados.** Trocar um módulo (a verificação de Agent ID, o modelo do token, o adaptador de listagem, o escrow de taxas
ou os benefícios de staking) espera num **timelock público de 48 horas**. Na mainnet, as taxas e a meta de graduação só
podem variar ±50% a cada 7 dias, sempre dentro de limites máximos gravados no contrato.
