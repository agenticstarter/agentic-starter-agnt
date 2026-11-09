# Preguntas frecuentes

**¿Puedo comprar con MetaMask?** No en la curva de mainnet: comprar en la curva requiere una wallet con Agent ID. Tras la
graduación sí, en PancakeSwap. En testnet el Agent ID es gratis, así que cualquier wallet puede obtenerlo y comprar.

**¿Puedo vender sin Agent ID?** Sí. Cualquiera que tenga un token puede venderlo en la curva, y vender nunca se pausa.

**¿Por qué no puedo enviar tokens a un amigo?** Las transferencias se desbloquean en la graduación. Así se evita esquivar
el límite por wallet y abrir pools antes del listado.

**Mi compra me devolvió BNB. ¿Por qué?** Llegaste al límite por wallet o la curva se agotó; el BNB no usado se devuelve en
la misma transacción.

**¿Por qué todas las direcciones de token terminan en AAAA?** Es nuestra marca. Las copias no pueden falsificar la
dirección completa, pero un token fraudulento en otro sitio podría terminar en AAAA, así que abre los tokens desde nuestro
sitio o compruébalos en la página de [Site integrity](https://agenticstarter.xyz/integrity?lang=es).

**¿Cuánto me cuesta la graduación?** Nada, salvo que tu compra sea la que llena la curva. Esa compra paga el gas extra del
listado en PancakeSwap. La comisión de graduación ({{P.mainnet.graduationFeeBps|pct}} del objetivo, como máximo 2 BNB) sale
del BNB reunido, y una quinta parte va al creador.

**¿Cuánto gana un creador?** El 20% de la comisión del 1% de cada operación de otros con su token, en BNB, hasta la
graduación, más el bonus de graduación. El creador puede repartirlo con hasta 10 wallets o cuentas de X/GitHub, o
devolverlo a los traders como cashback. Ver [Comisiones](/es/guide/fees).

**¿Cuántos holders necesita un token?** Por el límite por wallet, al menos {{P.mainnet.minWalletsToGraduate}} wallets
distintas en mainnet ({{P.testnet.minWalletsToGraduate}} en testnet). La página del token cuenta cuántas faltan.

**¿Puede el creador cambiar el token tras lanzarlo?** Solo el logo, la descripción y los enlaces, por {{P.mainnet.metaUpdateFeeBnb}} BNB. Cada
cambio es público y la página del token muestra un aviso durante 7 días. Nombre, símbolo y suministro nunca cambian.

**¿El equipo tiene tokens de las monedas lanzadas?** No. Los creadores compran con el mismo límite por wallet que todos.

**¿Hay impuesto en los tokens?** No. Ni los tokens lanzados ni $AGNT tienen impuesto de transferencia.

**¿Puede el equipo impedirme vender?** No. El guardián puede pausar nuevos lanzamientos y compras en una emergencia, pero
vender y reclamar nunca se pausan.

**¿Me escribirá un admin por privado?** Nunca primero. Nadie de Agentic Starter te pedirá tu frase semilla ni tu clave
privada. Ver [Mantente seguro](/es/guide/safety).

**¿Puedo crear un token normal sin la curva?** Sí, con la [fábrica de tokens estándar](/es/guide/standard-tokens).

**¿Dónde veo el código?** [github.com/agenticstarter/agentic-starter-agnt](https://github.com/agenticstarter/agentic-starter-agnt).
Las direcciones de los contratos están en [Site integrity](https://agenticstarter.xyz/integrity?lang=es).
