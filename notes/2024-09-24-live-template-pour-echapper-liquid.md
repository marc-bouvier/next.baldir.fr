---
title: Live template pour échapper du code liquid
date: 2024-09-24T17:32:21+02:00
tags:
  - Liquid
  - Jetbrains
  - IntelliJ
  - Webstorm
  - Live-template
  - How-to
  - DX
  - Raccourcis
date_updated: 2025-01-25T19:10
---

- Abbréviation : `liquid-escape`

```text
{{ "{{ '$SELECTION$' | escape }}" | escape }}
```

Usage :

1. Sélectionner du texte
2. Surround with (Ctrl+Alt+T ou Option+Command+T)
3. `liquid-escape`