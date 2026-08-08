/**
 * Eduardo Duran — Command Palette (Cmd + K / Ctrl + K)
 */

import { setLanguage, getLanguage } from './i18n.js';

export function initCommandPalette() {
  const modal = document.getElementById('cmdPaletteModal');
  const input = document.getElementById('cmdInput');
  const listContainer = document.getElementById('cmdList');
  const triggerBtn = document.getElementById('cmdTriggerBtn');

  if (!modal || !input || !listContainer) return;

  // Key combination listener: Cmd + K / Ctrl + K
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
    renderCommandList(input.value.trim().toLowerCase());
  });

  renderCommandList('');
}

export function openCommandPalette() {
  const modal = document.getElementById('cmdPaletteModal');
  const input = document.getElementById('cmdInput');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (input) {
      input.value = '';
      renderCommandList('');
      setTimeout(() => input.focus(), 100);
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

function renderCommandList(query) {
  const listContainer = document.getElementById('cmdList');
  if (!listContainer) return;

  const lang = getLanguage();

  const commands = [
    {
      label: lang === 'es' ? 'Ir a Proyectos' : 'Go to Projects',
      shortcut: 'SECTION',
      action: () => { window.location.hash = '#projects'; closeCommandPalette(); }
    },
    {
      label: lang === 'es' ? 'Ir a Stack Tecnológico' : 'Go to Tech Stack',
      shortcut: 'SECTION',
      action: () => { window.location.hash = '#stack'; closeCommandPalette(); }
    },
    {
      label: lang === 'es' ? 'Ir a Certificaciones' : 'Go to Certifications',
      shortcut: 'SECTION',
      action: () => { window.location.hash = '#certs'; closeCommandPalette(); }
    },
    {
      label: lang === 'es' ? 'Cambiar a Español' : 'Switch to Spanish',
      shortcut: 'LANG',
      action: () => { setLanguage('es'); closeCommandPalette(); }
    },
    {
      label: lang === 'es' ? 'Cambiar a Inglés' : 'Switch to English',
      shortcut: 'LANG',
      action: () => { setLanguage('en'); closeCommandPalette(); }
    },
    {
      label: lang === 'es' ? 'Descargar CV (Español)' : 'Download CV (English)',
      shortcut: 'FILE',
      action: () => {
        const cvFile = lang === 'es' ? 'Eduardo_Duran_CV_ES.docx' : 'Eduardo_Duran_CV_EN.docx';
        const link = document.createElement('a');
        link.href = `media/cv/${cvFile}`;
        link.download = cvFile;
        link.click();
        closeCommandPalette();
      }
    }
  ];

  const filtered = query
    ? commands.filter(c => c.label.toLowerCase().includes(query))
    : commands;

  if (filtered.length === 0) {
    listContainer.innerHTML = `<div style="padding: 16px; color: var(--text-muted); font-size: 0.85rem; text-align: center;">No matching commands found</div>`;
    return;
  }

  listContainer.innerHTML = filtered.map(cmd => `
    <div class="cmd-item" data-cmd-id="${cmd.label}">
      <span>${cmd.label}</span>
      <span class="badge" style="font-size: 0.68rem;">${cmd.shortcut}</span>
    </div>
  `).join('');

  listContainer.querySelectorAll('.cmd-item').forEach((item, idx) => {
    item.addEventListener('click', () => {
      filtered[idx].action();
    });
  });
}
