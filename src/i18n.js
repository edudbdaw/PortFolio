/**
 * Eduardo Duran — Bilingual Translation Dictionary (EN / ES)
 * Pure, authentic, direct tone without emojis.
 */

const translations = {
  en: {
    // Navigation
    navAbout: 'About',
    navProjects: 'Projects',
    navStack: 'Stack',
    navCerts: 'Certifications',
    navQuiz: 'Quiz',
    navContact: 'Contact',

    // Hero Section
    statusAvailable: 'Available for Full-Stack Roles & Consultancy Projects',
    heroTag: 'FULL-STACK DEVELOPER · TÉCNICO SUPERIOR DAW',
    heroTitleLine1: 'Building clean, reliable',
    heroTitleLine2: 'web applications & software.',
    heroSubtitle: 'Specialized in Laravel, Vue.js, PostgreSQL, MySQL, and Docker. Developing practical web systems from La Palma to research teams at Aarhus University in Denmark.',
    btnProjects: 'View Projects',
    btnCV: 'Download CV',
    btnContact: 'Get in Touch',

    // About Section
    aboutTag: 'BACKGROUND & EXPERIENCE',
    aboutTitle: 'Practical execution focused on clean code.',
    aboutText: "I am a Higher Technician in Web Application Development (DAW). I build practical, scalable web solutions. From building a remote control platform for a 60cm telescope at Aarhus University (Denmark) to developing a multi-role market application for the Government of La Palma, I focus on solid database design, backend logic, and clean user interfaces.",

    // Key Highlight Cards
    card1Title: 'International Collaboration',
    card1Desc: 'Developed remote control interfaces for Aarhus University operating astronomy hardware in Australia.',
    card2Title: 'Government Digitalization',
    card2Desc: 'Built multi-tenant market platform designed for adoption by the Government of La Palma.',
    card3Title: 'Verified Certifications',
    card3Desc: 'Microsoft Azure (AZ-900), Cisco Cybersecurity CST, and Certified Python Developer.',

    // Featured Projects
    projectsTag: 'PORTFOLIO',
    projectsTitle: 'Featured Applications',
    futTitle: 'FUT — Remote Telescope Control Platform',
    futOrg: 'Aarhus University — Denmark / Australia',
    futDesc: 'Full-stack platform enabling astronomy students and researchers to remotely control a professional 60cm telescope at Mt. Kent Observatory in Australia.',
    mercadilloTitle: 'Mercadillos La Palma — Market Platform',
    mercadilloOrg: 'Government Adoption Plan — La Palma',
    mercadilloDesc: 'Multi-role e-commerce and inventory system (Clients, Vendors, Administrators) for local agricultural markets built with Laravel 12, Livewire, and MySQL.',
    simpsonsTitle: 'Los Simpson Matcher',
    simpsonsDesc: 'Interactive memory matching game built with vanilla JS and CSS flex grid.',
    libreriaTitle: 'Game Catalog Platform',
    libreriaDesc: 'Video game catalog application with PHP PDO, SQL filtering, and Tailwind.',
    notasTitle: 'Fast Notes App',
    notasDesc: 'Web application for quick notes with local state persistence.',

    inspectArchBtn: 'Architecture Diagram',
    simulateDemoBtn: 'Interactive Preview',

    // Tech Stack Section
    stackTag: 'CAPABILITIES',
    stackTitle: 'Technology Stack',
    filterAll: 'All Technologies',
    filterBackend: 'Backend & Databases',
    filterFrontend: 'Frontend & UI',
    filterDevOps: 'DevOps & Tools',

    // Certifications Section
    certsTag: 'CERTIFICATIONS',
    certsTitle: 'Professional Credentials',
    azureTitle: 'Microsoft Azure Fundamentals',
    azureSub: 'AZ-900 · Cloud Infrastructure',
    ciscoTitle: 'Cisco Support Technician',
    ciscoSub: 'Cybersecurity Certified · Network & Security',
    pythonTitle: 'Certified Python Developer',
    pythonSub: 'Data Structures & Scripting',

    // Quiz Section
    quizTag: 'INTERACTIVE ALIGNMENT',
    quizTitle: 'Are We a Match?',
    quizDesc: 'Quick 4-question alignment check for tech leads, recruiters, and clients.',

    // Contact & Footer
    contactTag: 'CONTACT',
    contactTitle: "Let's connect",
    contactDesc: 'Looking for a reliable Full-Stack Developer for your consultancy, agency, or software team? Reach out directly.',
    copyEmail: 'Copy Email Address',
    footerRights: 'All rights reserved.'
  },

  es: {
    // Navigation
    navAbout: 'Sobre mí',
    navProjects: 'Proyectos',
    navStack: 'Stack',
    navCerts: 'Certificaciones',
    navQuiz: 'Test',
    navContact: 'Contacto',

    // Hero Section
    statusAvailable: 'Disponible para Roles Full-Stack y Consultoría',
    heroTag: 'DESARROLLADOR FULL-STACK · TÉCNICO SUPERIOR DAW',
    heroTitleLine1: 'Desarrollo de software',
    heroTitleLine2: 'y aplicaciones web fiables.',
    heroSubtitle: 'Especializado en Laravel, Vue.js, PostgreSQL, MySQL y Docker. Creando aplicaciones web reales desde La Palma hasta equipos de investigación en la Universidad de Aarhus (Dinamarca).',
    btnProjects: 'Ver Proyectos',
    btnCV: 'Descargar CV',
    btnContact: 'Contactar',

    // About Section
    aboutTag: 'TRAYECTORIA Y EXPERIENCIA',
    aboutTitle: 'Ejecución práctica enfocada en código limpio.',
    aboutText: "Soy Técnico Superior en Desarrollo de Aplicaciones Web (DAW). Construyo aplicaciones funcionales y escalables. Desde la plataforma de control remoto de un telescopio de 60cm para la Universidad de Aarhus (Dinamarca) hasta la aplicación multi-rol para el Cabildo de La Palma, mi foco es el diseño de bases de datos sólidas, lógica backend y código mantenible.",

    // Key Highlight Cards
    card1Title: 'Colaboración Internacional',
    card1Desc: 'Desarrollo de interfaces de control remoto para la Universidad de Aarhus operando hardware astronómico en Australia.',
    card2Title: 'Digitalización Pública',
    card2Desc: 'Plataforma multi-rol de gestión de mercados diseñada para su adopción por el Cabildo de La Palma.',
    card3Title: 'Certificaciones Verificadas',
    card3Desc: 'Microsoft Azure (AZ-900), Cisco Cybersecurity CST y Certified Python Developer.',

    // Featured Projects
    projectsTag: 'PORTAFOLIO',
    projectsTitle: 'Aplicaciones Destacadas',
    futTitle: 'FUT — Control Remoto de Telescopio',
    futOrg: 'Universidad de Aarhus — Dinamarca / Australia',
    futDesc: 'Plataforma full-stack que permite a estudiantes de astronomía e investigadores controlar remotamente un telescopio profesional de 60cm en el observatorio Mt. Kent (Australia).',
    mercadilloTitle: 'Mercadillos La Palma — Plataforma de Gestión',
    mercadilloOrg: 'Plan de Adopción por el Cabildo de La Palma',
    mercadilloDesc: 'Sistema e-commerce e inventario multi-rol (Clientes, Agricultores, Administradores) para mercados locales construida con Laravel 12, Livewire y MySQL.',
    simpsonsTitle: 'Juego de Parejas Los Simpson',
    simpsonsDesc: 'Juego interactivo de memoria visual construido con Javascript vanilla y CSS Flex Grid.',
    libreriaTitle: 'Catálogo de Videojuegos',
    libreriaDesc: 'Plataforma web de catálogo con PHP PDO, consultas SQL relacionales y filtros en Tailwind.',
    notasTitle: 'Aplicación Notas Rápidas',
    notasDesc: 'Aplicación web ligera para gestión de notas con persistencia en estado local.',

    inspectArchBtn: 'Diagrama de Arquitectura',
    simulateDemoBtn: 'Vista Interactiva',

    // Tech Stack Section
    stackTag: 'CAPACIDADES',
    stackTitle: 'Stack Tecnológico',
    filterAll: 'Todas',
    filterBackend: 'Backend y Bases de Datos',
    filterFrontend: 'Frontend y UI',
    filterDevOps: 'DevOps y Herramientas',

    // Certifications Section
    certsTag: 'CERTIFICACIONES',
    certsTitle: 'Acreditaciones Profesionales',
    azureTitle: 'Microsoft Azure Fundamentals',
    azureSub: 'AZ-900 · Infraestructura Cloud',
    ciscoTitle: 'Cisco Support Technician',
    ciscoSub: 'Cybersecurity Certified · Redes y Seguridad',
    pythonTitle: 'Certified Python Developer',
    pythonSub: 'Estructuras de Datos y Scripting',

    // Quiz Section
    quizTag: 'TEST DE COMPATIBILIDAD',
    quizTitle: '¿Encajamos en tu equipo?',
    quizDesc: 'Rápido chequeo de afinidad en 4 preguntas para responsables de selección y líderes técnicos.',

    // Contact & Footer
    contactTag: 'CONTACTO',
    contactTitle: 'Hablemos de tu proyecto',
    contactDesc: '¿Buscas un Desarrollador Full-Stack para tu consultora, agencia o equipo de software? Contacta directamente.',
    copyEmail: 'Copiar Correo',
    footerRights: 'Todos los derechos reservados.'
  }
};

let currentLang = localStorage.getItem('portfolio_lang') || 'en';

export function getLanguage() {
  return currentLang;
}

export function setLanguage(lang) {
  if (translations[lang]) {
    currentLang = lang;
    localStorage.setItem('portfolio_lang', lang);
    updateDOMTexts();
    updateActiveButtons();
  }
}

export function updateDOMTexts() {
  const dict = translations[currentLang];
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (dict[key]) {
      el.textContent = dict[key];
    }
  });
}

function updateActiveButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    const lang = btn.getAttribute('data-lang');
    if (lang === currentLang) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
}
