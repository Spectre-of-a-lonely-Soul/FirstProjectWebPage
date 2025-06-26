document.addEventListener('DOMContentLoaded', function () {
    // ===== SCROLL SUAVE PARA ÂNCORAS =====
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            const offset = 100;

            window.scrollTo({
                top: target.offsetTop - offset,
                behavior: 'smooth'
            });
        });
    });

    // ===== ANIMAÇÃO NO SCROLL =====
    const elementsToAnimate = [
        ...document.querySelectorAll('.lar-container'),
        ...document.querySelectorAll('.section-title'),
        ...document.querySelectorAll('.section-subtitle'),
        ...document.querySelectorAll('.about-content'),
        ...document.querySelectorAll('.contact-icons a')
    ];

    function animateOnScroll() {
        elementsToAnimate.forEach((element, index) => {
            const rect = element.getBoundingClientRect();
            const isVisible = (rect.top <= window.innerHeight * 0.8);

            if (isVisible) {
                element.style.transitionDelay = `${index * 0.1}s`;
                element.classList.add('visible');
            }
        });
    }

    // ===== MENU MOBILE =====
    function setupMobileMenu() {
        const navLinks = document.querySelector('.nav-links');
        const menuBtn = document.querySelector('.menu-toggle');

        if (window.innerWidth < 992) {
            menuBtn.style.display = 'block'; // mostra o botão
            menuBtn.setAttribute('aria-expanded', 'false');

            menuBtn.onclick = () => {
                navLinks.classList.toggle('show');
                menuBtn.setAttribute('aria-expanded', navLinks.classList.contains('show'));
            };

            document.querySelectorAll('.nav-links a').forEach(link => {
                link.addEventListener('click', () => {
                    navLinks.classList.remove('show');
                    menuBtn.setAttribute('aria-expanded', 'false');
                });
            });
        } else {
            menuBtn.style.display = 'none'; // esconde o botão em telas maiores
            navLinks.classList.remove('show');
        }
    }



    // ===== INICIALIZAÇÃO =====
    animateOnScroll();
    setupMobileMenu();

    // Event Listeners
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('resize', setupMobileMenu);

    // ===== BOTÃO WHATSAPP ANIMADO =====
    const whatsappBtn = document.querySelector('.whatsapp-float');
    if (whatsappBtn) {
        setInterval(() => {
            whatsappBtn.style.transform = 'scale(1.05)';
            setTimeout(() => {
                whatsappBtn.style.transform = 'scale(1)';
            }, 500);
        }, 3000);
    }
});
