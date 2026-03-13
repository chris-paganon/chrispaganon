---
Title: DockIY
Description: A minimal, open source DIY Docker setup for deploying web apps
id: 15
slug: dockiy
githubUrl: https://github.com/chris-paganon/DockIY
startDate: '2024'
endDate: now
color: ef5350
---

DockIY is a minimal & open source DIY Docker setup meant for deploying several web apps to a single server. You own 100% of the code — no black magic, fully extensible and customizable.

The philosophy is simple: *"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away."*

The setup includes:

- **[Traefik](https://traefik.io/){:target="\_blank"}** for reverse proxy and SSL
- **[Umami](https://umami.is/){:target="\_blank"}** for self-hosted analytics
- **[Dozzle](https://dozzle.dev/){:target="\_blank"}** for viewing container logs
- **[Beszel](https://beszel.dev/){:target="\_blank"}** for monitoring and notifications

Key principles:

- **As simple as possible** — beszel for monitoring instead of a complex cadvisor/prometheus/grafana stack
- **No third-party platforms** — unlike Coolify or Dokploy, you own and control all the code
- **Infrastructure as code** — preview your entire VPS setup locally with `docker-compose.override.yml`
- **DIY deployments** — deploy with a single script from a local build, no CI/CD dependency required
