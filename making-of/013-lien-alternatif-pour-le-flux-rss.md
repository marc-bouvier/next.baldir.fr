---
title: "Lien alternatif pour le flux RSS"
date: 2024-07-29T19:26:00+02:00
description: ""
tags:
  - 11ty
---

_includes/layout.html

```diff
<head>
...
+    <link rel="alternate" href="/feed.xml" title="Baldir’s Posts Feed" type="application/rss+xml">
...
</head>
```
