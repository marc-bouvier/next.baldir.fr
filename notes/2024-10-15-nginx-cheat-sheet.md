---
title: Antisèche Nginx
date: 2024-10-15T15:38:00
description: Référence rapide des choses que j’oublie quand j’utilise le serveur web Nginx
tags:
  - Web
  - Infrastructure
  - Architecture
  - Cheat-sheet
permalink: cheat-sheets/nginx/
stub: true
---

Voir aussi [nginx](/glossaire/nginx) - une autre [cheat sheet existante](https://github.com/SimulatedGREG/nginx-cheatsheet).
## Plusieurs sites statiques avec sous-domaine sur la même machine

Pour héberger un [site statique](/glossaire/site-statique) sur la même machine avec Nginx, il faut :

Lui associer un [nom-de-domaine](glossaire/nom-de-domaine.md) (ici, on utilise un sous-domaine) - il faut avoir configuré la [zone DNS](/glossaire/zone-dns) pour que le [domaine](/glossaire/domaine) ou [sous-domaine](glossaire/sous-domaine.md) pointe vers l'[adresse-ip](/glossaire/adresse-ip) du serveur sur lequel Nginx est installé

Ensuite, on va Indiquer à quel endroit chercher les fichiers à présenter (ex. [html](/glossaire/html), [css](/glossaire/css), images, [javascript](/glossaire/javascript), etc.)

```nginx
server {
  # Listen to yourdomain.com
  server_name old.baldir.fr;
}
```
