/* ============================================================
   MAIN — Init, nav, scroll spy, cursor, copyright year
   ============================================================ */

import { initHeroAnimation, initScrollReveals } from './animations.js';
import { initProjects } from './projects.js';
import { initForm } from './form.js';
import { DESIGNER } from './data.js';

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initScrollSpy();
  initHeroAnimation();
  initScrollReveals();
  initProjects();
  initForm();
  initCursor();
  setCopyrightYear();
  renderAboutContent();
});

/* ── Navigation ──────────────────────────────────────────────── */
function initNav() {
  const nav        = document.getElementById('main-nav');
  const hamburger  = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileLinks = mobileMenu?.querySelectorAll('.mobile-menu__link');

  // Scroll: make nav opaque
  const hero = document.getElementById('home');
  if (hero && nav) {
    const heroObserver = new IntersectionObserver(
      ([entry]) => nav.classList.toggle('is-scrolled', !entry.isIntersecting),
      { threshold: 0, rootMargin: '-80px 0px 0px 0px' }
    );
    heroObserver.observe(hero);
  }

  // Hamburger toggle
  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', toggleMobileMenu);

    mobileLinks?.forEach(link => {
      link.addEventListener('click', closeMobileMenu);
    });

    // ESC closes menu
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape' && hamburger.classList.contains('is-open')) {
        closeMobileMenu();
      }
    });
  }

  function toggleMobileMenu() {
    const isOpen = hamburger.classList.toggle('is-open');
    mobileMenu.classList.toggle('is-open', isOpen);
    hamburger.setAttribute('aria-expanded', isOpen.toString());
    mobileMenu.setAttribute('aria-hidden', (!isOpen).toString());
    document.body.style.overflow = isOpen ? 'hidden' : '';
  }

  function closeMobileMenu() {
    hamburger.classList.remove('is-open');
    mobileMenu.classList.remove('is-open');
    hamburger.setAttribute('aria-expanded', 'false');
    mobileMenu.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }
}

/* ── Scroll spy ──────────────────────────────────────────────── */
function initScrollSpy() {
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav__link[data-section]');

  if (!sections.length || !navLinks.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle('is-active', link.dataset.section === id);
          });
        }
      });
    },
    { threshold: 0.3, rootMargin: '-10% 0px -60% 0px' }
  );

  sections.forEach(s => observer.observe(s));
}

/* ── About content ───────────────────────────────────────────── */
function renderAboutContent() {
  // Bio paragraphs — inject pull quote then paragraphs
  const bioEl = document.getElementById('about-bio');
  if (bioEl) {
    const pull = document.createElement('p');
    pull.className = 'about__bio-pull reveal';
    pull.textContent = DESIGNER.bioPull;
    bioEl.appendChild(pull);

    DESIGNER.bio.forEach(para => {
      const p = document.createElement('p');
      p.className = 'reveal';
      p.textContent = para;
      bioEl.appendChild(p);
    });
  }
}

/* ── Copyright year ──────────────────────────────────────────── */
function setCopyrightYear() {
  document.querySelectorAll('.js-year').forEach(el => {
    el.textContent = new Date().getFullYear();
  });
}

/* ── Custom cursor ───────────────────────────────────────────── */
function initCursor() {
  // Only on pointer devices
  if (window.matchMedia('(hover: none)').matches) return;

  const dot  = document.querySelector('.cursor-dot');
  const ring = document.querySelector('.cursor-ring');
  if (!dot || !ring) return;

  let mouseX = -100, mouseY = -100;
  let ringX  = -100, ringY  = -100;
  let rafId;

  document.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    dot.style.transform = `translate(calc(${mouseX}px - 50%), calc(${mouseY}px - 50%))`;
  });

  function animateRing() {
    ringX += (mouseX - ringX) * 0.14;
    ringY += (mouseY - ringY) * 0.14;
    ring.style.transform = `translate(calc(${ringX}px - 50%), calc(${ringY}px - 50%))`;
    rafId = requestAnimationFrame(animateRing);
  }
  animateRing();

  // Grow ring on hover
  const interactiveEls = 'a, button, [role="button"], .project-card, .filter-btn';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(interactiveEls)) ring.classList.add('is-hovering');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(interactiveEls)) ring.classList.remove('is-hovering');
  });

  // Hide cursor when it leaves the window
  document.addEventListener('mouseleave', () => { dot.style.opacity = '0'; ring.style.opacity = '0'; });
  document.addEventListener('mouseenter', () => { dot.style.opacity = '1'; ring.style.opacity = '1'; });
}
