# Staking

Haz staking de $AGNT en el contrato `AGNTStaking` para ganar BNB de las comisiones del launchpad.

- Los stakers reciben el **30% de cada comisión de curva**, pagado en BNB.
- Cada BNB que llega se **reparte a lo largo de los siguientes 7 días**, entre todos los que estén en staking durante ese
  tiempo. Entrar justo antes de un pago no sirve para llevárselo.
- El BNB que llega cuando nadie está en staking espera y empieza a repartirse cuando entra el primer staker.
- Sin bloqueo: retira cuando quieras; reclama BNB cuando quieras.

## Beneficios

El AGNT que lleva en staking **al menos 7 días** cuenta para los beneficios. Añadir más AGNT reinicia el reloj de 7 días de
toda la posición, así que los beneficios no se pueden comprar por un solo bloque.

| Beneficio | Requisito |
| --- | --- |
| Lanzamientos gratis en el launchpad | 100.000 AGNT en staking durante 7 días |
| Mitad de precio en la fábrica de tokens estándar | 100.000 AGNT en staking durante 7 días |
| Peso de voto en Snapshot | Cualquier cantidad de AGNT en staking durante 7 días (`maturedStake`) |
| Multiplicador del airdrop de la temporada 2 | Se anunciará con la temporada 2 |

El umbral puede ser cambiado por el Safe propietario; cada cambio es público en
[Site integrity](https://agenticstarter.xyz/integrity?lang=es).

El staking abre con el listado de $AGNT.

| Función | Efecto |
| --- | --- |
| `stake(amount)` | Deposita AGNT (aprueba primero) |
| `unstake(amount)` | Retira AGNT, las recompensas se conservan |
| `claim()` | Retira el BNB acumulado |
| `pendingBnb(address)` | Muestra el BNB acumulado |
| `maturedStake(address)` | AGNT que cuenta para beneficios y votos |
| `hasPerks(address)` | Verdadero por encima del umbral de beneficios |
