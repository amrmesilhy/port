// Menu toggle function
function myMenuFunction() {
    var menuBtn = document.getElementById("myNavMenu");
    if (menuBtn.className === "nav-menu") {
        menuBtn.className += " responsive";
    } else {
        menuBtn.className = "nav-menu";
    }
}

// Dark mode toggle function
document.getElementById("darkModeBtn").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        this.classList.remove("uil-moon");
        this.classList.add("uil-sun");
    } else {
        this.classList.remove("uil-sun");
        this.classList.add("uil-moon");
    }
});

// Add shadow to nav bar on scroll
window.onscroll = function() { headerShadow() };

function headerShadow() {
    const navHeader = document.getElementById("header");
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";
    } else {
        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";
    }
}

// Typing effect
var typingEffect = new Typed(".typedText", {
    strings: ["Designer", "Developer"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
});

// Scroll Reveal effects
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 2000,
    reset: true
});
sr.reveal('.featured-text-card', {});
sr.reveal('.featured-name', { delay: 100 });
sr.reveal('.featured-text-info', { delay: 200 });
sr.reveal('.featured-text-btn', { delay: 200 });
sr.reveal('.social_icons', { delay: 200 });
sr.reveal('.project-box', { interval: 200 });
sr.reveal('.top-header', {});

const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
});
srLeft.reveal('.about-info', { delay: 100 });
srLeft.reveal('.contact-card', { delay: 100 });

const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
});
srRight.reveal('.skills-box', { delay: 100 });
srRight.reveal('.contact-form', { delay: 100 });

// Active link on scroll
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.scrollY;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 50,
              sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
        }
    });
}
window.addEventListener('scroll', scrollActive);

// 3D Parallax effect for profile image
const image = document.querySelector('.image img');

function smoothParallax(e) {
    const rect = image.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;
    const rotateX = (mouseY / rect.height) * -5;
    const rotateY = (mouseX / rect.width) * 5;
    const translateZ = (Math.abs(mouseX) + Math.abs(mouseY)) / 200;

    image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(${translateZ}px)`;
}

if (image) {
    image.addEventListener('mousemove', smoothParallax);
    image.addEventListener('mouseleave', () => {
        image.style.transform = 'rotateX(0deg) rotateY(0deg) translateZ(0)';
    });
}

// Show projects modal on button click
document.querySelector('.view-projects-btn').addEventListener('click', function() {
    const modal = document.getElementById('projectModal');
    modal.style.display = 'flex';
});

// Show certificates modal on button click
document.querySelector('.view-certificates-btn').addEventListener('click', function() {
    const modal = document.getElementById('certificateModal');
    modal.style.display = 'flex';
});

// Close modals
document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const modal = this.closest('.modal');
        modal.style.display = 'none';
    });
});

// Close modals when clicking outside the content
window.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// Show large image modal when clicking on project or certificate images
document.querySelectorAll('.project-img, .certificate-img').forEach(img => {
    img.addEventListener('click', function() {
        const largeImageModal = document.getElementById('largeImageModal');
        const largeImage = document.getElementById('largeImage');
        largeImage.src = this.src; // Set the large image source
        largeImage.alt = this.alt; // Set the alt text
        largeImageModal.style.display = 'flex';
    });
});

// Close large image modal
document.querySelector('#largeImageModal .close-btn').addEventListener('click', function() {
    const modal = document.getElementById('largeImageModal');
    modal.style.display = 'none';
});

// Close large image modal when clicking outside the content
window.addEventListener('click', function(event) {
    const largeImageModal = document.getElementById('largeImageModal');
    if (event.target === largeImageModal) {
        largeImageModal.style.display = 'none';
    }
});