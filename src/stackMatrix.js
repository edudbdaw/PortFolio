/**
 * Eduardo Duran — Interactive Tech Stack Matrix
 * Upgraded with Shadcn Tabs counter badges and card primitives
 */

const stackData = [
  // Backend & DB
  { name: 'PHP 8.4', category: 'backend', categoryLabel: 'Backend', icon: 'img/php.svg', projects: ['FUT Telescope', 'Mercadillos', 'Game Catalog'] },
  { name: 'Laravel 12', category: 'backend', categoryLabel: 'Framework', icon: 'img/Laravel.svg.png', projects: ['Mercadillos La Palma'] },
  { name: 'Python', category: 'backend', categoryLabel: 'Backend', icon: 'svg-python', projects: ['Certified Developer', 'Data Scripts'] },
  { name: 'Java', category: 'backend', categoryLabel: 'Backend', icon: 'img/java2.png', projects: ['DAW Projects'] },
  { name: 'JavaScript', category: 'backend', categoryLabel: 'Core', icon: 'img/js.png', projects: ['FUT Telescope', 'Los Simpson', 'Notas'] },
  { name: 'MySQL', category: 'backend', categoryLabel: 'Database', icon: 'img/logo-mysql-170x115.png', projects: ['Mercadillos', 'Game Catalog'] },
  { name: 'PostgreSQL', category: 'backend', categoryLabel: 'Database', icon: 'svg-postgres', projects: ['FUT Telescope'] },

  // Frontend & UI
  { name: 'Vue.js', category: 'frontend', categoryLabel: 'Frontend', icon: 'svg-vue', projects: ['Inertia/Vue Apps'] },
  { name: 'Tailwind CSS', category: 'frontend', categoryLabel: 'Styling', icon: 'img/tailwindcss-mark.d52e9897.svg', projects: ['Mercadillos', 'Portfolio', 'Catalog'] },
  { name: 'Bootstrap', category: 'frontend', categoryLabel: 'UI Kit', icon: 'img/Bootstrap_logo.svg', projects: ['UI Kits'] },
  { name: 'HTML5', category: 'frontend', categoryLabel: 'Web', icon: 'img/html.png', projects: ['All Projects'] },
  { name: 'CSS3 / SASS', category: 'frontend', categoryLabel: 'Styling', icon: 'img/css-3.png', projects: ['Custom Design Systems'] },

  // DevOps & Tools
  { name: 'Docker', category: 'devops', categoryLabel: 'Containers', icon: 'img/Docker-Logos/docker-logos/SVG/docker-mark-blue.svg', projects: ['Containerized Environments'] },
  { name: 'Git', category: 'devops', categoryLabel: 'VCS', icon: 'svg-git', projects: ['Version Control'] },
  { name: 'GitHub', category: 'devops', categoryLabel: 'CI/CD', icon: 'img/github-mark.svg', projects: ['Repositories'] }
];

export function renderStackMatrix(filterCategory = 'all') {
  const container = document.getElementById('stackMatrixGrid');
  if (!container) return;

  const filteredItems = filterCategory === 'all' 
    ? stackData 
    : stackData.filter(item => item.category === filterCategory);

  container.innerHTML = filteredItems.map(item => `
    <div class="stack-card glass-card-hover" data-category="${item.category}">
      <div class="stack-card-top">
        <span class="stack-category-badge">${item.categoryLabel}</span>
      </div>
      ${renderIcon(item.icon, item.name)}
      <span class="stack-card-name">${item.name}</span>
      <span class="stack-card-project">
        ${item.projects[0]}
      </span>
    </div>
  `).join('');
}

function renderIcon(iconPath, altName) {
  if (iconPath === 'svg-python') {
    return `<svg class="stack-icon" viewBox="0 0 256 255" xmlns="http://www.w3.org/2000/svg">
      <defs><linearGradient id="py-a" x1="12.959%" y1="12.039%" x2="79.639%" y2="78.201%"><stop stop-color="#387EB8" offset="0%"/><stop stop-color="#366994" offset="100%"/></linearGradient><linearGradient id="py-b" x1="19.128%" y1="20.579%" x2="90.742%" y2="88.429%"><stop stop-color="#FFE052" offset="0%"/><stop stop-color="#FFC331" offset="100%"/></linearGradient></defs>
      <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072z" fill="url(#py-a)"/>
      <path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.518 33.897z" fill="url(#py-b)"/>
    </svg>`;
  }
  if (iconPath === 'svg-postgres') {
    return `<svg class="stack-icon" viewBox="0 0 432.071 445.383" xmlns="http://www.w3.org/2000/svg">
      <path d="M323.205,324.227c2.833-23.601,1.984-27.062,19.563-23.239l4.463,0.392c13.517,0.615,31.199-2.174,41.587-7c22.362-10.376,35.622-27.7,13.572-23.148c-50.297,10.376-53.755-6.655-53.755-6.655c53.111-78.803,75.313-178.836,56.149-203.322C352.514-5.534,262.036,26.049,260.522,26.869l-0.482,0.089c-9.938-2.062-21.06-3.294-33.554-3.496c-22.761-0.374-40.032,5.967-53.133,15.904c0,0-161.408-66.498-153.899,83.628c1.597,31.936,45.777,241.655,98.47,178.31c19.259-23.163,37.871-42.748,37.871-42.748c9.242,6.14,20.307,9.272,31.912,8.147l0.897-0.765c-0.281,2.876-0.157,5.689,0.359,9.019c-13.572,15.167-9.584,17.83-36.723,23.416c-27.457,5.659-11.326,15.734-0.797,18.367c12.768,3.193,42.305,7.716,62.268-20.224l-0.795,3.188c5.325,4.26,4.965,30.619,5.72,49.452c0.756,18.834,2.017,36.409,5.856,46.771c3.839,10.36,8.369,37.05,44.036,29.406c29.809-6.388,52.6-15.582,54.677-101.107" fill="#336791"/>
    </svg>`;
  }
  if (iconPath === 'svg-vue') {
    return `<svg class="stack-icon" viewBox="0 0 261.76 226.69" xmlns="http://www.w3.org/2000/svg">
      <path d="M161.096.001l-30.225 52.351L100.647.001H0l130.871 226.69L261.762.001z" fill="#41b883"/>
      <path d="M161.096.001l-30.225 52.351L100.647.001H52.346l78.526 136.01L209.398.001z" fill="#34495e"/>
    </svg>`;
  }
  if (iconPath === 'svg-git') {
    return `<svg class="stack-icon" viewBox="0 0 256 256" xmlns="http://www.w3.org/2000/svg">
      <path d="M251.172 116.594L139.4 4.828c-6.433-6.437-16.873-6.437-23.314 0l-23.21 23.21 29.443 29.443c6.842-2.312 14.688-.761 20.142 4.693 5.48 5.489 7.02 13.402 4.652 20.266l28.375 28.376c6.865-2.365 14.786-.835 20.269 4.657 7.663 7.66 7.663 20.075 0 27.74-7.665 7.666-20.08 7.666-27.749 0-5.764-5.77-7.188-14.235-4.27-21.336l-26.462-26.462-.003 69.637c1.871.907 3.628 2.09 5.186 3.649 7.66 7.66 7.66 20.076 0 27.747-7.665 7.662-20.086 7.662-27.74 0-7.663-7.671-7.663-20.086 0-27.746 1.97-1.966 4.255-3.428 6.7-4.354v-70.25c-2.445-.926-4.727-2.39-6.7-4.357-5.8-5.8-7.212-14.317-4.227-21.446L81.47 39.442l-76.64 76.635c-6.44 6.443-6.44 16.884 0 23.322l111.774 111.768c6.435 6.438 16.873 6.438 23.316 0l111.251-111.249c6.438-6.44 6.438-16.887 0-23.324" fill="#DE4C36"/>
    </svg>`;
  }

  return `<img class="stack-icon" src="${iconPath}" alt="${altName}" loading="lazy" decoding="async">`;
}

export function updateStackCounts() {
  const allCount = stackData.length;
  const backendCount = stackData.filter(i => i.category === 'backend').length;
  const frontendCount = stackData.filter(i => i.category === 'frontend').length;
  const devopsCount = stackData.filter(i => i.category === 'devops').length;

  const countMap = {
    all: allCount,
    backend: backendCount,
    frontend: frontendCount,
    devops: devopsCount
  };

  document.querySelectorAll('.stack-filter-btn').forEach(btn => {
    const filter = btn.getAttribute('data-filter');
    const countBadge = btn.querySelector('.tab-count');
    if (countBadge && countMap[filter] !== undefined) {
      countBadge.textContent = countMap[filter];
    }
  });
}

export function initStackMatrixFilter() {
  const filterBtns = document.querySelectorAll('.stack-filter-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const category = btn.getAttribute('data-filter');
      renderStackMatrix(category);
    });
  });

  // Calculate dynamic counts
  updateStackCounts();

  // Render initial matrix
  renderStackMatrix('all');
}
