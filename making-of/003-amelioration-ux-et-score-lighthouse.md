---
title: "Amélioration de l’UX et score Lighthouse"
date: 2024-07-16T21:50:42+02:00
description: "Ligthouse est un outil qui permet d’auditer des sites web depuis son navigateur. Voyons comment on peut améliorer notre site fraichement créé."
tags:
  - 11ty
---

En créant un site depuis zéro, je peux faire en sorte qu'il soit le plus conforme et optimisé possible.
Si j'attends avant de suivre certaines pratiques d'optimisation, elles seront bien plus difficiles à mettre en place.

J'ai lancé une analyse du site avec [Lighthouse](https://developer.chrome.com/docs/lighthouse/overview?hl=fr) depuis [les outils de développeur](outils-de-developpeur-chromium) de mon navigateur

Le résultat de cette analyse m'a donné un score sur 4 dimensions :

- Performance
- Accessibilité
- “Best practices”
- SEO

Pour le moment, les score sont presque tous à 100, c'est à dire le maximum.

Il y a quelques recommendation d'accessibilité qui me sont proposées :

- Ajout de la balise `meta` [viewport](https://developer.chrome.com/docs/lighthouse/best-practices/viewport?utm_source=lighthouse&utm_medium=devtools&hl=fr)
- Ajout de la balise `meta` [description](https://developer.chrome.com/docs/lighthouse/seo/meta-description?utm_source=lighthouse&utm_medium=devtools&hl=fr)

Dans le fichier de mise en page `layout.html`, J'ai paramétré la balise `meta` description avec un  [fichier global data](https://www.11ty.dev/docs/data-global/).

Index: index.html

```diff
 ---
 layout: layout.html
 title: Baldir
+description: "Foo"
 ---
```

_data/global.json

```json
{
  "description": "Développeur logiciel en quête du sens dans un monde aux ressources limitées."
}
```

Index: _includes/layout.html

```diff
 <html lang="fr">
 <head>
     <meta charset="UTF-8">
+    <meta name="description" content="{{ '{{global.description}}' | escape }}" >
+    <meta name="viewport" content="width=device-width, initial-scale=1">
     <title>Baldir - {{ '{{title}}' | escape }}</title>
 </head>
 <body>
```
