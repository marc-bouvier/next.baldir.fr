---
title: Antisèche bash
date: 2026-06-27T10:22:42
description: Référence rapide des choses que j’oublie quand j’utilise bash
tags:
  - Cheat-sheet
  - Zsh
  - Bash
permalink: cheat-sheets/bash/
---

## Commentaires sur multiligne

On peut mettre des commentaires sur des commandes bash multilignes en 
utilisant la substitution de commandes.

```bash
# Converts video to mp3
ffmpeg \
  -i "$1" \
  -vn         `# discard video` \
  -ar 44100   `# audio sampling frequency 44100 Hz` \
  -ac 2       `# 2 audio channels` \
  -b:a 192k   `# audio bitrate 192k` \
  "$1.mp3"
```
