
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
                    <span><i class="fas fa-book-open"></i> ${session.totalLessons} bài học</span>
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

        // Render lessons in this session
        lessonGrid.innerHTML = session.lessons.map(lesson => `
            <a href="lesson.html?sessionId=${session.id}&id=${lesson.id}" class="lesson-card">
                <h2>${lesson.title}</h2>
                <p>${lesson.description}</p>
                <div class="card-footer">
                    <span><i class="fas fa-play-circle"></i> Xem hướng dẫn</span>
                    <span>${lesson.steps.length} bước</span>
                </div>
            </a>
        `).join('');
    }

    function renderLessonDetail(lesson, session) {
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
        if (!resourceList) return;

        const tasksHtml = lesson.tasks.map(t => `
            <a href="DeBaiThucHanh/${t.file}" class="resource-item" download>
                <i class="fas fa-file-word"></i> 
                <span>${t.name}</span>
            </a>
        `).join('');

        const docsHtml = lesson.docs.map(d => `
            <a href="TaiLieuHuongDan/${d.file}" class="resource-item" target="_blank">
                <i class="fas fa-file-pdf"></i>
                <span>${d.name}</span>
            </a>
        `).join('');

        resourceList.innerHTML = tasksHtml + docsHtml;

        // Requirements (Added below Featured Image/Video)
        const lessonLeft = document.querySelector('.lesson-left');
        const existingReq = document.getElementById('lesson-requirements');
        if (existingReq) existingReq.remove(); // Clear previous requirements if any

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
            // Append after video wrapper
            const videoWrapper = document.querySelector('.video-wrapper');
            if (videoWrapper && lessonLeft) {
                videoWrapper.after(reqDiv);
            } else if (lessonLeft) {
                lessonLeft.appendChild(reqDiv);
            }
        }

        // Steps
        const stepList = document.getElementById('step-list');
        if (!stepList) return;

        stepList.innerHTML = lesson.steps.map((step, index) => `
            <div class="step-item">
                <div class="step-header">
                    <div class="step-title-wrapper">
                        ${step.icon ? `<i class="fas ${step.icon} step-icon-visual"></i>` : ''}
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
        `).join('');

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

    function formatContent(text) {
        if (!text) return '';

        // 1. Handle Bold (**text**)
        let html = text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');

        // 2. Handle Lists with indentation
        // Split by newlines to handle each line's indentation
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
