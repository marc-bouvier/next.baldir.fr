---
title: Uiua
date: 2024-10-29T12:32:00
description: Uiua est un langage de programmation tacite, orienté tableau et orienté pile.
tags:
  - Langage-de-programmation
stub: false
draft: false
---

C'est un langage que je considère comme [ésotérique](/glossaire/langage-esoterique).

Au moment où j'écris, le langage n'est pas stable.
Une communauté est très active pour bidouiller et le langage évolue régulièrement avec de nouveaux glyphes et comportements.

https://www.uiua.org/

---

Ex. J'ai codé [le Jeu de la Vie de Conway en Uiua](https://uiua.org/pad?src=0_13_0__IyBDb253YXkncyBHYW1lIG9mIExpZmUKCuKshu-4jyAgICAgICAg4oaQIOKGuyAxXzAK4qyH77iPICAgICAgICDihpAg4oa7IMKvMV8wCuKshe-4jyAgICAgICAg4oaQIOKGuyAwXzEK4p6h77iPICAgICAgICDihpAg4oa7IDBfwq8xCkNhcmQgICAgICDihpAgKysr4peM4p-c4qyG77iPIOKfnOKsh--4jyDin5zinqHvuI8g4p-c4qyF77iPCkRpYWdzICAgICDihpAgKysrIOKXjCDin5wo4qyG77iP4qyF77iPKSDin5wo4qyG77iP4p6h77iPKSDin5wo4qyH77iP4p6h77iPKSDin5wo4qyH77iP4qyF77iPKQpOZWlnaGJvcnMg4oaQICtDYXJkIOKfnERpYWdzCgrimK8g4oaQID0wICMgSW52ZXJ0IDAgYW5kIDEgLyBibGFjayBhbmQgd2hpdGUKCvCfkKMgICAgICAgICAg4oaQID0yKz0zOuKYrzogICAjIEJpcnRoCvCflbogICAgICAgICAg4oaQID0yKz3iiaUyOuKJpDMuICMgU3RheWluJyBBbGl2ZQpHZW5lcmF0aW9uIOKGkCArIOKKg_CfkKPwn5W6TmVpZ2hib3JzIC4KCvCflI0g4oaQIOKJoeKWveKfnOKWvQoKJmdpZnMgMTAg4oqe8J-UjSA1MCDimK8g4oeMW-KNpShHZW5lcmF0aW9uIC4pNDBdWwogIDBfMF8xXzBfMF8wXzBfMF8wXzAKICAxXzBfMV8wXzBfMF8wXzBfMF8wCiAgMF8xXzFfMF8wXzBfMF8wXzBfMAogIDBfMF8wXzBfMF8wXzBfMF8wXzAKICAwXzBfMF8wXzBfMF8wXzBfMF8wCiAgMF8wXzBfMF8wXzBfMF8wXzBfMAogIDBfMF8wXzBfMF8wXzBfMF8wXzAKICAwXzBfMF8wXzBfMF8wXzBfMF8wCiAgMF8wXzBfMF8wXzBfMF8wXzBfMAogIDBfMF8wXzBfMF8wXzBfMF8wXzAKXQo=)


![Capture d'écran du code du jeu de la vie en Uiua avec la coloration syntaxique](/public/img/uiua-game-of-life.png)

```text
# Conway's Game of Life

⬆️        ← ↻ 1_0
⬇️        ← ↻ ¯1_0
⬅️        ← ↻ 0_1
➡️        ← ↻ 0_¯1
Card      ← +++◌⟜⬆️ ⟜⬇️ ⟜➡️ ⟜⬅️
Diags     ← +++ ◌ ⟜(⬆️⬅️) ⟜(⬆️➡️) ⟜(⬇️➡️) ⟜(⬇️⬅️)
Neighbors ← +Card ⟜Diags

☯ ← =0 # Invert 0 and 1 / black and white

🐣          ← =2+=3:☯:   # Birth
🕺          ← =2+=≥2:≤3. # Stayin' Alive
Generation ← + ⊃🐣🕺Neighbors .

🔍 ← ≡▽⟜▽

&gifs 10 ⊞🔍 50 ☯ ⇌[⍥(Generation .)40][
  0_0_1_0_0_0_0_0_0_0
  1_0_1_0_0_0_0_0_0_0
  0_1_1_0_0_0_0_0_0_0
  0_0_0_0_0_0_0_0_0_0
  0_0_0_0_0_0_0_0_0_0
  0_0_0_0_0_0_0_0_0_0
  0_0_0_0_0_0_0_0_0_0
  0_0_0_0_0_0_0_0_0_0
  0_0_0_0_0_0_0_0_0_0
  0_0_0_0_0_0_0_0_0_0
]
```
