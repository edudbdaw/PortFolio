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
        <button class="btn btn-secondary btn-sm profile-btn ${currentProfile === 'consultancy' ? 'btn-primary' : ''}" data-profile="consultancy" style="display: inline-flex; align-items: center; gap: 6px;">
          <svg class="icon-svg" style="width: 14px; height: 14px;" viewBox="0 0 256 256" fill="currentColor"><path d="M240,208H224V96a16,16,0,0,0-16-16H144V40a16,16,0,0,0-16-16H48A16,16,0,0,0,32,40V208H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM48,40h80V208H48ZM208,96V208H144V96ZM72,72a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H80A8,8,0,0,1,72,72Zm0,32a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H80A8,8,0,0,1,72,104Zm0,32a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H80A8,8,0,0,1,72,136Zm96,0a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,136Zm0-32a8,8,0,0,1,8-8h16a8,8,0,0,1,0,16H176A8,8,0,0,1,168,104Z"/></svg>
          <span>IT Consultancy / Agency</span>
        </button>
        <button class="btn btn-secondary btn-sm profile-btn ${currentProfile === 'publicSector' ? 'btn-primary' : ''}" data-profile="publicSector" style="display: inline-flex; align-items: center; gap: 6px;">
          <svg class="icon-svg" style="width: 14px; height: 14px;" viewBox="0 0 256 256" fill="currentColor"><path d="M240,208H224V112h16a8,8,0,0,0,0-16L132.8,33.07a8,8,0,0,0-9.6,0L16,96a8,8,0,0,0,0,16H32v96H16a8,8,0,0,0,0,16H240a8,8,0,0,0,0-16ZM48,112H80v96H48Zm48,0h32v96H96Zm48,0h32v96H144Zm48,0h16v96H192ZM128,48.53,200.74,96H55.26Z"/></svg>
          <span>Public Sector / Client</span>
        </button>
        <button class="btn btn-secondary btn-sm profile-btn ${currentProfile === 'cto' ? 'btn-primary' : ''}" data-profile="cto" style="display: inline-flex; align-items: center; gap: 6px;">
          <svg class="icon-svg" style="width: 14px; height: 14px;" viewBox="0 0 256 256" fill="currentColor"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM109.66,122.34a8,8,0,0,1,0,11.32l-32,32a8,8,0,0,1-11.32-11.32L92.69,128,66.34,101.66A8,8,0,0,1,77.66,90.34l32,32Zm82.34,37.66H144a8,8,0,0,1,0-16h48a8,8,0,0,1,0,16Z"/></svg>
          <span>CTO / Tech Lead</span>
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
