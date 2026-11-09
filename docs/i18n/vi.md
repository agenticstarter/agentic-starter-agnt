=== CONFIG ===
description = Tài liệu của Agentic Starter, launchpad dành cho AI agent trên BNB Chain.
guide = Hướng dẫn
forAgents = Cho agent
contracts = Hợp đồng
apps = Ứng dụng
launchpad = Launchpad
presale = Presale
airdrop = Airdrop
whatIs = Agentic Starter là gì
how = Cách hoạt động
wallet = Thiết lập ví agent
launch = Launch token
trading = Mua và bán
ignite = Ignite (đốt + lời nhắn)
fees = Phí
standardTokens = Token tiêu chuẩn
telegram = Cộng đồng Telegram
community = Chương trình cộng đồng
safety = An toàn
listing = Listing và cách dùng vốn
faq = Câu hỏi thường gặp
cli = Tham chiếu CLI
skill = Skill cho agent
signers = Signer
api = API indexer
tokenomics = Tokenomics
presalePage = Presale
airdropPage = Airdrop
staking = Staking
reference = Tham khảo
contractsPage = Smart contract
brand = Bộ nhận diện
risks = Rủi ro
inEnglish = tiếng Anh
outline = Trong trang này
prev = Trang trước
next = Trang sau
updated = Cập nhật lần cuối
top = Lên đầu trang
menu = Menu
appearance = Giao diện
toLight = Chuyển sang giao diện sáng
toDark = Chuyển sang giao diện tối
langMenu = Đổi ngôn ngữ
footer = Tài sản crypto biến động mạnh. Không nội dung nào ở đây là lời khuyên tài chính.
edit = Sửa trang này trên GitHub
search = Tìm kiếm
noResults = Không có kết quả cho
nfTitle = KHÔNG TÌM THẤY TRANG
nfQuote = Trang bạn tìm không tồn tại hoặc đã được chuyển đi.
nfLink = Về trang chủ
start = Bắt đầu tại đây
glossary = Thuật ngữ
installApp = Cài app trên điện thoại

=== FILE index.md ===
---
layout: home
hero:
  name: Agentic Starter
  text: Launchpad do agent của bạn vận hành.
  tagline: Bonding curve chỉ dành cho agent trên BNB Chain. Mọi pool đều ghép cặp với BNB.
  image:
    src: /ai-mark.svg
    alt: Agentic Starter
  actions:
    - theme: brand
      text: Bắt đầu tại đây
      link: /guide/start
    - theme: alt
      text: Cách hoạt động
      link: /guide/how-it-works
    - theme: alt
      text: Tokenomics $AGNT
      link: /token/agnt
features:
  - title: Curve chỉ dành cho agent
    details: Trước khi tốt nghiệp, chỉ ví có Agent ID mới mua được. Không bot sniper, không cá voi mua tay.
  - title: "{{P.mainnet.walletCapBps|pct}} mỗi ví"
    details: "Trên mainnet, không ai giữ quá {{P.mainnet.walletCapBps|pct}} trong tổng cung 1 tỷ của một token trên curve, nên cần ít nhất {{P.mainnet.minWalletsToGraduate}} ví để tốt nghiệp. BNB thừa được hoàn ngay trong cùng giao dịch."
  - title: Tốt nghiệp lên PancakeSwap
    details: "Khi gom đủ {{P.mainnet.graduationTargetBnb}} BNB ({{P.testnet.graduationTargetBnb}} BNB trên testnet), 200 triệu token và số BNB được đưa lên PancakeSwap V2. LP bị đốt, phí curve chấm dứt."
  - title: Phí quay về cộng đồng
    details: "Phí 1% trên curve trả cho người tạo (20%), mua lại và đốt $AGNT (40%), trả BNB cho người stake (30%) và vào quỹ (10%)."
---

=== FILE guide/start.md ===
# Bắt đầu tại đây

Mới làm quen với crypto hoặc Agentic Starter? Trang này đưa bạn từ con số 0 đến token đầu tiên trong khoảng 15 phút.
Mọi thứ dưới đây chạy trên **BNB Chain testnet**, nơi BNB là tiền thử miễn phí, nên bạn không thể mất gì.

<div class="flow">
  <div><b>1. Ví</b><small>Cài một ứng dụng ví</small></div>
  <div class="arrow">→</div>
  <div><b>2. BNB test</b><small>Miễn phí từ faucet</small></div>
  <div class="arrow">→</div>
  <div><b>3. Agent ID</b><small>Miễn phí trên testnet</small></div>
  <div class="arrow">→</div>
  <div><b>4. Giao dịch</b><small>Mua và bán trên curve</small></div>
  <div class="arrow">→</div>
  <div><b>5. Launch</b><small>Token của riêng bạn</small></div>
</div>

## 1. Tạo ví

Ví là ứng dụng giữ tài sản crypto và ký giao dịch. Cài một ví hỗ trợ BNB Chain, như MetaMask, Trust Wallet hoặc Rabby.

Khi tạo ví, ứng dụng hiện một **seed phrase** (12 hoặc 24 từ). Hãy chép ra giấy và cất ngoại tuyến. Ai có nó sẽ điều
khiển được ví của bạn. Không ai từ Agentic Starter sẽ hỏi bạn cụm từ này.

## 2. Nhận BNB test miễn phí

1. Mở [agenticstarter.xyz](https://agenticstarter.xyz) và bấm **Connect**. Trang sẽ yêu cầu ví chuyển sang
   **BNB Smart Chain Testnet** (chain 97). Hãy đồng ý.
2. Sao chép địa chỉ ví (bắt đầu bằng `0x`).
3. Mở faucet của BNB Chain testnet, dán địa chỉ và xin tBNB. Khoảng một hai phút là về. [bnbchain.org/en/testnet-faucet](https://www.bnbchain.org/en/testnet-faucet)

[Trang Start](https://agenticstarter.xyz/start) trên launchpad hướng dẫn đúng các bước này và đánh dấu khi bạn làm xong.

## 3. Nhận Agent ID

Mua trên bonding curve cần một **Agent ID** trong ví. Trên testnet nó miễn phí: mở trang token bất kỳ và bấm
**Get Agent ID**. Bạn chỉ trả một ít gas test.

## 4. Giao dịch đầu tiên

Ngay trên trang token đó, mua một ít rồi bán bớt một phần. Xem thanh tiến độ tiến về PancakeSwap.
Bán thì không bao giờ cần Agent ID.

## 5. Launch token của bạn

Mở [Launch](https://agenticstarter.xyz/launch), điền tên, ký hiệu và logo, rồi bấm **Open in Telegram**.
Bot Agen sẽ launch cho ví của bạn và trả gas. Chi tiết ở [Launch token](/guide/launch#testnet-telegram).

## Tiện thể: airdrop

Mỗi bước trên đều được cộng [điểm airdrop](/token/airdrop): launch, giao dịch, quiz hằng ngày và nhiều hơn nữa.

## Những từ bạn sẽ gặp

Chưa rõ "curve", "tốt nghiệp" hay "gas" là gì? Xem [thuật ngữ](/guide/glossary). Vẫn vướng? Hỏi Agen, bong bóng chat ở
góc mỗi trang, hoặc hỏi trong nhóm Telegram.

=== FILE guide/glossary.md ===
# Thuật ngữ

| Từ | Nghĩa |
| --- | --- |
| **Địa chỉ AAAA** | Mọi token launch ở đây có địa chỉ hợp đồng kết thúc bằng `AAAA`. Đây là dấu hiệu thương hiệu, không phải kiểm tra an toàn: luôn mở token từ trang của chúng tôi. |
| **Agent** | Chương trình AI hành động thay bạn, ở đây là launch và giao dịch token từ ví riêng của nó, trong giới hạn bạn đặt. |
| **Agent ID** | Chứng nhận nằm trong ví agent. Mua trên bonding curve cần có nó. Miễn phí trên testnet. |
| **Ví agent** | Ví riêng mà agent dùng, có hạn mức chi tiêu, để tiền chính của bạn tách biệt. |
| **Airdrop** | $AGNT miễn phí tặng cho các ví đủ điều kiện sau mỗi mùa, theo tỷ lệ điểm. |
| **BNB** | Đồng coin gốc của BNB Chain. Dùng trả gas, và mọi token ở đây đều định giá bằng nó. |
| **BNB Chain** | Blockchain mà Agentic Starter chạy trên đó. |
| **Bonding curve** | Hợp đồng bán token mới theo giá do công thức quyết định: mỗi lần mua giá tăng, mỗi lần bán giá giảm. Không cần sổ lệnh. |
| **Đốt (burn)** | Gửi token tới địa chỉ không ai kiểm soát, để chúng biến mất vĩnh viễn. |
| **Người tạo** | Ví mà token được launch cho. Ví này nhận một phần phí curve cho tới khi tốt nghiệp (hoặc trao phần đó lại cho người giao dịch dưới dạng cashback). |
| **Cashback** | Một tuỳ chọn khi launch: phần phí curve dành cho người tạo được trả lại cho người giao dịch ở mỗi giao dịch. |
| **Featured** | Một vị trí trên Explore trả bằng cách đốt AGNT. Đó là quảng cáo, không phải đánh giá. |
| **Giờ vàng** | Một giờ mỗi ngày trong đó điểm airdrop được nhân đôi. |
| **Phí curve** | 1% mỗi lần mua và bán trên bonding curve. Xem [Phí](/guide/fees). |
| **Faucet** | Trang web phát BNB testnet miễn phí. |
| **Gas** | Khoản phí nhỏ mạng lưới thu cho mỗi giao dịch, trả bằng BNB. |
| **Genesis Creator** | Huy hiệu vĩnh viễn cho người tạo 100 token đầu tiên tốt nghiệp trên mainnet. |
| **Tốt nghiệp** | Lúc curve đầy: token chuyển sang PancakeSwap với thanh khoản bị khoá và curve đóng lại. |
| **Ignite** | Đốt một phần token kèm một lời nhắn công khai. Xem [Ignite](/guide/ignite). |
| **LP token** | Bằng chứng sở hữu một phần pool PancakeSwap. Chúng tôi đốt chúng khi tốt nghiệp nên thanh khoản không bao giờ bị rút. |
| **Mainnet** | Mạng thật, tiền thật. |
| **PancakeSwap** | Sàn lớn nhất trên BNB Chain. Token đã tốt nghiệp giao dịch ở đó. |
| **Presale** | Đợt bán công khai đầu tiên của $AGNT, trước khi list. Xem [Presale](/token/presale). |
| **Seed phrase** | 12 hoặc 24 từ điều khiển một ví. Không bao giờ chia sẻ với bất kỳ ai. |
| **Trượt giá (slippage)** | Mức giá được phép chênh giữa bản xem trước và lúc giao dịch trước khi bị từ chối. |
| **Snapshot** | Thời điểm điểm số bị chốt và phần airdrop được tính. |
| **Staking** | Khoá $AGNT trong hợp đồng để nhận một phần phí bằng BNB. Xem [Staking](/token/staking). |
| **Testnet** | Bản thử của BNB Chain, nơi BNB miễn phí và không có giá trị. |
| **TGE** | Sự kiện phát hành token: ngày $AGNT list trên PancakeSwap và mở claim presale. |
| **Giới hạn mỗi ví** | Lượng tối đa của một token mà một ví được giữ khi token còn trên curve ({{P.mainnet.walletCapBps|pct}} trên mainnet, {{P.testnet.walletCapBps|pct}} trên testnet). |

=== FILE guide/what-is.md ===
# Agentic Starter là gì

::: tip Mới đến?
Trang [Bắt đầu tại đây](/guide/start) đưa bạn từ con số 0 đến token đầu tiên trên testnet trong khoảng 15 phút.
:::

Agentic Starter là launchpad token trên BNB Chain được xây cho AI agent. Agent của bạn launch token, agent của bạn
giao dịch trên bonding curve, còn bạn duyệt từng bước. Khi curve đầy, token được list lên PancakeSwap, ghép cặp với BNB.

Trên mainnet, [agenticstarter.xyz](https://agenticstarter.xyz) không có nút mua. Website hiển thị thị trường, biểu đồ,
holder và các agent; việc giao dịch diễn ra qua [agent CLI](/agents/cli) và một ví agent.

::: tip Testnet
Trên BNB Chain testnet, ai cũng thử được mà không cần agent: launch qua bot Telegram của chúng tôi
([Launch token](/guide/launch#testnet-telegram)), nhận Agent ID testnet miễn phí ở trang token bất kỳ,
rồi mua bằng BNB test từ ví thường.
:::

## Vì sao chỉ dành cho agent

| Vấn đề ở các launchpad thông thường | Agentic Starter xử lý thế nào |
| --- | --- |
| Bot sniper mua ngay block đầu tiên | Chỉ ví có Agent ID mới mua được trên curve |
| Một cá voi gom phần lớn nguồn cung | Mỗi ví giữ tối đa 1% khi token còn trên curve |
| Tạo pool trước khi launch, xả OTC | Chuyển token bị khoá cho đến khi tốt nghiệp |
| Rút thanh khoản sau khi list | LP token bị đốt khi tốt nghiệp |
| Phí không đi đâu cả | Phí 1% trả cho người tạo, đốt $AGNT và trả BNB cho người stake |

## Dành cho ai

- **Người xây agent** muốn agent của mình launch và giao dịch token an toàn, trong giới hạn chủ ví đặt ra.
- **Cộng đồng** muốn một khởi đầu công bằng, không có bot.
- **Người nắm $AGNT**, được chia phần phí từ mọi lần launch.

## Phạm vi giai đoạn 1

Mọi token ghép cặp với **BNB** trên **BNB Chain**. Có thể có thêm cặp và chain khi ví agent phổ biến hơn; cộng đồng sẽ
được hỏi ý kiến trước.

=== FILE guide/how-it-works.md ===
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
[Thiết lập ví agent](/guide/agent-wallet). Trên testnet, ví nào cũng nhận được Agent ID miễn phí.

## 2. Launch trên bonding curve

Launch tạo ra một token với tổng cung cố định **1.000.000.000**:

| Phần | Số lượng | Mục đích |
| --- | --- | --- |
| Curve | 800.000.000 | Bán dọc theo bonding curve |
| Thanh khoản | 200.000.000 | Thêm vào PancakeSwap khi tốt nghiệp |

Địa chỉ token luôn kết thúc bằng **`AAAA`**. Đó là dấu hiệu thương hiệu, không phải bảo đảm, nên luôn mở token từ
[agenticstarter.xyz](https://agenticstarter.xyz) hoặc kiểm tra chúng ở [Site integrity](https://agenticstarter.xyz/integrity).

Giá đi theo công thức tích hằng số: mua đẩy giá lên, bán kéo giá xuống. Người tạo có thể mua lần đầu ngay trong giao
dịch launch, chịu cùng giới hạn mỗi ví như mọi người.

Quy tắc khi token còn trên curve:

- **Mua:** chỉ ví có Agent ID, kiểm tra on-chain ở mỗi lần mua.
- **Bán:** mọi holder, không cần giao dịch approve. Bán không bao giờ bị tạm dừng.
- **Giới hạn mỗi ví:** {{P.mainnet.walletCapBps|pct}} tổng cung mỗi ví trên mainnet ({{P.testnet.walletCapBps|pct}} trên testnet). Lệnh
  mua vượt mức sẽ bị cắt bớt và BNB còn lại được hoàn ngay trong cùng giao dịch. Do giới hạn này, một token cần ít nhất
  **{{P.mainnet.minWalletsToGraduate}} ví khác nhau** để tốt nghiệp trên mainnet
  ({{P.testnet.minWalletsToGraduate}} trên testnet). Trang token cho biết còn cần thêm bao nhiêu holder.
- **Phí:** 1% khi mua và bán. Xem [Phí](/guide/fees).
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
thay đổi đều công khai ở [Site integrity](https://agenticstarter.xyz/integrity).

## Công tắc an toàn

Hợp đồng không có proxy nâng cấp. Owner là multisig 2/2 (Safe). Ví guardian có thể tạm dừng **launch mới và mua**
khi khẩn cấp; chỉ owner mới mở lại được. **Bán, hoàn tiền, claim và tốt nghiệp không bao giờ bị tạm dừng.** Thay một
module (kiểm tra Agent ID, mẫu token, adapter list, escrow phí hoặc đặc quyền staking) phải chờ **timelock công khai 48 giờ**.
Trên mainnet, phí và mục tiêu tốt nghiệp mỗi 7 ngày chỉ được đổi tối đa ±50%, luôn nằm trong giới hạn cứng ghi trong hợp đồng.

=== FILE guide/agent-wallet.md ===
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

Bạn cũng có thể dán địa chỉ ví vào [Agent check](https://agenticstarter.xyz/check) để xem trạng thái Agent ID và tài sản đang giữ.

::: warning
Không bao giờ đưa seed phrase của ví chính cho agent. Hãy dùng một ví agent riêng có giới hạn.
:::

=== FILE guide/launch.md ===
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
claim sẽ quay về người tạo sau 90 ngày. Thay đổi cách chia có hiệu lực 24 giờ sau khi bạn đề xuất. Xem [Phí](/guide/fees#creator-fee-options).

## Testnet: launch bằng bot Telegram {#testnet-telegram}

Trên BNB Chain testnet bạn có thể launch mà không cần thiết lập agent. Bot Agen đóng vai agent và trả gas; ví của bạn
được ghi là người tạo.

1. Mở [Launch](https://agenticstarter.xyz/launch), kết nối ví sẽ sở hữu token và điền tên, ký hiệu, logo, mô tả và link.
2. Bấm **Open in Telegram**. Bot mở ra cùng mã launch và hiện bản xem trước.
3. Chạm **🚀 Launch now**. Vài giây sau bot trả lời kèm địa chỉ token, và token xuất hiện ở trang Explore.

Nếu Telegram không mở, chép dòng `/launch ABCD2345` trên trang và gửi cho bot. Mã có hiệu lực 24 giờ và chỉ dùng
một lần. Mỗi tài khoản Telegram launch được tối đa 3 token mỗi ngày.

Bot không mua giúp bạn. Để mua, mở trang token, nhận Agent ID testnet miễn phí rồi mua bằng BNB test. Trên testnet, token
tốt nghiệp ở mức **{{P.testnet.graduationTargetBnb}} BNB**.

## Sau khi launch

Trang launch sau đó hiện **bộ công cụ sau launch**: bài đăng X soạn sẵn, đoạn văn cho Telegram, ảnh chia sẻ và widget
nhúng cho website của bạn. Ở [My tokens](https://agenticstarter.xyz/me) bạn có thể:

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

=== FILE guide/trading.md ===
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

=== FILE guide/ignite.md ===
# Ignite

Ignite cho phép bất kỳ holder nào đốt một phần token và gắn kèm một lời nhắn công khai ngắn. Token bị gửi vào địa chỉ chết
(`0x…dEaD`) vĩnh viễn, còn lời nhắn được lưu on-chain cạnh lần đốt. Đây là cách mạnh nhất để nói "tôi tin token này":
bạn phải bỏ token ra, nên không thể spam miễn phí.

Nút **Ignite** có ở mọi trang token (cạnh biểu đồ) và ở [bảng Ignite](https://agenticstarter.xyz/ignite), nơi hiện các lần
đốt mới nhất, lớn nhất trên toàn launchpad và những người đốt nhiều nhất.

| | |
| --- | --- |
| Đốt gì | Bất kỳ lượng token nào bạn đang giữ, trước hoặc sau khi tốt nghiệp |
| Lời nhắn | Tối đa 140 byte. Lời nhắn có link sẽ bị ẩn trên website |
| Trả lời | Một ignite có thể trả lời một ignite trước đó (`replyTo`) |
| Chi phí | Số token bạn đốt + gas. Không có phí nền tảng |
| Hợp đồng | `IgniteBoard`, sự kiện `Ignited(id, token, from, amount, message, replyTo)` |

## Từ website

1. Mở một token và bấm **Ignite**.
2. Chọn số lượng (25%, 50%, 100% hoặc tự nhập) và viết lời nhắn.
3. Approve token một lần, rồi xác nhận ignite.

## Từ agent

```bash
agentic ignite --token 0x0905…e50e --percent 10 --message "Shipping v2 this week"
agentic execute --request-id <id>   # gửi approve + ignite
```

Mỗi trang token hiện tổng số đã đốt qua ignite, và tab **Ignites** của token liệt kê mọi lời nhắn.

=== FILE guide/fees.md ===
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
| 20% | **Người tạo** token (hoặc phần chia phí của người tạo), cho tới khi tốt nghiệp. Giao dịch của chính người tạo không được tính. Claim ở [My tokens](https://agenticstarter.xyz/me). Ở **chế độ cashback**, phần này được trả lại cho người giao dịch. |
| 40% | Mua $AGNT trên PancakeSwap và gửi tới địa chỉ đốt |
| 30% | Trả bằng BNB cho [người stake $AGNT](/token/staking), dàn đều trong 7 ngày |
| 10% | Quỹ (multisig 2/2) |

Phần không thuộc người tạo được gom trong launchpad rồi đẩy sang hợp đồng **FeeSplitter**, nơi thực hiện mua lại (tối
đa 1% trượt giá và 1 BNB mỗi lượt), đốt và trả cho người stake. Tổng số được công khai trên
[trang Transparency](https://agenticstarter.xyz/transparency), trong báo cáo hằng tuần và on-chain.

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

=== FILE guide/standard-tokens.md ===
# Token tiêu chuẩn

Cần một token BEP-20 thông thường không có bonding curve, ví dụ cho một cộng đồng, một game hay để thử nghiệm? Hãy tạo
tại [agenticstarter.xyz/create](https://agenticstarter.xyz/create). Ai cũng dùng được; không cần Agent ID. Token tiêu
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

=== FILE guide/telegram.md ===
# Cộng đồng Telegram

| Nơi | Link | Dùng để làm gì |
| --- | --- | --- |
| Kênh | [t.me/agenticstarter](https://t.me/agenticstarter) | Chỉ để thông báo |
| Nhóm | [t.me/agentic_starter](https://t.me/agentic_starter) | Trò chuyện, quiz hằng ngày, hỏi Agen |
| Agen (bot) | [t.me/agenticstarter_bot](https://t.me/agenticstarter_bot) | Mini App airdrop, nhắc nhở, launch trên testnet |

## Tham gia nhóm

Thành viên mới bấm **I'm not a bot** trong tin nhắn chào mừng trước khi được viết. Tin nhắn chào mừng và tin nhắn tham gia
được xoá sau một lúc để giữ cuộc trò chuyện gọn gàng.

## Hỏi Agen

Viết `@Agen` ở bất kỳ đâu trong tin nhắn của bạn trong nhóm, ví dụ `@Agen tốt nghiệp hoạt động thế nào?`. Agen trả lời bằng ngôn ngữ của bạn, dựa trên tài liệu này và số liệu trực tiếp. Agen chỉ trả lời câu hỏi về dự án trong nhóm để mọi người cùng thấy; trong chat riêng Agen giúp việc của riêng bạn (launch, điểm, lời nhắc).

Agen không trả lời những câu hỏi có thể đặt bạn hoặc dự án vào rủi ro (khoá, seed phrase, cách tấn công một hợp đồng),
hay những câu hỏi không liên quan gì đến Agentic Starter. Câu hỏi được hỏi nhiều lần sẽ nhận một link tới trang tài liệu phù hợp.

## Lệnh

| Lệnh | Ở đâu | Tác dụng |
| --- | --- | --- |
| `@Agen <câu hỏi>` | nhóm | Hỏi Agen (`/agen` cũng được) |
| `/points` | chat riêng | Điểm airdrop của bạn và những gì còn thiếu |
| `/earn` | nhóm hoặc chat riêng | Những việc bạn còn làm được để có điểm, nhiều điểm nhất trước |
| `/challenge` | nhóm hoặc chat riêng | Thử thách hôm nay và chuỗi ngày của bạn |
| `/help` | nhóm hoặc chat riêng | Tất cả các lệnh |
| `/watch <token>` | chat riêng | Một tin nhắn ở mốc 80%, 90% và khi tốt nghiệp |
| `/remind presale` · `claim` · `mainnet` | chat riêng | Một tin nhắn khi nó mở |
| `/report` | trả lời một tin nhắn trong nhóm | Báo cho team một vụ lừa đảo hoặc admin giả |
| `/launch <code>` | chat riêng | Launch trên testnet từ website (xem [Launch](/guide/launch#testnet-telegram)) |
| `/faucet` | chat riêng | Nơi nhận BNB test (trang airdrop có thể nạp cho bạn một lần sau Q2) |
| `/settings` | chat riêng | Chọn tin nhắn riêng Agen gửi bạn: hộp quà, nhắc quiz, bản tóm tắt và nhiều hơn |
| `/agentid` | chat riêng | Kiểm tra một Agent ID |

Mỗi tin nhắn riêng của Agen đều có nút **Tắt loại tin này**. Bật lại bất cứ lúc nào bằng `/settings`.

## Quy tắc nhóm

- Cư xử tử tế. Không xúc phạm, không chiến dịch FUD, không spam, không quảng cáo dự án khác.
- Link: chỉ link chính thức (xem [An toàn](/guide/safety)). Các link khác bị xoá.
- Cảnh cáo: xúc phạm nặng bị cảnh cáo ngay; xúc phạm nhẹ lặp lại bị cảnh cáo sau một lần nhắc. **5 lần cảnh cáo** trong
  20 ngày là bị cấm. Mỗi lần cảnh cáo hết hạn sau 20 ngày.
- Admin không bao giờ nhắn riêng trước và không bao giờ hỏi khoá, seed phrase hay BNB.
- Tên giống đội ngũ (admin, support, Agentic Starter, Agen) sẽ bị khoá chat, và tin "DM me", hỏi seed phrase hay "xác minh ví" sẽ bị xoá.

Nếu bạn cho rằng một hành động kiểm duyệt là sai, hãy nhắn cho một admin trong nhóm.

=== FILE guide/community.md ===
# Chương trình cộng đồng

## Hall of Fame

[agenticstarter.xyz/hall-of-fame](https://agenticstarter.xyz/hall-of-fame) lưu giữ lâu dài những token đầu tiên tốt
nghiệp, các agent của tuần và các vị trí dẫn đầu của mọi mùa airdrop. Người tạo 100 token đầu tiên tốt nghiệp trên
mainnet nhận huy hiệu **Genesis Creator** vĩnh viễn.

## Agent của tuần

Mỗi thứ Hai, team chọn một ví agent vì các lần launch và giao dịch của nó trên curve, trên testnet và trên mainnet. Agent
được đăng ở kênh và trên X, hiện trong Hall of Fame, và được cộng điểm airdrop.

## Tổng kết hằng tuần

Mỗi tuần Agen đăng một bản tổng kết ngắn trong nhóm và kênh: thành viên mới, các lần launch, các lần tốt nghiệp và những
agent hàng đầu. [Báo cáo Transparency](https://agenticstarter.xyz/transparency) hằng tuần cho thấy phí, lượng AGNT đã
đốt, BNB đã trả cho người stake và số dư của mọi Safe.

## Đối tác và nhà sáng tạo (chương trình KOL)

Nhà sáng tạo và cộng đồng có mã và link riêng (`agenticstarter.xyz/?ref=<code>`). Team thấy lượt truy cập, các ví đã
tham gia, nhiệm vụ đã xong và BNB presale theo từng mã, và thưởng cho đối tác theo kết quả. Ví của đối tác theo cùng quy
tắc airdrop như mọi người. Để đăng ký, hãy nhắn cho team trong nhóm Telegram hoặc trên X.

## Sticker

[t.me/addstickers/agentic_starter_vibes](https://t.me/addstickers/agentic_starter_vibes)

=== FILE guide/safety.md ===
# An toàn

::: danger Không ai từ Agentic Starter sẽ bao giờ
- nhắn riêng cho bạn trước,
- hỏi seed phrase hoặc private key của bạn,
- yêu cầu bạn gửi BNB để "xác minh", "mở khoá" hay "claim" bất cứ thứ gì.
:::

## Link chính thức

Chỉ những link này là của chúng tôi. Mọi thứ khác thì không.

| | |
| --- | --- |
| Website | agenticstarter.xyz và các subdomain của nó: docs., presale., airdrop., status. |
| X | [@agentic_starter](https://x.com/agentic_starter) |
| Telegram | [kênh](https://t.me/agenticstarter) · [nhóm](https://t.me/agentic_starter) · [Agen](https://t.me/agenticstarter_bot) |
| Mã nguồn | [github.com/agenticstarter](https://github.com/agenticstarter) |
| Khác | [Discord](https://discord.gg/S9GJWW9AE7) · [YouTube](https://www.youtube.com/@AgenticStarter) · [TikTok](https://www.tiktok.com/@agenticstarter) · [Medium](https://medium.com/@agenticstarter) |
| Email bảo mật | security@agenticstarter.xyz |

## Kiểm tra trước khi ký

[Site integrity](https://agenticstarter.xyz/integrity) liệt kê mọi hợp đồng và địa chỉ Safe chính thức, mọi thay đổi
thông số, các link chính thức và bản build hiện tại của từng website. Một bộ theo dõi so sánh các website đang chạy với
các bản build đã công bố; nếu một website thay đổi ngoài lần deploy đã lên kế hoạch, nó sẽ chuyển sang chế độ bảo trì
cho tới khi team kiểm tra. Các tên miền giả đã biết cũng được liệt kê ở đó.

Trước khi bạn approve một giao dịch:

1. Địa chỉ website là `agenticstarter.xyz` (hoặc một subdomain) và có biểu tượng ổ khoá.
2. Hợp đồng mà ví của bạn hiển thị khớp với Site integrity.
3. Bạn không bao giờ approve mức chi tiêu "không giới hạn": website của chúng tôi luôn hỏi đúng số lượng cần dùng.

## Rủi ro của token

Một token launch ở đây vẫn có thể về 0. Token trên curve không có owner, không mint và không thuế, và thanh khoản bị đốt
khi tốt nghiệp, nhưng người tạo vẫn có thể bán token của chính mình như bao người khác. Hãy đọc [Rủi ro](/risks).

## Báo cáo sự cố

- Lỗi bảo mật: [agenticstarter.xyz/security](https://agenticstarter.xyz/security) hoặc security@agenticstarter.xyz.
  Xin hãy cho team thời gian sửa trước khi bạn công bố. Lỗi được xác nhận sẽ được cộng điểm thưởng.
- Lừa đảo hoặc admin giả trên Telegram: trả lời tin nhắn đó bằng `/report`.
- Có gì đó ngừng hoạt động: xem [Status](https://agenticstarter.xyz/status). Tiền on-chain không bao giờ phụ thuộc vào
  máy chủ của chúng tôi; bán, hoàn tiền và claim hoạt động trực tiếp với các hợp đồng.

=== FILE guide/faq.md ===
# Câu hỏi thường gặp

**Mua bằng MetaMask được không?** Trên curve mainnet thì không: mua trên curve cần ví có Agent ID. Sau khi tốt nghiệp thì
được, trên PancakeSwap. Trên testnet Agent ID miễn phí, nên ví nào cũng nhận được và mua được.

**Không có Agent ID có bán được không?** Được. Ai đang giữ token đều bán được trên curve, và bán không bao giờ bị tạm dừng.

**Sao tôi không gửi token cho bạn được?** Chuyển token được mở khi tốt nghiệp. Việc này chặn lách giới hạn mỗi ví và
chặn mở pool trước khi list.

**Lệnh mua trả lại BNB cho tôi. Vì sao?** Bạn chạm giới hạn mỗi ví hoặc curve đã bán hết; số BNB không dùng được hoàn
ngay trong cùng giao dịch.

**Sao địa chỉ token nào cũng kết thúc bằng AAAA?** Đó là dấu hiệu thương hiệu. Bản sao không giả được cả địa chỉ,
nhưng token lừa đảo ở nơi khác vẫn có thể kết thúc bằng AAAA, nên hãy mở token từ trang của chúng tôi hoặc kiểm tra ở
trang [Site integrity](https://agenticstarter.xyz/integrity).

**Tốt nghiệp tốn của tôi bao nhiêu?** Không gì cả, trừ khi lệnh mua của bạn là lệnh lấp đầy curve. Lệnh đó trả thêm gas
để list lên PancakeSwap. Phí tốt nghiệp ({{P.mainnet.graduationFeeBps|pct}} mục tiêu, tối đa 2 BNB) trừ vào số BNB đã
gom, và một phần năm của khoản đó thuộc về người tạo.

**Người tạo kiếm được gì?** 20% của phí curve 1% trên mọi giao dịch của người khác với token đó, bằng BNB, cho tới khi
tốt nghiệp, cộng thưởng tốt nghiệp. Người tạo có thể chia cho tối đa 10 ví hoặc tài khoản X/GitHub, hoặc trả lại cho
người giao dịch dưới dạng cashback. Xem [Phí](/guide/fees).

**Một token cần bao nhiêu holder?** Do giới hạn mỗi ví, cần ít nhất {{P.mainnet.minWalletsToGraduate}} ví khác nhau trên mainnet
({{P.testnet.minWalletsToGraduate}} trên testnet). Trang token đếm ngược còn cần thêm bao nhiêu.

**Người tạo có sửa token sau khi launch được không?** Chỉ logo, mô tả và link, với {{P.mainnet.metaUpdateFeeBnb}} BNB. Mọi thay đổi đều công khai
và trang token hiện thông báo trong 7 ngày. Tên, ký hiệu và tổng cung không bao giờ đổi.

**Team có giữ token của các coin được launch không?** Không. Người tạo mua với cùng giới hạn mỗi ví như mọi người.

**Có thuế token không?** Không. Token được launch và $AGNT đều không có thuế chuyển.

**Team có chặn tôi bán được không?** Không. Guardian có thể tạm dừng launch mới và mua khi khẩn cấp, nhưng bán và
claim không bao giờ bị tạm dừng.

**Admin có nhắn riêng cho tôi không?** Không bao giờ nhắn trước. Không ai từ Agentic Starter sẽ hỏi seed phrase hay
private key của bạn. Xem [An toàn](/guide/safety).

**Tôi có tạo được token thường không qua curve không?** Được, với [nhà máy token tiêu chuẩn](/guide/standard-tokens).

**Xem mã nguồn ở đâu?** [github.com/agenticstarter/agentic-starter-agnt](https://github.com/agenticstarter/agentic-starter-agnt).
Địa chỉ hợp đồng có ở trang [Site integrity](https://agenticstarter.xyz/integrity).

=== FILE token/agnt.md ===
# Tokenomics $AGNT

$AGNT là token nền tảng của Agentic Starter trên BNB Chain (BEP-20). Tổng cung cố định, không mint, không thuế, không owner.

**Tổng cung: 1.000.000.000 AGNT**

| Phân bổ | Tỷ lệ | Số token | Nằm ở đâu | Mở khoá |
| --- | --- | --- | --- | --- |
| Presale | 25% | 250M | Hợp đồng presale | 100% khi claim; AGNT chưa bán bị đốt khi chốt đợt bán |
| Cộng đồng & airdrop | 20% | 200M | Community Safe | Airdrop theo mùa và thưởng sớm của presale |
| Thanh khoản (AGNT/BNB) | 15% | 150M | Liquidity Safe | Thêm vào pool khi list, LP bị đốt |
| Team | 12% | 120M | Hợp đồng vesting | Khoá 12 tháng, sau đó mở dần đều trong 24 tháng |
| Hệ sinh thái & marketing | 12% | 120M | Hợp đồng vesting → Ecosystem Safe | Khoá 3 tháng, sau đó mở dần đều trong 18 tháng |
| Quỹ | 10% | 100M | Hợp đồng vesting → Treasury Safe | Mở dần đều trong 12 tháng |
| Dự phòng listing | 6% | 60M | Liquidity Safe | Tối đa 50M bổ sung cho pool khi list; phần còn lại giữ cho các lần list sau |

Mọi Safe đều là multisig 2/2. Quy tắc khoá và cam kết không bán nằm ở trang [Listing](/token/listing).

## Giá trị đến từ đâu

Mỗi giao dịch trên curve trả phí 1%. [Trong khoản phí đó](/guide/fees):

- **40%** mua lại $AGNT trên PancakeSwap và đốt,
- **30%** trả bằng BNB cho [người stake](/token/staking) $AGNT,
- **20%** cho người tạo token (hoặc trả lại cho người giao dịch ở chế độ cashback), cho tới khi tốt nghiệp,
- **10%** vào quỹ.

## Công dụng khi list

Mọi thứ dưới đây dùng được ngay từ ngày đầu. Không mục nào hứa hẹn về giá.

| Công dụng | Cách thực hiện |
| --- | --- |
| Chia phần phí | Stake AGNT và nhận BNB từ mọi giao dịch trên curve ([Staking](/token/staking)) |
| Launch miễn phí | Người stake có đặc quyền (stake ít nhất 100.000 AGNT trong 7 ngày) không mất phí launch, và được nửa giá ở nhà máy token tiêu chuẩn |
| Bỏ phiếu | Phiếu Snapshot tính theo lượng AGNT đã stake ít nhất 7 ngày |
| Tăng điểm airdrop | Mùa 2 cho người stake một hệ số nhân điểm |
| Featured trên Explore | Đốt AGNT ở bảng Ignite để một token hiện trong hàng Featured (1 giờ cho mỗi 10.000 AGNT, tối đa 24 giờ mỗi lần đốt) |

Mọi thứ khác nằm trong lộ trình và sẽ được đưa ra bỏ phiếu trước.

=== FILE token/presale.md ===
# Presale

Tham gia tại [presale.agenticstarter.xyz](https://presale.agenticstarter.xyz) bằng bất kỳ ví trình duyệt nào hỗ trợ BNB Chain.
Không KYC, không email, chỉ cần một ví. Đây là một vòng công khai duy nhất với **một mức giá cho tất cả mọi người**.

::: warning Chỉ mua trên trang presale
Không bao giờ gửi BNB cho bất kỳ ai, và không bao giờ gửi tới địa chỉ hợp đồng: chuyển khoản trực tiếp sẽ bị từ chối.
Admin không bao giờ nhắn riêng trước. Hãy so địa chỉ hợp đồng với [Site integrity](https://agenticstarter.xyz/integrity).
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
   kiểm tra listing của trang presale. Xem [Listing](/token/listing).

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

=== FILE token/listing.md ===
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
[Site integrity](https://agenticstarter.xyz/integrity) và thông báo trên Telegram. Việc chi tiêu được theo dõi trong
[báo cáo Transparency](https://agenticstarter.xyz/transparency) hằng tuần.

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

- [Liquidity proof](https://agenticstarter.xyz/liquidity): địa chỉ pool, lượng dự trữ trực tiếp và giao dịch đốt LP,
  đọc từ chain.
- Danh sách kiểm tra listing của trang presale: Chốt đợt bán → BNB vào pool → LP bị đốt → mở claim, mỗi bước kèm giao dịch của nó.
- [Địa chỉ Safe](https://agenticstarter.xyz/integrity) cùng mọi thay đổi thông số.

=== FILE token/airdrop.md ===
# Airdrop

Điểm airdrop quyết định phần $AGNT của bạn trong mỗi mùa airdrop. Đó là công dụng duy nhất: điểm không phải token và không
giao dịch được. Tham gia tại [airdrop.agenticstarter.xyz](https://airdrop.agenticstarter.xyz), hoặc mở ngay trong Telegram
từ bot Agen.

## Mùa 1

| | |
| --- | --- |
| Pool | 50 triệu AGNT, tăng lên 75 triệu khi có 5.000 ví đủ điều kiện và 100 triệu khi có 15.000 |
| Ai đủ điều kiện | Ví hoàn thành ba nhiệm vụ bắt buộc (Q1–Q3) |
| Cách chia | `AGNT của bạn = pool × điểm của bạn ÷ tổng điểm các ví đủ điều kiện` |
| Snapshot | Sau khi presale $AGNT kết thúc |
| Ngày | Mọi ngày bắt đầu và kết thúc lúc 00:00 UTC |

<div class="flow">
  <div><b>Đăng nhập</b><small>Kết nối ví và ký một tin nhắn miễn phí</small></div>
  <div class="arrow">→</div>
  <div><b>Q1–Q3</b><small>X, Telegram, chat. Thế là đủ điều kiện</small></div>
  <div class="arrow">→</div>
  <div><b>Kiếm thêm</b><small>Launch, giao dịch, quiz, mời bạn</small></div>
  <div class="arrow">→</div>
  <div><b>Claim</b><small>Sau snapshot</small></div>
</div>

## Nhiệm vụ

| # | Nhiệm vụ | Điểm |
| --- | --- | --- |
| Q1 | Theo dõi @agentic_starter trên X và quote bài ghim, rồi dán link bài quote của bạn. **Bắt buộc** | 300 |
| Q2 | Liên kết Telegram với bot airdrop, rồi ở trong cả kênh lẫn nhóm Telegram (kiểm tra lại mỗi ngày). **Bắt buộc** | 200 |
| Q3 | Chat trong nhóm Telegram: cứ 2 tin = 1 điểm, tối đa 50 mỗi ngày. **Bắt buộc** (ít nhất 1 điểm) | tối đa 50 / ngày |
| Q4 | Trải nghiệm Launchpad trên testnet: tạo 1 token +100 · 5 giao dịch từ 0,005 BNB (trên curve hoặc PancakeSwap) +100 · token của bạn tốt nghiệp +300 (thử thách) | tối đa 500 |
| Q5 | Tham gia presale $AGNT: từ 0,05 BNB +500, sau đó +100 cho mỗi 0,01 BNB | tối đa 10.000 |
| Q6 | Mời người mua presale (từ 0,05 BNB) bằng link presale của bạn | 100 mỗi người, tối đa 50 người |

Q5 và Q6 hiện TBA cho đến khi presale mở. Điểm đã kiếm theo danh sách nhiệm vụ cũ vẫn được giữ. Hoàn thành đủ sáu nhiệm
vụ sẽ có huy hiệu **Season 1 OG**. Mỗi thẻ nhiệm vụ có một nút đưa bạn tới đúng chỗ và tự đánh dấu khi bạn quay lại;
nhiệm vụ đã xong được thu gọn thành một dòng xanh ở cuối.

## Điểm thêm

| Hoạt động | Điểm |
| --- | --- |
| Mời bạn bè hoàn thành Q1–Q3 và có thêm một hoạt động thật (chat 2 ngày khác nhau, 1 giao dịch hoặc mua presale) | 100 mỗi người |
| Bậc mời bạn: 5 / 20 người được tính | +200 / +1.000 |
| Quiz hằng ngày trong nhóm Telegram | 5 mỗi câu đúng, tối đa 45 mỗi ngày |
| Chuỗi quiz (mỗi ngày ít nhất một câu đúng): 7 / 14 / 21 / 28 ngày liên tiếp | +50 / +100 / +300 / +400 |
| Chat trong nhóm 7 ngày liên tiếp | 50 |
| Mua trong 48 giờ đầu của presale | 500 |
| Top 10 tuần, mỗi thứ Hai (chỉ tính chat, quiz, hộp quà, giao dịch và lời mời trong tuần đó) | 300 / 200 / 100, rồi 50 |
| Tiếp nhiên liệu cho bot launch testnet bằng BNB test | 20 mỗi 0,1 tBNB, tối đa 100 |
| Báo lỗi được team xác nhận | 50 đến 500 |
| Thử thách hằng ngày (một việc mỗi ngày, hiện ở thẻ **Today**) | 50 |
| 7 thử thách hằng ngày liên tiếp | 100 |
| Raid trên X (quote một bài team chia sẻ trong khung giờ raid) | đặt theo từng raid, thường là 30 |
| Chia sẻ một cột mốc trên X (Bronze, Silver, Gold, chuỗi 7 ngày, lần tốt nghiệp đầu tiên, Season 1 OG) | 50 đến 100, mỗi mục một lần |
| Một báo cáo lừa đảo được team xác nhận | 10 |

## Giờ vàng

Mỗi ngày có một giờ ngẫu nhiên (không bao giờ sát với một phiên quiz) là **giờ vàng**: mọi điểm bạn kiếm trong giờ đó
được nhân đôi (chat, quiz và giao dịch trên curve; giới hạn hằng ngày vẫn áp dụng). Agen thông báo mỗi giờ vàng ở kênh và
nhóm, và thẻ Today đếm ngược cho nó.

## Agen Gift Hour

Mỗi ngày từ **14:00 đến 15:00 UTC**, mua ít nhất **0.01 BNB** $AGNT testnet trên agenticstarter.xyz. Lệnh mua đầu tiên
trong khung giờ giúp ví của bạn nhận một **hộp quà**: hộp hiện ra trên trang, mở ra là thấy bên trong có bao nhiêu
**$AGNT thật**. Mỗi hộp chứa một lượng khác nhau.

- Mỗi ví một hộp mỗi ngày: tính lệnh mua đầu tiên từ 0.01 BNB trong khung giờ. Hộp chưa mở vẫn chờ bạn trên trang.
- $AGNT từ Gift Hour được trả cùng đợt airdrop, cho các ví đã hoàn thành nhiệm vụ bắt buộc (Q1–Q3) và không bị loại vì
  gian lận.
- Tổng $AGNT từ Gift Hour hiện cạnh điểm của bạn trên trang airdrop và trong lệnh /points của Agen.
- Mở xong, chia sẻ ảnh lên X hoặc vào nhóm Telegram.
- Hết giờ, một trong các hộp của ngày hôm đó được bốc thăm ngẫu nhiên làm **hộp may mắn**: số $AGNT bên trong được nhân
  đôi (x2). Agen công bố trong nhóm và báo cho người trúng.
- 10 phút trước khi hết giờ, Agen đăng nhắc nhở trong nhóm, và app nhắc những ví chưa có hộp.
- **Mục tiêu nhóm:** càng nhiều ví nhận hộp trong ngày, mỗi hộp của ngày đó càng nhiều: 100 ví **+5%**, 250 ví **+10%**, 500 ví **+20%**, cộng sau khi hết giờ. Thanh tiến độ trên dải Gift Hour cho biết còn bao xa tới mốc tiếp theo, và tin Gift Hour của Agen trong nhóm tự cập nhật khi đạt từng mốc.

## Agen Morning Box

Mỗi ngày từ **08:00 đến 10:00 UTC**, mở **app** Agentic Starter khi đã kết nối ví: Morning Box tặng **20 đến 100 điểm
airdrop**, mỗi ngày một hộp. Sau 10:00 UTC hộp biến mất đến sáng hôm sau. Morning Box chỉ có trong
[app đã cài](/guide/install-app), không có trên website.

Mở liên tiếp mỗi ngày để nhận **thưởng chuỗi ngày**: 7 ngày **+100**, 14 ngày **+200**, 21 ngày **+300** và 28 ngày
**+500** điểm, sau đó chu kỳ 4 tuần bắt đầu lại. Bỏ lỡ một ngày thì chuỗi tính lại từ 1.

Khoảng **1 trong 100** Morning Box là **hộp vàng** với **500 điểm**. Khi Morning Box đóng, Agen nêu tên tất cả hộp vàng trong ngày bằng một tin trong nhóm, và các hộp may mắn cùng hộp vàng mới nhất được liệt kê trên trang airdrop.

**Chào mừng quay lại:** nếu bạn không mở Morning Box quá 7 ngày, hộp đầu tiên sau thời gian vắng được **x2**. Agen
gửi lời chào qua tin nhắn riêng.

Trong app, **Menu → Cài đặt → Thông báo** báo bạn khi Gift Hour bắt đầu, khi Morning Box mở, trước quiz 5 phút (mỗi
ngày một lần) và tin airdrop của riêng bạn (đủ điều kiện, bạn bè được tính, chuỗi được thưởng). Tối đa 4 thông báo mỗi
ngày và không bao giờ vào ban đêm theo giờ của bạn. Tin presale luôn được gửi.

## Danh hiệu

| Danh hiệu | Điểm |
| --- | --- |
| Bronze | 1.000 |
| Silver | 5.000 |
| Gold | 10.000 |

Danh hiệu hiện trên hồ sơ, bảng xếp hạng và ảnh chia sẻ của bạn.

## Bắt đầu từ Telegram

Bạn có thể bắt đầu trong Telegram trước khi kết nối ví: mở airdrop từ menu của Agen và điểm chat, quiz của bạn được giữ
trên tài khoản Telegram. Khi sau này bạn liên kết một ví, chúng chuyển sang ví đó.

Bot airdrop [@agenticstarter_airdrop_bot](https://t.me/agenticstarter_airdrop_bot) hiện các nhiệm vụ kèm dấu tích, điểm
của bạn và cách làm từng bước, bằng ngôn ngữ của bạn. Link mời cũng dùng được ở đó
(`t.me/agenticstarter_airdrop_bot?start=ref_MÃCỦABẠN`): bạn bè mở bot bằng link của bạn rồi liên kết ví sẽ được tính là
lời mời của bạn.

Trong bot airdrop bạn còn có thể kiểm tra ví bất kỳ (gửi địa chỉ ví), bật tóm tắt buổi tối lúc 20:00 theo giờ của bạn (mặc định tắt), và chia sẻ thẻ mời vào bất kỳ đoạn chat nào: gõ `@agenticstarter_airdrop_bot` vào ô nhắn tin.

## Mỗi thứ Hai

Mỗi thứ Hai Agen đăng một tin trong nhóm: top 10 của tuần kèm ảnh, những người mời bạn giỏi nhất tuần (top 3 được +500, +300 và +200 điểm; một người bạn được tính khi đăng ký trong tuần đó và đã được tính), chuỗi quiz dài nhất, và cuộc thi meme.

**Thi meme:** trả lời tin thứ Hai bằng meme của bạn về Agentic Starter. Đội ngũ chọn top 3, nhận +500, +300 và +200 điểm vào thứ Hai tuần sau (Telegram của bạn phải liên kết với một ví).

**Mục tiêu chung:** khi có 5.000, 10.000 và 15.000 ví đủ điều kiện, Gift Hour thứ Bảy kế tiếp trả x2: mỗi hộp quà có gấp đôi $AGNT. Thanh tiến độ trên trang airdrop cho biết còn bao xa tới mục tiêu tiếp theo.

## Quiz hằng ngày

Mỗi ngày ba phiên trong nhóm Telegram, lúc **03:00, 14:00 và 19:00 UTC**. Mỗi phiên có ba câu trắc nghiệm về Agentic Starter, mỗi câu năm phút. Trả lời bằng nút A/B/C/D; câu trả lời cuối cùng được tính. 20 câu trả lời đúng đầu tiên của mỗi câu hỏi được 5 điểm. Câu hỏi và đáp án được giữ lại trong nhóm để mọi người học. Muốn được nhắc trước năm phút? Bật thông báo quiz trong app, hoặc chọn các vòng trong `/settings` của Agen.

Mỗi ngày trả lời đúng ít nhất một câu để giữ **chuỗi quiz**: 7, 14, 21 và 28 ngày liên tiếp được +50, +100, +300 và +400 điểm. Bỏ một ngày là tính lại từ đầu. Agen nêu tên bạn trong kết quả của vòng và gửi tin nhắn riêng kèm ảnh để chia sẻ.

## Cách xác minh

1. **Ví.** Kết nối và ký một tin nhắn. Miễn phí và không gửi giao dịch nào.
2. **X (Q1).** Dùng nút Follow và Quote, rồi dán link bài quote của bạn. Phần lớn bài được kiểm tra tự động trong vài giây;
   số còn lại chuyển cho team xem xét nhanh. Link đã được ví khác dùng sẽ bị gắn cờ.
3. **Telegram (Q2).** Chạm **Mở Telegram**, rồi **Start** trong bot airdrop. Bot liên kết tài khoản Telegram với ví và
   hiện nút tham gia kênh và nhóm; thẻ tự đánh dấu. Rời một trong hai sẽ mất điểm.
4. **Chat (Q3).** Agen đếm tin nhắn của bạn. Tin dưới 3 ký tự, tin lặp lại, tin chuyển tiếp và tin gửi trong vòng 5 giây
   sau tin trước không được tính.
5. **On-chain (Q4–Q6)** được đọc tự động từ BNB Chain. Presale mua bằng ví khác được tính sau khi ví đó ký một tin
   nhắn miễn phí để liên kết (thẻ Q5). Một ví presale chỉ liên kết với một ví airdrop, vĩnh viễn.

Mỗi tài khoản X, tài khoản Telegram và ví presale chỉ liên kết được với một ví airdrop.

## Cách kiếm nhiều điểm nhất

1. **Làm xong Q1–Q3 trước.** Trước đó điểm của bạn chưa được tính vào pool.
2. **Q4 Trải nghiệm Launchpad:** tạo một token, làm 5 giao dịch từ 0,005 BNB, và thử giúp token của bạn tốt nghiệp
   (+300).
3. **Mỗi ngày:** chat trong nhóm (tối đa 50), trả lời quiz (tối đa 45) và giữ chuỗi, mở Morning Box trong app, và tham
   gia Gift Hour.
4. **Mời bạn bè** tham gia thật sự: +100 mỗi người, +200 khi đủ 5 người và +1.000 khi đủ 20 người.
5. **Presale:** từ 0,05 BNB, tối đa 10.000 điểm, cộng 100 cho mỗi người mua bạn mời.

Hỏi Agen trong nhóm ("cách kiếm nhiều điểm nhất?") hoặc chạm **Kiếm nhiều điểm nhất** trong bot airdrop: bạn nhận danh
sách chỉ những việc *bạn* còn chưa làm, việc nhiều điểm nhất trước. Điểm Season 1 dừng lúc snapshot (khi presale kết
thúc); điểm sau đó tính cho Season 2.

## Tôi đã sẵn sàng chưa?

Thẻ **Ready to claim?** liệt kê từng yêu cầu cùng những gì còn thiếu và cách sửa, kèm khoảng AGNT ước tính. Khoảng này
phụ thuộc vào pool cuối cùng và số ví đủ điều kiện, nên chỉ là tham khảo, không phải lời hứa.

Trên testnet, các ví đã xong Q2 có thể nhận một lần một khoản BNB test nhỏ (0,005 tBNB), khi faucet còn tiền.

## Kiểm tra ví bất kỳ

Ô **Check** trên trang airdrop cho thấy nhiệm vụ, điểm theo nguồn, điều kiện, thứ hạng và số $AGNT ước tính của bất kỳ ví
nào. Top 100 công khai nằm ngay trên trang đó.

## Claim

1. Khi snapshot, điểm được quy đổi sang $AGNT và một cây Merkle được công bố.
2. Hợp đồng airdrop mở mùa với root đó và một hạn claim.
3. Ví đủ điều kiện claim trên trang airdrop (chỉ tốn gas). Token không được claim trả về pool cộng đồng.

## Chơi đúng luật

Spam, tài khoản farm, wash trading và cụm nhiều tài khoản bị loại trước snapshot. Team xem xét các ví dùng chung một địa
chỉ mạng hoặc giao dịch cùng token trong cùng block, và quyết định thủ công; không có gì bị loại tự động. Mọi thay đổi điểm
thủ công đều được ghi lại kèm lý do.

Nếu ví của bạn bị loại nhầm, hãy bấm **Appeal** trong thẻ Ready và giải thích vài câu. Team trả lời ngay trên thẻ đó.

=== FILE token/staking.md ===
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
[Site integrity](https://agenticstarter.xyz/integrity).

Staking mở cùng lúc $AGNT được list.

| Hàm | Tác dụng |
| --- | --- |
| `stake(amount)` | Gửi AGNT (approve trước) |
| `unstake(amount)` | Rút AGNT, phần thưởng vẫn giữ |
| `claim()` | Rút BNB đã tích luỹ |
| `pendingBnb(address)` | Xem BNB đã tích luỹ |
| `maturedStake(address)` | AGNT được tính cho đặc quyền và phiếu bầu |
| `hasPerks(address)` | True khi vượt ngưỡng đặc quyền |

=== FILE risks.md ===
# Rủi ro

- **Rủi ro thị trường.** Token launch ở đây mang tính đầu cơ và có thể về 0. $AGNT cũng vậy.
- **Rủi ro agent.** Agent hành động tự động. Câu lệnh tệ, lỗi phần mềm hoặc công cụ bị xâm nhập có thể giao dịch theo cách
  bạn không mong muốn. Hãy đặt giới hạn chặt và xem kỹ mọi bản xem trước.
- **Rủi ro smart contract.** Kiểm toán giảm nhưng không loại bỏ khả năng có lỗi.
- **Rủi ro phụ thuộc.** Registry Agent ID, ví, RPC và PancakeSwap là dịch vụ của bên thứ ba.
- **Token giả.** Mọi token ở đây kết thúc bằng `AAAA`, nhưng ai cũng có thể tạo địa chỉ kết thúc bằng AAAA ở nơi khác.
  Hãy mở token từ trang của chúng tôi và kiểm tra link ở trang [Site integrity](https://agenticstarter.xyz/integrity).
- **Testnet chỉ để luyện tập.** BNB và token testnet không có giá trị và không bao giờ được quy đổi thành gì cả.
- **Rủi ro pháp lý.** Việc bán và giao dịch token có thể bị hạn chế ở nơi bạn sống.

Admin không bao giờ nhắn riêng trước và không bao giờ hỏi seed phrase, private key hay "xác minh ví". Chỉ tin các link do
[@agentic_starter](https://x.com/agentic_starter) đăng.

=== FILE guide/install-app.md ===
# Cài app trên điện thoại

Agentic Starter chạy như một app trên điện thoại: toàn màn hình, thanh tab ở dưới, mở bằng một chạm từ màn hình chính.
Đây chính là website nên không cần cập nhật và không cần kho ứng dụng. Ví của bạn vẫn hỏi lại trước mỗi lần ký.

## iPhone và iPad

1. Mở [agenticstarter.xyz](https://agenticstarter.xyz) bằng **Safari**. Nếu đang ở trong Telegram, X hay app ví, hãy mở
   trang bằng Safari trước: các trình duyệt khác trên iPhone có thể không thêm được web app.
2. Chạm **Chia sẻ** (ô vuông có mũi tên) trên thanh của Safari. Nếu không thấy, chạm **⋯** trước.
3. Chạm **Thêm vào MH chính**, rồi **Thêm**.
4. Mở Agentic Starter từ màn hình chính.

## Android

### Chrome

1. Mở [agenticstarter.xyz](https://agenticstarter.xyz) bằng **Chrome**. Nếu link mở ra bên trong Telegram, X hay app ví,
   chạm **⋮** ở góc trên bên phải và chọn **Mở trong Chrome** trước: ở đó không cài được app.
2. Chạm **⋮** ở góc trên bên phải của Chrome.
3. Chạm **Cài đặt ứng dụng** hoặc **Thêm vào màn hình chính**, rồi **Cài đặt**.
4. Mở Agentic Starter từ màn hình chính hoặc danh sách ứng dụng.

Khi Chrome hiện nút **Cài đặt** trên trang hoặc trên thanh địa chỉ, chạm vào đó cũng được.

### Samsung Internet

1. Chạm **☰** ở dưới cùng.
2. Chạm **Thêm trang vào**, rồi **Màn hình chờ**.

### File cài đặt (APK)

Muốn dùng file cài? [Tải agentic-starter.apk](https://agenticstarter.xyz/download/agentic-starter.apk) (phiên bản 1.0, 1,7 MB). App mở chính trang này toàn màn hình qua Chrome, và Android sẽ hỏi một lần để cho phép cài từ trình duyệt. Kiểm tra file trước khi cài:

- SHA-256 của file: `be55ac38090acbcf8ddcbf732463176306ad6a10365d9402b63fac81cd135479`
- SHA-256 chứng chỉ ký: `A2:7C:83:5E:EE:EF:C6:39:0B:CC:79:77:53:29:DD:84:7D:E2:6D:47:93:1E:2A:A5:66:D2:86:76:AD:E9:A7:5B`

## Trong app

- **Ngôn ngữ:** chạm ảnh đại diện ở góc trên bên trái để mở menu, rồi **Tùy chỉnh → Ngôn ngữ** và chọn trong danh
  sách.
- **Khóa ứng dụng:** **Tùy chỉnh → Khóa ứng dụng** yêu cầu Face ID, vân tay, mật mã thiết bị hoặc mật khẩu riêng
  trước khi app mở. Khóa chỉ nằm trên điện thoại của bạn.
- **Ảnh đại diện:** chạm ảnh đại diện trong menu để chọn ảnh hoặc màu. Ảnh chỉ nằm trên điện thoại, không tải lên đâu cả.

## Câu hỏi

**Không thấy Cài đặt ứng dụng.** Cập nhật Chrome trên Play Store rồi tải lại trang. Nếu app đã được cài, cùng menu
đó sẽ hiện **Mở ứng dụng**.

**Có an toàn không?** Đây chính là trang agenticstarter.xyz và không chạm được vào khóa của ví: mọi giao dịch vẫn mở
ví để bạn duyệt. Chỉ cài từ agenticstarter.xyz. Đội ngũ không bao giờ gửi file hay link cài app qua tin nhắn riêng.

**Gỡ app thế nào?** Như mọi app khác: nhấn giữ biểu tượng, rồi **Xóa** hoặc **Gỡ cài đặt**.
