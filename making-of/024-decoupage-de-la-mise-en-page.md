---
title: "Découpage de la mise en page"
date: 2024-09-24T16:38:15+02:00
description: "Le site se complexifie et parfois atteint certaines limites. Séparons certains éléments de mises en page pour garder le contrôle."
tags:
  - 11ty
cover_image: "/public/img/cover_images/decoupage-de-la-mise-en-page.png"
---

IDEA additional info:
```diff
{
-  "description": "foo"
+  "description": "Développeur logiciel en quête du sens dans un monde aux ressources limitées."
}
```


Index: _includes/layout.html
```diff
 <html lang="fr">
 <head>
     <meta charset="UTF-8">
-    <meta name="description" content="{{global.description}}">
+    <meta name="description" content="{% if description %}{{description}}{% else %}{{global.description}}{% endif %}">
     <meta name="viewport" content="width=device-width, initial-scale=1.0">
     <title>Baldir - {{title}}</title>
     <link rel="alternate" href="/feed.xml" title="Baldir - Flux RSS des articles de blog" type="application/rss+xml">
@@ -53,7 +53,7 @@
             display: inline-block;
             cursor: pointer;
             padding: .5em;
-            color: #f1f3f4  ;
+            color: #f1f3f4;
         }
 
         .header-skip-content a:not(:focus) {
@@ -73,43 +73,36 @@
         }
     </style>
     <link href="/public/css/a11y-light.min.css" rel="stylesheet"/>
+    <link href="/public/css/style.css" rel="stylesheet"/>
 </head>
 <body>
 <header>
     <div class="header-skip-content">
         <a href="#skip-content">Contenu</a>
     </div>
-    <div style="display: inline-block;width:5rem;"><a href="/">Baldir</a></div>
-    <nav style="display: inline-block;">
+    <div role="banner" >
+        <h1 style="margin: .25rem .5rem;"><a href="/">Baldir</a></h1>
+    </div>
+    <p style="font-size: small">{{global.description}}</p>
+    <nav style="display: inline-block;" role="menu">
         <ul>
             <li>
-                <a href="/blog">Articles de blog</a>
+                <a href="/blog" role="menuitem">Articles de blog</a>
             </li>
             <li>
-                <a href="/about">À propos</a>
+                <a href="/about" role="menuitem">À propos</a>
             </li>
             <li>
-                <a href="/notes">Notes</a>
+                <a href="/notes" role="menuitem">Notes</a>
             </li>
             <li>
-                <a href="/making-of">Making of</a>
+                <a href="/making-of" role="menuitem">Making of</a>
             </li>
         </ul>
     </nav>
 </header>
-<main>
-    <div id="skip-content">
-        <h1>{{title}}</h1>
-        {% if stub %}
-        <p>
-            <span class="bold">Note :</span> ceci est une ébauche d’article qui sera complétée dans le futur.
-            Elle a été créée dans le but de résoudre les liens avec d’autres articles.
-            <!--            N’hésite pas à jeter un œil aux liens ci-dessous pour trouver les pages associées.-->
-        </p>
-        {% endif %}
-        {% if description %}<p>{{description}}</p>{% endif %}
-        {{content}}
-    </div>
+<main id="skip-content">
+    {{content}}
 </main>
 </body>
 </html>
```

Ajout `_includes/default.html` pour les pages standards (ex. articles).

```diff
+---
+layout: layout.html
+title: Articles récents
+description: "Développeur logiciel en quête du sens dans un monde aux ressources limitées."
+---
+
+<h1>{{title}}</h1>
+{% if cover_image %}
+<div class="cover_image">
+    <img alt="{{cover_image_alt}}" src="{{cover_image}}"/>
+</div>
+{{ '{% endif %}' | escape }}
+{{ '{% if stub %}' | escape }}
+<p>
+    <span class="bold">Note :</span> ceci est une ébauche d’article qui sera complétée dans le futur.
+    Elle a été créée dans le but de résoudre les liens avec d’autres articles.
+    <!--            N’hésite pas à jeter un œil aux liens ci-dessous pour trouver les pages associées.-->
+</p>
+{% endif %}
+{{ '{% if description %}' | escape }}<p>{{ '{{description}}' | escape }}</p>{{ '{% endif %}' | escape }}
+
+{{ '{{content}}' | escape }}

```

Index: _includes/landing.html
```diff
+---
+layout: layout.html
+---
+
+{{content}}
```

Exemple d'un article de making-of.

Index: making-of/001-echafaudage-avec-11ty.md
```diff
+---
+title: "Échafaudage avec 11ty"
+date: 2024-07-16T18:15:46+02:00
+description: "Car il faut bien commencer quelque-part. Je démarre le blog avec Eleventy."
+tags:
+  - 11ty
+---
+
+Je vais initialiser un projet avec [Eleventy (11ty)](https://www.11ty.dev/)
+
+11ty est un [générateur de sites statiques](/glossaire/generateur-de-sites-statiques).
+Une partie de la communauté est particulièrement sensible à la performance, l'accessibilité et le référencement.
+Ils ont mis en place [un tableau de scores](https://www.11ty.dev/speedlify/) pour inviter des créateur-ices de sites à les optimiser
+
+## Mise en place de 11ty
+
+Je crée un fichier markdown `index.md` qui sera la racine du site.
+
+```shell
+echo '# Heading' > index.md
+```
+
+Je lance la commande suivante.
+
+```shell
+npx @11ty/eleventy --serve
+```
+
+Le site est accessible à l'adresse suivante : http://localhost:8080
```
