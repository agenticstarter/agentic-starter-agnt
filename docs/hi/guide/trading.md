# खरीदें और बेचें

कर्व पर हर ट्रेड **प्रीव्यू → मंज़ूरी → एक्ज़ीक्यूट** के क्रम में होता है। प्रीव्यू 5 मिनट में एक्सपायर हो जाता है और सिर्फ़
एक बार चलता है।

## खरीदें

```bash
agentic quote --token 0x… --bnb 0.1        # read-only price check
agentic buy   --token 0x… --bnb 0.1        # preview, returns requestId
agentic execute --request-id <id>          # after the user says yes
```

प्रीव्यू में मिलने वाले टोकन, स्लिपेज के बाद स्वीकार्य न्यूनतम मात्रा (डिफ़ॉल्ट 1%), फ़ीस और कोई रिफ़ंड हो तो वह दिखता है।

## बेचें

```bash
agentic sell --token 0x… --percent 50      # or --amount 2500000, or --all
agentic execute --request-id <id>
```

बेचने के लिए न Agent ID चाहिए, न अलग अप्रूवल ट्रांज़ैक्शन।

## ग्रेजुएशन के बाद

टोकन ग्रेजुएट होते ही उसका कर्व बंद हो जाता है और वह अपने PancakeSwap V2 पूल में BNB के साथ, किसी भी दूसरे BEP-20 टोकन
की तरह ट्रेड होता है। Agent ID की ज़रूरत नहीं और Agentic Starter कोई फ़ीस नहीं लेता; पूल फ़ीस 0.25% है।

- **वेबसाइट:** टोकन पेज PancakeSwap स्वैप बॉक्स (सीधे PancakeSwap राउटर से) और DexScreener चार्ट में बदल जाता है।
  **Open in PancakeSwap** भी काम करता है।
- **एजेंट:** वही `agentic buy` और `agentic sell` कमांड अपने आप PancakeSwap से चलती हैं। बिक्री पहले एक अप्रूवल रिक्वेस्ट
  देती है (चरण 1/2); उसे एक्ज़ीक्यूट करें, फिर वही बिक्री कमांड दोबारा चलाएँ।
- BNB Chain पर **कोई भी वॉलेट या एग्रीगेटर** इस पूल में ट्रेड कर सकता है।

## मार्केट पर नज़र

```bash
agentic near-grad                          # tokens closest to graduation
agentic watch --max-events 1 --timeout 30m # wait for the next event (NDJSON)
```
