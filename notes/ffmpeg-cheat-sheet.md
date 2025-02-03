---
title: Antisèches ffmpeg
date: 2025-02-03T16:49:50+01:00
tags:
  - How-to
  - Ffmpeg
  - Cheat-sheet
description: Petites astuces pour manipuler vidéo et son en ligne de commande
stub: false
draft: false
---


Couper une vidéo depuis le moment indiqué par `-ss` et jusqu'au moment indiqué par `-to`.
En absence de `-to`, le flux est tronqué jusqu'à la fin de la vidéo.

```sh
ffmpeg -i "2025-02-03 09-00-38.mkv" \
  -ss 00:00:00 \
  -to 3:33:40 \
  -codec copy \
  "2025-02-03 09-00-38-edited.mkv"
```

- `-codec copy` pour copier le stream sans réencoder