---
Title: DockIY
Description: Un setup Docker DIY minimal et open source pour déployer des apps web
id: 10
slug: dockiy
githubUrl: https://github.com/chris-paganon/DockIY
startDate: '2024'
endDate: maintenant
color: ef5350
---

DockIY est un setup Docker DIY minimal et open source conçu pour déployer plusieurs applications web sur un seul serveur. Vous possédez 100% du code — pas de magie noire, entièrement extensible et personnalisable.

La philosophie est simple : _« La perfection est atteinte, non pas lorsqu'il n'y a plus rien à ajouter, mais lorsqu'il n'y a plus rien à retirer. »_

Le setup inclut :

- **[Traefik](https://traefik.io/){:target="\_blank"}** pour le reverse proxy et SSL
- **[Umami](https://umami.is/){:target="\_blank"}** pour les analytics self-hosted
- **[Dozzle](https://dozzle.dev/){:target="\_blank"}** pour visualiser les logs des conteneurs
- **[Beszel](https://beszel.dev/){:target="\_blank"}** pour le monitoring et les notifications

Principes clés :

- **Aussi simple que possible** — beszel pour le monitoring au lieu d'un stack complexe cadvisor/prometheus/grafana
- **Pas de plateforme tierce** — contrairement à Coolify ou Dokploy, vous possédez et contrôlez tout le code
- **Infrastructure as code** — prévisualisez tout votre setup VPS localement avec `docker-compose.override.yml`
- **Déploiements DIY** — déployez avec un seul script depuis un build local, sans dépendance CI/CD
