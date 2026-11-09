# Presale

Tham gia tại [presale.agenticstarter.xyz](https://presale.agenticstarter.xyz?lang=vi) bằng bất kỳ ví trình duyệt nào hỗ trợ BNB Chain.
Không KYC, không email, chỉ cần một ví. Đây là một vòng công khai duy nhất với **một mức giá cho tất cả mọi người**.

::: warning Chỉ mua trên trang presale
Không bao giờ gửi BNB cho bất kỳ ai, và không bao giờ gửi tới địa chỉ hợp đồng: chuyển khoản trực tiếp sẽ bị từ chối.
Admin không bao giờ nhắn riêng trước. Hãy so địa chỉ hợp đồng với [Site integrity](https://agenticstarter.xyz/integrity?lang=vi).
:::

## Cách tính giá ("250+")

| Số BNB gom được | Điều gì xảy ra |
| --- | --- |
| Dưới {{P.presale.softCapBnb}} BNB (soft cap) | Đợt bán thất bại. Mọi người mua đều được hoàn 100% BNB trên trang presale |
| Từ {{P.presale.softCapBnb}} đến {{P.presale.floorCapBnb}} BNB | Mọi người mua ở giá sàn: **1 BNB = {{P.presale.floorAgntPerBnb|n}} AGNT**. AGNT chưa bán bị đốt khi chốt đợt bán |
| Trên {{P.presale.floorCapBnb}} BNB | {{P.presale.saleTokens|n}} AGNT được bán sẽ chia theo số BNB đã góp. Mọi người trả cùng một mức giá cuối cùng, cao hơn một chút theo mỗi BNB. Không có hard cap |

Ví dụ khi đợt bán kết thúc, với người mua đã gửi 1 BNB:

| Tổng gom được | 1 BNB mua được |
| --- | --- |
| 120 BNB | 1.000.000 AGNT (130M AGNT chưa bán bị đốt) |
| 250 BNB | 1.000.000 AGNT |
| 500 BNB | 500.000 AGNT |
| 1.000 BNB | 250.000 AGNT |

Trang hiển thị giá trực tiếp, một bộ mô phỏng và vị thế của riêng bạn ("Where is my money?"). Khi đợt bán đang trên
{{P.presale.floorCapBnb}} BNB, số AGNT của bạn vẫn có thể giảm đôi chút khi người khác mua; số BNB của bạn thì giữ nguyên.

| Thông số | Giá trị |
| --- | --- |
| Giá sàn | 1 BNB = {{P.presale.floorAgntPerBnb|n}} AGNT, cho tới khi gom {{P.presale.floorCapBnb}} BNB |
| AGNT để bán | {{P.presale.saleTokens|n}} (25% tổng cung), được nạp vào hợp đồng trước khi đợt bán mở |
| Soft cap | {{P.presale.softCapBnb}} BNB |
| Mỗi ví | Tối thiểu {{P.presale.perWalletBnb.0}} BNB, tối đa {{P.presale.perWalletBnb.1}} BNB tính tổng |
| Thưởng sớm | +{{P.presale.earlyBonusPct}}% AGNT cho lệnh mua trong {{P.presale.earlyBonusHours}} giờ đầu, quỹ thưởng giới hạn {{P.presale.earlyBonusCap|n}} AGNT (chia theo tỷ lệ nếu đầy), trả cùng lúc claim |
| Thời gian | {{P.presale.days}} ngày. Giờ mở và đóng theo UTC, hiện trên trang presale |
| Claim | 100% khi list |

Nếu khoản góp vượt mức tối đa của ví, phần BNB thừa được hoàn ngay trong cùng giao dịch.

## BNB của bạn được bảo vệ thế nào

1. BNB của bạn nằm trong hợp đồng presale. Team không thể rút nó trước khi đợt bán kết thúc.
2. Dưới soft cap, đợt bán thất bại và mọi người mua được hoàn 100% trên trang presale.
3. Sau đợt bán, 80% số BNB được đưa vào pool PancakeSwap khi list và LP bị đốt. Mỗi bước đều có link trên danh sách
   kiểm tra listing của trang presale. Xem [Listing](/vi/token/listing).

## Mời bạn bè

Kết nối ví ở trang presale để lấy link mời của bạn (`presale.agenticstarter.xyz/?ref=<ví của bạn>`). Khi có người mua qua
link đó, hợp đồng presale ghi nhận lời mời cùng giao dịch mua (`contributeWithRef`). Người mua không tốn thêm gì và phần
phân bổ của họ không đổi.

- Mỗi ví mua từ 0,05 BNB qua link của bạn cộng **100 điểm airdrop** vào điểm của bạn (nhiệm vụ Q6, tối đa 50 người
  mua).
- Tự mình tham gia presale là nhiệm vụ Q5: từ 0,05 BNB **+500 điểm**, sau đó +100 cho mỗi 0,01 BNB (tối đa 10.000), và
  mua trong 48 giờ đầu được thêm **500**. Mua bằng ví khác với ví airdrop? Liên kết ví đó một lần trên trang airdrop
  (thẻ Q5).
- Điểm được tính khi ví của bạn hoàn thành ba nhiệm vụ bắt buộc của airdrop.
- Mua qua link của chính mình không được tính, và các lần mua đã hoàn tiền bị trừ.

## Sau đợt bán

1. **Chốt đợt bán**: BNB chuyển vào Treasury Safe và AGNT chưa bán bị đốt.
2. **List** vào ngày hôm sau lúc 14:00 UTC: 80% số BNB được đưa vào pool AGNT/BNB ở mức giá presale cuối cùng, LP bị
   đốt, rồi mở claim.
3. Bạn claim 100% AGNT của mình (và thưởng sớm) trên trang presale.

Mỗi bước được đánh dấu trên danh sách kiểm tra listing của trang presale kèm link tới giao dịch. Hãy bật nhắc nhở ở đó
(Telegram hoặc lịch) để biết khi nào mở claim.

## Hoàn tiền

Khoản góp là cuối cùng, trừ hai trường hợp:

- **Đợt bán thất bại**: kết thúc dưới soft cap. Hoàn tiền tự động mở.
- **Team mở chế độ hoàn tiền** trước khi mở claim. Nếu việc này xảy ra sau khi chốt đợt bán, team phải gửi lại đủ số tiền
  vào hợp đồng presale trước, để mọi người mua đều được hoàn đủ.

Trong cả hai trường hợp, bạn hoàn 100% BNB của mình trên trang presale.
