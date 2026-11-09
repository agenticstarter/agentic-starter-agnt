# Staking

Stake $AGNT vào hợp đồng `AGNTStaking` để nhận BNB từ phí launchpad.

- Người stake nhận **30% mọi khoản phí curve**, trả bằng BNB.
- Mỗi khoản BNB đến được **dàn đều trong 7 ngày tiếp theo**, chia cho tất cả những người đang stake trong thời gian đó.
  Stake ngay trước một đợt trả không giành được phần đó.
- BNB đến khi chưa ai stake sẽ chờ và bắt đầu được dàn ra khi người stake đầu tiên tham gia.
- Không khoá: unstake lúc nào cũng được; claim BNB lúc nào cũng được.

## Đặc quyền

AGNT đã được stake **ít nhất 7 ngày** được tính cho đặc quyền. Thêm AGNT sẽ đặt lại đồng hồ 7 ngày cho toàn bộ vị thế,
nên không thể mua đặc quyền chỉ trong một block.

| Đặc quyền | Điều kiện |
| --- | --- |
| Launch miễn phí trên launchpad | Stake 100.000 AGNT trong 7 ngày |
| Nửa giá ở nhà máy token tiêu chuẩn | Stake 100.000 AGNT trong 7 ngày |
| Trọng số phiếu Snapshot | Bất kỳ lượng AGNT nào đã stake 7 ngày (`maturedStake`) |
| Hệ số nhân airdrop Mùa 2 | Công bố cùng Mùa 2 |

Ngưỡng này có thể được Safe của owner thay đổi; mọi thay đổi đều công khai ở
[Site integrity](https://agenticstarter.xyz/integrity?lang=vi).

Staking mở cùng lúc $AGNT được list.

| Hàm | Tác dụng |
| --- | --- |
| `stake(amount)` | Gửi AGNT (approve trước) |
| `unstake(amount)` | Rút AGNT, phần thưởng vẫn giữ |
| `claim()` | Rút BNB đã tích luỹ |
| `pendingBnb(address)` | Xem BNB đã tích luỹ |
| `maturedStake(address)` | AGNT được tính cho đặc quyền và phiếu bầu |
| `hasPerks(address)` | True khi vượt ngưỡng đặc quyền |
