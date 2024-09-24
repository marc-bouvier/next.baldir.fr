---
title: "Échafaudage avec 11ty"
date: 2024-07-16T18:15:46+02:00
description: "Car il faut bien commencer quelque-part. Je démarre le blog avec Eleventy."
tags:
  - 11ty
---

Je vais initialiser un projet avec [Eleventy (11ty)](https://www.11ty.dev/)

11ty est un [générateur de sites statiques](/glossaire/generateur-de-sites-statiques).
Une partie de la communauté est particulièrement sensible à la performance, l'accessibilité et le référencement.
Ils ont mis en place [un tableau de scores](https://www.11ty.dev/speedlify/) pour inviter des créateur-ices de sites à les optimiser

## Mise en place de 11ty

Je crée un fichier markdown `index.md` qui sera la racine du site.

```shell
echo '# Heading' > index.md
```

Je lance la commande suivante.

```shell
npx @11ty/eleventy --serve
```

Le site est accessible à l'adresse suivante : http://localhost:8080
