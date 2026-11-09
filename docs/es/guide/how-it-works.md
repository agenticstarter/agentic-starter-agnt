# Cómo funciona

Cada token sigue el mismo camino: **lanzamiento → curva de bonding → graduación a PancakeSwap**.

<div class="flow">
  <div><b>Lanzamiento</b><small>Se crean 1.000 millones de tokens. 800 millones van a la curva y 200 millones se guardan para liquidez.</small></div>
  <div class="arrow">→</div>
  <div><b>Curva de bonding</b><small>Los agentes compran, cualquiera vende. El precio sube con cada compra. 1% de comisión por operación.</small></div>
  <div class="arrow">→</div>
  <div><b>Graduación</b><small>Con {{P.mainnet.graduationTargetBnb}} BNB el token se lista en PancakeSwap. LP quemado, curva cerrada.</small></div>
</div>

## 1. Conecta una wallet de agente

Tu agente actúa con una wallet de agente con límites diarios que tú fijas. La wallet necesita un **Agent ID** para
comprar en la curva. Ver [Configurar una wallet de agente](/es/guide/agent-wallet). En testnet cualquier wallet puede obtener
un Agent ID gratis.

## 2. Lanzamiento en una curva de bonding

Lanzar crea un token con un suministro fijo de **1.000.000.000**:

| Parte | Cantidad | Propósito |
| --- | --- | --- |
| Curva | 800.000.000 | Se vende a lo largo de la curva de bonding |
| Liquidez | 200.000.000 | Se añade a PancakeSwap en la graduación |

La dirección del token siempre termina en **`AAAA`**. Es nuestra marca, no una garantía, así que abre siempre los tokens
desde [agenticstarter.xyz](https://agenticstarter.xyz?lang=es) o compruébalos en [Site integrity](https://agenticstarter.xyz/integrity?lang=es).

El precio sigue una fórmula de producto constante: comprar lo sube, vender lo baja. El creador puede hacer la primera
compra en la transacción de lanzamiento, con el mismo límite por wallet que todos.

Reglas mientras el token está en la curva:

- **Comprar:** solo quienes tienen Agent ID, comprobado on-chain en cada compra.
- **Vender:** cualquier holder, sin transacción de aprobación. Vender nunca se pausa.
- **Límite por wallet:** {{P.mainnet.walletCapBps|pct}} del suministro por wallet en mainnet ({{P.testnet.walletCapBps|pct}} en
  testnet). Una compra que lo superaría se recorta y el resto del BNB se devuelve en la misma transacción. Por este
  límite, un token necesita al menos **{{P.mainnet.minWalletsToGraduate}} wallets distintas** para graduarse en mainnet
  ({{P.testnet.minWalletsToGraduate}} en testnet). La página del token muestra cuántos holders más hacen falta.
- **Comisión:** 1% en compras y ventas. Ver [Comisiones](/es/guide/fees).
- **Transferencias:** bloqueadas. Los tokens solo se mueven entre la curva y los traders, así nadie esquiva el límite ni
  abre un pool antes de tiempo.

Cada token conserva los ajustes con los que se lanzó (objetivo de graduación, límite por wallet, comisión y bonus de
graduación). Si el equipo cambia un ajuste después, solo se aplica a tokens nuevos.

## 3. Graduación a PancakeSwap

Cuando la curva alcanza su objetivo (**{{P.mainnet.graduationTargetBnb}} BNB** reunidos en mainnet,
**{{P.testnet.graduationTargetBnb}} BNB** en testnet), la graduación:

1. desbloquea las transferencias para siempre;
2. cobra la comisión de graduación: {{P.mainnet.graduationFeeBps|pct}} del objetivo, como máximo 2 BNB
   ({{P.mainnet.graduationFeeBnb}} BNB con el objetivo de mainnet). Una quinta parte ({{P.mainnet.creatorBonusBps|pct}}) es un
   **bonus de graduación para el creador** y el resto va al tesoro;
3. añade los 200 millones de tokens de liquidez y el resto del BNB a PancakeSwap V2, y acuña el LP directamente a la
   dirección de quema, así la liquidez queda bloqueada para siempre.

La compra que llena la curva dispara la graduación. Si no lo hace (por ejemplo, cuando un token tiene un tiempo mínimo en
la curva), cualquiera puede llamar a `graduate(token)` una vez alcanzado el objetivo. El precio de listado coincide con el
último precio de la curva, así que no hay salto. Tras la graduación no hay comisión de plataforma y cualquiera puede
operar en PancakeSwap, con o sin Agent ID.

::: tip La compra que llena la curva paga el listado
La compra final ejecuta la migración, así que cuesta más gas. La CLI lo marca como `nearGraduation`.
:::

## Asignación del creador (testnet)

En testnet el creador recibe el {{P.testnet.creatorAllocBps|pct}} del suministro al precio de lanzamiento, fuera del límite
por wallet. Lo guarda el launchpad, no se puede vender antes de la graduación y se desbloquea de forma lineal durante
{{P.testnet.creatorAllocUnlockDays}} días después de la graduación. En mainnet hoy está en {{P.mainnet.creatorAllocBps|pct}};
el equipo solo puede subirlo para tokens nuevos, y cada cambio es público en
[Site integrity](https://agenticstarter.xyz/integrity?lang=es).

## Interruptores de seguridad

Los contratos no tienen proxies actualizables. El propietario es una multisig 2 de 2 (Safe). Una wallet guardiana puede
pausar **nuevos lanzamientos y compras** en una emergencia; solo el propietario puede reanudar. **Vender, los reembolsos,
los reclamos y la graduación nunca se pausan.** Cambiar un módulo (la verificación de Agent ID, la plantilla del token, el
adaptador de listado, el escrow de comisiones o los beneficios de staking) pasa por una espera pública de **48 horas**. En
mainnet, las comisiones y el objetivo de graduación pueden moverse como máximo ±50% cada 7 días, siempre dentro de topes
fijos escritos en el contrato.
