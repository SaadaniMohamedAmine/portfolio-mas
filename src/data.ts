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

export interface GalleryImage { src: string; caption: string }
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
  gallery?: GalleryImage[];
}

export interface ProjectItem {
  icon: string; title: string; description: string; metrics: string[]; stack: string[];
  category: string;
  logoImage?: string;
  published?: boolean;
  details: ProjectDetails;
}

export interface PoweredByItem { icon: string; label: string }
export interface ProjectCategory {
  id: string; iconName: string; label: string; description: string;
  poweredBy: PoweredByItem[];
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
    poweredBy: [
      { icon: 'Brain',    label: 'LLM'     },
      { icon: 'Sparkles', label: 'Gemini'  },
      { icon: 'MessageSquare', label: 'NLP' },
      { icon: 'Cpu',      label: 'AI API'  },
    ],
  },
  {
    id: 'frontend', iconName: 'Zap', label: 'Frontend Showcases',
    description: 'Expériences UI haute-performance — design systems, data visualizations interactives, jeux browser et librairies d\'animation CSS — toutes optimisées pour les Core Web Vitals.',
    poweredBy: [
      { icon: 'Layers',   label: 'React'   },
      { icon: 'Gauge',    label: 'Vite'    },
      { icon: 'Palette',  label: 'CSS3'    },
      { icon: 'BarChart2',label: 'Charts'  },
    ],
  },
  {
    id: 'saas', iconName: 'LayoutDashboard', label: 'SaaS & Dashboards',
    description: 'Plateformes SaaS complètes et tableaux de bord analytiques : CRM, e-learning, RH, e-commerce et marketing — construits pour la scalabilité et la conversion.',
    poweredBy: [
      { icon: 'Database', label: 'MongoDB' },
      { icon: 'CreditCard', label: 'Stripe' },
      { icon: 'Users',    label: 'Auth'    },
      { icon: 'TrendingUp', label: 'Analytics' },
    ],
  },
  {
    id: 'realtime', iconName: 'Radio', label: 'Real-Time',
    description: 'Applications temps réel à haute disponibilité — matching géolocalisé, collaboration multi-utilisateurs, suivi de prix live — propulsées par WebSockets et Meteor.',
    poweredBy: [
      { icon: 'Wifi',     label: 'WebSocket' },
      { icon: 'MapPin',   label: 'Geo'     },
      { icon: 'Clock',    label: 'Live'    },
      { icon: 'Globe',    label: 'Meteor'  },
    ],
  },
  {
    id: 'devtools', iconName: 'Wrench', label: 'Developer Tools',
    description: 'Outils construits pour les développeurs : scaffolding CLI, serveurs mock API et gestionnaires de snippets — pour accélérer le workflow et standardiser les pratiques.',
    poweredBy: [
      { icon: 'Terminal', label: 'CLI'     },
      { icon: 'GitBranch', label: 'Git'   },
      { icon: 'Package',  label: 'npm'    },
      { icon: 'Code2',    label: 'Node'   },
    ],
  },
  {
    id: 'product', iconName: 'Package', label: 'Product-Led',
    description: 'Projets à impact produit mesurable — stratégie Agile, billing SaaS, PWA offline-first et funnels d\'onboarding optimisés pour la conversion trial-to-paid.',
    poweredBy: [
      { icon: 'Target',   label: 'Agile'  },
      { icon: 'Smartphone', label: 'PWA'  },
      { icon: 'Layers',   label: 'SaaS'  },
      { icon: 'Rocket',   label: 'MVP'    },
    ],
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
      gallery: [
        { src: '/projects/pulse-ai/screencapture-ai-code-reviewer-seven-sigma-vercel-app-2026-06-20-14_18_37.png',                                                            caption: 'Landing Page'     },
        { src: '/projects/pulse-ai/screencapture-ai-code-reviewer-seven-sigma-vercel-app-login-2026-06-20-14_18_59.png',                                                      caption: 'Login'            },
        { src: '/projects/pulse-ai/screencapture-ai-code-reviewer-seven-sigma-vercel-app-register-2026-06-20-14_19_15.png',                                                   caption: 'Register'         },
        { src: '/projects/pulse-ai/screencapture-ai-code-reviewer-seven-sigma-vercel-app-dashboard-2026-06-20-14_19_32.png',                                                  caption: 'Dashboard'        },
        { src: '/projects/pulse-ai/screencapture-ai-code-reviewer-seven-sigma-vercel-app-dashboard-repositories-2026-06-20-14_19_50.png',                                     caption: 'Repositories'     },
        { src: '/projects/pulse-ai/screencapture-ai-code-reviewer-seven-sigma-vercel-app-dashboard-history-2026-06-20-14_20_02.png',                                          caption: 'History'          },
        { src: '/projects/pulse-ai/screencapture-ai-code-reviewer-seven-sigma-vercel-app-dashboard-pull-requests-2026-06-20-14_20_12.png',                                    caption: 'Pull Requests'    },
        { src: '/projects/pulse-ai/screencapture-ai-code-reviewer-seven-sigma-vercel-app-dashboard-analytics-2026-06-20-14_20_24.png',                                        caption: 'Analytics'        },
        { src: '/projects/pulse-ai/screencapture-ai-code-reviewer-seven-sigma-vercel-app-dashboard-integrations-2026-06-20-14_20_33.png',                                     caption: 'Integrations'     },
        { src: '/projects/pulse-ai/screencapture-ai-code-reviewer-seven-sigma-vercel-app-dashboard-team-2026-06-20-14_20_41.png',                                             caption: 'Team'             },
        { src: '/projects/pulse-ai/screencapture-ai-code-reviewer-seven-sigma-vercel-app-dashboard-settings-2026-06-20-14_20_53.png',                                         caption: 'Settings'         },
        { src: '/projects/pulse-ai/screencapture-ai-code-reviewer-seven-sigma-vercel-app-dashboard-settings-2026-06-20-14_21_01.png',                                         caption: 'Settings — Theme' },
        { src: '/projects/pulse-ai/screencapture-ai-code-reviewer-seven-sigma-vercel-app-dashboard-settings-2026-06-20-14_21_14.png',                                         caption: 'Settings — API'   },
        { src: '/projects/pulse-ai/screencapture-ai-code-reviewer-seven-sigma-vercel-app-dashboard-settings-2026-06-20-14_21_24.png',                                         caption: 'Settings — Billing'},
        { src: '/projects/pulse-ai/screencapture-ai-code-reviewer-seven-sigma-vercel-app-dashboard-support-2026-06-20-14_21_33.png',                                          caption: 'Support'          },
        { src: '/projects/pulse-ai/screencapture-ai-code-reviewer-seven-sigma-vercel-app-dashboard-documentation-2026-06-20-14_21_42.png',                                    caption: 'Documentation'    },
        { src: '/projects/pulse-ai/screencapture-ai-code-reviewer-seven-sigma-vercel-app-dashboard-analyze-2026-06-20-14_22_21.png',                                          caption: 'Code Analyzer'    },
        { src: '/projects/pulse-ai/screencapture-ai-code-reviewer-seven-sigma-vercel-app-dashboard-analysis-cmqgpgmfl001a1kw368gom0no-2026-06-20-14_22_46.png',               caption: 'Analysis Result'  },
      ],
    },
  },
  {
    icon: 'PenLine',
    title: 'Verbio AI',
    description: "AI-powered writing assistant that transforms ideas into polished documents — with streaming generation, a token economy, and multi-language support out of the box.",
    metrics: ['SSE Streaming', 'Stripe Billing', 'FR / EN i18n', 'Production Grade'],
    stack: ['Next.js 15', 'React 19', 'TypeScript', 'Tailwind CSS', 'Prisma', 'PostgreSQL', 'Stripe', 'next-intl', 'Vercel'],
    category: 'ai',
    logoImage: '/verbio-ai.svg',
    published: true,
    details: {
      longDescription: "Verbio AI is an AI-powered writing SaaS built as a full production application — not a portfolio prototype. It lets users generate, edit, and export professional documents through a real-time streaming editor. The platform combines a credit-based token economy, three subscription tiers (Starter, Pro, Agency), and full Stripe billing with webhook handling. The interface supports French and English seamlessly via cookie-based i18n with no URL changes. Every feature — from the collapsible AI drawer to the billing dashboard — is production-grade and deployed on Vercel.",
      highlights: [
        "Real-time SSE streaming — no loading spinners, words flow as the model generates",
        "Append-only CreditLedger for auditable token consumption history",
        "Stripe race-condition fix via polling endpoint /billing/status (2s interval)",
        "Cookie-based i18n with localePrefix: 'never' — zero URL disruption on language switch",
        "Monthly word allowance auto-reset on invoice.paid webhook",
        "Full Vercel deployment with environment-gated Stripe webhooks",
        "TypeScript strict mode throughout — zero any in production code",
        "Dark premium UI with Playfair Display headings and violet accent system (#7C3AED)",
        "Google Docs sidebar extension — generate and insert AI text without leaving the document",
      ],
      status: 'Live',
      live:       'https://verbio-ai.vercel.app/',
      github:     'https://github.com/SaadaniMohamedAmine/verbio-ai',
      videoEmbed: 'https://drive.google.com/file/d/1qGurlzlgYGf75uTqV8-dZKoZlfsB2o3X/preview',
      capabilities: [
        { capability: 'AI Streaming Generation', what: "Real-time SSE streaming from LLM — words appear as they're generated, no waiting for full response." },
        { capability: 'Credit / Token System',   what: 'Append-only CreditLedger tracks consumption per generation; monthly reset tied to billing cycle.' },
        { capability: '3-Tier Subscription',     what: 'Starter / Pro / Agency plans with word allowances (10K / 100K / unlimited) via Stripe Checkout.' },
        { capability: 'Stripe Webhook Engine',   what: 'Handles subscription.updated, invoice.paid, checkout.session.completed with race-condition protection.' },
        { capability: 'Collapsible AI Drawer',   what: '380px slide-in panel in the editor — keeps writing surface clean while AI is always one click away.' },
        { capability: 'FR / EN i18n',            what: 'Cookie-based language switching (no URL changes), full translations across dashboard + homepage.' },
        { capability: 'SEO & Open Graph',         what: 'Dynamic OG images, meta titles, structured sitemap — optimized for sharing and indexing.' },
        { capability: 'Document Editor',         what: 'Full AppShell layout with persistent navbar, consistent padding, and responsive design.' },
        { capability: 'Google Docs Extension',    what: 'Native Google Docs sidebar add-on — generate, preview, and insert AI text directly into the document, with generation history and a Ctrl+Enter shortcut.' },
      ],
      gallery: [
        { src: '/projects/verbio-ai/landing-en.png',                   caption: 'Landing Page (EN)' },
        { src: '/projects/verbio-ai/landing-fr.png',                   caption: 'Landing Page (FR)' },
        { src: '/projects/verbio-ai/login-en.png',                     caption: 'Login (EN)' },
        { src: '/projects/verbio-ai/login-en-alt.png',                 caption: 'Login (EN) — Alternate' },
        { src: '/projects/verbio-ai/login-fr.png',                     caption: 'Login (FR)' },
        { src: '/projects/verbio-ai/pricing-en.png',                   caption: 'Pricing (EN)' },
        { src: '/projects/verbio-ai/pricing-fr.png',                   caption: 'Pricing (FR)' },
        { src: '/projects/verbio-ai/privacy-policy.png',               caption: 'Privacy Policy' },
        { src: '/projects/verbio-ai/terms.png',                        caption: 'Terms of Use' },
        { src: '/projects/verbio-ai/workspaces.png',                   caption: 'Workspaces Dashboard' },
        { src: '/projects/verbio-ai/onboarding-create-workspace.jpg',  caption: 'Onboarding — Create Workspace' },
        { src: '/projects/verbio-ai/onboarding-tour-1.jpg',            caption: 'Onboarding Tour — Step 1' },
        { src: '/projects/verbio-ai/onboarding-tour-2.jpg',            caption: 'Onboarding Tour — Step 2' },
        { src: '/projects/verbio-ai/onboarding-tour-3.jpg',            caption: 'Onboarding Tour — Step 3' },
        { src: '/projects/verbio-ai/onboarding-tour-4.jpg',            caption: 'Onboarding Tour — Step 4' },
        { src: '/projects/verbio-ai/editor-prompt.jpg',                caption: 'Document Editor — Prompt Mode' },
        { src: '/projects/verbio-ai/editor-generated.jpg',             caption: 'Document Editor — Generated Result' },
        { src: '/projects/verbio-ai/editor-templates.jpg',             caption: 'Document Editor — Template Library' },
        { src: '/projects/verbio-ai/editor-i18n.jpg',                  caption: 'Document Editor — Language Switch' },
        { src: '/projects/verbio-ai/editor-saving.png',                caption: 'Document Editor — Saving' },
        { src: '/projects/verbio-ai/editor-landing-template.png',      caption: 'Document Editor — Landing Page Template' },
        { src: '/projects/verbio-ai/share-document-modal.jpg',         caption: 'Share Document — Modal' },
        { src: '/projects/verbio-ai/share-document.jpg',               caption: 'Share Document — Link Generated' },
        { src: '/projects/verbio-ai/demo-mode-workspaces.jpg',         caption: 'Demo Mode — Workspaces (FR)' },
        { src: '/projects/verbio-ai/demo-mode-workspaces-en.png',      caption: 'Demo Mode — Workspaces (EN)' },
        { src: '/projects/verbio-ai/demo-mode-projects.png',           caption: 'Demo Mode — Projects' },
        { src: '/projects/verbio-ai/demo-mode-documents.png',          caption: 'Demo Mode — Documents' },
        { src: '/projects/verbio-ai/demo-mode-generated-ad.png',       caption: 'Demo Mode — Generated Ad Copy' },
        { src: '/projects/verbio-ai/analytics.png',                    caption: 'Analytics' },
        { src: '/projects/verbio-ai/billing-starter.png',              caption: 'Billing — Starter Plan' },
        { src: '/projects/verbio-ai/billing-upgrade.png',              caption: 'Billing — Plan Upgrade' },
        { src: '/projects/verbio-ai/marketplace.png',                  caption: 'Template Marketplace' },
        { src: '/projects/verbio-ai/projects.png',                     caption: 'Projects' },
        { src: '/projects/verbio-ai/command-palette.png',              caption: 'Command Palette' },
        { src: '/projects/verbio-ai/command-palette-search.png',       caption: 'Command Palette — Search' },
        { src: '/projects/verbio-ai/project-documents.png',            caption: 'Project Documents' },
        { src: '/projects/verbio-ai/integrations-wordpress.png',       caption: 'Integrations — WordPress' },
        { src: '/projects/verbio-ai/integrations.png',                 caption: 'Integrations — Ayrshare' },
        { src: '/projects/verbio-ai/integrations-buffer.png',          caption: 'Integrations — Buffer' },
        { src: '/projects/verbio-ai/stripe-checkout.png',              caption: 'Stripe Checkout' },
        { src: '/projects/verbio-ai/stripe-billing-portal.png',        caption: 'Stripe Billing Portal' },
        { src: '/projects/verbio-ai/mobile-landing.png',               caption: 'Mobile — Landing Page' },
        { src: '/projects/verbio-ai/mobile-editor.png',                caption: 'Mobile — Document Editor' },
        { src: '/projects/verbio-ai/pdf-export.png',                   caption: 'PDF Export' },
        { src: '/projects/verbio-ai/google-docs-extension.jpg',        caption: 'Google Docs Extension' },
      ],
    },
  },
  {
    icon: 'KanbanSquare',
    title: 'Axiom',
    description: 'Enterprise Kanban platform built as a full-production SaaS application — real-time collaboration, AI-powered task intelligence, sprint analytics, and a complete multi-tenant billing shell deployed on Vercel.',
    metrics: ['Realtime Collab', 'Dual-AI Engine', 'Sprint Analytics', 'Production Grade'],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Pusher Channels', 'Groq', 'Gemini', 'Prisma 7', 'Neon PostgreSQL', 'Stripe', 'Better Auth', 'Framer Motion v12', 'next-intl', 'Resend', 'Vercel', 'Sentry'],
    category: 'ai',
    logoImage: '/axiom-icon.png',
    published: true,
    details: {
      longDescription: 'Axiom is an enterprise-grade project management platform engineered as a production SaaS — a portfolio cornerstone that demonstrates senior full-stack architecture at scale. The platform combines a WebSocket-powered Kanban engine with "Axiom Intelligence" (Groq primary / Gemini fallback), a complete sprint lifecycle manager with velocity analytics, and a battle-tested multi-tenant shell featuring role-based access control, Stripe billing with hard plan enforcement, a webhooks & public REST API, immutable audit logging, PWA installability, and full FR/EN internationalization — from database schema to UI copy.',
      highlights: [
        'Real-time first — any task move, status change, or board update propagates instantly to all connected clients via Pusher Channels',
        'Dual-AI fallback architecture — Groq as primary LLM, Gemini as automatic failover, with per-workspace daily quota enforcement based on plan',
        'Production-grade multi-tenancy — full workspace isolation, RBAC on every server action, audit trail written on every state-changing operation',
        'Complete Stripe integration — Checkout Sessions, Customer Portal, webhook handler with subscription sync, and client-side upgrade gates',
        'Framer Motion throughout — centralized MOTION token system drives every animation: modals, kanban drags, sidebar collapse, onboarding tour',
        'Type-safe full-stack — Next.js 16 App Router, Prisma 7, TypeScript strict mode, Zod validation on every server action input',
        'PWA-ready — passes Lighthouse PWA audit, installable on desktop and mobile, offline fallback page',
        'Observability built-in — Sentry error monitoring, @vercel/analytics + Speed Insights, structured audit logs in PostgreSQL',
      ],
      status: 'Live',
      live: 'https://axiom-kanban-board.vercel.app/',
      github: 'https://github.com/SaadaniMohamedAmine/axiom-kanban-board',
      videoEmbed: 'https://drive.google.com/file/d/1jS0ooxhvekF5n7s31TcZ0puQPONd1vz7/preview',
      capabilities: [
        { capability: 'Realtime Kanban Engine',        what: 'Pusher Channels WebSocket — zero-latency drag-and-drop, live task updates across all connected clients simultaneously.' },
        { capability: 'Axiom Intelligence',             what: 'Dual-AI engine with Groq primary and Gemini fallback — AI task descriptions, priority suggestions, sprint insights, plan-gated with daily quota.' },
        { capability: 'Sprint Management',              what: 'Full sprint lifecycle (create → start → close) with velocity tracking, burndown data, and an analytics dashboard per board.' },
        { capability: 'Multi-Workspace Architecture',   what: 'True multi-tenant — workspace isolation, role-based access (Owner / Admin / Member / Viewer), workspace switching from sidebar.' },
        { capability: 'Stripe Billing & Plan Gates',    what: '3-tier system (Free / Pro / Team) — Stripe Checkout + Customer Portal + webhook sync + hard client-side upgrade modals on limit hits.' },
        { capability: 'Webhooks & Public API',          what: 'REST API with API key auth (HMAC-SHA256 signed), webhook dispatch on task events, developer portal with public docs.' },
        { capability: 'Audit Log',                      what: 'Immutable event log — 20 action types, actor + target tracking, filter by action/date/actor, CSV export, retention based on plan.' },
        { capability: 'PWA & Offline',                  what: 'Installable as native app via @ducanh2912/next-pwa — offline fallback page, service worker asset caching.' },
        { capability: 'FR / EN i18n',                   what: 'Full internationalization with next-intl — all UI strings translated, locale preference persisted per user in database.' },
        { capability: 'Motion Design System',           what: 'Framer Motion v12 with centralized motion tokens — every modal, transition, and drag interaction is orchestrated.' },
      ],
      gallery: [
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-2026-07-20-12_53_31.png',                                                                      caption: 'Landing Page' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-login-2026-07-20-12_53_42.png',                                                                caption: 'Login' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-sign-up-2026-07-20-12_53_51.png',                                                              caption: 'Sign Up' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-dashboard-2026-07-20-14_41_33.png',                                                            caption: 'Dashboard — Overview' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-pricing-2026-07-20-12_54_04.png',                                                              caption: 'Pricing' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-changelog-2026-07-20-12_54_12.png',                                                            caption: 'Changelog' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-roadmap-2026-07-20-12_54_20.png',                                                              caption: 'Public Roadmap' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-terms-2026-07-20-12_54_30.png',                                                                caption: 'Terms of Service' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-privacy-2026-07-20-12_54_40.png',                                                              caption: 'Privacy Policy' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-workspaces-2026-07-20-14_12_42.png',                                                           caption: 'Workspaces — Multi-Tenant Overview' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-workspaces-new-2026-07-20-13_01_04.png',                                                       caption: 'Create Workspace' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-workspaces-new-2026-07-20-13_45_06.png',                                                       caption: 'Workspace Limit — Upgrade Gate' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-meridian-labs-2026-07-20-13_32_22.png',                                                        caption: 'Workspace Overview — Empty State' },
        { src: '/projects/axiom-ai/workspace-overview-empty-alt.jpg',                                                                                                          caption: 'Workspace Overview — Empty State (Alt)' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-meridian-labs-2026-07-20-13_38_01.png',                                                        caption: 'Workspace Overview — 2 Boards' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-meridian-labs-2026-07-20-14_12_55.png',                                                        caption: 'Workspace Overview — 3 Boards, Pro Plan' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-meridian-labs-boards-cmrt5g6mv000en4w39bt64ib8-2026-07-20-13_45_21.png',                       caption: 'Kanban Board — Product Roadmap' },
        { src: '/projects/axiom-ai/kanban-board-product-roadmap-alt.jpg',                                                                                                      caption: 'Kanban Board — Product Roadmap (Alt)' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-meridian-labs-boards-cmrt5g6mv000en4w39bt64ib8-2026-07-20-13_45_37.png',                       caption: 'Create Task' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-meridian-labs-boards-cmrt5g6mv000en4w39bt64ib8-2026-07-20-13_45_56.png',                       caption: 'Task Detail — Axiom Intelligence' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-meridian-labs-boards-cmrt5g6mv000en4w39bt64ib8-2026-07-20-13_46_37.png',                       caption: 'Axiom Search — Command Palette' },
        { src: '/projects/axiom-ai/command-palette-alt.jpg',                                                                                                                   caption: 'Axiom Search — Command Palette (Alt)' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-meridian-labs-boards-cmrt5g6mv000en4w39bt64ib8-analytics-2026-07-20-13_53_08.png',             caption: 'Sprint Analytics — Product Roadmap' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-meridian-labs-boards-cmrt5g7dg000jn4w3p2szpu9p-2026-07-20-14_13_10.png',                       caption: 'Scrum Board — Engineering Sprint' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-solace-analytics-boards-cmrt6nuez000wjww3xuregfgs-2026-07-20-14_14_14.png',                    caption: 'Kanban Board — Core Platform (Solace Analytics)' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-solace-analytics-boards-cmrt6nuez000wjww3xuregfgs-analytics-2026-07-20-14_15_16.png',          caption: 'Sprint Analytics — Core Platform' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-meridian-labs-team-2026-07-20-13_38_13.png',                                                   caption: 'Team Members & Roles' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-meridian-labs-settings-2026-07-20-13_39_33.png',                                               caption: 'Workspace Settings' },
        { src: '/projects/axiom-ai/settings-developers-alt.jpg',                                                                                                               caption: 'Workspace Settings — Developers' },
        { src: '/projects/axiom-ai/settings-developers-alt-2.jpg',                                                                                                             caption: 'Workspace Settings — Developers (Alt)' },
        { src: '/projects/axiom-ai/developer-api-keys-webhooks.jpg',                                                                                                           caption: 'Developer API Keys & Webhooks' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-meridian-labs-audit-log-2026-07-20-13_42_57.png',                                              caption: 'Audit Log' },
        { src: '/projects/axiom-ai/audit-log-export.jpg',                                                                                                                      caption: 'Audit Log Export' },
        { src: '/projects/axiom-ai/audit-log-csv-export.jpg',                                                                                                                  caption: 'Audit Log CSV Export' },
        { src: '/projects/axiom-ai/screencapture-axiom-kanban-board-vercel-app-meridian-labs-settings-billing-2026-07-20-13_53_47.png',                                      caption: 'Billing & Subscription — Free Plan' },
        { src: '/projects/axiom-ai/billing-pro-plan.jpg',                                                                                                                       caption: 'Billing & Subscription — Pro Plan' },
        { src: '/projects/axiom-ai/webhook-delivery-testing.jpg',                                                                                                              caption: 'Webhook Delivery Testing' },
        { src: '/projects/axiom-ai/screencapture-checkout-stripe-c-pay-cs-test-a1bB1GwLi5Ot6ZLiGZNOfshty9y6gJmuDDRc8c7hQhY0Bcg7PU5px6fq8z-2026-07-20-14_02_48.png',            caption: 'Stripe Checkout' },
        { src: '/projects/axiom-ai/screencapture-file-C-Users-MSI-Downloads-Invoice-MLJNI4I1-0001-pdf-2026-07-20-14_03_59.png',                                               caption: 'Invoice PDF' },
        { src: '/projects/axiom-ai/invoice-pdf-alt.jpg',                                                                                                                       caption: 'Invoice PDF (Alt)' },
        { src: '/projects/axiom-ai/axiom-loader.jpg',                                                                                                                          caption: 'Branded Loading Screen' },
      ],
    },
  },
  {
    icon: 'FileSearch',
    title: 'Résona',
    description: 'AI-powered resume and job-match platform — semantic scoring via real vector embeddings (pgvector), AI section rewriting, tailored cover letters, and a kanban application tracker, with a public no-signup demo and full FR/EN support.',
    metrics: ['pgvector Search', 'Dual-AI Pipeline', 'Stripe Billing', 'Production-Grade'],
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'Groq Llama 3.3', 'HuggingFace', 'Neon PostgreSQL', 'pgvector', 'Prisma', 'NextAuth v5', 'Stripe', 'Upstash Redis', 'UploadThing', 'next-intl', 'Sentry'],
    category: 'ai',
    logoImage: '/resona-icon.png',
    published: true,
    details: {
      longDescription: 'Résona is an AI-powered resume and job-match analysis platform — a portfolio project demonstrating end-to-end product and engineering ownership, from vector search infrastructure to billing to a fully bilingual UI. The platform pairs a Groq-powered language model for match scoring, gap detection, resume rewriting, and cover letter generation with a dedicated HuggingFace embeddings pipeline stored natively in Postgres via pgvector — a real semantic similarity layer, not a keyword match. A complete Stripe-gated Free/Pro billing system, a kanban application tracker, and a public no-signup demo round out the product.',
      highlights: [
        'Real vector search, not a keyword match — resume and job embeddings computed independently, compared via pgvector cosine similarity',
        'Dual-AI architecture — generation (Groq) and embeddings (HuggingFace) are deliberately separate services',
        'Production-grade billing — real Stripe Checkout, Customer Portal, webhook-driven plan sync',
        'Try it without an account — a public demo runs the real pipeline, no signup, no database writes',
        'Type-safe full-stack — Next.js App Router, Prisma, TypeScript, Zod validation on every route',
        "Rate-limited by design — Upstash Redis, correct under Vercel's stateless functions",
        'Observability built-in — Sentry error monitoring',
      ],
      status: 'Live',
      live:   'https://resona-job-match.vercel.app/',
      github: 'https://github.com/SaadaniMohamedAmine/resona-job-match',
      capabilities: [
        { capability: 'Semantic Match Engine',      what: "Groq (Llama 3.3 70B) analysis + HuggingFace embeddings stored as pgvector columns — a true vector similarity score shown alongside the AI's language-based match score." },
        { capability: 'Gap Detection & Rewrite',     what: 'Matching/missing skills extraction, section-by-section AI rewrite with before/after comparison, grounded strictly in the original resume.' },
        { capability: 'Cover Letter Generation',     what: 'One-click, tailored to the specific role and company.' },
        { capability: 'Application Tracker',         what: 'Kanban board (Applied → Interview → Offer → Rejected), drag-and-drop via dnd-kit, optimistic updates.' },
        { capability: 'Stripe Billing & Plan Gates', what: 'Free (3 analyses/30 days) / Pro (200/30 days, unlimited rewrite & cover letter) — Checkout, Customer Portal, server-side gating on every AI route.' },
        { capability: 'Rate Limiting',               what: 'Upstash Redis sliding-window limiter, per-user quotas plus a separate anonymous per-IP limiter for the public demo.' },
        { capability: 'Public Demo',                 what: 'Run a real analysis with zero signup — sample profiles, live Groq + embeddings call, no database writes.' },
        { capability: 'Command Palette',             what: '⌘K instant navigation and actions, anywhere in the app.' },
        { capability: 'FR / EN i18n',                what: 'Full internationalization with next-intl, locale-aware routing.' },
      ],
      gallery: [
        { src: '/projects/resona-ai/screencapture-localhost-3000-2026-07-23-01_15_13.png',                                              caption: 'Landing Page' },
        { src: '/projects/resona-ai/screencapture-localhost-3000-login-2026-07-23-01_17_21.png',                                        caption: 'Login' },
        { src: '/projects/resona-ai/screencapture-localhost-3000-sign-up-2026-07-23-01_17_29.png',                                      caption: 'Sign Up' },
        { src: '/projects/resona-ai/screencapture-localhost-3000-pricing-2026-07-23-01_15_33.png',                                      caption: 'Pricing' },
        { src: '/projects/resona-ai/screencapture-localhost-3000-pricing-2026-07-23-01_15_44.png',                                      caption: 'Pricing — Command Palette' },
        { src: '/projects/resona-ai/screencapture-localhost-3000-built-with-2026-07-23-01_16_03.png',                                   caption: 'Built With' },
        { src: '/projects/resona-ai/screencapture-localhost-3000-built-with-2026-07-22-13_16_20.png',                                   caption: 'Built With — Alt' },
        { src: '/projects/resona-ai/screencapture-localhost-3000-fr-built-with-2026-07-22-13_16_45.png',                                caption: 'Built With (FR)' },
        { src: '/projects/resona-ai/screencapture-localhost-3000-terms-2026-07-23-01_16_20.png',                                        caption: 'Terms of Service' },
        { src: '/projects/resona-ai/screencapture-localhost-3000-privacy-2026-07-23-01_16_11.png',                                      caption: 'Privacy Policy' },
        { src: '/projects/resona-ai/screencapture-localhost-3000-demo-2026-07-23-01_16_38.png',                                         caption: 'Live Demo — Sample Profiles' },
        { src: '/projects/resona-ai/screencapture-localhost-3000-demo-2026-07-23-01_16_54.png',                                         caption: 'Live Demo — Search Filter' },
        { src: '/projects/resona-ai/screencapture-localhost-3000-demo-2026-07-23-01_17_11.png',                                         caption: 'Live Demo — Match Result' },
        { src: "/projects/resona-ai/Capture d’écran 2026-07-23 012515.jpg",                                                             caption: 'Command Palette' },
        { src: "/projects/resona-ai/Capture d’écran 2026-07-23 012415.jpg",                                                             caption: 'Branded Loading Screen' },
        { src: '/projects/resona-ai/screencapture-resona-job-match-vercel-app-dashboard-2026-07-23-03_21_57.png',                       caption: 'Dashboard' },
        { src: '/projects/resona-ai/screencapture-resona-job-match-vercel-app-fr-dashboard-2026-07-23-01_25_33.png',                    caption: 'Dashboard (FR) — Empty State' },
        { src: '/projects/resona-ai/screencapture-resona-job-match-vercel-app-upload-2026-07-23-02_05_18.png',                          caption: 'Upload — Free Plan' },
        { src: '/projects/resona-ai/screencapture-resona-job-match-vercel-app-upload-2026-07-23-03_39_36.png',                          caption: 'Upload — Pro Plan' },
        { src: '/projects/resona-ai/screencapture-resona-job-match-vercel-app-upload-2026-07-23-02_27_00.png',                          caption: 'Upload — Quota Reached (Upgrade Gate)' },
        { src: '/projects/resona-ai/screencapture-resona-job-match-vercel-app-fr-upload-2026-07-23-01_26_05.png',                       caption: 'Upload (FR)' },
        { src: '/projects/resona-ai/screencapture-resona-job-match-vercel-app-fr-upload-2026-07-23-01_27_45.png',                       caption: 'Upload (FR) — Resume Attached' },
        { src: "/projects/resona-ai/Capture d’écran 2026-07-23 023657.jpg",                                                             caption: 'Analyzing Profile — Progress' },
        { src: '/projects/resona-ai/screencapture-resona-job-match-vercel-app-results-cmrwrsqmr0004jj04pyx7fioe-2026-07-23-02_25_48.png', caption: 'Results — Room to Sharpen (40%)' },
        { src: '/projects/resona-ai/screencapture-resona-job-match-vercel-app-results-cmrwsq9240004ky04c4m0fjuh-2026-07-23-02_51_50.png', caption: 'Results — Low Match (10%)' },
        { src: '/projects/resona-ai/screencapture-resona-job-match-vercel-app-results-cmrwsq9240004ky04c4m0fjuh-rewrite-2026-07-23-02_52_18.png', caption: 'Rewrite Analysis' },
        { src: '/projects/resona-ai/screencapture-resona-job-match-vercel-app-results-cmrwstk7g000bky04fsoorx53-rewrite-2026-07-23-02_57_57.png', caption: 'Rewrite — Summary (Draft)' },
        { src: '/projects/resona-ai/screencapture-resona-job-match-vercel-app-results-cmrwstk7g000bky04fsoorx53-rewrite-2026-07-23-02_58_11.png', caption: 'Rewrite — Skills (Draft)' },
        { src: "/projects/resona-ai/Capture d’écran 2026-07-23 025842.jpg",                                                              caption: 'Rewrite — Skills (Optimized)' },
        { src: "/projects/resona-ai/Capture d’écran 2026-07-23 025858.jpg",                                                              caption: 'Rewrite — Skills (Applied)' },
        { src: '/projects/resona-ai/screencapture-resona-job-match-vercel-app-results-cmrwsq9240004ky04c4m0fjuh-cover-letter-2026-07-23-02_52_04.png', caption: 'Cover Letter — Upgrade Gate' },
        { src: "/projects/resona-ai/Capture d’écran 2026-07-23 025433.jpg",                                                             caption: 'Cover Letter — Generated' },
        { src: "/projects/resona-ai/Capture d’écran 2026-07-23 025521.jpg",                                                             caption: 'Cover Letter — Downloaded' },
        { src: '/projects/resona-ai/screencapture-resona-job-match-vercel-app-tracker-2026-07-23-02_04_46.png',                         caption: 'Application Tracker — Empty State' },
        { src: '/projects/resona-ai/screencapture-resona-job-match-vercel-app-tracker-2026-07-23-03_22_34.png',                         caption: 'Application Tracker' },
        { src: '/projects/resona-ai/screencapture-resona-job-match-vercel-app-resumes-2026-07-23-02_04_37.png',                         caption: 'History — Empty State' },
        { src: '/projects/resona-ai/screencapture-resona-job-match-vercel-app-resumes-2026-07-23-03_22_12.png',                         caption: 'History' },
        { src: '/projects/resona-ai/screencapture-resona-job-match-vercel-app-settings-account-2026-07-23-02_04_56.png',                caption: 'Settings — Account' },
        { src: '/projects/resona-ai/screencapture-resona-job-match-vercel-app-settings-billing-2026-07-23-02_05_08.png',                caption: 'Settings — Billing (Free Plan)' },
        { src: "/projects/resona-ai/Capture d’écran 2026-07-23 025344.jpg",                                                             caption: 'Billing — Upgraded to Pro' },
        { src: '/projects/resona-ai/screencapture-checkout-stripe-c-pay-cs-test-a1qgdUxnPBq6bAWgjcD9ZcQOovyZOhtjUspjRSbqsd116nuyAZMsduiMPe-2026-07-23-02_52_53.png', caption: 'Stripe Checkout' },
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
