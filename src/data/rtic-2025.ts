export interface ProjectSummary {
    id: string;
    time: string;
    month: string;
    title: string;
    shortDesc: string;
    highlights: string[];
    techStack?: string[];
    image?: string;
    author?: string;
    link?: string;
}

export interface ClubHighlight {
    title: string;
    content: string;
    time: string;
}

export interface RTICData {
    clubInfo: {
        name: string;
        fullName: string;
        vision: string;
        stats: {
            projects: number;
            months: number;
            impact: string;
        };
    };
    projects: ProjectSummary[];
    clubHighlights: ClubHighlight[];
}

export const RTIC_2025_DATA: RTICData = {
    clubInfo: {
        name: "HCMUTE RTIC",
        fullName: "Research on Technology and Innovation Club",
        vision: "Dẫn dắt xu hướng đổi mới sáng tạo",
        stats: { projects: 14, months: 12, impact: "∞" }
    },
    projects: [
        {
            id: "founding-ptic",
            time: "18/05/2025",
            month: "Tháng 5",
            title: "Sự ra đời của HCMUTE PTIC",
            shortDesc: "Vào đúng 19:42, nhóm chat tổng được thành lập, đánh dấu sự ra đời của CLB với tên gọi ban đầu là PTIC.",
            highlights: [
                "19:50: Buổi Orientation đầu tiên qua Google Meet (inu-etgt-ohp)",
                "Chủ nhiệm Hồ Việt Anh chính thức ra mắt và định hướng 'Pioneers'",
                "Bắt đầu hành trình kết nối những tâm hồn đam mê công nghệ"
            ],
            image: "/media/changename.png",
            techStack: ["Founding", "Orientation", "Pioneers"],
            link: "https://facebook.com/hcmute.rtic"
        },
        {
            id: "ban-hoc-thuat-founding",
            time: "21/05/2025",
            month: "Tháng 5",
            title: "Thành lập Ban Học Thuật",
            shortDesc: "Cấu trúc chuyên môn đầu tiên của CLB được hình thành nhằm nâng tầm kiến thức thành viên.",
            highlights: [
                "Quốc Siêu được bổ nhiệm làm Trưởng ban Học Thuật đầu tiên",
                "Xác định lộ trình 'Training tẩm uất' cho Gen 1",
                "Nhận dự án thực tế đầu tiên từ Đoàn Hội"
            ],
            techStack: ["Academic", "Training"],
            link: "https://facebook.com/hcmute.rtic"
        },
        {
            id: "rtic-recruitment-gen1",
            time: "22/05/2025",
            month: "Tháng 5",
            title: "Tuyển quân RTIC Gen 1",
            shortDesc: "Đợt tuyển thành viên đầu tiên chính thức dưới tên gọi RTIC với 3 ban chuyên môn.",
            highlights: [
                "Ban Học thuật: Tập trung giải quyết vấn đề & nghiên cứu sản phẩm",
                "Ban Truyền thông: Sáng tạo nội dung & Kiểm thử dự án",
                "Ban Hành chính & Sự kiện: Quản lý nguồn lực & Đối ngoại"
            ],
            image: "/media/tuyenthanhviengen1.png",
            techStack: ["HR", "Organization"],
            link: "https://www.facebook.com/hcmute.rtic/posts/pfbid0YFmtKm5mX9f4E876J76Y7C2M8G7S6f4C68C9F7G6H5G4F3E2D1C0B"
        },
        {
            id: "webhub-launch",
            time: "30/06/2025",
            month: "Tháng 6",
            title: "Hệ sinh thái WebHub & Swagger API",
            shortDesc: "Triển khai hạ tầng DevOps và công bố Swagger Documentation cho team Frontend.",
            highlights: [
                "Deploy Backend đầu tiên, chuẩn hóa Swagger API UI",
                "Áp dụng quy trình '4 Meeting' nghiêm ngặt: Logic -> Exception -> Clean Code",
                "Vinh danh Core Team: Việt Anh, Phúc, Hưng, Danh, Lợi"
            ],
            image: "/media/landingpage.png",
            techStack: ["Spring Boot", "Swagger", "DevOps", "PostgreSQL"],
            link: "https://hcmutertic.com"
        },
        {
            id: "isc-pentest",
            time: "14/07/2025",
            month: "Tháng 7",
            title: "Pentest cùng CLB ISC",
            shortDesc: "Hợp tác an toàn thông tin để bảo mật hệ thống Plane và GitLab nội bộ.",
            highlights: [
                "Kiểm thử xâm nhập các endpoint nhạy cảm",
                "Nâng cao tiêu chuẩn bảo mật cho hạ tầng RTIC",
                "Xác lập văn hóa 'Code sạch - System chắc'"
            ],
            techStack: ["Security", "Pentest", "ISC"],
            link: "https://hcmutertic.com"
        },
        {
            id: "rtic-quiz",
            time: "07/2025",
            month: "Tháng 7",
            title: "Hệ Quiz Trực tuyến RTIC",
            shortDesc: "Nền tảng tổ chức các cuộc thi trắc nghiệm công nghệ real-time cho sinh viên.",
            highlights: [
                "Hệ thống Quiz real-time phục vụ đồng thời hàng trăm sinh viên",
                "Tích hợp bảng xếp hạng (Leaderboard) trực tiếp đầy kịch tính",
                "Dấu ấn công nghệ tại sự kiện IT Challenge 2025"
            ],
            techStack: ["Next.js", "Websocket", "Real-time"],
            link: "https://quiz.hcmutertic.com"
        },
        {
            id: "pm-website",
            time: "20/07/2025",
            month: "Tháng 7",
            title: "Hệ quản trị dự án Plane",
            shortDesc: "Hệ thống quản lý dự án nội bộ (Self-hosted) giúp tối ưu hóa luồng công việc.",
            highlights: [
                "Quản lý Task, Deadline và Progress trực quan trên Plane",
                "Tăng hiệu suất làm việc nhóm thông qua quy trình Agile",
                "Hạ tầng tự quản lý bảo mật và linh hoạt"
            ],
            image: "/media/projectmanageweb.png",
            techStack: ["Plane", "Docker", "Self-host"],
            link: "https://hcmutertic.com"
        },
        {
            id: "phap-luat-vn",
            time: "08/2025",
            month: "Tháng 8",
            title: "Vững bước cùng Pháp luật VN",
            shortDesc: "Hệ thống thi trắc nghiệm pháp luật trực tuyến dành cho sinh viên.",
            highlights: [
                "Tích hợp xác thực email sinh viên HCMUTE",
                "Quy trình thi tự động hoàn toàn, đảm bảo tính minh bạch"
            ],
            techStack: ["React", "FastAPI", "Auth"],
            link: "https://phapluat.hcmutertic.com"
        },
        {
            id: "rtic-assistant",
            time: "09/2025",
            month: "Tháng 9",
            title: "Trợ lý ảo RTIC Chatbot",
            shortDesc: "Người bạn đồng hành AI thông minh hỗ trợ giải đáp thắc mắc cho sinh viên FIT-HCMUTE.",
            highlights: [
                "Hỗ trợ tra cứu thông tin học vụ, kỹ thuật nhanh chóng",
                "Tích hợp mô hình AI tiên tiến (Gemini), giao diện thân thiện",
                "Sử dụng công nghệ RAG để cung cấp câu trả lời chính xác"
            ],
            techStack: ["Gemini AI", "FastAPI", "RAG"],
            link: "https://chatbot.hcmutertic.com/"
        },
        {
            id: "club-day",
            time: "21/09/2025",
            month: "Tháng 9",
            title: "FIT Club’s Day 2025",
            shortDesc: "Showcase các sản phẩm tiêu biểu của RTIC tại ngày hội các CLB Khoa CNTT.",
            highlights: [
                "Giới thiệu WebHub, AI Rebus Puzzle & IT Challenge",
                "Thu hút hơn 200 sinh viên tham gia trải nghiệm trực tiếp",
                "Khẳng định vai trò tiên phong trong nghiên cứu & đổi mới"
            ],
            image: "/media/clubday.png",
            techStack: ["Showcase", "AI", "Community"]
        },
        {
            id: "womens-day",
            time: "20/10/2025",
            month: "Tháng 10",
            title: "Món quà Công nghệ 20/10",
            shortDesc: "Ba website thiệp chúc mừng điện tử 'Made by RTIC' tri ân ngày Phụ nữ Việt Nam.",
            highlights: [
                "Các dự án cá nhân hóa: Womenday, 2010-rtic, Events",
                "Gửi gắm tình cảm của các thành viên nam RTIC qua từng dòng code",
                "Lan tỏa thông điệp Tech for Good"
            ],
            image: "/media/phunuvietnam.png",
            techStack: ["Frontend", "Vercel", "Creative"],
            link: "https://womenday.hcmutertic.com/"
        },
        {
            id: "rtic-ranker",
            time: "26/09/2025",
            month: "Tháng 9",
            title: "Khám phá 'Vũ khí' Judge0",
            shortDesc: "Tìm ra giải pháp core cho hệ thống Ranker, mở đầu kỷ nguyên microservices tại RTIC.",
            highlights: [
                "Áp dụng thành công Judge0 cho thực thi mã nguồn an toàn",
                "Triển khai kiến trúc NestJS + Redis + RabbitMQ",
                "Workshop nội bộ về 'Training tẩm uất' kỹ thuật sâu"
            ],
            techStack: ["Judge0", "NestJS", "Microservices"],
            link: "https://ranker.hcmutertic.com/"
        },
        {
            id: "wellness",
            time: "20/11/2025",
            month: "Tháng 11",
            title: "Wellness HCMUTE & AI Gemini 2.0",
            shortDesc: "Hệ thống Quản lý Trắc nghiệm tích hợp AI Chatbot tư vấn tâm lý.",
            highlights: [
                "Ứng dụng Gemini 2.0 Flash phục vụ tư vấn tâm lý SV",
                "Admin Panel chuyên sâu quản lý báo cáo CSV, PDF",
                "Sản phẩm kết hợp giữa công nghệ và trách nhiệm xã hội"
            ],
            image: "/media/wellness.png",
            techStack: ["Python", "ReactJS", "Gemini AI", "RAG"],
            link: "https://wellness.hcmutertic.com"
        },
        {
            id: "recap-and-name-change",
            time: "26/12/2025",
            month: "Tháng 12",
            title: "Hàn huyên 2 AM & Bước ngoặt mới",
            shortDesc: "Nhìn lại hành trình 2025 rực rỡ và cùng đón nhận sự thay đổi tên trường.",
            highlights: [
                "Hướng tới Workshop 04/01/2026 rực rỡ nhất"
            ],
            techStack: ["Philosophy", "Vision 2026", "Recap"],
            link: "https://facebook.com/hcmute.rtic"
        }
    ],
    clubHighlights: [
        {
            title: "Anh Nam mãi đỉnh",
            content: "ICPC: Dù ai đi ngược về xuôi anh em ICPC mãi đỉnh",
            time: "Forever"
        },
        {
            title: "Triết lý 2 giờ sáng",
            content: "Lead fix bug quá 180 phút và giác ngộ ra sự công bằng, tính hơn thua và xã hội ",
            time: "23/12/2025"
        },
        {
            title: "Đại hội 'Vào lại Meet'",
            content: "Vào lại Link cũ/mới nha ae, hết 60p rồi. Nỗi khổ chung của những nhà nghiên cứu 0 đồng.",
            time: "Mỗi tối"
        },
        {
            title: "Thuyết trình 'Oai và Tốt'",
            content: "Lời khuyên: Không cần biết sản phẩm bạn dở tới đâu, chỉ cần thuyết trình tự tin thì mọi người sẽ sợ bạn",
            time: "Workshop 04/01"
        },
        {
            title: "Sinh hoạt bất ổn",
            content: "Sau buổi sinh hoạt, em thấy máy lạnh trong phòng mát và tivi 4k sắc nét",
            time: "Hàng tuần"
        },
        {
            title: "Viber",
            content: "Tôi biết tất cả các bạn đều vibe code nhưng tôi chưa thể chứng minh",
            time: "For life"
        },
        {
            title: "Vua document",
            content: "Khi bạn yêu cầu họ viết doc, 15 phút sau họ sẽ ném vào mặt bạn 1000 trang pdf vừa mới gen",
            time: "Every single time"
        }
    ]
};
