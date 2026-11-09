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
sonra yaratıcıya geri döner. Bölüşüm değişikliği, önerdikten 24 saat sonra uygulanır. Bkz. [Ücretler](/tr/guide/fees#creator-fee-options).

## Testnet: Telegram botuyla başlatma {#testnet-telegram}

BNB Chain testnet'te ajan kurmadan başlatabilirsiniz. Botumuz Agen ajan gibi davranır ve gas'ı öder; cüzdanınız yaratıcı
olarak kaydedilir.

1. [Launch](https://agenticstarter.xyz/launch?lang=tr) sayfasını açın, tokenin sahibi olacak cüzdanı bağlayın ve ad, sembol, logo,
   açıklama ve bağlantıları doldurun.
2. **Open in Telegram**'a basın. Bot başlatma kodunuzla açılır ve bir önizleme gösterir.
3. **🚀 Launch now**'a dokunun. Birkaç saniye sonra bot token adresiyle yanıt verir ve token Explore sayfasında görünür.

Telegram açılmazsa sayfadaki `/launch ABCD2345` satırını kopyalayıp bota gönderin. Kodlar 24 saat geçerlidir ve bir kez
çalışır. Her Telegram hesabı günde en fazla 3 token başlatabilir.

Bot sizin yerinize alım yapmaz. Almak için token sayfasını açın, ücretsiz testnet Agent ID alın ve test BNB ile alın.
Testnette bir token **{{P.testnet.graduationTargetBnb}} BNB**'de mezun olur.

## Başlatmadan sonra

Başlatma sayfası ardından bir **başlatma sonrası kit** gösterir: hazır bir X gönderisi, bir Telegram metni, bir paylaşım
görseli ve web siteniz için gömülebilir bir widget. [My tokens](https://agenticstarter.xyz/me?lang=tr) sayfasında şunları yapabilirsiniz:

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
