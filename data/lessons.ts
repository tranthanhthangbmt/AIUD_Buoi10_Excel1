export interface Task {
    name: string;
    file: string;
}

export interface Doc {
    name: string;
    file: string;
}

export interface Step {
    title: string;
    content: string;
    icon?: string;
    slideImage?: string;
}

export interface Lesson {
    id: number;
    title: string;
    description: string;
    video: string;
    tasks: Task[];
    docs: Doc[];
    steps: Step[];
}

export const lessonsData: Lesson[] = [
    {
        id: 1,
        title: "Bài 1: Định Dạng Văn Bản",
        description: "Học cách định dạng font chữ, paragraph, và các thiết lập cơ bản trong Word.",
        video: "https://drive.google.com/file/d/1T94HCZQpXxvXvQINcn1p49ePkvisV20C/preview",
        tasks: [
            { name: "Bài 1.2.1", file: "Lớp-Họ và tên-Bài 1.2.1.docx" }
        ],
        docs: [
            { name: "Hướng dẫn PDF", file: "Tài liệu buổi 6_Word_Bài 1_ĐỊNH DẠNG VĂN BẢN.pdf" }
        ],
        steps: [
            {
                title: "Bước 1: Mở tệp bài tập",
                content: "Mở tệp 'Lớp-Họ và tên-Bài 1.2.1.docx' trong thư mục đề bài.",
                icon: "fa-folder-open",
                slideImage: "SlideHuongDan/slide word_Buổi 1_1.png"
            },
            {
                title: "Bước 2: Định dạng Font chữ",
                content: "Chọn văn bản cần định dạng. Vào Home -> Font để thay đổi Font, Cỡ chữ, Màu sắc theo yêu cầu.",
                icon: "fa-font",
                slideImage: "SlideHuongDan/slide word_Buổi 1_8.png"
            },
            {
                title: "Bước 3: Định dạng Đoạn văn",
                content: "Sử dụng nhóm Paragraph để căn lề (Trái, Phải, Giữa, Đều), chỉnh khoảng cách dòng (Line Spacing).",
                icon: "fa-align-left",
                slideImage: "SlideHuongDan/slide word_Buổi 1_23.png"
            },
            {
                title: "Bước 4: Lưu bài",
                content: "Nhấn File -> Save hoặc Ctrl+S để lưu lại kết quả.",
                icon: "fa-save",
                slideImage: "SlideHuongDan/slide word_Buổi 1_2.png"
            },
        ]
    },
    {
        id: 2,
        title: "Bài 2: Bảng Biểu (Table)",
        description: "Làm việc với bảng: Tạo bảng, gộp ô, định dạng đường viền và màu nền.",
        video: "https://drive.google.com/file/d/1GV0hJT8kEbYwrMXelJhUsdWP0HuLd0WL/preview",
        tasks: [
            { name: "Bài 2.2.1", file: "Lớp-Họ và tên-Bài 2.2.1.docx" }
        ],
        docs: [
            { name: "Hướng dẫn PDF", file: "Tài liệu buổi 6_Word_Bài 2_TABLE .pdf" }
        ],
        steps: [
            {
                title: "Bước 1: Chèn bảng",
                content: "Vào Insert -> Table. Chọn số dòng và số cột cần thiết.",
                icon: "fa-table",
                slideImage: "SlideHuongDan/slide word_Buổi 1_26.png"
            },
            {
                title: "Bước 2: Chỉnh sửa cấu trúc bảng",
                content: "Sử dụng Layout (Table Tools) để thêm/xóa dòng, cột. Dùng Merge Cells để gộp ô.",
                icon: "fa-th-large",
                slideImage: "SlideHuongDan/slide word_Buổi 1_27.png"
            },
            {
                title: "Bước 3: Định dạng bảng",
                content: "Vào Design (Table Tools) để chọn kiểu đường viền (Borders) và màu nền (Shading).",
                icon: "fa-paint-brush",
                slideImage: "SlideHuongDan/slide word_Buổi 1_28.png"
            }
        ]
    },
    {
        id: 3,
        title: "Bài 3: Tab Stops",
        description: "Sử dụng Tab để căn chỉnh văn bản chuyên nghiệp: Tab trái, phải, giữa, thập phân.",
        video: "https://drive.google.com/file/d/1G7dTKcHvz2_wtDJd9l277x-khvxTnXpn/preview",
        tasks: [
            { name: "Bài 3.2.1", file: "Lớp-Họ và tên-Bài 3.2.1.docx" },
            { name: "Bài 3.2.2", file: "Lớp-Họ và tên-Bài 3.2.2.docx" }
        ],
        docs: [
            { name: "Hướng dẫn PDF", file: "Tài liệu buổi 6_Word_Bài 3-TABSTOP.pdf" }
        ],
        steps: [
            {
                title: "Bước 1: Mở hộp thoại Tabs",
                content: "Mở hộp thoại Paragraph -> Nhấn nút Tabs ở góc dưới bên trái.",
                icon: "fa-window-maximize",
                slideImage: "SlideHuongDan/slide word_Buổi 1_31.png"
            },
            {
                title: "Bước 2: Đặt vị trí Tab",
                content: "Nhập vị trí (Tab stop position). Chọn loại căn lề (Alignment: Left, Center, Right...).",
                icon: "fa-ruler-horizontal",
                slideImage: "SlideHuongDan/slide word_Buổi 1_32.png"
            },
            {
                title: "Bước 3: Chọn Leader",
                content: "Chọn kiểu ký tự dẫn (Leader: 1 None, 2...., 3----). Nhấn Set -> OK.",
                icon: "fa-ellipsis-h",
                slideImage: "SlideHuongDan/slide word_Buổi 1_33.png"
            },
            {
                title: "Bước 4: Sử dụng Tab",
                content: "Nhấn phím Tab trên bàn phím để di chuyển con trỏ đến vị trí đã đặt.",
                icon: "fa-keyboard",
                slideImage: "SlideHuongDan/slide word_Buổi 1_34.png"
            }
        ]
    },
    {
        id: 4,
        title: "Bài 4: Tạo Ngắt (Breaks)",
        description: "Chia cột báo (Columns) và ngắt trang, ngắt đoạn (Section Break).",
        video: "https://drive.google.com/file/d/1SjenMmbmJWvOBIY9RlZW4qx8xkxJUims/preview",
        tasks: [
            { name: "Bài 4.2.1", file: "Lớp-Họ và tên-Bài 4.2.1.docx" }
        ],
        docs: [
            { name: "Hướng dẫn PDF", file: "Tài liệu buổi 6_Word_Bài 4_TẠO NGẮT .pdf" }
        ],
        steps: [
            {
                title: "Bước 1: Chia cột",
                content: "Bôi đen văn bản. Vào Layout -> Columns -> Chọn số cột (Two, Three...)."
            },
            {
                title: "Bước 2: Ngắt cột",
                content: "Đặt con trỏ tại vị trí muốn ngắt sang cột mới. Vào Layout -> Breaks -> Column.",
                icon: "fa-columns",
                slideImage: "SlideHuongDan/slide word_Buổi 1_47.png"
            },
            {
                title: "Bước 3: Drop Cap",
                content: "Vào Insert -> Drop Cap để tạo chữ cái lớn đầu dòng.",
                icon: "fa-font",
                slideImage: "SlideHuongDan/slide word_Buổi 1_53.png"
            }
        ]
    }
];
