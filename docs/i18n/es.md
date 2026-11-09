=== CONFIG ===
description = Documentación de Agentic Starter, el launchpad para agentes de IA en BNB Chain.
guide = Guía
forAgents = Para agentes
contracts = Contratos
apps = Apps
launchpad = Launchpad
presale = Preventa
airdrop = Airdrop
whatIs = Qué es Agentic Starter
how = Cómo funciona
wallet = Configura la wallet del agente
launch = Lanza un token
trading = Comprar y vender
ignite = Ignite (quema + mensaje)
fees = Comisiones
faq = Preguntas frecuentes
cli = Referencia de la CLI
skill = Skill del agente
signers = Firmantes
api = API del indexador
tokenomics = Tokenomics
presalePage = Preventa
airdropPage = Airdrop
staking = Staking
reference = Referencia
contractsPage = Contratos inteligentes
brand = Kit de marca
risks = Riesgos
inEnglish = en inglés
outline = En esta página
prev = Página anterior
next = Página siguiente
updated = Última actualización
top = Volver arriba
menu = Menú
appearance = Apariencia
toLight = Cambiar a tema claro
toDark = Cambiar a tema oscuro
langMenu = Cambiar idioma
footer = Los criptoactivos son muy volátiles. Nada de lo que aparece aquí es asesoramiento financiero.
edit = Editar esta página en GitHub
search = Buscar
noResults = No hay resultados para
nfTitle = PÁGINA NO ENCONTRADA
nfQuote = La página que buscas no existe o fue movida.
nfLink = Volver al inicio
start = Empieza aquí
glossary = Glosario
standardTokens = Tokens estándar
telegram = Comunidad de Telegram
community = Programas de la comunidad
safety = Mantente seguro
listing = Listado y uso de los fondos
installApp = Instala la app en tu teléfono

=== FILE index.md ===
---
layout: home
hero:
  name: Agentic Starter
  text: El launchpad que maneja tu agente.
  tagline: Curvas de bonding solo para agentes en BNB Chain. Cada pool se empareja con BNB.
  image:
    src: /ai-mark.svg
    alt: Agentic Starter
  actions:
    - theme: brand
      text: Empieza aquí
      link: /guide/start
    - theme: alt
      text: Cómo funciona
      link: /guide/how-it-works
    - theme: alt
      text: Tokenomics de $AGNT
      link: /token/agnt
features:
  - title: Curva solo para agentes
    details: Antes de la graduación solo pueden comprar las wallets con Agent ID. Sin bots snipers ni ballenas manuales.
  - title: "{{P.mainnet.walletCapBps|pct}} por wallet"
    details: "En mainnet nadie puede tener más del {{P.mainnet.walletCapBps|pct}} de los 1.000 millones de un token en la curva, así que hacen falta al menos {{P.mainnet.minWalletsToGraduate}} wallets para graduarse. El BNB sobrante se devuelve en la misma transacción."
  - title: Se gradúa a PancakeSwap
    details: "Al reunir {{P.mainnet.graduationTargetBnb}} BNB ({{P.testnet.graduationTargetBnb}} BNB en testnet), 200 millones de tokens y el BNB se listan en PancakeSwap V2. LP quemado, fin de las comisiones de la curva."
  - title: Comisiones que vuelven
    details: "La comisión del 1% de la curva paga al creador (20%), recompra y quema $AGNT (40%), paga BNB a los stakers (30%) y financia el tesoro (10%)."
---

=== FILE guide/start.md ===
# Empieza aquí

¿Nuevo en cripto o en Agentic Starter? Esta página te lleva de cero a tu primer token en unos 15 minutos. Todo lo de abajo
ocurre en la **testnet de BNB Chain**, donde el BNB es dinero de prueba gratis, así que no puedes perder nada.

<div class="flow">
  <div><b>1. Wallet</b><small>Instala una app de wallet</small></div>
  <div class="arrow">→</div>
  <div><b>2. BNB de prueba</b><small>Gratis desde un faucet</small></div>
  <div class="arrow">→</div>
  <div><b>3. Agent ID</b><small>Gratis en testnet</small></div>
  <div class="arrow">→</div>
  <div><b>4. Opera</b><small>Compra y vende en una curva</small></div>
  <div class="arrow">→</div>
  <div><b>5. Lanza</b><small>Tu propio token</small></div>
</div>

## 1. Consigue una wallet

Una wallet es una app que guarda tus criptos y firma transacciones. Instala una compatible con BNB Chain, como MetaMask,
Trust Wallet o Rabby.

Al crearla, la app muestra una **frase semilla** (12 o 24 palabras). Escríbela en papel y guárdala sin conexión. Quien la
tenga controla tu wallet. Nadie de Agentic Starter te la pedirá nunca.

## 2. Consigue BNB de prueba gratis

1. Abre [agenticstarter.xyz](https://agenticstarter.xyz) y pulsa **Connect**. El sitio le pide a tu wallet cambiar a
   **BNB Smart Chain Testnet** (chain 97). Acepta.
2. Copia la dirección de tu wallet (empieza por `0x`).
3. Abre el faucet de la testnet de BNB Chain, pega la dirección y pide tBNB. Llega en uno o dos minutos. [bnbchain.org/en/testnet-faucet](https://www.bnbchain.org/en/testnet-faucet)

La [página Start](https://agenticstarter.xyz/start) del launchpad recorre los mismos pasos y los marca a medida que avanzas.

## 3. Obtén un Agent ID

Comprar en una curva de bonding requiere un **Agent ID** en tu wallet. En testnet es gratis: abre cualquier página de token
y pulsa **Get Agent ID**. Solo pagas un poco de gas de prueba.

## 4. Haz tu primera operación

En esa misma página de token, compra una pequeña cantidad y luego vende una parte. Mira cómo la barra de progreso avanza
hacia PancakeSwap. Vender nunca necesita Agent ID.

## 5. Lanza tu propio token

Abre [Launch](https://agenticstarter.xyz/launch), escribe un nombre, un símbolo y un logo, y pulsa **Open in Telegram**.
Nuestro bot Agen lo lanza para tu wallet y paga el gas. Detalles en [Lanzar un token](/guide/launch#testnet-telegram).

## De paso: el airdrop

Cada uno de estos pasos también suma [puntos del airdrop](/token/airdrop): lanzar, operar, el quiz diario y más.

## Palabras que verás

¿No sabes qué significan "curva", "graduación" o "gas"? Mira el [glosario](/guide/glossary). ¿Sigues atascado? Pregunta a
Agen, la burbuja de chat en la esquina de cada sitio, o en nuestro grupo de Telegram.

=== FILE guide/glossary.md ===
# Glosario

| Palabra | Significado |
| --- | --- |
| **Dirección AAAA** | Cada token lanzado aquí tiene una dirección de contrato que termina en `AAAA`. Es una marca de la casa, no un control de seguridad: abre siempre los tokens desde nuestro sitio. |
| **Agente** | Un programa de IA que actúa por ti; aquí, lanza y opera tokens desde su propia wallet, dentro de los límites que tú fijas. |
| **Agent ID** | Una credencial que guarda una wallet de agente. Hace falta para comprar en una curva de bonding. Gratis en testnet. |
| **Wallet de agente** | Una wallet aparte que usa tu agente, con límites de gasto, para que tus fondos principales queden separados. |
| **Airdrop** | $AGNT gratis que se reparte a las wallets elegibles tras una temporada, en proporción a sus puntos. |
| **BNB** | La moneda nativa de BNB Chain. Paga el gas y todos los tokens aquí tienen precio en ella. |
| **BNB Chain** | La blockchain en la que funciona Agentic Starter. |
| **Curva de bonding** | Un contrato que vende un token nuevo a un precio fijado por una fórmula: cada compra lo sube y cada venta lo baja. No necesita libro de órdenes. |
| **Quemar** | Enviar tokens a una dirección que nadie controla, para que desaparezcan para siempre. |
| **Creador** | La wallet para la que se lanzó un token. Gana una parte de las comisiones de la curva hasta la graduación (o se la devuelve a los traders como cashback). |
| **Cashback** | Una opción de lanzamiento: la parte de la comisión de la curva que corresponde al creador vuelve al trader en cada operación. |
| **Destacado** | Un espacio en Explore que se paga quemando AGNT. Es un anuncio, no una reseña. |
| **Hora dorada** | Una hora al día en la que los puntos del airdrop cuentan doble. |
| **Comisión de curva** | El 1% de cada compra y venta en una curva de bonding. Ver [Comisiones](/guide/fees). |
| **Faucet** | Un sitio web que regala BNB de testnet. |
| **Gas** | La pequeña tarifa que cobra la red por cada transacción, pagada en BNB. |
| **Genesis Creator** | Una insignia permanente para los creadores de los primeros 100 tokens que se gradúen en mainnet. |
| **Graduación** | El momento en que se llena una curva: el token pasa a PancakeSwap con liquidez bloqueada y la curva se cierra. |
| **Ignite** | Quemar parte de un token adjuntando un mensaje público. Ver [Ignite](/guide/ignite). |
| **Tokens LP** | Prueba de una parte de un pool de PancakeSwap. Los quemamos en la graduación, así la liquidez nunca puede retirarse. |
| **Mainnet** | La red real, con dinero real. |
| **PancakeSwap** | El mayor exchange de BNB Chain. Allí se operan los tokens graduados. |
| **Preventa** | La primera venta pública de $AGNT, antes de que se liste. Ver [Preventa](/token/presale). |
| **Frase semilla** | 12 o 24 palabras que controlan una wallet. No las compartas nunca, con nadie. |
| **Slippage** | Cuánto puede moverse el precio entre la vista previa y la operación antes de que se rechace. |
| **Snapshot** | El momento en que se congelan los puntos y se calculan las partes del airdrop. |
| **Staking** | Bloquear $AGNT en un contrato para ganar una parte de las comisiones en BNB. Ver [Staking](/token/staking). |
| **Testnet** | Una copia de práctica de BNB Chain donde el BNB es gratis y no vale nada. |
| **TGE** | Evento de generación del token: el día en que $AGNT se lista en PancakeSwap y se abren los reclamos de la preventa. |
| **Límite por wallet** | Lo máximo de un token que una sola wallet puede tener mientras está en la curva ({{P.mainnet.walletCapBps|pct}} en mainnet, {{P.testnet.walletCapBps|pct}} en testnet). |

=== FILE guide/what-is.md ===
# Qué es Agentic Starter

::: tip ¿Eres nuevo?
La página [Empieza aquí](/guide/start) te lleva de cero a tu primer token en testnet en unos 15 minutos.
:::

Agentic Starter es un launchpad de tokens en BNB Chain hecho para agentes de IA. Tu agente lanza el token, tu agente lo
opera en una bonding curve y tú apruebas cada paso. Cuando la curva se llena, el token se lista en PancakeSwap, emparejado
con BNB.

En mainnet no hay botón de compra en [agenticstarter.xyz](https://agenticstarter.xyz). El sitio muestra el mercado, los
gráficos, los holders y los agentes; el trading se hace con la [CLI del agente](/agents/cli) y una wallet de agente.

::: tip Testnet
En la testnet de BNB Chain cualquiera puede probarlo sin agente: lanza con nuestro bot de Telegram
([Lanza un token](/guide/launch#testnet-telegram)), reclama un Agent ID de testnet gratis en cualquier página de token y
compra con BNB de prueba desde una wallet normal.
:::

## Por qué solo agentes

| Problema en un launchpad común | Lo que hace Agentic Starter |
| --- | --- |
| Bots snipers compran en el primer bloque | Solo las wallets con Agent ID pueden comprar en la curva |
| Una ballena acapara gran parte del suministro | Cada wallet tiene como máximo un 1% mientras está en la curva |
| Pools creados antes del lanzamiento, dumps OTC | Las transferencias están bloqueadas hasta la graduación |
| La liquidez se retira después del listado | Los tokens LP se queman en la graduación |
| Las comisiones no van a ningún lado | La comisión del 1% paga a los creadores, quema $AGNT y paga BNB a los stakers |

## Para quién es

- **Creadores de agentes** que quieren que su agente lance y opere tokens de forma segura, dentro de los límites que fija
  el dueño.
- **Comunidades** que quieren un arranque justo, sin bots.
- **Holders de $AGNT**, que participan de las comisiones de cada lanzamiento.

## Alcance de la fase 1

Todos los tokens se emparejan con **BNB** en **BNB Chain**. Pueden llegar más pares y cadenas a medida que se extiendan las
wallets de agente; antes se consultará a la comunidad.

=== FILE guide/how-it-works.md ===
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
comprar en la curva. Ver [Configurar una wallet de agente](/guide/agent-wallet). En testnet cualquier wallet puede obtener
un Agent ID gratis.

## 2. Lanzamiento en una curva de bonding

Lanzar crea un token con un suministro fijo de **1.000.000.000**:

| Parte | Cantidad | Propósito |
| --- | --- | --- |
| Curva | 800.000.000 | Se vende a lo largo de la curva de bonding |
| Liquidez | 200.000.000 | Se añade a PancakeSwap en la graduación |

La dirección del token siempre termina en **`AAAA`**. Es nuestra marca, no una garantía, así que abre siempre los tokens
desde [agenticstarter.xyz](https://agenticstarter.xyz) o compruébalos en [Site integrity](https://agenticstarter.xyz/integrity).

El precio sigue una fórmula de producto constante: comprar lo sube, vender lo baja. El creador puede hacer la primera
compra en la transacción de lanzamiento, con el mismo límite por wallet que todos.

Reglas mientras el token está en la curva:

- **Comprar:** solo quienes tienen Agent ID, comprobado on-chain en cada compra.
- **Vender:** cualquier holder, sin transacción de aprobación. Vender nunca se pausa.
- **Límite por wallet:** {{P.mainnet.walletCapBps|pct}} del suministro por wallet en mainnet ({{P.testnet.walletCapBps|pct}} en
  testnet). Una compra que lo superaría se recorta y el resto del BNB se devuelve en la misma transacción. Por este
  límite, un token necesita al menos **{{P.mainnet.minWalletsToGraduate}} wallets distintas** para graduarse en mainnet
  ({{P.testnet.minWalletsToGraduate}} en testnet). La página del token muestra cuántos holders más hacen falta.
- **Comisión:** 1% en compras y ventas. Ver [Comisiones](/guide/fees).
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
[Site integrity](https://agenticstarter.xyz/integrity).

## Interruptores de seguridad

Los contratos no tienen proxies actualizables. El propietario es una multisig 2 de 2 (Safe). Una wallet guardiana puede
pausar **nuevos lanzamientos y compras** en una emergencia; solo el propietario puede reanudar. **Vender, los reembolsos,
los reclamos y la graduación nunca se pausan.** Cambiar un módulo (la verificación de Agent ID, la plantilla del token, el
adaptador de listado, el escrow de comisiones o los beneficios de staking) pasa por una espera pública de **48 horas**. En
mainnet, las comisiones y el objetivo de graduación pueden moverse como máximo ±50% cada 7 días, siempre dentro de topes
fijos escritos en el contrato.

=== FILE guide/agent-wallet.md ===
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

También puedes pegar la dirección de una wallet en [Agent check](https://agenticstarter.xyz/check) para ver su estado de
Agent ID y sus holdings.

::: warning
Nunca le des a un agente la frase semilla de tu wallet principal. Usa una wallet de agente dedicada y con límites.
:::

=== FILE guide/launch.md ===
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
[Comisiones](/guide/fees#creator-fee-options).

## Testnet: lanzar con el bot de Telegram {#testnet-telegram}

En la testnet de BNB Chain puedes lanzar sin configurar un agente. Nuestro bot Agen hace de agente y paga el gas; tu
wallet queda registrada como creadora.

1. Abre [Launch](https://agenticstarter.xyz/launch), conecta la wallet que será dueña del token y completa nombre,
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
imagen para compartir y un widget para insertar en tu web. En [My tokens](https://agenticstarter.xyz/me) puedes:

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

=== FILE guide/trading.md ===
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

=== FILE guide/ignite.md ===
# Ignite

Ignite permite que cualquier holder queme parte de un token y deje un mensaje público corto. Los tokens van a la dirección
muerta (`0x…dEaD`) para siempre, y el mensaje queda guardado on-chain junto a la quema. Es la forma más contundente de
decir "creo en este token": pagas con tokens, así que no se puede hacer spam gratis.

Está en cada página de token (el botón **Ignite** junto al gráfico) y en el [tablero de Ignite](https://agenticstarter.xyz/ignite),
que muestra las quemas más recientes y más grandes de todo el launchpad, además de los principales quemadores.

| | |
| --- | --- |
| Qué se quema | Cualquier cantidad de un token que tengas, antes o después de la graduación |
| Mensaje | Hasta 140 bytes. Los mensajes con enlaces se ocultan en el sitio |
| Respuestas | Un ignite puede responder a uno anterior (`replyTo`) |
| Costo | Los tokens que quemas + gas. Sin comisión de la plataforma |
| Contrato | `IgniteBoard`, evento `Ignited(id, token, from, amount, message, replyTo)` |

## Desde el sitio

1. Abre un token y haz clic en **Ignite**.
2. Elige la cantidad (25%, 50%, 100% o personalizada) y escribe tu mensaje.
3. Aprueba el token una vez y confirma el ignite.

## Desde tu agente

```bash
agentic ignite --token 0x0905…e50e --percent 10 --message "Shipping v2 this week"
agentic execute --request-id <id>   # envía approve + ignite
```

Cada página de token muestra el total quemado con ignites, y su pestaña **Ignites** reúne todos los mensajes.

=== FILE guide/fees.md ===
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
| 20% | El **creador** del token (o el reparto de comisiones del creador), hasta la graduación. Sus propias operaciones no lo generan. Se reclama en [My tokens](https://agenticstarter.xyz/me). En el **modo cashback** esta parte vuelve al trader. |
| 40% | Compra $AGNT en PancakeSwap y lo envía a la dirección de quema |
| 30% | Se paga en BNB a los [stakers de $AGNT](/token/staking), repartido a lo largo de 7 días |
| 10% | Tesoro (multisig 2 de 2) |

La parte que no es del creador se acumula en el launchpad y se envía al contrato **FeeSplitter**, que recompra (como
máximo 1% de slippage y 1 BNB por ejecución), quema y paga a los stakers. Los totales son públicos en la
[página Transparency](https://agenticstarter.xyz/transparency), en el informe semanal y on-chain.

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

=== FILE guide/standard-tokens.md ===
# Tokens estándar

¿Necesitas un token BEP-20 normal, sin la curva de bonding, por ejemplo para una comunidad, un juego o una prueba? Créalo
en [agenticstarter.xyz/create](https://agenticstarter.xyz/create). Cualquiera puede usarlo; no hace falta Agent ID. Los
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

=== FILE guide/telegram.md ===
# Comunidad de Telegram

| Lugar | Enlace | Para qué sirve |
| --- | --- | --- |
| Canal | [t.me/agenticstarter](https://t.me/agenticstarter) | Solo anuncios |
| Grupo | [t.me/agentic_starter](https://t.me/agentic_starter) | Chat, el quiz diario, preguntas a Agen |
| Agen (bot) | [t.me/agenticstarter_bot](https://t.me/agenticstarter_bot) | Mini App del airdrop, recordatorios, lanzamientos en testnet |

## Unirse al grupo

Los miembros nuevos pulsan **I'm not a bot** en el mensaje de bienvenida antes de poder escribir. Los mensajes de
bienvenida y de ingreso se borran al poco tiempo para mantener limpio el chat.

## Pregunta a Agen

Escribe `@Agen` en cualquier parte de tu mensaje en el grupo, por ejemplo `@Agen ¿cómo funciona la graduación?`. Agen responde en tu idioma con esta documentación y datos en vivo. Las preguntas del proyecto las responde solo en el grupo, para que todos vean la respuesta; en privado te ayuda con lo tuyo (lanzamientos, puntos, recordatorios).

Agen no responde preguntas que podrían ponerte en riesgo a ti o al proyecto (claves, frases semilla, cómo atacar un
contrato), ni preguntas que no tienen nada que ver con Agentic Starter. Las preguntas que se repiten mucho reciben un
enlace a la página correcta de la documentación.

## Comandos

| Comando | Dónde | Qué hace |
| --- | --- | --- |
| `@Agen <pregunta>` | grupo | Preguntar a Agen (`/agen` también vale) |
| `/points` | privado | Tus puntos del airdrop y lo que falta |
| `/earn` | grupo o privado | Lo que aún puedes hacer para ganar puntos, lo más valioso primero |
| `/challenge` | grupo o privado | El reto de hoy y tu racha |
| `/help` | grupo o privado | Todos los comandos |
| `/watch <token>` | privado | Un mensaje al 80%, al 90% y en la graduación |
| `/remind presale` · `claim` · `mainnet` | privado | Un mensaje cuando se abra |
| `/report` | responde a un mensaje del grupo | Reporta una estafa o un falso admin al equipo |
| `/launch <code>` | privado | Lanzamiento en testnet desde el sitio web (ver [Lanzar](/guide/launch#testnet-telegram)) |
| `/faucet` | privado | Dónde conseguir BNB de prueba (la página del airdrop puede darte un empujón una vez tras Q2) |
| `/settings` | privado | Qué mensajes privados te envía Agen: cajas, avisos del quiz, resumen y más |
| `/agentid` | privado | Comprueba un Agent ID |

Cada mensaje privado de Agen tiene un botón **Desactivar estos**. Vuelve a activarlos cuando quieras con `/settings`.

## Reglas del grupo

- Sé amable. Nada de insultos, campañas de FUD, spam ni promoción de otros proyectos.
- Enlaces: solo enlaces oficiales (ver [Mantente seguro](/guide/safety)). Los demás se eliminan.
- Strikes: los insultos graves dan un strike de inmediato; los leves repetidos, tras una advertencia. **5 strikes** en 20
  días significan un ban. Los strikes caducan a los 20 días.
- Los admins nunca escriben por privado primero y nunca piden claves, frases semilla ni BNB.
- Los nombres que imitan al equipo (admin, support, Agentic Starter, Agen) se silencian, y se borran los mensajes de "escríbeme por DM", de frases semilla y de "valida tu billetera".

Si crees que una acción de moderación fue un error, escribe a un admin en el grupo.

=== FILE guide/community.md ===
# Programas de la comunidad

## Salón de la Fama

[agenticstarter.xyz/hall-of-fame](https://agenticstarter.xyz/hall-of-fame) guarda para siempre los primeros tokens que se
graduaron, los agentes de la semana y los líderes de cada temporada del airdrop. Los creadores de los primeros 100 tokens
que se gradúen en mainnet reciben la insignia permanente **Genesis Creator**.

## Agente de la semana

Cada lunes el equipo elige una wallet de agente por sus lanzamientos y operaciones en la curva, en testnet y en mainnet.
Se publica en el canal y en X, aparece en el Salón de la Fama y suma puntos del airdrop.

## Resumen semanal

Cada semana Agen publica un resumen corto en el grupo y en el canal: miembros nuevos, lanzamientos, graduaciones y los
mejores agentes. El [informe de Transparency](https://agenticstarter.xyz/transparency) semanal muestra las comisiones, el
AGNT quemado, el BNB pagado a los stakers y el saldo de cada Safe.

## Socios y creadores (programa KOL)

Los creadores y las comunidades reciben su propio código y enlace (`agenticstarter.xyz/?ref=<code>`). El equipo ve las
visitas, las wallets que se unieron, las misiones completadas y el BNB de preventa por código, y premia a los socios según
los resultados. Las wallets de los socios siguen las mismas reglas del airdrop que todos. Para postularte, escribe al
equipo en el grupo de Telegram o en X.

## Stickers

[t.me/addstickers/agentic_starter_vibes](https://t.me/addstickers/agentic_starter_vibes)

=== FILE guide/safety.md ===
# Mantente seguro

::: danger Nadie de Agentic Starter jamás va a
- escribirte por privado primero,
- pedirte tu frase semilla o tu clave privada,
- pedirte que envíes BNB para "verificar", "desbloquear" o "reclamar" algo.
:::

## Enlaces oficiales

Solo estos son nuestros. Todo lo demás no lo es.

| | |
| --- | --- |
| Sitios | agenticstarter.xyz y sus subdominios: docs., presale., airdrop., status. |
| X | [@agentic_starter](https://x.com/agentic_starter) |
| Telegram | [canal](https://t.me/agenticstarter) · [grupo](https://t.me/agentic_starter) · [Agen](https://t.me/agenticstarter_bot) |
| Código | [github.com/agenticstarter](https://github.com/agenticstarter) |
| Otros | [Discord](https://discord.gg/S9GJWW9AE7) · [YouTube](https://www.youtube.com/@AgenticStarter) · [TikTok](https://www.tiktok.com/@agenticstarter) · [Medium](https://medium.com/@agenticstarter) |
| Correo de seguridad | security@agenticstarter.xyz |

## Comprueba antes de firmar

[Site integrity](https://agenticstarter.xyz/integrity) lista cada contrato y dirección de Safe oficial, cada cambio de
parámetros, los enlaces oficiales y la versión actual de cada sitio. Un vigilante compara los sitios en vivo con las
versiones publicadas; si un sitio cambia fuera de un despliegue planificado, pasa a modo mantenimiento hasta que el equipo
lo revise. Allí también se listan los dominios falsos conocidos.

Antes de aprobar una transacción:

1. La dirección del sitio es `agenticstarter.xyz` (o un subdominio) y aparece el candado.
2. El contrato que muestra tu wallet coincide con Site integrity.
3. Nunca apruebas un gasto "ilimitado": nuestros sitios siempre piden la cantidad exacta.

## Riesgos de los tokens

Un token lanzado aquí aún puede irse a cero. Los tokens en la curva no tienen propietario, ni mint, ni impuesto, y la
liquidez se quema en la graduación, pero un creador puede vender sus propios tokens como cualquier otro. Lee
[Riesgos](/risks).

## Reporta un problema

- Bug de seguridad: [agenticstarter.xyz/security](https://agenticstarter.xyz/security) o security@agenticstarter.xyz.
  Por favor, da tiempo al equipo para solucionarlo antes de hacerlo público. Los bugs confirmados dan puntos de recompensa.
- Estafa o falso admin en Telegram: responde al mensaje con `/report`.
- Algo no funciona: mira [Status](https://agenticstarter.xyz/status). Los fondos on-chain nunca dependen de nuestros
  servidores; vender, los reembolsos y los reclamos funcionan directamente con los contratos.

=== FILE guide/faq.md ===
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
sitio o compruébalos en la página de [Site integrity](https://agenticstarter.xyz/integrity).

**¿Cuánto me cuesta la graduación?** Nada, salvo que tu compra sea la que llena la curva. Esa compra paga el gas extra del
listado en PancakeSwap. La comisión de graduación ({{P.mainnet.graduationFeeBps|pct}} del objetivo, como máximo 2 BNB) sale
del BNB reunido, y una quinta parte va al creador.

**¿Cuánto gana un creador?** El 20% de la comisión del 1% de cada operación de otros con su token, en BNB, hasta la
graduación, más el bonus de graduación. El creador puede repartirlo con hasta 10 wallets o cuentas de X/GitHub, o
devolverlo a los traders como cashback. Ver [Comisiones](/guide/fees).

**¿Cuántos holders necesita un token?** Por el límite por wallet, al menos {{P.mainnet.minWalletsToGraduate}} wallets
distintas en mainnet ({{P.testnet.minWalletsToGraduate}} en testnet). La página del token cuenta cuántas faltan.

**¿Puede el creador cambiar el token tras lanzarlo?** Solo el logo, la descripción y los enlaces, por {{P.mainnet.metaUpdateFeeBnb}} BNB. Cada
cambio es público y la página del token muestra un aviso durante 7 días. Nombre, símbolo y suministro nunca cambian.

**¿El equipo tiene tokens de las monedas lanzadas?** No. Los creadores compran con el mismo límite por wallet que todos.

**¿Hay impuesto en los tokens?** No. Ni los tokens lanzados ni $AGNT tienen impuesto de transferencia.

**¿Puede el equipo impedirme vender?** No. El guardián puede pausar nuevos lanzamientos y compras en una emergencia, pero
vender y reclamar nunca se pausan.

**¿Me escribirá un admin por privado?** Nunca primero. Nadie de Agentic Starter te pedirá tu frase semilla ni tu clave
privada. Ver [Mantente seguro](/guide/safety).

**¿Puedo crear un token normal sin la curva?** Sí, con la [fábrica de tokens estándar](/guide/standard-tokens).

**¿Dónde veo el código?** [github.com/agenticstarter/agentic-starter-agnt](https://github.com/agenticstarter/agentic-starter-agnt).
Las direcciones de los contratos están en [Site integrity](https://agenticstarter.xyz/integrity).

=== FILE token/agnt.md ===
# Tokenomics de $AGNT

$AGNT es el token de la plataforma Agentic Starter en BNB Chain (BEP-20). Suministro fijo, sin mint, sin impuestos, sin owner.

**Suministro total: 1.000.000.000 AGNT**

| Asignación | Parte | Tokens | Dónde está | Desbloqueo |
| --- | --- | --- | --- | --- |
| Preventa | 25% | 250M | Contrato de preventa | 100% al reclamar; el AGNT no vendido se quema al finalizar |
| Comunidad y airdrops | 20% | 200M | Safe de la comunidad | Airdrops por temporada y el bonus de la preventa para los primeros compradores |
| Liquidez (AGNT/BNB) | 15% | 150M | Safe de liquidez | Se añade al pool en el listado, el LP se quema |
| Equipo | 12% | 120M | Contrato de vesting | Cliff de 12 meses, luego lineal en 24 meses |
| Ecosistema y marketing | 12% | 120M | Contrato de vesting → Safe del ecosistema | Cliff de 3 meses, luego lineal en 18 meses |
| Tesorería | 10% | 100M | Contrato de vesting → Safe de tesorería | Lineal en 12 meses |
| Reserva para listados | 6% | 60M | Safe de liquidez | Hasta 50M refuerzan el pool en el listado; el resto queda para listados posteriores |

Todos los Safes son multisigs 2 de 2. Las reglas de bloqueo y la promesa de no vender están en [Listado](/token/listing).

## De dónde sale el valor

Cada operación en la curva paga una comisión del 1%. [De esa comisión](/guide/fees):

- el **40%** recompra $AGNT en PancakeSwap y lo quema,
- el **30%** se paga en BNB a los [stakers](/token/staking) de $AGNT,
- el **20%** va al creador del token (o de vuelta a los traders en el modo cashback), hasta la graduación,
- el **10%** financia el tesoro.

## Utilidad en el listado

Todo lo de abajo funciona desde el primer día. Nada de esto promete un precio.

| Uso | Cómo |
| --- | --- |
| Parte de las comisiones | Haz staking de AGNT y gana BNB de cada operación en la curva ([Staking](/token/staking)) |
| Lanzamientos gratis | Los stakers con beneficios (al menos 100.000 AGNT en staking durante 7 días) no pagan comisión de lanzamiento, y pagan la mitad en la fábrica de tokens estándar |
| Votos | Votos en Snapshot ponderados por el AGNT en staking durante al menos 7 días |
| Impulso en el airdrop | La temporada 2 da a los stakers un multiplicador de puntos |
| Destacado en Explore | Quema AGNT en el tablero de Ignite para mostrar un token en la fila de Destacados (1 hora por cada 10.000 AGNT, como máximo 24 horas por quema) |

Cualquier otro uso está en la hoja de ruta y se someterá antes a votación.

=== FILE token/presale.md ===
# Preventa

Participa en [presale.agenticstarter.xyz](https://presale.agenticstarter.xyz) con cualquier wallet de navegador compatible
con BNB Chain. Sin KYC, sin correo, solo una wallet. Es una única ronda pública con **un solo precio para todos**.

::: warning Compra solo en la página de la preventa
Nunca envíes BNB a nadie, y nunca a la dirección del contrato: las transferencias simples se rechazan. Los admins nunca
escriben por privado primero. Compara la dirección del contrato con [Site integrity](https://agenticstarter.xyz/integrity).
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
   en la lista de verificación del listado de la página de la preventa. Ver [Listado](/token/listing).

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

=== FILE token/listing.md ===
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
[Site integrity](https://agenticstarter.xyz/integrity) y se anuncia en Telegram. El gasto se sigue en el
[informe de Transparency](https://agenticstarter.xyz/transparency) semanal.

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

- [Liquidity proof](https://agenticstarter.xyz/liquidity): la dirección del pool, las reservas en vivo y la transacción
  de quema del LP, leídas de la cadena.
- La lista de verificación del listado en la página de la preventa: Finalizar → BNB añadido al pool → LP quemado →
  reclamos abiertos, cada paso con su transacción.
- [Direcciones de los Safe](https://agenticstarter.xyz/integrity) con cada cambio de parámetros.

=== FILE token/airdrop.md ===
# Airdrop

Los puntos del airdrop deciden tu parte del airdrop de $AGNT de cada temporada. Es su único uso: no son un token y no se
pueden operar. Únete en [airdrop.agenticstarter.xyz](https://airdrop.agenticstarter.xyz), o ábrelo dentro de Telegram
desde nuestro bot Agen.

## Temporada 1

| | |
| --- | --- |
| Pool | 50 millones de AGNT, que sube a 75 millones con 5.000 wallets elegibles y a 100 millones con 15.000 |
| Quién califica | Las wallets que completan las tres misiones obligatorias (Q1–Q3) |
| Reparto | `tus AGNT = pool × tus puntos ÷ puntos de todas las wallets elegibles` |
| Snapshot | Al terminar la preventa de $AGNT |
| Días | Todos los días empiezan y terminan a las 00:00 UTC |

<div class="flow">
  <div><b>Inicia sesión</b><small>Conecta una wallet y firma un mensaje gratis</small></div>
  <div class="arrow">→</div>
  <div><b>Q1–Q3</b><small>X, Telegram, chat. Ya eres elegible</small></div>
  <div class="arrow">→</div>
  <div><b>Gana más</b><small>Lanza, opera, quiz, invita</small></div>
  <div class="arrow">→</div>
  <div><b>Reclama</b><small>Tras el snapshot</small></div>
</div>

## Misiones

| # | Misión | Puntos |
| --- | --- | --- |
| Q1 | Sigue a @agentic_starter en X y cita la publicación fijada, luego pega el enlace de tu cita. **Obligatoria** | 300 |
| Q2 | Vincula Telegram con el bot del airdrop y quédate en el canal y en el grupo de Telegram (se revisa cada día). **Obligatoria** | 200 |
| Q3 | Chatea en el grupo de Telegram: cada 2 mensajes = 1 punto, hasta 50 al día. **Obligatoria** (al menos 1 punto) | hasta 50 / día |
| Q4 | Launch & Trade en el launchpad de testnet: lanza un token +100 · 5 operaciones de 0.005 BNB o más (curva o PancakeSwap) +100 · tu token se gradúa +300 (el reto) | hasta 500 |
| Q5 | Participa en la preventa de $AGNT: desde 0.05 BNB +500, luego +100 por cada 0.01 BNB | hasta 10.000 |
| Q6 | Invita compradores de la preventa (0.05 BNB o más) con tu enlace | 100 cada uno, hasta 50 compradores |

Q5 y Q6 aparecen como TBA hasta que abra la preventa. Los puntos ganados con la lista de misiones anterior se mantienen.
Completar las seis da la insignia **Season 1 OG**. Cada tarjeta tiene un botón que te lleva al lugar correcto y se marca
sola al volver; las misiones terminadas se pliegan en una línea verde al final.

## Puntos extra

| Actividad | Puntos |
| --- | --- |
| Invitar a un amigo que completa Q1–Q3 y hace algo real más (chatear en 2 días distintos, una operación o la preventa) | 100 cada uno |
| Niveles de invitación: 5 / 20 amigos que cuentan | +200 / +1.000 |
| Quiz diario en el grupo de Telegram | 5 por respuesta correcta, hasta 45 al día |
| Racha de quiz (una respuesta correcta al día): 7 / 14 / 21 / 28 días seguidos | +50 / +100 / +300 / +400 |
| Chatear en el grupo 7 días seguidos | 50 |
| Comprar en las primeras 48 horas de la preventa | 500 |
| Top 10 semanal, cada lunes (solo cuentan el chat, el quiz, las cajas, las operaciones y las invitaciones de esa semana) | 300 / 200 / 100, luego 50 |
| Cargar BNB de prueba al bot de lanzamiento en testnet | 20 por cada 0,1 tBNB, hasta 100 |
| Reportes de errores confirmados por el equipo | 50 a 500 |
| Reto diario (una tarea al día, en la tarjeta **Today**) | 50 |
| 7 retos diarios seguidos | 100 |
| Raids en X (citar una publicación del equipo durante el raid) | según cada raid, normalmente 30 |
| Compartir un hito en X (Bronze, Silver, Gold, racha de 7 días, primera graduación, Season 1 OG) | 50 a 100, una vez cada uno |
| Un reporte de estafa confirmado por el equipo | 10 |

## Hora dorada

Una hora al azar cada día (nunca pegada a un quiz) es una **hora dorada**: cada punto que ganes en esa hora cuenta doble
(chat, quiz y operaciones en la curva; los topes diarios siguen aplicando). Agen anuncia cada hora dorada en el canal y en
el grupo, y la tarjeta Today la cuenta regresiva.

## Agen Gift Hour

Cada día de **14:00 a 15:00 UTC**, compra al menos **0,01 BNB** de $AGNT de testnet en agenticstarter.xyz. Tu primera
compra de esa hora le da a tu wallet una **caja de regalo**: aparece en la web y, al abrirla, ves cuántos **$AGNT reales**
hay dentro. Cada caja guarda una cantidad distinta.

- Una caja por wallet al día: cuenta la primera compra de al menos 0,01 BNB dentro de la hora. Si no la abres en el
  momento, te espera en la web.
- Los $AGNT de la Gift Hour se pagan junto con el airdrop, a las wallets que completaron las misiones obligatorias
  (Q1–Q3) y no fueron excluidas por abuso.
- Tu total de la Gift Hour aparece junto a tus puntos en la página del airdrop y en el /points de Agen.
- Después de abrirla, comparte la imagen en X o en el grupo de Telegram.
- Al terminar la hora se sortea una de las cajas del día como **caja de la suerte**: sus $AGNT se duplican (x2). Agen
  lo anuncia en el grupo y avisa al ganador.
- Diez minutos antes de que termine la hora, Agen publica un recordatorio en el grupo y la app avisa a las wallets que
  aún no tienen caja.
- **Meta del grupo:** cuantas más billeteras consigan una caja en un día, más lleva cada caja de ese día: 100 billeteras **+5%**, 250 **+10%**, 500 **+20%**, sumado al terminar la hora. La barra de la franja de Gift Hour muestra cuánto falta para el siguiente nivel, y el mensaje de Gift Hour de Agen en el grupo se actualiza solo al alcanzar cada nivel.

## Agen Morning Box

Cada día de **08:00 a 10:00 UTC**, abre la **app** de Agentic Starter con tu wallet conectada: la Morning Box da de
**20 a 100 puntos del airdrop**, una caja al día. Después de las 10:00 UTC desaparece hasta la mañana siguiente. La
Morning Box solo está en la [app instalada](/guide/install-app), no en la web.

Ábrela días seguidos para ganar un **bonus por racha**: 7 días **+100**, 14 días **+200**, 21 días **+300** y 28 días
**+500** puntos; después, las cuatro semanas empiezan de nuevo. Si te saltas un día, la racha vuelve a empezar desde 1.

Aproximadamente **1 de cada 100** Morning Box es una **caja dorada** con **500 puntos**. Cuando cierra la Morning Box, Agen nombra todas las cajas doradas del día en un solo mensaje del grupo, y las últimas cajas de la suerte y doradas aparecen en la página del airdrop.

**Bienvenido de nuevo:** si no abriste una Morning Box en más de 7 días, tu primera caja tras el descanso vale **x2**. Agen
te saluda por mensaje privado.

En la app, **Menú → Ajustes → Notificaciones** te avisa de la Gift Hour, la Morning Box, el quiz diario (5 minutos antes,
una vez al día) y tus novedades del airdrop (calificas, cuenta un amigo, una racha paga). Como mucho 4 al día y nunca de
noche en tu zona horaria. Las noticias de la preventa siempre llegan.

## Títulos

| Título | Puntos |
| --- | --- |
| Bronze | 1.000 |
| Silver | 5.000 |
| Gold | 10.000 |

Los títulos se muestran en tu perfil, en la clasificación y en tu imagen para compartir.

## Primero en Telegram

Puedes empezar en Telegram antes de conectar una wallet: abre el airdrop desde el menú de Agen y tus puntos de chat y quiz
se guardan en tu cuenta de Telegram. Cuando vincules una wallet más tarde, se pasan a ella.

El bot del airdrop [@agenticstarter_airdrop_bot](https://t.me/agenticstarter_airdrop_bot) muestra tus misiones con marcas,
tus puntos y cómo hacer cada paso, en tu idioma. Los enlaces de invitación también funcionan ahí
(`t.me/agenticstarter_airdrop_bot?start=ref_TUCODIGO`): un amigo que inicia el bot con tu enlace y luego vincula una
wallet cuenta como tu invitación.

En el bot del airdrop también puedes revisar cualquier billetera (envía su dirección), activar un resumen a las 20:00 de tu hora (apagado por defecto) y compartir tu tarjeta de invitación en cualquier chat: escribe `@agenticstarter_airdrop_bot` en la caja de mensaje.

## Cada lunes

Agen publica un mensaje en el grupo cada lunes: el top 10 de la semana con una imagen, los mejores invitadores de la semana (el top 3 gana +500, +300 y +200 puntos; un amigo cuenta si se registró esa semana y ya cuenta), la racha de quiz más larga y el concurso de memes.

**Concurso de memes:** responde al mensaje del lunes con tu meme sobre Agentic Starter. El equipo elige el top 3, que gana +500, +300 y +200 puntos el lunes siguiente (tu Telegram debe estar vinculado a una billetera).

**Meta de la comunidad:** con 5.000, 10.000 y 15.000 billeteras elegibles, el Gift Hour del sábado siguiente paga x2: cada caja trae el doble de $AGNT. La barra de la página del airdrop muestra cuánto falta para la siguiente meta.

## El quiz diario

Tres sesiones al día en el grupo de Telegram, a las **03:00, 14:00 y 19:00 UTC**. Cada sesión tiene tres preguntas de opción múltiple sobre Agentic Starter, de cinco minutos cada una. Responde con los botones A/B/C/D; cuenta tu última respuesta. Las primeras 20 respuestas correctas de cada pregunta suman 5 puntos. Las preguntas y respuestas se quedan en el grupo para aprender. ¿Quieres un aviso cinco minutos antes? Activa las notificaciones del quiz en la app o elige las rondas en `/settings` de Agen.

Una respuesta correcta al día mantiene tu **racha de quiz**: 7, 14, 21 y 28 días seguidos dan +50, +100, +300 y +400 puntos. Si fallas un día, empieza de nuevo. Agen te nombra en los resultados de la ronda y te envía un mensaje privado con una imagen para compartir.

## Cómo funciona la verificación

1. **Wallet.** Conecta y firma un mensaje. Es gratis y no envía ninguna transacción.
2. **X (Q1).** Usa los botones Follow y Quote y pega el enlace de tu post con la cita. La mayoría de los posts se revisan
   automáticamente en segundos; el resto pasa a una revisión rápida del equipo. Un enlace ya usado por otra wallet se
   marca.
3. **Telegram (Q2).** Toca **Abrir Telegram** y luego **Start** en el bot del airdrop. Vincula tu cuenta de Telegram a tu
   wallet y muestra botones para unirte al canal y al grupo; la tarjeta se marca sola. Salir de cualquiera quita los
   puntos.
4. **Chat (Q3).** Agen cuenta tus mensajes. Los de menos de 3 caracteres, repetidos, reenviados y los enviados a menos
   de 5 segundos del anterior no cuentan.
5. **On-chain (Q4–Q6)** se leen automáticamente de BNB Chain. Una preventa comprada con otra wallet cuenta cuando esa
   wallet firma un mensaje gratis para vincularla (tarjeta Q5). Una wallet de preventa se vincula a una wallet del
   airdrop para siempre.

Cada cuenta de X, cuenta de Telegram y wallet de preventa solo puede vincularse a una wallet del airdrop.

## Cómo ganar más puntos

1. **Termina primero Q1–Q3.** Hasta entonces tus puntos no cuentan para el pool.
2. **Q4 Launch & Trade:** lanza un token, haz 5 operaciones de 0.005 BNB o más e intenta que tu token se gradúe (+300).
3. **Cada día:** chatea en el grupo (hasta 50), responde el quiz (hasta 45) y mantén la racha, abre la Morning Box en la
   app y no te pierdas la Gift Hour.
4. **Invita amigos** que participen de verdad: +100 cada uno, +200 al llegar a 5 y +1.000 a 20.
5. **Preventa:** desde 0.05 BNB, hasta 10.000 puntos, más 100 por cada comprador que traigas.

Pregunta a Agen en el grupo («¿cómo gano más puntos?») o toca **Gana lo máximo** en el bot del airdrop: recibes una lista
solo con lo que *tú* aún tienes pendiente, lo más valioso primero. Los puntos de la Temporada 1 se detienen en el
snapshot (al terminar la preventa); los posteriores cuentan para la Temporada 2.

## ¿Estoy listo?

La tarjeta **Ready to claim?** lista cada requisito con lo que aún falta y cómo solucionarlo, además de un rango estimado
de AGNT. El rango depende del pool final y de cuántas wallets califiquen, así que es una guía, no una promesa.

En testnet, las wallets que terminaron Q2 pueden recibir una vez un pequeño aporte de BNB de prueba (0,005 tBNB), mientras
el faucet tenga fondos.

## Consulta cualquier wallet

El cuadro **Check** de la página del airdrop muestra las misiones, puntos por fuente, elegibilidad, posición y $AGNT
estimado de cualquier wallet. El top 100 público está en la misma página.

## Reclamos

1. En el snapshot, los puntos se convierten en $AGNT y se publica un árbol de Merkle.
2. El contrato del airdrop abre la temporada con esa raíz y una fecha límite para reclamar.
3. Las wallets elegibles reclaman en la página del airdrop (solo gas). Lo no reclamado vuelve al pool de la comunidad.

## Juego limpio

Spam, cuentas de farmeo, wash trading y grupos de cuentas múltiples se eliminan antes del snapshot. El equipo revisa las
wallets que comparten una dirección de red o que operan los mismos tokens en los mismos bloques, y decide a mano; nada se
elimina automáticamente. Cada cambio manual de puntos queda registrado con su motivo.

Si tu wallet fue excluida por error, pulsa **Appeal** en la tarjeta Ready y explícalo en unas frases. El equipo responde en
la misma tarjeta.

=== FILE token/staking.md ===
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
[Site integrity](https://agenticstarter.xyz/integrity).

El staking abre con el listado de $AGNT.

| Función | Efecto |
| --- | --- |
| `stake(amount)` | Deposita AGNT (aprueba primero) |
| `unstake(amount)` | Retira AGNT, las recompensas se conservan |
| `claim()` | Retira el BNB acumulado |
| `pendingBnb(address)` | Muestra el BNB acumulado |
| `maturedStake(address)` | AGNT que cuenta para beneficios y votos |
| `hasPerks(address)` | Verdadero por encima del umbral de beneficios |

=== FILE risks.md ===
# Riesgos

- **Riesgo de mercado.** Los tokens lanzados aquí son especulativos y pueden llegar a cero. $AGNT también.
- **Riesgo del agente.** Los agentes actúan automáticamente. Un mal prompt, un bug o una herramienta comprometida pueden
  hacer operaciones que no querías. Fija límites estrictos y revisa cada vista previa.
- **Riesgo de contratos inteligentes.** Las auditorías reducen, pero no eliminan, la posibilidad de bugs.
- **Riesgo de dependencias.** Los registros de Agent ID, las wallets, los RPC y PancakeSwap son servicios de terceros.
- **Tokens imitadores.** Cada token aquí termina en `AAAA`, pero cualquiera puede crear en otro sitio una dirección que
  termine en AAAA. Abre los tokens desde nuestro sitio y revisa los enlaces en la página de [Site integrity](https://agenticstarter.xyz/integrity).
- **La testnet es práctica.** El BNB y los tokens de testnet no tienen valor y nunca se convierten en nada.
- **Riesgo regulatorio.** La venta y el trading de tokens pueden estar restringidos donde vives.

Los admins nunca escriben por privado primero y nunca piden frases semilla, claves privadas ni "verificar tu wallet". Confía
solo en los enlaces publicados por [@agentic_starter](https://x.com/agentic_starter).

=== FILE guide/install-app.md ===
# Instala la app en tu teléfono

Agentic Starter funciona como una app en tu teléfono: pantalla completa, pestañas abajo y a un toque desde la pantalla
de inicio. Es el propio sitio web, así que no hay nada que actualizar ni tienda de apps. Tu wallet sigue pidiendo
confirmación antes de cada firma.

## iPhone y iPad

1. Abre [agenticstarter.xyz](https://agenticstarter.xyz) en **Safari**. Si estás dentro de Telegram, X o una app de
   wallet, abre primero la página en Safari: otros navegadores del iPhone pueden no añadir web apps.
2. Toca **Compartir** (el cuadrado con una flecha) en la barra de Safari. Si no lo ves, toca **⋯** primero.
3. Toca **Añadir a pantalla de inicio** y luego **Añadir**.
4. Abre Agentic Starter desde la pantalla de inicio.

## Android

### Chrome

1. Abre [agenticstarter.xyz](https://agenticstarter.xyz) en **Chrome**. Si el enlace se abrió dentro de Telegram, X o
   una app de wallet, toca **⋮** arriba a la derecha y elige **Abrir en Chrome** primero: desde ahí no se pueden
   instalar apps.
2. Toca **⋮** arriba a la derecha en Chrome.
3. Toca **Instalar app** o **Añadir a pantalla de inicio** y luego **Instalar**.
4. Abre Agentic Starter desde la pantalla de inicio o la lista de apps.

Cuando Chrome muestra un botón **Instalar** en la página o en la barra de direcciones, tocarlo hace lo mismo.

### Samsung Internet

1. Toca **☰** abajo.
2. Toca **Añadir página a** y luego **Pantalla de inicio**.

### Archivo de la app (APK)

¿Prefieres un archivo? [Descarga agentic-starter.apk](https://agenticstarter.xyz/download/agentic-starter.apk) (versión 1.0, 1,7 MB). Abre el mismo sitio a pantalla completa a través de Chrome, y Android pregunta una vez si permites instalar desde tu navegador. Comprueba el archivo antes de instalarlo:

- SHA-256 del archivo: `be55ac38090acbcf8ddcbf732463176306ad6a10365d9402b63fac81cd135479`
- SHA-256 del certificado de firma: `A2:7C:83:5E:EE:EF:C6:39:0B:CC:79:77:53:29:DD:84:7D:E2:6D:47:93:1E:2A:A5:66:D2:86:76:AD:E9:A7:5B`

## Dentro de la app

- **Idioma:** toca tu imagen arriba a la izquierda para abrir el menú y luego **Ajustes → Idioma** para elegirlo de
  la lista.
- **Bloqueo de la app:** **Ajustes → Bloqueo de la app** pide Face ID, huella, el código del dispositivo o tu propia
  contraseña antes de abrir la app. El bloqueo se queda en tu teléfono.
- **Avatar:** toca tu imagen en el menú para elegir una foto o un color. Se queda en tu teléfono; no se sube nada.

## Preguntas

**No veo Instalar app.** Actualiza Chrome desde Play Store y recarga la página. Si la app ya está instalada, el mismo
menú muestra **Abrir app**.

**¿Es seguro?** Es el mismo sitio que agenticstarter.xyz y no puede acceder a las claves de tu wallet: cada
transacción abre tu wallet para que la apruebes. Instala solo desde agenticstarter.xyz. El equipo nunca envía
archivos ni enlaces de la app por mensaje privado.

**¿Cómo la elimino?** Como cualquier app: mantén pulsado el icono y luego **Eliminar** o **Desinstalar**.
