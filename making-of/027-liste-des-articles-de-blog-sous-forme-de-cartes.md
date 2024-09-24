---
title: "Liste des articles de blog sous forme de cartes"
date: 2024-09-24T17:46:45+02:00 
description: ""
tags:
  - 11ty
---


Index: blog.html
```diff
+---
+layout: layout.html
+title: Articles de blog
+#description: "Articles de blog"
+---
+
+<div style="    display: flex;
+    flex-wrap: wrap;
+    justify-content: space-between;">
+{% for blog in collections.allFinishedArticles %}
+<div class="card" style="    width: 45%;
+    border: lightgray dashed;
+    padding: .5rem; margin: .25rem 0">
+    <a href="{{blog.url}}"><h2 style="font-size: large">{{ blog.data.title }}</h2></a>
+    <time datetime="{{blog.data.date | toIsoString }}" style="font-size: small">Le {{ blog.data.date | toLocaleStringFr }}</time>
+    {% if blog.data.cover_image %}
+    <img alt="{{blog.data.cover_image_alt}}" src="{{blog.data.cover_image}}" />
+    {% endif %}
+    <p>{{blog.data.description}}</p>
+</div>
+
+{% endfor %}
+</div>

```