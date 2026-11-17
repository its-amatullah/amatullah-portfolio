/* ============================================================
   ANIMATIONS — Hero reveal, scroll-triggered reveals
   ============================================================ */

/* ── Hero load sequence ──────────────────────────────────────── */
export function initHeroAnimation() {
  const bar    = document.querySelector('.hero__bar');
  const intro  = document.querySelector('.hero__intro');
  const words  = document.querySelectorAll('.hero__word');
  const spot   = document.querySelector('.hero__spot');
  const info   = document.querySelector('.hero__info');
  const cue    = document.querySelector('.hero__cue');

  // Status bar — first thing to appear
  if (bar) requestAnimationFrame(() => bar.classList.add('is-visible'));

  // Identity block container fade
  if (intro) {
    setTimeout(() => intro.classList.add('is-visible'), 250);
  }

  // Word clip reveals (staggered)
  words.forEach((word, i) => {
    word.style.animationDelay = `${350 + i * 120}ms`;
    word.style.animationDuration = '900ms';
    word.style.animationTimingFunction = 'cubic-bezier(0.16, 1, 0.3, 1)';
    word.style.animationFillMode = 'forwards';
    word.style.animationName = 'heroWordReveal';
  });

  // Mascot spotlight card
  if (spot) setTimeout(() => spot.classList.add('is-visible'), 600);

  // Info strip
  if (info) setTimeout(() => info.classList.add('is-visible'), 1200);

  // Scroll cue
  if (cue) setTimeout(() => cue.classList.add('is-visible'), 1400);
}

/* ── Scroll reveal (IntersectionObserver) ────────────────────── */
export function initScrollReveals() {
  if (!('IntersectionObserver' in window)) {
    // Fallback: make everything visible
    document.querySelectorAll('.reveal').forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}
