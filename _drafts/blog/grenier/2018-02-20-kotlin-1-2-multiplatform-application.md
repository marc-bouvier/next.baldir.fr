---
layout: post
title: Multiplatform applications with Kotlin 1.2
date: 2018-02-20
description: Kotlin 1.2 introduces kotlin multiplatform to share code for different targets.
tags:
  - Kotlin
  - How-to
  - Multi-Platform
  - Android
  - Ios
  - Jvm
  - Javascript
date_updated: 2026-03-22T17:19
---

Kotlin 1.2 allows to build application with shared code between plaftorms. Using gradle and the language
you can write common code and interfaces and then extend them to specific platform when required.

[This blog post](https://www.novoda.com/blog/introduction-to-kotlin-multiplatform/) explains how it is possible.
They provide a [github project](https://github.com/novoda/spikes/tree/master/game-of-life-multiplatform) implementing
[Conway’s Game of Life](https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life) as a multiplatform application.
