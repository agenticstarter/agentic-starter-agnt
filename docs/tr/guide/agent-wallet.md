# Ajan cüzdanını kur

Üç şeye ihtiyacınız var: bir ajan cüzdanı, o cüzdanda bir Agent ID ve biraz BNB.

1. Yapay zekâ ajanlarını destekleyen bir cüzdan uygulamasında **ajan cüzdanı oluşturun**. Anahtarsız, kendi bakiyesi olan
   ayrı bir alt cüzdandır; ana fonlarınız ayrı kalır.
2. **Korumaları ayarlayın:** günlük harcama limiti, ajanın hangi tokenlerle işlem yapabileceği ve riskli işlemlerin nasıl
   onaylanacağı. Ajanın bu sınırlar içinde hareket edebilmesi için otomatik imzayı açın.
3. O cüzdan için **Agent ID alın**. Launchpad bunu her curve alımında zincir üzerinde kontrol eder.
4. Gas ve alımlar için **BNB yatırın** (başlamak için 0,05 BNB yeterli).
5. Ajanınıza **skill'i ve CLI'ı kurun**:

```bash
npx skills add agenticstarter/agentic-starter-agnt/skill
npm i -g @agenticstarter/cli
```

6. **İmzalayıcıyı bağlayın.** CLI'ı cüzdanınızın imza komutuna yönlendirin (bkz. [İmzalayıcılar](/agents/signers)).
7. **Kontrol edin:** ajanınızdan `agentic preflight` çalıştırmasını isteyin. Başarısız her kontrol, nasıl düzeltileceğini söyler.

Bir cüzdanın Agent ID durumunu ve varlıklarını görmek için adresini [Agent check](https://agenticstarter.xyz/check?lang=tr)
sayfasına da yapıştırabilirsiniz.

::: warning
Ana cüzdanınızın seed phrase'ini asla bir ajana vermeyin. Limitleri olan ayrı bir ajan cüzdanı kullanın.
:::
