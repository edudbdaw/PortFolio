/**
 * Eduardo Duran — Project Case Study Slide-Over Drawer Module
 */

import { getLanguage } from './i18n.js';

const caseStudies = {
  fut: {
    en: {
      title: "FUT Telescope — Remote Astronomy Platform",
      org: "Aarhus University — Denmark / Mt. Kent Observatory, Australia",
      role: "Full-Stack Web Developer",
      stack: ["PHP 8.4", "PostgreSQL 15", "TCP Sockets", "MediaWiki API", "JavaScript ES6"],
      problem: "Astronomy researchers and university students in Denmark needed a reliable remote interface to operate a physical 60cm optical telescope located over 15,000 km away in Mt. Kent, Australia.",
      challenge: "High latency across international network connections, hardware socket commands requiring binary stream safety, and multi-user queue scheduling without hardware collision.",
      solution: "Engineered a web application in PHP 8 and PostgreSQL with a TCP Socket bridge layer that sends verified hardware commands, logs CCD camera telemetry, and manages reservation slots without collision.",
      impact: "Successfully deployed at Aarhus University (fut.au.dk), enabling active astronomy observation courses and student research projects."
    },
    es: {
      title: "Telescopio FUT — Plataforma de Control Remoto",
      org: "Universidad de Aarhus — Dinamarca / Observatorio Mt. Kent, Australia",
      role: "Desarrollador Web Full-Stack",
      stack: ["PHP 8.4", "PostgreSQL 15", "TCP Sockets", "MediaWiki API", "JavaScript ES6"],
      problem: "Los estudiantes de astronomía e investigadores en Dinamarca necesitaban una interfaz web fiable para operar un telescopio óptico real de 60cm ubicado a más de 15.000 km de distancia en Australia.",
      challenge: "Elevada latencia en conexiones internacionales, comandos de socket de hardware que requerían seguridad en la transmisión binaria y programación de turnos de usuario sin colisión de hardware.",
      solution: "Diseño y desarrollo de una aplicación web en PHP 8 y PostgreSQL con una capa puente TCP Socket que transmite comandos verificados al hardware, registra la telemetría de las cámaras CCD y gestiona las reservas de uso.",
      impact: "Desplegado con éxito en la Universidad de Aarhus (fut.au.dk), permitiendo cursos de observación astronómica activa y proyectos de investigación."
    }
  },
  mercadillo: {
    en: {
      title: "Mercadillos La Palma — Market Digitalization",
      org: "Government Adoption Plan — Cabildo de La Palma",
      role: "Lead Full-Stack Web Developer",
      stack: ["Laravel 12", "Livewire", "MySQL 8.4", "Tailwind CSS", "Docker"],
      problem: "Agricultural and artisan markets in La Palma lacked a centralized digital system for vendor stall registration, product inventory management, and public online sales.",
      challenge: "Designing a multi-tenant role system (Customer, Vendor, Admin) that is intuitive for non-technical agricultural vendors while maintaining enterprise-grade database integrity.",
      solution: "Developed a comprehensive Laravel 12 application with Livewire dynamic components, vendor dashboards, automated inventory tracking, and role-based access control (RBAC).",
      impact: "Designed specifically for official adoption by the Government of La Palma to modernize local commerce."
    },
    es: {
      title: "Mercadillos La Palma — Digitalización Agrícola",
      org: "Plan de Adopción por el Cabildo de La Palma",
      role: "Desarrollador Web Full-Stack Principal",
      stack: ["Laravel 12", "Livewire", "MySQL 8.4", "Tailwind CSS", "Docker"],
      problem: "Los mercadillos agrícolas y artesanales de La Palma carecían de un sistema digital centralizado para el registro de puestos, gestión de inventario de productores y venta online pública.",
      challenge: "Diseñar un sistema de roles multi-tenant (Cliente, Agricultor/Vendedor, Administrador) intuitivo para agricultores sin experiencia técnica previa, manteniendo la integridad de la base de datos.",
      solution: "Desarrollo completo de una aplicación en Laravel 12 con componentes dinámicos Livewire, paneles de control para agricultores, seguimiento automatizado de inventario y control de acceso RBAC.",
      impact: "Diseñado específicamente para su adopción oficial por el Cabildo Insular de La Palma para modernizar el comercio local."
    }
  }
};

export function initCaseStudyDrawer() {
  const container = document.getElementById('caseStudyDrawerModal');
  if (!container) return;

  // Add click triggers to project buttons
  document.querySelectorAll('[data-action="case-study"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      openCaseStudyDrawer(projectId);
    });
  });
}

export function openCaseStudyDrawer(projectId) {
  const modal = document.getElementById('caseStudyDrawerModal');
  if (!modal) return;

  const lang = getLanguage();
  const studyData = caseStudies[projectId];
  if (!studyData) return;

  const data = studyData[lang] || studyData.en;

  const contentContainer = document.getElementById('caseStudyDrawerContent');
  if (contentContainer) {
    contentContainer.innerHTML = `
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 16px;">
        <div>
          <span class="badge badge-emerald">${lang === 'es' ? 'Expediente Técnico' : 'Case Study Dossier'}</span>
          <h2 style="font-size: 1.4rem; font-weight: 700; color: #fff; margin-top: 6px; line-height: 1.3;">${data.title}</h2>
          <p style="font-size: 0.8rem; color: var(--text-muted); font-family: var(--font-mono); margin-top: 4px;">${data.org}</p>
        </div>
        <button id="closeDrawerBtn" class="modal-close-btn" style="position: static;">&times;</button>
      </div>

      <!-- Tech Stack Tags -->
      <div style="display: flex; gap: 6px; flex-wrap: wrap; margin-bottom: 24px;">
        ${data.stack.map(s => `<span class="tech-tag">${s}</span>`).join('')}
      </div>

      <!-- Case Study Sections -->
      <div style="display: flex; flex-direction: column; gap: 20px;">
        
        <div class="glass-card" style="padding: 16px;">
          <h4 style="font-size: 0.85rem; font-weight: 600; color: #38bdf8; text-transform: uppercase; font-family: var(--font-mono); margin-bottom: 6px;">
            🔴 ${lang === 'es' ? 'El Problema' : 'The Problem'}
          </h4>
          <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6;">${data.problem}</p>
        </div>

        <div class="glass-card" style="padding: 16px;">
          <h4 style="font-size: 0.85rem; font-weight: 600; color: #fde047; text-transform: uppercase; font-family: var(--font-mono); margin-bottom: 6px;">
            ⚡ ${lang === 'es' ? 'El Reto Técnico' : 'The Technical Challenge'}
          </h4>
          <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6;">${data.challenge}</p>
        </div>

        <div class="glass-card" style="padding: 16px;">
          <h4 style="font-size: 0.85rem; font-weight: 600; color: #4ade80; text-transform: uppercase; font-family: var(--font-mono); margin-bottom: 6px;">
            🛠️ ${lang === 'es' ? 'La Solución de Ingeniería' : 'The Engineering Solution'}
          </h4>
          <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6;">${data.solution}</p>
        </div>

        <div class="glass-card" style="padding: 16px;">
          <h4 style="font-size: 0.85rem; font-weight: 600; color: #a78bfa; text-transform: uppercase; font-family: var(--font-mono); margin-bottom: 6px;">
            📈 ${lang === 'es' ? 'Impacto Real' : 'Real-World Impact'}
          </h4>
          <p style="font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6;">${data.impact}</p>
        </div>

      </div>
    `;

    document.getElementById('closeDrawerBtn').addEventListener('click', () => {
      modal.classList.remove('active');
    });
  }

  modal.classList.add('active');
}
