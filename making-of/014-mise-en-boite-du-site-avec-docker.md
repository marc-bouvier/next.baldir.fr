---
title: "Mise en boîte du site avec Docker"
date: 2024-08-28T11:40:43+02:00
description: ""
tags:
  - 11ty

---

# Dockerisation

J'ai appris récemment l'existence de la commande `docker init`.
Elle permet de générer les configurations pour "dockeriser" une application.

```shell
docker init
```

```text
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
