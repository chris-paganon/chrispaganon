import type { CvDocument } from '../../types/cv';

export const englishCv: CvDocument = {
  locale: 'en',
  fileName: 'christophe-paganon-cv-en.pdf',
  labels: {
    experiences: 'EXPERIENCES',
    projects: 'PROJECTS',
    skills: 'SKILLS',
    languages: 'LANGUAGES',
    education: 'EDUCATION',
  },
  header: {
    name: 'CHRISTOPHE PAGANON',
    title: 'Lead full-stack TypeScript/PHP web developer',
    summary:
      'Lead engineer with 7+ years of experience across agency, startup and product work. I build production web apps, AI features and delivery systems with a focus on clarity, maintainability, product ownership and reliable execution.',
    email: 'info@chrispaganon.com',
    website: 'https://chrispaganon.com',
    linkedin: 'https://linkedin.com/in/chrispaganon',
    github: 'https://github.com/chris-paganon',
    location: 'Spain',
  },
  experiences: [
    {
      company: 'Plutaro',
      role: 'Lead Full-stack Developer',
      dateRange: '08/2024 - Present',
      location: 'Remote / Montreal, Canada',
      bullets: [
        'Leading delivery on React, Next.js and React Native projects for AI products, marketplaces and internal tools.',
        'Managing junior engineers, planning milestones, reviewing code and coordinating releases across multiple projects.',
        'Building AI-assisted product workflows and helping the team adopt coding agents responsibly.',
        'Shipping production features across Stripe, LLM integrations, Google Workspace automation and mobile applications.',
        'Balancing hands-on engineering with technical leadership, QA expectations and release planning.',
        'Helping translate ambiguous product requirements into concrete tasks, architecture and delivery plans.',
      ],
    },
    {
      company: 'Progexia',
      role: 'Full-stack Web Developer',
      dateRange: '10/2022 - 06/2024',
      location: 'Remote / Montreal, Canada',
      bullets: [
        'Built a portfolio management dashboard with dynamic tables, filters, CSV import and role-based access control using Vue and Express.',
        'Delivered advanced multi-step forms in Vue and PHP/WordPress, including insurance and e-commerce workflows.',
        'Owned full projects independently and became the go-to resource for complex Vue and PrimeVue implementations.',
        'Handled API integration, frontend architecture and delivery coordination across multiple client projects.',
        'Worked across Vue, Express, WordPress and deployment automation in a fast-paced agency setting.',
        'Moved from feature delivery to full project ownership with direct responsibility for implementation quality.',
      ],
    },
    {
      company: 'Panier Quebecois',
      role: 'Technical Co-founder',
      dateRange: '04/2020 - 10/2022',
      location: 'Remote / Montreal, Canada',
      bullets: [
        'Built and maintained the full e-commerce platform as a custom WordPress and PHP application.',
        'Created operations tooling for exports, inventory, loyalty and logistics while helping run the business day to day.',
        'Learned product ownership, prioritization and direct stakeholder communication under real business constraints.',
        'Combined technical execution with operations, customer service, analytics and marketing decisions.',
        'This role anchored my transition from engineering school and hardware work into software full time.',
        'Built the habit of staying close to business outcomes instead of thinking only in technical terms.',
      ],
    },
    {
      company: 'Qube 4D Ventures',
      role: 'Mechanical Designer',
      dateRange: '07/2018 - 04/2020',
      location: 'Montreal, Canada',
      bullets: [
        'Designed prototypes and manufacturing-ready mechanical systems before transitioning full-time into software.',
        'Built a strong habit of structured problem solving, iteration and systems thinking that still shapes my engineering work.',
        'Worked directly with fabrication, testing and field feedback in a fast-moving product environment.',
        'That hardware background still informs how I approach constraints, validation and architecture in software.',
        'It gave me a practical engineering mindset that still shows up in estimation, debugging and design decisions.',
      ],
    },
  ],
  education: {
    school: 'McGill University',
    degree: 'Bachelor of Mechanical Engineering',
    date: 'Graduated 04/2018',
  },
  projects: [
    {
      name: 'VueAI.tools',
      dateRange: '2023 - 2025',
      location: 'Montreal, QC',
      bullets: [
        'Open source AI assistant for Vue documentation built with Nuxt and TypeScript.',
        'Custom RAG pipeline with LlamaIndex and a Python-built Qdrant vector database.',
        'Self-hosted authentication, database, analytics and deployment stack on a single VPS.',
      ],
    },
    {
      name: 'DockIY',
      dateRange: '2024 - Present',
      location: 'Open source',
      bullets: [
        'Minimal Docker deployment stack for self-hosting multiple apps on one server.',
        'Combines reverse proxy, analytics, monitoring and simple DIY deployment workflows.',
        'Built to keep infrastructure transparent, portable and fully owned.',
      ],
    },
    {
      name: 'switchbrd',
      dateRange: '2026 - Present',
      location: 'Open source',
      bullets: [
        'Go-based local development switchboard with CLI and terminal UI.',
        'Lets multiple local apps share one stable URL during development.',
        'Designed to simplify local auth callbacks and app switching while coding.',
      ],
    },
    {
      name: 'tmux-cdls',
      dateRange: '2026 - Present',
      location: 'Open source',
      bullets: [
        'tmux plugin that keeps a live directory listing visible in a dedicated pane.',
        'Built in Go with a practical focus on developer ergonomics and terminal workflows.',
        'A small utility project shaped by day-to-day terminal usage.',
      ],
    },
    {
      name: 'Batimatech',
      dateRange: '2022 - 2023',
      location: 'Client work',
      bullets: [
        'Freelance WordPress and jQuery work for a technology directory and membership-enabled website.',
        'Combined feature delivery, client communication, deployment and timeline ownership.',
      ],
    },
  ],
  skills: [
    { label: 'VueJS', detail: '3000h+', rating: 5 },
    { label: 'TypeScript / JavaScript', detail: '3000h+', rating: 5 },
    { label: 'React / Next.js', detail: '3y', rating: 4 },
    { label: 'NodeJS', rating: 4 },
    { label: 'PHP / WordPress', detail: '5000h+', rating: 5 },
    { label: 'SQL', rating: 4 },
    { label: 'Docker', rating: 5 },
    { label: 'Linux', rating: 5 },
    { label: 'Python', rating: 3 },
    { label: 'AI / RAG systems', rating: 4 },
  ],
  languages: [
    { label: 'English', detail: 'fluent', rating: 5 },
    { label: 'French', detail: 'fluent', rating: 5 },
    { label: 'Spanish', detail: 'working proficiency', rating: 4 },
  ],
};
