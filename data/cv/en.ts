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
    title: 'Senior / Lead full-stack TypeScript/PHP engineer',
    summary:
      'Senior / lead software engineer with 7+ years across startups, agencies and product teams. Built 25+ production apps, lead delivery and mentoring, and do my best work in small teams where ownership, adaptability and a real love of building great software matter.',
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
        'Lead delivery on React, Next.js and React Native products for AI tools, marketplaces and internal platforms.',
        'Turn ambiguous requirements into scoped milestones, technical plans and shippable tasks with clients and teammates.',
        'Mentor junior engineers through code review, architecture guidance and day-to-day unblocking across active projects.',
        'Ship production features across Stripe, LLM/RAG systems, Google Workspace automation and mobile apps.',
        'Help the team adopt AI coding agents with clear QA, review and release standards that keep quality high.',
        'Contribute as both a hands-on senior engineer and delivery lead in a small, fast-moving team from scoping through release.',
      ],
    },
    {
      company: 'Progexia',
      role: 'Full-stack Web Developer',
      dateRange: '10/2022 - 06/2024',
      location: 'Remote / Montreal, Canada',
      bullets: [
        'Delivered full-stack client projects in Vue, Express, PHP and WordPress from discovery to production.',
        'Built complex data-heavy UIs, multi-step flows and custom admin tools with strong UX under tight constraints.',
        'Became the go-to engineer for difficult Vue and PrimeVue implementations and frontend architecture decisions.',
        'Integrated third-party APIs, auth, CSV imports and role-based access control across multiple projects.',
        'Set up deployment automation and release workflows for client work in a fast-paced agency environment.',
        'Grew from feature delivery to owning estimates, implementation quality and technical execution end to end.',
      ],
    },
    {
      company: 'Panier Quebecois',
      role: 'Technical Co-founder',
      dateRange: '04/2020 - 10/2022',
      location: 'Remote / Montreal, Canada',
      bullets: [
        'Built and maintained the full e-commerce platform as a custom WordPress/PHP application for a startup I co-founded.',
        'Shipped internal tooling for order exports, inventory, loyalty and logistics used by the business every week.',
        'Worked across product, engineering, analytics, customer support and operations in a small founding team.',
        'Learned to prioritize ruthlessly, communicate directly with stakeholders and stay close to business outcomes.',
        'Made technical decisions under real delivery pressure while the company handled 800+ monthly orders.',
        'Cemented a startup mindset built on ownership, adaptability and shipping what matters first in a business with constant moving parts.',
      ],
    },
    {
      company: 'Qube 4D Ventures',
      role: 'Mechanical Designer',
      dateRange: '07/2018 - 04/2020',
      location: 'Montreal, Canada',
      bullets: [
        'Mechanical engineering role before moving full-time into software after two years in product development.',
        'Built habits that still matter in web development: structured problem solving, iterative prototyping and validation.',
        'Worked with real-world constraints, manufacturing feedback and cross-functional coordination from the shop floor and clients.',
        'That background still shapes how I estimate, debug and design systems and delivery plans.',
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
