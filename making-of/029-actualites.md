---
title: "Actualités"
date: 2024-09-30T17:45:29+02:00
description: "Actualités à venir sur la page d’accueil"
tags:
  - 11ty
#cover_image: "/public/img/cover_images/decoupage-de-la-mise-en-page.png"
---

Installation du support de données personalisé pour Yaml.

```shell
npm install js-yaml
```

Index: .eleventy.js
```diff
 import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight"
 import {EleventyHtmlBasePlugin, EleventyI18nPlugin} from "@11ty/eleventy";
 import {feedPlugin} from "@11ty/eleventy-plugin-rss";
+import yaml from "js-yaml"
 
 export default function (eleventyConfig) {
 
@@ -95,5 +96,9 @@
         }
     })
 
+    // Support yaml data files : https://www.11ty.dev/docs/data-custom/#yaml
+    eleventyConfig.addDataExtension("yml", (contents) => yaml.load(contents));
+
 }
 
```

Je crée un fichier de données global `actualites.yml`.
Il me permet d’accéder aux actualités depuis l’ensemble du site.

`_data/actualites.yml`

```yml
- name: "Dojo de programmation"
  description: "Je faciliterai de Dojo de programmation pour le meetup Software Craft Strasbourg"
  start_date : 2024-10-01T12:00:00+02:00
  href: https://www.meetup.com/fr-FR/software-crafters-strasbourg/events/303524329
```


Index: index.html
```diff
@@ -18,4 +18,15 @@
     </ul>
     <p><a href="/blog">Plus d'articles</a></p>
     <p><a href="/making-of">Making-of de ce site</a></p>
-</section>
+</section>
+<aside>
+    <h2>Actualités</h2>
+    <ul>
+        {% for actualite in actualites %}
+        <li>
+            <time datetime="{{actualite.start_date | toIsoString}}" >{{actualite.start_date | toLocaleStringFr | capitalize}}</time> : <a href="{{actualite.href}}">{{actualite.name}}</a>.
+            {{actualite.description}}
+        </li>
+        {% endfor %}
+    </ul>
+</aside>

```
