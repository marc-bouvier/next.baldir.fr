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

## Couper une vidéo

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

## Réduire l'espace disque d'une vidéo

Ré-encoder une vidéo avec libx264, garder le son tel quel.
En général la taille du fichier est considérablement réduite (env 5x moins par rapport à h264 (high)) pour une qualité similaire.
Lors de la lecture, libx264 semble utiliser un peu plus de CPU (+4%).

```shell
ffmpeg -i "2025-02-03_WOOP.mkv"  \
  -map 0:v -map 0:a \
  -c:v libx264 -c:a copy \
  "2025-02-03_WOOP-libx264.mkv"
```

Conversion en libx265. Réduit encore plus l'espace de stockage (presque 7x moins par rapport à h264 (high)). Requiert plus de CPU sur des machines plus anciennes.

```shell
ffmpeg -i "2025-02-03_WOOP.mkv"  \
  -map 0:v -map 0:a \
  -c:v libx265 -c:a copy \
  "2025-02-03_WOOP-libx265.mkv"
```

## Changer l'échelle d'une vidéo

```shell
ffmpeg -i "input.mov" \
-filter:v scale=720:-1 \
-c:a copy \
"output.mov"
```

## Changer le nombre d'images par seconde

```shell
ffmpeg -i "input.mov" \
-filter:v fps=30 \
-c:a copy \
"output.mov"
```