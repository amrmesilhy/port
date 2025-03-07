// تهيئة الجسيمات
particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        color: { value: '#FF9800' },
        shape: { type: 'circle' },
        opacity: { value: 0.5 },
        size: { value: 3 },
        move: {
            enable: true,
            speed: 2,
            direction: 'none',
            random: true,
            straight: false,
            out_mode: 'out',
            bounce: false,
        }
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'repulse' },
            onclick: { enable: true, mode: 'push' },
            resize: true
        }
    },
    retina_detect: true
});

// تأثير الكتابة
document.addEventListener('DOMContentLoaded', () => {
    const slogan = document.getElementById('typing-text');
    const text = "وجه أفكارك الإبداعية.. واكتب";
    let index = 0;
    let currentText = '';

    function type() {
        if (index < text.length) {
            currentText += text.charAt(index);
            slogan.innerHTML = currentText.replace("واكتب", '<span style="color: #FFFFFF">واكتب</span>');
            index++;
            setTimeout(type, 150);
        }
    }
    type();
});

// حركة اللوجو مع المؤشر (Parallax 3D Effect) عند التفاعل مع اللوجو فقط
const logo = document.querySelector('.logo');

logo.addEventListener('mousemove', (e) => {
    // إيقاف التارجح عند تحرك المؤشر فوق اللوجو
    logo.style.animation = 'none';

    const rect = logo.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    // حساب زاوية الدوران بناءً على موقع المؤشر
    const rotateX = (mouseY / rect.height) * 40; // زاوية تصل إلى 20 درجة
    const rotateY = -(mouseX / rect.width) * 40; // زاوية تصل إلى 20 درجة

    logo.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

logo.addEventListener('mouseleave', () => {
    // إعادة التارجح عند مغادرة المؤشر
    logo.style.animation = 'sway 8s ease-in-out infinite';
    logo.style.transform = 'rotateX(0deg) rotateY(0deg)';
});

// تأثيرات إضافية على خانة الإدخال
const thoughtInput = document.querySelector('.thought-input');
thoughtInput.addEventListener('focus', () => {
    thoughtInput.style.width = '420px';
    thoughtInput.style.transform = 'scale(1.05)';
    thoughtInput.style.boxShadow = '0 0 15px rgba(255, 152, 0, 0.8), 0 0 5px rgba(255, 255, 255, 0.5)';
    thoughtInput.style.borderColor = '#FFFFFF';
    thoughtInput.style.backgroundColor = 'rgba(255, 255, 255, 0.2)';
});

thoughtInput.addEventListener('blur', () => {
    thoughtInput.style.width = '400px';
    thoughtInput.style.transform = 'scale(1)';
    thoughtInput.style.boxShadow = '0 0 5px rgba(255, 152, 0, 0.3)';
    thoughtInput.style.borderColor = '#FF9800';
    thoughtInput.style.backgroundColor = 'rgba(255, 255, 205, 0.1)';
});

// عرض الاقتباسات
function showRandomQuote() {
    const resultBox = document.getElementById('result-box');
    const buttonGroup = document.querySelector('.button-group');
    const downloadBtn = document.querySelector('.download-btn');
    const refreshBtn = document.querySelector('.refresh-btn');
    const thoughtInput = document.querySelector('.thought-input');
    const inputValue = thoughtInput.value.trim();

    if (!inputValue) {
        resultBox.classList.add('error');
        resultBox.innerHTML = "يجب الكتابة";
        resultBox.style.display = 'block';
        buttonGroup.style.display = 'flex';
        refreshBtn.style.display = 'inline-block'; // إظهار زر التحديث
        downloadBtn.style.display = 'none'; // إخفاء زر التنزيل
    } else {
        resultBox.classList.remove('error');
        const randomIndex = Math.floor(Math.random() * quotes.length);
        resultBox.innerHTML = quotes[randomIndex];
        resultBox.style.display = 'block';
        buttonGroup.style.display = 'flex';
        refreshBtn.style.display = 'inline-block'; // إظهار زر التحديث
        downloadBtn.style.display = 'inline-block'; // إظهار زر التنزيل
    }
}

// إعادة تحميل الصفحة
function refreshPage() {
    location.reload();
}

// تنزيل لقطة الشاشة
function downloadImage() {
    const resultBox = document.getElementById('result-box');
    html2canvas(resultBox, {
        backgroundColor: '#4a2c0a',
        useCORS: true,
        scale: 3,
        allowTaint: true,
        logging: true,
        removeContainer: false,
    }).then(canvas => {
        const link = document.createElement('a');
        link.download = 'quote.png';
        link.href = canvas.toDataURL('image/png', 1.0);
        link.click();
    }).catch(err => {
        console.error("فشل تنزيل اللقطة: ", err);
    });
}