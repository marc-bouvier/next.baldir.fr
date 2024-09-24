---
title: "Liens vers les articles de blog"
date: 2024-07-27T14:11:02+02:00
description: "Maintenant qu’on a des articles de blog, il faut pouvoir les lister."
---

Voici un aperçu [des variables](https://www.11ty.dev/docs/data-eleventy-supplied/#skip-content)
qu’on peut utiliser dans une page.

```js
let page = {
    // URL can be used in <a href> to link to other templates
    // NOTE: This value will be `false` if `permalink` is set to `false`.
    url: "/current/page/myFile/",

    // For permalinks: inputPath filename minus template file extension
    fileSlug: "myFile",

    // For permalinks: inputPath minus template file extension
    filePathStem: "/current/page/myFile",

    // JS Date object for current page (used to sort collections)
    date: new Date(),

    // The path to the original source file for the template
    // NOTE: this includes your input directory path!
    inputPath: "./current/page/myFile.md",

    // Depends on your output directory (the default is _site)
    // You should probably use `url` instead.
    // NOTE: This value will be `false` if `permalink` is set to `false`.
    outputPath: "./_site/current/page/myFile/index.html",

    // Useful with `page.filePathStem` when using custom file extensions.
    outputFileExtension: "html",

    // Comma separated list of template syntaxes processing this template
    // Added in 2.0+
    templateSyntax: "liquid,md",

    // The raw unparsed/unrendered plaintext content for the current template
    // Added in 3.0+
    rawInput: "<!doctype html>…",

    // Available in 2.0 with the i18n plugin
    // The default is the value of `defaultLanguage` passed to the i18n plugin
    lang: "",
};
```

À l'aide de ces variables, je peux mettre en place une liste des articles.

index.html

```diff
 {{ '{% for blog in collections.blog %}' | escape }}
-<h2>{{ '{{ blog.data.title }}' | escape }}</h2>
+<h2><a href="{{ '{{blog.url}}' | escape }}">
+  {{ '{{ blog.data.title }}' | escape }}</a></h2>
 {{ '{% endfor %}' | escape }}

```

