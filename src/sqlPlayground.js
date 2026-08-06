/**
 * Eduardo Duran — Live SQL & Eloquent Query Playground Module
 */

import { getLanguage } from './i18n.js';

const queriesData = {
  mercadillo: {
    title: "Mercadillos La Palma — Multi-Tenant Order & Inventory Query",
    description: "Fetches active vendor stalls, total revenue, and product inventory using Laravel 12 Eloquent ORM & optimized MySQL 8 JOINs.",
    eloquent: `// Laravel 12 Eloquent ORM Controller Method
public function getVendorDashboardStats(int $marketId): JsonResponse
{
    $stats = MarketStall::where('market_id', $marketId)
        ->where('status', 'active')
        ->with(['vendor:id,name,email', 'products' => fn($q) => $q->where('stock', '>', 0)])
        ->withSum('orders as total_revenue', 'amount')
        ->get();

    return response()->json([
        'status' => 'success',
        'execution_ms' => 38,
        'data' => $stats
    ]);
}`,
    sql: `-- Optimized MySQL 8 Relational Query
SELECT 
    ms.id AS stall_id,
    ms.stall_number,
    u.name AS vendor_name,
    COUNT(p.id) AS active_products,
    COALESCE(SUM(o.amount), 0.00) AS total_revenue
FROM market_stalls ms
INNER JOIN users u ON ms.vendor_id = u.id
LEFT JOIN products p ON p.stall_id = ms.id AND p.stock > 0
LEFT JOIN orders o ON o.stall_id = ms.id
WHERE ms.market_id = 12 AND ms.status = 'active'
GROUP BY ms.id, u.id
ORDER BY total_revenue DESC;`,
    explain: "EXPLAIN: Using index `idx_market_status` (Cost: 0.12). 0.003s response time."
  },
  fut: {
    title: "FUT Telescope — Hardware Socket Session & JSONB Telemetry",
    description: "Queries telescope telemetry logs, active Socket TCP connections, and instrument status from PostgreSQL 15.",
    eloquent: `// PHP 8.4 TCP Socket & Telemetry Controller
public function getTelescopeTelemetry(string $sessionUuid): ArrayResponse
{
    $session = TelescopeSession::select('uuid', 'user_id', 'instrument_status', 'coordinates_json')
        ->where('uuid', $sessionUuid)
        ->where('status', 'CONNECTED')
        ->firstOrFail();

    // Decode TCP Socket Binary Stream
    $rawSocketData = SocketHandler::readStream($session->tcp_port);
    
    return [
        'ra_dec' => $session->coordinates_json,
        'socket_state' => $rawSocketData['status'],
        'latency_ms' => 24
    ];
}`,
    sql: `-- PostgreSQL 15 Telemetry JSONB Extraction Query
SELECT 
    session_id,
    user_id,
    coordinates_json->>'ra' AS right_ascension,
    coordinates_json->>'dec' AS declination,
    instrument_status->>'ccd_temp' AS ccd_temperature_celsius
FROM telescope_sessions
WHERE status = 'CONNECTED'
  AND (coordinates_json->>'ra')::numeric > 180.0
ORDER BY connected_at DESC
LIMIT 5;`,
    explain: "EXPLAIN: Index Scan using `idx_telescope_status_gin` on `telescope_sessions`. Latency: 1.8ms."
  },
  security: {
    title: "Security & Authorization Middleware Policy",
    description: "Laravel 12 Gate / Policy check verifying role-based authorization before accessing database mutations.",
    eloquent: `// Laravel 12 RBAC Policy Gate
public function updateStallInventory(User $user, MarketStall $stall): bool
{
    // SuperAdmin or Verified Stall Vendor
    if ($user->hasRole('admin')) {
        return true;
    }

    return $user->id === $stall->vendor_id 
        && $stall->status === 'active';
}`,
    sql: `-- Role & Permissions RBAC Table Verification
SELECT 
    r.name AS role_name,
    p.name AS permission
FROM model_has_roles mhr
JOIN roles r ON r.id = mhr.role_id
JOIN role_has_permissions rhp ON rhp.role_id = r.id
JOIN permissions p ON p.id = rhp.permission_id
WHERE mhr.model_id = 42 AND p.name = 'manage-inventory';`,
    explain: "EXPLAIN: Primary key lookup on `model_has_roles`. Execution: 0.4ms."
  }
};

let activeQueryKey = 'mercadillo';
let activeViewMode = 'eloquent'; // 'eloquent' or 'sql'

export function initSqlPlayground() {
  const container = document.getElementById('sqlPlaygroundGrid');
  if (!container) return;

  renderPlayground();
}

function renderPlayground() {
  const container = document.getElementById('sqlPlaygroundGrid');
  if (!container) return;

  const lang = getLanguage();
  const q = queriesData[activeQueryKey];

  container.innerHTML = `
    <div class="glass-card reveal visible" style="padding: 24px;">
      <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; margin-bottom: 16px;">
        <div>
          <span class="badge badge-emerald">${lang === 'es' ? 'Inspector de Consultas Backend' : 'Backend Query Inspector'}</span>
          <h3 style="font-size: 1.1rem; font-weight: 600; color: #fff; margin-top: 4px;">${q.title}</h3>
        </div>

        <div style="display: flex; gap: 6px;">
          <button id="viewEloquentBtn" class="btn btn-sm ${activeViewMode === 'eloquent' ? 'btn-primary' : 'btn-secondary'}">
            PHP / Eloquent ORM
          </button>
          <button id="viewSqlBtn" class="btn btn-sm ${activeViewMode === 'sql' ? 'btn-primary' : 'btn-secondary'}">
            Raw SQL Query
          </button>
        </div>
      </div>

      <!-- Selector Buttons -->
      <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 14px;">
        <button class="btn btn-secondary btn-sm query-selector-btn ${activeQueryKey === 'mercadillo' ? 'active' : ''}" data-key="mercadillo">
          🛒 Mercadillos (Laravel / MySQL)
        </button>
        <button class="btn btn-secondary btn-sm query-selector-btn ${activeQueryKey === 'fut' ? 'active' : ''}" data-key="fut">
          🔭 FUT Telescope (PHP / Postgres / Socket)
        </button>
        <button class="btn btn-secondary btn-sm query-selector-btn ${activeQueryKey === 'security' ? 'active' : ''}" data-key="security">
          🛡️ RBAC Middleware Gate
        </button>
      </div>

      <p style="font-size: 0.84rem; color: var(--text-secondary); margin-bottom: 12px;">${q.description}</p>

      <pre class="code-snippet-box" style="margin-top: 0; min-height: 220px;">${escapeHTML(activeViewMode === 'eloquent' ? q.eloquent : q.sql)}</pre>

      <div style="margin-top: 10px; display: flex; justify-content: space-between; align-items: center; font-family: var(--font-mono); font-size: 0.75rem; color: var(--text-muted);">
        <span>⚡ ${q.explain}</span>
        <span style="color: #4ade80;">✔ Optimized</span>
      </div>
    </div>
  `;

  // Listeners
  container.querySelectorAll('.query-selector-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      activeQueryKey = btn.getAttribute('data-key');
      renderPlayground();
    });
  });

  const viewEloquentBtn = document.getElementById('viewEloquentBtn');
  const viewSqlBtn = document.getElementById('viewSqlBtn');

  if (viewEloquentBtn) viewEloquentBtn.addEventListener('click', () => { activeViewMode = 'eloquent'; renderPlayground(); });
  if (viewSqlBtn) viewSqlBtn.addEventListener('click', () => { activeViewMode = 'sql'; renderPlayground(); });
}

function escapeHTML(str) {
  return str.replace(/[&<>'"]/g, 
    tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag)
  );
}
