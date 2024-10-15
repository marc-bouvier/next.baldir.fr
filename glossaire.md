---
layout: default.html
title: Glossaire
description: "Dans ce glossaire, je propose mes définitions personnelles en français de concepts et outils."
eleventyImport:
  collections: ["glossaire"]
---
{% for terme in collections.glossaire %} 
- [{{ terme.data.title }}]({{terme.url}})
{% endfor %}


