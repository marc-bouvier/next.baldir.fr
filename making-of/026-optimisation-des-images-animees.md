---
title: "Optimisation des images animées"
date: 2024-09-24T17:41:52+02:00
description: "Le plugin d’optimisation d’images ne prend pas en compte les animations par défaut. Voici une façon de le faire."
tags:
  - 11ty
---

La documentation indique qu'on peut paramétrer [les options de Sharp](https://www.11ty.dev/docs/plugins/image/#output-animated-gif-or-webp).
Sharp est l'outil qui fait les optimisation sur lequel s'appuie le plugin d'optimisation d'images d'11ty.

Index: .eleventy.js
```diff
 export default function (eleventyConfig) {
  
@@ -29,7 +59,7 @@
     })
 
     // Code snippets with syntax highlighting
-    eleventyConfig.addPlugin(syntaxHighlight,{
+    eleventyConfig.addPlugin(syntaxHighlight, {
         lineSeparator: "\n",
         errorOnInvalidLanguage: true,
         alwaysWrapLineHighlights: true,
@@ -46,7 +76,7 @@
         extensions: "html",
 
         // output image formats
-        formats: ["webp", "jpeg", "png"],
+        formats: ["webp", "jpeg", "png","auto"],
 
         // output image widths
         widths: ["320", "640", "800", "1024", "auto"],
@@ -57,6 +87,10 @@
             decoding: "async",
             sizes: `100vw`,
         },
+
+        sharpOptions:{
+            animated: true,
+        }
     })
 
 }

```

Exemple d'animation dans `about.md`

```diff
 title: À propos
 ---
 
-Marc Bouvier
-
-Développement informatique - Facilitation
+Je m'appelle Marc Bouvier
 
 Développeur logiciel depuis plus de 10 ans, mon constat est simple : le logiciel est omniprésent dans nos vies et nous ne pouvons pas ignorer ses effets sur les individus, les groupes et l'écosystème fini qu'est notre planète.
 
 Je reste fasciné par l'incroyable impact que peuvent avoir quelques lignes de code informatique.
 
-Pour moi, les communs numériques frugaux, conviviaux et accessibles sont des outils le potentiel émancipateurs puissants pour faire face l'urgence planétaire.
+Pour moi, [les communs numériques](/glossaire/communs-numeriques) frugaux, conviviaux et accessibles sont des outils le potentiel émancipateurs puissants pour faire face l'urgence planétaire.
+
+J'agis :
 
-J'agis en animant des communautés, en contribuant à l'Open-source, en facilitant des ateliers d'intelligence collective et par le partage de connaissances.
+- en animant [[des communautés]] depuis 2015
+- en contribuant à l'Open-source
+- en facilitant des ateliers d'intelligence collective
+- par le partage de connaissances
+
+![Baldir le mage salue de la main en souriant](/public/img/about/baldir-hi.gif)
 
 ---
 

```