---
Title: switchbrd
Description: A local dev switchboard for running multiple apps on one URL
id: 5
slug: switchbrd
githubUrl: https://github.com/chris-paganon/switchbrd
startDate: '2025'
endDate: now
image: /images/portfolio/switchbrd-screenshot.png
imageAlt: switchbrd terminal UI showing app status and registration
color: 4fc3f7
---

`switchbrd` is a local development switchboard for running multiple apps in parallel while keeping a single stable URL.

It listens on `http://localhost:5173` by default and forwards that port to whichever registered app is currently active. That lets you keep two or more apps running on their own ports while continuing to use the same browser tab, callback URL, and local origin during development.

![switchbrd terminal UI showing app status, active app, and app registration form](/images/portfolio/switchbrd-screenshot.png)

The project is written in **Go** and features a **terminal UI (TUI)** for managing registered apps, switching the active app, and managing ports — all from one screen.

Key features:

- **Reverse proxy** on a single shared port with instant app switching
- **CLI & TUI** for registering, renaming, removing, and activating apps
- **Background server** mode with `start` / foreground mode with `serve`
- Named apps for easy switching (`switchbrd activate my-app`)
