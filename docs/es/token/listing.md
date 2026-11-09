# Listado y uso de los fondos

$AGNT se lista en PancakeSwap V2 al día siguiente de que termine la preventa, a las 14:00 UTC.

## La regla del listado

| | |
| --- | --- |
| Precio de listado | El precio final de la preventa. Los compradores de la preventa y los primeros compradores del mercado pagan lo mismo |
| BNB al pool | {{P.presale.listing.bnbToPoolPct}}% de todo el BNB reunido |
| AGNT al pool | 80% del BNB reunido ÷ el precio final: {{P.presale.listing.maxPoolAgnt|n}} AGNT cuando se reunieron {{P.presale.floorCapBnb}} BNB o más, 800.000 AGNT por BNB por debajo de eso |
| De dónde sale el AGNT | El Safe de liquidez (150M) más hasta 50M de la reserva de listados de 60M. El AGNT que no haga falta se queda en el Safe de liquidez |
| Tokens LP | Quemados en el mismo paso. Nadie puede retirar la liquidez |

El {{P.presale.listing.bnbToTreasuryPct}}% restante del BNB va al Safe de tesorería.

## Uso de los fondos (la parte del 20% para la tesorería)

| Uso | Parte |
| --- | --- |
| Seguridad y auditorías | {{P.presale.useOfFundsPct.security}}% |
| Listados en exchanges | {{P.presale.useOfFundsPct.listing}}% |
| Marketing y comunidad | {{P.presale.useOfFundsPct.marketing}}% |
| Operaciones (servidores, APIs) | {{P.presale.useOfFundsPct.operations}}% |

El reparto puede editarse hasta que abra la preventa. Después, cada cambio queda registrado públicamente en
[Site integrity](https://agenticstarter.xyz/integrity?lang=es) y se anuncia en Telegram. El gasto se sigue en el
[informe de Transparency](https://agenticstarter.xyz/transparency?lang=es) semanal.

## Compromisos de bloqueo

| Asignación | Regla |
| --- | --- |
| Equipo (120M) | Contrato de vesting: cliff de 12 meses, luego lineal en 24 meses. El propietario solo puede posponer el inicio |
| Tesorería y Ecosistema | Sin ventas en el mercado hasta el listado + 6 meses |
| Liquidez (Safe de liquidez) | Se usa solo para el pool y los listados |
| Comunidad (Safe de la comunidad) | Se usa solo para airdrops y el bonus de la preventa para los primeros compradores |

Si algún Safe del proyecto mueve AGNT a un par de un DEX, a un router o a una dirección de depósito de un exchange
conocido, se envía automáticamente una alerta pública al canal y al grupo de Telegram.

## Compruébalo tú mismo

- [Liquidity proof](https://agenticstarter.xyz/liquidity?lang=es): la dirección del pool, las reservas en vivo y la transacción
  de quema del LP, leídas de la cadena.
- La lista de verificación del listado en la página de la preventa: Finalizar → BNB añadido al pool → LP quemado →
  reclamos abiertos, cada paso con su transacción.
- [Direcciones de los Safe](https://agenticstarter.xyz/integrity?lang=es) con cada cambio de parámetros.
