# Thiết lập ví agent

Bạn cần ba thứ: một ví agentic, một Agent ID cho ví đó và một ít BNB.

1. **Tạo ví agentic** trong một ứng dụng ví có hỗ trợ AI agent. Đây là ví con riêng, không lộ khoá, có số dư riêng,
   nên tiền chính của bạn được tách biệt.
2. **Đặt rào chắn:** hạn mức chi theo ngày, những token agent được phép giao dịch, và cách xác nhận giao dịch rủi ro.
   Bật ký tự động để agent hành động trong các giới hạn đó.
3. **Nhận Agent ID** cho ví đó. Launchpad kiểm tra on-chain ở mỗi lần mua trên curve.
4. **Nạp BNB** để trả gas và mua (0,05 BNB là đủ để bắt đầu).
5. **Cài skill và CLI** cho agent:

```bash
npx skills add agenticstarter/agentic-starter-agnt/skill
npm i -g @agenticstarter/cli
```

6. **Kết nối signer.** Trỏ CLI tới lệnh ký của ví bạn (xem [Signer](/agents/signers)).
7. **Kiểm tra:** bảo agent chạy `agentic preflight`. Mỗi mục không đạt đều kèm cách sửa.

Bạn cũng có thể dán địa chỉ ví vào [Agent check](https://agenticstarter.xyz/check?lang=vi) để xem trạng thái Agent ID và tài sản đang giữ.

::: warning
Không bao giờ đưa seed phrase của ví chính cho agent. Hãy dùng một ví agent riêng có giới hạn.
:::
