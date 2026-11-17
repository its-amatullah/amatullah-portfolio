/* ============================================================
   DATA — All portfolio content lives here.
   Edit this file to update name, projects, skills, tools, etc.
   ============================================================ */

export const DESIGNER = {
  name: 'Amatullah Andamanwala',
  nameShort: 'Amatullah',
  initials: 'AA',
  tagline: 'Turning research into clear, intuitive and purposeful digital experiences.',
  bio: [
    'Making digital experiences more intuitive, purposeful and human.',
    'Currently designing education products at Unique Schools, pairing user insight with strong visual systems to solve real problems. I move from research and wireframes to polished high-fidelity interfaces and live HTML prototypes, using modern design tools and AI-assisted workflows.',
    'Collaborative, detail-oriented, and driven by the goal of making technology feel simple and human.',
  ],
  bioPull: 'Turning complexity into clarity.',
  availability: 'Open to new adventures in UI/UX design',
  location: 'Pune, India',
  email: 'amatullah1605@gmail.com',
  phone: '+91 8446095152',
  linkedIn: 'https://www.linkedin.com/in/amatullah-andamanwala-58b680268',
  cvPath: 'cv/Amatullah_Andamanwala_CV_Latest.pdf',
};

export const SKILLS = [
  'UX Research',
  'Interaction Design',
  'Wireframing',
  'Prototyping',
  'Visual Design',
  'Design Systems',
  'User Testing',
  'Information Architecture',
  'Service Design',
  'Accessibility',
  'Design Thinking',
  'Stakeholder Communication',
];

export const TOOLS = [
  { name: 'Figma',           icon: 'figma' },
  { name: 'Miro',            icon: 'miro' },
  { name: 'Adobe XD',        icon: 'adobexd' },
  { name: 'Illustrator',     icon: 'illustrator' },
  { name: 'Notion',          icon: 'notion' },
  { name: 'Maze',            icon: 'maze' },
  { name: 'Zeplin',          icon: 'zeplin' },
];

export const CATEGORIES = [
  { id: 'all',        label: 'All Work' },
  { id: 'professional', label: 'Professional' },
  { id: 'academic',   label: 'Academic' },
  { id: 'creative',   label: 'Creative' },
];

export const PROJECTS = [
  {
    id: 'unique-school-app',
    title: 'Unique School App',
    category: 'professional',
    shortDesc: 'SaaS platform, dashboards & web application design',
    coverGradient: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
    coverImage: null, // Replace with: 'assets/images/unique-school.jpg'
    year: '2024',
    role: 'Lead UI/UX Designer',
    tools: ['Figma', 'Miro', 'Zeplin'],
    problem: 'A growing EdTech SaaS platform needed a cohesive design language and improved information architecture across its dashboards and web modules to support different user types — students, teachers, and administrators.',
    process: 'Conducted stakeholder interviews and a heuristic evaluation of the existing platform. Mapped user journeys across the three roles, identified key friction points, and facilitated design sprints to prioritise improvements. Created high-fidelity prototypes and a component library for handoff.',
    outcome: 'Delivered a unified design system, redesigned dashboard layouts, and new product modules. Placeholder visuals used pending client approval for public sharing.',
    note: 'Professional project — anonymised visuals used with permission.',
  },
  {
    id: 'ui-ux-improvements',
    title: 'Product UI/UX Improvements',
    category: 'professional',
    shortDesc: 'Iterative design improvements across product modules',
    coverGradient: 'linear-gradient(135deg, #1c1c1c 0%, #2a1f3d 50%, #1a1a2e 100%)',
    coverImage: null,
    year: '2023–24',
    role: 'UI/UX Designer',
    tools: ['Figma', 'Adobe XD', 'Notion'],
    problem: 'Multiple product modules required iterative UI improvements to enhance usability, consistency, and visual quality across a live web application.',
    process: 'Collaborated closely with product managers and engineers. Ran usability tests on existing flows, identified drop-off points, and proposed design iterations. Maintained a shared component library to ensure consistency.',
    outcome: 'Shipped iterative design improvements across several modules. Measurable outcomes are subject to NDA; results available on request.',
    note: 'Professional project — details anonymised.',
  },
  {
    id: 'seamless-journeys',
    title: 'Seamless Journeys',
    category: 'academic',
    shortDesc: 'Smart airport experience design',
    coverGradient: 'linear-gradient(135deg, #0d1b2a 0%, #1b263b 50%, #415a77 100%)',
    coverImage: null,
    year: '2023',
    role: 'UX Designer & Researcher',
    tools: ['Figma', 'Miro', 'Maze'],
    problem: 'Airports are among the most stressful environments for travellers. This project explored how digital touchpoints and service design thinking could reduce cognitive load and anxiety throughout the airport journey.',
    process: 'Primary research through contextual observation and traveller interviews at a major airport. Synthesised insights using affinity mapping. Designed a multi-touchpoint service blueprint and a companion mobile application prototype.',
    outcome: 'Academic project: produced a full service design report, high-fidelity mobile prototype, and service blueprint. Selected for showcase at the college design exhibition.',
  },
  {
    id: 'evolve-gym',
    title: 'Evolve — Gym Experience',
    category: 'academic',
    shortDesc: 'Rethinking the gym experience through UX',
    coverGradient: 'linear-gradient(135deg, #1a0a0a 0%, #2d1515 50%, #8b2020 100%)',
    coverImage: null,
    year: '2022',
    role: 'UX Researcher & Designer',
    tools: ['Figma', 'Miro'],
    problem: 'Gym environments often intimidate new members, leading to high drop-off rates. This project investigated how thoughtful UX design — both digital and physical — could build habit and confidence in beginners.',
    process: 'Surveys and in-depth interviews with gym members and non-members. Persona development, journey mapping, and ideation workshops. Designed a mobile app prototype focused on personalised guidance and progress tracking.',
    outcome: 'Academic project: delivered research findings, user personas, journey maps, and a mobile prototype. Presented to a panel of design educators.',
  },
  {
    id: 'flo-gamification',
    title: 'Flo — App Gamification',
    category: 'academic',
    shortDesc: 'Gamification design for a wellness application',
    coverGradient: 'linear-gradient(135deg, #0a1628 0%, #0f2942 50%, #1a5276 100%)',
    coverImage: null,
    year: '2022',
    role: 'UX Designer',
    tools: ['Figma', 'Illustrator'],
    problem: 'Long-term engagement with wellness apps is notoriously difficult to sustain. This project applied game design mechanics to a wellness app concept to increase motivation and habit formation.',
    process: 'Literature review of gamification frameworks (Octalysis, SAPS). User research to understand existing engagement patterns. Designed a gamification layer — streaks, challenges, rewards — integrated into a clean wellness UI.',
    outcome: 'Academic project: produced a gamification strategy document and interactive prototype demonstrating key engagement loops.',
  },
  {
    id: 'funella',
    title: 'Funella',
    category: 'creative',
    shortDesc: 'Service design for a children\'s event concept',
    coverGradient: 'linear-gradient(135deg, #1a1200 0%, #2d2200 50%, #8b6914 100%)',
    coverImage: null,
    year: '2022',
    role: 'Service Designer',
    tools: ['Miro', 'Illustrator', 'Figma'],
    problem: 'Parents planning children\'s events face fragmented, stressful processes. Funella is a service design concept exploring how to simplify and delight the end-to-end event planning experience.',
    process: 'Service design methodology: stakeholder mapping, customer journey mapping, service blueprinting, and experience prototyping. Co-design workshops informed key touchpoints.',
    outcome: 'Academic / creative project: delivered a full service design package including blueprints, touchpoint designs, and a brand identity system.',
  },
  {
    id: 'p-town',
    title: 'P-Town',
    category: 'creative',
    shortDesc: 'Board game design & systems thinking',
    coverGradient: 'linear-gradient(135deg, #0a1a0a 0%, #142a14 50%, #1e5c1e 100%)',
    coverImage: null,
    year: '2021',
    role: 'Game Designer & Visual Designer',
    tools: ['Illustrator'],
    problem: 'P-Town began as an exploration of how game design principles — resource management, player interaction, emergent storytelling — could be applied to a city-building theme for a general audience.',
    process: 'Research into board game mechanics and urban planning concepts. Iterative playtesting with groups to refine rules. Designed all visual assets: board, cards, tokens, rulebook, and packaging.',
    outcome: 'Creative project: fully playable physical board game with complete graphic design system. Exhibited at the college design showcase.',
  },
];

export const PROCESS_STEPS = [
  {
    number: '01',
    title: 'Discover',
    description: 'Research is the foundation. I begin by understanding the problem space — conducting user interviews, competitive analysis, and stakeholder conversations to uncover real needs rather than assumed ones.'
  },
  {
    number: '02',
    title: 'Define',
    description: 'Synthesising research into clear insights. I map user journeys, build personas, and frame design problems in terms of user goals — turning data into a focused design direction.'
  },
  {
    number: '03',
    title: 'Ideate',
    description: 'Exploring the solution space widely before narrowing. Sketching, workshops, and rapid ideation to generate diverse approaches, then evaluating them against user needs and business constraints.'
  },
  {
    number: '04',
    title: 'Design',
    description: 'Translating ideas into experiences — wireframes, information architecture, interaction flows, and high-fidelity prototypes. Every decision is grounded in the research phase.'
  },
  {
    number: '05',
    title: 'Test & Refine',
    description: 'Validating with real users. Usability testing, feedback synthesis, and iteration cycles to ensure the solution genuinely works before it ships — and after.'
  },
];
