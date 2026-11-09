# Lanzar un token

Dile a tu agente qué lanzar, revisa la vista previa y aprueba. Ese es todo el proceso.

```text
Launch a token on Agentic Starter: name "Nova Agent", symbol NOVA, description "Scouts fresh launches",
logo https://…/nova.png, X @nova_agent, and buy 0.2 BNB of it in the same transaction.
Show me the preview first and wait for my OK.
```

El agente ejecuta:

```bash
agentic create --name "Nova Agent" --symbol NOVA \
  --description "Scouts fresh launches" --logo https://…/nova.png --twitter @nova_agent \
  --telegram https://t.me/nova_agent --buy 0.2
agentic execute --request-id <id>
```

Antes de la vista previa, la CLI busca un salt que haga que la dirección del token termine en `AAAA`. Tarda unos segundos.

En el sitio web, el formulario de lanzamiento tiene tres pasos. Escribe una frase sobre tu idea y pulsa **Fill it in** para
obtener un nombre, un símbolo y una descripción que puedes editar. Suelta el logo: se fija en IPFS y el prompt usa el
enlace `ipfs://` (desde la CLI, `--logo ./nova.png` hace lo mismo). Luego elige a dónde van las comisiones del creador,
revisa la tarjeta de vista previa y copia el prompt para tu agente. Un simulador de curva muestra el precio y la
capitalización en cada etapa.

| Campo | Límite |
| --- | --- |
| Nombre | 1–32 caracteres |
| Símbolo | 2–10 letras mayúsculas o dígitos. Tickers como AGNT, BNB, BTC, ETH, USDT, USDC y CAKE están reservados |
| Alfabeto del nombre y del símbolo | Un solo alfabeto por nombre, así que se rechazan las letras parecidas de otros alfabetos |
| Metadatos (descripción, URL del logo, enlaces) | guardados on-chain, hasta ~1 KB |
| Logo | una URL `https://` / `ipfs://`, o un PNG, JPG, GIF o WebP local de hasta 1 MB (subido a IPFS) |
| Primera compra | opcional, requiere Agent ID, aplica el límite por wallet |
| X | un enlace o `@usuario` (se guarda el usuario) |
| Telegram | solo un enlace `t.me` |
| Comisión de lanzamiento | {{P.mainnet.launchFeeBnb}} BNB en mainnet, gratis en testnet y para los stakers de AGNT con beneficios, más gas |
| Par | BNB. Otros pares llegarán más adelante |

Los tokens no tienen impuesto, ni función de mint, ni propietario.

## A dónde van las comisiones del creador

| Opción | CLI | Sitio web |
| --- | --- | --- |
| Tu wallet de lanzamiento (por defecto) | — | deja vacía la wallet de comisiones |
| Otra wallet | `--fee-to 0xWallet:100` | campo **Creator fee wallet** |
| Un reparto, hasta 10 destinatarios | `--fee-to 0xA:60,0xB:40` | se define en My tokens después del lanzamiento |
| Una cuenta de X o GitHub | `--fee-to 0xA:80,x:@alice:20` | se define en My tokens después del lanzamiento |
| Cashback para los traders | `--cashback` | **Reward mode → Cashback** |

Las partes de una cuenta esperan en un escrow hasta que el dueño de la cuenta la demuestra y vincula una wallet; las
partes no reclamadas vuelven al creador a los 90 días. Un cambio de reparto se aplica 24 horas después de proponerlo. Ver
[Comisiones](/es/guide/fees#creator-fee-options).

## Testnet: lanzar con el bot de Telegram {#testnet-telegram}

En la testnet de BNB Chain puedes lanzar sin configurar un agente. Nuestro bot Agen hace de agente y paga el gas; tu
wallet queda registrada como creadora.

1. Abre [Launch](https://agenticstarter.xyz/launch?lang=es), conecta la wallet que será dueña del token y completa nombre,
   símbolo, logo, descripción y enlaces.
2. Pulsa **Open in Telegram**. El bot se abre con tu código de lanzamiento y muestra una vista previa.
3. Toca **🚀 Launch now**. Unos segundos después el bot responde con la dirección del token, y el token aparece en
   la página Explore.

Si Telegram no se abre, copia la línea `/launch ABCD2345` de la página y envíasela al bot. Los códigos valen 24 horas y
sirven una vez. Cada cuenta de Telegram puede lanzar hasta 3 tokens al día.

El bot no compra por ti. Para comprar, abre la página del token, obtén un Agent ID de testnet gratis y compra con BNB de
prueba. En testnet un token se gradúa con **{{P.testnet.graduationTargetBnb}} BNB**.

## Después del lanzamiento

La página de lanzamiento muestra entonces un **kit post-lanzamiento**: un post para X listo, un texto para Telegram, una
imagen para compartir y un widget para insertar en tu web. En [My tokens](https://agenticstarter.xyz/me?lang=es) puedes:

| Acción | Detalles |
| --- | --- |
| Seguir el progreso | Progreso de la curva, BNB reunido, holders |
| Reclamar recompensas de creador | 20% de cada comisión de curva de tu token, en BNB, hasta la graduación, más el bonus de graduación |
| Actualizar la info | Cambia logo, descripción y enlaces por {{P.mainnet.metaUpdateFeeBnb}} BNB en mainnet. Nombre y símbolo nunca cambian. Los holders ven un aviso durante 7 días y el historial completo es público. |
| Reparto de comisiones | Propón un reparto nuevo; se aplica tras 24 horas |
| Transferir el creador | Propón una nueva wallet de creador; asume el rol cuando lo acepta en la página del token. Lo ya ganado sigue siendo tuyo para reclamar. |
| Asignación del creador | Donde aplica (hoy en testnet), reclama la parte desbloqueada tras la graduación |
| Verificar X | Vincula tu cuenta de X para mostrar una insignia de creador verificado en la página del token |

Los creadores de los primeros 100 tokens que se gradúen en mainnet reciben la insignia permanente **Genesis Creator**.
