/**
 * Eduardo Duran — Command Palette (Cmd + K / Ctrl + K)
 * Upgraded with Shadcn 'cmdk' primitives: Grouped commands, Lucide icons,
 * keyboard arrow navigation, enter-to-select, and instant feedback.
 */

import { setLanguage, getLanguage } from './i18n.js';
import { showToast } from './toast.js';

let activeItemIndex = 0;
let flattenedCommands = [];

export function initCommandPalette() {
  const modal = document.getElementById('cmdPaletteModal');
  const input = document.getElementById('cmdInput');
  const triggerBtn = document.getElementById('cmdTriggerBtn');

  if (!modal || !input) return;

  // Global key combination listener: Cmd + K / Ctrl + K
  document.addEventListener('keydown', (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      toggleCommandPalette();
    } else if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeCommandPalette();
    }
  });

  if (triggerBtn) {
    triggerBtn.addEventListener('click', (e) => {
      e.preventDefault();
      openCommandPalette();
    });
  }

  const closeBtn = modal.querySelector('.modal-close-btn');
  if (closeBtn) closeBtn.addEventListener('click', closeCommandPalette);

  modal.addEventListener('click', (e) => {
    if (e.target === modal) closeCommandPalette();
  });

  // Filter input listener
  input.addEventListener('input', () => {
    activeItemIndex = 0;
    renderCommandList(input.value.trim().toLowerCase());
  });

  // Keyboard navigation inside command palette
  input.addEventListener('keydown', (e) => {
    if (!modal.classList.contains('active')) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (flattenedCommands.length > 0) {
        activeItemIndex = (activeItemIndex + 1) % flattenedCommands.length;
        updateActiveItemHighlight();
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (flattenedCommands.length > 0) {
        activeItemIndex = (activeItemIndex - 1 + flattenedCommands.length) % flattenedCommands.length;
        updateActiveItemHighlight();
      }
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (flattenedCommands[activeItemIndex]) {
        flattenedCommands[activeItemIndex].action();
      }
    }
  });

  renderCommandList('');
}

export function openCommandPalette() {
  const modal = document.getElementById('cmdPaletteModal');
  const input = document.getElementById('cmdInput');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    activeItemIndex = 0;
    if (input) {
      input.value = '';
      renderCommandList('');
      setTimeout(() => input.focus(), 80);
    }
  }
}

export function closeCommandPalette() {
  const modal = document.getElementById('cmdPaletteModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function toggleCommandPalette() {
  const modal = document.getElementById('cmdPaletteModal');
  if (modal && modal.classList.contains('active')) {
    closeCommandPalette();
  } else {
    openCommandPalette();
  }
}

function getCommandGroups() {
  const lang = getLanguage();
  const isEs = lang === 'es';

  return [
    {
      groupName: isEs ? 'Navegación' : 'Navigation',
      items: [
        {
          id: 'nav-projects',
          label: isEs ? 'Ir a Proyectos' : 'Go to Projects',
          desc: isEs ? 'FUT, Mercadillos, 90Sleep' : 'FUT, Mercadillos, 90Sleep',
          badge: 'SECTION',
          icon: `<svg class="cmd-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>`,
          action: () => { window.location.hash = '#projects'; closeCommandPalette(); }
        },
        {
          id: 'nav-stack',
          label: isEs ? 'Ir a Stack Tecnológico' : 'Go to Tech Stack',
          desc: isEs ? 'PHP, Laravel, Vue, Docker, SQL' : 'PHP, Laravel, Vue, Docker, SQL',
          badge: 'SECTION',
          icon: `<svg class="cmd-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>`,
          action: () => { window.location.hash = '#stack'; closeCommandPalette(); }
        },
        {
          id: 'nav-certs',
          label: isEs ? 'Ir a Certificaciones' : 'Go to Certifications',
          desc: isEs ? 'Azure AZ-900, Cisco CST, Python' : 'Azure AZ-900, Cisco CST, Python',
          badge: 'SECTION',
          icon: `<svg class="cmd-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>`,
          action: () => { window.location.hash = '#certs'; closeCommandPalette(); }
        },
        {
          id: 'nav-quiz',
          label: isEs ? 'Hacer Test de Compatibilidad' : 'Take Compatibility Quiz',
          desc: isEs ? 'Alineación técnica rápida de 4 preguntas' : 'Quick 4-question technical alignment check',
          badge: 'QUIZ',
          icon: `<svg class="cmd-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 11l3 3L22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>`,
          action: () => { window.location.hash = '#quiz'; closeCommandPalette(); }
        }
      ]
    },
    {
      groupName: isEs ? 'Acciones' : 'Actions',
      items: [
        {
          id: 'action-cv',
          label: isEs ? 'Descargar CV (Español PDF)' : 'Download CV (English PDF)',
          desc: isEs ? 'Currículum oficial actualizado en formato PDF' : 'Official updated resume in PDF format',
          badge: 'PDF',
          icon: `<svg class="cmd-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>`,
          action: () => {
            const cvFile = isEs ? 'Eduardo_Duran_CV_ES.pdf' : 'Eduardo_Duran_CV_EN.pdf';
            const link = document.createElement('a');
            link.href = `media/cv/${cvFile}`;
            link.download = cvFile;
            link.click();
            closeCommandPalette();
            showToast({
              title: isEs ? 'Descargando Currículum (PDF)' : 'Downloading CV (PDF)',
              description: cvFile,
              variant: 'success'
            });
          }
        },
        {
          id: 'action-contact',
          label: isEs ? 'Enviar Mensaje Directo' : 'Send Direct Message',
          desc: isEs ? 'Abrir formulario de contacto rápido' : 'Open quick direct contact modal',
          badge: 'MODAL',
          icon: `<svg class="cmd-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13"/><path d="M22 2l-7 20-4-9-9-4 20-7z"/></svg>`,
          action: () => {
            closeCommandPalette();
            const contactModal = document.getElementById('contactModal');
            if (contactModal) {
              contactModal.classList.add('active');
              document.body.style.overflow = 'hidden';
            }
          }
        },
        {
          id: 'action-copy-email',
          label: isEs ? 'Copiar Dirección de Email' : 'Copy Email Address',
          desc: 'edudbdaw@gmail.com',
          badge: 'COPY',
          icon: `<svg class="cmd-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="9" y="9" width="13" height="13" rx="2" ry="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg>`,
          action: () => {
            navigator.clipboard.writeText('edudbdaw@gmail.com').then(() => {
              closeCommandPalette();
              showToast({
                title: isEs ? 'Email copiado' : 'Email copied',
                description: 'edudbdaw@gmail.com',
                variant: 'success'
              });
            });
          }
        }
      ]
    },
    {
      groupName: isEs ? 'Preferencias de Idioma' : 'Language Preferences',
      items: [
        {
          id: 'lang-es',
          label: isEs ? 'Cambiar a Español' : 'Switch to Spanish',
          desc: 'Español (ES)',
          badge: 'LANG',
          icon: `<svg class="cmd-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
          action: () => {
            setLanguage('es');
            closeCommandPalette();
            showToast({
              title: 'Idioma cambiado',
              description: 'Español activado',
              variant: 'info'
            });
          }
        },
        {
          id: 'lang-en',
          label: isEs ? 'Cambiar a Inglés' : 'Switch to English',
          desc: 'English (EN)',
          badge: 'LANG',
          icon: `<svg class="cmd-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>`,
          action: () => {
            setLanguage('en');
            closeCommandPalette();
            showToast({
              title: 'Language switched',
              description: 'English enabled',
              variant: 'info'
            });
          }
        }
      ]
    }
  ];
}

function renderCommandList(query) {
  const listContainer = document.getElementById('cmdList');
  if (!listContainer) return;

  const groups = getCommandGroups();
  flattenedCommands = [];

  let html = '';

  groups.forEach(group => {
    const matchingItems = group.items.filter(item => {
      if (!query) return true;
      return (
        item.label.toLowerCase().includes(query) ||
        (item.desc && item.desc.toLowerCase().includes(query)) ||
        (item.badge && item.badge.toLowerCase().includes(query))
      );
    });

    if (matchingItems.length > 0) {
      html += `<div class="cmd-group-label">${group.groupName}</div>`;
      matchingItems.forEach(item => {
        const itemIdx = flattenedCommands.length;
        flattenedCommands.push(item);
        const isActive = itemIdx === activeItemIndex;

        html += `
          <div class="cmd-item ${isActive ? 'active' : ''}" data-cmd-idx="${itemIdx}">
            <div class="cmd-item-left">
              ${item.icon}
              <div class="cmd-item-text">
                <span class="cmd-item-title">${item.label}</span>
                ${item.desc ? `<span class="cmd-item-desc">${item.desc}</span>` : ''}
              </div>
            </div>
            <span class="cmd-badge">${item.badge}</span>
          </div>
        `;
      });
    }
  });

  if (flattenedCommands.length === 0) {
    const lang = getLanguage();
    html = `
      <div class="cmd-empty-state">
        <svg class="cmd-empty-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="11" cy="11" r="8"/>
          <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>
        <p class="cmd-empty-title">${lang === 'es' ? 'No se encontraron resultados' : 'No results found'}</p>
        <p class="cmd-empty-sub">${lang === 'es' ? 'Prueba buscando "proyectos", "stack", "cv" o "email"' : 'Try searching for "projects", "stack", "cv", or "email"'}</p>
      </div>
    `;
  }

  listContainer.innerHTML = html;

  // Add click and hover listeners
  listContainer.querySelectorAll('.cmd-item').forEach(itemEl => {
    const idx = parseInt(itemEl.getAttribute('data-cmd-idx'), 10);
    itemEl.addEventListener('click', () => {
      if (flattenedCommands[idx]) flattenedCommands[idx].action();
    });
    itemEl.addEventListener('mouseenter', () => {
      activeItemIndex = idx;
      updateActiveItemHighlight();
    });
  });

  updateActiveItemHighlight();
}

function updateActiveItemHighlight() {
  const items = document.querySelectorAll('#cmdList .cmd-item');
  items.forEach((item, idx) => {
    if (idx === activeItemIndex) {
      item.classList.add('active');
      item.scrollIntoView({ block: 'nearest' });
    } else {
      item.classList.remove('active');
    }
  });
}
