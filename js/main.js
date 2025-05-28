// Script principal para a landing page da Rei Navalha Barbearia

document.addEventListener('DOMContentLoaded', function() {
    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Mobile menu toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const isOpen = navMenu.classList.contains('active');
            mobileMenuBtn.innerHTML = isOpen ? '<i class="fas fa-times"></i>' : '<i class="fas fa-bars"></i>';
        });
    }

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            if (navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
            }
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Inicialização do Calendly
    function initCalendly() {
        const barbeiros = document.querySelectorAll('.agendar-btn');
        
        barbeiros.forEach(btn => {
            btn.addEventListener('click', function() {
                const barbeiroNome = this.getAttribute('data-barbeiro');
                const calendlyContainer = document.getElementById('calendly-container');
                
                // Limpar conteúdo anterior
                calendlyContainer.innerHTML = '';
                
                // Mostrar widget do Calendly
                Calendly.initInlineWidget({
                    url: 'https://calendly.com/' + barbeiroNome,
                    parentElement: calendlyContainer,
                    prefill: {},
                    utm: {}
                });
                
                // Rolar até o widget
                window.scrollTo({
                    top: calendlyContainer.offsetTop - 100,
                    behavior: 'smooth'
                });
            });
        });
    }

    // Inicializar Calendly quando a página estiver totalmente carregada
    window.addEventListener('load', initCalendly);
});
