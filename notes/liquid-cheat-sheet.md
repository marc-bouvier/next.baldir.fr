---
title: Liquid Cheat Sheet
date: 2024-10-11T22:16:21+02:00
tags:
  - How-to
  - Liquid
  - Cheat-sheet
description: Commandes Liquid que j’utilise couramment mais que j’ai tendance à oublier
---

[Documentation officielle de Liquid](https://shopify.github.io/liquid/).

Retourner une liste

````md
{{ '{% for item in items | reverse %}' | escape }}
````

