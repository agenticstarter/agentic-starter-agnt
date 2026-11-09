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
[Site integrity](https://agenticstarter.xyz/integrity?lang=pt).

O staking abre junto com a listagem do $AGNT.

| Função | Efeito |
| --- | --- |
| `stake(amount)` | Deposita AGNT (aprove antes) |
| `unstake(amount)` | Retira AGNT, as recompensas ficam |
| `claim()` | Retira o BNB acumulado |
| `pendingBnb(address)` | Mostra o BNB acumulado |
| `maturedStake(address)` | AGNT que conta para benefícios e votos |
| `hasPerks(address)` | Verdadeiro acima do limite de benefícios |
