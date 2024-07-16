---
layout: "layout.html"
title: "Making of"
---
# Making of

https://www.11ty.dev/

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
<h2>{{ blog.data.title }}</h2>
<p>{{ blog.content }}</p>
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
    <title>Baldir - {{title}}</title>
</head>
<body>
<header>
    <h1>{{title}}</h1>
</header>
<main>
    {{content}}
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
+    <meta name="description" content="{{global.description}}" >
+    <meta name="viewport" content="width=device-width, initial-scale=1">
     <title>Baldir - {{title}}</title>
 </head>
 <body>
```
