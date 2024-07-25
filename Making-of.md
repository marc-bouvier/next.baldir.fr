---
layout: "layout.html"
title: "Making of"
---

https://www.11ty.dev/

https://www.11ty.dev/speedlify/

Setup 11ty

```shell
echo '# Heading' > index.md
```

```shell
npx @11ty/eleventy --serve
```

## Use data collections to set blog posts

blog/post-1.md

````markdown
---
title: Post title
---

foo
````

index.html

```html
---
layout: layout.html
title: Baldir
---

{% for blog in collections.blog %}
<h2>{{ '{{ blog.data.title }}' | escape }}</h2>
<p>{{ '{{ blog.content }}' | escape }}</p>
{% endfor %}
```

blog/post-2.md

````md
---
title: Post title 2
---

+Bar
````

_includes/layout.html

```html
<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Baldir - {{'{{title}}' | escape }}</title>
</head>
<body>
<header>
    <h1>{{ '{{title}}' | escape }}</h1>
</header>
<main>
    {{ '{{content}}' | escape }}
</main>
</body>
</html>
```

blog/blog.json

```diff
+{
+  "layout": "layout.html",
+  "tags": "blog"
+
+}
```

## Improve UX and lighthouse score

Set [viewport meta tag](https://developer.chrome.com/docs/lighthouse/best-practices/viewport?utm_source=lighthouse&utm_medium=devtools&hl=fr)

Set [description meta tag](https://developer.chrome.com/docs/lighthouse/seo/meta-description?utm_source=lighthouse&utm_medium=devtools&hl=fr) using [global data file](https://www.11ty.dev/docs/data-global/).

Index: index.html

```diff
 ---
 layout: layout.html
 title: Baldir
+description: "Foo"
 ---
```

_data/global.json

```json
{
  "description": "foo"
}
```

Index: _includes/layout.html

```diff
 <html lang="fr">
 <head>
     <meta charset="UTF-8">
+    <meta name="description" content="{{ '{{global.description}}' | escape }}" >
+    <meta name="viewport" content="width=device-width, initial-scale=1">
     <title>Baldir - {{ '{{title}}' | escape }}</title>
 </head>
 <body>
```

## Install image optimization plugin

https://www.11ty.dev/docs/plugins/image/

```shell
npm install @11ty/eleventy-img
```

It generated a `package.json` file.
So I also decided to add some author information and a licence.

https://choosealicense.com/

The license I chose is [Creative Commons Attribution 4.0 International](https://choosealicense.com/licenses/cc-by-4.0/#) (CC-BY-4.0).
It permits almost any use subject to providing credit and license notice.

Index: .gitignore

```diff
+# node dependencies
+node_modules
```

Index: package.json

```json
{
  "name": "baldir.fr",
  "license": "CC-BY-4.0",
  "author": {
    "name": "Marc Bouvier",
    "email": "baldir.fr@gmail.com",
    "url": "https://baldir.fr"
  },
  "dependencies": {
    "@11ty/eleventy-img": "^4.0.2"
  }
}
```

## Configure image optimization

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

Index: package.json

```diff
+  "type": "module",
+  "scripts": {
+    "start": "eleventy --serve",
+    "build": "eleventy"
+  },
+  "devDependencies": {
+    "@11ty/eleventy": "^3.0.0-alpha.17",
+    "@11ty/eleventy-img": "^5.0.0-beta.5",
+    "@11ty/webc": "^0.11.4",
+    "@types/11ty__eleventy-img": "^4.0.0"
+  },
   "dependencies": {
-    "@11ty/eleventy-img": "^4.0.2"
+    "@11ty/eleventy-plugin-webc": "^0.11.2"
   }
 }
```


## Code snippets with syntax highlightling

https://www.11ty.dev/docs/plugins/syntaxhighlight/

https://github.com/PrismJS/prism-themes

I'll use a prism accessible highlight theme.
https://github.com/ericwbailey/a11y-syntax-highlighting
https://github.com/ericwbailey/a11y-syntax-highlighting/tree/main/dist/prism

I won't use CDN but host it locally to prevent any external modification.

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

## (Delayed) Internationalization (I18n) 

https://www.11ty.dev/docs/i18n/

https://www.11ty.dev/docs/data-cascade/

https://www.11ty.dev/docs/data-template-dir/

https://www.11ty.dev/docs/plugins/i18n/

I don't want to do it now.

Let's do it later ...

## Next

Reading time : https://github.com/johanbrook/eleventy-plugin-reading-time

Header ids : https://github.com/orchidjs/eleventy-plugin-ids


RSS

Navigation


Open graph (SEO & link cover image) : https://github.com/tannerdolby/eleventy-plugin-metagen
I18n

Dark light modes





