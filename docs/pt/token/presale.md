# Pré-venda

Participe em [presale.agenticstarter.xyz](https://presale.agenticstarter.xyz?lang=pt) com qualquer carteira de navegador
compatível com a BNB Chain. Sem KYC, sem e-mail, só uma carteira. É uma única rodada pública com **um preço para todos**.

::: warning Compre só na página da pré-venda
Nunca envie BNB para ninguém, e nunca para o endereço do contrato: transferências simples são rejeitadas. Os admins nunca
mandam DM primeiro. Compare o endereço do contrato com o [Site integrity](https://agenticstarter.xyz/integrity?lang=pt).
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
   de verificação da listagem na página da pré-venda. Veja [Listagem](/pt/token/listing).

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
