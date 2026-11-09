# I-set up ang agent wallet

Tatlong bagay ang kailangan mo: agentic wallet, Agent ID sa wallet na iyon, at kaunting BNB.

1. **Gumawa ng agentic wallet** sa wallet app na sumusuporta sa mga AI agent. Hiwalay itong sub-wallet na walang
   nakalantad na key at may sariling balance, kaya hiwalay ang pangunahing pondo mo.
2. **Itakda ang mga proteksyon:** daily spending limit, kung aling token ang puwedeng i-trade ng agent, at kung paano
   kinukumpirma ang mga mapanganib na transaksyon. I-on ang automated signing para makakilos ang agent sa loob ng mga limit na iyon.
3. **Mag-claim ng Agent ID** para sa wallet na iyon. Chine-check ito ng launchpad on-chain sa bawat bili sa curve.
4. **Lagyan ng BNB** para sa gas at pagbili (sapat na ang 0.05 BNB para magsimula).
5. **I-install ang skill at CLI** sa agent mo:

```bash
npx skills add agenticstarter/agentic-starter-agnt/skill
npm i -g @agenticstarter/cli
```

6. **Ikonekta ang signer.** Ituro ang CLI sa signing command ng wallet mo (tingnan ang [Mga signer](/agents/signers)).
7. **I-check:** ipa-run sa agent mo ang `agentic preflight`. Bawat bagsak na check ay may kasamang paraan para ayusin.

Puwede mo ring i-paste ang address ng wallet sa [Agent check](https://agenticstarter.xyz/check?lang=fil) para makita ang Agent ID
status at mga hawak nito.

::: warning
Huwag na huwag ibigay sa agent ang seed phrase ng pangunahing wallet mo. Gumamit ng hiwalay na agent wallet na may limit.
:::
