# Launch token

Bảo agent cần launch gì, xem bản xem trước, duyệt. Chỉ vậy thôi.

```text
Launch a token on Agentic Starter: name "Nova Agent", symbol NOVA, description "Scouts fresh launches",
logo https://…/nova.png, X @nova_agent, and buy 0.2 BNB of it in the same transaction.
Show me the preview first and wait for my OK.
```

Agent sẽ chạy:

```bash
agentic create --name "Nova Agent" --symbol NOVA \
  --description "Scouts fresh launches" --logo https://…/nova.png --twitter @nova_agent \
  --telegram https://t.me/nova_agent --buy 0.2
agentic execute --request-id <id>
```

Trước khi hiện bản xem trước, CLI tìm một salt để địa chỉ token kết thúc bằng `AAAA`. Việc này mất vài giây.

Trên website, form launch gồm ba bước. Gõ một câu về ý tưởng của bạn và bấm **Fill it in** để có tên, ký hiệu và mô tả
bạn có thể sửa. Thả logo vào: logo được ghim lên IPFS và câu lệnh dùng link `ipfs://` (từ CLI, `--logo ./nova.png` làm
điều tương tự). Sau đó chọn nơi phí người tạo được trả, kiểm tra thẻ xem trước và chép câu lệnh cho agent của bạn. Bộ
mô phỏng curve cho thấy giá và vốn hoá ở từng giai đoạn.

| Trường | Giới hạn |
| --- | --- |
| Tên | 1–32 ký tự |
| Ký hiệu | 2–10 chữ in hoa hoặc chữ số. Các ticker như AGNT, BNB, BTC, ETH, USDT, USDC và CAKE bị giữ riêng |
| Bảng chữ cái của tên và ký hiệu | Mỗi tên chỉ dùng một bảng chữ cái, nên các chữ trông giống nhau từ bảng chữ cái khác bị từ chối |
| Metadata (mô tả, URL logo, link) | lưu on-chain, tối đa ~1 KB |
| Logo | URL `https://` / `ipfs://`, hoặc file PNG, JPG, GIF, WebP trên máy tối đa 1 MB (tải lên IPFS) |
| Lần mua đầu | tuỳ chọn, cần Agent ID, áp dụng giới hạn mỗi ví |
| X | một link hoặc `@handle` (lưu dưới dạng handle) |
| Telegram | chỉ nhận link `t.me` |
| Phí launch | {{P.mainnet.launchFeeBnb}} BNB trên mainnet, miễn phí trên testnet và cho người stake AGNT có đặc quyền, cộng gas |
| Cặp | BNB. Các cặp khác sẽ có sau |

Token không có thuế, không có hàm mint và không có owner.

## Phí người tạo đi đâu

| Tuỳ chọn | CLI | Website |
| --- | --- | --- |
| Ví launch của bạn (mặc định) | — | để trống ô ví nhận phí |
| Một ví khác | `--fee-to 0xWallet:100` | ô **Creator fee wallet** |
| Chia cho tối đa 10 người nhận | `--fee-to 0xA:60,0xB:40` | đặt ở My tokens sau khi launch |
| Một tài khoản X hoặc GitHub | `--fee-to 0xA:80,x:@alice:20` | đặt ở My tokens sau khi launch |
| Cashback cho người giao dịch | `--cashback` | **Reward mode → Cashback** |

Phần của tài khoản nằm trong escrow cho đến khi chủ tài khoản chứng minh quyền sở hữu và liên kết một ví; phần chưa ai
claim sẽ quay về người tạo sau 90 ngày. Thay đổi cách chia có hiệu lực 24 giờ sau khi bạn đề xuất. Xem [Phí](/vi/guide/fees#creator-fee-options).

## Testnet: launch bằng bot Telegram {#testnet-telegram}

Trên BNB Chain testnet bạn có thể launch mà không cần thiết lập agent. Bot Agen đóng vai agent và trả gas; ví của bạn
được ghi là người tạo.

1. Mở [Launch](https://agenticstarter.xyz/launch?lang=vi), kết nối ví sẽ sở hữu token và điền tên, ký hiệu, logo, mô tả và link.
2. Bấm **Open in Telegram**. Bot mở ra cùng mã launch và hiện bản xem trước.
3. Chạm **🚀 Launch now**. Vài giây sau bot trả lời kèm địa chỉ token, và token xuất hiện ở trang Explore.

Nếu Telegram không mở, chép dòng `/launch ABCD2345` trên trang và gửi cho bot. Mã có hiệu lực 24 giờ và chỉ dùng
một lần. Mỗi tài khoản Telegram launch được tối đa 3 token mỗi ngày.

Bot không mua giúp bạn. Để mua, mở trang token, nhận Agent ID testnet miễn phí rồi mua bằng BNB test. Trên testnet, token
tốt nghiệp ở mức **{{P.testnet.graduationTargetBnb}} BNB**.

## Sau khi launch

Trang launch sau đó hiện **bộ công cụ sau launch**: bài đăng X soạn sẵn, đoạn văn cho Telegram, ảnh chia sẻ và widget
nhúng cho website của bạn. Ở [My tokens](https://agenticstarter.xyz/me?lang=vi) bạn có thể:

| Việc | Chi tiết |
| --- | --- |
| Theo dõi tiến độ | Tiến độ curve, BNB đã gom, holder |
| Claim thưởng người tạo | 20% mỗi khoản phí curve trên token của bạn, trả bằng BNB, cho tới khi tốt nghiệp, cộng thưởng tốt nghiệp |
| Cập nhật thông tin | Đổi logo, mô tả và link với {{P.mainnet.metaUpdateFeeBnb}} BNB trên mainnet. Tên và ký hiệu không bao giờ đổi. Holder thấy thông báo trong 7 ngày và toàn bộ lịch sử luôn công khai. |
| Chia phí | Đề xuất cách chia mới; có hiệu lực sau 24 giờ |
| Chuyển quyền người tạo | Đề xuất một ví người tạo mới; ví đó tiếp quản khi chấp nhận trên trang token. Thưởng đã kiếm vẫn do bạn claim. |
| Phần của người tạo | Nơi có áp dụng (hiện là testnet), claim phần đã mở khoá sau khi tốt nghiệp |
| Xác minh X | Liên kết tài khoản X để hiện huy hiệu người tạo đã xác minh trên trang token |

Người tạo 100 token đầu tiên tốt nghiệp trên mainnet nhận huy hiệu **Genesis Creator** vĩnh viễn.
