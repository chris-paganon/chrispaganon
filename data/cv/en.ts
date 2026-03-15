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
      'Senior / Lead software web developer with 7+ years across startups, agencies and product teams. Built 25+ production apps, lead delivery and mentoring juniors. I thrive in small fast-paced teams where ownership, adaptability and a real love of building useful software matter.',
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
        'Lead developer on React, Next.js and React Native products for AI tools, marketplaces, internal tools, etc across 15+ projects..',
        'Turn ambiguous requirements into scoped milestones, technical plans and tasks for our team.',
        'Mentor junior engineers through project management, code review, and day-to-day work across projects.',
        'Ship production features across Stripe, LLM/RAG systems, real time voice agents, google workspace automation, cloudflare live streaming, etc.',
        'Help the team adopt AI coding agents with clear QA, review and release standards that keep quality high and increase efficiency.',
        'Contribute as both a hands-on senior engineer and delivery lead on an internal AI coding agent tool similar to Lovable, Bolt.new and v0.',
        'Manage Firebase deployments through Github Actions and Firebase CLI.',
      ],
    },
    {
      company: 'Progexia',
      role: 'Full-stack Web Developer',
      dateRange: '10/2022 - 06/2024',
      location: 'Remote / Montreal, Canada',
      bullets: [
        'Delivered full-stack client projects in Vue, Express, PHP and WordPress from discovery to production.',
        'Built complex data-heavy UIs, complex multi-step forms and custom admin tools with strong UX.',
        'Became the go-to engineer for difficult Vue and PrimeVue implementations and frontend architecture decisions.',
        'Integrated third-party APIs, auth, CSV imports and role-based access control across multiple projects.',
        'Set up deployment automation and release workflows for client work in a fast-paced agency environment.',
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
        'Learned to prioritize, communicate directly with stakeholders and stay close to business outcomes.',
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
        'That background still shapes how I approach problems, architecture solutions and do quality control.',
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
      location: 'Open source web app',
      bullets: [
        'Open source AI assistant for Vue documentation built with Nuxt and TypeScript.',
        'Custom RAG pipeline with LlamaIndex and a Qdrant vector database.',
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
        'Lets multiple local apps share one single URL during parallel AI coding sessions.',
        'Designed to simplify context switching.',
      ],
    },
    {
      name: 'tmux-cdls',
      dateRange: '2026 - Present',
      location: 'Open source',
      bullets: [
        'tmux plugin that keeps a live directory listing visible in a dedicated pane.',
        'simple bash script to help manage files and directories in the terminal.',
        'A small utility project for my day-to-day terminal usage.',
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
    { label: 'React / Next.js', detail: '3000h+', rating: 5 },
    { label: 'VueJS', detail: '3000h+', rating: 5 },
    { label: 'TypeScript / JavaScript', detail: '3000h+', rating: 5 },
    { label: 'Tailwind', detail: '3000h+', rating: 5 },
    { label: 'PHP / WordPress', detail: '5000h+', rating: 5 },
    { label: 'Linux', rating: 5 },
    { label: 'Firebase', rating: 5 },
    { label: 'Docker', rating: 4 },
    { label: 'SQL', rating: 4 },
    { label: 'Golang', rating: 3 },
    { label: 'Python', rating: 3 },
  ],
  languages: [
    { label: 'English', detail: 'fluent', rating: 5 },
    { label: 'French', detail: 'fluent', rating: 5 },
    { label: 'Spanish', detail: 'working proficiency', rating: 4 },
  ],
};
