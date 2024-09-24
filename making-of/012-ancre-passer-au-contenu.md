---
title: "Ancre “Passer au contenu”"
date: 2024-07-29T19:15:59+02:00
description: ""
tags:
  - 11ty
  - Accessibilité
---

For better accessibility, let's add a link to skip to content.

This way, we won't have to read the navigation bar if we only want to go to the content.

_includes/layout.html

```diff

+        .header-skip-content {
+            position: absolute;
+            top: .25em;
+            left: 1em;
+            z-index: 1001;
+            text-align: center;
+        }
+
+        .header-skip-content a:focus {
+            display: inline-block;
+            cursor: pointer;
+            padding: .5em;
+        }
+
+        .header-skip-content a:not(:focus) {
+            clip: rect(0 0 0 0);
+            position: absolute;
+            overflow: hidden;
+        }
+
     </style>
     <link href="/public/css/a11y-light.min.css" rel="stylesheet"/>
 </head>
 <body>
 <header>
-    <h1>{{'{{title}}' | escape}}</h1>
+    <div class="header-skip-content">
+        <a href="#skip-content">Skip to main content</a>
+    </div>
+    <div style="display: inline-block;width:5rem;padding-left: 6rem"><a href="/">Baldir</a></div>
+    <nav style="display: inline-block;width: 20rem">
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
-    {{ '{{content}}' | escape }}
+    <div id="skip-content">
+        <h1>{{'{{title}}' | escape }}</h1>
+        {{ '{{content}}' | escape }}
+    </div>
 </main>
 </body>
 </html>
```

