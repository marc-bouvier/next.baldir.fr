---
layout: "layout.html"
title: "Making of"
---

https://www.11ty.dev/

https://www.11ty.dev/speedlify/

Mise en place de 11ty

```shell
echo '# Heading' > index.md
```

```shell
npx @11ty/eleventy --serve
```

## data collections pour les articles de blog

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

## Amélioration de l’UX et du score Lighthouse

Ajout de la balise `meta` [viewport](https://developer.chrome.com/docs/lighthouse/best-practices/viewport?utm_source=lighthouse&utm_medium=devtools&hl=fr)

Ajout de la balise `meta` [description](https://developer.chrome.com/docs/lighthouse/seo/meta-description?utm_source=lighthouse&utm_medium=devtools&hl=fr) paramétré par un [fichier global data](https://www.11ty.dev/docs/data-global/).

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

## Plugin d‘optimisation des images

https://www.11ty.dev/docs/plugins/image/

```shell
npm install @11ty/eleventy-img
```

Un fichier `package.json` est généré.

J’ai décidé d’en profiter pour ajouter les informations d’auteur et une license.

https://choosealicense.com/

J’ai choisi la license [Creative Commons Attribution 4.0 International](https://choosealicense.com/licenses/cc-by-4.0/#) (CC-BY-4.0).
Elle permet de à peu près tous les usages à condition d’en créditer la source d’origine et la license.

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

## Basic RSS feed for blog posts

We want to add an RSS feed so anyone can subscribe to the blog posts as soon as they are published.

https://www.11ty.dev/docs/plugins/rss/

```shell
npm install @11ty/eleventy-plugin-rss
```

For now I cannot yet add a short description for the items of the feed.
Also, I cannot, have a french feed separated from the english feed.

Maybe next time, we'll address this issues. 

But it is a problem for my future self.

## Links for blog posts

An overview of the variables that can be used in a page.

https://www.11ty.dev/docs/data-eleventy-supplied/#skip-content

index.html

```diff
 {% for blog in collections.blog %}
-<h2>{{ blog.data.title }}</h2>
+<h2><a href="{{blog.url}}">
+  {{ blog.data.title }}</a></h2>
 {% endfor %}

```

## Github pages

I will create a github pages workflow so I can quickly have a real preview of my site.

https://pages.github.com/

In Github, there is no pre-made template for eleventy.

Let's see if we can find something at https://11ty.dev

https://www.11ty.dev/docs/deployment/#jamstack-providers

There is a mini tutorial for deploying an 11ty site on Github Pages : https://www.11ty.dev/docs/deployment/#deploy-an-eleventy-project-to-github-pages

My Github page will be hosted to `https://marc-bouvier.github.io/green-a11y-11ty/`.

It is a subfolder root.

I need to support `--pathprefix` argument when I build this site for Github Pages.

First, let's add a plugin to eleventy configuration to support using `--pathprefix`.

.eleventy.js

```diff
-import {EleventyI18nPlugin} from "@11ty/eleventy";
+import {EleventyHtmlBasePlugin, EleventyI18nPlugin} from "@11ty/eleventy";
 
export default function (eleventyConfig) {

+    // Required to support --pathprefix
+    eleventyConfig.addPlugin(EleventyHtmlBasePlugin);

}

```

A Github Action will generate my static site and host it in Github Pages.

First, I go to the Actions section of my repository.

In my case I find it here : https://github.com/marc-bouvier/green-a11y-11ty/actions

Since I don't have any actions yet, it invites me to create a new one form a template or from scratch.

A GitHub action is defined with a yml file located in `.github/workflows/`. 

This file describes the various steps of a pipeline.

We can find templates specific to the GitHub Pages in the "Pages" category : https://github.com/marc-bouvier/green-a11y-11ty/actions/new?category=pages

I will use Jekyll as a starter template and customize it for 11ty.

.github/workflows/static.yml

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main
  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:
  pull_request:


# Sets permissions of the GITHUB_TOKEN to allow deployment to GitHub Pages
permissions:
  contents: read
  pages: write
  id-token: write


# Allow only one concurrent deployment, skipping runs queued between the run in-progress and latest queued.
# However, do NOT cancel in-progress runs as we want to allow these production deployments to complete.
concurrency:
  group: "pages"
  cancel-in-progress: false

jobs:
  build:
    runs-on: ubuntu-22.04
    permissions:
      contents: write
    concurrency:
      group: "{{ '${{ github.workflow }}-${{ github.ref }}' | escape }}"
    steps:

      - name: Setup Node
        uses: actions/setup-node@v4
        with:
          node-version: "20"

      - name: Checkout
        uses: actions/checkout@v4

      # https://github.com/actions/configure-pages/blob/main/action.yml
      # Expose output variables : base_url, origin, host, base_path
      # Those are accessible prefixed by "steps.pages.outputs."
      - name: Setup Pages
        id: pages
        uses: actions/configure-pages@v5

      - name: Persist npm cache
        uses: actions/cache@v4
        with:
          path: ~/.npm
          key: "{{ '${{ runner.os }}'  | escape }}-node-{{ '${{' | escape }}hashFiles('**/package.json') {{'}}' | escape }}" 
  # {% comment %}
  #       
  #       key: "${{ runner.os }}-node-${{ hashFiles('**/package.json') }}"
  # {% endcomment %} 
      - name: Persist Eleventy .cache
        uses: actions/cache@v4
        with:
          path: ./.cache
          key: ${{ runner.os }}-eleventy-fetch-cache

      - name: Install dependencies
        run: npm install

      - name: Build static site
        run: npm run build -- --pathprefix={{ '${{ steps.pages.outputs.base_path }}' | escape }}

      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: ./_site

  deploy:
    environment:
      name: github-pages
      url: {{'${{ steps.deployment.outputs.page_url }}' | escape }}
    runs-on: ubuntu-latest
    needs: build
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4

```

## Navigation

### Navigation links

Let's add a navigation for on static pages that are not blog posts.

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

### Skip to content

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


## Add RSS blog posts feed as alternate link

_includes/layout.html

```diff
<head>
...
+    <link rel="alternate" href="/feed.xml" title="Baldir’s Posts Feed" type="application/rss+xml">
...
</head>
```

## Dockerisation

J'ai appris récemment l'existence de la commande `docker init`.
Elle permet de générer les configurations pour "dockeriser" une application.

```shell
docker init
```

```
Welcome to the Docker Init CLI!

This utility will walk you through creating the following files with sensible defaults for your project:
  - .dockerignore
  - Dockerfile
  - compose.yaml
  - README.Docker.md

Let's get started!

? What application platform does your project use?  [Use arrows to move, type to filter]
> Node - (detected) suitable for a Node server application
  Go - suitable for a Go server application
? What application platform does your project use? Node
? What version of Node do you want to use? 20
? Which package manager do you want to use? npm
? Do you want to run "npm run build" before starting your server? Yes
? What directory is your build output to? (comma-separate if multiple) _site
? What command do you want to use to start the app? npm start
? What port does your server listen on? 8080

✔ Created → .dockerignore
✔ Created → Dockerfile
✔ Created → compose.yaml
✔ Created → README.Docker.md

→ Your Docker files are ready!
  Review your Docker files and tailor them to your application.
  Consult README.Docker.md for information about using the generated files.

What's next?
  Start your application by running → docker compose up --build
  Your application will be available at http://localhost:8080
❯ docker compose up --build
```

J'ai du déplacer la dépendance `eleventy` dans les `dependencies` plutôt que `devDependencies`.

Il semblerait que seules les dependencies sont accessibles depuis les scripts du `package.json`.

Index: package.json

```diff
     "build": "eleventy"
   },
   "devDependencies": {
-    "@11ty/eleventy": "^3.0.0-alpha.17",
     "@11ty/eleventy-img": "^5.0.0-beta.8",
     "@11ty/webc": "^0.11.4",
     "@types/11ty__eleventy-img": "^4.0.0"
   },
   "dependencies": {
+    "@11ty/eleventy": "^3.0.0-alpha.17",
     "@11ty/eleventy-plugin-rss": "^2.0.2",
     "@11ty/eleventy-plugin-syntaxhighlight": "^5.0.0",
     "@11ty/eleventy-plugin-webc": "^0.11.2"

```

Pour construire et lancer le site via docker :

```shell
docker compose up --build
```

## Utiliser mon sous-domaine

Je vais utiliser mon propre sous-domaine `next.baldir.fr`.

Pour le moment, je vais me contenter de continuer de passer par les Github Pages.

Mon sous-domaine pointe deja vers une adresse ip. 

Il faut que je le change pour qu’il pointe vers celle de ma github page.

Pour ce faire j’ai du ajouter une entrée DNS `CNAME` pointant vers `marc-bouvier.github.io`.

Je dois aussi modifier le script de déploiement pour indiquer le chemin de base de celui-ci.

Index: .github/workflows/static.yml

```diff
         run: npm install
 
       - name: Build static site
-        run: npm run build -- --pathprefix=${{ steps.pages.outputs.base_path }}
+        run: npm run build
 
       - name: Upload artifact
         uses: actions/upload-pages-artifact@v3
```

## Fichier .nvmrc

J'ai ajouté un fichier `.nvmrc` pour indiquer quelle version de node utiliser à l'aide de l'outil [nvm](https://github.com/nvm-sh/nvm).

`.nvmrc`

```
20
```

Pour changer la version de node avec nvm on peut utiliser la commande : 

```shell
nvm use
```

## Next time

- Test RSS feed in a real RSS client against github page
    - Feed needs base URL which is missing
    - Maybe inject it with a provided environment variable
- Mes articles chez Iroco
- navigation
    - Items
        - Blog posts
        - Notes (micro blogging)
        - About
        - Rss
        - Podcasts
        - Liens sortants (sites que j'aime bien ou ami-e-s)
        - Bibliothèque (inspiration de https://lazybear.io/)
    - A11y : Skip to content
    - A11y : Skip to navigation

- écriture inclusive
    - choisir une façon d'écrire mon contenu de façon inclusive (inspiration : [La lutine du web](https://www.lalutineduweb.fr/), ...)  
- 

I can pick one of the following stuff.


- fix main picture size (it is too large) 
- ✅ Links followable in blogs

- Host statically on Github pages for public preview
- Pourquoi je vais écrire mon blog en Français exclusivement?
- Links followable in blogs
- Wikilinks support
    - https://photogabble.co.uk/noteworthy/adding-wiki-links-to-11ty/
    - https://github.com/oleeskild/obsidian-digital-garden/blob/d3c3b3f029d6d24d2f9dcb5676c43b7562b98ad6/src/compiler/GardenPageCompiler.ts#L197-L270
- Backlinks
- Stub posts
  - https://photogabble.co.uk/changelog/adding-stub-posts/
- Short notes (like microblogging)
- Previous / next article
- /uses
  - https://photogabble.co.uk/uses/  
- ~Host statically on Github pages for public preview~
- Reading time : https://github.com/johanbrook/eleventy-plugin-reading-time
- Header ids : https://github.com/orchidjs/eleventy-plugin-ids
- RSS (advanced)
- Podcast
- Navigation
- Generate a public knowledge base from Obsidian notes (warning ! it is an ambitious task)
- Open graph (SEO & link cover image) : https://github.com/tannerdolby/eleventy-plugin-metagen
- I18n
- Dark light modes
- Sitemap
- Maybe allow to edit and create content with an headless CMS such as https://decapcms.org/
