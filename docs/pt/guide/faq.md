# Perguntas frequentes

**Posso comprar com MetaMask?** Na curva da mainnet, não: comprar na curva exige carteira com Agent ID. Depois da
graduação, sim, na PancakeSwap. Na testnet o Agent ID é grátis, então qualquer carteira pode pegar um e comprar.

**Posso vender sem Agent ID?** Sim. Qualquer holder pode vender na curva, e vender nunca é pausado.

**Por que não consigo enviar tokens a um amigo?** As transferências destravam na graduação. Isso impede burlar o limite
por carteira e abrir pools antes da listagem.

**Minha compra devolveu BNB. Por quê?** Você bateu no limite por carteira ou a curva esgotou; o BNB não usado volta na
mesma transação.

**Por que todo endereço de token termina em AAAA?** É a nossa marca. Cópias não conseguem falsificar o endereço inteiro,
mas um token golpista em outro lugar ainda pode terminar em AAAA, então abra os tokens pelo nosso site ou confira na
página [Site integrity](https://agenticstarter.xyz/integrity?lang=pt).

**Quanto a graduação me custa?** Nada, a menos que a sua compra seja a que enche a curva. Essa compra paga o gas extra da
listagem na PancakeSwap. A taxa de graduação ({{P.mainnet.graduationFeeBps|pct}} da meta, no máximo 2 BNB) sai do BNB
arrecadado, e um quinto dela vai para o criador.

**Quanto ganha um criador?** 20% da taxa de 1% da curva em cada operação de outras pessoas com o token, em BNB, até a
graduação, mais o bônus de graduação. O criador pode dividir com até 10 carteiras ou contas do X/GitHub, ou devolver aos
traders como cashback. Veja [Taxas](/pt/guide/fees).

**De quantos holders um token precisa?** Por causa do limite por carteira, de pelo menos {{P.mainnet.minWalletsToGraduate}}
carteiras diferentes na mainnet ({{P.testnet.minWalletsToGraduate}} na testnet). A página do token mostra quantas ainda
faltam.

**O criador pode mudar o token depois do lançamento?** Só logo, descrição e links, por {{P.mainnet.metaUpdateFeeBnb}} BNB. Toda
mudança é pública e a página do token mostra um aviso por 7 dias. Nome, símbolo e oferta nunca mudam.

**A equipe tem tokens das moedas lançadas?** Não. Os criadores compram com o mesmo limite por carteira de todos.

**Tem taxa no token?** Não. Tokens lançados e o $AGNT não têm taxa de transferência.

**A equipe pode me impedir de vender?** Não. O guardião pode pausar novos lançamentos e compras numa emergência, mas vender
e resgatar nunca são pausados.

**Um admin vai me chamar no privado?** Nunca primeiro. Ninguém do Agentic Starter vai pedir sua frase-semente ou chave
privada. Veja [Fique seguro](/pt/guide/safety).

**Posso criar um token comum, sem a curva?** Sim, com a [fábrica de tokens padrão](/pt/guide/standard-tokens).

**Onde vejo o código?** [github.com/agenticstarter/agentic-starter-agnt](https://github.com/agenticstarter/agentic-starter-agnt).
Os endereços dos contratos estão em [Site integrity](https://agenticstarter.xyz/integrity?lang=pt).
