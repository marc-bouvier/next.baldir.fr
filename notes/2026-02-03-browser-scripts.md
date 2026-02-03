---
title: Browser scripts
date: 2026-02-03T12:14:21+01:00
description: "Petits scripts utilitaires depuis la console du navigateur"
tags: 
- HTML
- CSS
- Javascript
permalink: cheat-sheets/browser-scripts/
date_updated: 2026-02-03T12:14:28+01:00
---

Donner une taille par défaut aux svg quand ils sont affichés sans style (CSS pas chargé). Evite qu'ils prennent tout l'écran.

```js
Object.values(document.getElementsByTagName("svg")).forEach(it=>{
    it.setAttribute("height","1em");
    it.setAttribute("width","1em");
})
```
