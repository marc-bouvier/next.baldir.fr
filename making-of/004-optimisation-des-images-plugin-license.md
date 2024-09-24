---
title: "Optimisation des images - installation du plugin"
date: 2024-07-16T22:22:02+02:00
description: "Les images sont souvent une source de problème pour la performance. Heureusement, on peut s’appuyer sur le plugin d’optimisation d’images de 11ty."
tags:
  - 11ty
---

Le [plugin d’optimisation des images](https://www.11ty.dev/docs/plugins/image/)
peut calculer des transformations d'images vers plusieurs tailles et formats.
Selon l’appareil et sa taille d’écran, les images des tailles adéquates seront téléchargées.
Cela peut économiser une quantité significative de données et rendre plus rapide le chargement des pages sur des
terminaux mobiles.

```shell
npm install @11ty/eleventy-img --dev
```

Comme c’est la première fois que j'ajoute un plugin dans mon projet, un projet nodeJs est initialisé.
Un fichier `package.json` est généré.

J’ai décidé d’en profiter pour ajouter les informations d’auteur et une [license](/glossaire/license-logicielle).

https://choosealicense.com/

J’ai choisi la license
[Creative Commons Attribution 4.0 International](https://choosealicense.com/licenses/cc-by-4.0/#) (CC-BY-4.0).
Elle permet à peu près tous les usages à condition d’en créditer la source d’origine et la license.

Index: .gitignore

```diff
+# node dependencies
+node_modules
```

Index: package.json

```json
{
  "name": "baldir.fr",
  "license": "CC-BY-4.0",
  "author": {
    "name": "Marc Bouvier",
    "email": "baldir.fr@gmail.com",
    "url": "https://baldir.fr"
  },
  "type": "module",
  "scripts": {
    "start": "eleventy --serve",
    "build": "eleventy"
  },
  "devDependencies": {
    "@11ty/eleventy": "^3.0.0-alpha.17",
    "@11ty/eleventy-img": "^5.0.0-beta.5",
    "@11ty/webc": "^0.11.4",
    "@types/11ty__eleventy-img": "^4.0.0"
  },
  "dependencies": {
    "@11ty/eleventy-img": "^4.0.2"
    "@11ty/eleventy-plugin-webc": "^0.11.2"
  }
}
```
