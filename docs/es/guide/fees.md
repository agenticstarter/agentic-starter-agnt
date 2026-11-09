# Comisiones

| Cuándo | Comisión | Va a |
| --- | --- | --- |
| Lanzar un token | {{P.mainnet.launchFeeBnb}} BNB en mainnet, gratis en testnet (+ gas). Gratis para los stakers de AGNT con beneficios | Tesoro |
| Comprar o vender en la curva | 1% | Reparto abajo |
| Graduación | {{P.mainnet.graduationFeeBps|pct}} del objetivo, como máximo 2 BNB ({{P.mainnet.graduationFeeBnb}} BNB con {{P.mainnet.graduationTargetBnb}} BNB), tomado del BNB reunido | {{P.mainnet.creatorBonusBps|pct}} al creador, el resto al tesoro |
| Actualizar logo, descripción o enlaces de un token | {{P.mainnet.metaUpdateFeeBnb}} BNB en mainnet, gratis en testnet | Tesoro |
| Operar tras la graduación (PancakeSwap) | Sin comisión de plataforma (el 0,25% propio de PancakeSwap) | — |

## A dónde va el 1% de la curva

<div class="split"><span class="s1" style="width:20%">20%</span><span class="s2" style="width:40%">40%</span><span class="s3" style="width:30%">30%</span><span class="s4" style="width:10%">10%</span></div>
<div class="split-legend"><span><i style="background:#ffc93c"></i>Creador del token</span><span><i style="background:#b79cff"></i>Recompra y quema de $AGNT</span><span><i style="background:#7ed6a8"></i>Stakers de $AGNT, en BNB</span><span><i style="background:#c9c8cf"></i>Tesoro</span></div>

| Parte | Va a |
| --- | --- |
| 20% | El **creador** del token (o el reparto de comisiones del creador), hasta la graduación. Sus propias operaciones no lo generan. Se reclama en [My tokens](https://agenticstarter.xyz/me?lang=es). En el **modo cashback** esta parte vuelve al trader. |
| 40% | Compra $AGNT en PancakeSwap y lo envía a la dirección de quema |
| 30% | Se paga en BNB a los [stakers de $AGNT](/es/token/staking), repartido a lo largo de 7 días |
| 10% | Tesoro (multisig 2 de 2) |

La parte que no es del creador se acumula en el launchpad y se envía al contrato **FeeSplitter**, que recompra (como
máximo 1% de slippage y 1 BNB por ejecución), quema y paga a los stakers. Los totales son públicos en la
[página Transparency](https://agenticstarter.xyz/transparency?lang=es), en el informe semanal y on-chain.

## Opciones de comisión del creador {#creator-fee-options}

Al lanzar, el creador elige uno de dos modos:

| Modo | Qué pasa con el 20% del creador |
| --- | --- |
| **Creator fees** (por defecto) | Se paga a la wallet del creador, o se reparte entre hasta 10 destinatarios. Un destinatario puede ser una wallet o una **cuenta de X o GitHub**; las partes de una cuenta esperan en un escrow hasta que el dueño de la cuenta vincula una wallet (vuelven al creador a los 90 días si nadie las reclama). |
| **Cashback** | Se devuelve al trader en cada compra y venta, así que los traders pagan menos. |

Un nuevo reparto de comisiones se aplica 24 horas después de proponerlo, para que los holders vean venir el cambio.
Pasar el rol de creador a otra wallet es una transferencia en dos pasos: la nueva wallet debe aceptar.

## Límites que el propietario no puede superar

Las comisiones solo pueden moverse dentro de límites escritos en los contratos: comisión de graduación como máximo el 5%
del objetivo y nunca más de 2 BNB, bonus de graduación del creador como máximo el 30% de esa comisión, objetivo de
graduación como máximo 50 BNB, comisión de lanzamiento hasta 0,02 BNB, comisión de actualización hasta 0,05 BNB y parte
del creador hasta el 30%. En mainnet cada uno de estos puede moverse como máximo ±50% cada 7 días. La comisión de curva
del 1% es fija.
