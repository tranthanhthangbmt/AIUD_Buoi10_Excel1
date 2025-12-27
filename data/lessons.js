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
                        title: "Lý thuyết",
                        content: "**Định dạng văn bản trong Word bao gồm các thao tác sau:**\n- Chọn font chữ, cỡ chữ, màu sắc, kiểu chữ (in đậm, in nghiêng, gạch chân).\n- Canh lề văn bản (trái, phải, giữa, đều hai bên).\n- Thiết lập khoảng cách dòng và đoạn.\n- Sử dụng các kiểu định dạng sẵn có (Styles) để áp dụng nhanh các định dạng cho văn bản.\n\n**Tại sao định dạng văn bản quan trọng?**\n- Giúp tài liệu trở nên chuyên nghiệp và dễ đọc hơn.\n- Tạo điểm nhấn cho các phần quan trọng trong văn bản.\n- Giúp người đọc dễ dàng theo dõi và hiểu nội dung.",
                        icon: "fa-info-circle"
                    },
                    {
                        title: "Bước 1: Mở tệp bài tập",
                        content: "Mở tệp 'Lớp-Họ và tên-Bài 1.2.1.docx' trong mục tài nguyên.",
                        icon: "fa-folder-open"
                    },
                    {
                        title: "Bước 2: Hiển thị thanh thước, chuyển đơn vị đo",
                        content: "1. Hiển thị thanh thước: Chọn View -> đánh dấu chọn mục Ruler.\n2. Chuyển đơn vị đo: Chọn File -> chọn Options -> chọn Advanced -> tại mục Display (Show measurements in units of: Centimeters) -> nhấn OK.",
                        slideImage: "images/Buổi_6/Bài_1/1.2.png",
                        icon: "fa-ruler"
                    },
                    {
                        title: "Bước 3: Canh chỉnh khổ giấy, hướng giấy, lề",
                        content: "1. Canh chỉnh khổ giấy: chọn Page Layout -> chọn Size -> chọn A4. \n2. Canh chỉnh hướng giấy: chọn Layout -> chọn Orientation -> chọn hướng giấy đứng (Portrait), hướng giấy ngang (Landscape). \n3. Canh lề: chọn Layout -> chọn Margins -> chọn Custom Margins... -> lề trên(Top): 2 cm, lề dưới (Bottom): 2cm, lề trái (Left): 2.5cm hoặc 3cm, lề phải (Right): 2cm -> nhấn OK.",
                        slideImage: "images/Buổi_6/Bài_1/1.3.png",
                        icon: "fa-file-invoice"
                    },
                    {
                        title: "Bước 4: Soạn thảo và định dạng chuyên nghiệp (Modify Style).",
                        content: "1. Tại thẻ HOME, Click chuột phải vào ô Normal trong khung Styles → chọn Modify. \n2. Thiết lập thông số: Chọn Font Times New Roman, cỡ chữ 13, chọn Canh đều 2 bên (Justified) \n3. Chỉnh giãn dòng/đoạn: Bấm nút Format (góc dưới trái) → chọn Paragraph → Chỉnh Before/After (ví dụ 6pt) và Line spacing (1.5 lines) → OK.",
                        slideImage: "images/Buổi_6/Bài_1/1.4.png",
                        icon: "fa-text-height"
                    },
                    {
                        title: "Bước 5: Lưu bài",
                        content: "Nhấn File -> Save hoặc Ctrl+S để lưu lại kết quả.",
                        icon: "fa-save"
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
                        title: "Lý thuyết",
                        content: "**Bảng (Table)** trong Word là một công cụ hữu ích để tổ chức và trình bày dữ liệu một cách rõ ràng và có cấu trúc. Bảng giúp người dùng dễ dàng so sánh, phân loại và phân tích thông tin. \n\n**Các thành phần chính của bảng:**\n- **Hàng (Row):** Các dòng ngang trong bảng.\n- **Cột (Column):** Các dòng dọc trong bảng.\n- **Ô (Cell):** Giao điểm giữa hàng và cột, nơi chứa dữ liệu.\n\n**Lợi ích của việc sử dụng bảng:**\n- Tổ chức dữ liệu một cách logic và dễ hiểu.\n- Giúp trình bày thông tin một cách chuyên nghiệp.\n- Dễ dàng chỉnh sửa và định dạng dữ liệu.",
                        icon: "fa-info-circle"
                    },
                    {
                        title: "Bước 1: Chèn bảng",
                        content: "Chọn thẻ Insert → chọn Table → chọn Insert Table… → Nhập số cột (Columns) và số hàng (Rows) → OK.",
                        slideImage: "images/Buổi_6/Bài_2/2.1.png",
                        icon: "fa-table"
                    },
                    {
                        title: "Bước 2: Chèn thêm cột và dòng vào bảng",
                        content: "1. để con trỏ chuột vào một ô trong bảng, ô này nằm trước hoặc sau cột định chèn thêm cột vào. \n2. Chọn Table Layout -> chọn Insert Column Left hoặc Insert Column Right để chèn thêm cột vào bảng. \n3. Chọn Insert Row Above hoặc Insert Row Below để chèn thêm dòng vào bảng.",
                        slideImage: "images/Buổi_6/Bài_2/2.2.png",
                        icon: "fa-plus-square"
                    },
                    {
                        title: "Bước 3: Gộp ô và tách ô",
                        content: "1. Chọn trên 2 ô cần gộp -> chọn Table Layout -> Merge Cells để gộp ô. \n2. Chọn trên 2 ô cần tách -> chọn Table Layout -> Split Cells để tách ô.",
                        slideImage: "images/Buổi_6/Bài_2/2.3.png",
                        icon: "fa-compress-arrows-alt"
                    },
                    {
                        title: "Bước 4: Lặp lại tiêu đề bảng ở các trang tiếp theo",
                        content: "1. Chọn tiêu đề Bảng (dòng đầu tiên của Bảng) -> Repeat Header Rows.",
                        slideImage: "images/Buổi_6/Bài_2/2.4.png",
                        icon: "fa-redo"
                    },
                    {
                        title: "Bước 5: Chuyển đổi bảng thành text",
                        content: "1. Chọn toàn bộ Bảng -> Table Layout -> Convert to Text.",
                        slideImage: "images/Buổi_6/Bài_2/2.5.png",
                        icon: "fa-exchange-alt"
                    },
                    {
                        title: "Bước 6: Thiết kế bảng",
                        content: "1. Chọn toàn bộ Bảng -> Table Design.\n2. Tại Table Styles có thể lựa chọn kiểu bảng.\n3. Tại Boders, có thể chọn kiểu viền cho bảng.",
                        slideImage: "images/Buổi_6/Bài_2/2.6.png",
                        icon: "fa-paint-brush"
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
                        title: "Lý thuyết",
                        content: "**Tab Stop** là một công cụ trong Microsoft Word giúp người dùng căn chỉnh văn bản một cách chính xác và nhanh chóng. Khi sử dụng Tab Stop, người dùng có thể định vị con trỏ tại các điểm cụ thể trên dòng văn bản, từ đó dễ dàng tạo ra các khoảng cách đều nhau giữa các đoạn văn bản hoặc các phần tử khác nhau trong tài liệu.\n\n**Các loại Tab Stop phổ biến:**\n- **Left Tab (Tab trái):** Căn lề trái cho văn bản bắt đầu từ vị trí Tab Stop.\n- **Center Tab (Tab giữa):** Căn giữa văn bản tại vị trí Tab Stop.\n- **Right Tab (Tab phải):** Căn lề phải cho văn bản kết thúc tại vị trí Tab Stop.\n- **Decimal Tab (Tab thập phân):** Căn chỉnh số theo dấu thập phân tại vị trí Tab Stop.\n\n**Lợi ích của việc sử dụng Tab Stop:**\n- Giúp tài liệu trở nên gọn gàng và chuyên nghiệp hơn.\n- Dễ dàng điều chỉnh khoảng cách giữa các phần tử trong văn bản.\n- Tiết kiệm thời gian khi soạn thảo và định dạng tài liệu.",
                        icon: "fa-info-circle"
                    },
                    {
                        title: "Bước 1: Đặt con trỏ vào vị trí cần đặt Tab",
                        content: "Đặt con trỏ tại vị trí cần đặt Tab.",
                        icon: "fa-mouse-pointer"
                    },
                    {
                        title: "Bước 2: Đặt vị trí Tab",
                        content: "1. Đặt chuột lên thước ngang (Ruler) tại vị trí muốn đặt Tab Stop. Nhấn chuột trái để đặt Tab Stop. \n2. Click đúp chuột vào biểu tượng Tab Stop trên thước ngang để mở hộp thoại Tabs.",
                        slideImage: "images/Buổi_6/Bài_3/3.2.png",
                        icon: "fa-ruler"
                    },
                    {
                        title: "Bước 3: Chọn Leader",
                        content: "Chọn kiểu ký tự dẫn (Leader: 1 None, 2...., 3----). Nhấn Set -> OK.",
                        slideImage: "images/Buổi_6/Bài_3/3.3.png",
                        icon: "fa-list-ol"
                    },
                    {
                        title: "Bước 4: Sử dụng Tab",
                        content: "Nhấn phím Tab trên bàn phím để di chuyển con trỏ đến vị trí đã đặt.",
                        icon: "fa-keyboard"
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
                        title: "Lý thuyết",
                        content: "**Breaks (Ngắt)** trong Microsoft Word là một công cụ quan trọng giúp người dùng kiểm soát cách bố trí và trình bày tài liệu. Breaks cho phép bạn chia nhỏ tài liệu thành các phần riêng biệt, giúp dễ dàng quản lý và định dạng nội dung. Có nhiều loại Breaks khác nhau, bao gồm:\n\n- **Page Break (Ngắt trang):** Chuyển con trỏ sang trang mới, thường được sử dụng để bắt đầu một chương hoặc phần mới trong tài liệu.\n- **Column Break (Ngắt cột):** Chuyển con trỏ sang cột tiếp theo trong tài liệu có định dạng cột, hữu ích khi tạo các bản tin hoặc báo cáo.\n- **Section Break (Ngắt đoạn):** Chia tài liệu thành các phần riêng biệt, cho phép áp dụng các định dạng khác nhau cho từng phần, như thay đổi lề, hướng trang hoặc số trang.\n\nSử dụng Breaks một cách hiệu quả giúp tài liệu trở nên chuyên nghiệp hơn và dễ dàng chỉnh sửa khi cần thiết.",
                        icon: "fa-info-circle"
                    },
                    {
                        title: "Bước 1: Chia cột và ngắt cột",
                        content: "1. Bôi đen văn bản. Vào Layout -> Columns -> Chọn số cột (Two, Three...)\n2. Đặt con trỏ tại vị trí muốn ngắt sang cột mới. Vào Layout -> Breaks -> Column.",
                        slideImage: "images/Buổi_6/Bài_4/4.1.png",
                        icon: "fa-columns"
                    },
                    {
                        title: "Bước 2: Ngắt trang và xóa ngắt trang",
                        content: "**Ngắt trang:** \nĐặt con trỏ tại vị trí muốn ngắt sang trang mới. Vào Insert -> Page Break.\n**Xóa ngắt trang:** \n1. Gõ Ctrl + H để mở hộp thoại Find and Replace.\n2. Tìm kiếm \"^m\" -> Replace All.",
                        slideImage: "images/Buổi_6/Bài_4/4.2.png",
                        icon: "fa-file-alt"
                    },
                    {
                        title: "Bước 3: Ngắt đoạn (Section Break)",
                        content: "1. Vào Home -> chọn biểu tượng Show/Hide Break Editing Marks.\n2. Chức năng Section Break cung cấp cho người sử dụng 4 lựa chọn: \n- Next Page: Tạo ngắt trang sau đoạn văn.\n- Continuous: Tạo ngắt trang sau đoạn văn.\n- Even Page hoặc Odd Page: Ngắt đoạn và di chuyển văn bản sau dấu ngắt sang trang chẵn hoặc trang lẻ tiếp theo.\n3. Xóa dấu ngắt đoạn: \n- Chọn Home -> chọn icon (Show/Hide Editing Marks) để hiển thị tất cả các dấu đoạn và các ký hiệu định dạng bị ẩn trong tài liệu thông thường. \n- Đặt con trỏ chuột trước dấu ngắt phần / ngắt đoạn và sau đó nhấn phím xóa để xóa. \n- Hoặc gõ Ctrl + H để mở hộp thoại Find and Replace.\n- Tìm kiếm \"^b\" -> Replace All.",
                        slideImage: "images/Buổi_6/Bài_4/4.3.png",
                        icon: "fa-cut"
                    },
                ]
            }
        ]
    },
    {
        id: 7,
        title: "Buổi 7: Mục lục (Multilevel List, caption, nội dung, hình ảnh, bảng biểu)",
        description: "Học các kỹ thuật nâng cao: Multilevel List, Header/Footer, Table of Contents và References.",
        totalLessons: 3,
        lessons: [
            {
                id: 5,
                sessionId: 2,
                title: "Bài 5: Multilevel List",
                description: "Tạo danh sách đa cấp với các cấp độ khác nhau.",
                video: "https://drive.google.com/file/d/1BZ8ABVT0bOa4oD8R2JaZUcQwSGCodK4C/preview",
                tasks: [
                    { name: "Bài 5.2.1", file: "Lớp-Họ và tên-Bài 5.2.1.docx" }
                ],
                docs: [
                    { name: "Hướng dẫn PDF", file: "Tài liệu buổi 6_Word_Bài 5_MULTILEVEL LIST.pdf" }
                ],
                steps: [
                    {
                        title: "Bước 1: Định nghĩa Multilevel List",
                        content: "Vào Home -> Chọn biểu tượng Multilevel List -> Define New Multilevel List.",
                        slideImage: "images/Buổi_7/Bài_5/5.1.png",
                        icon: "fa-list-ul"
                    },
                    {
                        title: "Bước 2: Thiết lập Level 1",
                        content: "- Tại vị trí số (1 - Click level to modify) là cấp độ của đầu mục, chọn cấp độ cao nhất trước. Hãy click vào số 1 trong mục Click level to modify \n- Số(2) xóa hết đi gõ: BÀI(thêm dấu cách – Space)\n- Số(3) thì chọn kiểu 1, 2, 3,…\n- Số(2) thêm dấu “.” sau chữ Bài 1\n- Số(5), (6) thì sửa lại là 0\n- Tại số(7) bạn chọn Heading 1(vì sẽ dùng để tạo mục lục).\n- Tại vị trí số(8 – Follow number with) chọn SPACE\n- Sau khi chỉnh xong thì được như bên dưới \n- Số(2) thêm dấu “.” sau chữ Bài 1 \n- Số(5), (6) thì sửa lại là 0 \n- Tại số(7) bạn chọn Heading 1(vì sẽ dùng để tạo mục lục).\n- Tại vị trí số(8 – Follow number with) chọn SPACE\n-> OK",
                        slideImage: "images/Buổi_7/Bài_5/5.2.png",
                        icon: "fa-level-up-alt"
                    },
                    {
                        title: "Bước 3: Thiết lập Level 2",
                        content: "- Tại vị trí số (1 - Click level to modify): chọn vào số 2 trong mục Click level to modify\n- Số(2) xóa hết đi\n- Số (4 – Include level number from) thì chọn: LEVEL 1\n- Số(2) thêm dấu “.” sau cùng\n- Số (3) thì chọn kiểu 1,2,3,…\n-  Số (2): thêm dấu “.” sau cùng\n- Số (5), (6) thì sửa lại là 0\n- Tại số (7) bạn chọn Heading 2 (vì sẽ dùng để tạo mục lục)\n- Tại vị trí số (8 – Follow number with) chọn SPACE\n-> OK",
                        slideImage: "images/Buổi_7/Bài_5/5.3.png",
                        icon: "fa-level-down-alt"
                    },
                    {
                        title: "Bước 4: Thiết lập Level 3",
                        content: "- Tại vị trí số (1 - Click level to modify): chọn vào số 3 trong mục Click level to modify\n- Số(2) xóa hết đi\n- Số (4 – Include level number from) thì chọn: LEVEL 1\n- Số(2) thêm dấu “.” sau cùng\n- Số (4): chọn tiếp LEVEL 2\n- Số(2) thêm dấu “.” sau cùng\n- Số (3) thì chọn kiểu 1,2,3,…\n-  Số (2): thêm dấu “.” sau cùng\n- Số (5), (6) thì sửa lại là 0\n- Tại số (7) bạn chọn Heading 3 (vì sẽ dùng để tạo mục lục)\n- Tại vị trí số (8 – Follow number with) chọn SPACE\n-> OK",
                        slideImage: "images/Buổi_7/Bài_5/5.4.png",
                        icon: "fa-level-down-alt"
                    },
                    {
                        title: "Bước 5: Chỉnh sửa Style Heading 1, Heading 2 và Heading 3",
                        content: "Kích phải chuột vô Heading 1: chọn MODIFY. Font chữ Time New Roman, cỡ chữ 13, in đậm, màu đen, canh đều 2 biên, Chọn Format -> Paragraph để giãn dòng, đoạn(đã hướng dẫn bài 1) -> OK\nChỉnh sửa tương tự cho Heading 2 và Heading 3.",
                        slideImage: "images/Buổi_7/Bài_5/5.5.png",
                        icon: "fa-edit"
                    },
                ]
            },
            {
                id: 6,
                sessionId: 2,
                title: "Bài 6: Caption",
                description: "Tạo và tùy chỉnh Header, Footer, Page Number cho tài liệu chuyên nghiệp.",
                video: "https://drive.google.com/file/d/1c5gYvFM39rFwmGWGTSjejVCNQdoQBtpc/preview",
                tasks: [
                    { name: "Bài 6.2.1", file: "Lớp-Họ và tên-Bài 6.2.1.docx" }
                ],
                docs: [
                    { name: "Hướng dẫn PDF", file: "Tài liệu buổi 6_Word_Bài 6_HEADER FOOTER.pdf" }
                ],
                steps: [
                    {
                        title: "Lý thuyết",
                        content: "**Caption là gì?**\nChức năng cho **Caption** trong Word cho chúng ta có thể chèn chú thích vào những đối tượng như: hình ảnh(Picture), bảng(Table), công thức(Equation), biểu đồ(Chart) và từ đó có thể tạo ra các phụ lục, danh mục cho tất cả những đối tượng đó để có thể quản lý chúng một cách nhanh chóng và dễ dàng.",
                        icon: "fa-info-circle"
                    },
                    {
                        title: "Bước 1: Chèn đối tượng (Insert Picture, Table, Chart, Equation)",
                        content: "1. Thêm đối tượng cần chèn Caption vào tài liệu (Hình ảnh, Bảng, Biểu đồ, Công thức).\n2. Chọn đối tượng muốn chèn chú thích, kích chuột phải vào đối tượng chọn: **INSERT CAPTION**.",
                        icon: "fa-mouse-pointer",
                        slideImage: "images/Buổi_7/Bài_6/6.1.png"
                    },
                    {
                        title: "Bước 2: Nhập nội dung Caption",
                        content: "**(1) CAPTION**: Nhập nội dung đối tượng vào \n**(2) LABEL**: Chọn nhãn dán.Để thay đổi nội dung của Nhãn thì chọn(4 – NEW LABEL) \n**(3) POSITION**: Vị trí của ghi chú: Trên đối tượng(ABOVE), dưới đối tượng(BELOW)\n**(4) NEW LABEL**: Tạo nhãn mới.\n**(5) NUMBERING**: Định dạng thứ tự ảnh. Nếu muốn gán đối tượng đó thuộc Chương/ Bài/ Phần nào thì đánh dấu tick vào ô Include chapter number",
                        icon: "fa-tag",
                        slideImage: "images/Buổi_7/Bài_6/6.2.png"
                    }
                ]
            },
            {
                id: 7,
                sessionId: 2,
                title: "Bài 7: Mục lục",
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
                        title: "Lý thuyết",
                        content: "Mục lục là danh sách các tiêu đề chính và phụ trong tài liệu, giúp người đọc dễ dàng điều hướng và tìm kiếm thông tin. Sử dụng Styles để định dạng tiêu đề giúp tạo mục lục tự động và chuyên nghiệp.\n\n**Lợi ích của việc sử dụng Mục lục:**\n- Dễ dàng điều hướng tài liệu dài.\n- Cập nhật tự động khi có thay đổi trong nội dung.\n- Tăng tính chuyên nghiệp cho tài liệu.",
                        icon: "fa-info-circle"
                    },
                    {
                        title: "Bước 1: Áp dụng Heading Styles",
                        content: "Chọn tiêu đề và áp dụng Heading 1, Heading 2, Heading 3.",
                        icon: "fa-text-height",
                        slideImage: 'images/Buổi_7/Bài_7/7.1.png'
                    },
                    {
                        title: "Bước 2: Chèn Table of Contents",
                        content: "Vào **References** -> **Table of Contents** -> Chọn kiểu mục lục.\nCó thể thay đổi tuỳ chỉnh hiển thị mục lục. Click vào **Table of Content** -> **Custom Table of Contents…** Trong tab **Table of Contents** tuỳ chỉnh các thiết lập sau:\n- **Show page numbers**: Hiển thị số trang ứng với tên đề mục.\n- **Right align page numbers**: Hiển thị số trang nằm ở sát lề bên phải(nếu bỏ chọn, số trang sẽ nằm ở ngay liền sau tên đề mục).\n- **Tab leader**: Hình thức dóng hàng, đối chiếu giữa tên đề mục và số trang(dùng chuỗi các dấu chấm, dấu gạch ngang, hoặc bỏ trắng).",
                        icon: "fa-list-ol",
                        slideImage: "images/Buổi_7/Bài_7/7.2.png"
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
                // video: "https://drive.google.com/file/d/16xC5sONcKWaqAnE_yr2o0BsyXv0xkoGv/preview",
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
                        icon: "fa-book-open",
                        videoUrl: "https://drive.google.com/file/d/16xC5sONcKWaqAnE_yr2o0BsyXv0xkoGv/preview"
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
                // video: "https://drive.google.com/file/d/1o3s8ackFaoRp3S1ThfZzsP2uWHC0oyBG/preview",
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
                        icon: "fa-search",
                        videoUrl: 'https://drive.google.com/file/d/1o3s8ackFaoRp3S1ThfZzsP2uWHC0oyBG/preview'
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
                        slideImage: "images/Buổi_10/Bài_3/3.4.png"
                    },
                    {
                        title: "Yêu cầu 5: Lập công thức điền thông tin cho bảng thống kê",
                        content: "**Yêu cầu:** 5. Lập công thức điền thông tin cho bảng thống kê\n\n**Mục đích:** Đếm số sinh viên và tổng tiền từng ngành.\n\n**a. Đếm số sinh viên (COUNTIF):**\n- Click ô C13 (dòng IT).\n- Công thức: =COUNTIF($C$3:$C$8, B13)\n- Giải thích: $C$3:$C$8 là cột Mã ngành (Nhớ F4); B13 là điều kiện “IT”.\n\n**b. Tổng tiền (SUMIF):**\n- Click ô D13.\n- Công thức: =SUMIF($C$3:$C$8, B13, $H$3:$H$8)\n- Giải thích: $H$3:$H$8 là cột Thành tiền (Nhớ F4).",
                        icon: "fa-chart-bar",
                        slideImage: "images/Buổi_10/Bài_3/3.5.png",
                        // videoUrl: "https://drive.google.com/file/d/1RA_Ys13ts6YOkB79i-Ckhvj6UP-u7fcu/preview"
                    },
                    {
                        title: "Kiến thức nâng cao: Hàm SUMPRODUCT (Thay thế SUMIF)",
                        content: "**Đây là một cách dùng nâng cao của SUMPRODUCT (dùng để tính tổng có điều kiện thay cho SUMIF). Vì sinh viên mới học, bạn cần giảng kỹ về cơ chế \"Mảng Logic\" (True/False) thì họ mới hiểu được tại sao phép nhân lại lọc được dữ liệu.**\n\n**1. Ý tưởng cốt lõi (Giải thích trước khi gõ)**\n- **Ý nghĩa cơ bản:** SUM (Cộng) + PRODUCT (Nhân). Hàm này nhân các cặp số tương ứng rồi cộng tổng lại.\n- **Ứng dụng trong bài này:** Chúng ta dùng phép nhân để \"lọc\" dữ liệu.\n- **Trong máy tính:** TRUE (Đúng) = 1, FALSE (Sai) = 0.\n- **Quy tắc:** Bất cứ số nào nhân với 1 thì bằng chính nó (Lấy), nhân với 0 thì bằng 0 (Loại).\n\n**2. Phân tích công thức trong Bài 3**\n- **Yêu cầu:** Tính tổng tiền cho từng ngành (IT, EL, NU, BA) dùng SUMPRODUCT.\n- **Công thức mẫu:** `=$ =SUMPRODUCT((C3:C8=B13)*(H3:H8))`\n- **Diễn giải cho sinh viên:**\n  + **Vùng 1 - Điều kiện (C3:C8=B13):**\n    * Máy sẽ chạy dọc cột C (Mã ngành).\n    * Nếu gặp \"IT\" (giống ô B13) -> Trả về 1.\n    * Nếu gặp \"EL\" (khác ô B13) -> Trả về 0.\n    * Kết quả tạo ra một mảng ảo: `{1; 0; 1; 0...}`.\n  + **Vùng 2 - Vùng tính tổng (H3:H8):**\n    * Chứa số tiền thực tế: ví dụ `{5 triệu; 4 triệu; 6 triệu...}`.\n  + **Phép nhân *:**\n    * Dòng nào là IT: `1 * 5 triệu = 5 triệu` (Được giữ lại).\n    * Dòng nào không phải IT: `0 * 4 triệu = 0` (Bị loại bỏ).\n  + **Kết quả:** Hàm cộng dồn các số còn lại.\n\n**3. Các bước thực hành (Step-by-step)**\n- **Hướng dẫn sinh viên thao tác tại ô E13 (cột Tổng tiền Sumproduct):**\n  1. Gõ: `=SUMPRODUCT(`\n  2. Mở ngoặc đơn thứ nhất (để chứa điều kiện): `(` -> Quét cột Mã ngành trên bảng chính (`$C$3:$C$8`). **LƯU Ý:** Nhấn **F4** ngay lập tức.\n  3. Gõ dấu bằng và chọn ô điều kiện: `=B13` (Mã IT ở bảng thống kê - **không nhấn F4**).\n  4. Đóng ngoặc đơn điều kiện: `)`\n  5. Gõ dấu nhân: `*`\n  6. Mở ngoặc đơn thứ hai (để chứa tiền): `(` -> Quét cột Thành tiền trên bảng chính (`$H$3:$H$8`). **LƯU Ý:** Nhấn **F4**.\n  7. Đóng ngoặc đơn thứ hai và ngoặc hàm: `))`\n  8. Nhấn Enter.\n\n**4. So sánh nhanh với SUMIF**\n- **Hỏi:** \"Tại sao phải dùng công thức dài dòng này trong khi SUMIF cũng ra kết quả y hệt?\"\n- **Giải thích:**\n  + **SUMIF** là cách chuyên dụng, dễ dùng hơn cho trường hợp này.\n  + **SUMPRODUCT** là \"dao mổ trâu\", dùng nó ở đây để tập luyện tư duy mảng. Sau này khi gặp các bài toán khó hơn (ví dụ: Tính tổng tiền của ngành IT nhưng chỉ tính những người sinh sau năm 2000) thì SUMPRODUCT mới thực sự tỏa sáng vì nó xử lý được nhiều điều kiện phức tạp mà SUMIF cũ không làm được.",
                        icon: "fa-layer-group",
                        slideImage: "images/Buổi_10/Bài_3/3.5.png"
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
                // video: "https://drive.google.com/file/d/1EKm3Tt2wrdFIEwi-xOh-FA9BIBBALHAJ/preview",
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
                        // videoUrl: "https://drive.google.com/file/d/1EKm3Tt2wrdFIEwi-xOh-FA9BIBBALHAJ/preview"
                    },
                    {
                        title: "Yêu cầu 2 & 3: Xác định tên sản phẩm và nhãn hiệu",
                        content: "**Yêu cầu:** 2. Xác định cột tên sản phẩm dựa vào mã hàng và bảng 1\n3. Xác định cột nhãn hiệu dựa vào mã hàng và bảng 2\n\n**Mục đích:** Luyện tập cắt chuỗi (LEFT/RIGHT) kết hợp tra cứu (VLOOKUP).\n\n**a. Tên sản phẩm (Cột E):**\n- Công thức: =VLOOKUP(LEFT(B3,1), $A$19:$E$21, 2, 0)\n- Giải thích: Cắt ký tự đầu Mã hàng, dò trong Bảng 1, lấy cột 2.\n\n**b. Nhãn hiệu (Cột F):**\n- Công thức: =VLOOKUP(RIGHT(B3,2), $G$18:$H$20, 2, 0)\n- Giải thích: Cắt 2 ký tự cuối Mã hàng, dò trong Bảng 2, lấy cột 2.",
                        icon: "fa-tag",
                        videoUrl: "https://drive.google.com/file/d/1EKm3Tt2wrdFIEwi-xOh-FA9BIBBALHAJ/preview"
                    },
                    {
                        title: "Yêu cầu 4: Xác định cột đơn giá",
                        content: "**Yêu cầu:** 4. Xác định cột đơn giá dựa vào mã hàng và bảng 1\n\n**Mục đích:** Tra cứu động (Cột lấy giá thay đổi tùy theo nhãn hiệu).\n\n**Phân tích:**\n- Revon lấy cột 3, Debon lấy cột 4, Maybeline lấy cột 5 -> Lồng hàm IF vào vị trí số cột.\n\n**Thao tác:**\n1. Click ô G3.\n2. Công thức:\n=VLOOKUP(LEFT(B3,1), $A$19:$E$21, IF(F3=\"Revon\", 3, IF(F3=\"Debon\", 4, 5)), 0)\n3. Giải thích: Nếu là Revon lấy cột 3, Debon lấy cột 4, còn lại cột 5.",
                        icon: "fa-search-dollar",
                        videoUrl: "https://drive.google.com/file/d/1EKm3Tt2wrdFIEwi-xOh-FA9BIBBALHAJ/preview"
                    },
                    {
                        title: "Yêu cầu 5: Xác định cột thành tiền",
                        content: "**Yêu cầu:** 5. Xác định cột thành tiền bằng số lượng nhân đơn giá. Biết:\nNếu bán trước ngày 10 và hiệu Debon được giảm 10% đơn giá.\n\n**Mục đích:** Tính toán với điều kiện kép (AND).\n\n**Logic:** Nếu (Hiệu là Debon VÀ Ngày bán < 10) thì tính 90%, ngược lại 100%.\n\n**Thao tác (Ô H3):**\n=C3 * G3 * IF(AND(F3=\"Debon\", DAY(D3)<10), 90%, 1)\n- C3*G3: Số lượng x Đơn giá.\n- AND(...): Kiểm tra thỏa mãn cả 2 điều kiện.\n- 90%, 1: Mức giá áp dụng.",
                        icon: "fa-calculator",
                        videoUrl: "https://drive.google.com/file/d/1O0i8dZDTyuU5xi2bIKBP1NVvF8M5XeoQ/preview"
                    },
                    {
                        title: "Yêu cầu 6: Hoàn thành bảng thống kê theo mặt hàng Revon",
                        content: "**Mục tiêu:** Tính tổng số lượng và thành tiền của từng món (Kem, Phấn mắt, Son) nhưng chỉ lấy hãng Revon.\n\n**Bước 1: Tạo Vùng điều kiện (Quan trọng nhất)**\n- Dựa vào hình gợi ý ở cuối trang 81, bạn hướng dẫn sinh viên nhập dữ liệu vào các ô từ **A48 đến F49** như sau:\n  1. **Cặp điều kiện 1 (Cho Kem - Revon):**\n     - Ô A48: Gõ `Tên sản phẩm` | Ô B48: Gõ `Nhãn hiệu` (Tiêu đề phải giống hệt bảng chính).\n     - Ô A49: Gõ `Kem` | Ô B49: Gõ `Revon`\n  2. **Cặp điều kiện 2 (Cho Phấn mắt - Revon):**\n     - Ô C48: `Tên sản phẩm` | Ô D48: `Nhãn hiệu`\n     - Ô C49: `Phấn mắt` | Ô D49: `Revon`\n  3. **Cặp điều kiện 3 (Cho Son - Revon):**\n     - Ô E48: `Tên sản phẩm` | Ô F48: `Nhãn hiệu`\n     - Ô E49: `Son` | Ô F49: `Revon`\n\n**Bước 2: Viết hàm DSUM**\n- **Cú pháp:** `=DSUM(Bảng_dữ_liệu, Tên_cột_cần_tính, Vùng_điều_kiện)`\n- **Tại ô B25 (Số lượng Kem Revon):**\n  `=DSUM($A$2:$H$14, C2, $A$48:$B$49)`\n  + `$A$2:$H$14`: Toàn bộ bảng dữ liệu lớn (**Nhớ F4**).\n  + `C2`: Ô chứa chữ \"Số lượng\" (Để máy biết cần cộng cột nào).\n  + `$A$48:$B$49`: Vùng điều kiện vừa tạo cho Kem Revon (**Nhớ F4**).\n- **Tại ô C25 (Số lượng Phấn mắt Revon):**\n  `=DSUM($A$2:$H$14, C2, $C$48:$D$49)`\n- **Tại ô B26 (Thành tiền Kem Revon):**\n  + Tương tự như trên, chỉ thay tham số giữa thành `H2` (Ô chứa chữ \"Thành tiền\")\n  + `=DSUM($A$2:$H$14, H2, $A$48:$B$49)`\n",
                        icon: "fa-database",
                        videoUrl: "https://drive.google.com/file/d/1D6u-siD0BFBIJ7dJbYvO9HlLKMtk4Dxr/preview"
                    },
                    {
                        title: "Yêu cầu 7: Hoàn thành bảng thống kê theo tháng 2",
                        content: "**Mục tiêu:** Tính tổng cho các hãng Debon, Revon, Maybeline nhưng chỉ tính các đơn bán trong Tháng 2.\n- **Bước 1: Tạo Vùng điều kiện \"Tháng 2\" (Khó)**\n  + Đây là dạng điều kiện dùng công thức (Calculated Criteria). Dựa vào hình gợi ý dòng 51-52:\n  1. **Cặp điều kiện 1 (Cho Debon - Tháng 2):**\n     - Ô A51: Để trống (hoặc gõ chữ khác tên cột, vd: \"Tháng\").\n     - Ô B51: Gõ `Nhãn hiệu`.\n     - Ô A52: Gõ công thức `=MONTH(D3)=2` (Hàm trả về TRUE/FALSE để lọc tháng 2 từ cột Ngày bán D3).\n     - Ô B52: Gõ `Debon`\n  2. **Cặp điều kiện 2 (Cho Revon - Tháng 2):**\n     - Tương tự tại ô C51:D52, đổi B52 thành `Revon`\n  3. **Cặp điều kiện 3 (Cho Maybeline - Tháng 2):**\n     - Tương tự tại ô E51:F52, đổi F52 thành `Maybeline`\n- **Bước 2: Viết hàm DSUM**\n  + **Tại ô G25 (Số lượng Debon tháng 2):**\n    `=DSUM($A$2:$H$14, C2, $A$51:$B$52)`\n  + **Tại ô H25 (Số lượng Revon tháng 2):**\n    `=DSUM($A$2:$H$14, C2, $C$51:$D$52)`\n  + *Lưu ý:* Nếu tính \"Thành tiền\", chỉ cần đổi tham số giữa từ C2 thành H2.\n",
                        icon: "fa-database",
                        videoUrl: "https://drive.google.com/file/d/1AsM2dTAekfssf2yvY72nmlshdGQx5ucO/preview"
                    },
                    {
                        title: "Yêu cầu 8: Hoàn thành bảng thống kê 1 và bảng thống kê 2",
                        content: "**Mục tiêu:** Đếm số đơn hàng thỏa mãn điều kiện về Số lượng (lớn hơn 50 hoặc 70). Dùng hàm DCOUNT.\n- **Bước 1: Tạo Vùng điều kiện**\n  + **Điều kiện cho Son (>50):**\n    - Ô D54: Gõ `Số lượng` (Tiêu đề cột trong bảng chính).\n    - Ô D55: Gõ `>50`.\n  + **Điều kiện cho Kem (>70):**\n    - Ô E54: Gõ `Số lượng`.\n    - Ô E55: Gõ `>70`.\n  + *Lưu ý:* Cần thêm cột Tên sản phẩm đi kèm nếu đề bài yêu cầu cụ thể là \"Son > 50\" (tức là 2 điều kiện: Tên=Son VÀ SL>50). Gợi ý của đề bài chi dùng vùng >50 nên ta làm theo đề.\n- **Bước 2: Viết hàm DCOUNT**\n  + **Tại ô C30 (Đếm số đơn >50):**\n    `=DCOUNT($A$2:$H$14, \"Mã hàng\", $D$54:$D$55)`\n  + *Giải thích:* Hàm DCOUNT chỉ đếm số. Cột \"Mã hàng\" phải đảm bảo chứa số, hoặc an toàn nhất là chọn cột \"Số lượng\" (C2) để đếm. Nếu đếm cột chứa chữ (như Tên SP), phải dùng DCOUNTA.\n  + **Tại ô C31 (Đếm số đơn >70):**\n    `=DCOUNT($A$2:$H$14, \"Số lượng\", $E$54:$E$55)`\n\n**Mẹo giảng dạy cho phần này:**\n- Hãy yêu cầu sinh viên **vẽ khung** cho các vùng điều kiện này và **tô màu nền** (ví dụ màu vàng nhạt) để phân biệt chúng với bảng dữ liệu chính. Điều này giúp các em không bị chọn nhầm vùng khi viết công thức DSUM.",
                        icon: "fa-database",
                        videoUrl: "https://drive.google.com/file/d/1WFpmN0_ppnMjGRT-8KPYuUwaXAc4Ow8u/preview"
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
                title: "BTVN Phần 1: Hóa đơn dịch vụ & Báo cáo",
                description: "Luyện tập VLOOKUP, SUMIF, COUNTIF thông qua bài toán thực tế về hóa đơn dịch vụ.",
                image: "images/Buổi_10/BTVN_1/2. Bảng Chính (Nhật ký sửa chữa).PNG",
                video: "",
                tasks: [],
                docs: [
                    { name: "Đề bài chi tiết (PDF)", file: "Buổi 10_Bài 1-2-3-4 [Excel].pdf" }
                ],
                requirements: `<div style="margin-bottom: 20px;">
    <strong>Bảng Tra Cứu (Tham khảo):</strong><br/>
    <img src="images/Buổi_10/BTVN_1/1. Bảng Tra Cứu (Bảng Giá).PNG" style="max-width: 100%; border-radius: 8px; margin-top: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
</div>
Yêu cầu thực hiện:
• Câu 1: Điền Tên Dịch Vụ (Dùng VLOOKUP)
o Dựa vào Mã DV ở bảng chính để tìm tên trong Bảng Tra Cứu.
o Lưu ý: Khi quét bảng tra cứu (A16:C18), BẮT BUỘC PHẢI NHẤN F4 để khóa vùng (thành $A$16:$C$18).
o Công thức gợi ý: =VLOOKUP(C2, $A$16:$C$18, 2, 0)
• Câu 2: Điền Đơn Giá (Dùng VLOOKUP)
o Tương tự câu 1, nhưng lấy cột số 3 (vì cột giá nằm thứ 3 trong bảng tra cứu).
o Công thức gợi ý: =VLOOKUP(C2, $A$16:$C$18, 3, 0).
• Câu 3: Tính Thành Tiền
o Công thức: = Số Lượng * Đơn Giá.
• Câu 4: Thống kê nhanh (Dùng COUNTIF, SUMIF)
o Đếm xem có bao nhiêu xe làm dịch vụ “Bảo dưỡng phanh” (Mã BD).
o Tính tổng doanh thu của riêng dịch vụ “Đổi nhớt máy” (Mã DN).
o Gợi ý SUMIF: =SUMIF(Cột_Mã_DV, "DN", Cột_Thành_Tiền)`,
                steps: [
                    {
                        title: "Hướng dẫn thực hiện",
                        content: "**Gợi ý các bước làm bài:**\n\n1. **Chuẩn bị dữ liệu:** Nhập thông tin 'Bảng chính' và 'Bảng tra cứu' vào Excel như hình minh họa.\n2. **Tên Dịch Vụ:** Sử dụng hàm VLOOKUP dò theo Mã DV. Nhớ F4 để cố định bảng giá.\n3. **Đơn Giá:** Vẫn dùng VLOOKUP nhưng lấy cột số 3.\n4. **Thành Tiền:** Nhân số lượng với đơn giá.\n5. **Thống Kê:** Dùng COUNTIF để đếm số lần xuất hiện mã 'BD'. Dùng SUMIF để tính tổng cột 'Thành Tiền' cho mã 'DN'.",
                        icon: "fa-calculator"
                    }
                ]
            },
            {
                id: 106,
                sessionId: 10,
                title: "BTVN Phần 2: Hóa đơn & Báo cáo (Nâng cao)",
                description: "Tính toán hóa đơn dịch vụ với VLOOKUP và làm báo cáo thống kê với DSUM, DCOUNT.",
                image: "images/Buổi_10/BTVN_1/2. Bảng Chính (Nhật ký sửa chữa).PNG",
                video: "",
                tasks: [],
                docs: [
                    { name: "Đề bài chi tiết (PDF)", file: "Buổi 10_Bài 1-2-3-4 [Excel].pdf" }
                ],
                requirements: `<div style="margin-bottom: 20px;">
    <strong>Bảng Tra Cứu (Tham khảo):</strong><br/>
    <img src="images/Buổi_10/BTVN_1/1. Bảng Tra Cứu (Bảng Giá).PNG" style="max-width: 100%; border-radius: 8px; margin-top: 5px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
</div>
<strong>Mục tiêu:</strong> Tạo Vùng điều kiện và dùng hàm DSUM/DCOUNT.

1. <strong>Tạo Vùng Điều Kiện (Criteria):</strong>
   - Vùng 1: Tiêu đề 'Biển Số' + Giá trị '47A-12345'.
   - Vùng 2: Tiêu đề 'Đơn Giá' + Giá trị '>100000'.

2. <strong>Yêu cầu:</strong>
   - <strong>Tổng tiền xe biển 47:</strong> =DSUM(Bảng_Lớn, "Thành Tiền", Vùng_DK_1).
   - <strong>Đếm đơn giá > 100k:</strong> =DCOUNT(Bảng_Lớn, "Mã DV", Vùng_DK_2).`,
                steps: [
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
        // image: "images/Buổi_11/Bài_5/5.1.png",
        lessons: [
            {
                "id": 105,
                "sessionId": 11,
                "title": "Bài 5: Hàm VLOOKUP, HLOOKUP & Name Range",
                "description": "Thực hành kỹ thuật dò tìm dữ liệu bằng VLOOKUP, HLOOKUP kết hợp các hàm xử lý chuỗi (LEFT, RIGHT, MID) và đặt tên vùng.",
                "video": "https://drive.google.com/file/d/16xC5sONcKWaqAnE_yr2o0BsyXv0xkoGv/preview",
                "tasks": [
                    {
                        "name": "File thực hành",
                        "file": "Bài 5-6-7-8.xlsx"
                    }
                ],
                "requirements": "1. Nhập liệu và định dạng bảng tính.\n2. Xác định cột tên hàng dựa vào mã hàng và bảng 1.\n3. Xác định cột thành tiền. Biết: Thành tiền bằng số lượng nhân với đơn giá (Giá sỉ nếu ký tự thứ 2 là 's', ngược lại là giá lẻ).\n4. Xác định cột chuyên chở. Biết: Chuyên chở bằng thành tiền nhân với phần trăm chuyên chở (tra trong bảng 2).\n5. Xác định cột phải trả: Phải trả = Thành tiền + Chuyên chở.\n6. Thống kê tổng cộng cho các cột thông qua tên vùng (Name Range).",
                "docs": [
                    {
                        "name": "Bài 5-6-7-8 [Excel] (PDF)",
                        "file": "../DeBaiThucHanh/Bài 5-6-7-8 [Excel].pdf"
                    }
                ],
                "steps": [
                    {
                        "title": "Lý thuyết cơ bản: Hàm VLOOKUP & HLOOKUP",
                        "content": "**Hàm VLOOKUP (Vertical Lookup):** Dò tìm giá trị trong bảng dọc (cột).\n\n**Cú pháp:** `=VLOOKUP(giá_trị_cần_tra, bảng_dò, số_thứ_tự_cột_lấy_giá_trị, [dò_tìm_gần_đúng])`\n\n- `giá_trị_cần_tra`: Giá trị bạn muốn tìm kiếm (ví dụ: Mã hàng).\n- `bảng_dò`: Vùng bảng chứa dữ liệu để dò tìm (phải bao gồm cả cột chứa giá trị cần tra và cột lấy giá trị trả về).\n- `số_thứ_tự_cột_lấy_giá_trị`: Số thứ tự của cột trong bảng dò từ đó lấy giá trị trả về (cột đầu tiên là 1).\n- `[dò_tìm_gần_đúng]`: Tùy chọn, TRUE (hoặc 1) để dò tìm gần đúng, FALSE (hoặc 0) để dò tìm chính xác.\n\n**Hàm HLOOKUP (Horizontal Lookup):** Tương tự VLOOKUP nhưng dùng cho bảng ngang (hàng).\n\n**Cú pháp:** `=HLOOKUP(giá_trị_cần_tra, bảng_dò, số_thứ_tự_hàng_lấy_giá_trị, [dò_tìm_gần_đúng])`",
                        "icon": "fa-info-circle",
                        "slideImage": "images/Buổi_11/Bài_5/5.1.png",
                        "videoUrl": "https://drive.google.com/file/d/16xC5sONcKWaqAnE_yr2o0BsyXv0xkoGv/preview"
                    },
                    {
                        "title": "Chuẩn bị: Đặt tên vùng (Named Range)",
                        "content": "**Mục đích:** Giúp công thức dễ đọc và không cần nhấn F4 để cố định vùng bảng dò.\n\n**Thao tác:**\n1. Bôi đen vùng dữ liệu **Bảng 1** (từ B13 đến E15).\n2. Click chuột phải vào vùng vừa bôi đen, chọn Define Name… -> gõ tên `_bang1` và nhấn **Enter**\n3. Bôi đen vùng dữ liệu **Bảng 2** (từ H12 đến J13).\n4. Click chuột phải vào vùng vừa bôi đen, chọn Define Name… -> gõ tên `_bang2` và nhấn **Enter**.\n5. (Làm cho câu 6) Bôi đen lần lượt dữ liệu cột Thành tiền, Chuyên chở, Phải trả (dòng 3 đến dòng 8) và đặt tên lần lượt là `_thanhtien`, `_chuyencho`, `_phaitra`.",
                        "icon": "fa-tag",
                        "slideImage": "images/Buổi_11/Bài_5/5.1.png",
                        "videoUrl": "https://drive.google.com/file/d/16xC5sONcKWaqAnE_yr2o0BsyXv0xkoGv/preview"
                    },
                    {
                        "title": "Yêu cầu 2: Điền Tên hàng (VLOOKUP cơ bản)",
                        "content": "**Phân tích:** Dựa vào ký tự đầu của Mã hàng để tra trong Bảng 1. Dùng hàm LEFT để lấy ký tự đầu.\n\n**Công thức tại ô C3:**\n`=VLOOKUP(LEFT(B3,1), _bang1, 2, 0)`\n\n**Giải thích:**\n- `LEFT(B3,1)`: Lấy 1 ký tự bên trái của mã hàng (Ví dụ: 'X' từ 'XL1').\n- `_bang1`: Vùng bảng dò đã đặt tên ở bước trước (hoặc dùng địa chỉ tuyệt đối `$B$13:$E$15`).\n- `2`: Lấy giá trị ở cột thứ 2 của bảng dò (Cột Tên hàng).\n- `0`: Dò tìm chính xác.",
                        "icon": "fa-search",
                        "slideImage": "images/Buổi_11/Bài_5/5.2.png",
                        "videoUrl": "https://drive.google.com/file/d/1KusbQiV_rKGdLs6lGD8xme-sDhmwnEDS/preview"
                    },
                    {
                        "title": "Yêu cầu 3: Tính Thành tiền (VLOOKUP kết hợp IF/MID)",
                        "content": "**Phân tích:**\n- Thành tiền = Số lượng * Đơn giá.\n- Đơn giá nằm trong Bảng 1 (_bang1).\n- Cột đơn giá thay đổi: Nếu ký tự thứ 2 là 's' (Giá sỉ) lấy cột 3, ngược lại (Giá lẻ) lấy cột 4.\n\n**Công thức tại ô E3:**\n`=D3 * VLOOKUP(LEFT(B3,1), _bang1, IF(MID(B3,2,1)=\"S\", 3, 4), 0)`\n\n**Giải thích:**\n- `D3`: Số lượng.\n- `MID(B3,2,1)`: Lấy 1 ký tự bắt đầu từ vị trí số 2 của Mã hàng.\n- `IF(..., 3, 4)`: Nếu ký tự đó là \"s\" thì trả về số 3 (cột Giá sỉ), ngược lại trả về số 4 (cột Giá lẻ).",
                        "icon": "fa-calculator",
                        "slideImage": "images/Buổi_11/Bài_5/5.3.png",
                        "videoUrl": "https://drive.google.com/file/d/1ojyfmvjxy5Ykee2pkewgSp9mXPNKvt1-/preview"
                    },
                    {
                        "title": "Yêu cầu 4: Tính Chuyên chở (HLOOKUP)",
                        "content": "**Phân tích:**\n- Chuyên chở = Thành tiền * % Chuyên chở.\n- % Chuyên chở tra trong Bảng 2 (bảng nằm ngang) -> Dùng HLOOKUP.\n- Mã tra cứu là ký tự cuối cùng của Mã hàng -> Dùng RIGHT. Lưu ý: Ký tự cắt ra từ chuỗi là văn bản, cần dùng VALUE để chuyển thành số mới tra được trong Bảng 2.\n\n**Công thức tại ô F3:**\n`=E3 * HLOOKUP(VALUE(RIGHT(B3,1)), _bang2, 2, 0)`\n\n**Giải thích:**\n- `VALUE(RIGHT(B3,1))`: Lấy ký tự cuối (ví dụ '1') và chuyển thành số 1.\n- `_bang2`: Vùng bảng dò ngang ($H$12:$J$13).\n- `2`: Lấy dòng số 2 của bảng dò.",
                        "icon": "fa-truck",
                        "slideImage": "images/Buổi_11/Bài_5/5.4.png",
                        "videoUrl": "https://drive.google.com/file/d/11de9ApfL1AStOC8IjVP6EQfH0d2dIrOV/preview"
                    },
                    {
                        "title": "Yêu cầu 5 & 6: Tính Tổng & Thống kê",
                        "content": "**Yêu cầu 5: Cột Phải trả**\n- Tại ô G3 gõ: `=E3 + F3` (Thành tiền + Chuyên chở).\n- Sao chép công thức xuống các dòng dưới.\n\n**Yêu cầu 6: Thống kê tổng cộng**\n- Tại dòng Tổng cộng (dòng 9), sử dụng hàm SUM với tên vùng đã đặt:\n- Tổng Thành tiền: `=SUM(_thanhtien)`\n- Tổng Chuyên chở: `=SUM(_chuyencho)`\n- Tổng Phải trả: `=SUM(_phaitra)`",
                        "icon": "fa-chart-line",
                        "slideImage": "images/Buổi_11/Bài_5/5.5.png",
                        "videoUrl": "https://drive.google.com/file/d/1RA_Ys13ts6YOkB79i-Ckhvj6UP-u7fcu/preview"
                    }
                ]
            },
            {
                "id": 106,
                "sessionId": 11,
                "title": "Bài 6: Sắp xếp (Sort) và Lọc dữ liệu (Filter)",
                "description": "Kỹ năng quản lý dữ liệu lớn: Sắp xếp đa cấp độ và trích lọc dữ liệu theo điều kiện phức tạp (AND, OR).",
                "image": "images/Buổi_11/Bài_6/6.1.png",
                "video": "",
                "tasks": [
                    {
                        "name": "File thực hành",
                        "file": "Bài 5-6-7-8.xlsx"
                    }
                ],
                "requirements": "1. Sắp xếp bảng tính: Khu vực (A-Z), Sản phẩm (A-Z), Mùa (Spring -> Summer -> Fall).\n2. Copy bảng sang sheet 'Bài 6_Filter'.\n3. Lọc: Fruit, Spring, Doanh số > $45,000.\n4. Lọc: Vegetables, Fall, Riverside Park.\n5. Lọc: Mã 10, Summer, Doanh số >= $15,000.\n6. Lọc nâng cao: (Downtown HOẶC Westlake) VÀ Doanh số > $100,000.",
                "docs": [
                    {
                        "name": "Bài 5-6-7-8 [Excel] (PDF)",
                        "file": "../DeBaiThucHanh/Bài 5-6-7-8 [Excel].pdf"
                    }
                ],
                "steps": [
                    {
                        "title": "Lý thuyết cơ bản: Sắp xếp & Lọc dữ liệu",
                        "content": "**1. Sắp xếp (Sort):**\nGiúp tổ chức dữ liệu để dễ dàng phân tích và tìm kiếm.\n\n- **Sắp xếp đơn giản:** Tăng dần (A-Z, 0-9) hoặc Giảm dần (Z-A, 9-0).\n- **Sắp xếp nhiều cấp (Multi-level Sort):** Khi cột đầu tiên có dữ liệu trùng nhau, Excel sẽ xét tiếp đến cột thứ 2. Ví dụ: Sắp xếp theo Tên (A-Z), nếu trùng tên thì sắp xếp theo Ngày sinh (Cũ -> Mới).\n- **Custom List:** Sắp xếp theo thứ tự tùy chỉnh không theo bảng chữ cái. Ví dụ: Thứ 2, Thứ 3... Chủ nhật; hoặc BGĐ, Trưởng phòng, Nhân viên.\n\n**2. Lọc dữ liệu (Filter):**\nTrích xuất các dòng thỏa mãn điều kiện để phân tích.\n\n- **Text Filters (Lọc văn bản):** Chứa từ (Contains), Bắt đầu bằng (Begins with), Kết thúc bằng (Ends with)...\n- **Number Filters (Lọc số):** Lớn hơn (Greater Than), Nhỏ hơn (Less Than), Top 10 giá trị cao nhất/thấp nhất, Trên trung bình (Above Average)...\n- **Logic lọc:**\n  + **VÀ (AND):** Khi lọc trên cùng 1 dòng dữ liệu (thỏa mãn tất cả điều kiện).\n  + **HOẶC (OR):** Khi chọn nhiều mục trong danh sách lọc (checkbox) hoặc dùng Advanced Filter.",
                        "icon": "fa-info-circle",
                    },
                    {
                        "title": "Yêu cầu 1: Sắp xếp dữ liệu (Custom Sort)",
                        "content": "**Lưu ý:** Mùa (Season) không sắp xếp theo A-Z mà theo trình tự thời gian (Spring, Summer, Fall), nên cần dùng Custom List.\n\n**Thao tác:**\n1. Bôi đen toàn bộ bảng dữ liệu (A2:E86).\n2. Tab **Data** -> Chọn **Sort**.\n3. Thêm các cấp độ (Add Level):\n   - **Level 1:** Sort by `Khu vực` -> A to Z.\n   - **Level 2:** Sort by `Sản phẩm` -> A to Z.\n   - **Level 3:** Sort by `Mùa` -> Tại cột **Order** -> **Custom List...**\n     - Trong bảng Custom List, gõ: `Spring, Summer, Fall` (cách nhau dấu phẩy).\n     - Nhấn Add -> OK.\n4. Nhấn OK để hoàn tất sắp xếp.",
                        "icon": "fa-sort-amount-down",
                        "slideImage": "images/Buổi_11/Bài_6/6.1.png",
                        "videoUrl": "https://drive.google.com/file/d/1MkE0ctEqHozsHXMTQhnn6FPB7Plj-Uls/preview"
                    },
                    {
                        "title": "Yêu cầu 2: Copy bảng tính sang sheet mới với tên Bài 6_Filter",
                        "content": "**Lưu ý:** Mùa (Season) không sắp xếp theo A-Z mà theo trình tự thời gian (Spring, Summer, Fall), nên cần dùng Custom List.\n\n**Thao tác:**\n1. Bôi đen toàn bộ bảng dữ liệu (A2:E86).\n2. Tab **Data** -> Chọn **Sort**.\n3. Thêm các cấp độ (Add Level):\n   - **Level 1:** Sort by `Khu vực` -> A to Z.\n   - **Level 2:** Sort by `Sản phẩm` -> A to Z.\n   - **Level 3:** Sort by `Mùa` -> Tại cột **Order** -> **Custom List...**\n     - Trong bảng Custom List, gõ: `Spring, Summer, Fall` (cách nhau dấu phẩy).\n     - Nhấn Add -> OK.\n4. Nhấn OK để hoàn tất sắp xếp.",
                        "icon": "fa-sort-amount-down",
                        "slideImage": "images/Buổi_11/Bài_6/6.1.png",
                        "videoUrl": "https://drive.google.com/file/d/1pD2n9Q3PUkWK0sC-TXImL2jr4KorLgHn/preview"
                    },
                    {
                        "title": "Yêu cầu 3: Lọc ra những sản phẩm là Fruit bán vào mùa xuân (Spring) đạt doanh số trên $45000",
                        "content": "**Chuẩn bị:** Copy dữ liệu sang sheet mới tên \"Bài 6_Filter\". Bôi đen dòng tiêu đề (Dòng 2), vào Data -> chọn **Filter** (hình cái phễu).\n\n**Thực hiện Yêu cầu 3 (Ví dụ mẫu):**\n1. Cột Sản phẩm: Bỏ chọn Select All, chỉ tích chọn **Fruit**.\n2. Cột Mùa: Chỉ tích chọn **Spring**.\n3. Cột Doanh số: Bấm nút lọc -> Chọn **Number Filters** -> Chọn **Greater Than...** -> Nhập `45000`.\n4. Copy kết quả lọc được và Paste ra vị trí khác (theo yêu cầu đề bài).\n5. Nhấn **Clear** trong tab Data để xóa bộ lọc làm câu tiếp theo.",
                        "icon": "fa-filter",
                        "slideImage": "images/Buổi_11/Bài_6/6.3.png",
                        "videoUrl": "https://drive.google.com/file/d/15lFXBUmB0Fj7evlNaUxvfiZdW8Xt76lV/preview"
                    },
                    {
                        "title": "Yêu cầu 4: Lọc ra những sản phẩm là Vegetables bán vào mùa thu (Fall) thuộc Riverside Park",
                        "content": "1. Cột Sản phẩm: Bỏ chọn Select All, chỉ tích chọn **Vegetables**.\n2. Cột Mùa: Chỉ tích chọn **Fall**.\n3. Cột Khu vực: Chọn **Riverside Park**.\n4. Copy kết quả lọc được và Paste ra vị trí khác (theo yêu cầu đề bài).\n5. Nhấn **Clear** trong tab Data để xóa bộ lọc làm câu tiếp theo.",
                        "icon": "fa-filter",
                        "slideImage": "images/Buổi_11/Bài_6/6.4.png",
                        "videoUrl": "https://drive.google.com/file/d/1xdhbFSzCOOgq47V9fTgICilp0Kx0FzEH/preview"
                    },
                    {
                        "title": "Yêu cầu 5: Lọc ra những sản phẩm có mã 10 bán vào mùa hè (Summer) đạt doanh số từ $15000 trở lên",
                        "content": "1. Cột Mã: Bỏ chọn Select All, chỉ tích chọn **10**.\n2. Cột Mùa: Chỉ tích chọn **Summer**.\n3. Cột Doanh số: Bấm nút lọc -> Chọn **Number Filters** -> Chọn **Greater Than...** -> Nhập `15000`.\n4. Copy kết quả lọc được và Paste ra vị trí khác (theo yêu cầu đề bài).\n5. Nhấn **Clear** trong tab Data để xóa bộ lọc làm câu tiếp theo.",
                        "icon": "fa-filter",
                        "slideImage": "images/Buổi_11/Bài_6/6.5.png",
                        "videoUrl": "https://drive.google.com/file/d/10ixMue7GHt14lSh04aK1Vr54pxxRPDWZ/preview"
                    },
                    {
                        "title": "Yêu cầu 6: Lọc ra những sản phẩm có mã thuộc Downtown hoặc Westlake đạt doanh số trên $100000",
                        "content": "1. Cột Khu vực: Bỏ chọn Select All, chỉ tích chọn **Downtown** và **Westlake**.\n2. Cột Doanh số: Bấm nút lọc -> Chọn **Number Filters** -> Chọn **Greater Than...** -> Nhập `100000`.\n4. Copy kết quả lọc được và Paste ra vị trí khác (theo yêu cầu đề bài).\n5. Nhấn **Clear** trong tab Data để xóa bộ lọc làm câu tiếp theo.",
                        "icon": "fa-random",
                        "slideImage": "images/Buổi_11/Bài_6/6.6.png",
                        "videoUrl": "https://drive.google.com/file/d/1M7upA48rdo9fd7KGKTDyy0isK3PWLWho/preview"
                    }
                ]
            },
            {
                "id": 107,
                "sessionId": 11,
                "title": "Bài 7: Thống kê Subtotal & PivotTable",
                "description": "Các công cụ tổng hợp dữ liệu mạnh mẽ nhất trong Excel: Subtotal cho báo cáo phân cấp và PivotTable cho báo cáo ma trận.",
                "image": "images/Buổi_11/Bài_7/thumb.png",
                "video": "",
                "tasks": [
                    {
                        "name": "File thực hành (dùng dữ liệu Bài 6)",
                        "file": "Bài 5-6-7-8.xlsx"
                    }
                ],
                "requirements": "1-3. Thống kê doanh số theo Khu vực, Mùa, Sản phẩm dùng Subtotal.\n4. Thống kê dùng Consolidate (ít dùng).\n5-7. Tạo báo cáo PivotTable:\n   - Cột: Mã, Dòng: Sản phẩm, Giá trị: Doanh số.\n   - Cột: Mùa, Dòng: Sản phẩm, Giá trị: Doanh số.\n   - Cột: Khu vực, Dòng: Sản phẩm, Giá trị: Doanh số.",
                "docs": [
                    {
                        "name": "Bài 5-6-7-8 [Excel] (PDF)",
                        "file": "../DeBaiThucHanh/Bài 5-6-7-8 [Excel].pdf"
                    }
                ],
                "steps": [
                    {
                        "title": "Lý thuyết cơ bản: Subtotal & PivotTable",
                        "content": "**1. Subtotal (Tổng phụ):**\nCông cụ tạo báo cáo phân nhóm và tính tổng tự động.\n- **Điều kiện bắt buộc:** Dữ liệu phải được **SẮP XẾP (SORT)** theo cột cần gom nhóm trước.\n- **Cấu trúc Subtotal:**\n  + **At each change in:** Chọn cột phân loại (Ví dụ: Khu vực).\n  + **Use function:** Chọn hàm thống kê (Sum, Count, Average...).\n  + **Add subtotal to:** Chọn cột cần tính toán (Ví dụ: Doanh số).\n- **Phân cấp (Outline):** Excel tạo ra các cấp độ 1, 2, 3 bên trái màn hình để mở rộng hoặc thu gọn dữ liệu.\n\n**2. PivotTable (Bảng tổng hợp):**\nCông cụ phân tích dữ liệu đa chiều mạnh mẽ nhất Excel.\n- **Ưu điểm:** Không làm thay đổi dữ liệu gốc, linh hoạt kéo thả, tự động cập nhật báo cáo.\n- **4 Vùng thao tác:**\n  + **Rows:** Các tiêu đề dòng (Ví dụ: Tên sản phẩm).\n  + **Columns:** Các tiêu đề cột (Ví dụ: Khu vực).\n  + **Values:** Dữ liệu số liệu cần tính toán (Ví dụ: Tổng doanh số).\n  + **Filters:** Bộ lọc tổng quát cho toàn báo cáo (Ví dụ: Năm).",
                        "icon": "fa-info-circle",
                    },
                    {
                        "title": "Yêu cầu 1, 2, 3: Hướng dẫn Subtotal, Thống kê doanh số bán hàng nông sản",
                        "content": "**Nguyên tắc vàng:** Phải SẮP XẾP (Sort) dữ liệu theo cột cần thống kê trước khi làm Subtotal.\n\n**Thao tác (Thống kê theo Khu vực):**\n1. Sắp xếp cột **Khu vực** (A-Z).\n2. Bôi đen bảng dữ liệu.\n3. Vào Data -> chọn **Subtotal**.\n4. Thiết lập:\n   - **At each change in:** Chọn `Khu vực`.\n   - **Use function:** Chọn `Sum` (Tính tổng).\n   - **Add subtotal to:** Tích chọn `Doanh số`.\n5. Nhấn OK.\n\n*(Làm tương tự cho Mùa và Sản phẩm: Nhớ phải Sort cột Mùa hoặc Sản phẩm trước)*",
                        "icon": "fa-list-ol",
                        "videoUrl": 'https://drive.google.com/file/d/1AW_sekP8szM8df4Joz8qaBhV_xiDuP9T/preview'
                    },
                    {
                        "title": "Yêu cầu 4: Thống kê doanh số bán hàng nông sản theo mùa hoặc sản phẩm hoặc mã",
                        "content": "1. Tạo một **Sheet mới** hoặc chọn một vùng trống trên sheet hiện tại để tránh ghi đè dữ liệu cũ.\n2. Click chuột chọn ô đầu tiên nơi muốn hiển thị kết quả (ví dụ ô **A1**).\n3. Vào tab **Data** -> Chọn **Consolidate**.\n4. Trong hộp thoại Consolidate:\n   **Nguyên tắc quan trọng:** Vùng dữ liệu quét (Reference) phải BẮT ĐẦU bằng cột chứa tiêu chí muốn thống kê.\n\nTrong hộp thoại Consolidate:\n- **Function:** Chọn `Sum` (để tính tổng).\n- **Reference:** Quét vùng dữ liệu theo 1 trong 3 trường hợp sau:\n  + *Nếu thống kê theo Mùa:* Quét từ cột **Mùa** đến hết cột **Doanh số** (Bỏ qua các cột Mã, Sản phẩm, Khu vực phía trước).\n  + *Nếu thống kê theo Sản phẩm:* Quét từ cột **Sản phẩm** đến hết cột **Doanh số**.\n  + *Nếu thống kê theo Mã:* Quét từ cột **Mã** đến hết cột **Doanh số**.\n\n-> Sau khi quét xong, nhấn nút **Add** để thêm vào danh sách. Tại mục **Use labels in** (Sử dụng nhãn trong), tích chọn cả 2 ô:\n- `Top row`: Để giữ lại dòng tiêu đề (ví dụ chữ \"Doanh số\").\n- `Left column`: Để Excel hiểu cột đầu tiên bên trái của vùng vừa quét chính là đối tượng cần gom nhóm (Mùa/Sản phẩm...).\n\nNhấn **OK** để hoàn tất.",
                        "icon": "fa-list-ol",
                        "videoUrl": 'https://drive.google.com/file/d/1xCNoeEFVS_xIYSAKh9sDhkIDLALTQAzP/preview'
                    },
                    {
                        "title": "Yêu cầu 5, 6, 7: Tạo báo cáo PivotTable",
                        "content": "**Ví dụ Yêu cầu 7: Khu vực (Cột) - Sản phẩm (Dòng)**\n\n1. Bôi đen bảng dữ liệu gốc (Bài 6).\n2. Vào tab **Insert** -> Chọn **PivotTable** -> Nhấn OK (để tạo ở sheet mới).\n3. Tại bảng **PivotTable Fields** (bên phải màn hình):\n   - Kéo trường `Sản phẩm` thả vào ô **Rows** (Dòng).\n   - Kéo trường `Khu vực` thả vào ô **Columns** (Cột).\n   - Kéo trường `Doanh số` thả vào ô **Values** (Giá trị).\n4. Định dạng số tiền: Click chuột phải vào vùng số liệu -> Number Format -> Chọn Accounting/Currency.\n5. Đổi tên sheet thành \"Cau_7\" theo yêu cầu.",
                        "icon": "fa-table",
                        "videoUrl": "https://drive.google.com/file/d/12uK2kcNR5ycjRSPuhK51OyU-r_MekOwi/preview"
                    }
                ]
            },
            {
                "id": 108,
                "sessionId": 11,
                "title": "Bài 8: Định dạng nâng cao & Table",
                "description": "Trực quan hóa dữ liệu với Conditional Formatting và làm sạch dữ liệu với Remove Duplicates.",
                "image": "images/Buổi_11/Bài_8/thumb.png",
                "video": "",
                "tasks": [
                    {
                        "name": "File thực hành",
                        "file": "Bài 5-6-7-8.xlsx"
                    }
                ],
                "requirements": "1. Định dạng cột doanh số: Gradient Fill Orange Data Bar.\n2. Chuyển vùng A2:E86 thành Table.\n3. Thao tác Table: Total Row, Banded Rows.\n4. Xóa dữ liệu trùng (Remove Duplicates) theo Khu vực và Sản phẩm.",
                "docs": [
                    {
                        "name": "Bài 5-6-7-8 [Excel] (PDF)",
                        "file": "../DeBaiThucHanh/Bài 5-6-7-8 [Excel].pdf"
                    }
                ],
                "steps": [
                    {
                        "title": "Lý thuyết cơ bản: Conditional Formatting & Table",
                        "content": "**1. Conditional Formatting (Định dạng có điều kiện):**\nTự động thay đổi màu sắc ô dựa trên giá trị của nó.\n- **Highlight Cells Rules:** Tô màu ô lớn hơn/nhỏ hơn giá trị X, chứa văn bản Y, hoặc trùng lặp (Duplicate Values).\n- **Top/Bottom Rules:** Tô màu 10 giá trị cao nhất, top 10%, hoặc giá trị trên trung bình.\n- **Data Bars:** Vẽ biểu đồ thanh ngay trong ô (thanh càng dài giá trị càng lớn).\n- **Color Scales:** Tô màu dạng bản đồ nhiệt (Xanh - Vàng - Đỏ).\n- **Icon Sets:** Hiển thị biểu tượng (Mũi tên, Cờ, Đèn giao thông) bên cạnh số liệu.\n\n**2. Table (Bảng số liệu chuẩn):**\nBiến vùng dữ liệu thường thành bảng thông minh (Ctrl + T).\n- **Tính năng đặc biệt:**\n  + **Auto-Filter:** Tự động có nút lọc ở tiêu đề.\n  + **Total Row:** Dòng tổng cộng cuối bảng với menu chọn hàm nhanh (Sum, Average...).\n  + **Auto-Expand:** Tự động mở rộng định dạng và công thức khi thêm dòng mới.\n  + **Structured Reference:** Công thức dùng tên cột (VD: `=[@Đơn giá]*[@Số lượng]`) thay vì địa chỉ ô, giúp dễ đọc và ít sai sót.",
                        "icon": "fa-info-circle",
                    },
                    {
                        "title": "Yêu cầu 1: Conditional Formatting",
                        "content": "**Mục đích:** Vẽ biểu đồ thanh ngay trong ô để so sánh doanh số trực quan.\n\n**Thao tác:**\n1. Bôi đen cột dữ liệu Doanh số (trừ tiêu đề).\n2. Vào tab **Home** -> **Conditional Formatting**.\n3. Chọn **Data Bars**.\n4. Chọn mẫu **Gradient Fill - Orange Data Bar** (Màu cam chuyển sắc).",
                        "icon": "fa-palette",
                        "videoUrl": "https://drive.google.com/file/d/15cEVpk0K8KGUCBa_1ges4pwxMsB0zecQ/preview"
                    },
                    {
                        "title": "Yêu cầu 2: Làm việc với Table",
                        "content": "**Tạo bảng:**\n1. Bôi đen vùng dữ liệu A2:E86.\n2. Nhấn tổ hợp phím **Ctrl + T** (hoặc Insert -> Table).\n3. Đảm bảo tích chọn \"My table has headers\" -> OK.",
                        "icon": "fa-table",
                        "videoUrl": "https://drive.google.com/file/d/1AOmKeZ9fhdYvP6Xn1LWC2pL2-bE2x1BL/preview"
                    },
                    {
                        "title": "Yêu cầu 3: Làm việc với Table",
                        "content": "**Tùy chỉnh bảng (Table Design):**\n- Khi chọn bảng, tab **Table Design** xuất hiện trên thanh menu.\n- Tích chọn **Total Row**: Tự động thêm dòng tổng cộng ở cuối.\n- Tích/Bỏ tích **Banded Rows**: Để làm hiện/ẩn màu xen kẽ giữa các dòng.",
                        "icon": "fa-table",
                        "videoUrl": "https://drive.google.com/file/d/1b2pRuEJkJ98cEeukG43ELF3xp8iApHIE/preview"
                    },
                    {
                        "title": "Yêu cầu 4: Xóa dữ liệu trùng (Remove Duplicates)",
                        "content": "**Cảnh báo:** Thao tác này sẽ xóa mất dữ liệu, nên cần copy sang sheet mới trước (đặt tên `remove_kq`).\n\n**Thao tác:**\n1. Tại sheet mới, bôi đen bảng (hoặc chọn bảng Table).\n2. Vào tab **Data** -> Chọn biểu tượng **Remove Duplicates**.\n3. Trong hộp thoại hiện ra:\n   - Chỉ tích chọn 2 trường: `Khu vực` và `Sản phẩm` (theo đề bài).\n   - Bỏ tích các trường khác.\n4. Nhấn OK.\n\n**Kết quả:** Excel sẽ giữ lại các dòng duy nhất của cặp (Khu vực + Sản phẩm) và xóa các dòng lặp lại.",
                        "icon": "fa-trash-alt",
                        "videoUrl": "https://drive.google.com/file/d/1ZD4Xc3n7huEMuB-Dkdd_mDWcT2qmkAfR/preview"
                    }
                ]
            }
        ]
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
