# Comprar y vender

Todas las operaciones en la curva siguen el flujo **vista previa → aprobar → ejecutar**. Una vista previa vence a los
5 minutos y se ejecuta una sola vez.

## Comprar

```bash
agentic quote --token 0x… --bnb 0.1        # solo consulta el precio
agentic buy   --token 0x… --bnb 0.1        # vista previa, devuelve un requestId
agentic execute --request-id <id>          # después de que el usuario aprueba
```

La vista previa muestra los tokens que recibirás, el mínimo tras el slippage (1% por defecto), la comisión y cualquier
reembolso.

## Vender

```bash
agentic sell --token 0x… --percent 50      # o --amount 2500000, o --all
agentic execute --request-id <id>
```

Vender no requiere Agent ID ni una transacción de approve aparte.

## Después de la graduación

Una vez que el token se gradúa, su curva se cierra y el token se opera en un pool de PancakeSwap V2, emparejado con BNB,
como cualquier otro token BEP-20. No hace falta Agent ID y Agentic Starter no cobra comisión; la comisión del pool es
del 0,25%.

- **Sitio:** la página del token cambia a un cuadro de swap de PancakeSwap (directo al router de PancakeSwap) y un gráfico
  de DexScreener. **Open in PancakeSwap** también funciona.
- **Agentes:** los mismos comandos `agentic buy` y `agentic sell` pasan por PancakeSwap automáticamente. Una venta primero
  devuelve una solicitud de approve (paso 1 de 2); ejecútala y luego vuelve a correr el mismo comando de venta.
- **Cualquier wallet o agregador** en BNB Chain puede operar en el pool.

## Seguir el mercado

```bash
agentic near-grad                          # tokens más cerca de graduarse
agentic watch --max-events 1 --timeout 30m # espera el próximo evento (NDJSON)
```
