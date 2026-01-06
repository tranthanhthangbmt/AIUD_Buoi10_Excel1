
document.addEventListener('DOMContentLoaded', () => {
    const sessionGrid = document.getElementById('session-grid');
    const lessonGrid = document.getElementById('lesson-grid');
    const lessonContainer = document.querySelector('.lesson-container');

    // Helper to get URL params
    const getParams = () => new URLSearchParams(window.location.search);

    // Initialize Index Page (Sessions)
    if (sessionGrid) {
        renderSessionGrid();
    }

    // Initialize Session Page (Lessons in a session)
    if (lessonGrid && !lessonContainer) {
        const sessionId = parseInt(getParams().get('id'));
        if (sessionId) {
            const session = sessionsData.find(s => s.id === sessionId);
            if (session) {
                renderSessionDetail(session);
            } else {
                alert('Session not found!');
                window.location.href = 'index.html';
            }
        } else {
            window.location.href = 'index.html';
        }
    }

    // Initialize Lesson Page
    if (lessonContainer) {
        const sessionId = parseInt(getParams().get('sessionId'));
        const lessonId = parseInt(getParams().get('id'));

        if (sessionId && lessonId) {
            const session = sessionsData.find(s => s.id === sessionId);
            if (session) {
                const lesson = session.lessons.find(l => l.id === lessonId);
                if (lesson) {
                    renderLessonDetail(lesson, session);
                    initLightbox();
                } else {
                    alert('Lesson not found!');
                    window.location.href = `session.html?id=${sessionId}`;
                }
            } else {
                alert('Session not found!');
                window.location.href = 'index.html';
            }
        } else {
            window.location.href = 'index.html';
        }
    }

    function renderSessionGrid() {
        sessionGrid.innerHTML = sessionsData.map(session => `
            <a href="session.html?id=${session.id}" class="lesson-card">
                <h2>${session.title}</h2>
                <p>${session.description}</p>
                <div class="card-footer">
                    <span><i class="fas fa-book-open"></i> ${session.lessons.length} bài học</span>
                    <span><i class="fas fa-arrow-right"></i> Xem chi tiết</span>
                </div>
            </a>
        `).join('');
    }

    function renderSessionDetail(session) {
        // Update page metadata
        document.title = `${session.title} - Thực Hành Word`;
        document.getElementById('session-number').textContent = session.title.split(':')[0];
        document.getElementById('session-title').textContent = session.title;
        document.getElementById('session-desc').textContent = session.description;

        // Slide
        let slideHtml = '';
        if (session.slide) {
            const filePath = session.slide.startsWith('http') ? session.slide : 'TaiLieuHuongDan/Slide/' + session.slide;
            slideHtml = `
                <a href="${filePath}" class="lesson-card" target="_blank">
                    <h2>Slide bài học</h2>
                    <p>Xem slide bài học.</p>
                    <div class="card-footer">
                        <span><i class="fas fa-file-powerpoint"></i> Xem slide</span>
                    </div>
                </a>
            `;
        }

        // Quizzes
        let quizHtml = '';
        if (session.quiz) {
            const filePath = session.quiz.startsWith('http') ? session.quiz : 'data/quiz/' + session.quiz;
            quizHtml = `
                <a href="quiz.html?file=${encodeURIComponent(filePath)}&name=${encodeURIComponent(session.quiz)}&returnUrl=${encodeURIComponent(window.location.href)}" class="lesson-card">
                    <h2>Trắc nghiệm</h2>
                    <p>Bài tập trắc nghiệm ôn tập kiến thức cho bài học này.</p>
                    <div class="card-footer">
                        <span><i class="fas fa-pen-to-square"></i> Làm bài ngay</span>
                        <span>20 câu hỏi</span>
                    </div>
                </a>`;
        }

        // Lessons
        const lessonsHtml = session.lessons.map(lesson => {
            return `
            <a href="lesson.html?sessionId=${session.id}&id=${lesson.id}" class="lesson-card">
                <h2>${lesson.title}</h2>
                <p>${lesson.description}</p>
                <div class="card-footer">
                    <span><i class="fas fa-play-circle"></i> Xem hướng dẫn</span>
                    <span>${lesson.steps ? lesson.steps.length : (lesson.sections ? lesson.sections.reduce((acc, sec) => acc + sec.steps.length, 0) : 0)} bước</span>
                </div>
            </a>`;
        }).join('');

        lessonGrid.innerHTML = slideHtml + quizHtml + lessonsHtml;
    }

    function renderLessonDetail(lesson, session) {
        try {
            // Metadata
            document.title = `${lesson.title} - ${session.title} - Thực Hành Word`;

            const lessonNumber = document.getElementById('lesson-number');
            const lessonTitle = document.getElementById('lesson-title');
            const lessonDesc = document.getElementById('lesson-desc');

            if (lessonNumber) lessonNumber.textContent = lesson.title.split(':')[0];
            if (lessonTitle) lessonTitle.textContent = lesson.title;
            if (lessonDesc) lessonDesc.textContent = lesson.description;

            // Update back link to go to session page
            const backLink = document.querySelector('.back-link');
            if (backLink) {
                backLink.href = `session.html?id=${session.id}`;
                backLink.innerHTML = `<i class="fas fa-arrow-left"></i> Quay lại ${session.title.split(':')[0]}`;
            }

            // Featured Image
            const featuredImage = document.getElementById('lesson-featured-image');
            const videoContainer = document.getElementById('video-container');
            const videoFrame = document.getElementById('lesson-video');

            if (lesson.image && featuredImage) {
                featuredImage.src = lesson.image;
                featuredImage.style.display = 'block';
            } else if (featuredImage) {
                featuredImage.style.display = 'none';
            }

            // Video
            if (videoFrame && videoContainer) {
                if (lesson.video) {
                    videoFrame.src = lesson.video;
                    videoContainer.style.display = 'block';
                } else {
                    videoContainer.style.display = 'none';
                }
            }

            // Resources
            const resourceList = document.getElementById('resource-list');
            if (resourceList) {
                const tasks = lesson.tasks || [];
                const docs = lesson.docs || [];
                const quiz = lesson.quiz || [];

                const tasksHtml = tasks.map(t => {
                    let href = t.file;
                    if (!href.startsWith('http') && !href.startsWith('images/') && !href.startsWith('TaiLieuHuongDan/') && !href.includes('/')) {
                        href = 'DeBaiThucHanh/' + href;
                    } else if (href.includes('..')) {
                        href = href.replace('DeBaiThucHanh/', '');
                    }
                    return `
                <a href="${href}" class="resource-item" target="_blank">
                    <i class="fas fa-file-word"></i> 
                    <span>${t.name}</span>
                </a>
            `}).join('');

                const docsHtml = docs.map(d => `
                    <a href="${d.file.startsWith('http') ? d.file : 'TaiLieuHuongDan/' + d.file}" class="resource-item" target="_blank">
                        <i class="fas fa-file-pdf"></i>
                        <span>${d.name}</span>
                    </a>
                `).join('');

                resourceList.innerHTML = tasksHtml + docsHtml;
            }

            // Requirements
            const lessonLeft = document.querySelector('.lesson-left');
            const existingReq = document.getElementById('lesson-requirements');
            if (existingReq) existingReq.remove();

            if (lesson.requirements) {
                const reqDiv = document.createElement('div');
                reqDiv.id = 'lesson-requirements';
                reqDiv.className = 'lesson-requirements';
                reqDiv.style.marginTop = '0';
                reqDiv.style.padding = '1.5rem';
                reqDiv.style.background = 'rgba(255, 255, 255, 0.05)';
                reqDiv.style.borderRadius = '1rem';
                reqDiv.style.border = 'var(--glass-border)';
                reqDiv.innerHTML = `
                    <h3 style="color: var(--accent-color); margin-bottom: 1rem;"><i class="fas fa-tasks"></i> Các yêu cầu của bài:</h3>
                    <div style="white-space: pre-line; line-height: 1.8; color: var(--text-secondary);">
                        ${lesson.requirements}
                    </div>
                `;
                const videoWrapper = document.querySelector('.video-wrapper');
                if (videoWrapper && lessonLeft) {
                    videoWrapper.after(reqDiv);
                } else if (lessonLeft) {
                    lessonLeft.appendChild(reqDiv);
                }
            }

            // Steps
            const stepList = document.getElementById('step-list');
            if (stepList) {
                const renderStepItem = (step) => `
                    <div class="step-item">
                        <div class="step-header">
                            <div class="step-title-wrapper">
                                ${step.icon ? `<i class="fas ${step.icon} step-icon-visual"></i>` : '<i class="fas fa-circle step-icon-visual" style="font-size: 0.5rem;"></i>'}
                                <span>${step.title}</span>
                            </div>
                            <i class="fas fa-chevron-down step-toggle-icon"></i>
                        </div>
                        <div class="step-content">
                            <div class="step-text">${formatContent(step.content)}</div>
                            ${step.slideImage ? `
                                <div class="step-slide-container">
                                    <span class="slide-label"><i class="fas fa-image"></i> Minh họa (Nhấn để phóng to):</span>
                                    <img src="${step.slideImage}" alt="${step.title}" class="step-slide-img" loading="lazy">
                                </div>
                            ` : ''}
                            ${step.videoUrl ? `
                                <div class="step-video-container" style="margin-top: 1rem;">
                                    <span class="slide-label"><i class="fas fa-video"></i> Video hướng dẫn:</span>
                                    <div class="video-wrapper" style="margin: 0.5rem 0;">
                                        <iframe src="${step.videoUrl}" allow="autoplay" allowfullscreen></iframe>
                                    </div>
                                </div>
                            ` : ''}
                        </div>
                    </div>
                `;

                if (lesson.sections && lesson.sections.length > 0) {
                    // Render with Sections
                    stepList.innerHTML = lesson.sections.map(section => `
                        <div class="lesson-section" style="margin-bottom: 2rem;">
                            <h3 style="color: var(--accent-color); margin: 1.5rem 0 1rem; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 0.5rem; display: flex; align-items: center;">
                                <i class="fas fa-folder-open" style="margin-right: 10px;"></i> 
                                ${section.title}
                            </h3>
                            <div class="section-steps">
                                ${section.steps.map(step => renderStepItem(step)).join('')}
                            </div>
                        </div>
                    `).join('');
                } else if (!lesson.steps || lesson.steps.length === 0) {
                    stepList.innerHTML = `
                    <div class="step-item active">
                        <div class="step-header">
                            <div class="step-title-wrapper">
                                <i class="fas fa-info-circle step-icon-visual"></i>
                                <span>Thông báo</span>
                            </div>
                        </div>
                        <div class="step-content" style="max-height: 100px;">
                            <div class="step-text">Chưa có hướng dẫn chi tiết cho bài học này.</div>
                        </div>
                    </div>`;
                } else {
                    // Render flat list (backward compatibility)
                    stepList.innerHTML = lesson.steps.map(step => renderStepItem(step)).join('');
                }

                // Accordion functionality
                const stepHeaders = document.querySelectorAll('.step-header');
                stepHeaders.forEach(header => {
                    header.addEventListener('click', () => {
                        const item = header.parentElement;
                        if (item) {
                            item.classList.toggle('active');
                        }
                    });
                });
            }
        } catch (error) {
            console.error("Error rendering lesson:", error);
            alert("Lỗi hiển thị bài học: " + error.message);
        }
    }

    function formatContent(text) {
        if (!text) return '';

        // 1. Handle Bold (**text**)
        let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // 2. Handle Lists with indentation
        const lines = html.split('\n');

        const formattedLines = lines.map(line => {
            // Check for 2-level indent (+ or - with spaces)
            if (line.trim().startsWith('+ ')) {
                return `<div style="padding-left: 2rem; position: relative;"><span style="position: absolute; left: 1rem;">◦</span>${line.trim().substring(2)}</div>`;
            }
            // Check for 1-level indent (- )
            if (line.trim().startsWith('- ')) {
                return `<div style="padding-left: 1rem; position: relative;"><span style="position: absolute; left: 0;">•</span>${line.trim().substring(2)}</div>`;
            }
            // Regular line
            return `<div>${line}</div>`;
        });

        return formattedLines.join('');
    }

    function initLightbox() {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const captionText = document.getElementById('lightbox-caption');
        const closeBtn = document.querySelector('.lightbox-close');

        if (!lightbox || !lightboxImg || !captionText || !closeBtn) return;

        // Add click event to all slide images
        document.querySelectorAll('.step-slide-img').forEach(img => {
            img.addEventListener('click', function () {
                lightbox.style.display = "flex";
                lightboxImg.src = this.src;
                captionText.innerHTML = this.alt;
            });
        });

        // Close when clicking X
        closeBtn.onclick = function () {
            lightbox.style.display = "none";
        }

        // Close when clicking outside image
        lightbox.onclick = function (e) {
            if (e.target === lightbox) {
                lightbox.style.display = "none";
            }
        }

        // Close on Escape key
        document.addEventListener('keydown', function (event) {
            if (event.key === "Escape") {
                lightbox.style.display = "none";
            }
        });
    }
});
