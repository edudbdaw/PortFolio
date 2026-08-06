/**
 * Eduardo Duran — Interactive Project Simulator (Clean & Natural)
 */

const simulatorData = {
  mercadillo: {
    title: 'Mercadillos La Palma — Role Simulator',
    subtitle: 'Simulate user perspectives across the platform',
    tabs: [
      {
        id: 'customer',
        label: 'Customer View',
        badge: 'Client Portal',
        description: 'Browse local producers from La Palma, add organic goods to cart, and track orders in real time.',
        metrics: ['Sub-100ms Livewire Updates', 'Real-Time Order Tracking', 'Mobile-First Checkout'],
        previewHTML: `
          <div style="background: #09090b; border-radius: 8px; padding: 16px; border: 1px solid rgba(255,255,255,0.08);">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 10px;">
              <span style="font-weight: 600; color: #f4f4f5; font-size: 0.88rem;">Mercadillo Puntagorda — Local Produce</span>
              <span style="font-size: 0.72rem; background: rgba(34,197,94,0.1); color: #4ade80; padding: 2px 8px; border-radius: 12px;">Market Open</span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-top: 12px;">
              <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 6px; padding: 10px;">
                <p style="font-size: 0.82rem; font-weight: 600; color: #fff;">Queso de Garafía (Smoked)</p>
                <p style="font-size: 0.72rem; color: #71717a;">Granja Las Tradiciones</p>
                <p style="font-size: 0.88rem; font-weight: 600; color: #f4f4f5; margin-top: 6px;">€14.50 / kg</p>
              </div>
              <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.06); border-radius: 6px; padding: 10px;">
                <p style="font-size: 0.82rem; font-weight: 600; color: #fff;">Plátano Orgánico</p>
                <p style="font-size: 0.72rem; color: #71717a;">Finca Los Llanos</p>
                <p style="font-size: 0.88rem; font-weight: 600; color: #f4f4f5; margin-top: 6px;">€2.20 / kg</p>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 'vendor',
        label: 'Vendor Control Panel',
        badge: 'Seller Portal',
        description: 'Local farmers and artisan vendors manage daily inventory, process orders, and track revenue.',
        metrics: ['Daily Sales Metrics', 'Instant Order Alerts', 'Automated Stock Sync'],
        previewHTML: `
          <div style="background: #09090b; border-radius: 8px; padding: 16px; border: 1px solid rgba(255,255,255,0.08);">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 10px;">
              <span style="font-weight: 600; color: #f4f4f5; font-size: 0.88rem;">Vendor Dashboard — Finca Los Llanos</span>
              <span style="font-size: 0.72rem; color: #71717a;">Vendor ID #104</span>
            </div>
            <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 12px; text-align: center;">
              <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 6px; padding: 10px;">
                <p style="font-size: 0.7rem; color: #71717a;">Today's Revenue</p>
                <p style="font-size: 1rem; font-weight: 700; color: #fff;">€482.00</p>
              </div>
              <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 6px; padding: 10px;">
                <p style="font-size: 0.7rem; color: #71717a;">Pending Deliveries</p>
                <p style="font-size: 1rem; font-weight: 700; color: #fff;">14 orders</p>
              </div>
              <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.06); border-radius: 6px; padding: 10px;">
                <p style="font-size: 0.7rem; color: #71717a;">Fulfillment Rate</p>
                <p style="font-size: 1rem; font-weight: 700; color: #fff;">98.4%</p>
              </div>
            </div>
          </div>
        `
      },
      {
        id: 'admin',
        label: 'Government Admin',
        badge: 'Super Admin Portal',
        description: 'Municipal managers review market analytics, approve vendor registrations, and oversee island-wide logistics.',
        metrics: ['Multi-Market Governance', 'Island Commerce Reports', 'Privilege Controls'],
        previewHTML: `
          <div style="background: #09090b; border-radius: 8px; padding: 16px; border: 1px solid rgba(255,255,255,0.08);">
            <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 10px;">
              <span style="font-weight: 600; color: #f4f4f5; font-size: 0.88rem;">Cabildo de La Palma — Island Market Control</span>
              <span style="font-size: 0.72rem; background: rgba(255,255,255,0.06); color: #e4e4e7; padding: 2px 8px; border-radius: 12px;">Super Admin Mode</span>
            </div>
            <div style="margin-top: 12px; font-size: 0.8rem; color: #a1a1aa;">
              <p style="color: #fff; font-weight: 500; margin-bottom: 6px;">Active Markets Under Oversight:</p>
              <ul style="list-style: none; padding: 0;">
                <li style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px dashed rgba(255,255,255,0.05);">
                  <span>Mercadillo de Mazo</span>
                  <span style="color: #4ade80;">28 Active Vendors · Operational</span>
                </li>
                <li style="display: flex; justify-content: space-between; padding: 4px 0; border-bottom: 1px dashed rgba(255,255,255,0.05);">
                  <span>Mercadillo de El Paso</span>
                  <span style="color: #4ade80;">19 Active Vendors · Operational</span>
                </li>
              </ul>
            </div>
          </div>
        `
      }
    ]
  }
};

export function initProjectSimulator() {
  const modalOverlay = document.getElementById('simulatorModal');
  if (!modalOverlay) return;

  const closeBtn = modalOverlay.querySelector('.modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeSimulatorModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeSimulatorModal();
  });
}

export function openSimulatorModal(projectId) {
  const data = simulatorData[projectId];
  if (!data) return;

  const modalOverlay = document.getElementById('simulatorModal');
  const modalTitle = document.getElementById('simModalTitle');
  const modalSub = document.getElementById('simModalSub');
  const tabBar = document.getElementById('simTabBar');

  if (!modalOverlay) return;

  modalTitle.textContent = data.title;
  modalSub.textContent = data.subtitle;

  // Build Tab Buttons
  tabBar.innerHTML = data.tabs.map((tab, idx) => `
    <button class="sim-tab-btn ${idx === 0 ? 'active' : ''}" data-tab-id="${tab.id}">
      ${tab.label}
    </button>
  `).join('');

  // Render initial tab content
  renderSimTabContent(data.tabs[0]);

  // Tab listeners
  const tabBtns = tabBar.querySelectorAll('.sim-tab-btn');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const tabId = btn.getAttribute('data-tab-id');
      const selectedTab = data.tabs.find(t => t.id === tabId);
      if (selectedTab) renderSimTabContent(selectedTab);
    });
  });

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function renderSimTabContent(tab) {
  const simContent = document.getElementById('simContent');
  if (!simContent) return;

  simContent.innerHTML = `
    <div style="margin-bottom: 14px;">
      <span class="badge" style="margin-bottom: 8px;">${tab.badge}</span>
      <p style="font-size: 0.88rem; color: #a1a1aa;">${tab.description}</p>
    </div>

    <div style="display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 18px;">
      ${tab.metrics.map(m => `<span class="tech-tag" style="color: #a1a1aa; border-color: rgba(255,255,255,0.08);">${m}</span>`).join('')}
    </div>

    <div class="simulator-preview-box">
      ${tab.previewHTML}
    </div>
  `;
}

export function closeSimulatorModal() {
  const modalOverlay = document.getElementById('simulatorModal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}
