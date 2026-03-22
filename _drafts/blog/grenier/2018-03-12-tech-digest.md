---
layout: post
title: Technology digest march 12th 2018
description: In this blog post, Shawn McKay first explains some caracteristics of state management in frontend applications and how Redux tries to solve it.
date: 2018-03-12
tags:
  - Redux
  - State-Management
  - Javascript
date_updated: 2026-03-22T17:19
---

## Redesigning Redux

In [this blog post](https://hackernoon.com/redesigning-redux-b2baee8b8a38), [Shawn McKay](https://hackernoon.com/@ShMcK] first 
explains some caracteristics of state management in frontend applications and how Redux tries to solve it.

> Putting everything inside of views can lead to a poor separation of concerns: it ties you to a javascript view library, 
> it makes code harder to test, and perhaps the greatest annoyance: you have to constantly think and readjust where you 
> store your state.

At this point, you want to give state to your components via props from parent components. And, eventually, 
you may want to externalize state outside of your view library.

The author then explains why and how Redux tries to solve this problem and what value it can add.

> The purpose of any library is to make something more complicated seem simple through abstraction.

He states that Redux needs to be redesigned and he highlights some areas that can be enhanced. After showing them, he propose a wrapper of Redux : Rematch that allows to simplfy the use of Redux API.
