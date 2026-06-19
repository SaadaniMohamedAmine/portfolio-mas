// ── Utils ─────────────────────────────────────────────────────────────────────
export const toSlug = (s: string) =>
  s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

// ── Types ────────────────────────────────────────────────────────────────────

export interface Stat       { value: string; label: string }
export interface HeroData   { greeting: string; name: string[]; title: string; summary: string; stats: Stat[] }

export interface DetailItem { icon: string; label: string; value: string; href: string | null }
export interface Language   { name: string; level: string; highlight: boolean }
export interface AboutData  { paragraphs: string[]; details: DetailItem[]; languages: Language[] }

export interface ExperienceItem {
  role: string; company: string; location: string; period: string; bullets: string[]
}

export interface Capability { capability: string; what: string }

export interface ProjectDetails {
  longDescription: string;
  highlights: string[];
  status: 'Live' | 'In Progress' | 'Completed';
  github?: string;
  live?: string;
  videoEmbed?: string;
  playground?: string;
  docs?: string;
  statusPage?: string;
  capabilities?: Capability[];
}

export interface ProjectItem {
  icon: string; title: string; description: string; metrics: string[]; stack: string[];
  category: string;
  logoImage?: string;
  published?: boolean;
  details: ProjectDetails;
}

export interface ProjectCategory {
  id: string; iconName: string; label: string; description: string;
}

export interface SkillCategory { icon: string; category: string; items: string[] }

export interface ContactData {
  email: string; phone: string; linkedin: string; location: string
}

export interface FooterData { text: string; subtext: string }

// ── Data ─────────────────────────────────────────────────────────────────────

export const nav: string[] = ['About', 'Experience', 'Projects', 'Skills', 'Chat', 'Contact']

export const hero: HeroData = {
  greeting: '👋 Welcome to my portfolio',
  name: ['Mohamed Amine', 'Saadani'],
  title: 'Senior Front-End Developer · Product Tech Manager',
  summary: 'Building high-performance web applications and leading Agile teams. 4+ years turning complex product visions into elegant, scalable digital experiences.',
  stats: [
    { value: '4+',  label: 'Years Experience' },
    { value: '40%', label: 'Core Web Vitals'  },
    { value: '30%', label: 'Faster MVPs'      },
    { value: '5K+', label: 'Daily Users'      },
  ],
}

export const about: AboutData = {
  paragraphs: [
    "I'm a Senior Front-End Developer and Product Tech Manager with 4 years of experience building high-performance web applications using modern JavaScript frameworks — primarily React.js and Next.js.",
    "My edge is bridging the gap between engineering and product: I optimize Core Web Vitals, architect scalable UIs, and simultaneously lead cross-functional Agile teams to deliver products that resonate with users and business stakeholders alike.",
    "I've worked across the full product lifecycle — from ideation and roadmaps to production-grade releases — always obsessing over performance, code quality, and user experience.",
  ],
  details: [
    { icon: '📍', label: 'Location',    value: 'Monastir, Tunisia',                                    href: null },
    { icon: '🎓', label: 'Education',   value: 'Bachelor of Electronics · ISSAT Sousse\nFull Stack JS · GoMyCode', href: null },
    { icon: '💼', label: 'Latest Role', value: 'Product Tech Manager @ WayConnect',                    href: null },
    { icon: '✉️', label: 'Email',       value: 'mohamedaminesaadani79@gmail.com',                      href: 'mailto:mohamedaminesaadani79@gmail.com' },
    { icon: '🔗', label: 'LinkedIn',    value: 'linkedin.com/in/mohamed-amine-saadani',                href: 'https://www.linkedin.com/in/mohamed-amine-saadani/' },
  ],
  languages: [
    { name: 'Arabic',  level: 'Native', highlight: true  },
    { name: 'French',  level: 'Fluent', highlight: true  },
    { name: 'English', level: 'Fluent', highlight: true  },
    { name: 'German',  level: 'Basic',  highlight: false },
  ],
}

export const experience: ExperienceItem[] = [
  {
    role: 'Product Tech Manager',
    company: 'WayConnect',
    location: 'Sousse, Tunisia',
    period: 'Oct 2023 – Dec 2025',
    bullets: [
      'Defined and executed Agile-driven product strategy across customer service, web dev, QA & UI/UX teams.',
      'Led product vision, roadmap planning and stakeholder alignment — translating business goals into actionable dev tasks.',
      'Facilitated Sprint Planning, Stand-ups and Retrospectives, accelerating cross-team feature delivery.',
    ],
  },
  {
    role: 'Senior Front-End Developer',
    company: 'WayConnect',
    location: 'Sousse, Tunisia',
    period: 'Mar 2022 – Sep 2023',
    bullets: [
      'Built scalable, high-performance front-end game applications with React.js.',
      'Implemented modern UI/UX with Tailwind CSS and Material UI — consistent across all devices.',
      'Improved Core Web Vitals by 30% via lazy loading, code splitting and performance best practices.',
    ],
  },
  {
    role: 'Full Stack JS Developer',
    company: 'Pixelium',
    location: 'Tunis, Tunisia',
    period: 'Aug 2021 – Dec 2021',
    bullets: [
      'Built a job-worker matching platform for 5,000+ daily users using Meteor.js (React), Node.js, MongoDB.',
      'Developed React employer dashboard — reduced average hiring time by 65%.',
      'Engineered geolocation job search with MongoDB $geoNear, increasing worker engagement by 30%.',
      'Cut server response time by 50% through optimized Meteor publications and MongoDB queries.',
    ],
  },
  {
    role: 'Full Stack JS Developer',
    company: 'GoMyCode',
    location: 'Tunis, Tunisia',
    period: 'Aug 2020 – Dec 2020',
    bullets: [
      'Built a MERN-stack e-learning platform for 3,000+ students with 95% uptime.',
      'Reduced page load time by 40% with code-splitting and lazy loading in React.',
      'Designed RESTful APIs handling 50+ concurrent requests/sec for video streaming and quizzes.',
    ],
  },
  {
    role: 'Senior Technician in Electronics',
    company: 'PSZ-SARL Tunisia',
    location: 'Monastir, Tunisia',
    period: 'Aug 2020 – Dec 2020',
    bullets: [
      'Led preventive maintenance initiatives for electronic systems and equipment.',
      'Performed correlative interventions to maintain smooth operations and minimize system failures.',
      'Optimized electrical test modules, enhancing testing efficiency and accuracy.',
    ],
  },
]

export const projectCategories: ProjectCategory[] = [
  {
    id: 'ai', iconName: 'Bot', label: 'AI-Powered',
    description: 'Applications intelligentes intégrant des LLMs, du traitement du langage naturel et des pipelines de données — de l\'analyse de code à la génération de contenu en passant par la transcription de réunions.',
  },
  {
    id: 'frontend', iconName: 'Zap', label: 'Frontend Showcases',
    description: 'Expériences UI haute-performance — design systems, data visualizations interactives, jeux browser et librairies d\'animation CSS — toutes optimisées pour les Core Web Vitals.',
  },
  {
    id: 'saas', iconName: 'LayoutDashboard', label: 'SaaS & Dashboards',
    description: 'Plateformes SaaS complètes et tableaux de bord analytiques : CRM, e-learning, RH, e-commerce et marketing — construits pour la scalabilité et la conversion.',
  },
  {
    id: 'realtime', iconName: 'Radio', label: 'Real-Time',
    description: 'Applications temps réel à haute disponibilité — matching géolocalisé, collaboration multi-utilisateurs, suivi de prix live — propulsées par WebSockets et Meteor.',
  },
  {
    id: 'devtools', iconName: 'Wrench', label: 'Developer Tools',
    description: 'Outils construits pour les développeurs : scaffolding CLI, serveurs mock API et gestionnaires de snippets — pour accélérer le workflow et standardiser les pratiques.',
  },
  {
    id: 'product', iconName: 'Package', label: 'Product-Led',
    description: 'Projets à impact produit mesurable — stratégie Agile, billing SaaS, PWA offline-first et funnels d\'onboarding optimisés pour la conversion trial-to-paid.',
  },
]

export const projects: ProjectItem[] = [
  // ── AI-POWERED ─────────────────────────────────────────────────────────────
  {
    icon: 'Code2',
    title: 'PulseAI',
    description: 'Full-stack SaaS platform that puts a senior-level AI reviewer inside every pull request — dual-AI engine, one-click auto-fix, and a full production SaaS shell.',
    metrics: ['Dual-AI Engine', '41 API Routes', '4-Tier Billing', 'Production-Grade'],
    stack: ['Next.js 16', 'React 19', 'Groq Llama 3.3', 'Gemini 2.0', 'Stripe', 'Prisma', 'Neon Postgres', 'Upstash Redis', 'NextAuth v5', 'Tailwind v4', 'Vitest', 'Playwright'],
    category: 'ai',
    logoImage: '/ai-code-reviewer.svg',
    published: true,
    details: {
      longDescription: 'PulseAI is an AI-Powered Code Review & Auto-Fix Platform built as a full production SaaS — not a portfolio prototype. It analyzes source code from a GitHub repository, an uploaded file, or a pasted snippet using two large language models in tandem (Groq Llama 3.3 70B and Google Gemini 2.0 Flash). It detects security, performance, correctness, and style issues, scores the codebase, and generates one-click fixes with confidence ratings — all wrapped in a commercial-grade SaaS shell: authentication, billing, team management, and observability.',
      highlights: [
        'Dual-AI reasoning — Groq Llama 3.3 70B primary with Gemini 2.0 Flash automatic fallback for resilience',
        'One-click AI auto-fix with before/after diff viewer and per-fix model confidence score',
        'Three input modes — GitHub URL, file upload, or direct paste — unified in one analysis pipeline',
        'In-context AI chat for conversational follow-up on any finding',
        '4-tier Stripe billing (Free · Pro · Team · Enterprise) with team seats and org roles',
        'Public REST API v1, CLI tool, GitHub Action, and embeddable README score badges',
        'Full CI/CD pipeline — lint, typecheck, Vitest unit + Playwright E2E on every push',
        'Sentry error monitoring, Vercel Analytics, UptimeRobot health polling, Upstash rate-limiting',
      ],
      status: 'Live',
      live:       'https://ai-code-reviewer-seven-sigma.vercel.app',
      github:     'https://github.com/SaadaniMohamedAmine/ai-code-reviewer',
      playground: 'https://ai-code-reviewer-seven-sigma.vercel.app/playground',
      docs:       'https://ai-code-reviewer-seven-sigma.vercel.app/docs',
      statusPage: 'https://ai-code-reviewer-seven-sigma.vercel.app/status',
      videoEmbed: 'https://drive.google.com/file/d/1_kuJHVjvROlqgNzZubeIKg34Or9UXtXT/preview',
      capabilities: [
        { capability: 'Multi-source analysis',   what: 'Analyze code via GitHub URL, file upload, or direct paste — three entry points, one pipeline.' },
        { capability: 'AI Auto-Fix',             what: 'One-click remediation with a before/after diff viewer and a model confidence score per fix.' },
        { capability: 'Dual-AI Reasoning',       what: 'Groq Llama 3.3 70B as primary engine with Google Gemini 2.0 Flash as automatic fallback.' },
        { capability: 'In-context AI Chat',      what: 'Conversational follow-up on any analysis — ask the model to explain or extend a finding.' },
        { capability: 'Developer Intelligence',  what: 'Analytics dashboard with score trends, issue distribution, and exportable PDF reports.' },
        { capability: 'Public Playground',       what: 'No-signup code analysis for prospects, with usage-based conversion prompts.' },
        { capability: 'Team Workspace',          what: 'Org roles, shared history, team-level analytics, and member invitations.' },
        { capability: 'Integration Layer',       what: 'Native hooks for Jira and Linear to push findings directly into existing workflows.' },
        { capability: 'Open Ecosystem',          what: 'Public REST API (v1), a CLI tool, a GitHub Action, and embeddable README score badges.' },
        { capability: 'White-label Branding',    what: 'Custom logo and color theming for agencies and enterprise resale.' },
      ],
    },
  },
  {
    icon: 'FileText',
    title: 'AI Resume Analyzer',
    description: 'Upload a CV and a job description — AI scores the match, highlights gaps, and rewrites weak sections to boost application success.',
    metrics: ['+35% match rate', 'ATS-optimized', '3s analysis'],
    stack: ['Next.js', 'OpenAI API', 'PDF.js', 'Tailwind CSS'],
    category: 'ai',
    details: {
      longDescription: 'Candidates upload their resume and a target job description. The AI engine scores keyword alignment, identifies missing skills, and rewrites underperforming bullet points using industry-standard phrasing.',
      highlights: ['ATS keyword scoring against job postings', 'AI-powered bullet point rewriter', 'Skills gap heatmap visualization', 'Export optimized resume as PDF'],
      status: 'Completed',
    },
  },
  {
    icon: 'PenTool',
    title: 'AI Content Generator',
    description: 'SaaS platform generating SEO-optimized blog posts, social copy, and product descriptions from a simple prompt.',
    metrics: ['10K+ outputs/mo', '8 content types', 'SEO scoring'],
    stack: ['React', 'GPT-4o', 'Express.js', 'MongoDB'],
    category: 'ai',
    details: {
      longDescription: 'A multi-format content generation SaaS. Users provide a topic and tone, and the platform produces ready-to-publish blog articles, LinkedIn posts, email newsletters, and product descriptions — each scored for SEO quality.',
      highlights: ['8 content formats supported', 'Built-in Flesch readability score', 'Bulk generation mode (up to 50 pieces)', 'Stripe billing with usage-based pricing'],
      status: 'Completed',
    },
  },
  {
    icon: 'MessageSquare',
    title: 'AI Chat Support Bot',
    description: 'Conversational AI agent handling multi-intent customer support — trained on product docs and escalating to human when needed.',
    metrics: ['−60% ticket volume', '92% resolution rate', '24/7 uptime'],
    stack: ['React', 'Claude API', 'Node.js', 'Firebase'],
    category: 'ai',
    details: {
      longDescription: 'An intelligent customer support chatbot trained on company documentation. It resolves common queries autonomously, detects frustrated users, and seamlessly escalates to a human agent with full conversation context.',
      highlights: ['RAG-powered knowledge base from product docs', 'Sentiment analysis for escalation triggers', 'Live agent handoff with full history', 'Dashboard tracking resolution metrics'],
      status: 'Live',
    },
  },
  {
    icon: 'Mic',
    title: 'AI Meeting Transcriber',
    description: 'Upload or record meetings — AI transcribes, identifies speakers, and extracts action items and key decisions automatically.',
    metrics: ['95% accuracy', 'Speaker detection', 'Auto summaries'],
    stack: ['React', 'Whisper API', 'GPT-4o', 'Node.js'],
    category: 'ai',
    details: {
      longDescription: 'Drop in a meeting recording and receive a structured summary within seconds. Speaker diarization identifies who said what, while GPT-4o extracts decisions, action items, and deadlines into a shareable document.',
      highlights: ['Speaker diarization for up to 10 participants', 'Action item extraction with assignee tagging', 'Supports MP3, MP4, WAV formats', 'Notion & Slack export integration'],
      status: 'Completed',
    },
  },
  {
    icon: 'Briefcase',
    title: 'AI Job Matcher',
    description: 'Embedding-based matching engine that scores candidate profiles against job descriptions for precision recruitment.',
    metrics: ['+45% hire quality', '3x faster screening', 'Bias detection'],
    stack: ['Next.js', 'OpenAI Embeddings', 'PostgreSQL', 'Python'],
    category: 'ai',
    details: {
      longDescription: 'A B2B recruitment tool that vectorizes both candidate CVs and job descriptions using OpenAI embeddings, then ranks candidates by semantic similarity. Includes a bias detection layer to flag potentially discriminatory criteria.',
      highlights: ['Semantic match score (0–100) per candidate', 'Bulk screening of 500+ CVs in under 60s', 'Bias detection on job description language', 'ATS integration via REST API'],
      status: 'Completed',
    },
  },
  {
    icon: 'LayoutTemplate',
    title: 'AI UI Generator',
    description: 'Describe a UI in plain text — receive production-ready React components with Tailwind CSS in seconds.',
    metrics: ['React output', 'Tailwind CSS', 'Copy-paste ready'],
    stack: ['Next.js', 'Claude API', 'TypeScript', 'Tailwind CSS'],
    category: 'ai',
    details: {
      longDescription: 'Type a description like "a login form with Google OAuth and a forgot password link" and receive a fully functional React + Tailwind component. Supports dark mode, responsive variants, and accessibility attributes.',
      highlights: ['Natural language → React component in <5s', 'Dark mode & responsive variants auto-included', 'ARIA attributes for accessibility compliance', 'Component history and favorites library'],
      status: 'In Progress',
    },
  },
  {
    icon: 'Gauge',
    title: 'AI Performance Auditor',
    description: 'Paste a URL — AI runs Lighthouse, interprets the results, and outputs a prioritized fix plan with code snippets.',
    metrics: ['LCP · FID · CLS', 'Auto fix plan', 'Before/after diff'],
    stack: ['React', 'Lighthouse API', 'Claude API', 'Node.js'],
    category: 'ai',
    details: {
      longDescription: 'Combines Google Lighthouse with AI interpretation. Instead of reading raw metrics, users receive a plain-English diagnosis and a prioritized list of fixes ranked by impact — each with a ready-to-apply code snippet.',
      highlights: ['Full Core Web Vitals analysis', 'AI-ranked fix list by ROI', 'Code snippets for each recommendation', 'Historical score tracking over time'],
      status: 'Completed',
    },
  },
  {
    icon: 'Map',
    title: 'AI Roadmap Planner',
    description: 'Input business goals and team capacity — AI generates a prioritized product roadmap with effort estimates and dependencies.',
    metrics: ['MoSCoW scoring', 'Dependency graph', 'Export to Jira'],
    stack: ['React', 'Claude API', 'D3.js', 'Node.js'],
    category: 'ai',
    details: {
      longDescription: 'Product managers input objectives, available team capacity, and existing backlog items. The AI applies MoSCoW prioritization, estimates story points, identifies blockers, and outputs a quarter-by-quarter roadmap with a dependency graph.',
      highlights: ['MoSCoW + RICE scoring framework', 'Interactive dependency graph (D3.js)', 'Capacity planning by team role', 'Export to Jira, Notion, and CSV'],
      status: 'Completed',
    },
  },
  {
    icon: 'FlaskConical',
    title: 'AI Test Case Generator',
    description: 'Paste a React component — AI generates comprehensive Jest + RTL test cases covering happy paths, edge cases, and accessibility.',
    metrics: ['80%+ coverage', 'RTL best practices', 'A11y checks'],
    stack: ['React', 'Claude API', 'Jest', 'Testing Library'],
    category: 'ai',
    details: {
      longDescription: 'Paste any React component and receive a full Jest + React Testing Library test suite. The AI identifies all interactive states, error boundaries, and accessibility requirements — outputting copy-paste-ready test files.',
      highlights: ['Covers happy path, edge cases, and error states', 'Accessibility assertions (ARIA, keyboard nav)', 'Mock generation for API calls and context', 'Coverage report estimation before running'],
      status: 'In Progress',
    },
  },

  // ── FRONTEND SHOWCASES ──────────────────────────────────────────────────────
  {
    icon: 'Globe',
    title: 'Personal Portfolio v3',
    description: 'This very site — a high-performance portfolio built with React and Vite, featuring a custom design system, animations, and an embedded AI chat.',
    metrics: ['100 Lighthouse score', 'Custom CSS system', 'Embedded AI chat'],
    stack: ['React', 'Vite', 'TypeScript', 'Custom CSS'],
    category: 'frontend',
    details: {
      longDescription: 'A handcrafted portfolio built without UI libraries — every animation, layout, and component is custom CSS. Features a hexagonal hero photo, scroll-driven fade-ins, a splash loader, and an embedded Claude AI chat widget.',
      highlights: ['Zero UI framework — 100% custom CSS', 'Scroll-driven Intersection Observer animations', 'Embedded Claude AI chat with streaming', 'Perfect Lighthouse score (Performance · A11y · SEO)'],
      status: 'Live',
    },
  },
  {
    icon: 'Layers',
    title: 'Design System Library',
    description: 'A reusable component library with 40+ fully documented React components, design tokens, and Storybook integration.',
    metrics: ['40+ components', 'Storybook docs', 'TypeScript-first'],
    stack: ['React', 'TypeScript', 'Storybook', 'CSS Modules'],
    category: 'frontend',
    details: {
      longDescription: 'An enterprise-grade design system built for a SaaS product team. Covers atoms (buttons, inputs, badges) through organisms (modals, data tables, command palettes) with full Storybook documentation and accessibility compliance.',
      highlights: ['Design tokens synced from Figma via plugin', 'Full WCAG 2.1 AA compliance', 'Theming support (light, dark, brand)', 'Rollup bundle with tree-shaking support'],
      status: 'Completed',
    },
  },
  {
    icon: 'TrendingUp',
    title: 'Interactive Data Viz Dashboard',
    description: 'A browser-based analytics dashboard with 12 chart types, drill-down filters, and real-time WebSocket data feeds.',
    metrics: ['12 chart types', 'Real-time feeds', 'Drill-down filters'],
    stack: ['React', 'D3.js', 'Chart.js', 'WebSockets'],
    category: 'frontend',
    details: {
      longDescription: 'An interactive analytics dashboard for visualizing large datasets in the browser. Users can switch between 12 chart types, apply cross-filter drill-downs, and watch data update live via WebSocket feeds — all with smooth 60fps transitions.',
      highlights: ['D3.js custom force-directed graph', 'Cross-filter brush selection across charts', 'CSV / JSON data import', 'Export to PNG, SVG, and PDF'],
      status: 'Completed',
    },
  },
  {
    icon: 'Gamepad2',
    title: 'Front-End Game Applications',
    description: 'Scalable, high-performance browser-based game applications with seamless API integration, optimized for Core Web Vitals.',
    metrics: ['+40% CWV score', 'Smooth 60fps', 'Mobile-ready'],
    stack: ['React.js', 'REST APIs', 'Tailwind CSS', 'Material UI'],
    category: 'frontend',
    details: {
      longDescription: 'A suite of browser-based game applications for a gaming SaaS platform. Engineered with React.js for component reusability, these apps deliver smooth 60fps interactions, real-time leaderboards, and responsive layouts across all screen sizes.',
      highlights: ['60fps animations via requestAnimationFrame', '40% improvement in Core Web Vitals scores', 'Real-time leaderboard via REST polling', 'Fully responsive down to 320px viewports'],
      status: 'Live',
    },
  },
  {
    icon: 'Sparkles',
    title: 'CSS Animation Kit',
    description: '60+ production-ready CSS animation presets packaged as a lightweight utility library with zero JavaScript dependencies.',
    metrics: ['60+ animations', '< 4KB gzipped', 'Zero dependencies'],
    stack: ['CSS3', 'JavaScript', 'Rollup', 'PostCSS'],
    category: 'frontend',
    details: {
      longDescription: 'A plug-and-play animation library covering entrance effects, loaders, micro-interactions, and scroll-triggered transitions. Available as a CDN drop-in or npm package, with utility class naming inspired by Animate.css but built from scratch.',
      highlights: ['60+ animations across 8 categories', 'Under 4KB gzipped with tree-shaking', 'CSS custom property overrides for duration/easing', 'Interactive demo playground with live preview'],
      status: 'Completed',
    },
  },

  // ── SAAS & DASHBOARDS ───────────────────────────────────────────────────────
  {
    icon: 'GraduationCap',
    title: 'E-Learning Platform',
    description: 'Full-stack learning platform enabling 3,000+ students to access courses with real-time progress tracking, video streaming, and quiz submissions.',
    metrics: ['3K+ students', '95% uptime', '−40% load time'],
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
    category: 'saas',
    details: {
      longDescription: 'A MERN-stack e-learning platform built during a GoMyCode bootcamp internship. Supports course enrollment, video streaming with progress tracking, multi-step quizzes, and instructor dashboards — handling 50+ concurrent requests per second.',
      highlights: ['Video streaming with adaptive bitrate', 'Real-time quiz scoring and feedback', 'RESTful API handling 50+ req/s', '40% faster load times via code splitting'],
      status: 'Completed',
    },
  },
  {
    icon: 'BarChart3',
    title: 'CRM Analytics Dashboard',
    description: 'Sales team CRM with pipeline visualization, KPI tracking, and AI-powered deal probability scoring.',
    metrics: ['Pipeline viz', 'AI deal scoring', '−30% lost deals'],
    stack: ['React', 'Next.js', 'Chart.js', 'PostgreSQL'],
    category: 'saas',
    details: {
      longDescription: 'A CRM built for a B2B sales team managing a complex multi-stage pipeline. Features Kanban-style deal boards, revenue forecasting charts, activity timelines, and an AI model scoring each deal\'s close probability based on historical patterns.',
      highlights: ['Drag-and-drop Kanban pipeline board', 'AI deal probability score (ML model)', 'Revenue forecasting with confidence intervals', 'Email sequence automation triggers'],
      status: 'Completed',
    },
  },
  {
    icon: 'ShoppingCart',
    title: 'E-Commerce Admin Panel',
    description: 'Back-office dashboard for managing inventory, orders, discounts, and customer analytics in a single workspace.',
    metrics: ['Real-time orders', '500K SKU support', 'Multi-warehouse'],
    stack: ['React', 'Redux Toolkit', 'Node.js', 'MongoDB'],
    category: 'saas',
    details: {
      longDescription: 'An admin panel for a mid-size e-commerce brand. Manages products across multiple warehouses, tracks order fulfillment in real time, handles promotional rules, and surfaces customer LTV analytics — built to replace a slow legacy dashboard.',
      highlights: ['Real-time order status with WebSocket push', 'Multi-warehouse inventory sync', 'Bulk product import via CSV (500K+ SKUs)', 'Customer LTV and cohort analysis charts'],
      status: 'Live',
    },
  },
  {
    icon: 'Users',
    title: 'HR Management System',
    description: 'End-to-end HR platform covering onboarding, leave management, performance reviews, and payroll reporting.',
    metrics: ['−70% HR admin time', '200+ employees', 'Payroll export'],
    stack: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL'],
    category: 'saas',
    details: {
      longDescription: 'A comprehensive HR platform for a company of 200+ employees. Automates onboarding checklists, handles leave request workflows, runs 360° performance review cycles, and generates payroll reports — replacing a stack of spreadsheets.',
      highlights: ['Automated onboarding task workflows', 'Leave balance engine with policy enforcement', '360° performance review module', 'Payroll report export to Excel & PDF'],
      status: 'Completed',
    },
  },
  {
    icon: 'Megaphone',
    title: 'Marketing Analytics Platform',
    description: 'UTM-based campaign tracker with attribution modeling, funnel visualization, and conversion optimization suggestions.',
    metrics: ['+28% ROAS', 'Multi-touch attribution', 'Funnel viz'],
    stack: ['React', 'Node.js', 'BigQuery', 'Chart.js'],
    category: 'saas',
    details: {
      longDescription: 'A marketing analytics tool for performance teams managing multi-channel campaigns. Tracks UTM sources through the full funnel, applies linear and last-touch attribution models, and surfaces anomalies and optimization opportunities.',
      highlights: ['UTM tracking across 10+ channels', 'Linear, last-touch, and data-driven attribution', 'Anomaly detection with Slack alerts', 'A/B test significance calculator built-in'],
      status: 'Live',
    },
  },

  // ── REAL-TIME ───────────────────────────────────────────────────────────────
  {
    icon: 'Link',
    title: 'Job-Worker Matching Platform',
    description: 'High-traffic platform connecting workers with local opportunities in real-time using geolocation matching, serving 5K+ daily users.',
    metrics: ['5K+ daily users', '−65% hire time', '−50% server response'],
    stack: ['Meteor.js', 'React', 'Node.js', 'MongoDB'],
    category: 'realtime',
    details: {
      longDescription: 'A real-time job matching platform built for Pixelium, matching skilled workers to local employers using geolocation. Features live job feed updates, employer dashboards, and geospatial search — scaling to 5,000 daily active users.',
      highlights: ['MongoDB $geoNear geolocation job search', 'Real-time job feed via Meteor publications', 'Employer dashboard reducing hire time by 65%', '50% server response improvement via query optimization'],
      status: 'Completed',
    },
  },
  {
    icon: 'PenLine',
    title: 'Live Collaboration Whiteboard',
    description: 'Figma-inspired real-time whiteboard where multiple users draw, drop shapes, and edit together with zero latency.',
    metrics: ['<50ms latency', '10 users/room', 'Conflict resolution'],
    stack: ['React', 'Socket.io', 'Konva.js', 'Node.js'],
    category: 'realtime',
    details: {
      longDescription: 'A browser-based collaborative whiteboard supporting up to 10 simultaneous users per room. Built with Konva.js for canvas rendering and Socket.io for real-time sync, with CRDT-inspired conflict resolution to prevent edit collisions.',
      highlights: ['<50ms update latency via optimistic UI', 'CRDT conflict resolution for concurrent edits', 'Sticky notes, shapes, arrows, freehand draw', 'Session replay and export to PNG'],
      status: 'Completed',
    },
  },
  {
    icon: 'TrendingDown',
    title: 'Real-Time Crypto Tracker',
    description: 'WebSocket-powered price dashboard tracking 100+ cryptocurrencies with live alerts, sparklines, and portfolio P&L.',
    metrics: ['100+ coins', 'Live WebSocket', 'Portfolio P&L'],
    stack: ['React', 'WebSockets', 'Chart.js', 'Node.js'],
    category: 'realtime',
    details: {
      longDescription: 'A real-time cryptocurrency dashboard consuming live WebSocket feeds from exchange APIs. Displays price tickers, 24h sparklines, market cap rankings, and personal portfolio P&L — updating every 500ms with smooth transitions.',
      highlights: ['WebSocket feeds from Binance & CoinGecko', '500ms price update cycle with smooth animation', 'Portfolio tracker with cost basis & P&L', 'Price alert notifications via browser push'],
      status: 'Live',
    },
  },

  // ── DEVELOPER TOOLS ─────────────────────────────────────────────────────────
  {
    icon: 'Terminal',
    title: 'React DevKit CLI',
    description: 'CLI scaffolding tool that generates a production-ready React project with ESLint, Prettier, Husky, testing, and CI baked in.',
    metrics: ['< 30s setup', 'Best practices', '7 templates'],
    stack: ['Node.js', 'Commander.js', 'Inquirer', 'Plop'],
    category: 'devtools',
    details: {
      longDescription: 'A CLI tool answering "how should I start a React project?" — runs an interactive prompt, then scaffolds a fully configured repo with TypeScript, ESLint, Prettier, Husky pre-commit hooks, Vitest, and a GitHub Actions CI pipeline.',
      highlights: ['7 project templates (CRA-free, Next.js, Vite...)', 'Husky + lint-staged pre-commit hooks', 'GitHub Actions CI workflow included', 'Path aliases, env validation, and Docker config'],
      status: 'Completed',
    },
  },
  {
    icon: 'Server',
    title: 'API Mock Server',
    description: 'Drop a JSON schema file — get a fully working REST mock server with CRUD, filtering, and latency simulation in seconds.',
    metrics: ['Zero config', 'CRUD auto-gen', 'Latency sim'],
    stack: ['Node.js', 'Express.js', 'JSON Schema', 'TypeScript'],
    category: 'devtools',
    details: {
      longDescription: 'A developer tool for frontend teams waiting on backend APIs. Define your data shape in a JSON schema file, run one command, and get a fully functional REST server with CRUD endpoints, query filtering, pagination, and configurable latency — ideal for parallel development.',
      highlights: ['Auto-generates CRUD from JSON schema', 'Query params: filter, sort, paginate', 'Configurable latency & error rate simulation', 'Hot-reload on schema file changes'],
      status: 'Completed',
    },
  },
  {
    icon: 'ClipboardList',
    title: 'Code Snippet Manager',
    description: 'A personal code library app with syntax highlighting, tag-based search, and a browser extension for one-click saving.',
    metrics: ['50+ languages', 'Tag search', 'Browser ext.'],
    stack: ['React', 'Electron', 'CodeMirror', 'SQLite'],
    category: 'devtools',
    details: {
      longDescription: 'A desktop + browser app for saving and retrieving code snippets. Supports 50+ languages with CodeMirror syntax highlighting, full-text and tag-based search, snippet groups, and a browser extension that saves selected code in one click.',
      highlights: ['50+ languages with CodeMirror v6', 'Full-text + tag search with instant results', 'Browser extension for one-click saving', 'iCloud / GitHub Gist sync for backup'],
      status: 'Live',
    },
  },

  // ── PRODUCT-LED ─────────────────────────────────────────────────────────────
  {
    icon: 'Rocket',
    title: 'WayConnect Product Strategy',
    description: 'Led full product lifecycle for a SaaS platform — roadmap planning, sprint facilitation, and cross-team alignment across QA, web dev, and UX.',
    metrics: ['30% faster MVPs', 'Multi-team alignment', '4 squads led'],
    stack: ['Scrum', 'Figma', 'KPIs', 'OKRs'],
    category: 'product',
    details: {
      longDescription: 'As Product Tech Manager at WayConnect, I owned the full product lifecycle: defining OKRs with leadership, translating them into sprint-ready backlog items, facilitating ceremonies across 4 cross-functional squads, and tracking delivery velocity — reducing MVP cycle time by 30%.',
      highlights: ['Defined quarterly OKRs with C-level stakeholders', 'Ran Sprint Planning, Standups & Retros for 4 squads', 'Reduced MVP delivery cycle time by 30%', 'Coordinated QA, UX, and engineering releases'],
      status: 'Completed',
    },
  },
  {
    icon: 'CreditCard',
    title: 'SaaS Subscription Manager',
    description: 'Billing and subscription management platform with Stripe integration, plan upgrades, usage metering, and churn prediction.',
    metrics: ['Stripe billing', 'Churn −18%', 'Usage metering'],
    stack: ['Next.js', 'Stripe', 'Prisma', 'PostgreSQL'],
    category: 'product',
    details: {
      longDescription: 'A full-featured billing backend and customer portal for a B2B SaaS. Handles plan subscriptions, proration on upgrades/downgrades, usage-based billing, invoice generation, and an ML-based churn prediction model that flags at-risk accounts.',
      highlights: ['Stripe Webhooks for real-time billing events', 'Usage metering with per-seat and API-call models', 'Churn prediction model (18% reduction)', 'Self-serve customer portal for plan changes'],
      status: 'Live',
    },
  },
  {
    icon: 'Smartphone',
    title: 'Mobile-First PWA',
    description: 'Offline-ready progressive web app with push notifications, background sync, and a 98 Lighthouse PWA score.',
    metrics: ['98 PWA score', 'Offline-ready', 'Push notifications'],
    stack: ['React', 'Service Workers', 'IndexedDB', 'Workbox'],
    category: 'product',
    details: {
      longDescription: 'A progressive web app engineered for reliability in low-connectivity environments. Built with Workbox for caching strategy, IndexedDB for offline data persistence, and Web Push for engagement — achieving a perfect PWA score on Lighthouse.',
      highlights: ['Stale-while-revalidate caching strategy via Workbox', 'IndexedDB offline queue with background sync', 'Web Push notifications (opt-in flow)', '98/100 Lighthouse PWA score'],
      status: 'Completed',
    },
  },
  {
    icon: 'Target',
    title: 'B2B Onboarding Flow',
    description: 'Multi-step onboarding funnel with progress tracking, contextual tooltips, and A/B tested activation triggers — lifting trial-to-paid conversion.',
    metrics: ['+42% activation', 'A/B tested', '7-step funnel'],
    stack: ['React', 'TypeScript', 'Segment', 'Mixpanel'],
    category: 'product',
    details: {
      longDescription: 'A product-led onboarding experience for a B2B SaaS targeting SMB companies. The 7-step funnel guides users from signup to their first value moment, with contextual tooltips, checklist gamification, and Mixpanel-tracked A/B tests on CTAs and copy — increasing trial-to-paid conversion by 42%.',
      highlights: ['7-step guided onboarding with progress bar', 'Contextual tooltips tied to user actions', 'A/B tested CTAs with Mixpanel funnel tracking', '42% lift in trial-to-paid activation rate'],
      status: 'Live',
    },
  },
]

export const skills: SkillCategory[] = [
  {
    icon: '⚡',
    category: 'Front-End',
    items: ['React.js', 'Next.js', 'TypeScript', 'JavaScript ES6+', 'HTML5', 'CSS3', 'Tailwind CSS', 'Material UI', 'Ant Design', 'Redux Toolkit', 'React Query', 'Vite', 'Webpack'],
  },
  {
    icon: '🔧',
    category: 'Backend & APIs',
    items: ['Node.js', 'Express.js', 'RESTful APIs', 'MongoDB', 'Firebase', 'Meteor.js'],
  },
  {
    icon: '📦',
    category: 'Product & Agile',
    items: ['Scrum', 'Kanban', 'Product Roadmapping', 'MVP Development', 'Feature Prioritization', 'KPIs / OKRs', 'Figma'],
  },
  {
    icon: '🛠',
    category: 'DevOps & Tools',
    items: ['GitHub', 'GitHub Actions', 'Docker', 'ESLint', 'Prettier', 'Jest', 'React Testing Library', 'Google Analytics'],
  },
]

export const contact: ContactData = {
  email:    'mohamedaminesaadani79@gmail.com',
  phone:    '+216 58 147 086',
  linkedin: 'https://www.linkedin.com/in/mohamed-amine-saadani/',
  location: 'Beni Hassen, Monastir, Tunisia',
}

export const footer: FooterData = {
  text:    '© 2025 Mohamed Amine Saadani · Senior Front-End Developer & Product Tech Manager',
  subtext: 'Built with passion & React',
}

export const chatSuggestions: string[] = ['Tech stack?', 'Open to work?', 'Key achievements?', 'Management experience?']
