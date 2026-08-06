/**
 * Eduardo Duran — Main Application Orchestrator (Natural & Human)
 */

import { getLanguage, setLanguage, updateDOMTexts } from './i18n.js';
import { initArchitectureInspector, openArchitectureModal } from './architectureInspector.js';
import { initProjectSimulator, openSimulatorModal } from './projectSimulator.js';
import { initStackMatrixFilter } from './stackMatrix.js';
import { initTerminal } from './terminal.js';
import { initCommandPalette } from './commandPalette.js';
import { initCompatibilityQuiz } from './compatibilityQuiz.js';
import { initHealthMonitor } from './healthMonitor.js';
import { initSqlPlayground } from './sqlPlayground.js';
import { initProfileAdapter } from './profileAdapter.js';
import { initCaseStudyDrawer } from './caseStudyDrawer.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize i18n
  updateDOMTexts();
  initLangButtons();

  // Initialize interactive features
  initProfileAdapter();
  initHealthMonitor();
  initSqlPlayground();
  initTerminal();
  initCommandPalette();
  initCompatibilityQuiz();
  initCaseStudyDrawer();

  // Initialize interactive modals
  initArchitectureInspector();
  initProjectSimulator();

  // Initialize stack matrix
  initStackMatrixFilter();

  // Navbar Scroll Listener
  initNavbarScroll();

  // Scroll Reveal Observer
  initScrollReveal();

  // Project Action Triggers
  initProjectTriggers();

  // Email Copy Trigger
  initEmailCopy();
});

// ===== Language Buttons =====
function initLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
      
      // Re-render modules in new language
      initCompatibilityQuiz();
      initHealthMonitor();
      initSqlPlayground();
      initProfileAdapter();
    });
  });
}

// ===== Navbar Scroll =====
function initNavbarScroll() {
  const navbar = document.getElementById('navbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }, { passive: true });
}

// ===== Scroll Reveal Observer =====
function initScrollReveal() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });

  reveals.forEach(el => observer.observe(el));
}

// ===== Project Triggers =====
function initProjectTriggers() {
  document.querySelectorAll('[data-action="inspect-arch"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      openArchitectureModal(projectId);
    });
  });

  document.querySelectorAll('[data-action="simulate-demo"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const projectId = btn.getAttribute('data-project');
      openSimulatorModal(projectId);
    });
  });
}

// ===== Email Copy =====
function initEmailCopy() {
  const btn = document.getElementById('copyEmailBtn');
  if (!btn) return;

  btn.addEventListener('click', () => {
    const email = 'edudbdaw@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
      const spanText = btn.querySelector('.btn-label');
      if (spanText) {
        const originalText = spanText.textContent;
        spanText.textContent = getLanguage() === 'es' ? 'Email copiado' : 'Email Copied';
        btn.style.borderColor = 'rgba(34, 197, 94, 0.4)';
        setTimeout(() => {
          spanText.textContent = originalText;
          btn.style.borderColor = '';
        }, 2200);
      }
    });
  });
}
