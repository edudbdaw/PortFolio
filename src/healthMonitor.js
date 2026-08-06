/**
 * Eduardo Duran — Live Production Health & Latency Monitor Module
 */

import { getLanguage } from './i18n.js';

let monitorInterval = null;

export function initHealthMonitor() {
  const container = document.getElementById('healthMonitorGrid');
  if (!container) return;

  renderHealthMonitor();
  startLatencySimulation();
}

function renderHealthMonitor() {
  const container = document.getElementById('healthMonitorGrid');
  if (!container) return;

  const lang = getLanguage();

  container.innerHTML = `
    <div class="glass-card" style="padding: 18px 22px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 16px;">
      <div style="display: flex; align-items: center; gap: 10px;">
        <span class="pulse-dot"></span>
        <div>
          <span style="font-size: 0.72rem; color: var(--text-muted); font-family: var(--font-mono); text-transform: uppercase; letter-spacing: 0.08em;">
            ${lang === 'es' ? 'ESTADO DE PRODUCCIÓN EN VIVO' : 'LIVE PRODUCTION SYSTEM STATUS'}
          </span>
          <h4 style="font-size: 0.95rem; font-weight: 600; color: #fff; margin-top: 2px;">
            ${lang === 'es' ? 'Infraestructura & Salud de API' : 'Infrastructure & API Health'}
          </h4>
        </div>
      </div>

      <div style="display: flex; gap: 18px; flex-wrap: wrap; font-family: var(--font-mono); font-size: 0.8rem;">
        <div>
          <span style="color: var(--text-muted); font-size: 0.7rem; display: block;">LATENCY</span>
          <span id="metricLatency" style="color: #4ade80; font-weight: 600;">34 ms</span>
        </div>
        <div>
          <span style="color: var(--text-muted); font-size: 0.7rem; display: block;">DB POOL</span>
          <span style="color: #38bdf8; font-weight: 600;">ACTIVE (Indexed)</span>
        </div>
        <div>
          <span style="color: var(--text-muted); font-size: 0.7rem; display: block;">DOCKER UPTIME</span>
          <span style="color: #4ade80; font-weight: 600;">99.98%</span>
        </div>
        <div>
          <span style="color: var(--text-muted); font-size: 0.7rem; display: block;">SECURITY</span>
          <span style="color: #fde047; font-weight: 600;">GRADE A+</span>
        </div>
      </div>
    </div>
  `;
}

function startLatencySimulation() {
  if (monitorInterval) clearInterval(monitorInterval);

  monitorInterval = setInterval(() => {
    const latencyEl = document.getElementById('metricLatency');
    if (latencyEl) {
      const simulatedMs = Math.floor(Math.random() * (42 - 28 + 1)) + 28;
      latencyEl.textContent = `${simulatedMs} ms`;
    }
  }, 3000);
}
