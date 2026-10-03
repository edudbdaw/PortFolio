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
    navQuiz: 'Fit Check',
    navContact: 'Contact',

    // Hero Section
    statusAvailable: 'Available for Full-Stack Roles & Consultancy Projects',
    heroTag: 'FULL-STACK ENGINEER · CLOUD & SYSTEMS ARCHITECTURE',
    heroTitleLine1: 'Building clean, reliable',
    heroTitleLine2: 'software & web architectures.',
    heroSubtitle: 'Specialized in Laravel, Vue.js, PostgreSQL, MySQL, and Docker. Developing practical web systems from La Palma to research teams at Aarhus University in Denmark.',
    btnProjects: 'View Projects',
    btnCV: 'Download CV',
    btnContact: 'Get in Touch',

    // About Section
    aboutTag: 'BACKGROUND & EXPERIENCE',
    aboutTitle: 'Practical execution focused on clean code.',
    aboutText: "I am a Full-Stack Software Engineer with an analytical background in university engineering and practical web systems. From developing remote control interfaces for a 60cm telescope at Aarhus University (Denmark) to publishing mobile applications on Google Play Store and engineering multi-tenant architectures, I focus on solid database design, critical systems telemetry, and clean, resilient code.",

    // Key Highlight Cards
    card1Title: 'International Collaboration',
    card1Desc: 'Developed remote control interfaces for Aarhus University operating astronomy hardware in Australia.',
    card2Title: 'Government Digitalization',
    card2Desc: 'Built multi-tenant market platform designed for adoption by the Government of La Palma.',
    card3Title: 'Verified Certifications',
    card3Desc: 'Microsoft Azure (AZ-900), Cisco Cybersecurity CST, and Certified Python Developer.',

    // Featured Projects (Curated Gallery)
    projectsTag: 'CURATED PORTFOLIO',
    projectsTitle: 'Featured Applications',
    projectsTitleAccent: '· Selected Works',
    projectsSubtitle: 'Production systems, scientific remote platforms, and architectural deployments engineered with precision.',
    opus1Plaque: 'PROJECT 01 · ASTRONOMY & CLOUD INFRASTRUCTURE',
    opus2Plaque: 'PROJECT 02 · MOBILE ARCHITECTURE & SLEEP SCIENCE',
    opus3Plaque: 'PROJECT 03 · GOVERNMENT DIGITALIZATION & COMMERCE',
    futTitle: 'FUT — Remote Telescope Control Platform',
    futOrg: 'Aarhus University — Denmark / Australia',
    futDesc: 'Full-stack platform enabling astronomy students and researchers to remotely control a professional 60cm telescope at Mt. Kent Observatory in Australia.',
    sleepTitle: '90Sleep — R90 Sleep Cycle Alarm App',
    sleepOrg: 'Mobile App (Flutter) · Google Play Store',
    sleepDesc: 'Flutter mobile app (migrated from a Capacitor prototype), 90-minute sleep cycle method, sleep log, statistics, custom settings, and countdown alarm.',
    sleepBadge: 'Google Play Release',
    sleepStoreBtn: 'Get on Google Play',
    mercadilloTitle: 'Mercadillos La Palma — Market Platform',
    mercadilloOrg: 'Government Adoption Plan — La Palma',
    mercadilloDesc: 'Multi-role e-commerce and inventory system (Clients, Vendors, Administrators) for local agricultural markets built with Laravel 12, Livewire, and MySQL.',
    libreriaTitle: 'Game Catalog Platform',
    libreriaDesc: 'Video game catalog application with PHP PDO, SQL filtering, and Tailwind.',

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
    cambridgeTitle: 'Cambridge Assessment English',
    cambridgeSub: 'B2 First (FCE) · Professional Working Proficiency (International Scientific Track)',

    // Quiz Section
    quizTag: 'TECHNICAL FIT',
    quizTitle: 'Am I the Right Fit for Your Project?',
    quizDesc: 'A quick 4-question alignment check to see if my engineering background, technical standards, and work style match what you need.',

    // Contact & Footer
    contactTag: 'CONTACT',
    contactTitle: "Let's connect",
    contactDesc: 'Looking for a reliable Full-Stack Developer for your consultancy, agency, or software team? Reach out directly.',
    copyEmail: 'Copy Email Address',
    btnSendMessage: 'Send Message',
    contactModalTitle: 'Send a Direct Message',
    contactModalDesc: 'Fill in your details below to send a message directly to Eduardo.',
    labelName: 'Your Name',
    labelEmail: 'Your Email',
    labelMessage: 'Message',
    btnSubmitMessage: 'Send Message',
    footerRights: 'All rights reserved.'
  },

  es: {
    // Navigation
    navAbout: 'Sobre mí',
    navProjects: 'Proyectos',
    navStack: 'Stack',
    navCerts: 'Certificaciones',
    navQuiz: 'Afinidad',
    navContact: 'Contacto',

    // Hero Section
    statusAvailable: 'Disponible para Roles Full-Stack y Consultoría',
    heroTag: 'INGENIERO FULL-STACK · SISTEMAS Y ARQUITECTURA CLOUD',
    heroTitleLine1: 'Desarrollo de software',
    heroTitleLine2: 'y arquitecturas web de precisión.',
    heroSubtitle: 'Especializado en Laravel, Vue.js, PostgreSQL, MySQL y Docker. Creando aplicaciones web reales desde La Palma hasta equipos de investigación en la Universidad de Aarhus (Dinamarca).',
    btnProjects: 'Ver Proyectos',
    btnCV: 'Descargar CV',
    btnContact: 'Contactar',

    // About Section
    aboutTag: 'TRAYECTORIA Y EXPERIENCIA',
    aboutTitle: 'Ejecución práctica enfocada en código limpio.',
    aboutText: "Soy Ingeniero Full-Stack con base analítica en ingeniería técnica universitaria y especialización en arquitecturas cliente-servidor. Desde el desarrollo de la plataforma de control y telemetría para un telescopio de 60 cm en Aarhus University (Dinamarca) hasta la publicación de aplicaciones móviles en Google Play Store y el diseño de arquitecturas multi-tenant, me enfoco en el diseño robusto de bases de datos, sistemas críticos y código limpio.",

    // Key Highlight Cards
    card1Title: 'Colaboración Internacional',
    card1Desc: 'Desarrollo de interfaces de control remoto para la Universidad de Aarhus operando hardware astronómico en Australia.',
    card2Title: 'Digitalización Pública',
    card2Desc: 'Plataforma multi-rol de gestión de mercados diseñada para su adopción por el Cabildo de La Palma.',
    card3Title: 'Certificaciones Verificadas',
    card3Desc: 'Microsoft Azure (AZ-900), Cisco Cybersecurity CST y Certified Python Developer.',

    // Featured Projects (Curated Gallery)
    projectsTag: 'PORTAFOLIO SELECCIONADO',
    projectsTitle: 'Aplicaciones Destacadas',
    projectsTitleAccent: '· Proyectos Principales',
    projectsSubtitle: 'Sistemas en producción, plataformas científicas remotas y desarrollos arquitectónicos creados con rigor técnico.',
    opus1Plaque: 'PROYECTO 01 · ASTRONOMÍA E INFRAESTRUCTURA CLOUD',
    opus2Plaque: 'PROYECTO 02 · INGENIERÍA MÓVIL Y CIENCIA DEL SUEÑO',
    opus3Plaque: 'PROYECTO 03 · DIGITALIZACIÓN PÚBLICA Y COMERCIO',
    futTitle: 'FUT — Control Remoto de Telescopio',
    futOrg: 'Universidad de Aarhus — Dinamarca / Australia',
    futDesc: 'Plataforma full-stack que permite a estudiantes de astronomía e investigadores controlar remotamente un telescopio profesional de 60cm en el observatorio Mt. Kent (Australia).',
    sleepTitle: '90Sleep — R90 Sleep Cycle Alarm App',
    sleepOrg: 'App Móvil (Flutter) · Google Play Store',
    sleepDesc: 'App móvil Flutter (migrada desde un prototipo Capacitor), método de ciclos de sueño de 90 minutos, registro de sueño, estadísticas, configuración personalizada y alarma con cuenta atrás.',
    sleepBadge: 'Disponible en Google Play',
    sleepStoreBtn: 'Ver en Google Play',
    mercadilloTitle: 'Mercadillos La Palma — Plataforma de Gestión',
    mercadilloOrg: 'Plan de Adopción por el Cabildo de La Palma',
    mercadilloDesc: 'Sistema e-commerce e inventario multi-rol (Clientes, Agricultores, Administradores) para mercados locales construida con Laravel 12, Livewire y MySQL.',
    libreriaTitle: 'Catálogo de Videojuegos',
    libreriaDesc: 'Plataforma web de catálogo con PHP PDO, consultas SQL relacionales y filtros en Tailwind.',

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
    cambridgeTitle: 'Cambridge Assessment English',
    cambridgeSub: 'B2 First (FCE) · Competencia Profesional en Entorno Internacional',

    // Quiz Section
    quizTag: 'COMPATIBILIDAD TÉCNICA',
    quizTitle: '¿Soy el desarrollador que buscas?',
    quizDesc: 'Un chequeo rápido en 4 preguntas para ver si mis estándares técnicos, autonomía y experiencia en sistemas encajan con tu proyecto.',

    // Contact & Footer
    contactTag: 'CONTACTO',
    contactTitle: 'Hablemos de tu proyecto',
    contactDesc: '¿Buscas un Desarrollador Full-Stack para tu consultora, agencia o equipo de software? Contacta directamente.',
    copyEmail: 'Copiar Correo',
    btnSendMessage: 'Enviar Mensaje',
    contactModalTitle: 'Enviar Mensaje Directo',
    contactModalDesc: 'Rellena tus datos a continuación para enviar un mensaje directo a Eduardo.',
    labelName: 'Tu Nombre',
    labelEmail: 'Tu Correo',
    labelMessage: 'Mensaje',
    btnSubmitMessage: 'Enviar Mensaje',
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

  // Dynamic CV Download link per language (PDF)
  const cvBtn = document.getElementById('downloadCvBtn');
  if (cvBtn) {
    if (currentLang === 'es') {
      cvBtn.href = 'media/cv/Eduardo_Duran_CV_ES.pdf';
      cvBtn.download = 'Eduardo_Duran_CV_ES.pdf';
    } else {
      cvBtn.href = 'media/cv/Eduardo_Duran_CV_EN.pdf';
      cvBtn.download = 'Eduardo_Duran_CV_EN.pdf';
    }
  }
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
