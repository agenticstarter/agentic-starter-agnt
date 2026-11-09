# Tokens padrão

Precisa de um token BEP-20 simples, sem a curva de bonding, por exemplo para uma comunidade, um jogo ou um teste? Crie um
em [agenticstarter.xyz/create](https://agenticstarter.xyz/create?lang=pt). Qualquer pessoa pode usar; não precisa de Agent ID. Os
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
