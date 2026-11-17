/* ============================================================
   CASE STUDY PAGE — Shared JS (nav scroll, sidebar spy, year)
   ============================================================ */
(function () {
  'use strict';

  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initSidebarSpy();
    initScrollReveals();
    setCopyrightYear();
    initCursor();
  });

  /* ── Nav scroll ────────────────────────────────────────────── */
  function initNav() {
    var nav = document.getElementById('main-nav');
    if (!nav) return;
    var sentinel = document.querySelector('.cs-hero');
    if (!sentinel || !('IntersectionObserver' in window)) return;
    var obs = new IntersectionObserver(function (entries) {
      nav.classList.toggle('is-scrolled', !entries[0].isIntersecting);
    }, { threshold: 0, rootMargin: '-80px 0px 0px 0px' });
    obs.observe(sentinel);
  }

  /* ── Sidebar scroll spy ────────────────────────────────────── */
  function initSidebarSpy() {
    var links = document.querySelectorAll('.cs-sidebar__link[href^="#"]');
    if (!links.length || !('IntersectionObserver' in window)) return;

    var sectionIds = Array.from(links).map(function (l) { return l.getAttribute('href').slice(1); });
    var sections = sectionIds.map(function (id) { return document.getElementById(id); }).filter(Boolean);

    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          links.forEach(function (l) {
            l.classList.toggle('is-active', l.getAttribute('href') === '#' + entry.target.id);
          });
        }
      });
    }, { threshold: 0.4, rootMargin: '-10% 0px -60% 0px' });

    sections.forEach(function (s) { obs.observe(s); });
  }

  /* ── Scroll reveals ────────────────────────────────────────── */
  function initScrollReveals() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(function (el) { el.classList.add('is-visible'); });
      return;
    }
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) { entry.target.classList.add('is-visible'); obs.unobserve(entry.target); }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -30px 0px' });
    document.querySelectorAll('.reveal').forEach(function (el) { obs.observe(el); });
  }

  /* ── Year ──────────────────────────────────────────────────── */
  function setCopyrightYear() {
    document.querySelectorAll('.js-year').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ── Cursor ────────────────────────────────────────────────── */
  function initCursor() {
    if (window.matchMedia('(hover: none)').matches) return;
    var dot = document.querySelector('.cursor-dot');
    var ring = document.querySelector('.cursor-ring');
    if (!dot || !ring) return;
    var mouseX = -100, mouseY = -100, ringX = -100, ringY = -100;
    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX; mouseY = e.clientY;
      dot.style.transform = 'translate(calc(' + mouseX + 'px - 50%), calc(' + mouseY + 'px - 50%))';
    });
    (function loop() {
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;
      ring.style.transform = 'translate(calc(' + ringX + 'px - 50%), calc(' + ringY + 'px - 50%))';
      requestAnimationFrame(loop);
    })();
    var sel = 'a, button, [role="button"]';
    document.addEventListener('mouseover', function (e) {
      if (e.target.closest(sel)) {
        ring.classList.add('is-hovering');
        dot.classList.add('is-hovering');
      }
    });
    document.addEventListener('mouseout',  function (e) {
      if (e.target.closest(sel)) {
        ring.classList.remove('is-hovering');
        dot.classList.remove('is-hovering');
      }
    });
  }

})();
