// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuToggle) {
        mobileMenuToggle.addEventListener('click', function() {
            navMenu.style.display = navMenu.style.display === 'flex' ? 'none' : 'flex';
            if (navMenu.style.display === 'flex') {
                navMenu.style.flexDirection = 'column';
                navMenu.style.position = 'absolute';
                navMenu.style.top = '60px';
                navMenu.style.right = '20px';
                navMenu.style.background = 'white';
                navMenu.style.padding = '1rem';
                navMenu.style.borderRadius = '8px';
                navMenu.style.boxShadow = '0 4px 6px rgba(0,0,0,0.1)';
            }
        });
    }
    
    // Access button toggle
    const accessBtn = document.getElementById('accessBtn');
    const accessInstructions = document.getElementById('accessInstructions');
    
    if (accessBtn && accessInstructions) {
        accessBtn.addEventListener('click', function() {
            if (accessInstructions.style.display === 'none') {
                accessInstructions.style.display = 'block';
                accessBtn.textContent = '⬆️ Ocultar Instruções';
            } else {
                accessInstructions.style.display = 'none';
                accessBtn.textContent = '🔓 Como Acessar o Repositório';
            }
        });
    }
    
    // Smooth scroll para âncoras
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Animação de entrada nos cards
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Aplicar animação a todos os cards
    document.querySelectorAll('.highlight-card, .decision-card, .benefit-card, .bring-card').forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease';
        observer.observe(card);
    });
});