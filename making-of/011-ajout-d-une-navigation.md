---
title: "Ajout d’une navigation"
date: 2024-07-29T19:14:11+02:00
description: "Ajoutons une navigation pour les pages statiques qui ne sont pas des articles de blog."
---

- about
- blogs
- making-of

_includes/layout.html

```diff
             max-width: 100%;
             height: auto;
         }
+
+        nav ul{
+            display: flex;
+            justify-content: space-around;
+        }
+        nav ul li{
+            list-style: none;
+        }
     </style>
     <link href="/public/css/a11y-light.min.css" rel="stylesheet"/>
 </head>
 <body>
 <header>
-    <h1>{{'{{title}}' | escape }}</h1>
+    <h1><a href="/">{{'{{title}}' | escape }}</a></h1>
+    <nav>
+        <ul>
+            <li>
+                <a href="/blog">Blog posts</a>
+            </li>
+            <li>
+                <a href="/about">About</a>
+            </li>
+            <li>
+                <a href="/making-of">Making of</a>
+            </li>
+        </ul>
+    </nav>
 </header>
 <main>

```
