/**
 * Eduardo Duran — Main Application Orchestrator (Natural & Human)
 */

import { getLanguage, setLanguage, updateDOMTexts } from './i18n.js';
import { initStackMatrixFilter } from './stackMatrix.js';
import { initTerminal } from './terminal.js';
import { initCommandPalette } from './commandPalette.js';
import { initCompatibilityQuiz } from './compatibilityQuiz.js';
import { initProfileAdapter } from './profileAdapter.js';

document.addEventListener('DOMContentLoaded', () => {
  // Initialize i18n
  updateDOMTexts();
  initLangButtons();

  // Initialize interactive features
  initProfileAdapter();
  initTerminal();
  initCommandPalette();
  initCompatibilityQuiz();
  initScrollProgress();
  initContactModal();

  // Initialize stack matrix
  initStackMatrixFilter();

  // Navbar Scroll Listener
  initNavbarScroll();

  // Scroll Reveal Observer
  initScrollReveal();

  // Email Copy Trigger
  initEmailCopy();
});

// ===== Scroll Progress Indicator =====
function initScrollProgress() {
  const bar = document.getElementById('scrollProgressBar');
  if (!bar) return;

  const updateProgress = () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    bar.style.width = `${Math.min(100, Math.max(0, progress))}%`;
  };

  window.addEventListener('scroll', updateProgress, { passive: true });
  updateProgress();
}

// ===== Contact Form Modal =====
function initContactModal() {
  const modal = document.getElementById('contactModal');
  const openBtn = document.getElementById('openContactModalBtn');
  if (!modal) return;

  const closeBtn = modal.querySelector('.modal-close-btn');

  const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  };

  if (openBtn) {
    openBtn.addEventListener('click', (e) => {
      e.preventDefault();
      modal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (closeBtn) closeBtn.addEventListener('click', closeModal);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) closeModal();
  });

  // Form submission
  const form = document.getElementById('contactForm');
  const statusDiv = document.getElementById('contactFormStatus');
  const submitBtn = document.getElementById('submitContactBtn');

  if (form) {
    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      const name = document.getElementById('contactName').value.trim();
      const email = document.getElementById('contactEmail').value.trim();
      const message = document.getElementById('contactMessage').value.trim();
      const lang = getLanguage();

      if (!name || !email || !message) return;

      if (submitBtn) submitBtn.disabled = true;
      if (statusDiv) {
        statusDiv.style.display = 'block';
        statusDiv.style.background = 'rgba(56, 189, 248, 0.1)';
        statusDiv.style.color = '#38bdf8';
        statusDiv.style.border = '1px solid rgba(56, 189, 248, 0.2)';
        statusDiv.textContent = lang === 'es' ? 'Enviando mensaje...' : 'Sending message...';
      }

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            access_key: '56f87ca6-4d04-4b53-b2ca-f04bf449f874', // Free Web3Forms Key endpoint
            name: name,
            email: email,
            message: message,
            subject: `New Portfolio Message from ${name}`
          })
        });

        const data = await response.json();

        if (response.ok || data.success) {
          if (statusDiv) {
            statusDiv.style.background = 'rgba(34, 197, 94, 0.1)';
            statusDiv.style.color = '#4ade80';
            statusDiv.style.border = '1px solid rgba(34, 197, 94, 0.2)';
            statusDiv.textContent = lang === 'es' ? '✔ ¡Mensaje enviado con éxito! Eduardo responderá pronto.' : '✔ Message sent successfully! Eduardo will reply shortly.';
          }
          form.reset();
          setTimeout(() => closeModal(), 2800);
        } else {
          throw new Error('Fallback to mailto');
        }
      } catch (err) {
        // Fallback open mailto if network or key limit
        window.location.href = `mailto:edudbdaw@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`;
        if (statusDiv) {
          statusDiv.style.background = 'rgba(34, 197, 94, 0.1)';
          statusDiv.style.color = '#4ade80';
          statusDiv.style.border = '1px solid rgba(34, 197, 94, 0.2)';
          statusDiv.textContent = lang === 'es' ? '✔ Abriendo tu gestor de correo para enviar...' : '✔ Opening your mail client to send...';
        }
      } finally {
        if (submitBtn) submitBtn.disabled = false;
      }
    });
  }
}

// ===== Language Buttons =====
function initLangButtons() {
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const lang = btn.getAttribute('data-lang');
      setLanguage(lang);
      
      // Re-render modules in new language
      initCompatibilityQuiz();
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
