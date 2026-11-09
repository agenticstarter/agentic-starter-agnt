# لسٹنگ اور فنڈز کا استعمال

$AGNT، پری سیل ختم ہونے کے اگلے دن 14:00 UTC پر PancakeSwap V2 پر لسٹ ہوتا ہے۔

## لسٹنگ کا اصول

| | |
| --- | --- |
| لسٹنگ قیمت | آخری پری سیل قیمت۔ پری سیل خریدار اور مارکیٹ کے پہلے خریدار ایک ہی قیمت ادا کرتے ہیں |
| پول میں BNB | جمع شدہ کل BNB کا {{P.presale.listing.bnbToPoolPct}}% |
| پول میں AGNT | جمع شدہ BNB کا 80% ÷ آخری قیمت: اگر {{P.presale.floorCapBnb}} BNB یا اس سے زیادہ جمع ہو تو {{P.presale.listing.maxPoolAgnt|n}} AGNT، اس سے کم ہو تو فی BNB 800,000 AGNT |
| AGNT کہاں سے آتا ہے | Liquidity Safe (15 کروڑ) اور 6 کروڑ کے لسٹنگ ریزرو میں سے 5 کروڑ تک۔ جس AGNT کی ضرورت نہ ہو وہ Liquidity Safe میں رہتا ہے |
| LP ٹوکن | اسی مرحلے میں جلا دیے جاتے ہیں۔ لیکویڈیٹی کو کوئی نہیں نکال سکتا |

باقی {{P.presale.listing.bnbToTreasuryPct}}% BNB Treasury Safe کو جاتا ہے۔

## فنڈز کا استعمال (20% ٹریژری والا حصہ)

| استعمال | حصہ |
| --- | --- |
| سیکیورٹی اور آڈٹس | {{P.presale.useOfFundsPct.security}}% |
| ایکسچینج لسٹنگز | {{P.presale.useOfFundsPct.listing}}% |
| مارکیٹنگ اور کمیونٹی | {{P.presale.useOfFundsPct.marketing}}% |
| آپریشنز (سرورز، APIs) | {{P.presale.useOfFundsPct.operations}}% |

پری سیل کھلنے تک تقسیم میں ترمیم ہو سکتی ہے۔ اس کے بعد ہر تبدیلی [Site integrity](https://agenticstarter.xyz/integrity?lang=ur) پر عوامی طور پر
درج ہوتی ہے اور Telegram میں اعلان کی جاتی ہے۔ خرچ کو ہفتہ وار [Transparency رپورٹ](https://agenticstarter.xyz/transparency?lang=ur) میں
ٹریک کیا جاتا ہے۔

## لاک کے وعدے

| تقسیم | اصول |
| --- | --- |
| ٹیم (12 کروڑ) | ویسٹنگ کنٹریکٹ: 12 ماہ کلف، پھر 24 ماہ میں لکیری۔ مالک صرف آغاز کو آگے بڑھا سکتا ہے |
| ٹریژری اور ایکو سسٹم | لسٹنگ + 6 ماہ تک مارکیٹ میں فروخت نہیں |
| لیکویڈیٹی (Liquidity Safe) | صرف پول اور لسٹنگز کے لیے استعمال |
| کمیونٹی (Community Safe) | صرف ایئرڈراپس اور پری سیل کے ابتدائی بونس کے لیے استعمال |

اگر کوئی پروجیکٹ Safe AGNT کو کسی DEX جوڑے، راؤٹر یا معروف ایکسچینج ڈپازٹ ایڈریس پر منتقل کرے تو Telegram چینل اور گروپ میں خود بخود عوامی
الرٹ جاتا ہے۔

## خود جانچیں

- [Liquidity proof](https://agenticstarter.xyz/liquidity?lang=ur): پول کا پتہ، لائیو ریزرو اور LP برن ٹرانزیکشن، سب چین سے پڑھے جاتے ہیں۔
- پری سیل صفحے کی لسٹنگ چیک لسٹ: فائنلائز ← BNB پول میں شامل ← LP برن ← کلیم کھلے، ہر ایک اپنی ٹرانزیکشن کے ساتھ۔
- [Safe کے پتے](https://agenticstarter.xyz/integrity?lang=ur) ہر پیرامیٹر تبدیلی کے ساتھ۔
