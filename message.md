# RTIC 2025 - Nhật ký Hành trình & Dấu ấn Nội bộ (Bản Chi Tiết)

Dữ liệu được tổng hợp tỉ mỉ từ các luồng thảo luận trong hệ thống tin nhắn nội bộ của RTIC (đến 31/12/2025), đặc biệt là từ nhóm chat tổng **HCMUTE RTIC**.

---

## 1. Mốc thời gian & Sự kiện lịch sử

### 📅 Tháng 5/2025: Khai sinh "Pioneers" (PTIC)
- **18/05/2025 (19:42):** Nhóm chat tổng được tạo bởi **Hồ Việt Anh**. Tên ban đầu: **HCMUTE PTIC**.
- **18/05/2025 (19:50):** Buổi họp định hướng (Orientation) đầu tiên qua Google Meet (`inu-etgt-ohp`).
    - **Lời chào của Chủ nhiệm:** "Mình là Hồ Việt Anh, năm 2, mới nhận chức Chủ nhiệm PTIC... Các bạn giới thiệu tên và chuyên ngành muốn theo đuổi nhé."
- **21/05/2025:** Thành lập **Ban Học Thuật PTIC** (Tiền thân Ban Học Thuật RTIC). **Quốc Siêu** nhận nhiệm vụ Trưởng ban.
- **22/05/2025:** Tuyển thành viên Gen 1. Nhận dự án đầu tay từ Đoàn Hội (Thiết kế web giới thiệu).

### 📅 Tháng 6/2025: Cuộc cách mạng "RTIC" & Dự án WebHub
- **Giữa tháng 6:** Tên nhóm chính thức đổi sang **HCMUTE RTIC (Research on Technology and Innovation Club)** để nhấn mạnh yếu tố nghiên cứu chuyên sâu.
- **18/06 - 19/06/2025:** Khởi động các nhánh dự án WebHub (BA, Backend, Frontend).
- **Hạ tầng:** Việt Anh (DevOps) hoàn tất deploy Backend đầu tiên. Swagger API Documentation (`api.hcmutertic.com/swagger-ui`) trở thành kim chỉ nam cho team FE.

### 📅 Tháng 7/2025: Bảo mật & Hợp tác ngoại giao
- **14/07/2025:** Ký kết hợp tác Pentest với CLB An toàn thông tin (**ISC**).
    - **Đối tượng:** `plane.hcmutertic.com` (Quản lý dự án) và `git.hcmutertic.com` (GitLab nội bộ).
    - **Tài khoản test:** `hcmuteisc` / `WrZnfQc86EtEvMB`.
- **20/07/2025:** "Đại hội" Review tiến độ. Mentor yêu cầu khắt khe: "Phải commit thường xuyên", "Clean code", "Ném exception chuẩn theo doc".

### 📅 Tháng 9/2025: RTIC-Ranker & Kỷ nguyên Judge0
- **26/09/2025:** Tìm ra **Judge0** (Open-source) – giải pháp then chốt cho hệ thống chấm bài RTIC-Ranker.
- **Tech Stack bùng nổ:** Redis, RabbitMQ, NestJS, PostgreSQL được đưa vào giảng dạy nội bộ.
- **Văn hóa học thuật:** "Training tẩm uất" – Các buổi training đặc biệt cho thành viên mới trước kỳ phỏng vấn và báo cáo.

---

## 2. Dấu ấn Kỹ thuật & Quy trình (Tech Highlights)

### 🌐 Hệ sinh thái WebHub
- **Quy trình 4 Meeting:**
    1. Meeting 1: Dựng cấu trúc Endpoint.
    2. Meeting 2: Review Logic & Document.
    3. Meeting 3: Review Exception & Clean code.
    4. Meeting 4: Hoàn thiện Service & Controller.
- **Docker hóa:** Thành thạo các lệnh quản trị database (`docker exec -it rtic_postgres psql`).

### 🏆 Hệ thống Ranker
- Chia task cụ thể cho từng thành viên (BE1, BE2, BE3, BE4).
- Tích hợp thành công **Judge0** để thực thi code an toàn.
- Chuẩn bị slide báo cáo học thuật chuyên sâu về kiến trúc hệ thống.

---

## 3. Văn hóa "Ăn ngủ cùng Code" (At 2 AM)

- **Việt Anh (Deep Thinking):** Những dòng triết lý lúc 2h sáng ngày 23/12 về sự công bằng và tính "hơn thua" của con người, truyền cảm hứng cho anh em về một xã hội lý tưởng (dù chỉ là viễn tưởng).
- **Tình đồng chí:**
    - "Vào lại meet xíu nữa do hết time" diễn ra thường xuyên xuyên đêm.
    - Trêu đùa về việc Chương "thả bug" cho Việt Anh fix.
- **Sự kiện cuối năm:**
    - **12/12:** Cả nhóm nín thở hóng kết quả thi đấu học thuật. "Trường mình không top 1 nữa thì thôi luôn!"
    - **26/12:** Thảo luận sôi nổi về việc trường đổi tên thành **Đại học Công nghệ Kỹ thuật TPHCM**.
    - **Workshop 04/01/2026:** Toàn clb chuẩn bị ráo riết cho buổi báo cáo cuối năm, hướng dẫn các bạn năm 1, năm 2 cách thuyết trình "oai và tốt".

---

## 📂 Danh sách các "Đại bản doanh" (Group Chats)
1. **HCMUTE RTIC (General):** Nơi khởi đầu mọi định hướng và triết lý.
2. **WebHub BA/BE/Lead:** Nòng cốt kỹ thuật của CLB.
3. **RTIC-Ranker:** Team "hardcore" với các công nghệ hệ thống.
4. **Ban Học Thuật:** Nâng tầm kiến thức thành viên.
5. **Startup RTIC / Minecraft:** Nơi giải tỏa áp lực và nuôi dưỡng những ý tưởng táo bạo.

---
*Bản báo cáo này tái hiện lại một năm 2025 rực rỡ, nơi cái tên RTIC không chỉ là một CLB, mà là một gia đình của những người đam mê công nghệ.*
