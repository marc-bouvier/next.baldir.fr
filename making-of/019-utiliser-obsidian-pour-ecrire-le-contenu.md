---
title: "Utiliser Obsidian pour écrire le contenu"
date: 2024-09-17T18:43:24+02:00
description: ""
tags:
  - Obsidian
  - 11ty
---



# Utiliser Obsidian pour écrire le contenu

Je souhaite utiliser [Obsidian](https://obsidian.md) pour écrire certaines de mes notes.

Ignorer certains fichiers utilisés par obsidian pour éviter qu’ils publient des pages.
J’utilise un fichier [`.eleventyignore`](https://www.11ty.dev/docs/ignores/) :

Index: .eleventyignore
```text
_obsidian
.obsidian
```

Je dois aussi ignore des certains fichiers de configuration d'Obsidian de git.

Index: .gitignore
```diff
 .idea
 # node dependencies
 node_modules
+/.obsidian/
+!/.obsidian/app.json
+!/.obsidian/community-plugins.json
+!/.obsidian/core-plugins.json
+!/.obsidian/templates.json
+!/.obsidian/plugins/templater-obsidian/data.json
```

Fichiers de configuration générés par Obsidian que je souhaite versionner :

- `.obsidian/app.json` : configuration globale du vault obsidian
- `.obsidian/community-plugins.json` : liste des plugins communautaires activés
- `.obsidian/core-plugins.json` : liste des plugins "core" activés
- `.obsidian/plugins/templater-obsidian/data.json` : Configuration du [plugin Obsidian Templater](https://silentvoid13.github.io/Templater/)
- `.obsidian/templates.json` : Configuration des templates Obsidian
- `_obsidian/templates/Template_quick-note.md` : template Obsidian me permettant de créer rapidement des notes avec des informations [front-matter](https://jekyllrb.com/docs/front-matter/) pré-remplies.

