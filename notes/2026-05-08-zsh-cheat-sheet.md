---
title: Antisèche zsh
date: 2026-05-08T15:38:00
description: Référence rapide des choses que j’oublie quand j’utilise Zshell
tags:
  - Cheat-sheet
  - Zsh
permalink: cheat-sheets/zsh/
stub: true
---
## Completion

Quand un outil en lignes de commandes produit un script de complétion.

Le résultat de cette commande doit être versé dans un fichier `/usr/local/share/zsh/site-functions/_{nom_de_la_commande}`

Ex. Ajouter la complétion de la commande `cartu` ([Cartulary](https://gitlab.com/crazy-crafters/cartulary))

```sh
cartu completions zsh > /usr/local/share/zsh/site-functions/_cartu
```

