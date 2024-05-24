---
Title: VueAI.tools
Description: Un assistant GPT pour la documentation VueJS
id: 1
slug: vue-ai-tools
url: https://vueai.tools/
startDate: 'Novembre 2020'
endDate: maintenant
image: /images/portfolio/vue-ai-tools-thumbnail.jpg
imageAlt: thumbnail VueAI.tools
color: 5fbb65d1
---

VueAI.tools est un projet que j'ai construit pour le fun. C'est un outil d'assistant AI spécifiquement conçu pour VueJS. Le site web propose un chatbot AI classique utilisant l'**API OpenAI GPT**. Il comprend également un générateur de composants en pseudo-code JSON pour améliorer la fiabilité de l'assistant :

![Capture d'écran du générateur de composants VueAI.tools](/images/portfolio/component-builder-screenshot.png)

Le site web combine de nombreux outils et connaissances que j'ai acquis au fil des ans dans une application hébergée sur une instance VPS unique. L'application est codée en **TypeScript** et fonctionne avec Nuxt via Docker. Elle comprend une base de données, l'authentification, des déploiements automatisés, des self-hosted analytics...

Toutes les fonctionnalités sont **self-hosted** sauf pour le paiement, le fournisseur d'email et l'API GPT :

- Authentification avec [Lucia](https://lucia-auth.com/){:target="\_blank"}. Lucia est une bibliothèque de bas niveau qui abstrait la complexité de la gestion des sessions. **L'authentification est entièrement gérée sur le VPS & la base de données locale**.
- Base de données SQLite pour la portabilité et pour "garder les choses simples".
- ORM TypeScript avec [Drizzle ORM](https://orm.drizzle.team/){:target="\_blank"}. Drizzle nous permet de définir la structure de la base de données dans un schema et de pousser les modifications avec des migrations. Il comprend également son propre **type-safe wrapper pour les requêtes SQL**.
- Bibliothèque UI [PrimeVue](https://primevue.org/){:target="\_blank"}.

L'outil est **servi dans des conteneurs Docker** et déployé via **GitHub Actions** :

- Une action GitHub construit l'application Nuxt dans un conteneur exécutant Node.js.
- Le dossier construit est copié sur le VPS et nous redémarrons le conteneur Node de l'application.
- Le service est ensuite servi par un **reverse-proxy [Caddy](https://caddyserver.com/){:target="\_blank"} également exécuté dans Docker**.
- Un **environnement de staging** fonctionne de la même manière lorsque nous poussons sur la branche "stage".
- Le VPS exécute également [Umami](https://umami.is/){:target="\_blank"} pour les **self-hosted analytics** (alternative respectueuse de la vie privée à Google Analytics).

En ce qui concerne les seules fonctionnalités qui ne sont pas self-hosted :

- GPT est intégré via l'API OpenAI. Pour améliorer les réponses de l'AI, nous lui fournissons la documentation VueJS via la fonction d'assistant [file search](https://platform.openai.com/docs/assistants/tools/file-search){:target="\_blank"} d'OpenAI. Un **script Python est exécuté pour agréger différentes parties de la documentation** et les télécharger dans un assistant en tant que [Vector store](https://platform.openai.com/docs/assistants/tools/file-search/vector-stores){:target="\_blank"}.
- Le paiement est fourni par [Lemon Squeezy](https://www.lemonsqueezy.com/){:target="\_blank"}, une alternative à Stripe qui gère également les déclarations fiscales. La page de paiement est servie via une fenêtre popup sur la page. Les **abonnements sont enregistrés dans la base de données via un webhook**.
- Les emails sont envoyés via [SendGrid](https://sendgrid.com/en-us){:target="\_blank"}.
