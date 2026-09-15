/**
 * Eduardo Duran — Toast Notification System (Shadcn / Sonner Primitive)
 */

let toastContainer = null;

function ensureContainer() {
  if (!toastContainer) {
    toastContainer = document.getElementById('toastContainer');
    if (!toastContainer) {
      toastContainer = document.createElement('div');
      toastContainer.id = 'toastContainer';
      toastContainer.className = 'toast-container';
      document.body.appendChild(toastContainer);
    }
  }
  return toastContainer;
}

/**
 * Show a toast notification
 * @param {Object} options
 * @param {string} options.title - Toast title or message
 * @param {string} [options.description] - Optional subtitle
 * @param {'default'|'success'|'error'|'info'} [options.variant='default']
 * @param {number} [options.duration=3200] - Duration in ms
 */
export function showToast({ title, description = '', variant = 'default', duration = 3200 }) {
  const container = ensureContainer();

  const toast = document.createElement('div');
  toast.className = `toast-item toast-${variant}`;

  let iconSvg = '';
  if (variant === 'success') {
    iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="#4ade80" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`;
  } else if (variant === 'error') {
    iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="#f87171" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`;
  } else {
    iconSvg = `<svg class="toast-icon" viewBox="0 0 24 24" fill="none" stroke="#38bdf8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>`;
  }

  toast.innerHTML = `
    <div class="toast-content">
      ${iconSvg}
      <div class="toast-text">
        <p class="toast-title">${title}</p>
        ${description ? `<p class="toast-desc">${description}</p>` : ''}
      </div>
    </div>
    <button class="toast-close-btn" aria-label="Close notification">&times;</button>
  `;

  const closeBtn = toast.querySelector('.toast-close-btn');
  const dismiss = () => {
    toast.classList.add('toast-exit');
    setTimeout(() => {
      if (toast.parentElement) {
        toast.parentElement.removeChild(toast);
      }
    }, 200);
  };

  if (closeBtn) closeBtn.addEventListener('click', dismiss);

  container.appendChild(toast);

  // Trigger enter animation
  requestAnimationFrame(() => {
    toast.classList.add('toast-enter-active');
  });

  if (duration > 0) {
    setTimeout(dismiss, duration);
  }
}
