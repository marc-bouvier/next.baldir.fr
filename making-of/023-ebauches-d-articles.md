---
title: "Ébauches d’articles"
date: 2024-09-18T23:29:29+02:00
description: ""
tags:
  - 11ty
---



J'ai parfois une idée d'un article que je voudrais écrire mais pas le temps de le faire.
Je sais pourtant que je peux y faire référence dans des articles existants ou futurs.

J'ai mis en place une propriété dans le frontmatter de mes articles qui indique qu'il s'agit d'une ébauche.

Index: _includes/layout.html
```diff
 <main>
     <div id="skip-content">
         <h1>{{ '{{title}}' | escape }}</h1>
+        {{'{% if stub %}' | escape}}
+        <p>
+            <span class="bold">Note :</span> ceci est une ébauche d’article qui sera complétée dans le futur.
+            Elle a été créée dans le but de résoudre les liens avec d’autres articles.
+            <!--            N’hésite pas à jeter un œil aux liens ci-dessous pour trouver les pages associées.-->
+        </p>
+        {{ '{% endif %}' | escape }}
+        {{ '{% if description %}' | escape }}<p>{{ '{{description}}' | escape }}</p>{{ '{% endif %}' | escape }}
         {{ '{{content}}' | escape }}
     </div>
 </main>

```

Exemple d'ébauche d'article

Index: blog/Mon-moi-du-futur.md
````md
---
title: Mon moi du futur
date: 2024-09-18
tags: 
description: ""
stub: "true"
---
````
