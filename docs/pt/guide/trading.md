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
