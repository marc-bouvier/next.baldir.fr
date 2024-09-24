---
title: "Notes rapides"
date: 2024-09-17T18:28:56+02:00
description: ""
tags:
  - 11ty
---



# Notes rapides

Parfois, j’ai envie de publier des notes très courtes.

Je crée une nouvelle collection  `notes`

Index: notes/notes.json
```json
{
  "layout": "layout.html",
  "tags": "notes"
}
```

Et une page pour les lister les notes.

Index: notes.md
````md
---
layout: layout.html
title: Notes
---

Cette page est une collection de pensée courtes et spontanées qui n’a pas sa place dans [un article de blog complet](/blog).

{{ '{% for note in collections.notes %}' | escape }}
{{ '- {{ note.data.date | toLocaleStringFr }} - [{{ note.data.title }}]({{note.url}})' | escape }}
{{ '{% endfor %}' | escape }}
````

Je crée [un filtre 11ty](https://www.11ty.dev/docs/filters/) pour pouvoir formatter les dates à la locale française.

Index: .eleventy.js
```diff
 export default function (eleventyConfig) {
 
+    eleventyConfig.addFilter("toLocaleStringFr", function(date) { return new Date(date).toLocaleString("fr-FR") });
+
```

Usage :

```
{{ '{{ une.variable.date | toLocaleStringFr }}' | escape }}
```

Les notes se trouvent ici : [/notes](/notes)

Ajout des notes dans la navigation

Index: _includes/layout.html
```diff
                 <a href="/about">About</a>
             </li>
             <li>
+                <a href="/notes">Notes</a>
+            </li>
+            <li>
                 <a href="/making-of">Making of</a>
             </li>
         </ul>

```

