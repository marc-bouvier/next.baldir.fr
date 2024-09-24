---
title: "Liste des derniers articles en page d’accueil"
date: 2024-09-24T17:37:36+02:00
description: "Je souhaite montrer une liste de mes derniers articles."
tags:
  - 11ty
---

Index: index.html
````diff
 ---
-layout: layout.html
-title: Baldir
-description: "TODO"
+layout: "landing.html"
+title: "Accueil"
 ---
 
-<img
-        src="/public/img/Introducing-Baldir.png"
-        alt="Baldir; Développeur de valeur d‘usage et de logiciel."
->
+<section>
+    <h2>Articles</h2>
+    <p>Ici, j'écris autant que je peux sur des sujets variés (en général techniques)</p>
+    <ul>
+        {% for blog in collections.latestFewFinishedArticles %}
+        <li style="display: flex;border-bottom: darkgray dotted 1px;    justify-content: space-between;">
+            <a href="{{blog.url}}" style="text-decoration: none; flex-grow:1;">{{ blog.data.title }}</a>
+            <time datetime="{{blog.data.date}}" style="font-family: monospace">
+                {{ blog.data.date | toLocaleStringFrShort }}
+            </time>
+        </li>
+        {% endfor %}
+    </ul>
+    <p><a href="/blog">Plus d'articles</a></p>
+    <p><a href="/making-of">Making-of de ce site</a></p>
+</section>

````