# Token tiêu chuẩn

Cần một token BEP-20 thông thường không có bonding curve, ví dụ cho một cộng đồng, một game hay để thử nghiệm? Hãy tạo
tại [agenticstarter.xyz/create](https://agenticstarter.xyz/create?lang=vi). Ai cũng dùng được; không cần Agent ID. Token tiêu
chuẩn không bao giờ có địa chỉ `AAAA`, nên không thể bị nhầm với token của launchpad.

| Loại | Bạn nhận được | Phí |
| --- | --- | --- |
| Basic | Tổng cung cố định, không owner, không mint, không thuế. Địa chỉ ngẫu nhiên | {{P.mainnet.standardTokenFeesBnb.random}} BNB |
| Basic, địa chỉ kết thúc bằng 9999 | Như trên, với địa chỉ `…9999` được tìm ngay trong trình duyệt của bạn | {{P.mainnet.standardTokenFeesBnb.vanity9999}} BNB |
| Advanced | Một owner có thể từ bỏ quyền, giới hạn mint tuỳ chọn (tổng cung tối đa đặt khi tạo) | {{P.mainnet.standardTokenFeesBnb.advanced}} BNB |
| Advanced kèm thuế chuyển | Như trên, cộng thuế tối đa 5% gửi tới ví bạn chọn. Thuế chỉ có thể giảm | {{P.mainnet.standardTokenFeesBnb.advancedTax}} BNB |

Người stake AGNT có đặc quyền trả một nửa. Phí vào Quỹ.

## Thêm thanh khoản

Bước thứ hai của trang này thêm token của bạn và BNB vào PancakeSwap V2 trong một giao dịch, và xử lý LP token:

- **Đốt**: LP được gửi tới địa chỉ chết. Không ai có thể rút thanh khoản.
- **Khoá**: LP do hợp đồng `LiquidityHelper` giữ ít nhất 30 ngày, sau đó trả lại cho bạn. Ai cũng kiểm tra được việc
  khoá trên explorer.

Giá khởi điểm bằng số BNB bạn thêm chia cho số token bạn thêm. Hãy thêm một lượng nhỏ trước nếu bạn chưa chắc.
