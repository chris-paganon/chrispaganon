---
Title: tmux-cdls
Description: A tmux plugin that shows your directory contents in a live-updating pane
id: 10
slug: tmux-cdls
githubUrl: https://github.com/chris-paganon/tmux-cdls
startDate: '2025'
endDate: now
image: /images/portfolio/tmux-cdls-screenshot.png
imageAlt: tmux-cdls screenshot showing directory listing pane
color: 66bb6a
---

`tmux-cdls` displays your current directory's contents in a dedicated pane that automatically updates as you modify the directory or navigate. This keeps your file structure visible at all times, making file operations and navigation easier.

The plugin is inspired by [broot](https://dystroy.org/broot/){:target="\_blank"}, but with a much simpler approach and without taking you out of your usual terminal workflow.

![tmux-cdls screenshot](/images/portfolio/tmux-cdls-screenshot.png)

Key features:

- **Auto-updating directory listing** in a dedicated tmux pane
- **Customizable toggle key**, pane size, and polling rate
- **Auto-detects** `exa`, `lsd`, or falls back to `ls`
- Installable via [TPM](https://github.com/tmux-plugins/tpm){:target="\_blank"} or manually
