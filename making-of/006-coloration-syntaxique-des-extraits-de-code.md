---
title: "Coloration syntaxique des extraits de code"
date: 2024-07-17T20:08:02+02:00
description: "Avec un thème Prism pour la coloration syntaxique. Nous allons rendre les exemples de code plus facile à lire."
tags:
  - 11ty
---

https://www.11ty.dev/docs/plugins/syntaxhighlight/

https://github.com/PrismJS/prism-themes

Je vais utiliser une thème prism qui répond aux critères d'accessibilité.
https://github.com/ericwbailey/a11y-syntax-highlighting
https://github.com/ericwbailey/a11y-syntax-highlighting/tree/main/dist/prism

Je préfère éviter d'utiliser un [CDN](/glossaire/cdn) et d'héberger moi-même le thème pour éviter des modifications de l'extérieur.
Cela me permet de garantir que le thème ne change pas sans que je m'en rende compte.

```shell
npm install @11ty/eleventy-plugin-syntaxhighlight

```

Index: _includes/layout.html
```diff
+    <link href="/public/css/a11y-light.min.css" rel="stylesheet"/>
 </head>
 <body>
 <header>
```

Index: .eleventy.js
```diff
+import syntaxHighlight from "@11ty/eleventy-plugin-syntaxhighlight"
 
 export default function (eleventyConfig) {
+    eleventyConfig.addPassthroughCopy("public/css");
+    eleventyConfig.addPlugin(syntaxHighlight);
```
