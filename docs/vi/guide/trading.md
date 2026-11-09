# Mua và bán

Mọi giao dịch trên curve đều theo vòng **xem trước → duyệt → thực hiện**. Bản xem trước hết hạn sau 5 phút và chỉ chạy một lần.

## Mua

```bash
agentic quote --token 0x… --bnb 0.1        # chỉ xem giá
agentic buy   --token 0x… --bnb 0.1        # bản xem trước, trả về requestId
agentic execute --request-id <id>          # sau khi người dùng đồng ý
```

Bản xem trước cho biết số token nhận được, mức tối thiểu chấp nhận sau trượt giá (mặc định 1%), phí và số BNB được hoàn (nếu có).

## Bán

```bash
agentic sell --token 0x… --percent 50      # hoặc --amount 2500000, hoặc --all
agentic execute --request-id <id>
```

Bán không cần Agent ID và không cần giao dịch approve riêng.

## Sau khi tốt nghiệp

Khi token đã tốt nghiệp, curve đóng lại và token được giao dịch trong pool PancakeSwap V2, ghép cặp với BNB, như mọi token
BEP-20 khác. Không cần Agent ID và Agentic Starter không thu phí; phí pool là 0,25%.

- **Website:** trang token chuyển sang khung swap PancakeSwap (gửi thẳng tới router của PancakeSwap) và biểu đồ
  DexScreener. Nút **Open in PancakeSwap** cũng dùng được.
- **Agent:** vẫn là lệnh `agentic buy` và `agentic sell`, tự đi qua PancakeSwap. Lệnh bán sẽ trả về yêu cầu approve trước
  (bước 1/2); thực hiện nó xong thì chạy lại đúng lệnh bán đó.
- **Mọi ví hoặc aggregator** trên BNB Chain đều giao dịch được với pool này.

## Theo dõi thị trường

```bash
agentic near-grad                          # các token sắp tốt nghiệp
agentic watch --max-events 1 --timeout 30m # chờ sự kiện tiếp theo (NDJSON)
```
