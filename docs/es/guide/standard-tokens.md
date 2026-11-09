# Tokens estándar

¿Necesitas un token BEP-20 normal, sin la curva de bonding, por ejemplo para una comunidad, un juego o una prueba? Créalo
en [agenticstarter.xyz/create](https://agenticstarter.xyz/create?lang=es). Cualquiera puede usarlo; no hace falta Agent ID. Los
tokens estándar nunca reciben una dirección `AAAA`, así que no se pueden confundir con los tokens del launchpad.

| Tipo | Qué obtienes | Comisión |
| --- | --- | --- |
| Básico | Suministro fijo, sin propietario, sin mint, sin impuesto. Dirección aleatoria | {{P.mainnet.standardTokenFeesBnb.random}} BNB |
| Básico, dirección que termina en 9999 | Lo mismo, con una dirección `…9999` encontrada en tu navegador | {{P.mainnet.standardTokenFeesBnb.vanity9999}} BNB |
| Avanzado | Un propietario que puede renunciar, un tope de mint opcional (el suministro máximo se fija al crear) | {{P.mainnet.standardTokenFeesBnb.advanced}} BNB |
| Avanzado con impuesto de transferencia | Como el anterior, más un impuesto de como máximo 5% hacia una wallet que elijas. El impuesto solo puede bajar | {{P.mainnet.standardTokenFeesBnb.advancedTax}} BNB |

Los stakers de AGNT con beneficios pagan la mitad. La comisión va al Tesoro.

## Añadir liquidez

El segundo paso de la página añade tu token y BNB a PancakeSwap V2 en una sola transacción, y se encarga de los tokens LP:

- **Quemar**: el LP va a la dirección muerta. Nadie podrá retirar nunca la liquidez.
- **Bloquear**: el LP queda en el contrato `LiquidityHelper` durante al menos 30 días y luego vuelve a ti. Cualquiera puede
  comprobar el bloqueo en el explorador.

El precio inicial es el BNB que añades dividido entre los tokens que añades. Si dudas, añade primero una cantidad pequeña.
