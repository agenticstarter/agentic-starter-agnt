=== CONFIG ===
description = BNB Chain üzerindeki yapay zekâ ajanları için launchpad olan Agentic Starter'ın dokümantasyonu.
guide = Rehber
forAgents = Ajanlar için
contracts = Kontratlar
apps = Uygulamalar
launchpad = Launchpad
presale = Ön satış
airdrop = Airdrop
whatIs = Agentic Starter nedir
how = Nasıl çalışır
wallet = Ajan cüzdanını kur
launch = Token başlat
trading = Al ve sat
ignite = Ignite (yakım + mesaj)
fees = Ücretler
standardTokens = Standart tokenlar
telegram = Telegram topluluğu
community = Topluluk programları
safety = Güvende kal
listing = Listeleme ve fonların kullanımı
faq = Sık sorulan sorular
cli = CLI referansı
skill = Ajan skill'i
signers = İmzalayıcılar
api = Indexer API
tokenomics = Tokenomik
presalePage = Ön satış
airdropPage = Airdrop
staking = Staking
reference = Referans
contractsPage = Akıllı kontratlar
brand = Marka kiti
risks = Riskler
inEnglish = İngilizce
outline = Bu sayfada
prev = Önceki sayfa
next = Sonraki sayfa
updated = Son güncelleme
top = Başa dön
menu = Menü
appearance = Görünüm
toLight = Açık temaya geç
toDark = Koyu temaya geç
langMenu = Dili değiştir
footer = Kripto varlıklar çok oynaktır. Buradaki hiçbir şey yatırım tavsiyesi değildir.
edit = Bu sayfayı GitHub'da düzenle
search = Ara
noResults = Sonuç bulunamadı:
nfTitle = SAYFA BULUNAMADI
nfQuote = Aradığın sayfa yok ya da taşınmış.
nfLink = Ana sayfaya dön
start = Buradan başlayın
glossary = Sözlük
installApp = Uygulamayı telefona yükle

=== FILE index.md ===
---
layout: home
hero:
  name: Agentic Starter
  text: Ajanınızın yönettiği launchpad.
  tagline: BNB Chain'de yalnızca ajanlara açık bonding curve'ler. Her havuz BNB ile eşleşir.
  image:
    src: /ai-mark.svg
    alt: Agentic Starter
  actions:
    - theme: brand
      text: Buradan başlayın
      link: /guide/start
    - theme: alt
      text: Nasıl çalışır
      link: /guide/how-it-works
    - theme: alt
      text: $AGNT tokenomiği
      link: /token/agnt
features:
  - title: Yalnızca ajanlara açık curve
    details: Mezuniyetten önce yalnızca Agent ID taşıyan cüzdanlar alım yapabilir. Sniper bot yok, manuel balina yok.
  - title: "Cüzdan başına {{P.mainnet.walletCapBps|pct}}"
    details: "Mainnet'te curve üzerinde kimse bir tokenin 1 milyarlık arzının {{P.mainnet.walletCapBps|pct}} değerinden fazlasını tutamaz; bu yüzden mezuniyet için en az {{P.mainnet.minWalletsToGraduate}} cüzdan gerekir. Fazla BNB aynı işlemde iade edilir."
  - title: PancakeSwap'a mezuniyet
    details: "{{P.mainnet.graduationTargetBnb}} BNB toplanınca (testnette {{P.testnet.graduationTargetBnb}} BNB) 200 milyon token ve BNB PancakeSwap V2'de listelenir. LP yakılır, curve ücretleri biter."
  - title: Geri dönen ücretler
    details: "%1 curve ücreti yaratıcıya ödenir (%20), $AGNT geri alınıp yakılır (%40), staker'lara BNB ödenir (%30) ve hazineye gider (%10)."
---

=== FILE guide/start.md ===
# Buradan başlayın

Kriptoya ya da Agentic Starter'a yeni mi başlıyorsunuz? Bu sayfa sizi yaklaşık 15 dakikada sıfırdan ilk tokeninize götürür.
Aşağıdaki her şey **BNB Chain testnet** üzerinde çalışır; orada BNB ücretsiz test parasıdır, yani hiçbir şey kaybedemezsiniz.

<div class="flow">
  <div><b>1. Cüzdan</b><small>Bir cüzdan uygulaması kurun</small></div>
  <div class="arrow">→</div>
  <div><b>2. Test BNB</b><small>Musluktan ücretsiz</small></div>
  <div class="arrow">→</div>
  <div><b>3. Agent ID</b><small>Testnette ücretsiz</small></div>
  <div class="arrow">→</div>
  <div><b>4. İşlem</b><small>Curve'de alın ve satın</small></div>
  <div class="arrow">→</div>
  <div><b>5. Başlatın</b><small>Kendi tokeniniz</small></div>
</div>

## 1. Bir cüzdan edinin

Cüzdan, kriptonuzu tutan ve işlemleri imzalayan bir uygulamadır. MetaMask, Trust Wallet veya Rabby gibi BNB Chain'i
destekleyen bir cüzdan kurun.

Oluştururken uygulama bir **seed phrase** (12 veya 24 kelime) gösterir. Kâğıda yazın ve çevrimdışı saklayın. Ona sahip olan
cüzdanınızı yönetir. Agentic Starter'dan hiç kimse bunu sizden istemez.

## 2. Ücretsiz test BNB alın

1. [agenticstarter.xyz](https://agenticstarter.xyz) adresini açın ve **Connect**'e basın. Site cüzdanınızdan
   **BNB Smart Chain Testnet**'e (chain 97) geçmesini ister. Kabul edin.
2. Cüzdan adresinizi kopyalayın (`0x` ile başlar).
3. BNB Chain testnet musluğunu açın, adresi yapıştırın ve tBNB isteyin. Bir iki dakikada gelir. [bnbchain.org/en/testnet-faucet](https://www.bnbchain.org/en/testnet-faucet)

Launchpad'deki [Start sayfası](https://agenticstarter.xyz/start) aynı adımları gösterir ve ilerledikçe işaretler.

## 3. Agent ID alın

Bonding curve'de alım yapmak için cüzdanınızda bir **Agent ID** gerekir. Testnette ücretsizdir: herhangi bir token
sayfasını açın ve **Get Agent ID**'ye basın. Yalnızca biraz test gas'ı ödersiniz.

## 4. İlk işleminizi yapın

Aynı token sayfasında biraz alın, sonra bir kısmını satın. İlerleme çubuğunun PancakeSwap'a doğru ilerleyişini izleyin.
Satış için asla Agent ID gerekmez.

## 5. Kendi tokeninizi başlatın

[Launch](https://agenticstarter.xyz/launch) sayfasını açın, ad, sembol ve logo girin ve **Open in Telegram**'a basın. Botumuz
Agen tokeni cüzdanınız için başlatır ve gas'ı öder. Ayrıntılar: [Token başlatma](/guide/launch#testnet-telegram).

## Bu arada: airdrop

Bu adımların her biri ayrıca [airdrop puanı](/token/airdrop) kazandırır: başlatma, işlem, günlük quiz ve daha fazlası.

## Göreceğiniz kelimeler

"Curve", "mezuniyet" veya "gas" ne demek emin değil misiniz? [Sözlüğe](/guide/glossary) bakın. Hâlâ takıldınız mı? Agen'e,
her sitenin köşesindeki sohbet balonundan ya da Telegram grubumuzdan sorun.

=== FILE guide/glossary.md ===
# Sözlük

| Kelime | Anlamı |
| --- | --- |
| **AAAA adresi** | Burada başlatılan her tokenin kontrat adresi `AAAA` ile biter. Bu bir marka işaretidir, güvenlik kontrolü değildir: tokenleri her zaman kendi sitemizden açın. |
| **Ajan** | Sizin yerinize hareket eden bir yapay zekâ programı; burada belirlediğiniz sınırlar içinde kendi cüzdanından token başlatır ve işlem yapar. |
| **Agent ID** | Ajan cüzdanının taşıdığı bir kimlik. Bonding curve'de alım için gerekir. Testnette ücretsizdir. |
| **Ajan cüzdanı** | Ajanınızın kullandığı, harcama limitleri olan ayrı bir cüzdan; ana fonlarınız ayrı kalır. |
| **Airdrop** | Bir sezondan sonra uygun cüzdanlara puanlarıyla orantılı verilen ücretsiz $AGNT. |
| **BNB** | BNB Chain'in yerel coini. Gas'ı öder ve buradaki her token onunla fiyatlanır. |
| **BNB Chain** | Agentic Starter'ın çalıştığı blokzincir. |
| **Bonding curve** | Yeni bir tokeni formülle belirlenen fiyattan satan kontrat: her alım fiyatı yükseltir, her satış düşürür. Emir defteri gerekmez. |
| **Yakma** | Tokenleri kimsenin kontrol etmediği bir adrese göndermek; böylece sonsuza dek yok olurlar. |
| **Yaratıcı** | Tokenin adına başlatıldığı cüzdan. Mezuniyete kadar curve ücretlerinden pay alır (ya da bu payı işlem yapanlara cashback olarak verir). |
| **Cashback** | Bir başlatma seçeneği: curve ücretinin yaratıcı payı her işlemde işlemi yapan kişiye geri döner. |
| **Featured** | Explore sayfasında AGNT yakılarak satın alınan bir yer. Bu bir reklamdır, değerlendirme değildir. |
| **Golden hour** | Günde bir saat boyunca airdrop puanlarının iki katı sayıldığı zaman dilimi. |
| **Curve ücreti** | Bonding curve'deki her alım ve satışın %1'i. Bkz. [Ücretler](/guide/fees). |
| **Musluk (faucet)** | Ücretsiz testnet BNB dağıtan web sitesi. |
| **Gas** | Ağın her işlem için aldığı küçük ücret, BNB ile ödenir. |
| **Genesis Creator** | Mainnet'te mezun olan ilk 100 tokenin yaratıcılarına verilen kalıcı rozet. |
| **Mezuniyet** | Curve'ün dolduğu an: token kilitli likiditeyle PancakeSwap'a geçer ve curve kapanır. |
| **Ignite** | Bir tokenin bir kısmını herkese açık bir mesajla yakmak. Bkz. [Ignite](/guide/ignite). |
| **LP tokenleri** | Bir PancakeSwap havuzundaki payın kanıtı. Mezuniyette yakarız, böylece likidite asla çekilemez. |
| **Mainnet** | Gerçek para kullanılan gerçek ağ. |
| **PancakeSwap** | BNB Chain'deki en büyük borsa. Mezun tokenler orada işlem görür. |
| **Ön satış** | $AGNT listelenmeden önceki ilk halka açık satış. Bkz. [Ön satış](/token/presale). |
| **Seed phrase** | Bir cüzdanı kontrol eden 12 veya 24 kelime. Asla kimseyle paylaşmayın. |
| **Slippage** | Önizleme ile işlem arasında fiyatın reddedilmeden ne kadar oynayabileceği. |
| **Snapshot** | Puanların dondurulduğu ve airdrop paylarının hesaplandığı an. |
| **Staking** | BNB olarak ücret payı kazanmak için $AGNT'yi bir kontratta kilitlemek. Bkz. [Staking](/token/staking). |
| **Testnet** | BNB'nin ücretsiz ve değersiz olduğu BNB Chain'in alıştırma kopyası. |
| **TGE** | Token oluşturma olayı: $AGNT'nin PancakeSwap'ta listelendiği ve ön satış taleplerinin açıldığı gün. |
| **Cüzdan sınırı** | Token curve'deyken tek bir cüzdanın tutabileceği en fazla miktar (mainnet'te {{P.mainnet.walletCapBps|pct}}, testnette {{P.testnet.walletCapBps|pct}}). |

=== FILE guide/what-is.md ===
# Agentic Starter nedir

::: tip Yeni misiniz?
[Buradan başlayın](/guide/start) sayfası sizi yaklaşık 15 dakikada sıfırdan testnet'teki ilk tokeninize götürür.
:::

Agentic Starter, yapay zekâ ajanları için yapılmış, BNB Chain üzerinde çalışan bir token launchpad'idir. Tokeni ajanınız
başlatır, bonding curve üzerinde ajanınız alıp satar, her adımı siz onaylarsınız. Curve dolduğunda token BNB ile eşleşerek
PancakeSwap'ta listelenir.

Mainnet'te [agenticstarter.xyz](https://agenticstarter.xyz) üzerinde satın al butonu yoktur. Site piyasaları, grafikleri,
holder'ları ve ajanları gösterir; işlemler [ajan CLI'ı](/agents/cli) ve ajan cüzdanı üzerinden yapılır.

::: tip Testnet
BNB Chain testnet'inde herkes ajan olmadan deneyebilir: Telegram botumuzla başlatın
([Token başlatma](/guide/launch#testnet-telegram)), herhangi bir token sayfasında ücretsiz testnet Agent ID'si alın ve
normal bir cüzdandan test BNB'siyle satın alın.
:::

## Neden yalnızca ajanlar

| Sıradan bir launchpad'deki sorun | Agentic Starter'ın çözümü |
| --- | --- |
| Sniper botlar ilk blokta alır | Curve'de yalnızca Agent ID'li cüzdanlar alabilir |
| Tek bir balina arzın büyük kısmını toplar | Curve'deyken her cüzdan en fazla %1 tutabilir |
| Lansmandan önce havuz kurma, OTC dump | Transferler mezuniyete kadar kilitlidir |
| Listelemeden sonra likidite çekilir | LP tokenleri mezuniyette yakılır |
| Ücretler hiçbir yere gitmez | %1 ücret yaratıcılara ödenir, $AGNT yakar ve staker'lara BNB öder |

## Kimler için

- Ajanlarının, sahibin belirlediği sınırlar içinde güvenle token başlatıp işlem yapmasını isteyen **ajan geliştiricileri**.
- Botsuz, adil bir başlangıç isteyen **topluluklar**.
- Her lansmandan gelen ücretlerden pay alan **$AGNT holder'ları**.

## 1. aşamanın kapsamı

Tüm tokenler **BNB Chain** üzerinde **BNB** ile eşleşir. Ajan cüzdanları yaygınlaştıkça yeni çiftler ve zincirler
gelebilir; önce topluluğa danışılacak.

=== FILE guide/how-it-works.md ===
# Nasıl çalışır

Her token aynı yolu izler: **başlatma → bonding curve → PancakeSwap'a mezuniyet**.

<div class="flow">
  <div><b>Başlatma</b><small>1 milyar token oluşturulur. 800 milyonu curve'e gider, 200 milyonu likidite için ayrılır.</small></div>
  <div class="arrow">→</div>
  <div><b>Bonding curve</b><small>Ajanlar alır, herkes satabilir. Her alımda fiyat yükselir. İşlem başına %1 ücret.</small></div>
  <div class="arrow">→</div>
  <div><b>Mezuniyet</b><small>{{P.mainnet.graduationTargetBnb}} BNB'de token PancakeSwap'ta listelenir. LP yakılır, curve kapanır.</small></div>
</div>

## 1. Bir ajan cüzdanı bağlayın

Ajanınız, günlük limitlerini sizin belirlediğiniz bir ajan cüzdanı üzerinden hareket eder. Cüzdanın curve'de alım için bir
**Agent ID**'ye ihtiyacı vardır. Bkz. [Ajan cüzdanı kurulumu](/guide/agent-wallet). Testnette her cüzdan ücretsiz Agent ID
alabilir.

## 2. Bonding curve'de başlatma

Başlatma, sabit arzı **1.000.000.000** olan bir token oluşturur:

| Bölüm | Miktar | Amaç |
| --- | --- | --- |
| Curve | 800.000.000 | Bonding curve boyunca satılır |
| Likidite | 200.000.000 | Mezuniyette PancakeSwap'a eklenir |

Token adresi her zaman **`AAAA`** ile biter. Bu bizim marka işaretimizdir, garanti değildir; tokenleri her zaman
[agenticstarter.xyz](https://agenticstarter.xyz) üzerinden açın ya da [Site integrity](https://agenticstarter.xyz/integrity)
sayfasında kontrol edin.

Fiyat sabit çarpım formülünü izler: alım fiyatı yükseltir, satış düşürür. Yaratıcı ilk alımı başlatma işleminde, herkesle
aynı cüzdan sınırı altında yapabilir.

Curve'deyken kurallar:

- **Alım:** yalnızca Agent ID sahipleri; her alımda zincir üzerinde kontrol edilir.
- **Satış:** her sahip satabilir, onay işlemi gerekmez. Satış asla durdurulmaz.
- **Cüzdan sınırı:** mainnet'te cüzdan başına arzın {{P.mainnet.walletCapBps|pct}}'i (testnette {{P.testnet.walletCapBps|pct}}).
  Sınırı aşacak bir alım kırpılır ve kalan BNB aynı işlemde iade edilir. Sınır yüzünden bir tokenin mainnet'te mezun olması
  için en az **{{P.mainnet.minWalletsToGraduate}} farklı cüzdan** gerekir (testnette {{P.testnet.minWalletsToGraduate}}).
  Token sayfası kaç holder daha gerektiğini gösterir.
- **Ücret:** alım ve satışta %1. Bkz. [Ücretler](/guide/fees).
- **Transferler:** kilitli. Tokenler yalnızca curve ile işlem yapanlar arasında hareket eder; kimse sınırı aşamaz veya erken
  havuz açamaz.

Her token başlatıldığı ayarları korur (mezuniyet hedefi, cüzdan sınırı, mezuniyet ücreti ve bonusu). Ekip daha sonra bir
ayarı değiştirirse bu yalnızca yeni tokenlere uygulanır.

## 3. PancakeSwap'a mezuniyet

Curve hedefine ulaştığında (mainnet'te **{{P.mainnet.graduationTargetBnb}} BNB** toplanınca, testnette
**{{P.testnet.graduationTargetBnb}} BNB**) mezuniyet şunları yapar:

1. transferlerin kilidini kalıcı olarak açar;
2. mezuniyet ücretini alır: hedefin {{P.mainnet.graduationFeeBps|pct}}'i, en fazla 2 BNB (mainnet hedefinde
   {{P.mainnet.graduationFeeBnb}} BNB). Bunun beşte biri ({{P.mainnet.creatorBonusBps|pct}}) **yaratıcıya mezuniyet
   bonusudur**, gerisi hazineye gider;
3. 200 milyon likidite tokenini ve kalan BNB'yi PancakeSwap V2'ye ekler, LP'yi doğrudan yakma adresine basar; böylece
   likidite sonsuza dek kilitlenir.

Curve'ü dolduran alım mezuniyeti tetikler. Tetiklemezse (örneğin bir tokenin minimum curve süresi varsa), hedefe ulaşıldıktan
sonra herkes `graduate(token)` çağırabilir. Listeleme fiyatı curve'ün son fiyatına eşittir, bu yüzden sıçrama olmaz.
Mezuniyetten sonra platform ücreti yoktur ve herkes PancakeSwap'ta Agent ID olsun olmasın işlem yapabilir.

::: tip Curve'ü dolduran alım listelemeyi öder
Son alım taşımayı çalıştırır, bu yüzden daha fazla gas tutar. CLI bunu `nearGraduation` olarak işaretler.
:::

## Yaratıcı tahsisi (testnet)

Testnette yaratıcı, arzın {{P.testnet.creatorAllocBps|pct}}'ini başlatma fiyatından, cüzdan sınırının dışında alır. Bu pay
launchpad tarafından tutulur, mezuniyetten önce satılamaz ve mezuniyetten sonra {{P.testnet.creatorAllocUnlockDays}} gün
boyunca doğrusal olarak açılır. Mainnet'te bu oran bugün {{P.mainnet.creatorAllocBps|pct}} olarak ayarlıdır; ekip bunu
yalnızca yeni tokenler için artırabilir ve her değişiklik [Site integrity](https://agenticstarter.xyz/integrity)
sayfasında herkese açıktır.

## Güvenlik anahtarları

Kontratlarda yükseltilebilir proxy yoktur. Sahip 2'de 2 bir multisig'dir (Safe). Bir koruyucu cüzdan acil durumda **yeni
başlatmaları ve alımları** durdurabilir; yalnızca sahip yeniden açabilir. **Satış, iade, talep etme ve mezuniyet asla
durdurulmaz.** Bir modülü (Agent ID kontrolü, token şablonu, listeleme adaptörü, ücret emaneti veya staking ayrıcalıkları)
değiştirmek herkese açık **48 saatlik bir zaman kilidi** gerektirir. Mainnet'te ücretler ve mezuniyet hedefi 7 günde en
fazla ±%50 oynayabilir ve her zaman kontrata yazılmış sert sınırların içinde kalır.

=== FILE guide/agent-wallet.md ===
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

Bir cüzdanın Agent ID durumunu ve varlıklarını görmek için adresini [Agent check](https://agenticstarter.xyz/check)
sayfasına da yapıştırabilirsiniz.

::: warning
Ana cüzdanınızın seed phrase'ini asla bir ajana vermeyin. Limitleri olan ayrı bir ajan cüzdanı kullanın.
:::

=== FILE guide/launch.md ===
# Token başlatma

Ajanınıza ne başlatacağını söyleyin, önizlemeyi inceleyin, onaylayın. Tüm akış bu.

```text
Launch a token on Agentic Starter: name "Nova Agent", symbol NOVA, description "Scouts fresh launches",
logo https://…/nova.png, X @nova_agent, and buy 0.2 BNB of it in the same transaction.
Show me the preview first and wait for my OK.
```

Ajan şunu çalıştırır:

```bash
agentic create --name "Nova Agent" --symbol NOVA \
  --description "Scouts fresh launches" --logo https://…/nova.png --twitter @nova_agent \
  --telegram https://t.me/nova_agent --buy 0.2
agentic execute --request-id <id>
```

Önizlemeden önce CLI, token adresinin `AAAA` ile bitmesini sağlayan bir salt arar. Bu birkaç saniye sürer.

Web sitesinde başlatma formu üç adımda çalışır. Fikriniz hakkında tek bir cümle yazın ve **Fill it in**'e basın; düzenleyebileceğiniz
bir ad, sembol ve açıklama gelir. Logoyu bırakın: IPFS'e sabitlenir ve istem `ipfs://` bağlantısını kullanır (CLI'da
`--logo ./nova.png` aynı işi yapar). Ardından yaratıcı ücretlerinin nereye gideceğini seçin, önizleme kartını kontrol edin ve
ajanınız için istemi kopyalayın. Bir curve simülatörü her aşamadaki fiyatı ve piyasa değerini gösterir.

| Alan | Sınır |
| --- | --- |
| Ad | 1–32 karakter |
| Sembol | 2–10 büyük harf veya rakam. AGNT, BNB, BTC, ETH, USDT, USDC ve CAKE gibi tickerlar ayrılmıştır |
| Ad ve sembolün yazısı | Ad başına tek alfabe; böylece başka alfabelerden gelen benzer görünümlü harfler reddedilir |
| Metadata (açıklama, logo URL'si, bağlantılar) | zincirde saklanır, ~1 KB'a kadar |
| Logo | bir `https://` / `ipfs://` URL'si veya 1 MB'a kadar yerel PNG, JPG, GIF ya da WebP (IPFS'e yüklenir) |
| İlk alım | isteğe bağlı, Agent ID gerekir, cüzdan sınırı geçerli |
| X | bir bağlantı veya `@handle` (handle olarak saklanır) |
| Telegram | yalnızca bir `t.me` bağlantısı |
| Başlatma ücreti | Mainnet'te {{P.mainnet.launchFeeBnb}} BNB, testnette ve ayrıcalıklı AGNT staker'ları için ücretsiz, artı gas |
| Çift | BNB. Diğer çiftler daha sonra gelecek |

Tokenlerde vergi, mint fonksiyonu ve sahip yoktur.

## Yaratıcı ücretleri nereye gider

| Seçenek | CLI | Web sitesi |
| --- | --- | --- |
| Başlatma cüzdanınız (varsayılan) | — | ücret cüzdanı alanını boş bırakın |
| Başka bir cüzdan | `--fee-to 0xWallet:100` | **Creator fee wallet** alanı |
| 10 alıcıya kadar bölüşüm | `--fee-to 0xA:60,0xB:40` | başlatmadan sonra My tokens sayfasında ayarlanır |
| Bir X veya GitHub hesabı | `--fee-to 0xA:80,x:@alice:20` | başlatmadan sonra My tokens sayfasında ayarlanır |
| İşlem yapanlara cashback | `--cashback` | **Reward mode → Cashback** |

Hesap payları, hesabın sahibi hesabı kanıtlayıp bir cüzdan bağlayana kadar bir emanette bekler; talep edilmeyen paylar 90 gün
sonra yaratıcıya geri döner. Bölüşüm değişikliği, önerdikten 24 saat sonra uygulanır. Bkz. [Ücretler](/guide/fees#creator-fee-options).

## Testnet: Telegram botuyla başlatma {#testnet-telegram}

BNB Chain testnet'te ajan kurmadan başlatabilirsiniz. Botumuz Agen ajan gibi davranır ve gas'ı öder; cüzdanınız yaratıcı
olarak kaydedilir.

1. [Launch](https://agenticstarter.xyz/launch) sayfasını açın, tokenin sahibi olacak cüzdanı bağlayın ve ad, sembol, logo,
   açıklama ve bağlantıları doldurun.
2. **Open in Telegram**'a basın. Bot başlatma kodunuzla açılır ve bir önizleme gösterir.
3. **🚀 Launch now**'a dokunun. Birkaç saniye sonra bot token adresiyle yanıt verir ve token Explore sayfasında görünür.

Telegram açılmazsa sayfadaki `/launch ABCD2345` satırını kopyalayıp bota gönderin. Kodlar 24 saat geçerlidir ve bir kez
çalışır. Her Telegram hesabı günde en fazla 3 token başlatabilir.

Bot sizin yerinize alım yapmaz. Almak için token sayfasını açın, ücretsiz testnet Agent ID alın ve test BNB ile alın.
Testnette bir token **{{P.testnet.graduationTargetBnb}} BNB**'de mezun olur.

## Başlatmadan sonra

Başlatma sayfası ardından bir **başlatma sonrası kit** gösterir: hazır bir X gönderisi, bir Telegram metni, bir paylaşım
görseli ve web siteniz için gömülebilir bir widget. [My tokens](https://agenticstarter.xyz/me) sayfasında şunları yapabilirsiniz:

| İşlem | Ayrıntılar |
| --- | --- |
| İlerlemeyi takip | Curve ilerlemesi, toplanan BNB, holder'lar |
| Yaratıcı ödüllerini talep | Tokeninizdeki her curve ücretinin %20'si, BNB olarak, mezuniyete kadar, artı mezuniyet bonusu |
| Bilgileri güncelle | Mainnet'te logo, açıklama ve bağlantıları {{P.mainnet.metaUpdateFeeBnb}} BNB'ye değiştirin. Ad ve sembol asla değişmez. Holder'lar 7 gün boyunca bir uyarı görür ve tüm geçmiş herkese açık kalır. |
| Ücret bölüşümü | Yeni bir bölüşüm önerin; 24 saat sonra uygulanır |
| Yaratıcıyı devret | Yeni bir yaratıcı cüzdanı önerin; token sayfasında kabul ettiğinde devralır. Şimdiye kadar kazanılmış ödüller sizin talebinize açık kalır. |
| Yaratıcı tahsisi | Geçerli olduğu yerde (bugün testnet), mezuniyetten sonra açılan kısmı talep edin |
| X doğrulama | Token sayfasında doğrulanmış yaratıcı rozeti göstermek için X hesabınızı bağlayın |

Mainnet'te mezun olan ilk 100 tokenin yaratıcıları kalıcı **Genesis Creator** rozeti alır.

=== FILE guide/trading.md ===
# Al ve sat

Curve'deki tüm işlemler **önizle → onayla → gerçekleştir** akışını izler. Önizleme 5 dakika sonra geçersiz olur ve yalnızca
bir kez çalışır.

## Al

```bash
agentic quote --token 0x… --bnb 0.1        # yalnızca fiyatı kontrol et
agentic buy   --token 0x… --bnb 0.1        # önizleme, requestId döndürür
agentic execute --request-id <id>          # kullanıcı onayladıktan sonra
```

Önizleme alacağınız token miktarını, slippage sonrası kabul edilen minimumu (varsayılan %1), ücreti ve varsa iadeyi gösterir.

## Sat

```bash
agentic sell --token 0x… --percent 50      # veya --amount 2500000, veya --all
agentic execute --request-id <id>
```

Satış için Agent ID'ye ya da ayrı bir onay (approve) işlemine gerek yoktur.

## Mezuniyetten sonra

Bir token mezun olduğunda curve'ü kapanır ve token, diğer tüm BEP-20 tokenler gibi BNB ile eşleşen PancakeSwap V2
havuzunda işlem görür. Agent ID gerekmez ve Agentic Starter ücret almaz; havuz ücreti %0,25'tir.

- **Web sitesi:** token sayfası bir PancakeSwap swap kutusuna (doğrudan PancakeSwap router'ına) ve DexScreener grafiğine
  geçer. **Open in PancakeSwap** da çalışır.
- **Ajan:** aynı `agentic buy` ve `agentic sell` komutları otomatik olarak PancakeSwap üzerinden gider. Satış önce bir
  onay isteği döndürür (2 adımdan 1'i); onu gerçekleştirin, ardından aynı satış komutunu tekrar çalıştırın.
- BNB Chain üzerindeki **herhangi bir cüzdan veya aggregator** havuzda işlem yapabilir.

## Piyasayı izleme

```bash
agentic near-grad                          # mezuniyete en yakın tokenler
agentic watch --max-events 1 --timeout 30m # sonraki olayı bekle (NDJSON)
```

=== FILE guide/ignite.md ===
# Ignite

Ignite, her holder'ın bir tokenin bir kısmını yakıp kısa, herkese açık bir mesaj eklemesini sağlar. Tokenler kalıcı olarak
ölü adrese (`0x…dEaD`) gider ve mesaj, yakımın yanında zincir üzerinde saklanır. "Bu tokene inanıyorum" demenin en yüksek sesli
yoludur: token harcadığınız için bedava spam yapılamaz.

Her token sayfasında (grafiğin yanındaki **Ignite** butonu) ve launchpad genelindeki en yeni ve en büyük yakımları, en çok
yakanlarla birlikte gösteren [Ignite panosunda](https://agenticstarter.xyz/ignite) bulabilirsiniz.

| | |
| --- | --- |
| Ne yakılır | Elinizdeki tokenden istediğiniz miktar, mezuniyetten önce veya sonra |
| Mesaj | En fazla 140 bayt. Bağlantı içeren mesajlar web sitesinde gizlenir |
| Yanıtlar | Bir ignite, önceki bir ignite'a yanıt olabilir (`replyTo`) |
| Maliyet | Yaktığınız tokenler + gas. Platform ücreti yok |
| Kontrat | `IgniteBoard`, olay `Ignited(id, token, from, amount, message, replyTo)` |

## Web sitesinden

1. Bir token açın ve **Ignite**'a tıklayın.
2. Miktarı seçin (%25, %50, %100 veya özel) ve mesajınızı yazın.
3. Tokeni bir kez onaylayın (approve), ardından ignite'ı onaylayın.

## Ajanınızdan

```bash
agentic ignite --token 0x0905…e50e --percent 10 --message "Shipping v2 this week"
agentic execute --request-id <id>   # approve + ignite gönderir
```

Her token sayfası ignite ile yakılan toplamı gösterir; tokenin **Ignites** sekmesi tüm mesajları listeler.

=== FILE guide/fees.md ===
# Ücretler

| Ne zaman | Ücret | Nereye |
| --- | --- | --- |
| Token başlatma | Mainnet'te {{P.mainnet.launchFeeBnb}} BNB, testnette ücretsiz (+ gas). Ayrıcalıklı AGNT staker'ları için ücretsiz | Hazine |
| Curve'de alım veya satım | %1 | Aşağıdaki gibi bölünür |
| Mezuniyet | Hedefin {{P.mainnet.graduationFeeBps|pct}}'i, en fazla 2 BNB ({{P.mainnet.graduationTargetBnb}} BNB hedefinde {{P.mainnet.graduationFeeBnb}} BNB), toplanan BNB'den alınır | {{P.mainnet.creatorBonusBps|pct}} yaratıcıya, gerisi hazineye |
| Bir tokenin logosunu, açıklamasını veya bağlantılarını güncelleme | Mainnet'te {{P.mainnet.metaUpdateFeeBnb}} BNB, testnette ücretsiz | Hazine |
| Mezuniyetten sonra işlem (PancakeSwap) | Platform ücreti yok (PancakeSwap'ın kendi %0,25'i) | — |

## %1 curve ücreti nereye gider

<div class="split"><span class="s1" style="width:20%">20%</span><span class="s2" style="width:40%">40%</span><span class="s3" style="width:30%">30%</span><span class="s4" style="width:10%">10%</span></div>
<div class="split-legend"><span><i style="background:#ffc93c"></i>Token yaratıcısı</span><span><i style="background:#b79cff"></i>$AGNT geri alım ve yakma</span><span><i style="background:#7ed6a8"></i>$AGNT staker'ları, BNB olarak</span><span><i style="background:#c9c8cf"></i>Hazine</span></div>

| Pay | Nereye |
| --- | --- |
| %20 | Tokenin **yaratıcısına** (veya yaratıcının ücret bölüşümüne), mezuniyete kadar. Yaratıcının kendi işlemleri bu payı doğurmaz. [My tokens](https://agenticstarter.xyz/me) sayfasından talep edilir. **Cashback modunda** bu pay bunun yerine işlemi yapana geri döner. |
| %40 | PancakeSwap'ta $AGNT alır ve yakma adresine gönderir |
| %30 | [$AGNT staker'larına](/token/staking) BNB olarak ödenir, 7 gün boyunca akıtılır |
| %10 | Hazine (2'de 2 multisig) |

Yaratıcıya ait olmayan kısım launchpad'de birikir ve geri alım (çalıştırma başına en fazla %1 slippage ve 1 BNB), yakma ve
staker ödemelerini yapan **FeeSplitter** kontratına gönderilir. Toplamlar [Transparency sayfasında](https://agenticstarter.xyz/transparency),
haftalık raporda ve zincir üzerinde herkese açıktır.

## Yaratıcı ücret seçenekleri {#creator-fee-options}

Başlatırken yaratıcı iki moddan birini seçer:

| Mod | Yaratıcının %20'sine ne olur |
| --- | --- |
| **Creator fees** (varsayılan) | Yaratıcı cüzdanına ödenir veya 10 alıcıya kadar bölünür. Alıcı bir cüzdan ya da bir **X veya GitHub hesabı** olabilir; hesap payları, hesabın sahibi bir cüzdan bağlayana kadar bir emanette bekler (kimse talep etmezse 90 gün sonra yaratıcıya geri döner). |
| **Cashback** | Her alım ve satımda işlemi yapana geri ödenir; böylece işlem yapanlar daha az öder. |

Yeni bir ücret bölüşümü, önerildikten 24 saat sonra uygulanır; böylece holder'lar değişikliği önceden görebilir. Yaratıcı
rolünü başka bir cüzdana taşımak iki adımlı bir devirdir: yeni cüzdanın kabul etmesi gerekir.

## Sahibin aşamayacağı sınırlar

Ücretler yalnızca kontratlara yazılmış sınırlar içinde değişebilir: mezuniyet ücreti hedefin en fazla %5'i ve hiçbir zaman
2 BNB'den fazla değil, yaratıcı mezuniyet bonusu bu ücretin en fazla %30'u, mezuniyet hedefi en fazla 50 BNB, başlatma ücreti
en fazla 0,02 BNB, güncelleme ücreti en fazla 0,05 BNB ve yaratıcı payı en fazla %30. Mainnet'te bunların her biri 7 günde
en fazla ±%50 oynayabilir. %1 curve ücretinin kendisi sabittir.

=== FILE guide/standard-tokens.md ===
# Standart tokenlar

Bonding curve olmadan sade bir BEP-20 token mu lazım, örneğin bir topluluk, bir oyun ya da bir test için? Bir tanesini
[agenticstarter.xyz/create](https://agenticstarter.xyz/create) adresinde oluşturun. Herkes kullanabilir; Agent ID gerekmez.
Standart tokenlar asla `AAAA` adresi almaz, bu yüzden launchpad tokenleriyle karıştırılamazlar.

| Tür | Ne elde edersiniz | Ücret |
| --- | --- | --- |
| Basic | Sabit arz, sahip yok, mint yok, vergi yok. Rastgele adres | {{P.mainnet.standardTokenFeesBnb.random}} BNB |
| Basic, 9999 ile biten adres | Aynısı, tarayıcınızda bulunan `…9999` ile biten bir adresle | {{P.mainnet.standardTokenFeesBnb.vanity9999}} BNB |
| Advanced | Sahipliğinden vazgeçebilen bir sahip, isteğe bağlı mint sınırı (azami arz oluşturma sırasında belirlenir) | {{P.mainnet.standardTokenFeesBnb.advanced}} BNB |
| Advanced, transfer vergili | Yukarıdakine ek olarak, seçtiğiniz bir cüzdana giden en fazla %5 vergi. Vergi yalnızca düşürülebilir | {{P.mainnet.standardTokenFeesBnb.advancedTax}} BNB |

Ayrıcalıklı AGNT staker'ları yarısını öder. Ücret Hazine'ye gider.

## Likidite ekleme

Sayfanın ikinci adımı tokeninizi ve BNB'yi tek işlemde PancakeSwap V2'ye ekler ve LP tokenlerini yönetir:

- **Burn**: LP ölü adrese gider. Likiditeyi kimse asla çekemez.
- **Lock**: LP, `LiquidityHelper` kontratında en az 30 gün tutulur, sonra size döner. Kilidi herkes explorer'da
  kontrol edebilir.

Başlangıç fiyatı, eklediğiniz BNB'nin eklediğiniz token miktarına bölünmesidir. Emin değilseniz önce küçük bir miktar ekleyin.

=== FILE guide/telegram.md ===
# Telegram topluluğu

| Yer | Bağlantı | Ne için |
| --- | --- | --- |
| Kanal | [t.me/agenticstarter](https://t.me/agenticstarter) | Yalnızca duyurular |
| Grup | [t.me/agentic_starter](https://t.me/agentic_starter) | Sohbet, günlük quiz, Agen'e sorular |
| Agen (bot) | [t.me/agenticstarter_bot](https://t.me/agenticstarter_bot) | Airdrop Mini App, hatırlatmalar, testnet başlatmaları |

## Gruba katılma

Yeni üyeler yazabilmek için karşılama mesajındaki **I'm not a bot** düğmesine basar. Sohbeti temiz tutmak için karşılama ve
katılma mesajları kısa bir süre sonra silinir.

## Agen'e sorun

Gruptaki mesajının herhangi bir yerine `@Agen` yaz, örneğin `@Agen mezuniyet nasıl çalışır?`. Agen bu dokümanlara ve canlı verilere dayanarak senin dilinde cevap verir. Proje sorularını herkes görsün diye sadece grupta yanıtlar; özelde kendi işlerinde yardımcı olur (lansman, puan, hatırlatma).

Agen, sizi veya projeyi riske atabilecek soruları (anahtarlar, seed phrase'ler, bir kontrata nasıl saldırılır) ya da Agentic
Starter ile ilgisi olmayan soruları yanıtlamaz. Sık sorulan sorulara doğru doküman sayfasının bağlantısı verilir.

## Komutlar

| Komut | Nerede | Ne yapar |
| --- | --- | --- |
| `@Agen <soru>` | grup | Agen'e sor (`/agen` da olur) |
| `/points` | özel | Airdrop puanlarınız ve nelerin eksik olduğu |
| `/earn` | grup veya özel | Puan için hâlâ yapabileceklerin, en değerlisi önce |
| `/challenge` | grup veya özel | Bugünün görevi ve serileriniz |
| `/help` | grup veya özel | Tüm komutlar |
| `/watch <token>` | özel | %80, %90 ve mezuniyette bir mesaj |
| `/remind presale` · `claim` · `mainnet` | özel | Açıldığında bir mesaj |
| `/report` | gruptaki bir mesaja yanıt olarak | Bir dolandırıcılığı veya sahte yöneticiyi ekibe bildirin |
| `/launch <code>` | özel | Web sitesinden testnet başlatma (bkz. [Token başlatma](/guide/launch#testnet-telegram)) |
| `/faucet` | özel | Test BNB'yi nereden alacağınız (airdrop sayfası Q2'den sonra size bir kez yükleme yapabilir) |
| `/settings` | özel | Agen'in sana hangi özel mesajları göndereceği: kutular, quiz hatırlatmaları, özet ve daha fazlası |
| `/agentid` | özel | Bir Agent ID'yi kontrol edin |

Agen'in her özel mesajında **Bunları kapat** düğmesi vardır. İstediğin zaman `/settings` ile tekrar aç.

## Grup kuralları

- Nazik olun. Hakaret, FUD kampanyası, spam ve başka projelerin tanıtımı yok.
- Bağlantılar: yalnızca resmî bağlantılar (bkz. [Güvende kal](/guide/safety)). Diğer bağlantılar silinir.
- İhlal puanları: ağır hakaret hemen bir ihlal puanı verir; hafif olanlar tekrarlanırsa uyarıdan sonra verilir. 20 gün içinde
  **5 ihlal puanı** yasaklanma demektir. İhlal puanları 20 gün sonra silinir.
- Yöneticiler asla önce DM atmaz ve asla anahtar, seed phrase veya BNB istemez.
- Ekibi taklit eden isimler (admin, support, Agentic Starter, Agen) susturulur; "bana DM at", seed phrase ve "cüzdanını doğrula" mesajları silinir.

Bir moderasyon işleminin yanlış olduğunu düşünüyorsanız gruptaki bir yöneticiye yazın.

=== FILE guide/community.md ===
# Topluluk programları

## Hall of Fame

[agenticstarter.xyz/hall-of-fame](https://agenticstarter.xyz/hall-of-fame) mezun olan ilk tokenleri, haftanın ajanlarını ve
her airdrop sezonunun liderlerini kalıcı olarak saklar. Mainnet'te mezun olan ilk 100 tokenin yaratıcıları kalıcı bir
**Genesis Creator** rozeti alır.

## Haftanın ajanı

Her pazartesi ekip, testnette ve mainnet'te curve üzerindeki başlatmaları ve işlemleri nedeniyle bir ajan cüzdanı seçer.
Kanalda ve X'te duyurulur, Hall of Fame'de gösterilir ve airdrop puanı kazandırır.

## Haftalık özet

Agen her hafta grupta ve kanalda kısa bir özet paylaşır: yeni üyeler, başlatmalar, mezuniyetler ve en iyi ajanlar. Haftalık
[Transparency raporu](https://agenticstarter.xyz/transparency) ücretleri, yakılan AGNT'yi, staker'lara ödenen BNB'yi ve her
Safe'in bakiyesini gösterir.

## Ortaklar ve içerik üreticileri (KOL programı)

İçerik üreticileri ve topluluklar kendi kodlarını ve bağlantılarını alır (`agenticstarter.xyz/?ref=<code>`). Ekip her kod için
ziyaretleri, katılan cüzdanları, tamamlanan görevleri ve ön satış BNB'sini görür ve ortakları sonuçlara göre ödüllendirir.
Ortak cüzdanlar airdrop'ta herkesle aynı kurallara tabidir. Başvurmak için Telegram grubunda veya X'te ekibe yazın.

## Çıkartmalar

[t.me/addstickers/agentic_starter_vibes](https://t.me/addstickers/agentic_starter_vibes)

=== FILE guide/safety.md ===
# Güvende kal

::: danger Agentic Starter'dan hiç kimse asla
- size önce DM atmaz,
- seed phrase'inizi veya private key'inizi istemez,
- bir şeyi "doğrulamak", "kilidini açmak" veya "talep etmek" için BNB göndermenizi istemez.
:::

## Resmî bağlantılar

Yalnızca bunlar bizimdir. Geri kalan her şey bizim değildir.

| | |
| --- | --- |
| Siteler | agenticstarter.xyz ve alt alan adları: docs., presale., airdrop., status. |
| X | [@agentic_starter](https://x.com/agentic_starter) |
| Telegram | [kanal](https://t.me/agenticstarter) · [grup](https://t.me/agentic_starter) · [Agen](https://t.me/agenticstarter_bot) |
| Kod | [github.com/agenticstarter](https://github.com/agenticstarter) |
| Diğerleri | [Discord](https://discord.gg/S9GJWW9AE7) · [YouTube](https://www.youtube.com/@AgenticStarter) · [TikTok](https://www.tiktok.com/@agenticstarter) · [Medium](https://medium.com/@agenticstarter) |
| Güvenlik e-postası | security@agenticstarter.xyz |

## İmzalamadan önce kontrol edin

[Site integrity](https://agenticstarter.xyz/integrity) her resmî kontratı ve Safe adresini, her parametre değişikliğini,
resmî bağlantıları ve her sitenin güncel sürümünü listeler. Bir izleyici canlı siteleri yayımlanmış sürümlerle karşılaştırır;
bir site planlı bir yayın dışında değişirse ekip kontrol edene kadar bakım moduna alınır. Bilinen sahte alan adları da orada
listelenir.

Bir işlemi onaylamadan önce:

1. Site adresi `agenticstarter.xyz` (veya bir alt alan adı) olmalı ve kilit simgesi görünmeli.
2. Cüzdanınızın gösterdiği kontrat Site integrity ile eşleşmeli.
3. Asla "sınırsız" harcamayı onaylamayın: sitelerimiz her zaman tam miktarı ister.

## Token riskleri

Burada başlatılan bir token yine de sıfıra gidebilir. Curve'deki tokenlerin sahibi, mint'i ve vergisi yoktur ve likidite
mezuniyette yakılır, ama bir yaratıcı kendi tokenlerini herkes gibi satabilir. [Riskler](/risks) sayfasını okuyun.

## Bir sorunu bildirin

- Güvenlik açığı: [agenticstarter.xyz/security](https://agenticstarter.xyz/security) veya security@agenticstarter.xyz.
  Lütfen herkese açık paylaşmadan önce ekibe düzeltmesi için zaman tanıyın. Doğrulanan açıklar ödül puanı kazandırır.
- Telegram'da dolandırıcılık veya sahte yönetici: mesaja `/report` ile yanıt verin.
- Bir şey çalışmıyor: [Status](https://agenticstarter.xyz/status) sayfasına bakın. Zincir üzerindeki fonlar asla sunucularımıza
  bağlı değildir; satış, iade ve talepler doğrudan kontratlarla çalışır.

=== FILE guide/faq.md ===
# SSS

**MetaMask ile alabilir miyim?** Mainnet curve'ünde hayır: curve alımları Agent ID'li bir cüzdan gerektirir. Mezuniyetten
sonra evet, PancakeSwap'ta. Testnette Agent ID ücretsizdir, bu yüzden her cüzdan bir tane alıp satın alabilir.

**Agent ID olmadan satabilir miyim?** Evet. Tokeni olan herkes curve'de satabilir ve satış asla durdurulmaz.

**Neden bir arkadaşıma token gönderemiyorum?** Transferler mezuniyette açılır. Bu, cüzdan sınırının aşılmasını ve listelemeden
önce havuz açılmasını engeller.

**Alımım BNB iade etti. Neden?** Cüzdan sınırına ulaştınız veya curve tükendi; kullanılmayan BNB aynı işlemde iade edilir.

**Neden her token adresi AAAA ile bitiyor?** Bu bizim marka işaretimiz. Kopyalar adresin tamamını taklit edemez, ama başka
yerdeki bir dolandırıcılık tokeni de AAAA ile bitebilir; tokenleri sitemizden açın veya
[Site integrity](https://agenticstarter.xyz/integrity) sayfasında kontrol edin.

**Mezuniyet bana ne kadara mal olur?** Hiçbir şeye, alımınız curve'ü dolduran alım değilse. O alım PancakeSwap'ta listeleme
için ekstra gas öder. Mezuniyet ücreti (hedefin {{P.mainnet.graduationFeeBps|pct}}'i, en fazla 2 BNB) toplanan BNB'den
alınır ve beşte biri yaratıcıya gider.

**Bir yaratıcı ne kazanır?** Başkalarının tokeniyle yaptığı her işlemde %1 curve ücretinin %20'si, BNB olarak, mezuniyete
kadar, artı mezuniyet bonusu. Yaratıcı bunu 10 cüzdan veya X/GitHub hesabıyla bölüşebilir ya da işlem yapanlara cashback
olarak geri verebilir. Bkz. [Ücretler](/guide/fees).

**Bir tokenin kaç holder'a ihtiyacı var?** Cüzdan sınırı yüzünden mainnet'te en az {{P.mainnet.minWalletsToGraduate}} farklı
cüzdan (testnette {{P.testnet.minWalletsToGraduate}}). Token sayfası kaç tane daha gerektiğini geri sayımla gösterir.

**Yaratıcı başlatmadan sonra tokeni değiştirebilir mi?** Yalnızca logoyu, açıklamayı ve bağlantıları, {{P.mainnet.metaUpdateFeeBnb}} BNB karşılığında.
Her değişiklik herkese açıktır ve token sayfası 7 gün boyunca bir uyarı gösterir. Ad, sembol ve arz asla değişmez.

**Ekip başlatılan coinlerden token tutuyor mu?** Hayır. Yaratıcılar herkesle aynı cüzdan sınırı altında alır.

**Token vergisi var mı?** Hayır. Başlatılan tokenlerde ve $AGNT'de transfer vergisi yoktur.

**Ekip satmamı engelleyebilir mi?** Hayır. Koruyucu acil durumda yeni başlatmaları ve alımları durdurabilir, ama satış ve
talep etme asla durdurulmaz.

**Bir yönetici bana DM atar mı?** Asla önce o yazmaz. Agentic Starter'dan hiç kimse seed phrase'inizi veya private key'inizi
istemez. Bkz. [Güvende kal](/guide/safety).

**Curve olmadan normal bir token yapabilir miyim?** Evet, [standart token fabrikasıyla](/guide/standard-tokens).

**Kodu nerede görebilirim?** [github.com/agenticstarter/agentic-starter-agnt](https://github.com/agenticstarter/agentic-starter-agnt).
Kontrat adresleri [Site integrity](https://agenticstarter.xyz/integrity) sayfasındadır.

=== FILE token/agnt.md ===
# $AGNT tokenomiği

$AGNT, BNB Chain üzerindeki (BEP-20) Agentic Starter platform tokenidir. Sabit arz, mint yok, vergi yok, sahip yok.

**Toplam arz: 1.000.000.000 AGNT**

| Dağılım | Pay | Token | Nerede durur | Kilit açılımı |
| --- | --- | --- | --- | --- |
| Ön satış | %25 | 250M | Ön satış kontratı | Claim'de %100; satılmayan AGNT sonlandırmada yakılır |
| Topluluk ve airdrop'lar | %20 | 200M | Community Safe | Sezonluk airdrop'lar ve ön satış erken bonusu |
| Likidite (AGNT/BNB) | %15 | 150M | Liquidity Safe | Listelemede havuza eklenir, LP yakılır |
| Ekip | %12 | 120M | Vesting kontratı | 12 ay cliff, ardından 24 ay doğrusal |
| Ekosistem ve pazarlama | %12 | 120M | Vesting kontratı → Ecosystem Safe | 3 ay cliff, ardından 18 ay doğrusal |
| Hazine | %10 | 100M | Vesting kontratı → Treasury Safe | 12 ay doğrusal |
| Listeleme rezervi | %6 | 60M | Liquidity Safe | 50M'a kadarı listelemede havuza eklenir; geri kalanı sonraki listelemeler için durur |

Tüm Safe'ler 2'de 2 multisig'dir. Kilit kuralları ve satış yapmama taahhüdü [Listeleme](/token/listing) sayfasındadır.

## Değer nereden gelir

Her curve işlemi %1 ücret öder. [Bu ücretin](/guide/fees):

- **%40**'ı PancakeSwap'ta $AGNT geri alır ve yakar,
- **%30**'u $AGNT [staker'larına](/token/staking) BNB olarak ödenir,
- **%20**'si mezuniyete kadar token yaratıcısına gider (cashback modunda işlemi yapanlara geri döner),
- **%10**'u hazineyi besler.

## Listelemede fayda

Aşağıdakilerin hepsi ilk günden çalışır. Burada hiçbir şey bir fiyat vaat etmez.

| Kullanım | Nasıl |
| --- | --- |
| Ücretlerden pay | AGNT stake edin ve her curve işleminden BNB kazanın ([Staking](/token/staking)) |
| Ücretsiz başlatma | Ayrıcalıklı staker'lar (7 gün boyunca en az 100.000 AGNT stake edilmiş) başlatma ücreti ödemez, standart token fabrikasında yarı fiyat öder |
| Oylar | En az 7 gün stake edilmiş AGNT ile ağırlıklandırılan Snapshot oyları |
| Airdrop artışı | Sezon 2, staker'lara bir puan çarpanı verir |
| Explore'da öne çıkarma | Bir tokeni Featured satırında göstermek için Ignite panosunda AGNT yakın (10.000 AGNT başına 1 saat, yakım başına en fazla 24 saat) |

Bunun dışındaki her şey yol haritasındadır ve önce oylamaya sunulacaktır.

=== FILE token/presale.md ===
# Ön satış

BNB Chain'i destekleyen herhangi bir tarayıcı cüzdanıyla [presale.agenticstarter.xyz](https://presale.agenticstarter.xyz)
adresinden katılın. KYC yok, e-posta yok, yalnızca bir cüzdan. **Herkes için tek fiyatlı** tek bir halka açık turdur.

::: warning Yalnızca ön satış sayfasından alın
Asla kimseye BNB göndermeyin ve asla kontrat adresine doğrudan göndermeyin: düz transferler reddedilir. Yöneticiler asla
önce DM atmaz. Kontrat adresini [Site integrity](https://agenticstarter.xyz/integrity) ile karşılaştırın.
:::

## Fiyat nasıl işler ("250+")

| Toplanan | Ne olur |
| --- | --- |
| {{P.presale.softCapBnb}} BNB'nin altı (soft cap) | Satış başarısız olur. Her alıcı BNB'sinin %100'ünü ön satış sayfasından iade alır |
| {{P.presale.softCapBnb}} ile {{P.presale.floorCapBnb}} BNB arası | Herkes taban fiyattan alır: **1 BNB = {{P.presale.floorAgntPerBnb|n}} AGNT**. Satılmayan AGNT sonlandırmada yakılır |
| {{P.presale.floorCapBnb}} BNB üstü | Satıştaki {{P.presale.saleTokens|n}} AGNT, katılınan BNB oranında paylaşılır. Herkes aynı nihai fiyatı öder; bu fiyat her BNB ile biraz yükselir. Hard cap yoktur |

Satışın sonunda 1 BNB gönderen bir alıcı için örnekler:

| Toplam toplanan | 1 BNB ile alınan |
| --- | --- |
| 120 BNB | 1.000.000 AGNT (satılmayan 130M AGNT yakılır) |
| 250 BNB | 1.000.000 AGNT |
| 500 BNB | 500.000 AGNT |
| 1.000 BNB | 250.000 AGNT |

Sayfa canlı fiyatı, bir simülatörü ve kendi pozisyonunuzu ("Where is my money?") gösterir. Satış {{P.presale.floorCapBnb}} BNB'nin
üstündeyken, başkaları aldıkça AGNT miktarınız biraz düşebilir; BNB'niz aynı kalır.

| Parametre | Değer |
| --- | --- |
| Taban fiyat | 1 BNB = {{P.presale.floorAgntPerBnb|n}} AGNT, {{P.presale.floorCapBnb}} BNB toplanana kadar |
| Satıştaki AGNT | {{P.presale.saleTokens|n}} (arzın %25'i), satış açılmadan önce kontrata yatırılır |
| Soft cap | {{P.presale.softCapBnb}} BNB |
| Cüzdan başına | Toplamda en az {{P.presale.perWalletBnb.0}} BNB, en fazla {{P.presale.perWalletBnb.1}} BNB |
| Erken bonus | İlk {{P.presale.earlyBonusHours}} saatteki alımlara +%{{P.presale.earlyBonusPct}} AGNT, havuz {{P.presale.earlyBonusCap|n}} AGNT ile sınırlı (dolarsa oranlı paylaşılır), claim ile ödenir |
| Süre | {{P.presale.days}} gün. Başlangıç ve bitiş saatleri UTC'dir ve ön satış sayfasında gösterilir |
| Claim | Listelemede %100 |

Bir katkı cüzdan maksimumunuzu aşarsa fazla BNB aynı işlemde iade edilir.

## BNB'niz nasıl korunur

1. BNB'niz ön satış kontratında kalır. Ekip satış bitmeden onu çekemez.
2. Soft cap'in altında satış başarısız olur ve her alıcı %100'ünü ön satış sayfasından iade alır.
3. Satıştan sonra, BNB'nin %80'i listelemede PancakeSwap havuzuna girer ve LP yakılır. Her adım, ön satış sayfasının listeleme
   kontrol listesinde bağlantılıdır. Bkz. [Listeleme](/token/listing).

## Arkadaşlarınızı davet edin

Davet bağlantınızı (`presale.agenticstarter.xyz/?ref=<cüzdanınız>`) almak için ön satış sayfasında cüzdanınızı bağlayın. Biri bu
bağlantıyla alım yaptığında ön satış kontratı daveti alımla birlikte kaydeder (`contributeWithRef`). Alıcı fazladan ödemez
ve tahsisi değişmez.

- Bağlantınla 0.05 BNB veya üzeri alan her cüzdan puanına **100 airdrop puanı** ekler (görev Q6, en fazla 50 alıcı).
- Ön satışa kendin katılmak görev Q5'tir: 0.05 BNB'den itibaren **+500 puan**, sonra her 0.01 BNB için +100 (en fazla
  10.000), ilk 48 saatte almak **500** ekler. Airdrop cüzdanından farklı bir cüzdanla mı aldın? Airdrop sayfasında bir kez
  bağla (Q5 kartı).
- Puanlar, cüzdanınız airdrop'un üç zorunlu görevini tamamladığında sayılır.
- Kendi bağlantınızla almak sayılmaz ve iade edilen alımlar çıkarılır.

## Satıştan sonra

1. **Sonlandırma**: BNB Treasury Safe'e gider ve satılmayan AGNT yakılır.
2. **Listeleme** ertesi gün 14:00 UTC'de: BNB'nin %80'i nihai ön satış fiyatından AGNT/BNB havuzuna girer, LP yakılır, ardından
   claim'ler açılır.
3. AGNT'nizin (ve erken bonusun) %100'ünü ön satış sayfasından claim edersiniz.

Her adım, ön satış sayfasının listeleme kontrol listesinde işlem bağlantısıyla işaretlenir. Claim'lerin ne zaman açıldığını
öğrenmek için oradaki bir hatırlatmayı (Telegram veya takvim) açın.

## İadeler

Katkılar kesindir, iki istisna dışında:

- **Satış başarısız olur**: soft cap'in altında biter. İadeler otomatik açılır.
- **Ekip iade modunu açar**, claim'ler açılmadan önce. Bu, sonlandırmadan sonra olursa ekip önce tutarın tamamını ön satış
  kontratına geri göndermelidir; böylece her alıcı tam iade alabilir.

Her iki durumda da BNB'nizin %100'ünü ön satış sayfasından iade alırsınız.

=== FILE token/listing.md ===
# Listeleme ve fonların kullanımı

$AGNT, ön satışın bitmesinden bir gün sonra, 14:00 UTC'de PancakeSwap V2'de listelenir.

## Listeleme kuralı

| | |
| --- | --- |
| Listeleme fiyatı | Nihai ön satış fiyatı. Ön satış alıcıları ve ilk piyasa alıcıları aynı fiyatı öder |
| Havuza giren BNB | Toplanan tüm BNB'nin %{{P.presale.listing.bnbToPoolPct}}'i |
| Havuza giren AGNT | Toplanan BNB'nin %80'i ÷ nihai fiyat: {{P.presale.floorCapBnb}} BNB veya daha fazlası toplandığında {{P.presale.listing.maxPoolAgnt|n}} AGNT, bunun altında BNB başına 800.000 AGNT |
| AGNT nereden gelir | Liquidity Safe (150M) artı 60M listeleme rezervinin 50M'a kadar kısmı. Gerekmeyen AGNT Liquidity Safe'te kalır |
| LP tokenleri | Aynı adımda yakılır. Likiditeyi kimse çekemez |

BNB'nin geri kalan %{{P.presale.listing.bnbToTreasuryPct}}'i Treasury Safe'e gider.

## Fonların kullanımı (%20'lik Hazine payı)

| Kullanım | Pay |
| --- | --- |
| Güvenlik ve denetimler | %{{P.presale.useOfFundsPct.security}} |
| Borsa listelemeleri | %{{P.presale.useOfFundsPct.listing}} |
| Pazarlama ve topluluk | %{{P.presale.useOfFundsPct.marketing}} |
| Operasyonlar (sunucular, API'ler) | %{{P.presale.useOfFundsPct.operations}} |

Dağılım ön satış açılana kadar düzenlenebilir. Bundan sonra her değişiklik [Site integrity](https://agenticstarter.xyz/integrity)
sayfasında herkese açık olarak kaydedilir ve Telegram'da duyurulur. Harcamalar haftalık
[Transparency raporunda](https://agenticstarter.xyz/transparency) izlenir.

## Kilit taahhütleri

| Tahsis | Kural |
| --- | --- |
| Ekip (120M) | Vesting kontratı: 12 ay cliff, ardından 24 ay doğrusal. Sahip yalnızca başlangıcı erteleyebilir |
| Hazine ve Ekosistem | Listeleme + 6 aya kadar piyasada satış yok |
| Likidite (Liquidity Safe) | Yalnızca havuz ve listelemeler için kullanılır |
| Topluluk (Community Safe) | Yalnızca airdrop'lar ve ön satış erken bonusu için kullanılır |

Herhangi bir proje Safe'i AGNT'yi bir DEX çiftine, bir router'a veya bilinen bir borsa yatırma adresine taşırsa, Telegram
kanalında ve grubunda otomatik olarak herkese açık bir uyarı yayımlanır.

## Kendiniz kontrol edin

- [Liquidity proof](https://agenticstarter.xyz/liquidity): havuz adresi, canlı rezervler ve LP yakım işlemi, zincirden okunur.
- Ön satış sayfasının listeleme kontrol listesi: Sonlandırma → BNB havuza eklendi → LP yakıldı → claim'ler açıldı, her biri
  kendi işlemiyle.
- Her parametre değişikliğiyle birlikte [Safe adresleri](https://agenticstarter.xyz/integrity).

=== FILE token/airdrop.md ===
# Airdrop

Airdrop puanları sezonluk $AGNT airdrop'undaki payınızı belirler. Tek kullanımları budur: puanlar token değildir ve işlem
görmez. [airdrop.agenticstarter.xyz](https://airdrop.agenticstarter.xyz) adresinden katılın veya botumuz Agen üzerinden
Telegram içinde açın.

## Sezon 1

| | |
| --- | --- |
| Havuz | 50 milyon AGNT; 5.000 uygun cüzdanda 75 milyona, 15.000'de 100 milyona çıkar |
| Kimler uygun | Üç zorunlu görevi (Q1–Q3) tamamlayan cüzdanlar |
| Dağıtım | `AGNT'niz = havuz × puanınız ÷ tüm uygun cüzdanların puanı` |
| Snapshot | $AGNT ön satışı bittikten sonra |
| Günler | Her gün 00:00 UTC'de başlar ve biter |

<div class="flow">
  <div><b>Giriş</b><small>Bir cüzdan bağlayın ve ücretsiz bir mesaj imzalayın</small></div>
  <div class="arrow">→</div>
  <div><b>Q1–Q3</b><small>X, Telegram, sohbet. Artık uygunsunuz</small></div>
  <div class="arrow">→</div>
  <div><b>Daha fazla kazanın</b><small>Başlatın, işlem yapın, quiz, davet</small></div>
  <div class="arrow">→</div>
  <div><b>Talep edin</b><small>Snapshot'tan sonra</small></div>
</div>

## Görevler

| # | Görev | Puan |
| --- | --- | --- |
| Q1 | X'te @agentic_starter hesabını takip et ve sabitlenmiş gönderiyi alıntıla, sonra alıntının bağlantısını yapıştır. **Zorunlu** | 300 |
| Q2 | Telegram'ı airdrop botuyla bağla, sonra hem Telegram kanalında hem grupta ol (her gün yeniden kontrol edilir). **Zorunlu** | 200 |
| Q3 | Telegram grubunda sohbet et: her 2 mesaj = 1 puan, günde en fazla 50. **Zorunlu** (en az 1 puan) | günde en fazla 50 |
| Q4 | Testnet launchpad'inde Launch & Trade: token çıkar +100 · 0.005 BNB veya üzeri 5 işlem (eğri ya da PancakeSwap) +100 · token'ın mezun olur +300 (meydan okuma) | en fazla 500 |
| Q5 | $AGNT ön satışına katıl: 0.05 BNB'den itibaren +500, sonra her 0.01 BNB için +100 | en fazla 10.000 |
| Q6 | Ön satış bağlantınla alıcı davet et (0.05 BNB veya üzeri) | kişi başı 100, en fazla 50 alıcı |

Q5 ve Q6 ön satış açılana kadar TBA görünür. Önceki görev listesiyle kazanılan puanlar korunur. Altı görevin tamamı
**Season 1 OG** rozetini kazandırır. Her görev kartında seni doğru yere götüren tek bir düğme vardır ve döndüğünde kendiliğinden
işaretlenir; biten görevler en altta yeşil tek bir satıra katlanır.

## Ek puanlar

| Etkinlik | Puan |
| --- | --- |
| Q1–Q3'ü bitirip bir gerçek işlem daha yapan bir arkadaşı davet etmek (2 farklı gün sohbet, bir işlem ya da ön satış) | kişi başı 100 |
| Davet seviyeleri: sayılan 5 / 20 arkadaş | +200 / +1.000 |
| Telegram grubunda günlük quiz | doğru cevap başına 5, günde en fazla 45 |
| Quiz serisi (günde bir doğru cevap): üst üste 7 / 14 / 21 / 28 gün | +50 / +100 / +300 / +400 |
| Grupta 7 gün üst üste sohbet | 50 |
| Ön satışın ilk 48 saatinde almak | 500 |
| Haftalık ilk 10, her pazartesi (yalnızca o haftanın sohbet, quiz, kutu, işlem ve davetleri sayılır) | 300 / 200 / 100, sonra 50 |
| Testnet çıkarma botuna test BNB yakıtı vermek | 0,1 tBNB başına 20, en fazla 100 |
| Ekibin onayladığı hata raporları | 50 ile 500 arası |
| Günlük görev (günde bir iş, **Today** kartında) | 50 |
| Üst üste 7 günlük görev | 100 |
| X baskınları (baskın süresinde ekibin paylaştığı gönderiyi alıntıla) | baskına göre, genelde 30 |
| X'te bir başarı paylaş (Bronze, Silver, Gold, 7 günlük seri, ilk mezuniyet, Season 1 OG) | 50 ile 100, her biri bir kez |
| Ekibin onayladığı bir dolandırıcılık bildirimi | 10 |

## Golden hour

Her gün rastgele bir saat (asla bir quiz'in yanında değil) **golden hour**'dır: o saatte kazandığınız her puan iki katı sayılır
(sohbet, quiz ve curve işlemleri; günlük sınırlar yine geçerlidir). Agen her golden hour'u kanalda ve grupta duyurur ve Today
kartı geri sayım yapar.

## Agen Gift Hour

Her gün **14:00–15:00 UTC** arasında agenticstarter.xyz'de en az **0.01 BNB** değerinde testnet $AGNT al. O saatteki ilk
alımın cüzdanına bir **hediye kutusu** kazandırır: kutu sitede açılır ve içinde ne kadar **gerçek $AGNT** olduğunu
görürsün. Her kutuda farklı miktar vardır.

- Cüzdan başına günde bir kutu: o saatteki en az 0.01 BNB'lik ilk alım sayılır. Hemen açmadığın kutu sitede seni bekler.
- Gift Hour $AGNT'si airdrop ile birlikte, zorunlu görevleri (Q1–Q3) bitiren ve kötüye kullanım nedeniyle elenmeyen
  cüzdanlara ödenir.
- Gift Hour toplamın, airdrop sayfasında puanlarının yanında ve Agen'in /points komutunda görünür.
- Açtıktan sonra görseli X'te ya da Telegram grubunda paylaş.
- Saat bitince günün kutularından biri rastgele **şanslı kutu** olarak çekilir: içindeki $AGNT ikiye katlanır (x2).
  Agen bunu grupta duyurur ve kazanana haber verir.
- Saatin bitmesine on dakika kala Agen grupta bir hatırlatma paylaşır, uygulama da henüz kutusu olmayan cüzdanlara
  hatırlatır.
- **Grup hedefi:** bir günde ne kadar çok cüzdan kutu alırsa, o günün her kutusu o kadar dolu olur: 100 cüzdan **+%5**, 250 **+%10**, 500 **+%20**, saat bitince eklenir. Gift Hour şeridindeki çubuk bir sonraki seviyeye ne kadar kaldığını gösterir; Agen'in gruptaki Gift Hour gönderisi her seviyede kendini günceller.

## Agen Morning Box

Her gün **08:00–10:00 UTC** arasında cüzdanın bağlıyken Agentic Starter **uygulamasını** aç: Morning Box
**20 ile 100 arasında airdrop puanı** verir, günde bir kutu. 10:00 UTC'den sonra ertesi sabaha kadar kaybolur. Morning
Box yalnızca [yüklü uygulamada](/guide/install-app) var, web sitesinde yok.

Üst üste günlerde aç ve **seri bonusu** kazan: 7 gün **+100**, 14 gün **+200**, 21 gün **+300** ve 28 gün **+500**
puan; ardından dört hafta yeniden başlar. Bir gün kaçırırsan seri yeniden 1'den başlar.

Morning Box'ların yaklaşık **100'de 1'i** **500 puanlık** bir **altın kutudur**. Morning Box kapandığında Agen günün tüm altın kutularını grupta tek bir gönderide sayar; en son şanslı ve altın kutular airdrop sayfasında listelenir.

**Tekrar hoş geldin:** 7 günden fazla Morning Box açmadıysan, aradan sonraki ilk kutun **x2** olur. Agen DM'den merhaba
der.

Uygulamada **Menü → Ayarlar → Bildirimler**, Gift Hour, Morning Box, günlük quiz (5 dakika önce, günde bir kez) ve kendi
airdrop haberlerin (uygun oldun, bir arkadaş sayıldı, bir seri ödendi) için bildirim gönderir. Günde en fazla 4 ve saat
diliminde gece asla. Ön satış haberleri her zaman gelir.

## Unvanlar

| Unvan | Puan |
| --- | --- |
| Bronze | 1.000 |
| Silver | 5.000 |
| Gold | 10.000 |

Unvanlar profilinizde, liderlik tablosunda ve paylaşım görselinizde görünür.

## Önce Telegram

Cüzdan bağlamadan önce Telegram'da başlayabilirsiniz: airdrop'u Agen'in menüsünden açın; sohbet ve quiz puanlarınız Telegram
hesabınızda tutulur. Daha sonra bir cüzdan bağladığınızda cüzdana taşınır.

Airdrop botu [@agenticstarter_airdrop_bot](https://t.me/agenticstarter_airdrop_bot), görevlerini tiklerle, puanlarını ve
her adımın nasıl yapılacağını kendi dilinde gösterir. Davet bağlantıları orada da çalışır
(`t.me/agenticstarter_airdrop_bot?start=ref_KODUN`): botu senin bağlantınla başlatıp bir cüzdan bağlayan arkadaş senin
davetin sayılır.

Airdrop botunda ayrıca herhangi bir cüzdanı kontrol edebilir (adresini gönder), senin saatinle 20:00'de akşam özetini açabilir (varsayılan kapalı) ve davet kartını herhangi bir sohbette paylaşabilirsin: mesaj kutusuna `@agenticstarter_airdrop_bot` yaz.

## Her pazartesi

Agen her pazartesi grupta tek bir mesaj paylaşır: haftanın ilk 10'u (resimli), haftanın en iyi davet edenleri (ilk 3 +500, +300 ve +200 puan alır; arkadaş o hafta kaydolduysa ve sayılıyorsa geçerli), en uzun quiz serisi ve meme yarışması.

**Meme yarışması:** pazartesi gönderisine Agentic Starter hakkındaki meme'inle yanıt ver. Ekip ilk 3'ü seçer; onlar sonraki pazartesi +500, +300 ve +200 puan alır (Telegram'ın bir cüzdana bağlı olmalı).

**Topluluk hedefi:** 5.000, 10.000 ve 15.000 uygun cüzdana ulaşınca, sonraki cumartesinin Gift Hour'u x2 öder: her hediye kutusunda iki kat $AGNT olur. Airdrop sayfasındaki çubuk bir sonraki hedefe ne kadar kaldığını gösterir.

## Günlük quiz

Telegram grubunda günde üç oturum: **03:00, 14:00 ve 19:00 UTC**. Her oturumda Agentic Starter hakkında, her biri beş dakikalık üç çoktan seçmeli soru vardır. A/B/C/D düğmeleriyle cevapla; son cevabın sayılır. Her sorunun ilk 20 doğru cevabı 5 puan alır. Sorular ve cevaplar öğrenmek için grupta kalır. Beş dakika önce hatırlatma ister misin? Uygulamada quiz bildirimlerini aç ya da Agen'in `/settings` menüsünden turları seç.

Günde bir doğru cevap **quiz serini** korur: üst üste 7, 14, 21 ve 28 gün +50, +100, +300 ve +400 puan kazandırır. Bir gün kaçırırsan baştan başlar. Agen turun sonuçlarında adını anar ve paylaşman için resimli bir özel mesaj gönderir.

## Doğrulama nasıl çalışır

1. **Cüzdan.** Bağlayın ve bir mesaj imzalayın. Ücretsizdir ve işlem göndermez.
2. **X (Q1).** Follow ve Quote düğmelerini kullanın, sonra alıntı gönderinizin bağlantısını yapıştırın. Çoğu gönderi saniyeler
   içinde otomatik kontrol edilir; gerisi ekibin hızlı incelemesine gider. Başka bir cüzdanın zaten kullandığı bir bağlantı
   işaretlenir.
3. **Telegram (Q2).** **Telegram'ı aç**'a, sonra airdrop botunda **Start**'a dokun. Bot Telegram hesabını cüzdanına bağlar
   ve kanal ile gruba katılma düğmelerini gösterir; kart kendiliğinden işaretlenir. Birinden ayrılmak puanları siler.
4. **Sohbet (Q3).** Agen mesajlarınızı sayar. 3 karakterden kısa mesajlar, tekrarlar, iletilen mesajlar ve bir öncekinden
   5 saniye içinde gönderilen mesajlar sayılmaz.
5. **Zincir üstü (Q4–Q6)** BNB Chain'den otomatik okunur. Başka bir cüzdanla alınan ön satış, o cüzdan bağlamak için ücretsiz
   bir mesaj imzaladıktan sonra sayılır (Q5 kartı). Bir ön satış cüzdanı bir airdrop cüzdanına kalıcı olarak bağlanır.

Her X hesabı, Telegram hesabı ve ön satış cüzdanı yalnızca bir airdrop cüzdanına bağlanabilir.

## En çok puan nasıl kazanılır

1. **Önce Q1–Q3'ü bitir.** O zamana kadar puanların havuza sayılmaz.
2. **Q4 Launch & Trade:** bir token çıkar, 0.005 BNB veya üzeri 5 işlem yap ve token'ını mezun etmeyi dene (+300).
3. **Her gün:** grupta sohbet et (en fazla 50), quizi cevapla (en fazla 45) ve seriyi koru, uygulamada Morning Box'ı aç ve
   Gift Hour'u yakala.
4. **Gerçekten katılan arkadaşları davet et:** kişi başı +100, 5'te +200 ve 20'de +1.000.
5. **Ön satış:** 0.05 BNB'den itibaren en fazla 10.000 puan, getirdiğin her alıcı için 100 daha.

Grupta Agen'e sor ("en çok puanı nasıl kazanırım?") ya da airdrop botunda **En çok kazan**'a dokun: yalnızca *senin* hâlâ
yapmadığın şeylerin listesini, en değerlisi önce olacak şekilde alırsın. Sezon 1 puanları snapshot'ta (ön satış bitince)
durur; sonraki puanlar Sezon 2'ye sayılır.

## Hazır mıyım?

**Ready to claim?** kartı her gereksinimi, nelerin eksik olduğunu ve nasıl düzeltileceğini listeler; ayrıca tahmini bir AGNT
aralığı verir. Aralık nihai havuza ve kaç cüzdanın uygun olduğuna bağlıdır, yani bir kılavuzdur, söz değildir.

Testnette Q2'yi bitiren cüzdanlar, musluk fonları olduğu sürece bir kez küçük bir test BNB yüklemesi alabilir (0,005 tBNB).

## Herhangi bir cüzdanı kontrol edin

Airdrop sayfasındaki **Check** kutusu herhangi bir cüzdanın görevlerini, kaynağa göre puanlarını, uygunluğunu, sırasını ve
tahmini $AGNT'sini gösterir. Herkese açık ilk 100 aynı sayfadadır.

## Talepler

1. Snapshot'ta puanlar $AGNT'ye çevrilir ve bir Merkle ağacı yayımlanır.
2. Airdrop kontratı sezonu bu kök ve bir talep son tarihiyle açar.
3. Uygun cüzdanlar airdrop sayfasında talep eder (yalnızca gas). Talep edilmeyen tokenler topluluk havuzuna döner.

## Adil oyun

Spam, farm hesapları, wash trading ve çoklu hesap kümeleri snapshot'tan önce çıkarılır. Ekip aynı ağ adresini paylaşan veya
aynı blokta aynı tokenlerle işlem yapan cüzdanlara bakar ve elle karar verir; hiçbir şey otomatik çıkarılmaz. Puanlardaki her
manuel değişiklik gerekçesiyle kaydedilir.

Cüzdanınız yanlışlıkla çıkarıldıysa Ready kartındaki **Appeal**'a basın ve birkaç cümleyle açıklayın. Ekip aynı kartta yanıt verir.

=== FILE token/staking.md ===
# Staking

Launchpad ücretlerinden BNB kazanmak için $AGNT'yi `AGNTStaking` kontratında stake edin.

- Staker'lar **her curve ücretinin %30'unu** alır, BNB olarak ödenir.
- Gelen her BNB **sonraki 7 gün boyunca akıtılır** ve bu sürede stake edenler arasında paylaşılır. Ödemeden hemen önce stake
  etmek payı kapmaz.
- Kimse stake etmezken gelen BNB bekler ve ilk staker katıldığında akmaya başlar.
- Kilit yok: istediğiniz zaman unstake edin; istediğiniz zaman BNB talep edin.

## Ayrıcalıklar

**En az 7 gün** stake edilmiş AGNT ayrıcalıklar için sayılır. Daha fazla AGNT eklemek tüm pozisyon için 7 günlük süreyi
yeniden başlatır; böylece ayrıcalıklar tek bir blok için satın alınamaz.

| Ayrıcalık | Gereken |
| --- | --- |
| Launchpad'de ücretsiz başlatma | 7 gün boyunca 100.000 AGNT stake edilmiş |
| Standart token fabrikasında yarı fiyat | 7 gün boyunca 100.000 AGNT stake edilmiş |
| Snapshot oy ağırlığı | 7 gün stake edilmiş herhangi bir miktar AGNT (`maturedStake`) |
| Sezon 2 airdrop çarpanı | Sezon 2 ile birlikte duyurulur |

Eşik sahip Safe tarafından değiştirilebilir; her değişiklik [Site integrity](https://agenticstarter.xyz/integrity) sayfasında
herkese açıktır.

Staking, $AGNT listelemesiyle birlikte açılır.

| Fonksiyon | Etki |
| --- | --- |
| `stake(amount)` | AGNT yatırır (önce approve) |
| `unstake(amount)` | AGNT çeker, ödüller korunur |
| `claim()` | Biriken BNB'yi çeker |
| `pendingBnb(address)` | Biriken BNB'yi gösterir |
| `maturedStake(address)` | Ayrıcalıklar ve oylar için sayılan AGNT |
| `hasPerks(address)` | Ayrıcalık eşiğinin üstündeyse true |

=== FILE risks.md ===
# Riskler

- **Piyasa riski.** Burada başlatılan tokenler spekülatiftir ve sıfıra gidebilir. $AGNT de öyle.
- **Ajan riski.** Ajanlar otomatik hareket eder. Kötü promptlar, buglar ya da ele geçirilmiş araçlar istemediğiniz şekilde
  işlem yapabilir. Limitleri sıkı tutun ve her önizlemeyi kontrol edin.
- **Akıllı kontrat riski.** Denetimler hata olasılığını azaltır ama ortadan kaldırmaz.
- **Bağımlılık riski.** Agent ID kayıtları, cüzdanlar, RPC'ler ve PancakeSwap üçüncü taraf hizmetlerdir.
- **Taklit tokenler.** Buradaki her token `AAAA` ile biter, ama herkes başka bir yerde AAAA ile biten bir adres
  oluşturabilir. Tokenleri sitemizden açın ve bağlantıları [Site integrity](https://agenticstarter.xyz/integrity) sayfasında kontrol edin.
- **Testnet alıştırmadır.** Testnet BNB'si ve testnet tokenleri değersizdir ve hiçbir şeye dönüştürülmez.
- **Düzenleyici risk.** Token satışı ve alım satımı yaşadığınız yerde kısıtlanmış olabilir.

Yöneticiler asla önce DM atmaz ve asla seed phrase, private key ya da "cüzdan doğrulaması" istemez. Yalnızca
[@agentic_starter](https://x.com/agentic_starter) tarafından paylaşılan bağlantılara güvenin.

=== FILE guide/install-app.md ===
# Uygulamayı telefona yükle

Agentic Starter telefonunda bir uygulama gibi çalışır: tam ekran, altta sekmeler, ana ekrandan tek dokunuşla açılır.
Sitenin kendisidir; güncellenecek bir şey ya da uygulama mağazası yoktur. Cüzdanın her imzadan önce yine onay ister.

## iPhone ve iPad

1. [agenticstarter.xyz](https://agenticstarter.xyz) adresini **Safari**'de aç. Telegram, X veya bir cüzdan
   uygulamasının içindeysen önce sayfayı Safari'de aç: iPhone'daki diğer tarayıcılar web uygulaması ekleyemeyebilir.
2. Safari çubuğundaki **Paylaş** simgesine (oklu kare) dokun. Göremiyorsan önce **⋯** simgesine dokun.
3. **Ana Ekrana Ekle**'ye, ardından **Ekle**'ye dokun.
4. Agentic Starter'ı ana ekrandan aç.

## Android

### Chrome

1. [agenticstarter.xyz](https://agenticstarter.xyz) adresini **Chrome**'da aç. Bağlantı Telegram, X veya bir cüzdan
   uygulamasının içinde açıldıysa önce sağ üstteki **⋮** simgesine dokunup **Chrome'da aç**'ı seç: oradan uygulama
   yüklenemez.
2. Chrome'un sağ üstündeki **⋮** simgesine dokun.
3. **Uygulamayı yükle** ya da **Ana ekrana ekle**'ye, ardından **Yükle**'ye dokun.
4. Agentic Starter'ı ana ekrandan ya da uygulama listesinden aç.

Chrome sayfada veya adres çubuğunda bir **Yükle** düğmesi gösterirse ona dokunmak da aynı işi yapar.

### Samsung Internet

1. Alttaki **☰** simgesine dokun.
2. **Sayfayı ekle**'ye, ardından **Ana ekran**'a dokun.

### Uygulama dosyası (APK)

Dosya mı tercih edersin? [agentic-starter.apk'yı indir](https://agenticstarter.xyz/download/agentic-starter.apk) (sürüm 1.0, 1,7 MB). Aynı siteyi Chrome üzerinden tam ekran açar; Android, tarayıcıdan yüklemeye izin verip vermediğini bir kez sorar. Yüklemeden önce dosyayı kontrol et:

- Dosya SHA-256: `be55ac38090acbcf8ddcbf732463176306ad6a10365d9402b63fac81cd135479`
- İmza sertifikası SHA-256: `A2:7C:83:5E:EE:EF:C6:39:0B:CC:79:77:53:29:DD:84:7D:E2:6D:47:93:1E:2A:A5:66:D2:86:76:AD:E9:A7:5B`

## Uygulamanın içinde

- **Dil:** menüyü açmak için sol üstteki resmine dokun, ardından **Ayarlar → Dil** ile listeden seç.
- **Uygulama kilidi:** **Ayarlar → Uygulama kilidi**, uygulama açılmadan önce Face ID, parmak izi, cihaz şifresi ya da
  kendi şifreni ister. Kilit yalnızca telefonunda kalır.
- **Avatar:** fotoğraf veya renk seçmek için menüdeki resmine dokun. Yalnızca telefonunda kalır; hiçbir şey yüklenmez.

## Sorular

**Uygulamayı yükle seçeneğini göremiyorum.** Chrome'u Play Store'dan güncelle ve sayfayı yenile. Uygulama zaten
yüklüyse aynı menüde **Uygulamayı aç** görünür.

**Güvenli mi?** agenticstarter.xyz ile aynı sitedir ve cüzdanının anahtarlarına erişemez: her işlem onay için
cüzdanını açar. Yalnızca agenticstarter.xyz'den yükle. Ekip özel mesajla asla uygulama dosyası ya da bağlantısı
göndermez.

**Nasıl kaldırırım?** Her uygulama gibi: simgeye basılı tut, ardından **Kaldır**'a dokun.
