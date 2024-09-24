---
title: "Déploiement sur une GitHub Page"
date: 2024-07-29T12:17:02+02:00
description: "GitHub permet d’héberger des sites statiques. Voyons comment le faire avec un site 11ty."
---

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
