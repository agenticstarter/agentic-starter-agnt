# Phí

| Khi nào | Phí | Đi đâu |
| --- | --- | --- |
| Launch token | {{P.mainnet.launchFeeBnb}} BNB trên mainnet, miễn phí trên testnet (+ gas). Miễn phí cho người stake AGNT có đặc quyền | Quỹ |
| Mua hoặc bán trên curve | 1% | Chia như bên dưới |
| Tốt nghiệp | {{P.mainnet.graduationFeeBps|pct}} mục tiêu, tối đa 2 BNB ({{P.mainnet.graduationFeeBnb}} BNB ở mức {{P.mainnet.graduationTargetBnb}} BNB), trừ vào số BNB đã gom | {{P.mainnet.creatorBonusBps|pct}} cho người tạo, phần còn lại vào quỹ |
| Cập nhật logo, mô tả hoặc link của token | {{P.mainnet.metaUpdateFeeBnb}} BNB trên mainnet, miễn phí trên testnet | Quỹ |
| Giao dịch sau tốt nghiệp (PancakeSwap) | Không có phí nền tảng (PancakeSwap tự thu 0,25%) | — |

## Phí curve 1% đi đâu

<div class="split"><span class="s1" style="width:20%">20%</span><span class="s2" style="width:40%">40%</span><span class="s3" style="width:30%">30%</span><span class="s4" style="width:10%">10%</span></div>
<div class="split-legend"><span><i style="background:#ffc93c"></i>Người tạo token</span><span><i style="background:#b79cff"></i>Mua lại và đốt $AGNT</span><span><i style="background:#7ed6a8"></i>Người stake $AGNT, bằng BNB</span><span><i style="background:#c9c8cf"></i>Quỹ</span></div>

| Tỷ lệ | Đi đâu |
| --- | --- |
| 20% | **Người tạo** token (hoặc phần chia phí của người tạo), cho tới khi tốt nghiệp. Giao dịch của chính người tạo không được tính. Claim ở [My tokens](https://agenticstarter.xyz/me?lang=vi). Ở **chế độ cashback**, phần này được trả lại cho người giao dịch. |
| 40% | Mua $AGNT trên PancakeSwap và gửi tới địa chỉ đốt |
| 30% | Trả bằng BNB cho [người stake $AGNT](/vi/token/staking), dàn đều trong 7 ngày |
| 10% | Quỹ (multisig 2/2) |

Phần không thuộc người tạo được gom trong launchpad rồi đẩy sang hợp đồng **FeeSplitter**, nơi thực hiện mua lại (tối
đa 1% trượt giá và 1 BNB mỗi lượt), đốt và trả cho người stake. Tổng số được công khai trên
[trang Transparency](https://agenticstarter.xyz/transparency?lang=vi), trong báo cáo hằng tuần và on-chain.

## Các tuỳ chọn phí người tạo {#creator-fee-options}

Khi launch, người tạo chọn một trong hai chế độ:

| Chế độ | 20% của người tạo sẽ ra sao |
| --- | --- |
| **Creator fees** (mặc định) | Trả cho ví người tạo, hoặc chia cho tối đa 10 người nhận. Người nhận có thể là ví hoặc một **tài khoản X hoặc GitHub**; phần của tài khoản nằm trong escrow cho đến khi chủ tài khoản liên kết một ví (nếu không ai claim thì quay về người tạo sau 90 ngày). |
| **Cashback** | Trả lại cho người giao dịch ở mỗi lần mua và bán, nên người giao dịch trả ít phí hơn. |

Cách chia phí mới có hiệu lực 24 giờ sau khi được đề xuất, để holder thấy trước thay đổi. Chuyển vai trò người tạo sang
ví khác là chuyển hai bước: ví mới phải chấp nhận.

## Giới hạn owner không thể vượt

Phí chỉ được điều chỉnh trong giới hạn ghi cứng trong hợp đồng: phí tốt nghiệp tối đa 5% mục tiêu và không bao giờ quá
2 BNB, thưởng tốt nghiệp cho người tạo tối đa 30% khoản phí đó, mục tiêu tốt nghiệp tối đa 50 BNB, phí launch tối đa
0,02 BNB, phí cập nhật tối đa 0,05 BNB và phần của người tạo tối đa 30%. Trên mainnet, mỗi mục này mỗi 7 ngày chỉ được
đổi tối đa ±50%. Bản thân phí curve 1% là cố định.
