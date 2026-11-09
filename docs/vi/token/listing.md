# Listing và cách dùng vốn

$AGNT được list trên PancakeSwap V2 vào ngày sau khi presale kết thúc, lúc 14:00 UTC.

## Quy tắc listing

| | |
| --- | --- |
| Giá list | Giá presale cuối cùng. Người mua presale và những người mua đầu tiên trên thị trường trả cùng một giá |
| BNB vào pool | {{P.presale.listing.bnbToPoolPct}}% tổng số BNB đã gom |
| AGNT vào pool | 80% số BNB đã gom ÷ giá cuối cùng: {{P.presale.listing.maxPoolAgnt|n}} AGNT khi gom được {{P.presale.floorCapBnb}} BNB trở lên, 800.000 AGNT cho mỗi BNB nếu dưới mức đó |
| AGNT lấy từ đâu | Liquidity Safe (150M) cộng tối đa 50M trong 60M dự phòng listing. AGNT không cần dùng vẫn nằm ở Liquidity Safe |
| LP token | Bị đốt ngay trong cùng bước. Không ai có thể rút thanh khoản |

{{P.presale.listing.bnbToTreasuryPct}}% BNB còn lại vào Treasury Safe.

## Cách dùng vốn (phần 20% của Treasury)

| Dùng cho | Tỷ lệ |
| --- | --- |
| Bảo mật và kiểm toán | {{P.presale.useOfFundsPct.security}}% |
| Listing trên sàn | {{P.presale.useOfFundsPct.listing}}% |
| Marketing và cộng đồng | {{P.presale.useOfFundsPct.marketing}}% |
| Vận hành (máy chủ, API) | {{P.presale.useOfFundsPct.operations}}% |

Cách chia này có thể chỉnh cho đến khi presale mở. Sau đó, mọi thay đổi đều được ghi công khai ở
[Site integrity](https://agenticstarter.xyz/integrity?lang=vi) và thông báo trên Telegram. Việc chi tiêu được theo dõi trong
[báo cáo Transparency](https://agenticstarter.xyz/transparency?lang=vi) hằng tuần.

## Cam kết khoá

| Phân bổ | Quy tắc |
| --- | --- |
| Team (120M) | Hợp đồng vesting: khoá 12 tháng, sau đó mở dần đều trong 24 tháng. Owner chỉ có thể lùi ngày bắt đầu |
| Quỹ và Hệ sinh thái | Không bán ra thị trường trước thời điểm list + 6 tháng |
| Thanh khoản (Liquidity Safe) | Chỉ dùng cho pool và các lần list |
| Cộng đồng (Community Safe) | Chỉ dùng cho airdrop và thưởng sớm của presale |

Nếu bất kỳ Safe nào của dự án chuyển AGNT tới một cặp DEX, một router hoặc một địa chỉ nạp tiền sàn đã biết, một cảnh báo
công khai sẽ tự động được gửi tới kênh và nhóm Telegram.

## Tự kiểm tra

- [Liquidity proof](https://agenticstarter.xyz/liquidity?lang=vi): địa chỉ pool, lượng dự trữ trực tiếp và giao dịch đốt LP,
  đọc từ chain.
- Danh sách kiểm tra listing của trang presale: Chốt đợt bán → BNB vào pool → LP bị đốt → mở claim, mỗi bước kèm giao dịch của nó.
- [Địa chỉ Safe](https://agenticstarter.xyz/integrity?lang=vi) cùng mọi thay đổi thông số.
