---
title: "Optimisation du build incrémental"
date: 2024-10-13T01:33:22+02:00
description: "Déclaration des collections avec `eleventyImport`"
tags:
  - 11ty
---

https://www.11ty.dev/docs/collections/#declare-your-collections-for-incremental-builds

Index: notes.md

```diff
 ---
 layout: layout.html
 title: Notes
+eleventyImport:
+  collections: ["allNotesFromRecentToOlder"]
 ---
```

Index: making-of.html

```diff
 layout: "default.html"
 title: "Making of"
 description: "Dans cette série d'articles, je relate comment je construis ce site au fur et à mesure."
+eleventyImport:
+    collections: ["making-of"]
 ---

```

Index: blog.html

```diff
 ---
 layout: layout.html
 title: "Articles de blog"
+eleventyImport:
+    collections: ["allFinishedArticles"]
 ---
```

Index: index.html

```diff
 ---
 layout: "landing.html"
 title: "Accueil"
+eleventyImport:
+    collections: ["latestFewFinishedArticles"]
 ---
```
