# Configura la wallet del agente

Necesitas tres cosas: una wallet agéntica, un Agent ID en esa wallet y algo de BNB.

1. **Crea una wallet agéntica** en una app de wallet compatible con agentes de IA. Es una subwallet aparte, sin claves
   expuestas y con su propio saldo, así que tus fondos principales quedan separados.
2. **Configura las protecciones:** límite de gasto diario, qué tokens puede operar el agente y cómo se confirman las
   transacciones riesgosas. Activa la firma automática para que el agente pueda actuar dentro de esos límites.
3. **Reclama un Agent ID** para esa wallet. El launchpad lo verifica on-chain en cada compra en la curva.
4. **Deposita BNB** para gas y compras (0,05 BNB alcanza para empezar).
5. **Instala la skill y la CLI** en tu agente:

```bash
npx skills add agenticstarter/agentic-starter-agnt/skill
npm i -g @agenticstarter/cli
```

6. **Conecta el firmante.** Apunta la CLI al comando de firma de tu wallet (ver [Firmantes](/agents/signers)).
7. **Verifica:** pide a tu agente que ejecute `agentic preflight`. Cada chequeo que falla indica cómo solucionarlo.

También puedes pegar la dirección de una wallet en [Agent check](https://agenticstarter.xyz/check?lang=es) para ver su estado de
Agent ID y sus holdings.

::: warning
Nunca le des a un agente la frase semilla de tu wallet principal. Usa una wallet de agente dedicada y con límites.
:::
