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
