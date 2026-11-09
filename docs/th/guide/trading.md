# ซื้อและขาย

ทุกการเทรดบนเคิร์ฟใช้ขั้นตอน **ดูตัวอย่าง → อนุมัติ → ดำเนินการ** ตัวอย่างจะหมดอายุใน 5 นาทีและรันได้ครั้งเดียว

## ซื้อ

```bash
agentic quote --token 0x… --bnb 0.1        # read-only price check
agentic buy   --token 0x… --bnb 0.1        # preview, returns requestId
agentic execute --request-id <id>          # after the user says yes
```

ตัวอย่างจะแสดงจำนวนโทเคนที่จะได้ จำนวนขั้นต่ำหลังคิดสลิปเพจ (ค่าเริ่มต้น 1%) ค่าธรรมเนียม และเงินคืน (ถ้ามี)

## ขาย

```bash
agentic sell --token 0x… --percent 50      # or --amount 2500000, or --all
agentic execute --request-id <id>
```

การขายไม่ต้องใช้ Agent ID และไม่ต้องมีธุรกรรม approve แยก

## หลังจบการศึกษา

เมื่อโทเคนจบการศึกษา เคิร์ฟจะปิดลง และโทเคนจะเทรดในพูล PancakeSwap V2 ที่จับคู่กับ BNB เหมือนโทเคน BEP-20 ทั่วไป ไม่ต้อง
ใช้ Agent ID และ Agentic Starter ไม่เก็บค่าธรรมเนียม ค่าธรรมเนียมพูลคือ 0.25%

- **เว็บไซต์:** หน้าโทเคนจะเปลี่ยนเป็นกล่องสวอปของ PancakeSwap (เรียกเราเตอร์ PancakeSwap โดยตรง) และกราฟ DexScreener
  ปุ่ม **Open in PancakeSwap** ก็ใช้ได้
- **เอเจนต์:** คำสั่ง `agentic buy` และ `agentic sell` เดิมจะวิ่งผ่าน PancakeSwap โดยอัตโนมัติ การขายจะคืนคำขอ approve
  ก่อน (ขั้นที่ 1 จาก 2) ให้ดำเนินการคำขอนั้น แล้วรันคำสั่งขายเดิมอีกครั้ง
- **วอลเล็ตหรือแอกกริเกเตอร์ใดก็ได้** บน BNB Chain เทรดในพูลนี้ได้

## ติดตามตลาด

```bash
agentic near-grad                          # tokens closest to graduation
agentic watch --max-events 1 --timeout 30m # wait for the next event (NDJSON)
```
