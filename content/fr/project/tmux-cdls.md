---
Title: tmux-cdls
Description: Un plugin tmux qui affiche le contenu de votre répertoire dans un panneau mis à jour en temps réel
id: 10
slug: tmux-cdls
githubUrl: https://github.com/chris-paganon/tmux-cdls
startDate: '2025'
endDate: maintenant
image: /images/portfolio/tmux-cdls-screenshot.png
imageAlt: Capture d'écran tmux-cdls montrant le panneau de listing de répertoire
color: 66bb6a
---

`tmux-cdls` affiche le contenu de votre répertoire courant dans un panneau dédié qui se met à jour automatiquement lorsque vous modifiez le répertoire ou naviguez. Cela garde votre structure de fichiers visible en permanence, facilitant les opérations sur les fichiers et la navigation.

Le plugin est inspiré de [broot](https://dystroy.org/broot/){:target="\_blank"}, mais avec une approche beaucoup plus simple et sans vous sortir de votre workflow terminal habituel.

![Capture d'écran tmux-cdls](/images/portfolio/tmux-cdls-screenshot.png)

Fonctionnalités clés :

- **Listing de répertoire auto-actualisé** dans un panneau tmux dédié
- **Touche de toggle personnalisable**, taille du panneau et fréquence de mise à jour
- **Détection automatique** de `exa`, `lsd`, ou repli sur `ls`
- Installable via [TPM](https://github.com/tmux-plugins/tpm){:target="\_blank"} ou manuellement
