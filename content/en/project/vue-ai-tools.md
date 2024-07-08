---
Title: VueAI.tools
Description: GPT-Powered Assistant for VueJS Documentation
id: 1
slug: vue-ai-tools
url: https://vueai.tools/
githubUrl: https://github.com/chris-paganon/vue-ai-tools
startDate: 'November 2020'
endDate: now
image: /images/portfolio/vue-ai-tools-thumbnail.jpg
imageAlt: thumbnail VueAI.tools
color: 5fbb65d1
---

VueAI.tools is a project I have been building for fun. It is an AI assistant tool specifically tailored for VueJS. The website features a classic AI chatbot using **a custom RAG implementation with [LlamaIndex](https://www.llamaindex.ai/){:target="\_blank"}**. It also comes with a JSON pseudo-code component builder to improve the assistant's reliability:

![VueAI.tools component builder screenshot](/images/portfolio/component-builder-screenshot.png)

The website combines a lot of the tools and knowledge I have acquired over the years into an app hosted on a single VPS instance. The app is coded in **TypeScript** and runs Nuxt via Docker. It features a custom AI RAG model, a database, authentication, automated deployments, self-hosted analytics...

All the features are **self-hosted** except for the payment, email providers, and the AI Inference API:

- **RAG (Retrieval Augmented Generation) AI model** built with [LlamaIndex](https://www.llamaindex.ai/){:target="\_blank"} featuring a [Qdrant](https://qdrant.tech/){:target="\_blank"} vector database built with Python which the AI model queries in order to ground its answers on a more precise context.
- Authentication with [Lucia](https://lucia-auth.com/){:target="\_blank"}. Lucia is a low-level library that abstracts away the complexity of handling sessions. **Authentication is fully handled on the VPS & local database**.
- SQLite database for portability and to "keep it simple".
- TypeScript ORM with [Drizzle ORM](https://orm.drizzle.team/){:target="\_blank"}. Drizzle enables us to define the database structure in a schema and push modifications with migrations. It also comes with its own **type-safe wrapper for SQL** queries.
- [PrimeVue](https://primevue.org/){:target="\_blank"} UI library.

The tool is **served in Docker containers** and deployed via **GitHub Actions**:

- A GitHub Action builds the Nuxt app in a container running Node.js.
- The built directory is copied to the VPS and we restart the Node container of the app.
- The service is then served by a [Caddy](https://caddyserver.com/){:target="\_blank"} **reverse-proxy also running in Docker**.
- A **staging environment** runs in the exact same way when we push to the "stage" branch.
- The VPS also runs [Umami](https://umami.is/){:target="\_blank"} for **self-hosted analytics** (privacy-friendly alternative to Google Analytics).

As for the only non-self-hosted features:

- The AI inference is ran by the [DeepSeek](https://www.deepseek.com/){:target="\_blank"} API in order to cut down on costs. With enough traffic I would like to switch to a "self-hosted" solution but renting powerful enough GPUs is too expensive for now.
- Payment is provided by [Lemon Squeezy](https://www.lemonsqueezy.com/){:target="\_blank"}, a Stripe alternative that also handles tax declarations. The checkout page is served via a popup on the page. Successful **subscriptions are recorded in the database via a webhook**.
- Emails are sent via [SendGrid](https://sendgrid.com/en-us){:target="\_blank"}.
