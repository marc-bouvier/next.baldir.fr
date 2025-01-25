---
title: Le Glider (Jeu de la vie)
date: 2024-10-28T09:14:00
description: Le “Glider” (ou flotteur) est une des formes de vies 👾 découvertes dans “Le Jeu de la Vie” (Game of Life) de John Conway. Il y aura peut-être des Gliders à la Global Day of Code Retreat le samedi 9 novembre à Strasbourg.
tags:
  - Software-craft
  - Apprenance
  - Coaching-technique
  - Langage-de-programmation
  - Programmation-en-binôme
stub: false
draft: false
cover_image: /public/img/cover_images/gdcr-2024-glider.gif
cover_image_alt: "Un Glider (“Flotteur”) du Jeu de la Vie de Conway se déplace par dessus un texte en arrière plan : “Global Day of Code Retreat”."
date_updated: 2025-01-25T19:10
---

Chaque année en novembre des milliers de développeurs et développeuses se réunissent pour participer à "Global Day of Code Retreat".
👉 Ce sera à Strasbourg [le samedi 9 novembre à 9h](https://www.meetup.com/fr-FR/software-crafters-strasbourg/events/304179139) à **La Plage Digitale**. 👈

---

Le flotteur a cette particularité qu'en 4 "générations" il aura retrouvé sa forme initiale, mais légèrement plus loin.

Ça donne l'impression d'une entité structurée qui se déplace 🛸. 
Or, il s'agit d'une succession de naissances et de morts de cellules de proche en proche.

J'ai ressenti fortement cette illusion de mouvement quand j'ai réalisé le petit dessin animé 🎨 ci-dessous.

Voici la succession de générations qui amène le flotteur à reprendre sa forme, mais juste à côté.

```text
0010
1010
0110
0000

0100
0011
0110
0000

0010
0001
0111
0000

0000
0101
0011
0010

0000
0001
0101
0011
```

Si tu ne comprends pas trop ce que tu viens de lire, pas de panique ! 
Nous allons prendre le temps de coder ce jeu de plein de façons différentes.

