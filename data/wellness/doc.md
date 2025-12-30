# Wellness HCMUTE - Hệ thống Trắc nghiệm & AI Chatbot (Tháng 11/2025)

## 📋 Thông tin Timeline
- **Thời gian:** 20/11/2025 (Official Implementation)
- **Dấu ấn nổi bật:**
    - **Nền tảng Trắc nghiệm Linh hoạt:** Xây dựng hệ thống cho phép tạo và quản lý các bài kiểm tra trực tuyến với cơ chế gán điểm số tùy chỉnh cho từng lựa chọn (hỗ trợ cả điểm âm và dương).
    - **Tự động hóa Quy trình:** Triển khai logic chấm điểm tự động ngay sau khi nộp bài và đồng hồ đếm ngược thời gian làm bài real-time, đảm bảo tính công bằng và chính xác.
    - **Hệ thống Quản lý Tập trung:** Admin Panel chuyên sâu hỗ trợ quản lý câu hỏi, người dùng và trích xuất báo cáo kết quả chi tiết dưới các định dạng CSV, Excel và PDF.

## 🛠 Chi tiết kỹ thuật
- **Kiến trúc:** Cloud Native với Docker và Docker Compose.
- **Backend:** Python (FastAPI), tối ưu hóa tốc độ phản hồi API (< 500ms), xác thực bảo mật qua JWT và Session-based.
- **Frontend:** ReactJS, giao diện responsive hiện đại, tối ưu trải nghiệm người dùng trên cả Mobile và Desktop.
- **Database:** PostgreSQL (sử dụng JSONB) để quản lý dữ liệu linh hoạt như NoSQL nhưng vẫn đảm bảo tính toàn vẹn của dữ liệu quan hệ.

## 🚀 Các Giai đoạn Phát triển (Modules)
- **Module 1:** Thiết lập nền tảng Core Backend & Database.
- **Module 2:** Hoàn thiện chức năng Quản lý Trắc nghiệm cho Admin.
- **Module 3:** Triển khai giao diện làm bài và logic chấm điểm cho Người dùng.
- **Module 4:** Xây dựng hệ thống Báo cáo & Phân tích dữ liệu.
- **Module 5:** Kiểm thử toàn diện (E2E), tối ưu hóa và triển khai Production với Nginx.
