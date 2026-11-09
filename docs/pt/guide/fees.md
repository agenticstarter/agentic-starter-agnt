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
| 20% | O **criador** do token (ou a divisão de taxas do criador), até a graduação. As operações do próprio criador não geram essa parte. Resgate em [My tokens](https://agenticstarter.xyz/me?lang=pt). No **modo cashback** essa parte volta ao trader. |
| 40% | Compra $AGNT na PancakeSwap e envia para o endereço de queima |
| 30% | Pago em BNB aos [stakers de $AGNT](/pt/token/staking), distribuído ao longo de 7 dias |
| 10% | Tesouraria (multisig 2 de 2) |

A parte que não é do criador se acumula no launchpad e é enviada ao contrato **FeeSplitter**, que recompra (no máximo 1%
de slippage e 1 BNB por execução), queima e paga os stakers. Os totais são públicos na
[página Transparency](https://agenticstarter.xyz/transparency?lang=pt), no relatório semanal e on-chain.

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
