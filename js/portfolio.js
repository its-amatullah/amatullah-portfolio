/* ============================================================
   PORTFOLIO — Single bundled script (no ES modules)
   Works over file:// and any static host without a build step.
   ============================================================ */

(function () {
  'use strict';

  /* ──────────────────────────────────────────────────────────
     DATA
  ────────────────────────────────────────────────────────── */
  const DESIGNER = {
    name:         'Amatullah Andamanwala',
    nameShort:    'Amatullah',
    tagline:      'Turning research into clear, intuitive and purposeful digital experiences.',
    bioPull:      'Turning complexity into clarity.',
    bio: [
      'Making digital experiences more intuitive, purposeful and human.',
      'Currently designing education products at Unique Schools, pairing user insight with strong visual systems to solve real problems. I move from research and wireframes to polished high-fidelity interfaces and live HTML prototypes, using modern design tools and AI-assisted workflows.',
      'Collaborative, detail-oriented, and driven by the goal of making technology feel simple and human.',
    ],
    availability: 'Open to new adventures in UI/UX design',
    location:     'Pune, India',
    email:        'amatullah1605@gmail.com',
    phone:        '+91 8446095152',
    linkedIn:     'https://www.linkedin.com/in/amatullah-andamanwala-58b680268',
    cvPath:       'cv/Amatullah_Andamanwala_CV_Latest.pdf',
  };

  const CATEGORIES = [
    { id: 'all',          label: 'All Work' },
    { id: 'professional', label: 'Professional' },
    { id: 'academic',     label: 'Academic' },
    { id: 'creative',     label: 'Creative' },
  ];

  const PROJECTS = [
    {
      id: 'app-dashboard',
      title: 'App Activity Dashboard',
      category: 'professional',
      shortDesc: 'SaaS dashboard — monitoring activity & engagement across schools',
      coverGradient: 'linear-gradient(135deg, #0d1117 0%, #161b22 40%, #1f2937 100%)',
      coverImage: null,
      year: '2026',
      role: 'UI/UX Designer',
      tools: ['Figma', 'HTML/CSS'],
      casePage: 'projects/app-dashboard.html',
      problem: 'A multi-school SaaS platform needed a clear, scannable dashboard to help administrators monitor activity and engagement metrics across a large number of schools from a single view.',
      process: 'Focused on information hierarchy and data density — surfacing the most critical metrics at a glance while keeping the interface approachable. Designed a filterable, searchable dashboard with a consistent sidebar navigation pattern.',
      outcome: 'Professional project — a functional HTML prototype delivered for developer review and implementation.',
      note: 'Professional project — client details anonymised.',
    },
    {
      id: 'shop-rebuild',
      title: 'Shop Rebuild',
      category: 'professional',
      shortDesc: 'Payment module redesign — from complex form to structured flow',
      coverGradient: 'linear-gradient(135deg, #1a0f2e 0%, #2d1b4e 40%, #3d2464 100%)',
      coverImage: null,
      year: '2026',
      role: 'UI/UX Designer',
      tools: ['Figma', 'HTML/CSS'],
      casePage: 'projects/shop-rebuild.html',
      problem: 'A payment item creation flow had grown complex over time — too many fields visible at once, unclear step progression, and inconsistent grouping of related options.',
      process: 'Redesigned the flow from scratch: clearer step structure, better field grouping, improved labelling, and separation of internal and user-facing information. Produced both a before (V1) and after (V2) prototype for comparison.',
      outcome: 'Professional project — two-version HTML prototype delivered showing the original and redesigned flows side by side.',
      note: 'Professional project — client details anonymised.',
    },
    {
      id: 'student-profile',
      title: 'Student Profile',
      category: 'professional',
      shortDesc: 'Master-detail form design — student records & contact management',
      coverGradient: 'linear-gradient(135deg, #0a1628 0%, #0f2040 40%, #172d52 100%)',
      coverImage: null,
      year: '2026',
      role: 'UI/UX Designer',
      tools: ['Figma', 'HTML/CSS'],
      casePage: 'projects/student-profile.html',
      problem: 'Student record management involved multiple fragmented fields across different sections that needed to be unified into a single coherent editing experience.',
      process: 'Designed a master-detail layout grouping related fields into clear named sections. Progressive disclosure keeps the form scannable without hiding critical fields.',
      outcome: 'Professional project — functional HTML prototype delivered for developer handoff.',
      note: 'Professional project — client details anonymised.',
    },
    {
      id: 'design-gallery',
      title: 'Design Gallery',
      category: 'professional',
      shortDesc: 'Design ops — a system for publishing & managing live HTML prototypes',
      coverGradient: 'linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 40%, #252540 100%)',
      coverImage: null,
      year: '2026',
      role: 'Designer & Builder',
      tools: ['Python', 'GitHub Pages', 'HTML/CSS'],
      casePage: 'https://its-amatullah.github.io/Design-gallery/',
      problem: 'Design prototypes were scattered across tools and hard to share for developer review. A lightweight system was needed to register, version and publish HTML prototypes as live previews.',
      process: 'Conceptualised and built a Python-based workflow to generate a searchable, filterable gallery from a folder of HTML files. Published to GitHub Pages. Added search, sort, password protection, a prompt library, and an archive section.',
      outcome: 'A live, password-protected design gallery hosting 12+ prototypes — accessible to the whole team for review without any login or tool access required.',
      note: null,
    },
    {
      id: 'i-make',
      title: 'I-Make',
      category: 'academic',
      shortDesc: 'Kids game app — shapes & colours for mobile and tablet',
      coverImage: 'assets/images/projects/i-make/portfolio-page-05.jpg',
      coverGradient: 'linear-gradient(135deg, #1a2e1a 0%, #2a3d1e 50%, #1e3a0a 100%)',
      year: '2024',
      role: 'UI/UX Designer',
      tools: ['Figma'],
      casePage: 'projects/i-make.html',
      problem: 'A university project exploring a kid-friendly learning app that helps children learn, explore and experiment with basic shapes and colours through simple interactive activities.',
      process: 'Designed for both mobile and tablet, adhering to a bright, child-friendly visual language. Activities include matching shapes, matching colours, tracing, memory game, puzzle, and create-your-own. Interface kept clean and icon-driven for young users.',
      outcome: 'Academic project — delivered a mobile and tablet app design covering six interactive learning activities with a consistent kid-friendly design system.',
      note: null,
    },
    {
      id: 'evolve',
      title: 'Evolve',
      category: 'academic',
      shortDesc: 'Gym interactive display — mobile & kiosk experience',
      coverImage: 'assets/images/projects/evolve/portfolio-page-08.jpg',
      coverGradient: 'linear-gradient(135deg, #1a1a00 0%, #2a2a00 50%, #3a3000 100%)',
      year: '2024',
      role: 'UI/UX Designer',
      tools: ['Figma'],
      casePage: 'projects/evolve.html',
      problem: 'An interactive gym experience designed to help members access workout information, personalised plans, schedules and BMI reports through mobile and kiosk interfaces.',
      process: 'Designed a dark-themed, high-contrast interface for the Evolve Fitness and Wellness Club brand. Screens cover the full member journey: landing, sign-up, home, daily schedule, class schedule, exercise demonstrations, connections, and BMI reports.',
      outcome: 'Academic project — delivered a complete interactive display system available on both mobile and kiosk, with a consistent dark editorial design language matching the Evolve brand.',
      note: null,
    },
    {
      id: 'swargate',
      title: 'Swargate Kiosk',
      category: 'academic',
      shortDesc: 'Bus stand ticketing kiosk — end-to-end booking flow',
      coverImage: 'assets/images/projects/swargate/portfolio-page-11.jpg',
      coverGradient: 'linear-gradient(135deg, #2e1a0a 0%, #3d2a16 50%, #2a1800 100%)',
      year: '2024',
      role: 'UI/UX Designer',
      tools: ['Figma'],
      casePage: 'projects/swargate.html',
      problem: 'A kiosk concept for a simple, intuitive bus-ticket booking experience at Swargate Bus Stand, Pune. The goal was a clear multi-step flow accessible to a diverse range of travellers.',
      process: 'Designed a complete end-to-end booking flow: landing screen, language selection (8 languages), destination, date, bus and seat selection, passenger info, payment selection, and ticket confirmation. A consistent step-progress indicator guides users throughout.',
      outcome: 'Academic project — delivered a full kiosk UI covering the entire ticketing journey with clear wayfinding and a warm, approachable visual style.',
      note: null,
    },
    {
      id: 'flo',
      title: 'Flo — Gamification',
      category: 'academic',
      shortDesc: 'App gamification concept for a wellness platform',
      coverImage: 'assets/images/projects/flo/portfolio-page-14.jpg',
      coverGradient: 'linear-gradient(135deg, #1a0a2e 0%, #2a1040 50%, #1e0a3a 100%)',
      year: '2024',
      role: 'UI/UX Designer',
      tools: ['Figma'],
      casePage: 'projects/flo.html',
      problem: 'A gamification concept for the Flo app, exploring how interactive features could increase engagement among an 18–24 target audience.',
      process: 'Designed gamification screens including a Femina AI chatbot assistant, a quiz sequence, a celebration/congratulations screen, and a badges screen. Visual language uses soft purples and pinks consistent with the Flo brand.',
      outcome: 'Academic project — delivered a gamification layer concept with key screens demonstrating quiz, chatbot, achievement, and badge mechanics.',
      note: null,
    },
    {
      id: 'p-town',
      title: 'P-Town',
      category: 'creative',
      shortDesc: 'Board game design — The Game of Pune',
      coverImage: 'assets/images/projects/p-town/portfolio-page-17.jpg',
      coverGradient: 'linear-gradient(135deg, #0a1a0a 0%, #142a14 50%, #1e5c1e 100%)',
      year: '2024',
      role: 'Game Designer & Visual Designer',
      tools: ['Illustrator'],
      casePage: 'projects/p-town.html',
      problem: 'P-Town is a board game where players travel through Pune\'s iconic areas in an auto-rickshaw, facing challenges and obstacles on their way to the finish line. Movement is determined by a spinning wheel.',
      process: 'Designed the complete game identity and visual system: logo exploration and final logo, game cards (extra life, investment, chance, area cards), poster ideation and final poster, and the full board layout incorporating a map of Pune.',
      outcome: 'Creative project — delivered a fully playable board game with a complete visual identity, card system, board design, and branded poster. Exhibited at the college design showcase.',
      note: null,
    },
    {
      id: 'funella',
      title: 'Funella',
      category: 'creative',
      shortDesc: 'Amusement park service design & visual identity',
      coverImage: 'assets/images/projects/funella/portfolio-page-21.jpg',
      coverGradient: 'linear-gradient(135deg, #1a1200 0%, #2d2200 50%, #7a5c0a 100%)',
      year: '2024',
      role: 'Service Designer & Visual Designer',
      tools: ['Figma', 'Illustrator'],
      casePage: 'projects/funella.html',
      problem: 'Funella is an amusement park service design concept that creates a cohesive brand experience across all visitor touchpoints — from entry to rides.',
      process: 'Designed the full service experience: logo ideation and final logo, themed admission tickets, visitor bands, ride queue/wait-time screens, and final design mockups on physical surfaces. Realistic mockups unify the brand across digital and physical touchpoints.',
      outcome: 'Creative project — delivered a complete service design package including a visual identity system, ticketing system, queue screen, and physical merchandise mockups.',
      note: null,
    },
  ];

  /* ──────────────────────────────────────────────────────────
     HERO ANIMATION
  ────────────────────────────────────────────────────────── */
  function initHeroAnimation() {
    var bar    = document.querySelector('.hero__bar');
    var role   = document.querySelector('.hero__role');
    var words  = document.querySelectorAll('.hero__word');
    var quote  = document.querySelector('.hero__quote');
    var actions = document.querySelector('.hero__actions');
    var spot   = document.querySelector('.hero__spot');
    var info   = document.querySelector('.hero__info');
    var cue    = document.querySelector('.hero__cue');

    // Status bar — first to appear
    if (bar) requestAnimationFrame(function () { bar.classList.add('is-visible'); });

    // Role pill
    if (role) setTimeout(function () { role.classList.add('is-visible'); }, 300);

    // Name word clip reveals (staggered)
    words.forEach(function (word, i) {
      word.style.animationDelay          = (350 + i * 120) + 'ms';
      word.style.animationDuration       = '900ms';
      word.style.animationTimingFunction = 'cubic-bezier(0.16, 1, 0.3, 1)';
      word.style.animationFillMode       = 'forwards';
      word.style.animationName           = 'heroWordReveal';
    });

    // Quote + actions
    if (quote)   setTimeout(function () { quote.classList.add('is-visible'); }, 900);
    if (actions) setTimeout(function () { actions.classList.add('is-visible'); }, 1050);

    // Illustration
    if (spot) setTimeout(function () { spot.classList.add('is-visible'); }, 500);

    // Info strip
    if (info) setTimeout(function () { info.classList.add('is-visible'); }, 1200);

    // Scroll cue
    if (cue) setTimeout(function () { cue.classList.add('is-visible'); }, 1400);
  }

  /* ──────────────────────────────────────────────────────────
     SCROLL REVEALS
  ────────────────────────────────────────────────────────── */
  function initScrollReveals() {
    if (!('IntersectionObserver' in window)) {
      document.querySelectorAll('.reveal').forEach(function (el) {
        el.classList.add('is-visible');
      });
      return;
    }
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ──────────────────────────────────────────────────────────
     NAVIGATION
  ────────────────────────────────────────────────────────── */
  function initNav() {
    var nav        = document.getElementById('main-nav');
    var hamburger  = document.getElementById('hamburger');
    var mobileMenu = document.getElementById('mobile-menu');
    var mobileLinks = mobileMenu ? mobileMenu.querySelectorAll('.mobile-menu__link') : [];
    var hero = document.getElementById('home');

    // Opaque on scroll past hero
    if (hero && nav && 'IntersectionObserver' in window) {
      var heroObs = new IntersectionObserver(function (entries) {
        nav.classList.toggle('is-scrolled', !entries[0].isIntersecting);
      }, { threshold: 0, rootMargin: '-80px 0px 0px 0px' });
      heroObs.observe(hero);
    }

    if (!hamburger || !mobileMenu) return;

    hamburger.addEventListener('click', toggleMenu);
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', closeMenu);
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && hamburger.classList.contains('is-open')) closeMenu();
    });

    function toggleMenu() {
      var isOpen = hamburger.classList.toggle('is-open');
      mobileMenu.classList.toggle('is-open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
      mobileMenu.setAttribute('aria-hidden', String(!isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }
    function closeMenu() {
      hamburger.classList.remove('is-open');
      mobileMenu.classList.remove('is-open');
      hamburger.setAttribute('aria-expanded', 'false');
      mobileMenu.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }
  }

  /* ──────────────────────────────────────────────────────────
     SCROLL SPY
  ────────────────────────────────────────────────────────── */
  function initScrollSpy() {
    var sections = document.querySelectorAll('section[id]');
    var navLinks = document.querySelectorAll('.nav__link[data-section]');
    if (!sections.length || !navLinks.length || !('IntersectionObserver' in window)) return;

    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.id;
          navLinks.forEach(function (link) {
            link.classList.toggle('is-active', link.dataset.section === id);
          });
        }
      });
    }, { threshold: 0.3, rootMargin: '-10% 0px -60% 0px' });

    sections.forEach(function (s) { observer.observe(s); });
  }

  /* ──────────────────────────────────────────────────────────
     PROJECTS — Render grid, filter, modal
  ────────────────────────────────────────────────────────── */
  var lastFocusedCard = null;

  function renderFilterBar() {
    // Filter bar is already in HTML — just wire up event listeners
    document.querySelectorAll('.filter-btn').forEach(function (btn) {
      btn.addEventListener('click', function () { setFilter(btn.dataset.filter); });
    });
  }

  function renderProjects() {
    // Cards are already in HTML — nothing to render
  }

  function createCard(project) {
    var card = document.createElement('article');
    card.className  = 'project-card reveal';
    card.tabIndex   = 0;
    card.dataset.category = project.category;
    card.dataset.id       = project.id;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', 'View case study: ' + project.title);

    // ── Cover ──
    var cover = document.createElement('div');
    cover.className = 'project-card__cover';

    if (project.coverImage) {
      var img = document.createElement('img');
      img.className   = 'project-card__img';
      img.src         = project.coverImage;
      img.alt         = project.title + ' project cover';
      img.loading     = 'lazy';
      img.width       = 800;
      img.height      = 450;
      cover.appendChild(img);
    } else {
      var ph = document.createElement('div');
      ph.className   = 'project-card__placeholder';
      ph.style.background = project.coverGradient;
      var yr = document.createElement('span');
      yr.style.cssText = 'font-family:var(--font-mono);font-size:var(--text-xs);color:rgba(255,255,255,0.12);letter-spacing:0.15em;text-transform:uppercase;';
      yr.textContent = project.year;
      ph.appendChild(yr);
      cover.appendChild(ph);
    }

    // Hover overlay
    var overlay = document.createElement('div');
    overlay.className = 'project-card__overlay';
    overlay.setAttribute('aria-hidden', 'true');
    var cta = document.createElement('span');
    cta.className = 'project-card__cta';
    cta.innerHTML = (project.casePage ? 'View Case Study' : 'View Details') + ' <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>';
    overlay.appendChild(cta);
    cover.appendChild(overlay);

    // ── Body ──
    var body = document.createElement('div');
    body.className = 'project-card__body';

    var meta = document.createElement('div');
    meta.className = 'project-card__meta';
    var tagEl = document.createElement('span');
    tagEl.className   = 'tag tag--' + project.category;
    tagEl.textContent = project.category.charAt(0).toUpperCase() + project.category.slice(1);
    var yearMeta = document.createElement('span');
    yearMeta.style.cssText = 'font-family:var(--font-mono);font-size:var(--text-xs);color:var(--color-text-muted);letter-spacing:0.06em;';
    yearMeta.textContent = project.year;
    meta.appendChild(tagEl);
    meta.appendChild(yearMeta);

    var title = document.createElement('h3');
    title.className   = 'project-card__title';
    title.textContent = project.title;

    var desc = document.createElement('p');
    desc.className   = 'project-card__desc';
    desc.textContent = project.shortDesc;

    body.appendChild(meta);
    body.appendChild(title);
    body.appendChild(desc);

    card.appendChild(cover);
    card.appendChild(body);

    card.addEventListener('click', function () {
      if (project.casePage) {
        window.location.href = project.casePage;
      } else {
        openModal(project.id, card);
      }
    });
    card.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        if (project.casePage) {
          window.location.href = project.casePage;
        } else {
          openModal(project.id, card);
        }
      }
    });

    return card;
  }

  function setFilter(filterId) {
    document.querySelectorAll('.filter-btn').forEach(function (btn) {
      btn.classList.toggle('is-active', btn.dataset.filter === filterId);
    });
    document.querySelectorAll('.project-card').forEach(function (card) {
      var match = filterId === 'all' || card.dataset.category === filterId;
      if (match) {
        card.dataset.hidden = 'false';
        card.style.display = '';
      } else {
        card.dataset.hidden = 'true';
        card.style.display = 'none';
      }
    });
  }

  function openModal(projectId, triggerEl) {
    var project = PROJECTS.find(function (p) { return p.id === projectId; });
    if (!project) return;

    lastFocusedCard = triggerEl || null;

    var backdrop = document.getElementById('modal-backdrop');
    var modal    = document.getElementById('modal');
    var panel    = document.getElementById('modal-panel');

    document.getElementById('modal-title').textContent    = project.title;
    document.getElementById('modal-year').textContent     = project.year;
    document.getElementById('modal-role').textContent     = project.role;
    document.getElementById('modal-tools').textContent    = project.tools.join(' · ');
    var catEl = document.getElementById('modal-category');
    catEl.className   = 'tag tag--' + project.category;
    catEl.textContent = project.category.charAt(0).toUpperCase() + project.category.slice(1);
    document.getElementById('modal-problem').textContent  = project.problem;
    document.getElementById('modal-process').textContent  = project.process;
    document.getElementById('modal-outcome').textContent  = project.outcome;

    // Cover
    var coverEl = document.getElementById('modal-cover');
    coverEl.innerHTML = '';
    if (project.coverImage) {
      var img2 = document.createElement('img');
      img2.className = 'modal__cover-img';
      img2.src    = project.coverImage;
      img2.alt    = project.title + ' cover image';
      img2.width  = 1200;
      img2.height = 525;
      coverEl.appendChild(img2);
    } else {
      var ph2 = document.createElement('div');
      ph2.style.cssText = 'width:100%;height:100%;background:' + project.coverGradient + ';';
      coverEl.appendChild(ph2);
    }

    // Note
    var noteEl = document.getElementById('modal-note');
    if (noteEl) {
      if (project.note) {
        noteEl.style.display = 'flex';
        noteEl.querySelector('p').textContent = project.note;
      } else {
        noteEl.style.display = 'none';
      }
    }

    document.body.style.overflow = 'hidden';
    backdrop.classList.add('is-open');
    modal.classList.add('is-open');
    modal.removeAttribute('aria-hidden');

    var firstFocusable = panel.querySelector('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
    if (firstFocusable) setTimeout(function () { firstFocusable.focus(); }, 50);

    trapFocus(panel);
  }

  function closeModal() {
    var backdrop = document.getElementById('modal-backdrop');
    var modal    = document.getElementById('modal');
    backdrop.classList.remove('is-open');
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    if (lastFocusedCard) {
      setTimeout(function () { lastFocusedCard.focus(); }, 50);
      lastFocusedCard = null;
    }
  }

  function trapFocus(panel) {
    var sel = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    var focusable = Array.from(panel.querySelectorAll(sel));
    if (!focusable.length) return;
    var first = focusable[0], last = focusable[focusable.length - 1];
    if (panel._trapHandler) panel.removeEventListener('keydown', panel._trapHandler);
    panel._trapHandler = function (e) {
      if (e.key !== 'Tab') return;
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last)  { e.preventDefault(); first.focus(); }
      }
    };
    panel.addEventListener('keydown', panel._trapHandler);
  }

  function initProjects() {
    renderFilterBar();
    renderProjects();
    // Modal close handlers still needed for professional projects that use it
    var backdrop = document.getElementById('modal-backdrop');
    var modal    = document.getElementById('modal');
    var closeBtn = document.getElementById('modal-close');
    if (closeBtn)  closeBtn.addEventListener('click', closeModal);
    if (backdrop)  backdrop.addEventListener('click', closeModal);
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && modal && modal.classList.contains('is-open')) closeModal();
    });
  }

  /* ──────────────────────────────────────────────────────────
     ABOUT — Render bio
  ────────────────────────────────────────────────────────── */
  function renderAbout() {
    var bioEl = document.getElementById('about-bio');
    if (!bioEl) return;

    var pull = document.createElement('p');
    pull.className   = 'about__bio-pull reveal';
    pull.textContent = DESIGNER.bioPull;
    bioEl.appendChild(pull);

    DESIGNER.bio.forEach(function (para) {
      var p = document.createElement('p');
      p.className   = 'reveal';
      p.textContent = para;
      bioEl.appendChild(p);
    });
  }

  /* ──────────────────────────────────────────────────────────
     CONTACT FORM
  ────────────────────────────────────────────────────────── */
  function initForm() {
    var form      = document.getElementById('contact-form');
    var successEl = document.getElementById('form-success');
    if (!form) return;

    form.querySelectorAll('[required]').forEach(function (field) {
      field.addEventListener('blur', function () { validateField(field); });
      field.addEventListener('input', function () {
        if (field.closest('.form-group').classList.contains('has-error')) validateField(field);
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var valid = true;
      form.querySelectorAll('[required]').forEach(function (field) {
        if (!validateField(field)) valid = false;
      });
      if (!valid) return;

      var submitBtn = form.querySelector('.form-submit');
      submitBtn.classList.add('is-loading');
      submitBtn.disabled = true;

      setTimeout(function () {
        submitBtn.classList.remove('is-loading');
        form.style.opacity   = '0';
        form.style.transform = 'translateY(10px)';
        form.style.transition = 'opacity 300ms, transform 300ms';
        setTimeout(function () {
          form.style.display = 'none';
          if (successEl) successEl.classList.add('is-visible');
        }, 300);
      }, 1200);
    });
  }

  function validateField(field) {
    var group   = field.closest('.form-group');
    var error   = group && group.querySelector('.form-error');
    var value   = field.value.trim();
    var message = '';

    if (!value) {
      message = 'This field is required.';
    } else if (field.type === 'email' && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
      message = 'Please enter a valid email address.';
    } else if (field.tagName === 'TEXTAREA' && value.length < 20) {
      message = 'Please write at least 20 characters.';
    }

    if (message) {
      if (group) group.classList.add('has-error');
      if (error) error.textContent = message;
      return false;
    } else {
      if (group) group.classList.remove('has-error');
      return true;
    }
  }

  /* ──────────────────────────────────────────────────────────
     CUSTOM CURSOR
  ────────────────────────────────────────────────────────── */
  function initCursor() {
    if (window.matchMedia('(hover: none)').matches) return;
    var dot  = document.querySelector('.cursor-dot');
    var ring = document.querySelector('.cursor-ring');
    if (!dot || !ring) return;

    var mouseX = -100, mouseY = -100, ringX = -100, ringY = -100;

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = 'translate(calc(' + mouseX + 'px - 50%), calc(' + mouseY + 'px - 50%))';
    });

    (function animateRing() {
      ringX += (mouseX - ringX) * 0.14;
      ringY += (mouseY - ringY) * 0.14;
      ring.style.transform = 'translate(calc(' + ringX + 'px - 50%), calc(' + ringY + 'px - 50%))';
      requestAnimationFrame(animateRing);
    })();

    var interactiveEls = 'a, button, [role="button"], .project-card, .filter-btn';
    document.addEventListener('mouseover', function (e) {
      if (e.target.closest(interactiveEls)) {
        ring.classList.add('is-hovering');
        dot.classList.add('is-hovering');
      }
    });
    document.addEventListener('mouseout', function (e) {
      if (e.target.closest(interactiveEls)) {
        ring.classList.remove('is-hovering');
        dot.classList.remove('is-hovering');
      }
    });
    document.addEventListener('mouseleave', function () { dot.style.opacity = '0'; ring.style.opacity = '0'; });
    document.addEventListener('mouseenter', function () { dot.style.opacity = '1'; ring.style.opacity = '1'; });
  }

  /* ──────────────────────────────────────────────────────────
     MISC
  ────────────────────────────────────────────────────────── */
  function setCopyrightYear() {
    document.querySelectorAll('.js-year').forEach(function (el) {
      el.textContent = new Date().getFullYear();
    });
  }

  /* ──────────────────────────────────────────────────────────
     ROAMING MASCOT — travels to a new corner per section
  ────────────────────────────────────────────────────────── */
  function initRoamingMascot() {
    var mascot = document.querySelector('.mascot-roam');
    if (!mascot) return;
    var label = mascot.querySelector('.mascot-roam__label');

    var labels = {
      work:    'Exploring the work',
      about:   'A bit about me',
      process: 'How I work',
    };
    var stationKeys = ['work', 'about', 'process'];

    function clearStations() {
      stationKeys.forEach(function (k) { mascot.classList.remove('is-station-' + k); });
    }

    function setStation(id) {
      if (!labels[id]) {
        // Hero or unknown → hide (the big hero mascot takes over)
        mascot.classList.remove('is-active');
        clearStations();
        return;
      }
      clearStations();
      mascot.classList.add('is-station-' + id);
      if (label) label.textContent = labels[id];
      mascot.classList.add('is-active');
    }

    if (!('IntersectionObserver' in window)) return;

    // Active section = whichever crosses the viewport's centre band
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) setStation(entry.target.id);
      });
    }, { threshold: 0, rootMargin: '-40% 0px -40% 0px' });

    document.querySelectorAll('section[id]').forEach(function (s) {
      observer.observe(s);
    });
  }

  /* ──────────────────────────────────────────────────────────
     INIT
  ────────────────────────────────────────────────────────── */
  document.addEventListener('DOMContentLoaded', function () {
    initNav();
    initScrollSpy();
    initHeroAnimation();
    renderAbout();
    initScrollReveals();
    initRoamingMascot();
    initProjects();
    initCursor();
    setCopyrightYear();
  });

})();
