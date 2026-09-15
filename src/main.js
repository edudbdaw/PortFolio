/**
 * Eduardo Duran — Main Application Orchestrator
 * Integrates interactive components, Shadcn-style dialogs, and Toast primitives
 */

import { getLanguage, setLanguage, updateDOMTexts } from './i18n.js';
import { initStackMatrixFilter, updateStackCounts } from './stackMatrix.js';
import { initTerminal } from './terminal.js';
import { initCommandPalette } from './commandPalette.js';
import { initCompatibilityQuiz } from './compatibilityQuiz.js';
import { initProfileAdapter } from './profileAdapter.js';
import { showToast } from './toast.js';

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

// ===== Contact Form Modal (Shadcn Dialog Primitive) =====
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
      const firstInput = modal.querySelector('#contactName');
      if (firstInput) setTimeout(() => firstInput.focus(), 100);
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

      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = `<svg class="spinner-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10" stroke-opacity="0.25"/><path d="M12 2a10 10 0 0 1 10 10" stroke-linecap="round"/></svg> <span>${lang === 'es' ? 'Enviando...' : 'Sending...'}</span>`;
      }

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
            access_key: '56f87ca6-4d04-4b53-b2ca-f04bf449f874',
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
            statusDiv.textContent = lang === 'es' ? '✔ ¡Mensaje enviado! Eduardo responderá pronto.' : '✔ Message sent! Eduardo will reply shortly.';
          }
          form.reset();

          showToast({
            title: lang === 'es' ? '¡Mensaje enviado con éxito!' : 'Message sent successfully!',
            description: lang === 'es' ? 'Gracias por contactar, te responderé pronto.' : 'Thank you for reaching out, I will get back to you soon.',
            variant: 'success'
          });

          setTimeout(() => closeModal(), 2200);
        } else {
          throw new Error('Fallback to mailto');
        }
      } catch (err) {
        // Fallback open mailto if network or service issue
        window.location.href = `mailto:edudbdaw@gmail.com?subject=Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(message + '\n\nFrom: ' + email)}`;
        
        showToast({
          title: lang === 'es' ? 'Abriendo cliente de correo...' : 'Opening mail client...',
          description: 'edudbdaw@gmail.com',
          variant: 'info'
        });

        if (statusDiv) {
          statusDiv.style.background = 'rgba(34, 197, 94, 0.1)';
          statusDiv.style.color = '#4ade80';
          statusDiv.style.border = '1px solid rgba(34, 197, 94, 0.2)';
          statusDiv.textContent = lang === 'es' ? '✔ Abriendo tu gestor de correo para enviar...' : '✔ Opening your mail client to send...';
        }
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = `<span>${lang === 'es' ? 'Enviar Mensaje' : 'Send Message'}</span>`;
        }
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
      updateStackCounts();

      showToast({
        title: lang === 'es' ? 'Idioma cambiado a Español' : 'Language switched to English',
        description: lang === 'es' ? 'Interfaz en español activada' : 'English interface active',
        variant: 'info',
        duration: 2400
      });
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

      showToast({
        title: getLanguage() === 'es' ? 'Email copiado al portapapeles' : 'Email copied to clipboard',
        description: email,
        variant: 'success'
      });
    });
  });
}
