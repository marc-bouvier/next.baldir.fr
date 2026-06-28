---
title: Jetbrains
description: Raccourcis des éditeurs Jetbrains que j'oublie en permanence
tags:
  - Jetbrains
permalink: antiseches/jetbrains/
---

Curseurs multiples.

https://www.jetbrains.com/guide/java/tips/multiple-carets/

- "Add Selection for Next Occurrence" ^G (macOS) / Alt+J (Windows/Linux)

## Live template pour échapper du code liquid

```text
{{ "{{ '$SELECTION$' | escape }}" | escape }}
```

Usage :

1. Sélectionner du texte
2. Surround with (Ctrl+Alt+T ou Option+Command+T)
3. `liquid-escape`

Voir aussi [l'antisèche Liquid](/antiseches/liquid)