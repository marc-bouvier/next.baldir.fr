---
title: "Amélioration du style"
date: 2024-09-18T23:16:33+02:00
description: ""
tags:
  - 11ty
---

![Avant: utilisation de styles par défaut. Police : Times New Roman. Le texte occupe toute la largeur disponible](/public/img/2024-09-18_style-avant.png)

![Après : Police : sans empattement. Le texte occupe une largeur moindre grâce à des marges plus importantes à droite et à gauche. Les extraits de code sont délimités par des gros pointillés gris clair.](/public/img/2024-09-18_style-apres.png)

- Augmentation des marges à droite et à gauche pour favoriser les retours à la ligne (environs 15 mots)
- Utilisation d'une police similaire à Arial
- Délimitation plus claire des extraits de code avec des gros pointillés
- Délimitation des citations et affichage en italique

Index: _includes/layout.html
```diff
     <meta name="description" content="{{global.description}}">
-    <meta name="viewport" content="width=device-width, initial-scale=1">
+    <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Baldir - {{title}}</title>
     <link rel="alternate" href="/feed.xml" title="Baldir - Flux RSS des articles de blog" type="application/rss+xml">
     <style>
         body {
-            max-width: 1200px;
+            padding: 0.5rem;
+            max-width: 640px;
             margin: 0 auto;
+            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
+        }
+
+        blockquote {
+            margin-inline: 0px;
+            margin-block: 0;
+            padding-block: 0.125em;
+            font-size: 1.125rem;
+            font-style: italic;
+            border-left: 0.25rem solid lightgray;
+            padding-inline: 1em;
         }
 
         img {
@@ -46,6 +58,15 @@
             overflow: hidden;
         }
 
+        .bold {
+            font-weight: bold;
+        }
+
+        pre {
+            border-style: dashed;
+            border-width: medium;
+            border-color: lightgray;
+        }
     </style>
     <link href="/public/css/a11y-light.min.css" rel="stylesheet"/>
 </head>
```