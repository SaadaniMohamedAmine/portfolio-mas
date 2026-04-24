export const nav = ['About', 'Experience', 'Projects', 'Skills', 'Chat', 'Contact']

export const hero = {
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

export const about = {
  paragraphs: [
    "I'm a Senior Front-End Developer and Product Tech Manager with 4 years of experience building high-performance web applications using modern JavaScript frameworks — primarily React.js and Next.js.",
    "My edge is bridging the gap between engineering and product: I optimize Core Web Vitals, architect scalable UIs, and simultaneously lead cross-functional Agile teams to deliver products that resonate with users and business stakeholders alike.",
    "I've worked across the full product lifecycle — from ideation and roadmaps to production-grade releases — always obsessing over performance, code quality, and user experience.",
  ],
  details: [
    { icon: '📍', label: 'Location', value: 'Monastir, Tunisia',                              href: null },
    { icon: '🎓', label: 'Education', value: 'Bachelor of Electronics · ISSAT Sousse\nFull Stack JS · GoMyCode', href: null },
    { icon: '💼', label: 'Latest Role', value: 'Product Tech Manager @ WayConnect',           href: null },
    { icon: '✉️', label: 'Email',    value: 'mohamedaminesaadani79@gmail.com',                href: 'mailto:mohamedaminesaadani79@gmail.com' },
    { icon: '🔗', label: 'LinkedIn', value: 'linkedin.com/in/mohamed-amine-saadani',          href: 'https://www.linkedin.com/in/mohamed-amine-saadani/' },
  ],
  languages: [
    { name: 'Arabic',  level: 'Native', highlight: true  },
    { name: 'French',  level: 'Fluent', highlight: true  },
    { name: 'English', level: 'Fluent', highlight: true  },
    { name: 'German',  level: 'Basic',  highlight: false },
  ],
}

export const experience = [
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

export const projects = [
  {
    icon: '🔗',
    title: 'Job-Worker Matching Platform',
    description: 'A high-traffic platform connecting workers with local opportunities in real-time, serving thousands of daily users with geolocation matching.',
    metrics: ['5K+ daily users', '−65% hire time', '−50% server response'],
    stack: ['Meteor.js', 'React', 'Node.js', 'MongoDB'],
  },
  {
    icon: '🎓',
    title: 'E-Learning Platform',
    description: 'Full-stack learning platform enabling 3,000+ students to access courses with real-time progress tracking, video streaming, and quiz submissions.',
    metrics: ['3K+ students', '95% uptime', '−40% load time'],
    stack: ['MongoDB', 'Express.js', 'React', 'Node.js'],
  },
  {
    icon: '🎮',
    title: 'Front-End Game Applications',
    description: 'Scalable, high-performance browser-based game applications with seamless API integration, optimized for smooth user experience and Core Web Vitals.',
    metrics: ['+40% CWV score', 'High performance'],
    stack: ['React.js', 'REST APIs', 'Tailwind CSS', 'Material UI'],
  },
  {
    icon: '🚀',
    title: 'Agile Product Strategy — WayConnect',
    description: 'Led full product lifecycle for a SaaS platform — from roadmap planning and sprint facilitation to cross-functional team alignment across QA, web dev and UX.',
    metrics: ['30% faster MVPs', 'Multi-team alignment'],
    stack: ['Scrum', 'Figma', 'KPIs', 'OKRs'],
  },
]

export const skills = [
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

export const contact = {
  email:    'mohamedaminesaadani79@gmail.com',
  phone:    '+216 58 147 086',
  linkedin: 'https://www.linkedin.com/in/mohamed-amine-saadani/',
  location: 'Beni Hassen, Monastir, Tunisia',
}

export const footer = {
  text:    '© 2025 Mohamed Amine Saadani · Senior Front-End Developer & Product Tech Manager',
  subtext: 'Built with passion & React',
}

export const chatSuggestions = ['Tech stack?', 'Open to work?', 'Key achievements?', 'Management experience?']
