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

Você também pode colar o endereço da carteira no [Agent check](https://agenticstarter.xyz/check?lang=pt) para ver o status do
Agent ID e os ativos.

::: warning
Nunca dê ao agente a frase-semente da sua carteira principal. Use uma carteira de agente dedicada, com limites.
:::
