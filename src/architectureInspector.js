/**
 * Eduardo Duran — Architecture Inspector (Clean & Natural)
 */

const architectureData = {
  fut: {
    title: 'FUT — Remote Telescope Control Architecture',
    subtitle: 'Aarhus University (Denmark) / Mt. Kent Observatory (Australia)',
    description: 'Web architecture connecting Danish university students to a 60cm reflecting telescope in Australia via WebSocket control and PostgreSQL database.',
    nodes: [
      {
        id: 'client',
        name: 'Frontend Client',
        tech: 'JavaScript / MediaWiki API',
        summary: 'Web interface sending astronomical coordinate payloads and scheduling observation slots.',
        code: `// Telescope Scheduling API Call
async function scheduleObservation(targetCoords, duration) {
  const response = await fetch('/api/v1/telescope/schedule', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ ra: targetCoords.ra, dec: targetCoords.dec, duration })
  });
  return await response.json();
}`
      },
      {
        id: 'backend',
        name: 'Backend Engine',
        tech: 'PHP 8.2 / Custom Router',
        summary: 'Handles user authorization, queued observation jobs, and socket routing to Australia.',
        code: `// Job Dispatcher Logic
public function dispatchObservationJob(ObservationRequest $request) {
  $this->validateUserQuota($request->user());
  $payload = $request->getSanitizedCoordinates();
  return Queue::push(new ControlTelescopeJob($payload));
}`
      },
      {
        id: 'database',
        name: 'Database & Storage',
        tech: 'PostgreSQL 15',
        summary: 'Relational store tracking observation history, target ephemeris, user credentials, and image metadata.',
        code: `-- PostgreSQL Relational Schema Excerpt
CREATE TABLE observation_sessions (
  id BIGSERIAL PRIMARY KEY,
  user_id INT REFERENCES users(id),
  target_name VARCHAR(100) NOT NULL,
  right_ascension NUMERIC(10, 6) NOT NULL,
  declination NUMERIC(10, 6) NOT NULL,
  status VARCHAR(20) DEFAULT 'queued',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);`
      },
      {
        id: 'hardware',
        name: 'Telescope Hardware Socket',
        tech: 'TCP/IP Socket Interface',
        summary: 'Direct socket communication to observatory mount motors & CCD cameras in Mt. Kent, Australia.',
        code: `// Socket Connection to Mount Controller
$socket = fsockopen("mtkent.obs.au", 8080, $errno, $errstr, 10);
if ($socket) {
  fwrite($socket, "POINT RA={$ra} DEC={$dec}\\n");
  fclose($socket);
}`
      }
    ]
  },
  mercadillo: {
    title: 'Mercadillos La Palma — Multi-Tenant Architecture',
    subtitle: 'Government Adoption Plan — Local Market Digitalization Platform',
    description: 'Enterprise Laravel 12 multi-role e-commerce and logistics engine with real-time inventory management and vendor dashboards.',
    nodes: [
      {
        id: 'ui',
        name: 'Client Interface',
        tech: 'Livewire / Tailwind CSS',
        summary: 'Reactive client ordering and vendor management interface with optimized render speeds.',
        code: `<!-- Livewire Dynamic Inventory Counter -->
<div class="inventory-card">
  <h3>{{ $product->name }}</h3>
  <span class="stock-badge">{{ $product->stock_quantity }} kg available</span>
  <button wire:click="addToCart({{ $product->id }})" class="btn-buy">
    Add to Cart
  </button>
</div>`
      },
      {
        id: 'core',
        name: 'Laravel 12 Backend',
        tech: 'PHP 8.4 / Middleware & Auth',
        summary: 'Multi-role authentication system (Client, Vendor, Admin) with granular permission checks.',
        code: `// Role Middleware Implementation
public function handle(Request $request, Closure $next, ...$roles) {
  if (! $request->user() || ! in_array($request->user()->role, $roles)) {
    abort(403, 'Unauthorized access to Market Vendor Portal.');
  }
  return $next($request);
}`
      },
      {
        id: 'db',
        name: 'Relational Database',
        tech: 'MySQL 8 / Eloquent ORM',
        summary: 'Schema with vendor isolation, order fulfillment logs, and index optimization.',
        code: `// Eloquent Query with Eager Loading & Scope
$vendorOrders = Order::with(['items.product', 'customer'])
  ->where('vendor_id', $vendorId)
  ->where('status', 'pending')
  ->latest()
  ->paginate(15);`
      }
    ]
  }
};

export function initArchitectureInspector() {
  const modalOverlay = document.getElementById('architectureModal');
  if (!modalOverlay) return;

  const closeBtn = modalOverlay.querySelector('.modal-close-btn');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeArchitectureModal);
  }

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) closeArchitectureModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeArchitectureModal();
  });
}

export function openArchitectureModal(projectId) {
  const data = architectureData[projectId];
  if (!data) return;

  const modalOverlay = document.getElementById('architectureModal');
  const modalTitle = document.getElementById('archModalTitle');
  const modalSub = document.getElementById('archModalSub');
  const modalDesc = document.getElementById('archModalDesc');
  const nodeGraph = document.getElementById('archNodeGraph');
  const codeBox = document.getElementById('archCodeSnippet');

  if (!modalOverlay) return;

  modalTitle.textContent = data.title;
  modalSub.textContent = data.subtitle;
  modalDesc.textContent = data.description;

  // Build node buttons
  nodeGraph.innerHTML = data.nodes.map((node, index) => `
    <div class="node-card ${index === 0 ? 'active' : ''}" data-node-id="${node.id}">
      <h4 style="font-size: 0.88rem; font-weight: 600; color: #fff;">${node.name}</h4>
      <p style="font-size: 0.72rem; color: #a1a1aa; font-family: var(--font-mono); margin-top: 3px;">${node.tech}</p>
      <p style="font-size: 0.78rem; color: #71717a; margin-top: 6px; line-height: 1.4;">${node.summary}</p>
    </div>
  `).join('');

  // Initial code snippet
  codeBox.textContent = data.nodes[0].code;

  // Node click listeners
  const nodeCards = nodeGraph.querySelectorAll('.node-card');
  nodeCards.forEach(card => {
    card.addEventListener('click', () => {
      nodeCards.forEach(c => c.classList.remove('active'));
      card.classList.add('active');
      const nodeId = card.getAttribute('data-node-id');
      const selectedNode = data.nodes.find(n => n.id === nodeId);
      if (selectedNode) {
        codeBox.textContent = selectedNode.code;
      }
    });
  });

  modalOverlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

export function closeArchitectureModal() {
  const modalOverlay = document.getElementById('architectureModal');
  if (modalOverlay) {
    modalOverlay.classList.remove('active');
    document.body.style.overflow = '';
  }
}
