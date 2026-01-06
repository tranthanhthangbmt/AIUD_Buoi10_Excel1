const app = {
    config: {
        defaultFile: "data/quiz/Buoi6_Bai1.csv",
        defaultName: "Bài tập trắc nghiệm"
    },
    state: {
        quizQuestions: [],
        currentQuestionIndex: 0,
        userResults: {},
        returnUrl: null // Biến lưu địa chỉ quay lại
    },

    init: function () {
        const params = new URLSearchParams(window.location.search);

        // 1. Lấy thông tin file và tên bài
        const file = params.get('file');
        const name = params.get('name') || this.config.defaultName;

        // 2. Lấy URL quay lại (nếu có)
        const returnUrl = params.get('returnUrl');
        if (returnUrl) {
            this.state.returnUrl = returnUrl;
        }

        // 3. Xử lý tải dữ liệu
        if (file) {
            this.loadCustomModule(file, name);
        } else {
            // Nếu không có file, báo lỗi hướng dẫn
            alert("Vui lòng truyền đường dẫn file CSV vào URL.\nVí dụ: quiz.html?file=data.csv&returnUrl=index.html");
        }

        this.setupEventListeners();
    },

    setupEventListeners: function () {
        document.addEventListener('keydown', (e) => {
            const view = document.getElementById('view-quiz');
            if (!view || view.classList.contains('hidden')) return;
            if (e.key === 'ArrowRight') this.nextQuestion();
            if (e.key === 'ArrowLeft') this.prevQuestion();
        });
    },

    // --- Logic Điều Hướng (Đã khôi phục theo yêu cầu) ---

    goHome: function () {
        // Ưu tiên 1: Nếu trên URL có truyền returnUrl (ví dụ: ?returnUrl=index.html)
        if (this.state.returnUrl) {
            window.location.href = this.state.returnUrl;
            return;
        }

        // Ưu tiên 2: Quay lại trang trước trong lịch sử duyệt web
        if (window.history.length > 1) {
            window.history.back();
        } else {
            // Ưu tiên 3: Nếu mở tab mới trực tiếp, chỉ thông báo
            alert("Đã kết thúc bài trắc nghiệm. Bạn có thể đóng tab này.");
        }
    },

    // --- Logic Tải Dữ Liệu ---

    loadCustomModule: function (file, name) {
        document.getElementById('header-title').textContent = name;
        this.fetchModuleData(file);
    },

    fetchModuleData: function (filePath) {
        const loadingEl = document.getElementById('loading');
        if (loadingEl) loadingEl.classList.remove('hidden');

        Papa.parse(filePath, {
            download: true,
            header: true,
            skipEmptyLines: true,
            complete: (results) => {
                if (loadingEl) loadingEl.classList.add('hidden');

                if (results.errors.length > 0) {
                    console.error("Lỗi CSV:", results.errors);
                    alert("Lỗi đọc file CSV. Kiểm tra Console để biết chi tiết.");
                    return;
                }

                const validQuestions = results.data.filter(q => q.QuestionContent);

                if (validQuestions.length === 0) {
                    alert("File CSV không có dữ liệu câu hỏi hợp lệ.");
                    return;
                }

                this.startQuiz(validQuestions);
            },
            error: (err) => {
                if (loadingEl) loadingEl.classList.add('hidden');
                console.error("Fetch Error:", err);
                alert("Không thể tải file: " + filePath + "\n\nLưu ý: Hãy chạy trên Live Server, không mở trực tiếp file://");
            }
        });
    },

    // --- Logic Quiz (Giữ nguyên phần đã sửa lỗi) ---

    startQuiz: function (questions) {
        this.state.quizQuestions = questions;
        this.state.currentQuestionIndex = 0;
        this.state.userResults = {};

        const viewQuiz = document.getElementById('view-quiz');
        viewQuiz.classList.remove('hidden');
        viewQuiz.classList.add('fade-in');

        // Ẩn nút chọn phần khác vì không dùng trong chế độ này
        const backPartsBtn = document.querySelector('button[onclick="app.backToParts()"]');
        if (backPartsBtn) backPartsBtn.style.display = 'none';

        this.renderQuestionPalette();
        this.renderQuestion();
    },

    renderQuestion: function () {
        const qIndex = this.state.currentQuestionIndex;
        const question = this.state.quizQuestions[qIndex];
        const total = this.state.quizQuestions.length;

        // Progress Bar
        const progressBar = document.getElementById('progress-bar');
        if (progressBar) progressBar.style.width = `${((qIndex + 1) / total) * 100}%`;

        const qNumEl = document.getElementById('current-question-number');
        if (qNumEl) qNumEl.textContent = `${qIndex + 1}/${total}`;

        // Reset UI
        const feedbackArea = document.getElementById('feedback-area');
        if (feedbackArea) feedbackArea.classList.add('hidden');

        const statusEl = document.getElementById('question-status');
        const isCorrect = this.state.userResults[qIndex] === 'correct';

        if (statusEl) {
            statusEl.textContent = isCorrect ? 'Đã hoàn thành' : 'Chưa trả lời';
            statusEl.className = isCorrect ? 'text-sm font-medium text-green-600' : 'text-sm font-medium text-gray-500';
        }

        // Render Text
        document.getElementById('question-text').textContent = question.QuestionContent;

        // Render Options
        const optionsContainer = document.getElementById('options-container');
        optionsContainer.innerHTML = '';

        let optionKeys = [
            { key: 'A', text: question.AAnsver || question.AAnswer || question.A },
            { key: 'B', text: question.BAnswer || question.B },
            { key: 'C', text: question.CAnswer || question.C },
            { key: 'D', text: question.DAnswer || question.D }
        ];

        this.shuffleArray(optionKeys);

        optionKeys.forEach(opt => {
            if (!opt.text) return;

            const el = document.createElement('div');
            el.className = 'quiz-option bg-white p-4 rounded-lg border flex items-center group cursor-pointer hover:bg-blue-50 transition-colors';
            el.dataset.key = opt.key;

            if (isCorrect) {
                el.classList.add('disabled', 'opacity-70', 'cursor-not-allowed');
                if (opt.key === question.Answer) {
                    el.classList.add('border-green-500', 'bg-green-50');
                }
            } else {
                el.onclick = () => this.checkAnswer(opt.key, question.Answer, el);
            }

            el.innerHTML = `
                <span class="w-8 h-8 rounded-full bg-gray-100 text-gray-600 font-bold flex items-center justify-center mr-4 border border-gray-200">${opt.key}</span>
                <span class="text-gray-700 font-medium">${opt.text}</span>
            `;
            optionsContainer.appendChild(el);
        });

        // Buttons
        document.getElementById('btn-prev').disabled = qIndex === 0;
        document.getElementById('btn-next').disabled = qIndex === total - 1;

        this.updatePaletteActiveState();
    },

    checkAnswer: function (selectedKey, correctKey, element) {
        if (!correctKey) return;
        const selected = selectedKey.trim().toUpperCase();
        const correct = correctKey.trim().toUpperCase();

        const feedbackArea = document.getElementById('feedback-area');
        const feedbackText = document.getElementById('feedback-text');
        const allOptions = document.querySelectorAll('.quiz-option');

        if (selected === correct) {
            element.classList.remove('hover:bg-blue-50');
            element.classList.add('border-green-500', 'bg-green-50');
            allOptions.forEach(opt => opt.classList.add('pointer-events-none'));

            feedbackArea.className = 'mt-6 p-4 rounded-lg border-l-4 bg-green-50 border-green-500 text-green-700 fade-in';
            feedbackText.innerHTML = '<i class="fa-solid fa-check-circle mr-2"></i> Chính xác!';
            feedbackArea.classList.remove('hidden');

            this.state.userResults[this.state.currentQuestionIndex] = 'correct';
            this.updatePaletteItem(this.state.currentQuestionIndex, 'correct');

            const statusEl = document.getElementById('question-status');
            if (statusEl) {
                statusEl.textContent = 'Đã hoàn thành';
                statusEl.className = 'text-sm font-medium text-green-600';
            }
        } else {
            element.classList.add('border-red-500', 'bg-red-50');
            setTimeout(() => element.classList.remove('border-red-500', 'bg-red-50'), 1000);

            feedbackArea.className = 'mt-6 p-4 rounded-lg border-l-4 bg-red-50 border-red-500 text-red-700 fade-in';
            feedbackText.innerHTML = '<i class="fa-solid fa-circle-exclamation mr-2"></i> Sai rồi, thử lại xem!';
            feedbackArea.classList.remove('hidden');

            if (this.state.userResults[this.state.currentQuestionIndex] !== 'correct') {
                this.state.userResults[this.state.currentQuestionIndex] = 'wrong';
                this.updatePaletteItem(this.state.currentQuestionIndex, 'wrong');
            }
        }
    },

    // --- Helpers ---

    shuffleArray: function (array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    },

    // --- Palette & Navigation ---

    renderQuestionPalette: function () {
        const container = document.getElementById('question-palette');
        if (!container) return;
        container.innerHTML = '';

        this.state.quizQuestions.forEach((_, index) => {
            const btn = document.createElement('button');
            btn.className = 'palette-item w-8 h-8 rounded-full bg-gray-100 text-gray-600 text-xs font-medium flex items-center justify-center hover:bg-gray-200 focus:outline-none m-1';
            btn.textContent = index + 1;
            btn.onclick = () => this.jumpToQuestion(index);
            btn.id = `palette-btn-${index}`;
            container.appendChild(btn);
        });
    },

    updatePaletteItem: function (index, status) {
        const btn = document.getElementById(`palette-btn-${index}`);
        if (!btn) return;

        btn.className = 'palette-item w-8 h-8 rounded-full text-xs font-medium flex items-center justify-center focus:outline-none transition-colors m-1';

        if (status === 'correct') btn.classList.add('bg-green-500', 'text-white');
        else if (status === 'wrong') btn.classList.add('bg-red-500', 'text-white');
        else btn.classList.add('bg-gray-100', 'text-gray-600');

        if (index === this.state.currentQuestionIndex) btn.classList.add('ring-2', 'ring-primary', 'ring-offset-1');
    },

    updatePaletteActiveState: function () {
        document.querySelectorAll('.palette-item').forEach(btn => btn.classList.remove('ring-2', 'ring-primary', 'ring-offset-1'));
        const btn = document.getElementById(`palette-btn-${this.state.currentQuestionIndex}`);
        if (btn) btn.classList.add('ring-2', 'ring-primary', 'ring-offset-1');
    },

    jumpToQuestion: function (index) {
        this.state.currentQuestionIndex = index;
        this.renderQuestion();
    },

    nextQuestion: function () {
        if (this.state.currentQuestionIndex < this.state.quizQuestions.length - 1) {
            this.state.currentQuestionIndex++;
            this.renderQuestion();
        }
    },

    prevQuestion: function () {
        if (this.state.currentQuestionIndex > 0) {
            this.state.currentQuestionIndex--;
            this.renderQuestion();
        }
    }
};

document.addEventListener('DOMContentLoaded', () => {
    app.init();
});