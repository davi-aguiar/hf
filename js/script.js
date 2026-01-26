// Menu Mobile Toggle
const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    
    // Anima o ícone do menu
    const spans = menuToggle.querySelectorAll('span');
    if (navMenu.classList.contains('active')) {
        spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
        spans[1].style.opacity = '0';
        spans[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
    } else {
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    }
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        const spans = menuToggle.querySelectorAll('span');
        spans[0].style.transform = 'none';
        spans[1].style.opacity = '1';
        spans[2].style.transform = 'none';
    });
});

// Smooth scroll para links de navegação
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerOffset = 80;
            const elementPosition = target.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Header com efeito de scroll
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.3)';
    } else {
        header.style.boxShadow = '0 4px 6px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});

// Formulário de contato
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Coleta os dados do formulário
    const formData = {
        nome: document.getElementById('nome').value,
        telefone: document.getElementById('telefone').value,
        email: document.getElementById('email').value,
        mensagem: document.getElementById('mensagem').value
    };
    
    // Aqui você pode adicionar lógica para enviar os dados
    // Por exemplo, usando fetch para enviar para um servidor
    console.log('Dados do formulário:', formData);
    
    // Feedback visual
    const btn = contactForm.querySelector('button');
    const originalText = btn.textContent;
    btn.textContent = 'Enviando...';
    btn.disabled = true;
    
    // Simula envio (substitua por lógica real)
    setTimeout(() => {
        alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
        contactForm.reset();
        btn.textContent = originalText;
        btn.disabled = false;
    }, 1500);
});

// Animação de entrada para elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Aplica animação aos cards
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.feature-card, .modalidade-card, .plano-card, .horario-dia, .professor-card');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Máscara para telefone
const telefoneInput = document.getElementById('telefone');

if (telefoneInput) {
    telefoneInput.addEventListener('input', (e) => {
        let value = e.target.value.replace(/\D/g, '');
        
        if (value.length <= 10) {
            value = value.replace(/(\d{2})(\d{4})(\d{4})/, '($1) $2-$3');
        } else {
            value = value.replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3');
        }
        
        e.target.value = value;
    });
}

// Carrossel de Professores
document.addEventListener('DOMContentLoaded', () => {
    const carousel = document.getElementById('professoresCarousel');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    const indicatorsContainer = document.getElementById('carouselIndicators');
    
    if (!carousel || !prevBtn || !nextBtn) return;
    
    const cards = carousel.querySelectorAll('.professor-card');
    let currentIndex = 0;
    
    // Criar indicadores
    cards.forEach((_, index) => {
        const indicator = document.createElement('button');
        indicator.classList.add('carousel-indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.setAttribute('aria-label', `Ir para slide ${index + 1}`);
        indicator.addEventListener('click', () => goToSlide(index));
        indicatorsContainer.appendChild(indicator);
    });
    
    const indicators = indicatorsContainer.querySelectorAll('.carousel-indicator');
    
    function updateCarousel() {
        if (cards.length === 0) return;
        
        const firstCard = cards[0];
        const cardWidth = firstCard.offsetWidth;
        const gap = parseFloat(getComputedStyle(carousel).gap) || 32;
        const scrollPosition = currentIndex * (cardWidth + gap);
        
        carousel.scrollTo({
            left: scrollPosition,
            behavior: 'smooth'
        });
        
        // Atualizar indicadores
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
    }
    
    function nextSlide() {
        currentIndex = (currentIndex + 1) % cards.length;
        updateCarousel();
    }
    
    function prevSlide() {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        updateCarousel();
    }
    
    // Event listeners
    nextBtn.addEventListener('click', nextSlide);
    prevBtn.addEventListener('click', prevSlide);
    
    // Auto-play (opcional - descomente se quiser)
    // let autoPlayInterval = setInterval(nextSlide, 5000);
    
    // Pausar auto-play ao passar o mouse
    // carousel.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    // carousel.addEventListener('mouseleave', () => {
    //     autoPlayInterval = setInterval(nextSlide, 5000);
    // });
    
    // Suporte para touch/swipe em mobile
    let startX = 0;
    let scrollLeft = 0;
    let isDown = false;
    
    carousel.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - carousel.offsetLeft;
        scrollLeft = carousel.scrollLeft;
    });
    
    carousel.addEventListener('mouseleave', () => {
        isDown = false;
    });
    
    carousel.addEventListener('mouseup', () => {
        isDown = false;
    });
    
    carousel.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - carousel.offsetLeft;
        const walk = (x - startX) * 2;
        carousel.scrollLeft = scrollLeft - walk;
    });
    
    // Touch events para mobile
    let touchStartX = 0;
    let touchScrollLeft = 0;
    
    carousel.addEventListener('touchstart', (e) => {
        touchStartX = e.touches[0].pageX - carousel.offsetLeft;
        touchScrollLeft = carousel.scrollLeft;
    });
    
    carousel.addEventListener('touchmove', (e) => {
        const x = e.touches[0].pageX - carousel.offsetLeft;
        const walk = (x - touchStartX) * 2;
        carousel.scrollLeft = touchScrollLeft - walk;
    });
    
    // Atualizar índice ao fazer scroll manual
    carousel.addEventListener('scroll', () => {
        if (cards.length === 0) return;
        
        const firstCard = cards[0];
        const cardWidth = firstCard.offsetWidth;
        const gap = parseFloat(getComputedStyle(carousel).gap) || 32;
        const newIndex = Math.round(carousel.scrollLeft / (cardWidth + gap));
        if (newIndex !== currentIndex && newIndex >= 0 && newIndex < cards.length) {
            currentIndex = newIndex;
            indicators.forEach((indicator, index) => {
                if (index === currentIndex) {
                    indicator.classList.add('active');
                } else {
                    indicator.classList.remove('active');
                }
            });
        }
    });
});
