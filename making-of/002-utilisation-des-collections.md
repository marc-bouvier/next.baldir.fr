---
title: "Utilisation des collections"
date: 2024-07-16T21:34:03+02:00
description: "Dans 11ty, les collections permettent de regrouper des contenus similaires (comme des articles de blog)."
tags:
  - 11ty
---

Une collection d'articles de blog peut être représentée par des fichiers markdown dans un dossier `blog`.

## Création d'une collection

Création d'un dossier `blog`.

```shell
mkdir blog
```

Ajout d'un fichier `blog/blog.json` représentant la collection.
L'attribut `layout` fait référence à fichier de mise en page.
On en parlera un peu plus bas.

```json
{
  "layout": "layout.html",
  "tags": "blog"
}
```


blog/post-1.md

````markdown
---
title: Post title
---

foo
````

blog/post-2.md

````md
---
title: Post title 2
---

+Bar
````



## Création de mise en page

Pour éviter de répéter à chaque fois du code rébarbatif, je crée [un fichier de mise en page](https://www.11ty.dev/docs/layouts/) `_includes/layout.html`.

Je peux ainsi enrober mon contenu avec le même code.
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


Pour que ma page sache quel fichier de mise en page utiliser, je me sers de l'attribut `layout` de l'entête [Frontmatter](/glossaire/frontmatter) de ma page d'accueil.

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

Maintenant que tout est en place, je peux voir la liste des articles sur http://localhost:8080

Les pages sont accessibles aux addresses suivantes:
- http://localhost:8080/blog/post-1
- http://localhost:8080/blog/post-2