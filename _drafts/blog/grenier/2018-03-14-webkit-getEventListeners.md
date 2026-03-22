---
layout: post
title: "Get code of event listener present on DOM object on webkit browsers"
description: In webkit based browsers, you can get informations about added event listener using getEventListeners(domObject).
date: 2018-03-14
tags: 
- Javascript 
- Webkit 
- Browser
---
In webkit based browsers, you can get informations about added event listener using `getEventListeners(domObject)`.

```
var windowEventListeners = getEventListeners(window)
var errorListeners = windowEventListeners["error"]
var firstErrorListener = errorListener[0]
console.log('Error listener code : ',firstErrorListener["listener"].toString())
```
