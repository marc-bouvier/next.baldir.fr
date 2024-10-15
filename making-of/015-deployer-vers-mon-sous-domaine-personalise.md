---
title: "Déployer vers mon sous-domaine personnalisé"
date: 2024-08-30T20:48:31+02:00
description: ""
tags:
  - Github-pages
  - DNS
  - 11ty
---

# Utiliser mon sous-domaine

Je vais utiliser mon propre sous-domaine `next.baldir.fr`.

Pour le moment, je vais me contenter de continuer de passer par les Github Pages.

Mon sous-domaine pointe deja vers une adresse ip.

Il faut que je le change pour qu’il pointe vers celle de ma github page.

Pour ce faire j’ai du ajouter une entrée DNS `CNAME` pointant vers `marc-bouvier.github.io`.

Je dois aussi modifier le script de déploiement pour indiquer le chemin de base de celui-ci.

Index: .github/workflows/static.yml

```diff
         run: npm install
 
       - name: Build static site
-        run: npm run build -- --pathprefix=${{ steps.pages.outputs.base_path }}
+        run: npm run build
 
       - name: Upload artifact
         uses: actions/upload-pages-artifact@v3
```
