import { Lesson, lessonsData } from '../data/lessons.ts';

document.addEventListener('DOMContentLoaded', (): void => {
    const lessonGrid = document.getElementById('lesson-grid')
    const lessonContainer = document.querySelector('.lesson-container')

    // Helper to get URL params
    const getParams = (): URLSearchParams => new URLSearchParams(window.location.search);

    // Initialize Index Page
    if (lessonGrid) {
        renderLessonGrid();
    }

    // Initialize Lesson Page
    if (lessonContainer) {
        const id = parseInt(getParams().get('id') || '0')
        if (id) {
            const lesson = lessonsData.find(l => l.id === id)
            if (lesson) {
                renderLessonDetail(lesson)
                initLightbox()
            } else {
                alert('Lesson not found!')
                window.location.href = 'index.html';
            }
        } else {
            window.location.href = 'index.html';
        }
    }

    function renderLessonGrid(): void {
        const lessonGrid = document.getElementById('lesson-grid')
        if (!lessonGrid) return

        lessonGrid.innerHTML = lessonsData.map(lesson => `
            <a href="lesson.html?id=${lesson.id}" class="lesson-card">
                <h2>${lesson.title}</h2>
                <p>${lesson.description}</p>
                <div class="card-footer">
                    <span><i class="fas fa-play-circle"></i> Xem hướng dẫn</span>
                    <span>${lesson.steps.length} bước</span>
                </div>
            </a>
        `).join('');
    }

    function renderLessonDetail(lesson: Lesson): void {
        // Metadata
        document.title = `${lesson.title} - Thực Hành Word`

        const lessonNumber = document.getElementById('lesson-number')
        const lessonTitle = document.getElementById('lesson-title')
        const lessonDesc = document.getElementById('lesson-desc')

        if (lessonNumber) lessonNumber.textContent = lesson.title.split(':')[0] // "Bài 1"
        if (lessonTitle) lessonTitle.textContent = lesson.title
        if (lessonDesc) lessonDesc.textContent = lesson.description;

        // Video
        const videoFrame = document.getElementById('lesson-video') as HTMLIFrameElement | null;
        if (videoFrame) {
            videoFrame.src = lesson.video;
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
                    <p>${step.content}</p>
                    ${step.slideImage ? `
                        <div class="step-slide-container">
                            <span class="slide-label"><i class="fas fa-image"></i> Minh họa (Nhấn để phóng to):</span>
                            <img src="${step.slideImage}" alt="${step.title}" class="step-slide-img" loading="lazy">
                        </div>
                    ` : ''}
                </div>
            </div>
        `).join('');

        // Accordion functionality
        const stepHeaders = document.querySelectorAll<HTMLElement>('.step-header');
        stepHeaders.forEach(header => {
            header.addEventListener('click', (): void => {
                const item = header.parentElement;
                if (item) {
                    item.classList.toggle('active');
                }
            });
        });
    }

    function initLightbox(): void {
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img') as HTMLImageElement | null;
        const captionText = document.getElementById('lightbox-caption');
        const closeBtn = document.querySelector('.lightbox-close') as HTMLElement | null;

        if (!lightbox || !lightboxImg || !captionText || !closeBtn) return;

        // Add click event to all slide images
        document.querySelectorAll<HTMLImageElement>('.step-slide-img').forEach(img => {
            img.addEventListener('click', function (): void {
                lightbox.style.display = "flex";
                lightboxImg.src = this.src;
                captionText.innerHTML = this.alt;
            });
        });

        // Close when clicking X
        closeBtn.onclick = function (): void {
            lightbox.style.display = "none";
        }

        // Close when clicking outside image
        lightbox.onclick = function (e: MouseEvent): void {
            if (e.target === lightbox) {
                lightbox.style.display = "none";
            }
        }

        // Close on Escape key
        document.addEventListener('keydown', function (event: KeyboardEvent): void {
            if (event.key === "Escape") {
                lightbox.style.display = "none";
            }
        });
    }
});
