---
title: Building an application with Nuxt
tags:
  - VueJs
  - NuxtJs
  - Bootstrap
  - Convention-Over-Configuration
date: 2018-02-18
description: <a href='https://nuxtjs.org/'>Nuxt</a> is a wrapper of vueJs that allows to quickly bootstrapping web aplication using convention over configuration.
date_updated: 2026-03-22T17:19
---

[Nuxt](https://nuxtjs.org/) is a wrapper of vueJs that allows to quickly bootstrapping web aplication using convention over configuration.

## Install vue-cli

```bash
yarn global add vue-cli
```

## Create a nuxt project

Using vue-cli, it is easy to bootrap a nuxt projectµµ.

```bash
vue init nuxt-community/starter-template  <project-name>
```

Build the project

```bash
yarn
```

You can run it using

```bash
yarn run dev
```

Your site is available at http://localhost:3000

## bootstrap-vue

```
yarn add bootstrap-vue
```

Add bootstrap-vue in the module section of `nuxt.config.js`.
```javascript
  modules: [
    'bootstrap-vue/nuxt'
    ]
```

## CSS style

Install sass support

```bash
yarn add node-sass sass-loader --dev
```

Create a sass file `/assets/css/main.scss`
```css
.logo{
    background-image: url(/logo.png);
    background-color: #ffffff80;
    background-repeat: no-repeat;
    background-position-x: right;
    background-blend-mode: lighten;
}
```

Add a logo.png file in `/static` it will be automatically be binded to http://localhost:3000/logo.png
Configure the page to be loaded globally in the css section of `nuxt.config.js`.

```javascript
  css: [
    '@/assets/css/main.scss'
  ]
```

## Customize default layout

Open `/layouts/default.vue` and add `class="logo"` to the main div.
```html
<template>
  <div class="logo">
    <nuxt/>
  </div>
</template>
```

This style will be applied to every pages.

## Add axios
Add axios dependency
```bash
yarn add axios
```

Modify `nuxt.config.js` 

```javascript
  build: {
    vendor: ['axios']
  }
```

## Add vue-i18n plugin

```
yarn add vue-i18n
```

Create a the file `/plugins/i18n.js`

```javascript
import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

export default ({ app }, inject) => {
    // Set `i18n` instance on `app`
    // This way we can use it in middleware and pages `asyncData`/`fetch`
    app.i18n = new VueI18n({
        /* `VueI18n` options... */
    })
}
```

Modify `nuxt.config.js` 

```javascript
  build: {
    vendor: ['vue-i18n']
  },
  plugins: ['~/plugins/i18n.js']
```

Create the file `locales/en.json`
It may look like this.

```json
{
  "links": {
    "home": "Home",
    "about": "About",
    "english": "English version",
    "french": "French version"
  },
  "home": {
    "title": "Welcome",
    "introduction": "This is an introduction in English."
  },
  "about": {
    "title": "About",
    "introduction": "This page is made to give you more informations."
  }
}
```



