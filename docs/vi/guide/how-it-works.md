# Cách hoạt động

Mọi token đi cùng một con đường: **launch → bonding curve → tốt nghiệp lên PancakeSwap**.

<div class="flow">
  <div><b>Launch</b><small>Tạo 1 tỷ token. 800 triệu lên curve, 200 triệu giữ lại làm thanh khoản.</small></div>
  <div class="arrow">→</div>
  <div><b>Bonding curve</b><small>Agent mua, ai cũng bán được. Mỗi lần mua giá tăng. Phí 1% mỗi giao dịch.</small></div>
  <div class="arrow">→</div>
  <div><b>Tốt nghiệp</b><small>Đủ {{P.mainnet.graduationTargetBnb}} BNB, token lên PancakeSwap. LP bị đốt, curve đóng.</small></div>
</div>

## 1. Kết nối ví agent

Agent hành động qua một ví agent với hạn mức hằng ngày do bạn đặt. Ví cần có **Agent ID** để mua trên curve. Xem
[Thiết lập ví agent](/vi/guide/agent-wallet). Trên testnet, ví nào cũng nhận được Agent ID miễn phí.

## 2. Launch trên bonding curve

Launch tạo ra một token với tổng cung cố định **1.000.000.000**:

| Phần | Số lượng | Mục đích |
| --- | --- | --- |
| Curve | 800.000.000 | Bán dọc theo bonding curve |
| Thanh khoản | 200.000.000 | Thêm vào PancakeSwap khi tốt nghiệp |

Địa chỉ token luôn kết thúc bằng **`AAAA`**. Đó là dấu hiệu thương hiệu, không phải bảo đảm, nên luôn mở token từ
[agenticstarter.xyz](https://agenticstarter.xyz?lang=vi) hoặc kiểm tra chúng ở [Site integrity](https://agenticstarter.xyz/integrity?lang=vi).

Giá đi theo công thức tích hằng số: mua đẩy giá lên, bán kéo giá xuống. Người tạo có thể mua lần đầu ngay trong giao
dịch launch, chịu cùng giới hạn mỗi ví như mọi người.

Quy tắc khi token còn trên curve:

- **Mua:** chỉ ví có Agent ID, kiểm tra on-chain ở mỗi lần mua.
- **Bán:** mọi holder, không cần giao dịch approve. Bán không bao giờ bị tạm dừng.
- **Giới hạn mỗi ví:** {{P.mainnet.walletCapBps|pct}} tổng cung mỗi ví trên mainnet ({{P.testnet.walletCapBps|pct}} trên testnet). Lệnh
  mua vượt mức sẽ bị cắt bớt và BNB còn lại được hoàn ngay trong cùng giao dịch. Do giới hạn này, một token cần ít nhất
  **{{P.mainnet.minWalletsToGraduate}} ví khác nhau** để tốt nghiệp trên mainnet
  ({{P.testnet.minWalletsToGraduate}} trên testnet). Trang token cho biết còn cần thêm bao nhiêu holder.
- **Phí:** 1% khi mua và bán. Xem [Phí](/vi/guide/fees).
- **Chuyển token:** bị khoá. Token chỉ đi giữa curve và người giao dịch, nên không ai lách được giới hạn hay mở pool sớm.

Mỗi token giữ nguyên thông số lúc launch (mục tiêu tốt nghiệp, giới hạn mỗi ví, phí tốt nghiệp và thưởng). Nếu team đổi
một thông số sau đó, thay đổi chỉ áp dụng cho token mới.

## 3. Tốt nghiệp lên PancakeSwap

Khi curve đạt mục tiêu (**{{P.mainnet.graduationTargetBnb}} BNB** trên mainnet,
**{{P.testnet.graduationTargetBnb}} BNB** trên testnet), việc tốt nghiệp sẽ:

1. mở khoá chuyển token vĩnh viễn;
2. thu phí tốt nghiệp: {{P.mainnet.graduationFeeBps|pct}} mục tiêu, tối đa 2 BNB
   ({{P.mainnet.graduationFeeBnb}} BNB ở mục tiêu mainnet). Một phần năm của khoản này ({{P.mainnet.creatorBonusBps|pct}}) là
   **thưởng tốt nghiệp cho người tạo**, phần còn lại vào quỹ;
3. thêm 200 triệu token thanh khoản và phần BNB còn lại vào PancakeSwap V2, mint LP thẳng tới địa chỉ đốt, nên thanh
   khoản bị khoá vĩnh viễn.

Lệnh mua lấp đầy curve sẽ kích hoạt việc tốt nghiệp. Nếu không (ví dụ khi token có thời gian curve tối thiểu), bất kỳ ai
cũng gọi được `graduate(token)` khi đã đạt mục tiêu. Giá list bằng giá cuối cùng trên curve, nên không có cú nhảy giá.
Sau khi tốt nghiệp không còn phí nền tảng và ai cũng giao dịch được trên PancakeSwap, có hay không có Agent ID.

::: tip Lệnh mua lấp đầy curve trả chi phí list
Lệnh mua cuối cùng chạy việc chuyển sang PancakeSwap nên tốn nhiều gas hơn. CLI đánh dấu trường hợp này là `nearGraduation`.
:::

## Phần của người tạo (testnet)

Trên testnet, người tạo nhận {{P.testnet.creatorAllocBps|pct}} tổng cung với giá launch, nằm ngoài giới hạn mỗi ví. Phần này do
launchpad giữ, không bán được trước khi tốt nghiệp, và được mở dần đều trong {{P.testnet.creatorAllocUnlockDays}} ngày sau khi
tốt nghiệp. Trên mainnet, hiện nó được đặt ở mức {{P.mainnet.creatorAllocBps|pct}}; team chỉ có thể tăng cho token mới, và mọi
thay đổi đều công khai ở [Site integrity](https://agenticstarter.xyz/integrity?lang=vi).

## Công tắc an toàn

Hợp đồng không có proxy nâng cấp. Owner là multisig 2/2 (Safe). Ví guardian có thể tạm dừng **launch mới và mua**
khi khẩn cấp; chỉ owner mới mở lại được. **Bán, hoàn tiền, claim và tốt nghiệp không bao giờ bị tạm dừng.** Thay một
module (kiểm tra Agent ID, mẫu token, adapter list, escrow phí hoặc đặc quyền staking) phải chờ **timelock công khai 48 giờ**.
Trên mainnet, phí và mục tiêu tốt nghiệp mỗi 7 ngày chỉ được đổi tối đa ±50%, luôn nằm trong giới hạn cứng ghi trong hợp đồng.
