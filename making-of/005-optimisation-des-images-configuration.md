---
title: "Optimisation des images - configuration"
date: 2024-07-17T01:53:02+02:00
description: "L’du plugin d’optimisation d’images n’est pas suffisant. Il faut maintenant le configurer."
tags:
  - 11ty
---

## Préparation de pages d’exemples

Un exemple de page avec une image :

Index: blog/post-1.md

```diff
+![](/img/Introducing-Baldir.png)
```

Index: index.html

```diff
+<img
+        src="./img/Introducing-Baldir.png"
+        alt="Baldir; Développeur de valeur d‘usage et de logiciel."
+>
 {% for blog in collections.blog %}
 <h2>{{ '{{ blog.data.title }}' | escape }}</h2>
-<p>{{ '{{ blog.content }}' | escape }}</p>
 {% endfor %}
```

Index: _includes/layout.html

```diff
     <title>Baldir - {{ '{{title}}' | escape }}</title>
+    <style>
+        body{
+            max-width: 1200px;
+            margin: 0 auto;
+        }
+        img {
+            max-width: 100%;
+            height: auto;
+        }
+    </style>
 </head>
 <body>
 <header>
```

## Configuration du plugin


```js
import {eleventyImageTransformPlugin} from "@11ty/eleventy-img"

export default function (eleventyConfig) {

    // ...

    // Crée des variantes d'images de différentes dimensions et de différents formats.
    // Elles seront chargées selon la taille de l'écran
    eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
        outputDir: "./_site/public/img/",
        urlPath: "/public/img/",

        extensions: "html",

        // output image formats
        formats: ["webp", "jpeg", "png"],

        // output image widths
        widths: ["320", "640", "800", "1024", "auto"],

        // attributes assigned on <img> override these values.
        defaultAttributes: {
            loading: "lazy",
            decoding: "async",
            sizes: `100vw`,
        },
    })

// ...
}
```