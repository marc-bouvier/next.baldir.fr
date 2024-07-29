---
layout: layout.html
title: Blog posts
description: "Blog posts"
---


{% for blog in collections.blog %}

## [{{ blog.data.title }}]({{blog.url}})

{% endfor %}
