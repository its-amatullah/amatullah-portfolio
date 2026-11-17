/* ============================================================
   PROJECTS — Render grid, filter, and modal
   ============================================================ */

import { PROJECTS, CATEGORIES } from './data.js';

let activeFilter = 'all';
let lastFocusedCard = null;

/* ── Render filter bar ───────────────────────────────────────── */
export function renderFilterBar() {
  const bar = document.getElementById('filter-bar');
  if (!bar) return;

  CATEGORIES.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = 'filter-btn' + (cat.id === 'all' ? ' is-active' : '');
    btn.textContent = cat.label;
    btn.dataset.filter = cat.id;
    btn.addEventListener('click', () => setFilter(cat.id));
    bar.appendChild(btn);
  });
}

/* ── Render project grid ─────────────────────────────────────── */
export function renderProjects() {
  const grid = document.getElementById('project-grid');
  if (!grid) return;

  PROJECTS.forEach(project => {
    const card = createCard(project);
    grid.appendChild(card);
  });
}

function createCard(project) {
  const card = document.createElement('article');
  card.className = 'project-card reveal';
  card.tabIndex = 0;
  card.dataset.category = project.category;
  card.dataset.id = project.id;
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `View case study: ${project.title}`);

  // Cover
  const cover = document.createElement('div');
  cover.className = 'project-card__cover';

  if (project.coverImage) {
    const img = document.createElement('img');
    img.className = 'project-card__img';
    img.src = project.coverImage;
    img.alt = `${project.title} project cover`;
    img.loading = 'lazy';
    img.width = 800;
    img.height = 450;
    cover.appendChild(img);
  } else {
    const placeholder = document.createElement('div');
    placeholder.className = 'project-card__placeholder';
    placeholder.style.background = project.coverGradient;

    // Year watermark
    const year = document.createElement('span');
    year.style.cssText = `
      font-family: var(--font-mono);
      font-size: var(--text-xs);
      color: rgba(255,255,255,0.15);
      letter-spacing: 0.15em;
      text-transform: uppercase;
    `;
    year.textContent = project.year;
    placeholder.appendChild(year);
    cover.appendChild(placeholder);
  }

  // Hover overlay
  const overlay = document.createElement('div');
  overlay.className = 'project-card__overlay';
  overlay.setAttribute('aria-hidden', 'true');
  const cta = document.createElement('span');
  cta.className = 'project-card__cta';
  cta.innerHTML = `View Case Study <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>`;
  overlay.appendChild(cta);
  cover.appendChild(overlay);

  // Body
  const body = document.createElement('div');
  body.className = 'project-card__body';

  const meta = document.createElement('div');
  meta.className = 'project-card__meta';
  const tagEl = document.createElement('span');
  tagEl.className = `tag tag--${project.category}`;
  tagEl.textContent = project.category.charAt(0).toUpperCase() + project.category.slice(1);
  const yearMeta = document.createElement('span');
  yearMeta.className = 'project-card__meta-year';
  yearMeta.style.cssText = 'font-family: var(--font-mono); font-size: var(--text-xs); color: var(--color-text-muted); letter-spacing: 0.06em;';
  yearMeta.textContent = project.year;
  meta.appendChild(tagEl);
  meta.appendChild(yearMeta);

  const title = document.createElement('h3');
  title.className = 'project-card__title';
  title.textContent = project.title;

  const desc = document.createElement('p');
  desc.className = 'project-card__desc';
  desc.textContent = project.shortDesc;

  body.appendChild(meta);
  body.appendChild(title);
  body.appendChild(desc);

  card.appendChild(cover);
  card.appendChild(body);

  // Open modal on click or Enter/Space
  card.addEventListener('click', () => openModal(project.id, card));
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      openModal(project.id, card);
    }
  });

  return card;
}

/* ── Filter ──────────────────────────────────────────────────── */
function setFilter(filterId) {
  activeFilter = filterId;

  // Update buttons
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('is-active', btn.dataset.filter === filterId);
  });

  // Show/hide cards
  document.querySelectorAll('.project-card').forEach(card => {
    const match = filterId === 'all' || card.dataset.category === filterId;
    card.dataset.hidden = match ? 'false' : 'true';
  });
}

/* ── Modal ───────────────────────────────────────────────────── */
function openModal(projectId, triggerEl) {
  const project = PROJECTS.find(p => p.id === projectId);
  if (!project) return;

  lastFocusedCard = triggerEl || null;

  const backdrop = document.getElementById('modal-backdrop');
  const modal    = document.getElementById('modal');
  const panel    = document.getElementById('modal-panel');

  // Populate
  document.getElementById('modal-title').textContent        = project.title;
  document.getElementById('modal-year').textContent         = project.year;
  document.getElementById('modal-role').textContent         = project.role;
  document.getElementById('modal-tools').textContent        = project.tools.join(' · ');
  document.getElementById('modal-category').className       = `tag tag--${project.category}`;
  document.getElementById('modal-category').textContent     = project.category.charAt(0).toUpperCase() + project.category.slice(1);
  document.getElementById('modal-problem').textContent      = project.problem;
  document.getElementById('modal-process').textContent      = project.process;
  document.getElementById('modal-outcome').textContent      = project.outcome;

  // Cover
  const coverEl = document.getElementById('modal-cover');
  coverEl.innerHTML = '';
  if (project.coverImage) {
    const img = document.createElement('img');
    img.className = 'modal__cover-img';
    img.src = project.coverImage;
    img.alt = `${project.title} cover image`;
    img.width = 1200;
    img.height = 525;
    coverEl.appendChild(img);
  } else {
    const ph = document.createElement('div');
    ph.style.cssText = `width:100%;height:100%;background:${project.coverGradient};`;
    coverEl.appendChild(ph);
  }

  // Note
  const noteEl = document.getElementById('modal-note');
  if (noteEl) {
    noteEl.style.display = project.note ? 'flex' : 'none';
    if (project.note) noteEl.querySelector('p').textContent = project.note;
  }

  // Open
  document.body.style.overflow = 'hidden';
  backdrop.classList.add('is-open');
  modal.classList.add('is-open');
  modal.removeAttribute('aria-hidden');
  panel.setAttribute('aria-modal', 'true');

  // Focus management
  const firstFocusable = panel.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
  if (firstFocusable) setTimeout(() => firstFocusable.focus(), 50);

  trapFocus(panel);
}

export function closeModal() {
  const backdrop = document.getElementById('modal-backdrop');
  const modal    = document.getElementById('modal');

  backdrop.classList.remove('is-open');
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';

  if (lastFocusedCard) {
    setTimeout(() => lastFocusedCard.focus(), 50);
    lastFocusedCard = null;
  }
}

function trapFocus(panel) {
  const focusableSelectors = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
  const focusableEls = [...panel.querySelectorAll(focusableSelectors)];
  const firstEl = focusableEls[0];
  const lastEl  = focusableEls[focusableEls.length - 1];

  panel._trapHandler = function(e) {
    if (e.key !== 'Tab') return;
    if (e.shiftKey) {
      if (document.activeElement === firstEl) { e.preventDefault(); lastEl.focus(); }
    } else {
      if (document.activeElement === lastEl)  { e.preventDefault(); firstEl.focus(); }
    }
  };
  panel.addEventListener('keydown', panel._trapHandler);
}

/* ── Init ────────────────────────────────────────────────────── */
export function initProjects() {
  renderFilterBar();
  renderProjects();

  const backdrop = document.getElementById('modal-backdrop');
  const modal    = document.getElementById('modal');
  const closeBtn = document.getElementById('modal-close');

  if (closeBtn)  closeBtn.addEventListener('click', closeModal);
  if (backdrop)  backdrop.addEventListener('click', closeModal);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal?.classList.contains('is-open')) closeModal();
  });
}
