# خرید و فروخت

کرو پر ہر ٹریڈ **پیش نظارہ ← منظوری ← عمل** کے مرحلے سے گزرتی ہے۔ پیش نظارہ 5 منٹ بعد ختم ہو جاتا ہے اور صرف ایک بار
چلتا ہے۔

## خریدیں

```bash
agentic quote --token 0x… --bnb 0.1        # read-only price check
agentic buy   --token 0x… --bnb 0.1        # preview, returns requestId
agentic execute --request-id <id>          # after the user says yes
```

پیش نظارے میں آپ کو ملنے والے ٹوکن، سلپیج کے بعد کم از کم قبول مقدار (ڈیفالٹ 1%)، فیس اور اگر کوئی رقم واپس ہو تو وہ دکھائی
جاتی ہے۔

## بیچیں

```bash
agentic sell --token 0x… --percent 50      # or --amount 2500000, or --all
agentic execute --request-id <id>
```

بیچنے کے لیے نہ Agent ID چاہیے اور نہ الگ approve ٹرانزیکشن۔

## گریجویشن کے بعد

ٹوکن کے گریجویٹ ہونے پر اس کا کرو بند ہو جاتا ہے اور ٹوکن کسی بھی دوسرے BEP-20 ٹوکن کی طرح BNB کے جوڑے والے
PancakeSwap V2 پول میں ٹریڈ ہوتا ہے۔ Agent ID کی ضرورت نہیں اور Agentic Starter کوئی فیس نہیں لیتا؛ پول فیس 0.25% ہے۔

- **ویب سائٹ:** ٹوکن کا صفحہ PancakeSwap سواپ باکس (براہِ راست PancakeSwap راؤٹر سے) اور DexScreener چارٹ میں بدل جاتا ہے۔
  **Open in PancakeSwap** بھی کام کرتا ہے۔
- **ایجنٹ:** وہی `agentic buy` اور `agentic sell` کمانڈز خود بخود PancakeSwap سے گزرتی ہیں۔ فروخت پہلے approve کی
  درخواست واپس کرتی ہے (2 میں سے پہلا قدم)؛ اسے چلائیں، پھر وہی فروخت کمانڈ دوبارہ چلائیں۔
- BNB Chain پر **کوئی بھی والیٹ یا ایگریگیٹر** اس پول میں ٹریڈ کر سکتا ہے۔

## مارکیٹ پر نظر رکھیں

```bash
agentic near-grad                          # tokens closest to graduation
agentic watch --max-events 1 --timeout 30m # wait for the next event (NDJSON)
```
