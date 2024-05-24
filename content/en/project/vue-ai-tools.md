---
Title: VueAI.tools
Description: GPT-Powered Assistant for VueJS Documentation
id: 1
slug: vue-ai-tools
url: https://vueai.tools/
startDate: 'November 2020'
endDate: now
image: /images/portfolio/vue-ai-tools-thumbnail.png
imageAlt: thumbnail VueAI.tools
color: 5fbb65d1
---

VueAI.tools is a project I have been building for fun. It is an AI assistant tool specifically tailored for VueJS. The website features a classic AI chatbot using the **OpenAI GPT API**. It also comes with a JSON pseudo-code component builder to improve the assistant's reliability:

![VueAI.tools component builder screenshot](/images/portfolio/component-builder-screenshot.png)

The website combines a lot of the tools and knowledge I have acquired over the years into an app hosted on a single VPS instance. The app is coded in **TypeScript** and runs Nuxt via Docker. It features a database, authentication, automated deployments, self-hosted analytics...

All the features are **self-hosted** except for the payment, email providers, and the GPT API:

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

- GPT is integrated via the OpenAI API. To improve the AI's answers, we feed it the VueJS documentation via OpenAI's [file search](https://platform.openai.com/docs/assistants/tools/file-search){:target="\_blank"} assistant feature. A **Python script is run to aggregate different pieces of the documentation** and upload it into an assistant as a [Vector store](https://platform.openai.com/docs/assistants/tools/file-search/vector-stores){:target="\_blank"}.
- Payment is provided by [Lemon Squeezy](https://www.lemonsqueezy.com/){:target="\_blank"}, a Stripe alternative that also handles tax declarations. The checkout page is served via a popup on the page. Successful **subscriptions are recorded in the database via a webhook**.
- Emails are sent via [SendGrid](https://sendgrid.com/en-us){:target="\_blank"}.
