---
Title: switchbrd
Description: Un switchboard de développement local pour exécuter plusieurs apps sur une seule URL
id: 5
slug: switchbrd
githubUrl: https://github.com/chris-paganon/switchbrd
startDate: '2026'
endDate: maintenant
image: /images/portfolio/switchbrd-screenshot.png
imageAlt: Interface TUI de switchbrd montrant le statut des apps et le formulaire d'enregistrement
color: 4fc3f7
---

`switchbrd` est un switchboard de développement local pour exécuter plusieurs applications en parallèle tout en gardant une seule URL stable.

Il écoute sur `http://localhost:5173` par défaut et redirige ce port vers l'application active. Cela permet de garder plusieurs apps sur leurs propres ports tout en continuant à utiliser le même onglet de navigateur, URL de callback et origine locale pendant le développement.

![Interface TUI de switchbrd montrant le statut des apps, l'app active et le formulaire d'enregistrement](/images/portfolio/switchbrd-screenshot.png)

Le projet est écrit en **Go** et propose une **interface terminal (TUI)** pour gérer les applications enregistrées, changer l'application active et gérer les ports — le tout depuis un seul écran.

Fonctionnalités clés :

- **Reverse proxy** sur un seul port partagé avec changement d'app instantané
- **CLI & TUI** pour enregistrer, renommer, supprimer et activer des apps
- **Serveur en arrière-plan** avec `start` / mode premier plan avec `serve`
- Apps nommées pour un changement facile (`switchbrd activate my-app`)
