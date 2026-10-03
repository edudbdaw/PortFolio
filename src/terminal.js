/**
 * Eduardo Duran — Interactive CLI Terminal Module
 */

import { getLanguage } from './i18n.js';

let commandHistory = [];
let historyIndex = -1;

export function initTerminal() {
  const terminalInput = document.getElementById('terminalInput');
  const terminalBody = document.getElementById('terminalBody');
  const terminalModal = document.getElementById('terminalModal');

  if (!terminalInput || !terminalBody) return;

  // Terminal Input Key Listener
  terminalInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      const rawCmd = terminalInput.value.trim();
      executeCommand(rawCmd);
      terminalInput.value = '';
      historyIndex = commandHistory.length;
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (commandHistory.length > 0 && historyIndex > 0) {
        historyIndex--;
        terminalInput.value = commandHistory[historyIndex];
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        historyIndex++;
        terminalInput.value = commandHistory[historyIndex];
      } else {
        historyIndex = commandHistory.length;
        terminalInput.value = '';
      }
    } else if (e.key === 'Tab') {
      e.preventDefault();
      autoCompleteCommand(terminalInput);
    }
  });

  // Terminal Modal Listeners
  if (terminalModal) {
    const closeBtn = terminalModal.querySelector('.modal-close-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeTerminalModal);
    terminalModal.addEventListener('click', (e) => {
      if (e.target === terminalModal) closeTerminalModal();
    });
  }

  // Trigger buttons
  document.querySelectorAll('[data-action="open-terminal"]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openTerminalModal();
    });
  });
}

export function openTerminalModal() {
  const modal = document.getElementById('terminalModal');
  const input = document.getElementById('terminalInputModal');
  if (modal) {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    if (input) setTimeout(() => input.focus(), 100);
  }
}

export function closeTerminalModal() {
  const modal = document.getElementById('terminalModal');
  if (modal) {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }
}

function autoCompleteCommand(inputEl) {
  const val = inputEl.value.trim().toLowerCase();
  const available = ['whoami', 'help', 'projects', 'stack', 'certs', 'contact', 'clear', 'cat cv', 'sudo'];
  const match = available.find(cmd => cmd.startsWith(val));
  if (match) {
    inputEl.value = match;
  }
}

function executeCommand(cmd) {
  const outputContainer = document.getElementById('terminalOutput');
  if (!outputContainer) return;

  if (cmd.length > 0) {
    commandHistory.push(cmd);
  }

  // Print prompt line
  const promptLine = document.createElement('div');
  promptLine.className = 'terminal-line';
  promptLine.innerHTML = `<span class="terminal-user">eduardo@studio:~$</span> <span class="terminal-cmd">${escapeHTML(cmd)}</span>`;
  outputContainer.appendChild(promptLine);

  const lang = getLanguage();
  const lowerCmd = cmd.toLowerCase().trim();

  let responseHTML = '';

  switch (lowerCmd) {
    case '':
      break;

    case 'whoami':
      responseHTML = lang === 'es' ? `
        <div class="terminal-response">
          <p><strong style="color: #fff;">Eduardo Duran Banegas</strong> — Ingeniero de Software Full-Stack &amp; Systems Developer.</p>
          <p style="color: #a1a1aa; margin-top: 4px;">Especializado en Laravel 12, Vue.js, PostgreSQL/MySQL, Docker y Flutter.</p>
          <p style="color: #71717a; margin-top: 4px;">Trayectoria: Telemetría de control para Aarhus University (Dinamarca) y autor publicado en Google Play Store.</p>
        </div>
      ` : `
        <div class="terminal-response">
          <p><strong style="color: #fff;">Eduardo Duran Banegas</strong> — Full-Stack Software Engineer &amp; Systems Developer.</p>
          <p style="color: #a1a1aa; margin-top: 4px;">Specialized in Laravel 12, Vue.js, PostgreSQL/MySQL, Docker, and Flutter.</p>
          <p style="color: #71717a; margin-top: 4px;">Background: Research telemetry at Aarhus University (Denmark) &amp; published author on Google Play Store.</p>
        </div>
      `;
      break;

    case 'help':
    case '?':
      responseHTML = `
        <div class="terminal-response">
          <p style="color: #a1a1aa; margin-bottom: 6px;">${lang === 'es' ? 'Comandos disponibles:' : 'Available commands:'}</p>
          <table style="width: 100%; max-width: 480px; font-size: 0.8rem; border-collapse: collapse;">
            <tr><td style="color: #38bdf8; padding: 2px 0; width: 110px;">whoami</td><td style="color: #71717a;">${lang === 'es' ? 'Perfil y resumen profesional' : 'Developer profile summary'}</td></tr>
            <tr><td style="color: #38bdf8; padding: 2px 0;">projects</td><td style="color: #71717a;">${lang === 'es' ? 'Lista de aplicaciones destacadas' : 'List featured applications'}</td></tr>
            <tr><td style="color: #38bdf8; padding: 2px 0;">stack</td><td style="color: #71717a;">${lang === 'es' ? 'Tecnologías y lenguajes' : 'Tech stack breakdown'}</td></tr>
            <tr><td style="color: #38bdf8; padding: 2px 0;">certs</td><td style="color: #71717a;">${lang === 'es' ? 'Certificaciones verificadas' : 'Verified certifications'}</td></tr>
            <tr><td style="color: #38bdf8; padding: 2px 0;">contact</td><td style="color: #71717a;">${lang === 'es' ? 'Datos de contacto directo' : 'Direct contact details'}</td></tr>
            <tr><td style="color: #38bdf8; padding: 2px 0;">cat cv</td><td style="color: #71717a;">${lang === 'es' ? 'Descargar currículum vitae' : 'Download resume PDF'}</td></tr>
            <tr><td style="color: #38bdf8; padding: 2px 0;">clear</td><td style="color: #71717a;">${lang === 'es' ? 'Limpiar pantalla de la terminal' : 'Clear terminal output'}</td></tr>
          </table>
        </div>
      `;
      break;

    case 'projects':
    case 'ls':
      responseHTML = `
        <div class="terminal-response">
          <p><span style="color: #4ade80;">1. FUT Remote Telescope</span> — Aarhus University (Denmark/Australia) [PHP 8, Postgres, TCP Sockets]</p>
          <p><span style="color: #4ade80;">2. 90Sleep App</span> — R90 Sleep Cycle App [Flutter, Dart, Google Play Store]</p>
          <p><span style="color: #4ade80;">3. Mercadillos La Palma</span> — Cabildo de La Palma Adoption Plan [Laravel 12, Livewire, MySQL]</p>
        </div>
      `;
      break;

    case 'stack':
    case 'skills':
      responseHTML = `
        <div class="terminal-response">
          <p><strong style="color: #fff;">Backend & DB:</strong> PHP 8.4, Laravel 12, Python, Java, MySQL 8, PostgreSQL 15</p>
          <p><strong style="color: #fff;">Frontend & UI:</strong> Vue.js, Livewire, Tailwind CSS, Bootstrap, HTML5, SASS</p>
          <p><strong style="color: #fff;">DevOps & Tools:</strong> Docker, Git, GitHub</p>
        </div>
      `;
      break;

    case 'certs':
      responseHTML = `
        <div class="terminal-response">
          <p>✔ <strong style="color: #fff;">Microsoft Azure Fundamentals</strong> (AZ-900)</p>
          <p>✔ <strong style="color: #fff;">Cisco Support Technician</strong> (Cybersecurity Certified)</p>
          <p>✔ <strong style="color: #fff;">Certified Python Developer</strong></p>
          <p>✔ <strong style="color: #fff;">Cambridge Assessment English</strong> (B2 First / FCE - Professional Proficiency)</p>
        </div>
      `;
      break;

    case 'contact':
      responseHTML = `
        <div class="terminal-response">
          <p>Email: <a href="mailto:edudbdaw@gmail.com" style="color: #38bdf8;">edudbdaw@gmail.com</a></p>
          <p>GitHub: <a href="https://github.com/edudbdaw" target="_blank" style="color: #38bdf8;">github.com/edudbdaw</a></p>
          <p>LinkedIn: <a href="https://www.linkedin.com/in/eduardo-duran-banegas-87b126371/" target="_blank" style="color: #38bdf8;">linkedin.com/in/eduardo-duran-banegas</a></p>
        </div>
      `;
      break;

    case 'cat cv':
    case 'cat resume':
    case 'cv':
      const cvFile = lang === 'es' ? 'Eduardo_Duran_CV_ES.pdf' : 'Eduardo_Duran_CV_EN.pdf';
      responseHTML = `
        <div class="terminal-response">
          <p style="color: #4ade80;">[SYSTEM]: Triggering resume download (${cvFile})...</p>
        </div>
      `;
      // Trigger download
      const link = document.createElement('a');
      link.href = `media/cv/${cvFile}`;
      link.download = cvFile;
      link.click();
      break;

    case 'clear':
      outputContainer.innerHTML = '';
      return;

    case 'sudo':
      responseHTML = `
        <div class="terminal-response">
          <p style="color: #f43f5e;">[SUDO]: Permission granted. User eduardo is in sudoers file.</p>
        </div>
      `;
      break;

    default:
      responseHTML = `
        <div class="terminal-response" style="color: #f43f5e;">
          Command not found: ${escapeHTML(cmd)}. Type <span style="color: #38bdf8;">help</span> for available commands.
        </div>
      `;
      break;
  }

  if (responseHTML) {
    const respDiv = document.createElement('div');
    respDiv.innerHTML = responseHTML;
    outputContainer.appendChild(respDiv);
  }

  // Scroll to bottom
  const terminalWindow = outputContainer.closest('.terminal-body') || outputContainer;
  terminalWindow.scrollTop = terminalWindow.scrollHeight;
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
