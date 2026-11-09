# Preventa

Participa en [presale.agenticstarter.xyz](https://presale.agenticstarter.xyz?lang=es) con cualquier wallet de navegador compatible
con BNB Chain. Sin KYC, sin correo, solo una wallet. Es una única ronda pública con **un solo precio para todos**.

::: warning Compra solo en la página de la preventa
Nunca envíes BNB a nadie, y nunca a la dirección del contrato: las transferencias simples se rechazan. Los admins nunca
escriben por privado primero. Compara la dirección del contrato con [Site integrity](https://agenticstarter.xyz/integrity?lang=es).
:::

## Cómo funciona el precio ("250+")

| Reunido | Qué pasa |
| --- | --- |
| Menos de {{P.presale.softCapBnb}} BNB (soft cap) | La venta fracasa. Cada comprador recupera el 100% de su BNB en la página de la preventa |
| De {{P.presale.softCapBnb}} a {{P.presale.floorCapBnb}} BNB | Todos compran al precio base: **1 BNB = {{P.presale.floorAgntPerBnb|n}} AGNT**. El AGNT no vendido se quema al finalizar |
| Más de {{P.presale.floorCapBnb}} BNB | Los {{P.presale.saleTokens|n}} AGNT a la venta se reparten según el BNB aportado. Todos pagan el mismo precio final, un poco más alto con cada BNB. No hay hard cap |

Ejemplos al final de la venta, para un comprador que envió 1 BNB:

| Total reunido | 1 BNB compra |
| --- | --- |
| 120 BNB | 1.000.000 AGNT (130M de AGNT sin vender se queman) |
| 250 BNB | 1.000.000 AGNT |
| 500 BNB | 500.000 AGNT |
| 1.000 BNB | 250.000 AGNT |

La página muestra el precio en vivo, un simulador y tu propia posición ("Where is my money?"). Mientras la venta supere
{{P.presale.floorCapBnb}} BNB, tu cantidad de AGNT aún puede bajar un poco a medida que otros compran; tu BNB sigue igual.

| Parámetro | Valor |
| --- | --- |
| Precio base | 1 BNB = {{P.presale.floorAgntPerBnb|n}} AGNT, hasta {{P.presale.floorCapBnb}} BNB reunidos |
| AGNT a la venta | {{P.presale.saleTokens|n}} (25% del suministro), depositados en el contrato antes de abrir la venta |
| Soft cap | {{P.presale.softCapBnb}} BNB |
| Por wallet | Mínimo {{P.presale.perWalletBnb.0}} BNB, máximo {{P.presale.perWalletBnb.1}} BNB en total |
| Bonus para los primeros | +{{P.presale.earlyBonusPct}}% de AGNT para las compras de las primeras {{P.presale.earlyBonusHours}} horas, con un pool limitado a {{P.presale.earlyBonusCap|n}} AGNT (se reparte a prorrata si se llena), pagado con el reclamo |
| Duración | {{P.presale.days}} días. Las horas de inicio y fin están en UTC en la página de la preventa |
| Reclamo | 100% en el listado |

Si un aporte supera el máximo de tu wallet, el BNB sobrante se devuelve en la misma transacción.

## Cómo se protege tu BNB

1. Tu BNB se queda en el contrato de preventa. El equipo no puede retirarlo antes de que termine la venta.
2. Por debajo del soft cap la venta fracasa y cada comprador recupera el 100% en la página de la preventa.
3. Tras la venta, el 80% del BNB entra en el pool de PancakeSwap en el listado y el LP se quema. Cada paso tiene su enlace
   en la lista de verificación del listado de la página de la preventa. Ver [Listado](/es/token/listing).

## Invita amigos

Conecta tu wallet en la página de la preventa para obtener tu enlace de invitación
(`presale.agenticstarter.xyz/?ref=<tu wallet>`). Cuando alguien compra con ese enlace, el contrato de preventa registra la
invitación junto con la compra (`contributeWithRef`). El comprador no paga más y su asignación no cambia.

- Cada wallet que compra 0.05 BNB o más con tu enlace suma **100 puntos del airdrop** (misión Q6, hasta 50 compradores).
- Participar tú mismo en la preventa es la misión Q5: desde 0.05 BNB **+500 puntos**, luego +100 por cada 0.01 BNB (hasta
  10.000), y comprar en las primeras 48 horas suma **500**. ¿Compraste con otra wallet distinta a la del airdrop?
  Vincúlala una vez en la página del airdrop (tarjeta Q5).
- Los puntos cuentan una vez que tu wallet completa las tres misiones obligatorias del airdrop.
- Comprar con tu propio enlace no cuenta, y las compras reembolsadas se eliminan.

## Después de la venta

1. **Finalizar**: el BNB va al Safe de tesorería y el AGNT no vendido se quema.
2. **Listado** al día siguiente a las 14:00 UTC: el 80% del BNB entra en el pool AGNT/BNB al precio final de la preventa,
   el LP se quema y luego se abren los reclamos.
3. Reclamas el 100% de tu AGNT (y el bonus para los primeros) en la página de la preventa.

Cada paso se marca en la lista de verificación del listado de la página de la preventa, con un enlace a la transacción.
Activa allí un recordatorio (Telegram o calendario) para saber cuándo se abren los reclamos.

## Reembolsos

Los aportes son definitivos, con dos excepciones:

- **La venta fracasa**: termina por debajo del soft cap. Los reembolsos se abren automáticamente.
- **El equipo abre el modo de reembolso** antes de que se abran los reclamos. Si esto pasa después de finalizar, el equipo
  primero debe devolver el monto completo al contrato de preventa, para que cada comprador pueda recibir su reembolso
  completo.

En ambos casos recuperas el 100% de tu BNB en la página de la preventa.
