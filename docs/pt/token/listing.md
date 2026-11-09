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
[Site integrity](https://agenticstarter.xyz/integrity?lang=pt) e anunciada no Telegram. Os gastos são acompanhados no
[relatório de Transparency](https://agenticstarter.xyz/transparency?lang=pt) semanal.

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

- [Liquidity proof](https://agenticstarter.xyz/liquidity?lang=pt): o endereço do pool, as reservas ao vivo e a transação de
  queima do LP, lidos direto da blockchain.
- A lista de verificação da listagem na página da pré-venda: Finalização → BNB adicionado ao pool → LP queimado → claims
  abertos, cada um com a sua transação.
- [Endereços dos Safes](https://agenticstarter.xyz/integrity?lang=pt) com toda mudança de parâmetro.
