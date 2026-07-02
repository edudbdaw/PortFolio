// ===== Scroll Reveal Animation =====
function initScrollReveal() {
    const reveals = document.querySelectorAll('.reveal');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    reveals.forEach(el => observer.observe(el));
}

// ===== Navbar Scroll Behavior =====
function initNavbar() {
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        
        if (currentScroll > 80) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        lastScroll = currentScroll;
    }, { passive: true });
}

// ===== Hero Particles =====
function initParticles() {
    const container = document.querySelector('.hero-particles');
    if (!container) return;

    const count = window.innerWidth < 768 ? 15 : 30;

    for (let i = 0; i < count; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        particle.style.left = Math.random() * 100 + '%';
        particle.style.width = (Math.random() * 3 + 1) + 'px';
        particle.style.height = particle.style.width;
        particle.style.animationDuration = (Math.random() * 8 + 6) + 's';
        particle.style.animationDelay = (Math.random() * 10) + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        container.appendChild(particle);
    }
}

// ===== Language Switcher =====
const translations = {
    en: {
        navAbout: 'About',
        navStack: 'Stack',
        navProjects: 'Projects',
        navContact: 'Contact',
        downloadCV: 'Download CV',
        aboutTitle: 'ABOUT ME',
        aboutText: "I'm Eduardo Duran, and curiosity is my driving force. More than a Full-Stack developer, I'm passionate about problem-solving and I firmly believe that anything you can imagine, you can create. I'm not afraid of challenges; on the contrary, I love stepping out of my comfort zone. I've learned that's where real growth happens, whether it's moving from my island, La Palma, to explore new frontiers in cities like Geneva, Mallorca, Vigo, or facing a completely unknown technology.",
        stackTitle: 'MY STACK',
        backendTitle: 'Backend & Languages',
        frontendTitle: 'Frontend & Styling',
        toolsTitle: 'Tools & DevOps',
        projectsTitle: 'PROJECTS',
        futDesc: 'Free astronomy platform from Aarhus University allowing students to remotely control a professional 60cm reflecting telescope at Mt. Kent Observatory, Australia. Built as a Full Stack Developer to finish my web development studies.',
        futLocation: 'Aarhus University, Denmark',
        mercadilloDesc: 'Adaptive platform for digitalization of local markets in La Palma. Multi-role system (clients, vendors, admins) with online ordering, inventory management, and logistics. The Gobierno de La Palma has plans to adopt it for real use.',
        mercadilloLocation: 'IES José María Pérez Pulido — Final Project 2º DAW',
        simpsonsDesc: 'Simpsons character matching game',
        libreriaDesc: 'Video game catalog with PHP and MySQL',
        notasDesc: 'Quick note-taking web app',
        contactTitle: 'GET IN TOUCH',
        contactText: "I'm always open to new opportunities and collaborations. Let's connect!",
        visitProject: '🔭 Visit Project',
        liveDemo: '🌐 Live Demo',
    },
    es: {
        navAbout: 'Sobre mí',
        navStack: 'Stack',
        navProjects: 'Proyectos',
        navContact: 'Contacto',
        downloadCV: 'Descargar CV',
        aboutTitle: '¿QUIÉN SOY?',
        aboutText: 'Soy Eduardo Duran, y mi motor es la curiosidad. Más que un desarrollador Full-Stack, me considero un apasionado por resolver problemas y un firme creyente de que todo lo que se puede imaginar, se puede crear. No me asustan los retos; al contrario, me encanta salir de mi zona de confort. He aprendido que es ahí donde ocurre el verdadero crecimiento, ya sea mudándome de mi isla, La Palma, para buscar nuevas fronteras en ciudades como Ginebra, Mallorca, Vigo, o enfrentándome a una tecnología totalmente desconocida.',
        stackTitle: 'MI STACK',
        backendTitle: 'Backend & Lenguajes',
        frontendTitle: 'Frontend & Estilos',
        toolsTitle: 'Herramientas & DevOps',
        projectsTitle: 'PROYECTOS',
        futDesc: 'Plataforma gratuita de astronomía de la Universidad de Aarhus que permite a los estudiantes controlar remotamente un telescopio reflector profesional de 60cm en el Observatorio Mt. Kent, Australia. Desarrollado como Full Stack Developer para finalizar mis estudios de desarrollo web.',
        futLocation: 'Universidad de Aarhus, Dinamarca',
        mercadilloDesc: 'Plataforma adaptativa para la digitalización de los mercadillos locales de La Palma. Sistema multi-rol (clientes, vendedores, administradores) con pedidos online, gestión de inventarios y logística. El Gobierno de La Palma tiene planes de adoptarlo para uso real.',
        mercadilloLocation: 'IES José María Pérez Pulido — Proyecto Final 2º DAW',
        simpsonsDesc: 'Juego de emparejar personajes de los Simpsons',
        libreriaDesc: 'Catálogo de videojuegos con PHP y MySQL',
        notasDesc: 'Web para tomar notas de forma rápida',
        contactTitle: 'CONTACTO',
        contactText: 'Siempre estoy abierto a nuevas oportunidades y colaboraciones. ¡Conectemos!',
        visitProject: '🔭 Ver Proyecto',
        liveDemo: '🌐 Demo en Vivo',
    }
};

let currentLang = localStorage.getItem('portfolio-lang') || 'en';

function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('portfolio-lang', lang);
    
    const t = translations[lang];
    
    // Update all translatable elements
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) {
            el.textContent = t[key];
        }
    });

    // Update lang switch buttons
    document.querySelectorAll('.lang-switch button').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Update html lang attribute
    document.documentElement.lang = lang;
}

function initLanguageSwitcher() {
    const buttons = document.querySelectorAll('.lang-switch button');
    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            setLanguage(btn.dataset.lang);
        });
    });
    
    // Set initial language
    setLanguage(currentLang);
}

// ===== Initialize Everything =====
export function initAnimations() {
    initScrollReveal();
    initNavbar();
    initParticles();
    initLanguageSwitcher();
}
