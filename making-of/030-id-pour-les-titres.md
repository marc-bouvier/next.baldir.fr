---
title: "Ajout des id aux titres"
date: 2024-10-11T22:34:47+02:00
description: "Ajout d’un plugin officiel qui génère des `id` pour les titres"
tags:
  - 11ty
---

Index: .eleventy.js

```diff
 import {eleventyImageTransformPlugin} from "@11ty/eleventy-img"
 import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight"
-import {EleventyHtmlBasePlugin, EleventyI18nPlugin} from "@11ty/eleventy";
+import {EleventyHtmlBasePlugin, EleventyI18nPlugin, IdAttributePlugin} from "@11ty/eleventy";
 import {feedPlugin} from "@11ty/eleventy-plugin-rss";
 import yaml from "js-yaml"
 
@@ -46,6 +46,8 @@
 
     });
 
+    // Adds id to headings
+    eleventyConfig.addPlugin(IdAttributePlugin);
 
     // Copy static styles as is
     eleventyConfig.addPassthroughCopy("public/css");
````
