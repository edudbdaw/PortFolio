/**
 * Eduardo Duran — Visitor Profile Adapter Module (Consultancy, Public Sector, CTO)
 */

import { getLanguage } from './i18n.js';

let currentProfile = 'consultancy';

const profileConfigs = {
  consultancy: {
    en: {
      tag: "TAILORED FOR IT CONSULTANCIES & TECH AGENCIES",
      badge: "High-Autonomy Full-Stack Engineer",
      title: "Production-Ready DAW Engineer for High-Pace Teams",
      desc: "Fast onboarding, clean architecture in Laravel 12 & Vue.js, structured Git workflows, Docker deployment, and proven problem-solving mindset."
    },
    es: {
      tag: "ADAPTADO PARA CONSULTORAS Y AGENCIAS TECH",
      badge: "Ingeniero Full-Stack de Alta Autonomía",
      title: "Desarrollador DAW Listo para Equipos de Alto Rendimiento",
      desc: "Adaptación rápida, arquitectura limpia en Laravel 12 y Vue.js, flujo de trabajo Git estructurado, Docker y capacidad demostrada para resolver retos."
    }
  },
  publicSector: {
    en: {
      tag: "TAILORED FOR PUBLIC SECTOR & INSTITUTIONS",
      badge: "Government & Research Digitalization",
      title: "Reliable Multi-Role Systems & Public Solutions",
      desc: "Proven track record delivering multi-tenant platforms for local government (Cabildo de La Palma) and international research infrastructure (Aarhus University)."
    },
    es: {
      tag: "ADAPTADO PARA SECTOR PÚBLICO E INSTITUCIONES",
      badge: "Digitalización Pública e Investigación",
      title: "Sistemas Multi-Rol Fiables y Soluciones Públicas",
      desc: "Experiencia demostrada creando plataformas multi-usuario para administraciones públicas (Cabildo de La Palma) e infraestructura de investigación internacional (Univ. Aarhus)."
    }
  },
  cto: {
    en: {
      tag: "TAILORED FOR CTOS & TECH LEADS",
      badge: "Backend & Database Specialist",
      title: "Solid SQL Schemas, API Architecture & Performance",
      desc: "Relational database design in PostgreSQL & MySQL, TCP socket communications, clean RESTful APIs, and zero-panic deployments."
    },
    es: {
      tag: "ADAPTADO PARA CTOS Y LÍDERES TÉCNICOS",
      badge: "Especialista en Backend y Bases de Datos",
      title: "Esquemas SQL Sólidos, Arquitectura API y Rendimiento",
      desc: "Diseño de bases de datos relacionales en PostgreSQL y MySQL, comunicaciones por socket TCP, APIs RESTful mantenibles y cero pánico en producción."
    }
  }
};

export function initProfileAdapter() {
  const bar = document.getElementById('profileAdapterBar');
  if (!bar) return;

  renderAdapterBar();
}

function renderAdapterBar() {
  const bar = document.getElementById('profileAdapterBar');
  if (!bar) return;

  const lang = getLanguage();

  bar.innerHTML = `
    <div class="glass-card" style="padding: 12px 18px; margin-bottom: 24px; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 10px;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 0.75rem; color: var(--text-muted); font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.05em;">
          ${lang === 'es' ? 'VER PORTFOLIO SEGÚN TU PERFIL:' : 'TAILOR VIEW FOR YOUR ROLE:'}
        </span>
      </div>

      <div style="display: flex; gap: 6px; flex-wrap: wrap;">
        <button class="btn btn-secondary btn-sm profile-btn ${currentProfile === 'consultancy' ? 'btn-primary' : ''}" data-profile="consultancy">
          🏢 IT Consultancy / Agency
        </button>
        <button class="btn btn-secondary btn-sm profile-btn ${currentProfile === 'publicSector' ? 'btn-primary' : ''}" data-profile="publicSector">
          🏛️ Public Sector / Client
        </button>
        <button class="btn btn-secondary btn-sm profile-btn ${currentProfile === 'cto' ? 'btn-primary' : ''}" data-profile="cto">
          💻 CTO / Tech Lead
        </button>
      </div>
    </div>
  `;

  bar.querySelectorAll('.profile-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentProfile = btn.getAttribute('data-profile');
      applyProfileChanges();
      renderAdapterBar();
    });
  });
}

function applyProfileChanges() {
  const lang = getLanguage();
  const cfg = profileConfigs[currentProfile][lang] || profileConfigs[currentProfile].en;

  const heroTag = document.querySelector('#hero .section-tag');
  const heroSubtitle = document.querySelector('#hero .hero-subtitle');

  if (heroTag) {
    heroTag.textContent = cfg.tag;
  }
  if (heroSubtitle) {
    heroSubtitle.textContent = cfg.desc;
  }
}
