import type { CvDocument } from '../../types/cv';

export const frenchCv: CvDocument = {
  locale: 'fr',
  fileName: 'christophe-paganon-cv-fr.pdf',
  labels: {
    experiences: 'EXPERIENCES',
    projects: 'PROJETS',
    skills: 'COMPETENCES',
    languages: 'LANGUES',
    education: 'FORMATION',
  },
  header: {
    name: 'CHRISTOPHE PAGANON',
    title: 'Developpeur web full-stack lead TypeScript/PHP',
    summary:
      "Ingenieur lead avec plus de 7 ans d'experience en agence, startup et produit. Je construis des applications web en production, des fonctionnalites IA et des systemes de livraison avec un souci de clarte, de maintenabilite, d'ownership produit et d'execution fiable.",
    email: 'info@chrispaganon.com',
    website: 'https://chrispaganon.com',
    linkedin: 'https://linkedin.com/in/chrispaganon',
    github: 'https://github.com/chris-paganon',
    location: 'Espagne',
  },
  experiences: [
    {
      company: 'Plutaro',
      role: 'Lead Full-stack Developer',
      dateRange: '08/2024 - Present',
      location: 'Remote / Montreal, Canada',
      bullets: [
        'Direction du developpement sur des projets React, Next.js et React Native pour des produits IA, marketplaces et outils internes.',
        "Encadrement d'ingenieurs juniors, planification des jalons, revue de code et coordination des livraisons sur plusieurs projets.",
        "Construction de workflows produit assistes par l'IA et accompagnement de l'equipe sur l'usage responsable des coding agents.",
        'Livraison de fonctionnalites en production autour de Stripe, des integrations LLM, de Google Workspace et du mobile.',
        'Equilibre entre implementation technique, leadership technique, attentes QA et planification de releases.',
        'Aide a transformer des besoins produit flous en taches concretes, architecture et plans de livraison.',
      ],
    },
    {
      company: 'Progexia',
      role: 'Developpeur Web Full-stack',
      dateRange: '10/2022 - 06/2024',
      location: 'Remote / Montreal, Canada',
      bullets: [
        'Developpement d un tableau de gestion de portefeuille avec tables dynamiques, filtres, import CSV et controle d acces par roles en Vue et Express.',
        'Livraison de formulaires multi-etapes avances en Vue et PHP/WordPress pour des parcours assurance et e-commerce.',
        'Prise en charge autonome de projets complets et reference interne pour les implementations Vue et PrimeVue complexes.',
        'Gestion des integrations API, de l architecture frontend et de la coordination de livraison sur plusieurs mandats.',
        'Travail transversal entre Vue, Express, WordPress et automatisation de deploiement en contexte agence.',
        'Evolution dun role centre sur les features vers une responsabilite complete sur la qualite de mise en oeuvre.',
      ],
    },
    {
      company: 'Panier Quebecois',
      role: 'Cofondateur technique',
      dateRange: '04/2020 - 10/2022',
      location: 'Remote / Montreal, Canada',
      bullets: [
        'Developpement et maintenance complete de la plateforme e-commerce en WordPress et PHP.',
        'Creation doutils operationnels pour les exports, l inventaire, la fidelisation et la logistique tout en participant aux operations quotidiennes.',
        'Apprentissage concret de l ownership produit, de la priorisation et de la communication directe avec les parties prenantes.',
        'Combinaison de realisation technique, operations, service client, analytics et decisions marketing.',
        'Ce role a concretise ma transition du genie mecanique vers le logiciel a plein temps.',
        'Cette experience ma appris a rester proche des besoins business et pas seulement des considerations techniques.',
      ],
    },
    {
      company: 'Qube 4D Ventures',
      role: 'Concepteur mecanique',
      dateRange: '07/2018 - 04/2020',
      location: 'Montreal, Canada',
      bullets: [
        'Conception de prototypes et de systemes mecaniques avant un passage complet vers le logiciel.',
        'Base solide en resolution de problemes, iteration et pensee systeme, encore tres presente dans ma pratique logicielle.',
        'Travail direct avec la fabrication, les tests et le retour terrain dans un contexte produit rapide.',
        'Ce parcours materiel influence encore ma facon de gerer contraintes, validation et architecture logicielle.',
        'Il ma donne un reflexe d ingenierie tres concret qui reste visible dans mes estimations et mes choix de design.',
      ],
    },
  ],
  education: {
    school: 'Universite McGill',
    degree: 'Baccalaureat en genie mecanique',
    date: 'Diplome 04/2018',
  },
  projects: [
    {
      name: 'VueAI.tools',
      dateRange: '2023 - 2025',
      location: 'Montreal, QC',
      bullets: [
        'Assistant IA open source pour la documentation Vue, construit avec Nuxt et TypeScript.',
        'Pipeline RAG personnalise avec LlamaIndex et base vectorielle Qdrant preparee avec Python.',
        'Authentification, base de donnees, analytics et deploiement self-hosted sur un seul VPS.',
      ],
    },
    {
      name: 'DockIY',
      dateRange: '2024 - Present',
      location: 'Open source',
      bullets: [
        'Stack Docker minimaliste pour self-hoster plusieurs applications sur un seul serveur.',
        'Combine reverse proxy, analytics, monitoring et workflows de deploiement simples.',
        'Concu pour garder une infrastructure transparente, portable et entierement maitrisee.',
      ],
    },
    {
      name: 'switchbrd',
      dateRange: '2026 - Present',
      location: 'Open source',
      bullets: [
        'Switchboard de developpement local en Go avec CLI et interface terminal.',
        'Permet a plusieurs applications locales de partager une URL stable pendant le developpement.',
        'Pense pour simplifier les callbacks dauth et le changement dapplication en cours de dev.',
      ],
    },
    {
      name: 'tmux-cdls',
      dateRange: '2026 - Present',
      location: 'Open source',
      bullets: [
        'Plugin tmux qui garde une liste de fichiers visible en direct dans un panneau dedie.',
        'Construit en Go avec une approche tres pratique des workflows de developpement en terminal.',
        'Petit utilitaire directement inspire par un usage quotidien du terminal.',
      ],
    },
    {
      name: 'Batimatech',
      dateRange: '2022 - 2023',
      location: 'Mandat client',
      bullets: [
        'Mission freelance WordPress et jQuery pour un repertoire technologique et un site avec fonctionnalites membres.',
        'Livraison de fonctionnalites, communication client, deploiement et tenue des echeances.',
      ],
    },
  ],
  skills: [
    { label: 'VueJS', detail: '3000h+', rating: 5 },
    { label: 'TypeScript / JavaScript', detail: '3000h+', rating: 5 },
    { label: 'React / Next.js', detail: '3 ans', rating: 4 },
    { label: 'NodeJS', rating: 4 },
    { label: 'PHP / WordPress', detail: '5000h+', rating: 5 },
    { label: 'SQL', rating: 4 },
    { label: 'Docker', rating: 5 },
    { label: 'Linux', rating: 5 },
    { label: 'Python', rating: 3 },
    { label: 'IA / RAG', rating: 4 },
  ],
  languages: [
    { label: 'Anglais', detail: 'courant', rating: 5 },
    { label: 'Francais', detail: 'courant', rating: 5 },
    { label: 'Espagnol', detail: 'professionnel', rating: 4 },
  ],
};
