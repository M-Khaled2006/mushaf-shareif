const CONFIG = {
    imageFolder: 'Pages',
    imageExt: '.jpg',
    totalPages: 604
};

const JUZ_DATA = [
    { juz: 1, page: 1, name: "الجزء الأول" },
    { juz: 2, page: 22, name: "الجزء الثاني" },
    { juz: 3, page: 42, name: "الجزء الثالث" },
    { juz: 4, page: 62, name: "الجزء الرابع" },
    { juz: 5, page: 82, name: "الجزء الخامس" },
    { juz: 6, page: 102, name: "الجزء السادس" },
    { juz: 7, page: 122, name: "الجزء السابع" },
    { juz: 8, page: 142, name: "الجزء الثامن" },
    { juz: 9, page: 162, name: "الجزء التاسع" },
    { juz: 10, page: 182, name: "الجزء العاشر" },
    { juz: 11, page: 202, name: "الجزء الحادي عشر" },
    { juz: 12, page: 222, name: "الجزء الثاني عشر" },
    { juz: 13, page: 242, name: "الجزء الثالث عشر" },
    { juz: 14, page: 262, name: "الجزء الرابع عشر" },
    { juz: 15, page: 282, name: "الجزء الخامس عشر" },
    { juz: 16, page: 302, name: "الجزء السادس عشر" },
    { juz: 17, page: 322, name: "الجزء السابع عشر" },
    { juz: 18, page: 342, name: "الجزء الثامن عشر" },
    { juz: 19, page: 362, name: "الجزء التاسع عشر" },
    { juz: 20, page: 382, name: "الجزء العشرون" },
    { juz: 21, page: 402, name: "الجزء الحادي والعشرون" },
    { juz: 22, page: 422, name: "الجزء الثاني والعشرون" },
    { juz: 23, page: 442, name: "الجزء الثالث والعشرون" },
    { juz: 24, page: 462, name: "الجزء الرابع والعشرون" },
    { juz: 25, page: 482, name: "الجزء الخامس والعشرون" },
    { juz: 26, page: 502, name: "الجزء السادس والعشرون" },
    { juz: 27, page: 522, name: "الجزء السابع والعشرون" },
    { juz: 28, page: 542, name: "الجزء الثامن والعشرون" },
    { juz: 29, page: 562, name: "الجزء التاسع والعشرون" },
    { juz: 30, page: 582, name: "الجزء الثلاثون" }
];

const SURAHS_DATA = [
    { number: 1, name: "الفاتحة", page: 1 },
    { number: 2, name: "البقرة", page: 2 },
    { number: 3, name: "آل عمران", page: 50 },
    { number: 4, name: "النساء", page: 77 },
    { number: 5, name: "المائدة", page: 106 },
    { number: 6, name: "الأنعام", page: 128 },
    { number: 7, name: "الأعراف", page: 151 },
    { number: 8, name: "الأنفال", page: 177 },
    { number: 9, name: "التوبة", page: 187 },
    { number: 10, name: "يونس", page: 208 },
    { number: 11, name: "هود", page: 221 },
    { number: 12, name: "يوسف", page: 235 },
    { number: 13, name: "الرعد", page: 249 },
    { number: 14, name: "إبراهيم", page: 255 },
    { number: 15, name: "الحجر", page: 262 },
    { number: 16, name: "النحل", page: 267 },
    { number: 17, name: "الإسراء", page: 282 },
    { number: 18, name: "الكهف", page: 293 },
    { number: 19, name: "مريم", page: 305 },
    { number: 20, name: "طه", page: 312 },
    { number: 21, name: "الأنبياء", page: 322 },
    { number: 22, name: "الحج", page: 332 },
    { number: 23, name: "المؤمنون", page: 342 },
    { number: 24, name: "النور", page: 350 },
    { number: 25, name: "الفرقان", page: 359 },
    { number: 26, name: "الشعراء", page: 367 },
    { number: 27, name: "النمل", page: 377 },
    { number: 28, name: "القصص", page: 385 },
    { number: 29, name: "العنكبوت", page: 396 },
    { number: 30, name: "الروم", page: 404 },
    { number: 31, name: "لقمان", page: 411 },
    { number: 32, name: "السجدة", page: 415 },
    { number: 33, name: "الأحزاب", page: 418 },
    { number: 34, name: "سبأ", page: 428 },
    { number: 35, name: "فاطر", page: 434 },
    { number: 36, name: "يس", page: 440 },
    { number: 37, name: "الصافات", page: 446 },
    { number: 38, name: "ص", page: 453 },
    { number: 39, name: "الزمر", page: 458 },
    { number: 40, name: "غافر", page: 467 },
    { number: 41, name: "فصلت", page: 477 },
    { number: 42, name: "الشورى", page: 483 },
    { number: 43, name: "الزخرف", page: 489 },
    { number: 44, name: "الدخان", page: 496 },
    { number: 45, name: "الجاثية", page: 499 },
    { number: 46, name: "الأحقاف", page: 502 },
    { number: 47, name: "محمد", page: 507 },
    { number: 48, name: "الفتح", page: 511 },
    { number: 49, name: "الحجرات", page: 515 },
    { number: 50, name: "ق", page: 518 },
    { number: 51, name: "الذاريات", page: 520 },
    { number: 52, name: "الطور", page: 523 },
    { number: 53, name: "النجم", page: 526 },
    { number: 54, name: "القمر", page: 528 },
    { number: 55, name: "الرحمن", page: 531 },
    { number: 56, name: "الواقعة", page: 534 },
    { number: 57, name: "الحديد", page: 537 },
    { number: 58, name: "المجادلة", page: 542 },
    { number: 59, name: "الحشر", page: 545 },
    { number: 60, name: "الممتحنة", page: 549 },
    { number: 61, name: "الصف", page: 551 },
    { number: 62, name: "الجمعة", page: 553 },
    { number: 63, name: "المنافقون", page: 554 },
    { number: 64, name: "التغابن", page: 556 },
    { number: 65, name: "الطلاق", page: 558 },
    { number: 66, name: "التحريم", page: 560 },
    { number: 67, name: "الملك", page: 562 },
    { number: 68, name: "القلم", page: 564 },
    { number: 69, name: "الحاقة", page: 566 },
    { number: 70, name: "المعارج", page: 568 },
    { number: 71, name: "نوح", page: 570 },
    { number: 72, name: "الجن", page: 572 },
    { number: 73, name: "المزمل", page: 574 },
    { number: 74, name: "المدثر", page: 575 },
    { number: 75, name: "القيامة", page: 577 },
    { number: 76, name: "الإنسان", page: 578 },
    { number: 77, name: "المرسلات", page: 580 },
    { number: 78, name: "النبأ", page: 582 },
    { number: 79, name: "النازعات", page: 583 },
    { number: 80, name: "عبس", page: 585 },
    { number: 81, name: "التكوير", page: 586 },
    { number: 82, name: "الانفطار", page: 587 },
    { number: 83, name: "المطففين", page: 588 },
    { number: 84, name: "الانشقاق", page: 589 },
    { number: 85, name: "البروج", page: 590 },
    { number: 86, name: "الطارق", page: 591 },
    { number: 87, name: "الأعلى", page: 591 },
    { number: 88, name: "الغاشية", page: 592 },
    { number: 89, name: "الفجر", page: 593 },
    { number: 90, name: "البلد", page: 594 },
    { number: 91, name: "الشمس", page: 595 },
    { number: 92, name: "الليل", page: 595 },
    { number: 93, name: "الضحى", page: 596 },
    { number: 94, name: "الشرح", page: 596 },
    { number: 95, name: "التين", page: 597 },
    { number: 96, name: "العلق", page: 597 },
    { number: 97, name: "القدر", page: 598 },
    { number: 98, name: "البينة", page: 598 },
    { number: 99, name: "الزلزلة", page: 599 },
    { number: 100, name: "العاديات", page: 599 },
    { number: 101, name: "القارعة", page: 600 },
    { number: 102, name: "التكاثر", page: 600 },
    { number: 103, name: "العصر", page: 601 },
    { number: 104, name: "الهمزة", page: 601 },
    { number: 105, name: "الفيل", page: 601 },
    { number: 106, name: "قريش", page: 602 },
    { number: 107, name: "الماعون", page: 602 },
    { number: 108, name: "الكوثر", page: 602 },
    { number: 109, name: "الكافرون", page: 603 },
    { number: 110, name: "النصر", page: 603 },
    { number: 111, name: "المسد", page: 603 },
    { number: 112, name: "الإخلاص", page: 604 },
    { number: 113, name: "الفلق", page: 604 },
    { number: 114, name: "الناس", page: 604 }
];

let currentState = {
    currentPage: parseInt(localStorage.getItem('quran_page')) || 1,
    readingMode: localStorage.getItem('quran_mode') || 'horizontal'
};

const readerContainer = document.getElementById('reader-container');
const floatingControls = document.getElementById('floating-controls');
const pageIndicator = document.getElementById('page-indicator');
const btnMode = document.getElementById('btn-mode');
const modeText = document.getElementById('mode-text');
const btnIndex = document.getElementById('btn-index');
const jumpInput = document.getElementById('jump-input');
const btnJump = document.getElementById('btn-jump');
const juzToast = document.getElementById('juz-toast');
const indexModal = document.getElementById('index-modal');
const closeModal = document.getElementById('close-modal');
const modalSearchInput = document.getElementById('modal-search-input');
const surahsListEl = document.getElementById('surahs-list');
const juzListEl = document.getElementById('juz-list');

document.addEventListener('DOMContentLoaded', () => {
    initReader();
    setupEventListeners();
    populateIndex();
});

function initReader() {
    readerContainer.className = currentState.readingMode + '-mode';
    modeText.textContent = currentState.readingMode === 'horizontal' ? 'أفقي' : 'رأسى';
    readerContainer.innerHTML = '';

    for (let i = 1; i <= CONFIG.totalPages; i++) {
        const slide = document.createElement('div');
        slide.className = 'page-slide';
        slide.dataset.page = i;

        const img = document.createElement('img');
        img.src = `${CONFIG.imageFolder}/q (${i})${CONFIG.imageExt}`;
        img.alt = `صفحة ${i}`;
        
        slide.appendChild(img);
        readerContainer.appendChild(slide);
    }

    setupScrollListener();
    scrollToPage(currentState.currentPage, false);
}

function setupScrollListener() {
    readerContainer.addEventListener('scroll', () => {
        const slides = document.querySelectorAll('.page-slide');
        slides.forEach(slide => {
            const rect = slide.getBoundingClientRect();
            if (currentState.readingMode === 'horizontal') {
                if (rect.left >= 0 && rect.left < window.innerWidth / 2) {
                    const pageNum = parseInt(slide.dataset.page);
                    updateCurrentPage(pageNum);
                }
            } else {
                if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                    const pageNum = parseInt(slide.dataset.page);
                    updateCurrentPage(pageNum);
                }
            }
        });
    });
}

// دالة بحث أدق لتحديد الجزء الصحيح لأي رقم صفحة من 1 إلى 604
function getJuzByPage(pageNum) {
    for (let i = JUZ_DATA.length - 1; i >= 0; i--) {
        if (pageNum >= JUZ_DATA[i].page) {
            return JUZ_DATA[i];
        }
    }
    return JUZ_DATA[0];
}

let lastJuzNum = null;
function updateCurrentPage(pageNum, showNotification = false) {
    if (currentState.currentPage !== pageNum || showNotification) {
        currentState.currentPage = pageNum;
        localStorage.setItem('quran_page', pageNum);
        pageIndicator.textContent = `الصفحة: ${pageNum} / ${CONFIG.totalPages}`;
        
        const currentJuz = getJuzByPage(pageNum);
        const isJuzBoundary = JUZ_DATA.some(j => j.page === pageNum);

        if (showNotification || (isJuzBoundary && lastJuzNum !== null && lastJuzNum !== currentJuz.juz)) {
            showJuzToast(currentJuz.name);
        }
        lastJuzNum = currentJuz.juz;
    
    
    }
}

let toastTimeout;
function showJuzToast(text) {
    juzToast.textContent = text;
    juzToast.classList.remove('hidden');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        juzToast.classList.add('hidden');
    }, 1500);
}

function scrollToPage(pageNum, smooth = true, forceNotice = false) {
    const targetSlide = readerContainer.querySelector(`[data-page="${pageNum}"]`);
    if (targetSlide) {
        if (currentState.readingMode === 'horizontal') {
            readerContainer.scrollTo({
                left: targetSlide.offsetLeft,
                behavior: smooth ? 'smooth' : 'auto'
            });
        } else {
            readerContainer.scrollTo({
                top: targetSlide.offsetTop,
                behavior: smooth ? 'smooth' : 'auto'
            });
        }
        updateCurrentPage(pageNum, forceNotice);
    }
}

function setupEventListeners() {
    readerContainer.addEventListener('click', () => {
        if (!indexModal.classList.contains('hidden')) return;
        floatingControls.classList.toggle('hidden');
    });

    btnMode.addEventListener('click', (e) => {
        e.stopPropagation();
        currentState.readingMode = currentState.readingMode === 'horizontal' ? 'vertical' : 'horizontal';
        localStorage.setItem('quran_mode', currentState.readingMode);
        initReader();
    });

    btnJump.addEventListener('click', (e) => {
        e.stopPropagation();
        jumpToPageFromInput();
    });

    jumpInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') jumpToPageFromInput();
    });

    btnIndex.addEventListener('click', (e) => {
        e.stopPropagation();
        floatingControls.classList.add('hidden');
        indexModal.classList.remove('hidden');
    });

    closeModal.addEventListener('click', () => {
        indexModal.classList.add('hidden');
    });

    indexModal.addEventListener('click', (e) => {
        if (e.target === indexModal) indexModal.classList.add('hidden');
    });

    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.target).classList.add('active');
        });
    });

    modalSearchInput.addEventListener('input', (e) => {
        const query = e.target.value.trim().toLowerCase();
        const items = surahsListEl.querySelectorAll('.index-item');
        items.forEach(item => {
            const name = item.dataset.name.toLowerCase();
            item.style.display = name.includes(query) ? 'flex' : 'none';
        });
    });
}

function jumpToPageFromInput() {
    const val = parseInt(jumpInput.value);
    if (val >= 1 && val <= CONFIG.totalPages) {
        scrollToPage(val, true, true);
        jumpInput.value = '';
        floatingControls.classList.add('hidden');
    } else {
        alert('يرجى إدخال رقم صفحة صحيح بين 1 و 604');
    }
}

function populateIndex() {
    surahsListEl.innerHTML = '';
    SURAHS_DATA.forEach(surah => {
        const item = document.createElement('div');
        item.className = 'index-item';
        item.dataset.name = surah.name;
        item.innerHTML = `<span>سورة ${surah.name}</span> <span class="page-num">صفحة ${surah.page}</span>`;
        item.addEventListener('click', () => {
            scrollToPage(surah.page, true, true);
            indexModal.classList.add('hidden');
        });
        surahsListEl.appendChild(item);
    });

    juzListEl.innerHTML = '';
    JUZ_DATA.forEach(juz => {
        const item = document.createElement('div');
        item.className = 'index-item';
        item.innerHTML = `<span>${juz.name}</span> <span class="page-num">صفحة ${juz.page}</span>`;
        item.addEventListener('click', () => {
            scrollToPage(juz.page, true, true);
            indexModal.classList.add('hidden');
        });
        juzListEl.appendChild(item);
    });

}
// دعم التكبير بالنقر المزدوج (Double Tap)
let lastTapTime = 0;
readerContainer.addEventListener('touchend', (e) => {
    const currentTime = new Date().getTime();
    const tapLength = currentTime - lastTapTime;

    if (tapLength < 300 && tapLength > 0) {
        const img = e.target.closest('.page-slide')?.querySelector('img');
        if (img) {
            if (img.style.transform === 'scale(1.8)') {
                img.style.transform = 'scale(1)';
                img.style.transformOrigin = 'center center';
            } else {
                const rect = img.getBoundingClientRect();
                const x = ((e.changedTouches[0].clientX - rect.left) / rect.width) * 100;
                const y = ((e.changedTouches[0].clientY - rect.top) / rect.height) * 100;
                img.style.transformOrigin = `${x}% ${y}%`;
                img.style.transform = 'scale(1.8)';
            }
        }
        e.preventDefault();
    }
    lastTapTime = currentTime;
});
// --- نظام الزوم النهائي لصفحات المصحف والتفسير (متوافق مع وضع Fit) ---
(function() {
    const reader = document.getElementById('reader-container');
    let activeImg = null;
    let scale = 1, lastScale = 1;
    let startX = 0, startY = 0, translateX = 0, translateY = 0;
    let initialDistance = 0;
    let lastTap = 0;

    function resetZoom(img) {
        if (!img) return;
        scale = 1;
        translateX = 0;
        translateY = 0;
        img.style.transition = 'transform 0.2s ease-out';
        img.style.transform = 'translate(0px, 0px) scale(1)';
        img.classList.remove('zoomed');
    }

    // منع خروج أطراف الصفحة عن حدود الشاشة أثناء السحب
    function clampTranslation(img) {
        const rect = img.getBoundingClientRect();
        const baseWidth = rect.width / scale;
        const baseHeight = rect.height / scale;

        const maxX = Math.max(0, (baseWidth * scale - window.innerWidth) / 2);
        const maxY = Math.max(0, (baseHeight * scale - window.innerHeight) / 2);

        translateX = Math.min(Math.max(translateX, -maxX), maxX);
        translateY = Math.min(Math.max(translateY, -maxY), maxY);
    }

    function applyTransform(img, smooth = false) {
        img.style.transition = smooth ? 'transform 0.2s ease-out' : 'none';
        if (scale > 1) {
            clampTranslation(img);
            img.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
            img.classList.add('zoomed');
        } else {
            resetZoom(img);
        }
    }

    // 1. التكبير والعودة لوضع Fit بالضغط مرتين (Double Tap)
    reader.addEventListener('touchend', (e) => {
        if (e.target.tagName !== 'IMG') return;
        const img = e.target;

        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        if (tapLength < 300 && tapLength > 0) {
            if (activeImg && activeImg !== img) resetZoom(activeImg);
            activeImg = img;

            if (scale > 1) {
                resetZoom(img); // عودة لوضع Fit
            } else {
                scale = 2.5; // تكبير مثالي لقراءة التفسير الجانبي والسفلي بوضوح
                translateX = 0;
                translateY = 0;
                applyTransform(img, true);
            }
            e.preventDefault();
        }
        lastTap = currentTime;
    });

    // 2. بداية اللمس (إصبع واحد للسحب أو إصبعين للتكبير)
    reader.addEventListener('touchstart', (e) => {
        if (e.target.tagName !== 'IMG') return;
        const img = e.target;

        if (activeImg && activeImg !== img) {
            resetZoom(activeImg);
        }
        activeImg = img;

        if (e.touches.length === 2) {
            initialDistance = Math.hypot(
                e.touches[0].pageX - e.touches[1].pageX,
                e.touches[0].pageY - e.touches[1].pageY
            );
            lastScale = scale;
        } else if (e.touches.length === 1 && scale > 1) {
            startX = e.touches[0].pageX - translateX;
            startY = e.touches[0].pageY - translateY;
        }
    }, { passive: false });

    // 3. أثناء تحريك الأصابع
    reader.addEventListener('touchmove', (e) => {
        if (!activeImg || e.target !== activeImg) return;

        if (e.touches.length === 2) {
            e.preventDefault();
            const currentDistance = Math.hypot(
                e.touches[0].pageX - e.touches[1].pageX,
                e.touches[0].pageY - e.touches[1].pageY
            );
            // الحد الأقصى للتكبير 4 أضعاف
            scale = Math.min(Math.max(1, lastScale * (currentDistance / initialDistance)), 4.0);
            applyTransform(activeImg, false);
        } else if (e.touches.length === 1 && scale > 1) {
            e.preventDefault();
            translateX = e.touches[0].pageX - startX;
            translateY = e.touches[0].pageY - startY;
            applyTransform(activeImg, false);
        }
    }, { passive: false });

    // 4. إعادة ضبط الزوم تلقائياً عند تقليب الصفحة
    reader.addEventListener('scroll', () => {
        if (activeImg && scale > 1) {
            const rect = activeImg.getBoundingClientRect();
            if (rect.right < 10 || rect.left > window.innerWidth - 10 || rect.bottom < 10 || rect.top > window.innerHeight - 10) {
                resetZoom(activeImg);
            }
        }
    }, { passive: true });
})();
// ==========================================
// 1. نظام الزوم الذكي لصفحات المصحف والتفسير
// ==========================================
(function() {
    const reader = document.getElementById('reader-container');
    let activeImg = null;
    let scale = 1, lastScale = 1;
    let startX = 0, startY = 0, translateX = 0, translateY = 0;
    let initialDistance = 0;
    let lastTap = 0;

    function resetZoom(img) {
        if (!img) return;
        scale = 1; translateX = 0; translateY = 0;
        img.style.transition = 'transform 0.2s ease-out';
        img.style.transform = 'translate(0px, 0px) scale(1)';
        img.classList.remove('zoomed');
    }

    function clampTranslation(img) {
        const rect = img.getBoundingClientRect();
        const baseWidth = rect.width / scale;
        const baseHeight = rect.height / scale;
        const maxX = Math.max(0, (baseWidth * scale - window.innerWidth) / 2);
        const maxY = Math.max(0, (baseHeight * scale - window.innerHeight) / 2);
        translateX = Math.min(Math.max(translateX, -maxX), maxX);
        translateY = Math.min(Math.max(translateY, -maxY), maxY);
    }

    function applyTransform(img, smooth = false) {
        img.style.transition = smooth ? 'transform 0.2s ease-out' : 'none';
        if (scale > 1) {
            clampTranslation(img);
            img.style.transform = `translate(${translateX}px, ${translateY}px) scale(${scale})`;
            img.classList.add('zoomed');
        } else {
            resetZoom(img);
        }
    }

    reader.addEventListener('touchend', (e) => {
        if (e.target.tagName !== 'IMG') return;
        const img = e.target;
        const currentTime = new Date().getTime();
        const tapLength = currentTime - lastTap;
        if (tapLength < 300 && tapLength > 0) {
            if (activeImg && activeImg !== img) resetZoom(activeImg);
            activeImg = img;
            if (scale > 1) {
                resetZoom(img);
            } else {
                scale = 2.5; translateX = 0; translateY = 0;
                applyTransform(img, true);
            }
            e.preventDefault();
        }
        lastTap = currentTime;
    });

    reader.addEventListener('touchstart', (e) => {
        if (e.target.tagName !== 'IMG') return;
        const img = e.target;
        if (activeImg && activeImg !== img) resetZoom(activeImg);
        activeImg = img;
        if (e.touches.length === 2) {
            initialDistance = Math.hypot(
                e.touches.pageX - e.touches.pageX,
                e.touches.pageY - e.touches.pageY
            );
            lastScale = scale;
        } else if (e.touches.length === 1 && scale > 1) {
            startX = e.touches.pageX - translateX;
            startY = e.touches.pageY - translateY;
        }
    }, { passive: false });

    reader.addEventListener('touchmove', (e) => {
        if (!activeImg || e.target !== activeImg) return;
        if (e.touches.length === 2) {
            e.preventDefault();
            const currentDistance = Math.hypot(
                e.touches.pageX - e.touches.pageX,
                e.touches.pageY - e.touches.pageY
            );
            scale = Math.min(Math.max(1, lastScale * (currentDistance / initialDistance)), 4.0);
            applyTransform(activeImg, false);
        } else if (e.touches.length === 1 && scale > 1) {
            e.preventDefault();
            translateX = e.touches.pageX - startX;
            translateY = e.touches.pageY - startY;
            applyTransform(activeImg, false);
        }
    }, { passive: false });

    reader.addEventListener('scroll', () => {
        if (activeImg && scale > 1) {
            const rect = activeImg.getBoundingClientRect();
            if (rect.right < 10 || rect.left > window.innerWidth - 10 || rect.bottom < 10 || rect.top > window.innerHeight - 10) {
                resetZoom(activeImg);
            }
        }
    }, { passive: true });
})();

// ==========================================
// 2. نظام البحث الفوري في الآيات
// ==========================================
let allAyahs = [];

fetch('./quran-data.json')
    .then(res => res.json())
    .then(surahs => {
        surahs.forEach(surah => {
            surah.verses.forEach(ayah => {
                allAyahs.push({
                    text: ayah.text.ar,
                    surahName: surah.name.ar,
                    numberInSurah: ayah.number,
                    page: ayah.page
                });
            });
        });
    })
    .catch(err => console.log('خطأ في تحميل ملف البحث:', err));

function cleanText(str) {
    return str
        .replace(/[\u064B-\u065F\u0670\u06D6-\u06ED]/g, '')
        .replace(/[أإآٱ]/g, 'ا')
        .replace(/ى/g, 'ي')
        .replace(/ة/g, 'ه');
}

const ayahInput = document.getElementById('ayah-search-input');
const ayahResults = document.getElementById('ayah-search-results');

// إخفاء مربع بحث السور القديم تلقائياً عند فتح تبويب بحث الآيات
document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const surahSearchBox = document.querySelector('.modal-search');
        if (surahSearchBox) {
            surahSearchBox.style.display = (btn.dataset.target === 'ayah-search') ? 'none' : 'block';
        }
    });
});

if (ayahInput) {
    ayahInput.addEventListener('input', function() {
        const keyword = cleanText(this.value.trim());
        ayahResults.innerHTML = '';
        if (keyword.length < 3) return;

        const found = allAyahs.filter(item => cleanText(item.text).includes(keyword)).slice(0, 40);

        if (found.length === 0) {
            ayahResults.innerHTML = '<p style="text-align:center; padding:15px; color:#aaa;">لا توجد نتائج</p>';
            return;
        }

        found.forEach(item => {
            const card = document.createElement('div');
            card.style.cssText = 'padding: 12px; border-bottom: 1px solid #333; cursor: pointer;';
            card.innerHTML = `
                <div style="font-size: 16px; margin-bottom: 5px; line-height: 1.6;">${item.text}</div>
                <div style="font-size: 12px; color: #4caf50;">سورة ${item.surahName} - آية (${item.numberInSurah}) | صفحة ${item.page}</div>
            `;

            card.addEventListener('click', () => {
                document.getElementById('jump-input').value = item.page;
                document.getElementById('btn-jump').click();
                document.getElementById('index-modal').classList.add('hidden');
            });

            ayahResults.appendChild(card);
        });
    });
}

