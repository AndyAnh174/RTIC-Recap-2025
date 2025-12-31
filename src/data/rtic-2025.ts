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
            id: "change-name-rtic",
            time: "17/06/2025",
            month: "Tháng 6",
            title: "Chính thức đổi tên RTIC",
            shortDesc: "HCMUTE PTIC chính thức đổi tên thành HCMUTE RTIC, mở ra kỷ nguyên nghiên cứu chuyên sâu.",
            highlights: [
                "Hướng tới Research on Technology and Innovation",
                "Xây dựng nền tảng vững chắc cho sinh viên",
                "Khẳng định sứ mệnh tiên phong trong nghiên cứu"
            ],
            image: "/media/changename.png",
            techStack: ["Identity", "Rebranding"]
        },
        {
            id: "first-meeting-gen1",
            time: "23/06/2025",
            month: "Tháng 6",
            title: "First Meeting Gen 1",
            shortDesc: "Buổi gặp mặt đầu tiên của thế hệ RTIC Gen 1 (PRE-INFO SESSION 2025).",
            image: "/media/preinfosession.jpg",
            highlights: [
                "Lần đầu tiên Gen 1 gặp gỡ và giao lưu",
                "Chia sẻ về văn hóa và giá trị cốt lõi của CLB",
                "Khởi động tinh thần đoàn kết"
            ],
            techStack: ["Meeting", "Gen 1", "Culture"]
        },
        {
            id: "webhub-launch",
            time: "30/06/2025",
            month: "Tháng 6",
            title: "Bắt đầu triển khai xây dựng hệ sinh thái WebHub RTIC",
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
            id: "advisor-launch",
            time: "16/07/2025",
            month: "Tháng 7",
            title: "Ra mắt Ban Cố vấn",
            shortDesc: "Công bố đội ngũ cố vấn chuyên môn và sinh viên giàu kinh nghiệm.",
            highlights: [
                "GV Cố vấn: ThS. Lê Minh Tân - Giảng viên AI, Khoa CNTT",
                "Cố vấn SV: Anh Trần Công Toản, Anh Lê Hồng Phúc",
                "Định hướng phát triển học thuật chuyên sâu"
            ],
            image: "/media/covanchuyenmon.png",
            techStack: ["Advisor", "Academic", "Mentorship"]
        },
        {
            id: "isc-pentest",
            time: "18/07/2025",
            month: "Tháng 7",
            title: "Hợp tác chiến lược RTIC x ISC",
            shortDesc: "Khi ngọn đuốc Sáng tạo gặp chiếc khiên Bảo mật - Hợp tác an toàn thông tin.",
            highlights: [
                "Kiểm thử xâm nhập các endpoint nhạy cảm",
                "Nâng cao tiêu chuẩn bảo mật cho hạ tầng RTIC",
                "Xác lập văn hóa 'Code sạch - System chắc'"
            ],
            image: "/media/RTIC x ISC (1).png",
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
            image: "/media/quizrtic.png",
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
            image: "/media/planertic.png",
            techStack: ["Plane", "Docker", "Self-host"],
            link: "https://hcmutertic.com"
        },
        {
            id: "first-training",
            time: "04/08/2025",
            month: "Tháng 8",
            title: "First Training - Giải mã RTIC",
            shortDesc: "Buổi training nội bộ đầu tiên cùng ThS. Lê Minh Tân - 'Giải mã' hệ sinh thái CLB.",
            highlights: [
                "Giải mã toàn bộ hệ sinh thái & quy trình làm việc",
                "Định hướng Nghiên cứu Khoa học (NCKH) cho thành viên",
                "Truyền lửa đam mê nghiên cứu công nghệ"
            ],
            image: "/media/firsttrainning.png",
            techStack: ["Training", "Culture", "Research"]
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
            image: "/media/chatbotrtic.png",
            techStack: ["Gemini AI", "FastAPI", "RAG"],
            link: "https://chatbot.hcmutertic.com/"
        },
        {
            id: "webhub-complete",
            time: "20/09/2025",
            month: "Tháng 9",
            title: "Hoàn thiện hệ sinh thái WebHub",
            shortDesc: "Lời tri ân gửi đến những người kiến tạo dự án WebHub - Nền tảng số của RTIC.",
            highlights: [
                "Website chính thức: hcmutertic.com",
                "Trang Wiki tri thức: wiki.hcmutertic.com",
                "Nền tảng Chatbot: chatbot.hcmutertic.com",
                "Hệ thống GitLab & Plane self-hosted"
            ],
            image: "/media/doneWebHub.png",
            techStack: ["Ecosystem", "WebHub", "Fullstack"]
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
            id: "gen2-recruitment",
            time: "03/10/2025",
            month: "Tháng 10",
            title: "Tuyển thành viên Gen 2",
            shortDesc: "Hành trình 'Beyond Limits, Into Innovation' chính thức bắt đầu - Tìm kiếm thế hệ kế thừa.",
            highlights: [
                "Chủ đề: Beyond Limits, Into Innovation",
                "Tìm kiếm tài năng trẻ đam mê nghiên cứu và kiến tạo",
                "Mở rộng quy mô và tầm ảnh hưởng của CLB"
            ],
            image: "/media/ảnh bìa gen2.png",
            techStack: ["Recruitment", "Gen 2", "HR"]
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
            id: "phap-luat-vn",
            time: "09/11/2025",
            month: "Tháng 11",
            title: "Vững bước cùng Pháp luật VN",
            shortDesc: "Hệ thống thi trắc nghiệm pháp luật trực tuyến dành cho sinh viên.",
            highlights: [
                "Tích hợp xác thực email sinh viên HCMUTE",
                "Quy trình thi tự động hoàn toàn, đảm bảo tính minh bạch"
            ],
            image: "/media/phapluat.png",
            techStack: ["React", "FastAPI", "Auth"],
            link: "https://phapluat.hcmutertic.com"
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
        },
        {
            id: "workshop-report",
            time: "10/01/2026",
            month: "Tháng 1",
            title: "Báo cáo Workshop",
            shortDesc: "Tổng kết và báo cáo kết quả Workshop chuyên môn đầu năm 2026.",
            image: "/media/baocaoworkshop.png",
            highlights: [
                "Tổng kết các hoạt động nghiên cứu năm 2025",
                "Chia sẻ kiến thức chuyên môn sâu rộng",
                "Đề xuất hướng đi mới cho năm 2026"
            ],
            techStack: ["Workshop", "Report", "Planning"]
        },
        {
            id: "academic-activity",
            time: "11/01/2026",
            month: "Tháng 1",
            title: "Sinh hoạt học thuật",
            shortDesc: "Buổi sinh hoạt chuyên đề học thuật và định hướng nghiên cứu mới.",
            image: "/media/sinhhoathocthuat.png",
            highlights: [
                "Trao đổi về các xu hướng công nghệ mới",
                "Thảo luận về các dự án tiềm năng",
                "Gắn kết thành viên qua các hoạt động học thuật"
            ],
            techStack: ["Academic", "Meeting", "Research"]
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
