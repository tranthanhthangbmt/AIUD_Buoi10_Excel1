const sessionsData = [
    {
        id: 6,
        title: "Buổi 6: Định dạng (văn bản, bảng biểu, Tabstop, tạo ngắt trang)",
        description: "Làm quen với các thao tác cơ bản trong Microsoft Word: định dạng văn bản, tạo bảng, sử dụng tab stops và ngắt trang.",
        totalLessons: 4,
        lessons: [
            {
                id: 1,
                sessionId: 1,
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
                        content: "Mở tệp 'Lớp-Họ và tên-Bài 1.2.1.docx' trong mục tài nguyên.",
                        // icon: "fa-folder-open",
                    },
                    {
                        title: "Bước 2: Hiển thị thanh thước, chuyển đơn vị đo",
                        content: "1. Hiển thị thanh thước: Chọn View -> đánh dấu chọn mục Ruler.\n2. Chuyển đơn vị đo: Chọn File -> chọn Options -> chọn Advanced -> tại mục Display (Show measurements in units of: Centimeters) -> nhấn OK.",
                        // icon: "fa-ruler-horizontal",
                    },
                    {
                        title: "Bước 3: Canh chỉnh khổ giấy, hướng giấy, lề",
                        content: "1. Canh chỉnh khổ giấy: chọn Page Layout -> chọn Size -> chọn A4. \n2. Canh chỉnh hướng giấy: chọn Layout -> chọn Orientation -> chọn hướng giấy đứng (Portrait), hướng giấy ngang (Landscape). \n3. Canh lề: chọn Layout -> chọn Margins -> chọn Custom Margins... -> lề trên(Top): 2 cm, lề dưới (Bottom): 2cm, lề trái (Left): 2.5cm hoặc 3cm, lề phải (Right): 2cm -> nhấn OK.",
                        // icon: "fa-newspaper",
                    },
                    {
                        title: "Bước 4: Soạn thảo và định dạng chuyên nghiệp (Modify Style).",
                        content: "1. Tại thẻ HOME, Click chuột phải vào ô Normal trong khung Styles → chọn Modify. \n2. Thiết lập thông số: Chọn Font Times New Roman, cỡ chữ 13, chọn Canh đều 2 bên (Justified) \n3. Chỉnh giãn dòng/đoạn: Bấm nút Format (góc dưới trái) → chọn Paragraph → Chỉnh Before/After (ví dụ 6pt) và Line spacing (1.5 lines) → OK.",
                        // icon: "fa-align-left",
                    },
                    {
                        title: "Bước 5: Lưu bài",
                        content: "Nhấn File -> Save hoặc Ctrl+S để lưu lại kết quả.",
                        // icon: "fa-save",
                    },
                ]
            },
            {
                id: 2,
                sessionId: 1,
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
                        content: "Chọn thẻ Insert → chọn Table → chọn Insert Table… → Nhập số cột (Columns) và số hàng (Rows) → OK.",
                        // slideImage: "assets/slides/slide word_Buổi 1_26.png"
                    },
                    {
                        title: "Bước 2: Chèn thêm cột và dòng vào bảng",
                        content: "1. để con trỏ chuột vào một ô trong bảng, ô này nằm trước hoặc sau cột định chèn thêm cột vào. \n2. Chọn Table Layout -> chọn Insert Column Left hoặc Insert Column Right để chèn thêm cột vào bảng. \n3. Chọn Insert Row Above hoặc Insert Row Below để chèn thêm dòng vào bảng.",
                        // slideImage: "assets/slides/slide word_Buổi 1_27.png"
                    },
                    {
                        title: "Bước 3: Gộp ô và tách ô",
                        content: "1. Chọn trên 2 ô cần gộp -> chọn Table Layout -> Merge Cells để gộp ô. \n2. Chọn trên 2 ô cần tách -> chọn Table Layout -> Split Cells để tách ô.",
                        // slideImage: "assets/slides/slide word_Buổi 1_28.png"
                    },
                    {
                        title: "Bước 4: Lặp lại tiêu đề bảng ở các trang tiếp theo",
                        content: "1. Chọn tiêu đề Bảng (dòng đầu tiên của Bảng) -> Repeat Header Rows.",
                        // slideImage: "assets/slides/slide word_Buổi 1_28.png"
                    },
                    {
                        title: "Bước 5: Chuyển đổi bảng thành text",
                        content: "1. Chọn toàn bộ Bảng -> Table Layout -> Convert to Text.",
                        // slideImage: "assets/slides/slide word_Buổi 1_28.png"
                    },
                    {
                        title: "Bước 6: Thiết kế bảng",
                        content: "1. Chọn toàn bộ Bảng -> Table Design.\n2. Tại Table Styles có thể lựa chọn kiểu bảng.\n3. Tại Boders, có thể chọn kiểu viền cho bảng.",
                        // slideImage: "assets/slides/slide word_Buổi 1_28.png"
                    },
                ]
            },
            {
                id: 3,
                sessionId: 1,
                title: "Bài 3: Tab Stop",
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
                    },
                    {
                        title: "Bước 2: Đặt vị trí Tab",
                        content: "Nhập vị trí (Tab stop position). Chọn loại căn lề (Alignment: Left, Center, Right...).",
                    },
                    {
                        title: "Bước 3: Chọn Leader",
                        content: "Chọn kiểu ký tự dẫn (Leader: 1 None, 2...., 3----). Nhấn Set -> OK.",
                    },
                    {
                        title: "Bước 4: Sử dụng Tab",
                        content: "Nhấn phím Tab trên bàn phím để di chuyển con trỏ đến vị trí đã đặt.",
                    }
                ]
            },
            {
                id: 4,
                sessionId: 1,
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
                        title: "Bước 1: Chia cột và ngắt cột",
                        content: "1. Bôi đen văn bản. Vào Layout -> Columns -> Chọn số cột (Two, Three...)\n2. Đặt con trỏ tại vị trí muốn ngắt sang cột mới. Vào Layout -> Breaks -> Column."
                    },
                    {
                        title: "Bước 2: Ngắt trang và xóa ngắt trang",
                        content: "1. Đặt con trỏ tại vị trí muốn ngắt sang trang mới. Vào Insert -> Page Break.\n2. Gõ Ctrl + H để mở hộp thoại Find and Replace.\n3. Tìm kiếm \"^m\" -> Replace All."
                    },
                    {
                        title: "Bước 3: Ngắt đoạn (Section Break)",
                        content: "1. Vào Home -> chọn biểu tượng Show/Hide Break Editing Marks.\n2. Chức năng Section Break cung cấp cho người sử dụng 4 lựa chọn: \n- Next Page: Tạo ngắt trang sau đoạn văn.\n- Continuous: Tạo ngắt trang sau đoạn văn.\n- Even Page hoặc Odd Page: Ngắt đoạn và di chuyển văn bản sau dấu ngắt sang trang chẵn hoặc trang lẻ tiếp theo.\n3. Xóa dấu ngắt đoạn: \n- Chọn Home -> chọn icon (Show/Hide Editing Marks) để hiển thị tất cả các dấu đoạn và các ký hiệu định dạng bị ẩn trong tài liệu thông thường. \n- Đặt con trỏ chuột trước dấu ngắt phần / ngắt đoạn và sau đó nhấn phím xóa để xóa. \n- Hoặc gõ Ctrl + H để mở hộp thoại Find and Replace.\n- Tìm kiếm \"^b\" -> Replace All."
                    },
                ]
            }
        ]
    },
    {
        id: 7,
        title: "Buổi 7: Mục lục (Multilevel List, caption, nội dung, hình ảnh, bảng biểu)",
        description: "Học các kỹ thuật nâng cao: Mail Merge, Header/Footer, Table of Contents và References.",
        totalLessons: 3,
        lessons: [
            {
                id: 5,
                sessionId: 2,
                title: "Bài 5: Mail Merge",
                description: "Tạo thư gửi hàng loạt với Mail Merge, kết nối dữ liệu từ Excel.",
                video: "https://drive.google.com/file/d/1T94HCZQpXxvXvQINcn1p49ePkvisV20C/preview",
                tasks: [
                    { name: "Bài 5.2.1", file: "Lớp-Họ và tên-Bài 5.2.1.docx" }
                ],
                docs: [
                    { name: "Hướng dẫn PDF", file: "Tài liệu buổi 6_Word_Bài 5_MAIL MERGE.pdf" }
                ],
                steps: [
                    {
                        title: "Bước 1: Chuẩn bị dữ liệu",
                        content: "Tạo file Excel chứa danh sách người nhận với các cột: Tên, Địa chỉ, Email.",
                        // icon: "fa-file-excel"
                    },
                    {
                        title: "Bước 2: Bắt đầu Mail Merge",
                        content: "Vào Mailings -> Start Mail Merge -> Letters.",
                        // icon: "fa-envelope"
                    },
                    {
                        title: "Bước 3: Chọn nguồn dữ liệu",
                        content: "Chọn Select Recipients -> Use an Existing List, sau đó chọn file Excel.",
                        // icon: "fa-database"
                    }
                ]
            },
            {
                id: 6,
                sessionId: 2,
                title: "Bài 6: Header & Footer",
                description: "Tạo và tùy chỉnh Header, Footer, Page Number cho tài liệu chuyên nghiệp.",
                video: "https://drive.google.com/file/d/1GV0hJT8kEbYwrMXelJhUsdWP0HuLd0WL/preview",
                tasks: [
                    { name: "Bài 6.2.1", file: "Lớp-Họ và tên-Bài 6.2.1.docx" }
                ],
                docs: [
                    { name: "Hướng dẫn PDF", file: "Tài liệu buổi 6_Word_Bài 6_HEADER FOOTER.pdf" }
                ],
                steps: [
                    {
                        title: "Bước 1: Chèn Header",
                        content: "Vào Insert -> Header -> Chọn mẫu hoặc Edit Header.",
                        icon: "fa-heading"
                    },
                    {
                        title: "Bước 2: Chèn Page Number",
                        content: "Vào Insert -> Page Number -> Chọn vị trí và định dạng.",
                        icon: "fa-hashtag"
                    }
                ]
            },
            {
                id: 7,
                sessionId: 2,
                title: "Bài 7: Table of Contents",
                description: "Tạo mục lục tự động với Table of Contents và sử dụng Styles.",
                video: "https://drive.google.com/file/d/1G7dTKcHvz2_wtDJd9l277x-khvxTnXpn/preview",
                tasks: [
                    { name: "Bài 7.2.1", file: "Lớp-Họ và tên-Bài 7.2.1.docx" }
                ],
                docs: [
                    { name: "Hướng dẫn PDF", file: "Tài liệu buổi 6_Word_Bài 7_TOC.pdf" }
                ],
                steps: [
                    {
                        title: "Bước 1: Áp dụng Heading Styles",
                        content: "Chọn tiêu đề và áp dụng Heading 1, Heading 2, Heading 3.",
                        icon: "fa-text-height"
                    },
                    {
                        title: "Bước 2: Chèn Table of Contents",
                        content: "Vào References -> Table of Contents -> Chọn kiểu mục lục.",
                        icon: "fa-list-ol"
                    }
                ]
            }
        ]
    },
    {
        id: 9,
        title: "Buổi 9: Ứng dụng AI trong Word",
        description: "Thiết kế tài liệu đẹp mắt với SmartArt, Charts, Images và Page Layout.",
        totalLessons: 2,
        lessons: [
            {
                id: 8,
                sessionId: 3,
                title: "Bài 8: SmartArt & Charts",
                description: "Tạo sơ đồ, biểu đồ minh họa với SmartArt và Charts.",
                video: "https://drive.google.com/file/d/1SjenMmbmJWvOBIY9RlZW4qx8xkxJUims/preview",
                tasks: [
                    { name: "Bài 8.2.1", file: "Lớp-Họ và tên-Bài 8.2.1.docx" }
                ],
                docs: [
                    { name: "Hướng dẫn PDF", file: "Tài liệu buổi 6_Word_Bài 8_SMARTART.pdf" }
                ],
                steps: [
                    {
                        title: "Bước 1: Chèn SmartArt",
                        content: "Vào Insert -> SmartArt -> Chọn loại sơ đồ phù hợp.",
                        icon: "fa-project-diagram"
                    },
                    {
                        title: "Bước 2: Tùy chỉnh SmartArt",
                        content: "Thêm/xóa hình, thay đổi màu sắc và kiểu dáng.",
                        icon: "fa-palette"
                    }
                ]
            },
            {
                id: 9,
                sessionId: 3,
                title: "Bài 9: Page Layout & Design",
                description: "Thiết lập trang, margins, orientation và themes cho tài liệu.",
                video: "https://drive.google.com/file/d/1T94HCZQpXxvXvQINcn1p49ePkvisV20C/preview",
                tasks: [
                    { name: "Bài 9.2.1", file: "Lớp-Họ và tên-Bài 9.2.1.docx" }
                ],
                docs: [
                    { name: "Hướng dẫn PDF", file: "Tài liệu buổi 6_Word_Bài 9_LAYOUT.pdf" }
                ],
                steps: [
                    {
                        title: "Bước 1: Thiết lập Page Setup",
                        content: "Vào Layout -> Page Setup để chỉnh margins, orientation, size.",
                        icon: "fa-file-alt"
                    },
                    {
                        title: "Bước 2: Áp dụng Theme",
                        content: "Vào Design -> Themes để chọn theme phù hợp.",
                        icon: "fa-swatchbook"
                    }
                ]
            }
        ]
    },
    {
        id: 10,
        title: "Buổi 10: Hàm trong Excel",
        description: "Làm chủ Excel từ nhập liệu sạch, xử lý chuỗi đến các hàm thống kê và tìm kiếm nâng cao.",
        totalLessons: 4,
        lessons: [
            {
                id: 101,
                sessionId: 10,
                title: "Bài 1: Nhập liệu & Validation",
                description: "Kỹ thuật nhập liệu sạch, đặt tên vùng (Name Range) và chặn lỗi nhập liệu với Data Validation.",
                image: "images/Buổi_10/Bài_1/pic1.png",
                video: "",
                tasks: [
                    { name: "File thực hành", file: "Buổi 10_Bài 1-2-3-4.xlsx" }
                ],
                requirements: `Yêu cầu
1. Nhập liệu và định dạng bảng tính
2. Đặt tên cho các vùng dữ liệu tương ứng với tên các trường trong bảng 
(Họ và tên: _hoten, Mã lớp: _malop, Điểm: _diem, Học phí: _hocphi)
3. Thiết lập ràng buộc cho các ô thuộc cột điểm sao cho người dùng chỉ được phép
nhập giá trị trong phạm vi từ 0 đến 10, nếu nhập sai sẽ dừng việc nhập liệu và xuất hiện thông báo
có tiêu đề "Dữ liệu không hợp lệ", nội dung thông điệp "Nhập điểm nằm trong phạm vi từ 0 đến 10"
4. Xác định tổng tiền học phí thông qua tên vùng ở câu 2`,
                docs: [
                    { name: "Hướng dẫn chi tiết (PDF)", file: "Buổi 10_Bài 1-2-3-4 [Excel].pdf" }
                ],
                steps: [
                    {
                        title: "Kiến thức cơ bản: Excel Nhập Môn",
                        content: "**Mục tiêu:** Sinh viên biết nhập liệu đúng chuẩn (số ra số, chữ ra chữ), biết dùng địa chỉ tuyệt đối $ (sống còn cho bài VLOOKUP), và hiểu cách Excel \"nói chuyện\" qua dấu phẩy hoặc chấm phẩy.\n\n**1. Làm quen giao diện & \"Vùng\" (5 Phút)**\n- **Mục đích:** Phục vụ trực tiếp cho Bài 1 (Đặt tên vùng).\n- **Giảng viên (GV) thực hiện:** Mở một file Excel trắng.\n- **GV giải thích:**\n  + **Ô (Cell):** Giao điểm của Cột (Chữ cái) và Dòng (Số). Ví dụ: B3.\n  + **Name Box (Hộp tên):** Chỉ vị trí góc trên bên trái (bên cạnh thanh công thức).\n- **Thực hành nhanh:** \"Các em nhìn lên góc trái, gõ C10 rồi Enter. Con trỏ chuột sẽ bay ngay đến ô C10. Đây chính là nơi sau này ta dùng để Đặt tên vùng cho bài tập 1.\"\n- **Vùng (Range):** Bôi đen từ A1 đến B5.\n- **Giải thích:** Excel đọc là A1:B5 (Dấu hai chấm : nghĩa là \"đến\").\n\n**2. Quy tắc nhập liệu \"Sống còn\" (10 Phút)**\n- **Mục đích:** Tránh lỗi hàm không tính toán được hoặc lỗi #N/A trong Bài 3, 4.\n- **GV demo lỗi sai kinh điển:**\n  + Nhập vào ô A1: 100.000 đ (Gõ tay chữ đ và dấu chấm).\n  + Nhập vào ô A2: 2.\n  + Tính tổng: =A1*A2 -> Kết quả lỗi (#VALUE!).\n- **GV chốt quy tắc (Sinh viên ghi chép):**\n  + **Dữ liệu SỐ:** Khi nhập xong nó tự nhảy sang **Phải**.\n  + **Dữ liệu CHỮ:** Khi nhập xong nó nằm bên **Trái**.\n  + **Tuyệt đối KHÔNG:** Gõ dấu chấm phân cách hàng nghìn (ví dụ: 1.000) hay chữ \"VND\" trực tiếp vào ô số.\n- **Thực hành sửa sai:**\n  + Nhập lại ô A1: 100000 (chỉ nhập số thô).\n  + Định dạng (Format): Chọn ô A1 -> Vào tab Home -> Bấm dấu phẩy (,) trên thanh công cụ (Style) để hiển thị 100,000.\n- **Liên hệ bài học:** \"Trong bài tập lát nữa, phần Học phí và Điểm các em phải nhập số thô, không được gõ thêm chữ vào.\"\n\n**3. Tư duy Địa chỉ Tuyệt đối $ (Quan trọng nhất - 15 Phút)**\n- **Mục đích:** Để làm được câu VLOOKUP (Bài 3) và tạo vùng điều kiện DSUM (Bài 4).\n- **Bài toán dẫn nhập:**\n  + Cột A: Số lượng (nhập 1, 2, 3).\n  + Ô E1: Tỷ giá USD (nhập 23000).\n  + Yêu cầu: Tính tiền VND tại Cột B = Số lượng * Tỷ giá.\n- **Demo lỗi:**\n  + Tại B1 gõ: =A1*E1. Kết quả đúng.\n  + Kéo công thức xuống B2. Kết quả = 0 (Sai).\n  + Hỏi sinh viên: Tại sao sai? -> Bấm vào ô B2 cho thấy công thức trượt thành =A2*E2 (mà E2 là ô trống).\n- **Giải pháp - Cái neo ($):**\n  + Giải thích: \"Ta cần nói với Excel là dù kéo công thức đi đâu, ô Tỷ giá (E1) phải đứng im.\"\n  + Thao tác: Quay lại công thức B1, bôi đen E1 và nhấn phím **F4** (trên laptop có thể là Fn + F4).\n  + Kết quả: =A1*$E$1.\n  + Kéo lại công thức -> Đúng.\n- **Chốt:** \"Sau này làm bài 3, 4, hễ thấy cái bảng phụ nằm riêng một chỗ (Bảng đơn giá, Bảng tên hàng) là mặc định phải bấm F4 để khóa nó lại.\"\n\n**4. Cấu trúc hàm & Dấu phân cách (5-10 Phút)**\n- **Mục đích:** Giúp sinh viên gõ đúng cú pháp hàm IF, LEFT, VLOOKUP.\n- **GV lưu ý kỹ thuật:**\n  + Nhìn vào máy tính của mình khi gõ hàm.\n  + Gõ =IF(, Excel sẽ hiện gợi ý nhỏ ở dưới (Tooltip).\n  + Quan sát kỹ: Giữa các thành phần là dấu **Phẩy (,)** hay **Chấm phẩy (;)**?\n  + Giải thích: Máy ở nhà có thể là phẩy, máy trường có thể là chấm phẩy. Phải nhìn máy để gõ, không được học vẹt.\n- **Giới thiệu nhanh các hàm sẽ dùng (Outline):**\n  + \"Lát nữa ta sẽ dùng hàm **LEFT** (lấy bên trái), **RIGHT** (lấy bên phải) để cắt Mã lớp NU18A1A lấy ra chữ NU hay số 18.\"\n  + \"Ta dùng hàm **IF** để ra lệnh: Nếu điểm < 5 thì rớt, ngược lại đậu.\"",
                        icon: "fa-book-open"
                    },
                    {
                        title: "Yêu cầu 1: Nhập liệu và định dạng bảng tính",
                        content: "**Yêu cầu:** 1. Nhập liệu và định dạng bảng tính\n\n**Mục đích:** Tạo khung sườn cho bảng tính.\n\n**Hướng dẫn:**\n- Nhập dữ liệu: Nhập chính xác nội dung như hình mẫu vào các ô từ A1 đến E8.\n- Lưu ý: Cột “Điểm” (Cột D) để trống để lát nữa nhập thử nghiệm.\n- Dữ liệu mẫu:\n  + A3: 1 | B3: Nguyễn Thục Anh | C3: NU18A1A | E3: 10000000\n  + …nhập tiếp tục đến hết dòng 8.\n- Kẻ khung:\n  + Bôi đen từ A2 đến E9.\n  + Vào thẻ Home → chọn biểu tượng Borders (hình ô vuông) → chọn All Borders.",
                        icon: "fa-keyboard",
                        slideImage: "images/Buổi_10/Bài_1/pic1.png",
                    },
                    {
                        title: "Yêu cầu 2: Đặt tên cho các vùng dữ liệu",
                        content: "**Yêu cầu:** 2. Đặt tên cho các vùng dữ liệu tương ứng với tên các trường trong bảng (Họ và tên: _hoten, Mã lớp: _malop, Điểm: _diem, Học phí: _hocphi)\n\n**Mục đích:** Thay vì nhớ địa chỉ ô phức tạp (ví dụ: E3:E8), ta đặt tên là “_hocphi” để dễ tính toán.\n\n**Thao tác mẫu cho cột Học phí:**\n1. Bôi đen vùng dữ liệu chứa tiền học phí (từ ô E3 đến E8).\n2. Click chuột phải vào vùng vừa bôi đen, chọn Define Name….\n3. Hộp thoại New Name hiện ra:\n  - Tại ô Name: Nhập chính xác chữ '_hocphi' (viết liền, không dấu).\n  - Tại ô Scope: Để nguyên là Workbook.\n  - Nhấn OK.\n\n**Thực hiện tương tự cho các cột còn lại:**\n- Bôi đen B3:B8 (Họ tên) → Đặt tên: '_hoten'.\n- Bôi đen C3:C8 (Mã lớp) → Đặt tên: '_malop'.\n- Bôi đen D3:D8 (Điểm) → Đặt tên: '_diem'.",
                        icon: "fa-tag",
                        slideImage: "images/Buổi_10/Bài_1/pic2.png",
                        videoUrl: "https://drive.google.com/file/d/16xC5sONcKWaqAnE_yr2o0BsyXv0xkoGv/preview"
                    },
                    {
                        title: "Yêu cầu 3: Thiết lập ràng buộc nhập liệu",
                        content: "**Yêu cầu:** 3. Thiết lập ràng buộc cho các ô thuộc cột điểm sao cho người dùng chỉ được phép nhập giá trị trong phạm vi từ 0 đến 10, nếu nhập sai sẽ dừng việc nhập liệu và xuất hiện thông báo có tiêu đề 'Dữ liệu không hợp lệ', nội dung thông điệp 'Nhập điểm nằm trong phạm vi từ 0 đến 10'\n\n**Mục đích:** Ngăn không cho nhập điểm bậy (ví dụ nhập 11 điểm hoặc nhập chữ).\n\n**Hướng dẫn:**\n1. Bôi đen vùng cần nhập điểm (từ ô D3 đến D8).\n2. Trên thanh công cụ, chọn thẻ Data → bấm vào nút Data Validation.\n3. Tại thẻ Settings (Cài đặt):\n  - Mục Allow: Chọn Whole number (Số nguyên).\n  - Mục Data: Chọn between.\n  - Min: 0 | Max: 10.\n4. Chuyển sang thẻ Error Alert (Cảnh báo lỗi):\n  - Mục Style: Chọn Stop (Dấu X đỏ).\n  - Title (Tiêu đề): 'Dữ liệu không hợp lệ'.\n  - Error message: 'Nhập điểm nằm trong phạm vi từ 0 đến 10'.\n\n👉 **Thử nghiệm:** Nhập thử số 15 vào cột điểm. Nếu báo lỗi là Thành công.",
                        icon: "fa-shield-alt",
                        slideImage: "images/Buổi_10/Bài_1/pic3.png",
                        videoUrl: "https://drive.google.com/file/d/16xC5sONcKWaqAnE_yr2o0BsyXv0xkoGv/preview"
                    },
                    {
                        title: "Yêu cầu 4: Xác định tổng tiền học phí",
                        content: "**Yêu cầu:** 4. Xác định tổng tiền học phí thông qua tên vùng ở câu 2\n\n**Mục đích:** Tính toán nhanh bằng tên gợi nhớ.\n\n**Hướng dẫn:**\n1. Click chuột vào ô cần tính tổng (ô E9).\n2. Gõ công thức sau: =SUM(_hocphi)\n3. Nhấn Enter.\n\n**Giải thích:** Excel sẽ tự động tìm vùng có tên _hocphi (là E3:E8) để cộng lại.",
                        icon: "fa-calculator",
                        videoUrl: "https://drive.google.com/file/d/1zmd7Xs4B4Ii2vGN3Ryvs7TKvtnfxg4fy/preview"
                    },
                    {
                        title: "Mẹo nhỏ & Lỗi thường gặp",
                        content: "- Quên gõ dấu bằng (=) trước công thức.\n- Đặt tên vùng có dấu tiếng Việt hoặc khoảng trắng (Ví dụ: “Học phí” → Sai, phải là _hocphi).\n- Khi làm Data Validation xong, nhập sai nhưng không thấy lỗi → Do chưa bôi đen đúng vùng D3:D8 trước khi cài đặt.\n- **Cách kiểm tra nhanh:** Click vào ô E9, nếu thấy công thức =SUM(_hocphi) là đạt. Nếu thấy =SUM(E3:E8) là chưa đạt.",
                        icon: "fa-lightbulb"
                    },
                    {
                        title: "Hướng dẫn bổ sung: Cách đổi tên vùng (Rename)",
                        content: "**Để thay đổi tên (rename) của một khối ô (Named Range) đã đặt trước đó trong Excel, bạn không thể sửa trực tiếp trong hộp tên (Name Box - ô ở góc trên bên trái) vì việc đó sẽ chỉ tạo ra một tên mới cho vùng đó mà thôi.**\n\nThay vào đó, bạn phải sử dụng công cụ **Name Manager (Trình quản lý tên)**. Dưới đây là các bước chi tiết:\n\n**Cách 1: Sử dụng phím tắt (Nhanh nhất)**\n1. Nhấn tổ hợp phím **Ctrl + F3**.\n2. Cửa sổ **Name Manager** sẽ hiện ra.\n3. Chọn tên bạn muốn sửa trong danh sách.\n4. Nhấn nút **Edit... (Sửa...)**.\n5. Trong ô Name, gõ tên mới mà bạn muốn.\n6. Nhấn **OK**, sau đó nhấn **Close**.\n\n**Cách 2: Sử dụng thanh công cụ (Ribbon)**\n1. Trên thanh menu, chọn tab **Formulas (Công thức)**.\n2. Tìm và chọn mục **Name Manager (Trình quản lý tên)** ở nhóm \"Defined Names\".\n3. Danh sách các tên đã đặt sẽ hiện ra.\n4. Bấm chọn vào tên cũ mà bạn muốn đổi.\n5. Bấm nút **Edit... (Sửa...)** ở phía trên.\n6. Hộp thoại \"Edit Name\" hiện ra, bạn nhập tên mới vào dòng Name.\n7. Bấm **OK** để lưu lại và **Close** để thoát.\n\n**⚠️ Lưu ý quan trọng**\n- **Tự động cập nhật công thức:** Khi bạn đổi tên bằng cách này, tất cả các công thức đang sử dụng tên cũ sẽ tự động cập nhật sang tên mới. Bạn không cần phải đi sửa từng công thức.\n- **Quy tắc đặt tên:** Tên mới phải tuân thủ quy tắc của Excel:\n  + Không được có khoảng trắng (dùng dấu gạch dưới _ thay thế, ví dụ: Doanh_Thu).\n  + Không bắt đầu bằng số.\n  + Không được trùng với địa chỉ ô (ví dụ: không đặt tên là Q1 hay A10).\n  + Không chứa các ký tự đặc biệt (trừ dấu _ và .).",
                        icon: "fa-edit"
                    }
                ]
            },
            {
                id: 102,
                sessionId: 10,
                title: "Bài 2: Xử lý chuỗi & Logic",
                description: "Sử dụng hàm IF kết hợp LEFT, RIGHT, MID, VALUE đê tách thông tin từ mã số.",
                image: "images/Buổi_10/Bài_2/pic1.png",
                video: "",
                requirements: `Yêu cầu
1. Nhập liệu và định dạng bảng tính
2. Xác định ngành học dựa vào 2 ký tự đầu của mã lớp. Biết: 
(NU: Điều dưỡng, IT: Công nghệ thông tin, EL: Ngôn ngữ Anh, LE: Luật, CE: Xây dựng, BA: Quản trị kinh doanh)
3. Xác định khóa học dựa vào 2 ký tự thứ 3 và thứ 4
4. Xác định tên sinh viên dựa vào cột họ và tên`,
                tasks: [
                    { name: "File thực hành", file: "Buổi 10_Bài 1-2-3-4.xlsx" }
                ],
                docs: [
                    { name: "Hướng dẫn chi tiết (PDF)", file: "Buổi 10_Bài 1-2-3-4 [Excel].pdf" }
                ],
                steps: [
                    {
                        title: "Kiến thức cơ bản: Hàm xử lý chuỗi & Hàm IF",
                        content: "**Mục tiêu:** Đây là phần \"khó nhằn\" nhất. Cần dạy sinh viên cách tách nhỏ vấn đề.\n\n**Bước 1: \"Mổ xẻ\" chuỗi văn bản (Hàm LEFT, RIGHT, MID)**\n- **Tình huống:** Cột Mã lớp có dạng NU18A1A. Ta cần lấy 2 chữ đầu (NU) để biết ngành học.\n- **GV giải thích tư duy \"Cắt bánh mì\":**\n  + Muốn lấy đầu (Trái): Dùng **LEFT**. Cú pháp: `LEFT(Chuỗi, Số_ký_tự)`.\n  + Muốn lấy đuôi (Phải): Dùng **RIGHT**.\n  + Muốn lấy khúc giữa: Dùng **MID**. Cú pháp: `MID(Chuỗi, Vị_trí_bắt_đầu, Số_lượng_lấy)`.\n- **Thực hành nhanh:**\n  + Tại một ô trống, gõ: `=LEFT(\"NU18A1A\", 2)` -> Kết quả: \"NU\".\n  + Gõ: `=MID(\"NU18A1A\", 3, 2)` -> Kết quả: \"18\" (Lấy từ ký tự thứ 3, lấy 2 ký tự).\n\n**Bước 2: Hàm IF lồng nhau (Nested IF) - Phần trọng tâm**\n- **Bài toán:** Nếu là NU thì \"Điều dưỡng\", nếu là IT thì \"CNTT\", nếu là EL thì \"Ngôn ngữ Anh\"....\n- **Phương pháp giảng dạy \"Nếu... Thì... Ngược lại\":**\n  + Đừng viết một lèo công thức dài. Hãy viết từng lớp một.\n  + **Lớp 1:** `=IF(LEFT(C3,2)=\"NU\", \"Điều Dưỡng\", \"Chưa biết\")`. (Kiểm tra xem chạy đúng chưa).\n  + **Lớp 2:** Thay chữ \"Chưa biết\" bằng hàm IF tiếp theo.\n- **Công thức mẫu (GV viết từ từ lên bảng/màn hình):**\n  ```excel\n  =IF(LEFT(C3,2)=\"NU\", \"Điều Dưỡng\",\n    IF(LEFT(C3,2)=\"IT\", \"Công nghệ thông tin\",\n      IF(LEFT(C3,2)=\"EL\", \"Ngôn ngữ Anh\",\n        \"Các ngành còn lại\")))\n  ```\n  (Dừng ở 3 ngành để sinh viên hiểu logic, sau đó yêu cầu họ tự viết tiếp cho LE, CE, BA).\n\n**Bước 3: Xử lý phần \"Tách tên\" (Nâng cao/Optional)**\n- **Lưu ý:** Công thức tách tên trong tài liệu dùng logic dò ngược từ cuối chuỗi (kết hợp MID, LEN, RIGHT) khá phức tạp với người mới.\n- **Cách giải thích đơn giản hóa:**\n  \"Công thức này hoạt động bằng cách dò từ phải sang trái, hễ gặp dấu cách (khoảng trắng) đầu tiên thì cắt toàn bộ phần chữ sau dấu cách đó ra.\"\n- **Lớp học chậm:** Có thể bỏ qua việc giải thích chi tiết logic của công thức dài dòng này mà cung cấp sẵn công thức cho sinh viên chép để trải nghiệm, dành thời gian kỹ hơn cho hàm VLOOKUP ở bài sau (vì VLOOKUP quan trọng hơn trong thực tế).",
                        icon: "fa-code"
                    },
                    {
                        title: "Yêu cầu 1: Nhập liệu và định dạng bảng tính",
                        content: "**Yêu cầu:** 1. Nhập liệu và định dạng bảng tính\n\n**Mục đích:** Có dữ liệu chuẩn để hàm chạy đúng.\n\n**Hướng dẫn:**\n- Nhập dữ liệu: Nhập bảng tính từ ô A1 đến F8 theo mẫu.\n- **Lưu ý quan trọng:** Cột “Mã lớp” (Cột C) phải nhập chính xác, không thừa dấu cách.\n- Dữ liệu mẫu:\n  + C3: NU18A1A\n  + C4: IT19A1A\n  + ...\n- Định dạng: Kẻ khung (All Borders) cho bảng tính đẹp mắt.",
                        icon: "fa-keyboard",
                        slideImage: "images/Buổi_10/Bài_2/pic1.png"
                    },
                    {
                        title: "Yêu cầu 2: Xác định ngành học",
                        content: "**Yêu cầu:** 2. Xác định ngành học dựa vào 2 ký tự đầu của mã lớp. Biết: \n(NU: Điều dưỡng, IT: Công nghệ thông tin, EL: Ngôn ngữ Anh, LE: Luật, CE: Xây dựng, BA: Quản trị kinh doanh)\n\n**Mục đích:** Dạy máy tính “Nếu thấy 2 chữ đầu là IT thì điền Công nghệ thông tin”.\n\n**Phân tích logic:**\n- Lấy 2 ký tự đầu của Mã lớp → dùng hàm LEFT.\n- So sánh với quy ước (NU, IT, EL…) → dùng hàm IF lồng nhau.\n\n**Thao tác:**\n1. Click vào ô D3.\n2. Nhập công thức:\n=IF(LEFT(C3,2)=\"NU\", \"Điều Dưỡng\", IF(LEFT(C3,2)=\"IT\", \"Công nghệ thông tin\", IF(LEFT(C3,2)=\"EL\", \"Ngôn ngữ Anh\", IF(LEFT(C3,2)=\"LE\", \"Luật\", IF(LEFT(C3,2)=\"CE\", \"Xây dựng\", \"Quản trị kinh doanh\")))))\n3. **Giải thích:**\n  - LEFT(C3,2): Cắt lấy 2 chữ cái đầu.\n  - IF(...): Nếu đúng mã này thì trả về tên ngành, sai xét tiếp.\n4. Kéo tay nắm điền (fill handle) xuống các ô còn lại.",
                        icon: "fa-code-branch",
                        slideImage: "images/Buổi_10/Bài_2/pic1.png",
                        videoUrl: "https://drive.google.com/file/d/1tGIECMBkeFWi6MqzlFl524HSeuoQWYCx/preview"
                    },
                    {
                        title: "Yêu cầu 3: Xác định khóa học",
                        content: "**Yêu cầu:** 3. Xác định khóa học dựa vào 2 ký tự thứ 3 và thứ 4\n\n**Mục đích:** Lấy con số nằm ở giữa mã lớp (Ví dụ: Lấy số 18 từ NU18A1A).\n\n**Phân tích logic:**\n- Số 18 nằm ở vị trí thứ 3 và lấy 2 ký tự → dùng hàm MID.\n- Kết quả cắt ra là văn bản, muốn tính toán phải chuyển thành số → dùng hàm VALUE.\n\n**Thao tác:**\n1. Click vào ô E3.\n2. Nhập công thức: =VALUE(MID(C3,3,2))\n3. **Giải thích:**\n  - MID(C3,3,2): Bắt đầu từ ký tự thứ 3, lấy 2 ký tự.\n  - VALUE(...): Biến kết quả thành con số.",
                        icon: "fa-cut",
                        slideImage: "images/Buổi_10/Bài_2/pic1.png",
                        videoUrl: "https://drive.google.com/file/d/1uGoWSS2CHVXRSwnB4AyX-E8Ndc-27LRO/preview"
                    },
                    {
                        title: "Yêu cầu 4: Xác định tên sinh viên",
                        content: "**Yêu cầu:** 4. Xác định tên sinh viên dựa vào cột họ và tên\n\n**Mục đích:** Lấy phần tên cuối cùng trong họ tên (Ví dụ: “Nguyễn Thục Anh” → lấy “Anh”).\n\n**Phân tích logic:** Dò tìm từng ký tự từ phải sang trái, gặp dấu cách thì cắt chuỗi.\n\n**Thao tác:**\n1. Click vào ô F3.\n2. Nhập công thức:\n=IF(MID(B3,LEN(B3)-1,1)=\" \", RIGHT(B3,1), IF(MID(B3,LEN(B3)-2,1)=\" \", RIGHT(B3,2), IF(MID(B3,LEN(B3)-3,1)=\" \", RIGHT(B3,3), IF(MID(B3,LEN(B3)-4,1)=\" \", RIGHT(B3,4), RIGHT(B3,5)))))\n\n**Mẹo giải thích:** “Công thức này giống như đi dò ngược từ cuối tên lên, bao giờ gặp dấu cách thì dừng lại và cắt lấy cái tên ra.”",
                        icon: "fa-user-tag",
                        slideImage: "images/Buổi_10/Bài_2/pic1.png",
                        videoUrl: "https://drive.google.com/file/d/1rJj_LxlfAV1pF1Sl6QG687XZtdJYcC4X/preview"
                    },
                    {
                        title: "Mẹo hỗ trợ & Lỗi thường gặp",
                        content: "- **Lỗi dấu phẩy/chấm phẩy:** Máy trường có thể dùng dấu chấm phẩy (;). Nếu Enter báo lỗi, hãy đổi toàn bộ dấu (,) thành (;).\n- **Lỗi #NAME?:** Gõ sai tên hàm (VD: LEF, VALU...).\n- **Lỗi #VALUE! ở câu Khóa học:** Do cột Mã lớp gõ thiếu hoặc thừa dấu cách lạ.\n- **Lời khuyên:** Câu 4 (Tách tên) là câu phân loại. Sinh viên yếu chỉ cần làm được câu 2 và 3 là đạt yêu cầu cơ bản.",
                        icon: "fa-lightbulb"
                    }
                ]
            },
            {
                id: 103,
                sessionId: 10,
                title: "Bài 3: Tra cứu & Thống kê",
                description: "Thành thạo VLOOKUP để dò tìm giá và COUNTIF, SUMIF để báo cáo số liệu.",
                image: "images/Buổi_10/Bài_3/pic1.png",
                video: "",
                requirements: `Yêu cầu
1. Nhập liệu và định dạng bảng tính
2. Xác định thứ trong tuần dựa vào ngày sinh
3. Xác định cột đơn giá dựa vào mã ngành và bảng 1
4. Xác định cột thành tiền. Biết: Thành tiền bằng số tín chỉ nhân với đơn giá
5. Lập công thức điền thông tin cho bảng thống kê`,
                tasks: [
                    { name: "File thực hành", file: "Buổi 10_Bài 1-2-3-4.xlsx" }
                ],
                docs: [
                    { name: "Hướng dẫn chi tiết (PDF)", file: "Buổi 10_Bài 1-2-3-4 [Excel].pdf" }
                ],
                steps: [
                    {
                        title: "Kiến thức cơ bản: Hàm Tra Cứu (VLOOKUP) & Ngày Tháng",
                        content: "**Bước 1: Xử lý Ngày tháng (Hàm WEEKDAY)**\n- **Tình huống:** Cột D là ngày sinh, ta cần biết ngày đó là Thứ 2 hay Chủ nhật để điền vào cột E.\n- **GV giải thích:** \"Máy tính lưu ngày tháng là một con số, hàm WEEKDAY giúp quy đổi con số đó ra thứ tự trong tuần (Chủ nhật là số 1, Thứ 2 là số 2...)\".\n- **Thao tác:**\n  + Yêu cầu sinh viên gõ `=WEEKDAY(D3, 1)`. Kết quả trả về số (ví dụ: 2).\n  + **Kết hợp bài cũ (Hàm IF):** Bây giờ lồng hàm IF vào để máy \"nói tiếng người\":\n    `=IF(WEEKDAY(D3,1)=1, \"Chủ nhật\", IF(WEEKDAY(D3,1)=2, \"Thứ 2\", ...))`.\n  + *Mẹo:* Nhắc sinh viên copy công thức IF dài này từ tài liệu hoặc file mẫu nếu gõ quá lâu, nhưng phải hiểu logic.\n\n**Bước 2: Hàm \"Thần thánh\" VLOOKUP (Quan trọng nhất buổi học)**\n- **Bài toán:** Có Mã ngành (ví dụ \"IT\") ở bảng chính, cần lấy \"Đơn giá\" (480.000) từ Bảng phụ (Bảng 1) điền vào.\n- **GV giải thích tư duy \"Đi tìm danh bạ\":** Hàm VLOOKUP cần 4 thông tin (4 tham số):\n  1. **Tìm cái gì?** (Mã ngành IT ở dòng hiện tại - C3).\n  2. **Tìm ở đâu?** (Quét chọn Bảng 1 - Bảng phụ). **QUAN TRỌNG:** Quét xong phải nhấn **F4** ngay để khóa bảng lại.\n  3. **Lấy cột số mấy?** (Trong Bảng 1, Đơn giá nằm ở cột thứ 2, nên gõ số 2).\n  4. **Tìm chính xác không?** (Gõ số 0 để tìm chính xác tuyệt đối).\n- **Thực hành:**\n  + Công thức: `=VLOOKUP(C3, $G$13:$H$16, 2, 0)`.\n  + *Lỗi thường gặp:* Sinh viên quên nhấn F4 hoặc đếm sai thứ tự cột. Hãy yêu cầu một sinh viên làm mẫu trên máy chiếu.\n\n**Bước 3: Thống kê có điều kiện (COUNTIF, SUMIF)**\n- **Bài toán:** Đếm xem có bao nhiêu sinh viên ngành IT? Tổng tiền của ngành IT là bao nhiêu?\n- **GV hướng dẫn:**\n  + **COUNTIF (Đếm nếu...):** `=COUNTIF(Vùng_cần_đếm, Điều_kiện)`.\n    *Ví dụ:* `=COUNTIF($C$3:$C$8, \"IT\")` (hoặc trỏ vào ô chứa chữ IT).\n  + **SUMIF (Cộng nếu...):** `=SUMIF(Vùng_chứa_điều_kiện, Điều_kiện, Vùng_cần_tính_tổng)`.\n    *Ví dụ:* `=SUMIF($C$3:$C$8, \"IT\", $H$3:$H$8)`.\n  + *Lưu ý:* Vùng chứa điều kiện và Vùng tính tổng phải song song nhau (cùng kích thước).",
                        icon: "fa-search"
                    },
                    {
                        title: "Yêu cầu 1: Nhập liệu và định dạng bảng tính",
                        content: "**Yêu cầu:** 1. Nhập liệu và định dạng bảng tính\n\n**Mục đích:** Xây dựng bảng chính và bảng phụ chính xác từng ô.\n\n**Hướng dẫn:**\n- **Bảng chính (H1-H8):** Nhập tiêu đề từ A2:H2 (STT, Họ tên...) và dữ liệu mẫu.\n  + *Lưu ý:* Cột Ngày sinh (D) nhập đúng định dạng ngày/tháng/năm.\n- **Bảng 1 (Đơn giá):** Nhập tại vùng G12:H16.\n  + G13: IT - H13: 480000\n  + G14: EL - H14: 450000\n  + ... (nhập hết đến BA).\n- **Bảng Thống kê:** Nhập tại vùng B12:E16.\n  + Cột B chứa tên ngành (IT, EL, NU, BA).",
                        icon: "fa-table",
                        slideImage: "images/Buổi_10/Bài_3/pic1.png"
                    },
                    {
                        title: "Yêu cầu 2: Xác định thứ trong tuần",
                        content: "**Yêu cầu:** 2. Xác định thứ trong tuần dựa vào ngày sinh\n\n**Mục đích:** Đổi ngày sinh sang thứ (Thứ 2... Chủ nhật).\n\n**Thao tác:**\n1. Click vào ô E3.\n2. Nhập công thức:\n=IF(WEEKDAY(D3,1)=1,\"Chủ nhật\", IF(WEEKDAY(D3,1)=2,\"Thứ 2\", IF(WEEKDAY(D3,1)=3,\"Thứ 3\", IF(WEEKDAY(D3,1)=4,\"Thứ 4\", IF(WEEKDAY(D3,1)=5,\"Thứ 5\", IF(WEEKDAY(D3,1)=6,\"Thứ 6\", \"Thứ 7\"))))))\n3. Enter và kéo công thức xuống.",
                        icon: "fa-calendar-alt",
                        slideImage: "images/Buổi_10/Bài_3/pic1.png",
                        videoUrl: "https://drive.google.com/file/d/1o3s8ackFaoRp3S1ThfZzsP2uWHC0oyBG/preview"
                    },
                    {
                        title: "Yêu cầu 3: Xác định cột đơn giá",
                        content: "**Yêu cầu:** 3. Xác định cột đơn giá dựa vào mã ngành và bảng 1\n\n**Mục đích:** Máy tự dò “Mã ngành” ở bảng chính, so sánh với “Bảng 1” để lấy giá tương ứng.\n\n**Thao tác:**\n1. Click vào ô G3, gõ: =VLOOKUP(\n2. Chọn các thành phần:\n  - **Giá trị dò:** Click ô C3. Gõ dấu phẩy (,)\n  - **Bảng dò:** Quét chọn Bảng 1 (G13:H16). **QUAN TRỌNG: Nhấn F4 ngay** -> $G$13:$H$16.\n  - **Cột lấy số liệu:** Gõ số 2. Gõ dấu phẩy (,)\n  - **Kiểu dò:** Gõ số 0 (chính xác).\n3. Công thức: =VLOOKUP(C3, $G$13:$H$16, 2, 0)\n4. Enter và kéo xuống.",
                        icon: "fa-search-dollar",
                        slideImage: "images/Buổi_10/Bài_3/pic1.png",
                        videoUrl: "https://drive.google.com/file/d/1LCh7brxb-ZjpPvXxNIyZhe3-ttkIP98K/preview"
                    },
                    {
                        title: "Yêu cầu 4: Xác định cột thành tiền",
                        content: "**Yêu cầu:** 4. Xác định cột thành tiền. Biết: Thành tiền bằng số tín chỉ nhân với đơn giá\n\n**Mục đích:** Phép nhân cơ bản.\n\n**Thao tác:**\n1. Click vào ô H3.\n2. Gõ công thức: =F3*G3 (Số tín chỉ nhân Đơn giá).\n3. Enter và kéo xuống.",
                        icon: "fa-calculator",
                        slideImage: "images/Buổi_10/Bài_3/pic1.png"
                    },
                    {
                        title: "Yêu cầu 5: Lập công thức điền thông tin cho bảng thống kê",
                        content: "**Yêu cầu:** 5. Lập công thức điền thông tin cho bảng thống kê\n\n**Mục đích:** Đếm số sinh viên và tổng tiền từng ngành.\n\n**a. Đếm số sinh viên (COUNTIF):**\n- Click ô C13 (dòng IT).\n- Công thức: =COUNTIF($C$3:$C$8, B13)\n- Giải thích: $C$3:$C$8 là cột Mã ngành (Nhớ F4); B13 là điều kiện “IT”.\n\n**b. Tổng tiền (SUMIF):**\n- Click ô D13.\n- Công thức: =SUMIF($C$3:$C$8, B13, $H$3:$H$8)\n- Giải thích: $H$3:$H$8 là cột Thành tiền (Nhớ F4).",
                        icon: "fa-chart-bar",
                        slideImage: "images/Buổi_10/Bài_3/pic1.png",
                        videoUrl: "https://drive.google.com/file/d/1RA_Ys13ts6YOkB79i-Ckhvj6UP-u7fcu/preview"
                    },
                    {
                        title: "Kiến thức nâng cao: Hàm SUMPRODUCT (Thay thế SUMIF)",
                        content: "**Đây là một cách dùng nâng cao của SUMPRODUCT (dùng để tính tổng có điều kiện thay cho SUMIF). Vì sinh viên mới học, bạn cần giảng kỹ về cơ chế \"Mảng Logic\" (True/False) thì họ mới hiểu được tại sao phép nhân lại lọc được dữ liệu.**\n\n**1. Ý tưởng cốt lõi (Giải thích trước khi gõ)**\n- **Ý nghĩa cơ bản:** SUM (Cộng) + PRODUCT (Nhân). Hàm này nhân các cặp số tương ứng rồi cộng tổng lại.\n- **Ứng dụng trong bài này:** Chúng ta dùng phép nhân để \"lọc\" dữ liệu.\n- **Trong máy tính:** TRUE (Đúng) = 1, FALSE (Sai) = 0.\n- **Quy tắc:** Bất cứ số nào nhân với 1 thì bằng chính nó (Lấy), nhân với 0 thì bằng 0 (Loại).\n\n**2. Phân tích công thức trong Bài 3**\n- **Yêu cầu:** Tính tổng tiền cho từng ngành (IT, EL, NU, BA) dùng SUMPRODUCT.\n- **Công thức mẫu:** `=$ =SUMPRODUCT((C3:C8=B13)*(H3:H8))`\n- **Diễn giải cho sinh viên:**\n  + **Vùng 1 - Điều kiện (C3:C8=B13):**\n    * Máy sẽ chạy dọc cột C (Mã ngành).\n    * Nếu gặp \"IT\" (giống ô B13) -> Trả về 1.\n    * Nếu gặp \"EL\" (khác ô B13) -> Trả về 0.\n    * Kết quả tạo ra một mảng ảo: `{1; 0; 1; 0...}`.\n  + **Vùng 2 - Vùng tính tổng (H3:H8):**\n    * Chứa số tiền thực tế: ví dụ `{5 triệu; 4 triệu; 6 triệu...}`.\n  + **Phép nhân *:**\n    * Dòng nào là IT: `1 * 5 triệu = 5 triệu` (Được giữ lại).\n    * Dòng nào không phải IT: `0 * 4 triệu = 0` (Bị loại bỏ).\n  + **Kết quả:** Hàm cộng dồn các số còn lại.\n\n**3. Các bước thực hành (Step-by-step)**\n- **Hướng dẫn sinh viên thao tác tại ô E13 (cột Tổng tiền Sumproduct):**\n  1. Gõ: `=SUMPRODUCT(`\n  2. Mở ngoặc đơn thứ nhất (để chứa điều kiện): `(` -> Quét cột Mã ngành trên bảng chính (`$C$3:$C$8`). **LƯU Ý:** Nhấn **F4** ngay lập tức.\n  3. Gõ dấu bằng và chọn ô điều kiện: `=B13` (Mã IT ở bảng thống kê - **không nhấn F4**).\n  4. Đóng ngoặc đơn điều kiện: `)`\n  5. Gõ dấu nhân: `*`\n  6. Mở ngoặc đơn thứ hai (để chứa tiền): `(` -> Quét cột Thành tiền trên bảng chính (`$H$3:$H$8`). **LƯU Ý:** Nhấn **F4**.\n  7. Đóng ngoặc đơn thứ hai và ngoặc hàm: `))`\n  8. Nhấn Enter.\n\n**4. So sánh nhanh với SUMIF**\n- **Hỏi:** \"Tại sao phải dùng công thức dài dòng này trong khi SUMIF cũng ra kết quả y hệt?\"\n- **Giải thích:**\n  + **SUMIF** là cách chuyên dụng, dễ dùng hơn cho trường hợp này.\n  + **SUMPRODUCT** là \"dao mổ trâu\", dùng nó ở đây để tập luyện tư duy mảng. Sau này khi gặp các bài toán khó hơn (ví dụ: Tính tổng tiền của ngành IT nhưng chỉ tính những người sinh sau năm 2000) thì SUMPRODUCT mới thực sự tỏa sáng vì nó xử lý được nhiều điều kiện phức tạp mà SUMIF cũ không làm được.",
                        icon: "fa-layer-group"
                    },
                    {
                        title: "Mẹo hỗ trợ & Lỗi thường gặp",
                        content: "- **Vấn đề phím F4:** Nếu bấm F4 mà tắt tiếng/tăng sáng màn hình -> Phải bấm tổ hợp Fn + F4. Nếu không được thì gõ tay dấu $ (Shift + 4).\n- **Lỗi #N/A:** Do Mã ngành ở bảng chính gõ thừa dấu cách (VD 'IT ' khác 'IT').\n- **Định dạng ngày:** Nếu nhập 20/03/2002 mà canh trái -> Máy hiểu sai. Mẹo: Nhập theo chuẩn máy đang hiển thị (Tháng/Ngày hay Ngày/Tháng) để đúng trước.",
                        icon: "fa-lightbulb"
                    }
                ]
            },
            {
                id: 104,
                sessionId: 10,
                title: "Bài 4: Hàm CSDL Nâng cao",
                description: "Sử dụng DSUM, DCOUNT và tạo vùng điều kiện (Criteria Range) phức tạp.",
                image: "images/Buổi_10/Bài_4/pic1.png",
                video: "",
                requirements: `Yêu cầu
1. Nhập liệu và định dạng bảng tính
2. Xác định cột tên sản phẩm dựa vào mã hàng và bảng 1
3. Xác định cột nhãn hiệu dựa vào mã hàng và bảng 2
4. Xác định cột đơn giá dựa vào mã hàng và bảng 1
5. Xác định cột thành tiền bằng số lượng nhân đơn giá. Biết:
Nếu bán trước ngày 10 và hiệu Debon được giảm 10% đơn giá.
6. Hoàn thành bảng thống kê theo mặt hàng Revon
7. Hoàn thành bảng thống kê theo tháng 2
8. Hoàn thành bảng thống kê 1 và bảng thống kê 2`,
                tasks: [
                    { name: "File thực hành", file: "Buổi 10_Bài 1-2-3-4.xlsx" }
                ],
                docs: [
                    { name: "Hướng dẫn chi tiết (PDF)", file: "Buổi 10_Bài 1-2-3-4 [Excel].pdf" }
                ],
                steps: [
                    {
                        title: "Kiến thức cơ bản: Hàm Cơ Sở Dữ Liệu (DSUM, DCOUNT)",
                        content: "**Đây là bài khó nhất vì khái niệm Vùng điều kiện (Criteria Range) khá trừu tượng với người mới.**\n\n**Bước 1: Chuẩn bị dữ liệu & VLOOKUP nâng cao**\n- Yêu cầu sinh viên dùng VLOOKUP để điền tên sản phẩm và nhãn hiệu tương tự Bài 3.\n- *Nâng cao (Optional):* Câu tính Đơn giá trong Bài 4 kết hợp VLOOKUP và IF (Nếu nhãn hiệu là Revon thì lấy cột 3, Debon lấy cột 4...). Nếu lớp yếu, có thể bỏ qua phần lồng IF này và cho sinh viên lấy cố định cột 3 để đơn giản hóa.\n\n**Bước 2: Khái niệm \"Vùng Tiêu Chuẩn\" (Criteria Area)**\n- **GV giải thích:** \"Khác với SUMIF chỉ quy định điều kiện đơn giản trong công thức, các hàm D... (DSUM, DCOUNT) cần ta vẽ riêng một cái bảng nhỏ bên ngoài để chứa điều kiện.\"\n- **Quy tắc \"Vùng Tiêu Chuẩn\":**\n  1. Tiêu đề của vùng tiêu chuẩn phải giống y hệt tiêu đề của bảng dữ liệu gốc (Copy-Paste cho chắc ăn).\n  2. Điều kiện viết ngay bên dưới tiêu đề đó.\n- **Thực hành tạo vùng điều kiện (Theo tài liệu gợi ý):**\n  + Copy tiêu đề \"Nhãn hiệu\" ra một chỗ trống (ví dụ C48 đến D48).\n  + Gõ \"Revon\" xuống dưới ô Nhãn hiệu.\n  + Đây chính là vùng điều kiện để lọc tất cả hàng hóa là Revon.\n\n**Bước 3: Hàm DSUM (Tính tổng Database)**\n- **Cú pháp:** `=DSUM(Toàn_bộ_bảng_lớn, Tên_cột_cần_cộng, Vùng_tiêu_chuẩn_vừa_tạo)`.\n- **Thao tác:**\n  1. Chọn ô kết quả.\n  2. Gõ `=DSUM(`.\n  3. **Tham số 1 (Database):** Bôi đen toàn bộ bảng chính (bao gồm cả tiêu đề) -> Nhấn **F4**.\n  4. **Tham số 2 (Field):** Click vào ô tiêu đề cột \"Thành tiền\" (hoặc gõ tên cột trong ngoặc kép).\n  5. **Tham số 3 (Criteria):** Bôi đen Vùng tiêu chuẩn vừa tạo ở Bước 2 -> Nhấn **F4**.\n  6. Enter.\n\n**Bước 4: So sánh DSUM và SUMIF**\n- **Hỏi sinh viên:** \"Tại sao phải dùng DSUM rắc rối thế trong khi SUMIF cũng làm được?\"\n- **Giải thích:** \"DSUM mạnh hơn khi ta có nhiều điều kiện phức tạp (ví dụ: Vừa là Revon, vừa bán trong tháng 2, vừa có số lượng > 50). Lúc đó ta chỉ cần thêm cột vào Vùng tiêu chuẩn là xong, không cần sửa công thức.\"",
                        icon: "fa-database"
                    },
                    {
                        title: "Yêu cầu 1: Nhập liệu và định dạng bảng tính",
                        content: "**Yêu cầu:** 1. Nhập liệu và định dạng bảng tính\n\n**Mục đích:** Xây dựng cơ sở dữ liệu bán hàng chuẩn.\n\n**Hướng dẫn:**\n- **Bảng Chính (A2:H14):** Nhập dữ liệu mã hàng, ngày bán...\n  + *Lưu ý:* Cột Ngày bán (D) đúng định dạng; Cột Mã hàng (B) không thừa dấu cách (VD 'KM1-RE').\n- **Bảng Phụ:**\n  + Bảng 1 (Đơn giá): A18:E21.\n  + Bảng 2 (Nhãn hiệu): G18:H20.\n- **Bảng Thống kê & Điều kiện:** Nhập chính xác các bảng nhỏ phía dưới.\n- **Mẹo:** Copy tiêu đề (VD 'Nhãn hiệu') từ dòng 2 dán xuống bảng điều kiện để tránh sai chính tả.",
                        icon: "fa-table",
                        slideImage: "images/Buổi_10/Bài_4/pic1.png"
                    },
                    {
                        title: "Yêu cầu 2 & 3: Xác định tên sản phẩm và nhãn hiệu",
                        content: "**Yêu cầu:** 2. Xác định cột tên sản phẩm dựa vào mã hàng và bảng 1\n3. Xác định cột nhãn hiệu dựa vào mã hàng và bảng 2\n\n**Mục đích:** Luyện tập cắt chuỗi (LEFT/RIGHT) kết hợp tra cứu (VLOOKUP).\n\n**a. Tên sản phẩm (Cột E):**\n- Công thức: =VLOOKUP(LEFT(B3,1), $A$19:$E$21, 2, 0)\n- Giải thích: Cắt ký tự đầu Mã hàng, dò trong Bảng 1, lấy cột 2.\n\n**b. Nhãn hiệu (Cột F):**\n- Công thức: =VLOOKUP(RIGHT(B3,2), $G$18:$H$20, 2, 0)\n- Giải thích: Cắt 2 ký tự cuối Mã hàng, dò trong Bảng 2, lấy cột 2.",
                        icon: "fa-tag",
                        slideImage: "images/Buổi_10/Bài_4/pic1.png",
                        videoUrl: "https://drive.google.com/file/d/1drJKdd2dllxqANjuMUkHcsBW4WUjLsQ_/preview"
                    },
                    {
                        title: "Yêu cầu 4: Xác định cột đơn giá",
                        content: "**Yêu cầu:** 4. Xác định cột đơn giá dựa vào mã hàng và bảng 1\n\n**Mục đích:** Tra cứu động (Cột lấy giá thay đổi tùy theo nhãn hiệu).\n\n**Phân tích:**\n- Revon lấy cột 3, Debon lấy cột 4, Maybeline lấy cột 5 -> Lồng hàm IF vào vị trí số cột.\n\n**Thao tác:**\n1. Click ô G3.\n2. Công thức:\n=VLOOKUP(LEFT(B3,1), $A$19:$E$21, IF(F3=\"Revon\", 3, IF(F3=\"Debon\", 4, 5)), 0)\n3. Giải thích: Nếu là Revon lấy cột 3, Debon lấy cột 4, còn lại cột 5.",
                        icon: "fa-search-dollar",
                        slideImage: "images/Buổi_10/Bài_4/pic1.png"
                    },
                    {
                        title: "Yêu cầu 5: Xác định cột thành tiền",
                        content: "**Yêu cầu:** 5. Xác định cột thành tiền bằng số lượng nhân đơn giá. Biết:\nNếu bán trước ngày 10 và hiệu Debon được giảm 10% đơn giá.\n\n**Mục đích:** Tính toán với điều kiện kép (AND).\n\n**Logic:** Nếu (Hiệu là Debon VÀ Ngày bán < 10) thì tính 90%, ngược lại 100%.\n\n**Thao tác (Ô H3):**\n=C3 * G3 * IF(AND(F3=\"Debon\", DAY(D3)<10), 90%, 1)\n- C3*G3: Số lượng x Đơn giá.\n- AND(...): Kiểm tra thỏa mãn cả 2 điều kiện.\n- 90%, 1: Mức giá áp dụng.",
                        icon: "fa-calculator",
                        slideImage: "images/Buổi_10/Bài_4/pic2.png",
                        videoUrl: "https://drive.google.com/file/d/1fPbKMAZFZOL1jBw8d3kdAFuL1Z9xtvzp/preview"
                    },
                    {
                        title: "Yêu cầu 6-8: Hoàn thành bảng thống kê",
                        content: "**Yêu cầu:** 6. Hoàn thành bảng thống kê theo mặt hàng Revon\n7. Hoàn thành bảng thống kê theo tháng 2\n8. Hoàn thành bảng thống kê 1 và bảng thống kê 2\n\n**Quy tắc 'Thần chú':** =DSUM(Bảng_Lớn, \"Tên_Cột_Tính_Tổng\", Vùng_Điều_Kiện)\n\n**Bước 1: Tạo vùng điều kiện (Criteria):**\n- Nhập ở dòng 48-49.\n- Ví dụ Revon: Ô trên 'Nhãn hiệu', ô dưới 'Revon'.\n- Lưu ý: Tiêu đề phải copy từ bảng chính xuống.\n\n**Bước 2: Viết hàm (Ví dụ Tổng số lượng Revon - Ô B25):**\n=DSUM($A$2:$H$14, \"Số lượng\", C48:C49)\n- $A$2:$H$14: Quét toàn bộ bảng chính (F4).\n- \"Số lượng\": Tên cột cần cộng.\n- C48:C49: Vùng điều kiện vừa tạo.",
                        icon: "fa-database",
                        slideImage: "images/Buổi_10/Bài_4/pic3.png"
                    },
                    {
                        title: "Mẹo hỗ trợ & Lỗi thường gặp",
                        content: "- **Vùng điều kiện (Criteria):** Phải quét đủ 2 dòng (Tiêu đề + Điều kiện). Nên tô màu vàng để dễ nhìn.\n- **Lỗi Tiêu đề:** Nếu bảng chính là 'Nhãn hiệu' mà điều kiện là 'Nhãn Hiệu' (H hoa) hoặc thừa dấu cách -> DSUM trả về 0.\n- **Kiểm tra nhanh:** Nếu kết quả ra số quá lớn (bằng tổng cả bảng) -> Do quét sai vùng điều kiện (quét ô trống). Nếu ra 0 -> Sai chính tả tiêu đề.",
                        icon: "fa-lightbulb"
                    }
                ]
            },
            {
                id: 105,
                sessionId: 10,
                title: "BTVN Phần 1: Quản lý kho & Mã vật tư",
                description: "Luyện tập nhập liệu, Validation và các hàm xử lý chuỗi (LEFT, RIGHT, MID, IF).",
                image: "images/Buổi_10/Bài_1/pic1.png",
                video: "",
                tasks: [],
                docs: [
                    { name: "Đề bài chi tiết (PDF)", file: "Buổi 10_Bài 1-2-3-4 [Excel].pdf" }
                ],
                steps: [
                    {
                        title: "BÀI 1: NHẬP LIỆU VÀ KIỂM SOÁT (Mức độ: Dễ)",
                        content: "**Mục tiêu:** Luyện tập thao tác nhập thô, kẻ bảng, đặt tên vùng (Name Range) và Ràng buộc dữ liệu (Data Validation).\n\n**1. Tạo dữ liệu:**\n- Nhập bảng tính vào Sheet 1 (từ ô A1).\n- Cột số liệu: STT | Tên Phụ Tùng | Mã Kho (KHO A/B/C) | Số Lượng (Trống) | Đơn Giá | Thành Tiền (Trống).\n\n**2. Yêu cầu thực hiện:**\n- **Câu 1:** Đặt tên vùng (Define Name) cho cột Đơn Giá (D2:D6) là `_dongia`.\n- **Câu 2:** Thiết lập Data Validation cho cột Số Lượng (C2:C6):\n  + Allow: Whole number (Số nguyên).\n  + Between: 1 đến 100.\n  + Error Message: “Lỗi rồi! Chỉ nhập số lượng từ 1 đến 100”.\n- **Câu 3:** Nhập thử số liệu 101 để kiểm tra lỗi.\n- **Câu 4:** Tính Thành Tiền = Số Lượng * _dongia (Dùng tên vùng).",
                        icon: "fa-edit"
                    },
                    {
                        title: "BÀI 2: GIẢI MÃ MÃ VẬT TƯ (Mức độ: Trung bình)",
                        content: "**Mục tiêu:** Luyện tập hàm LEFT, RIGHT, MID kết hợp IF lồng nhau.\n\n**1. Chuẩn bị:**\n- Nhập bảng tính vào Sheet 2.\n- Mã Vật Tư mẫu: TO-2023-L, HO-2022-N, MA-2024-K...\n\n**2. Yêu cầu:**\n- **Câu 1: Xác định Hãng Xe** (2 ký tự đầu - LEFT):\n  + TO -> Toyota, HO -> Honda, MA -> Mazda, còn lại -> Kia.\n  + Công thức: `=IF(LEFT(B2,2)=\"TO\", \"Toyota\", ...)`\n\n- **Câu 2: Năm Sản Xuất** (4 ký tự giữa - MID):\n  + Lấy từ vị trí số 4, lấy 4 ký tự.\n  + Công thức: `=VALUE(MID(B2, 4, 4))`\n\n- **Câu 3: Loại Phụ Tùng** (1 ký tự cuối - RIGHT):\n  + L -> Lốp xe, N -> Nhớt máy, còn lại -> Kính xe.",
                        icon: "fa-code"
                    },
                    {
                        title: "Hướng dẫn tự chấm nhanh",
                        content: "**Bài 1 (Thành tiền):** Click ô Thành tiền, phải thấy `=C2*_dongia`. Nếu thấy `=C2*D2` là sai.\n**Bài 1 (Validation):** Nhập 200 phải báo lỗi tiếng Việt.\n**Bài 2 (Hãng xe):** Đếm đủ số dấu đóng ngoặc `)))`. Thiếu dấu ngoặc là lỗi phổ biến nhất.",
                        icon: "fa-check-double"
                    }
                ]
            },
            {
                id: 106,
                sessionId: 10,
                title: "BTVN Phần 2: Hóa đơn & Báo cáo (Nâng cao)",
                description: "Tính toán hóa đơn dịch vụ với VLOOKUP và làm báo cáo thống kê với DSUM, DCOUNT.",
                image: "images/Buổi_10/Bài_3/pic1.png",
                video: "",
                tasks: [],
                docs: [
                    { name: "Đề bài chi tiết (PDF)", file: "Buổi 10_Bài 1-2-3-4 [Excel].pdf" }
                ],
                steps: [
                    {
                        title: "BÀI 3: HÓA ĐƠN DỊCH VỤ (Quan trọng)",
                        content: "**Mục tiêu:** Luyện VLOOKUP và SUMIF.\n\n**1. Chuẩn bị:**\n- Bảng Giá (A15:C18): Mã DV (DN, RX, BD) | Tên DV | Đơn Giá.\n- Bảng Nhật Ký (A1): Biển Số | Mã DV | Số Lượng...\n\n**2. Yêu cầu:**\n- **Điền Tên Dịch Vụ:** `=VLOOKUP(C2, $A$16:$C$18, 2, 0)` (Nhớ F4 khóa bảng).\n- **Điền Đơn Giá:** Tương tự, lấy cột 3.\n- **Thành Tiền:** = Số Lượng * Đơn Giá.\n- **Thống Kê:** Tổng doanh thu dịch vụ 'DN' bằng `=SUMIF(...)`.",
                        icon: "fa-file-invoice-dollar"
                    },
                    {
                        title: "BÀI 4: BÁO CÁO DOANH THU (Dành cho SV Khá)",
                        content: "**Mục tiêu:** Tạo Vùng điều kiện và dùng hàm DSUM/DCOUNT.\n\n**1. Tạo Vùng Điều Kiện (Criteria):**\n- Vùng 1: Tiêu đề 'Biển Số' + Giá trị '47A-12345'.\n- Vùng 2: Tiêu đề 'Đơn Giá' + Giá trị '>100000'.\n\n**2. Yêu cầu:**\n- **Tổng tiền xe biển 47:** `=DSUM(Bảng_Lớn, \"Thành Tiền\", Vùng_DK_1)`.\n- **Đếm đơn giá > 100k:** `=DCOUNT(Bảng_Lớn, \"Mã DV\", Vùng_DK_2)`.",
                        icon: "fa-chart-line"
                    },
                    {
                        title: "Góc 'Cứu Hộ' & Lỗi thường gặp",
                        content: "- **Lỗi #N/A (VLOOKUP):** Quên nhấn F4 khi chọn bảng dò.\n- **Lỗi DSUM = 0:** Tiêu đề vùng điều kiện không khớp 100% bảng chính (ví dụ thừa dấu cách).\n- **Lỗi #NAME?:** Gõ sai tên hàm (VLOOK, SUM...).",
                        icon: "fa-life-ring"
                    }
                ]
            },
        ]
    },
    {
        id: 11,
        title: "Buổi 11: Tổ chức dữ liệu trong Excel",
        description: "Thiết kế tài liệu đẹp mắt với SmartArt, Charts, Images và Page Layout.",
        totalLessons: 2,
        lessons: []
    },
    {
        id: 12,
        title: "Buổi 12: Ứng dụng AI trong Excel",
        description: "Thiết kế tài liệu đẹp mắt với SmartArt, Charts, Images và Page Layout.",
        totalLessons: 2,
        lessons: []
    },
    {
        id: 13,
        title: "Buổi 13: Soạn thảo slide trình chiếu",
        description: "Thiết kế tài liệu đẹp mắt với SmartArt, Charts, Images và Page Layout.",
        totalLessons: 2,
        lessons: []
    },
    {
        id: 14,
        title: "Buổi 14: Ứng dụng AI trong PowerPoint",
        description: "Thiết kế tài liệu đẹp mắt với SmartArt, Charts, Images và Page Layout.",
        totalLessons: 2,
        lessons: []
    },
];
