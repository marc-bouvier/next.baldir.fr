---
title: swcraft-strasbourg
date: 2025-01-25T19:10
tags: 
description: ""
stub: false
draft: true
date_updated: 2025-01-25T19:10
---

Création du squelette
J'ai 
```
npx create-next-app@latest
Need to install the following packages:
create-next-app@14.2.14
Ok to proceed? (y) 

✔ What is your project named? … swcraft-strasbourg
✔ Would you like to use TypeScript? …  Yes
✔ Would you like to use ESLint? …  Yes
✔ Would you like to use Tailwind CSS? … No 
✔ Would you like to use `src/` directory? …  Yes
✔ Would you like to use App Router? (recommended) … Yes
✔ Would you like to customize the default import alias (@/*)? … No
Creating a new Next.js app in /Users/marco/sources/Collectifs/Software Crafters Strasbourg/swcraft-strasbourg.

Using npm.

Initializing project with template: app 


Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/node
- @types/react
- @types/react-dom
- eslint
- eslint-config-next
```

J'ai choisi de ne pas utiliser tailwindcss car je veux faire du vrai CSS et un design system à part.

J'ai choisi d'utiliser `/src` je ne sais pas si c'est une bonne ou une mauvaise pratique.


Arborescence : 

```sh
tree  -I 'dist|node_modules'
```


```text
.
├── README.md
├── next-env.d.ts
├── next.config.mjs
├── package-lock.json
├── package.json
├── src
│   └── app
│       ├── favicon.ico
│       ├── fonts
│       │   ├── GeistMonoVF.woff
│       │   └── GeistVF.woff
│       ├── globals.css
│       ├── layout.tsx
│       ├── page.module.css
│       └── page.tsx
└── tsconfig.json

4 directories, 13 files

```

Lancement en dev : http://localhost:3000

```sh
npm run dev
```

Ca marche.

## ADR

Mise en place d'[ADR](/glossaire/adr) pour expliquer les choix et le contexte dans lequel ils sont faits.


## Monorepo avec Lerna

https://lerna.js.org/docs/getting-started#adding-lerna-to-an-existing-repo

## Design System

Créer le package `swcraft-strasbourg-ui` un projet Rescript

Inspiration : https://github.com/WhyThat/geekleus-rescript-talk
Exemple avec nextjs : https://github.com/enieber/olha-oque-fiz
https://practicalrescript.com/how-to-structure-a-big-rescript-project/


```sh
npm create rescript-app@latest
```


```

npm create rescript-app@latest


> npx
> create-rescript-app

┌  create-rescript-app 1.8.0
│
◇  Welcome to ReScript! ─────────────────────────────────╮
│                                                        │
│  Fast, Simple, Fully Typed JavaScript from the Future  │
│  https://rescript-lang.org                             │
│                                                        │
├────────────────────────────────────────────────────────╯
│
◇  New Project ───────────────────────────────────────────╮
│                                                         │
│  Create a new ReScript 11 project with modern defaults  │
│  ("Core" standard library, JSX v4)                      │
│                                                         │
├─────────────────────────────────────────────────────────╯
│
◇  What is the name of your new ReScript project?
│  swcraft-strasbourg-ui
│
◇  Select a template
│  Vite
│
◇  Versions loaded.
│
◇  ReScript version?
│  11.1.4
│
◇  ReScript Core version?
│  1.6.0
│
◇  Project created.
│
└  Happy hacking!
```

## Storybook

```sh
npx storybook@latest init
```

```
Need to install the following packages:
storybook@8.3.5
Ok to proceed? (y) 

╭──────────────────────────────────────────────────────╮
│                                                      │
│   Adding Storybook version 8.3.5 to your project..   │
│                                                      │
╰──────────────────────────────────────────────────────╯
 • Detecting project type. ✓
Installing dependencies...


up to date, audited 955 packages in 2s

91 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
 • Adding Storybook support to your "React" app • Detected Vite project. Setting builder to Vite. ✓

  ✔ Getting the correct version of 11 packages
  ✔ Installing Storybook dependencies
. ✓
Installing dependencies...


up to date, audited 1193 packages in 3s

166 packages are looking for funding
  run `npm fund` for details

29 low severity vulnerabilities

To address issues that do not require attention, run:
  npm audit fix

To address all issues possible (including breaking changes), run:
  npm audit fix --force

Some issues need review, and may require choosing
a different dependency.

Run `npm audit` for details.

attention => Storybook now collects completely anonymous telemetry regarding usage.
This information is used to shape Storybook's roadmap and prioritize features.
You can learn more, including how to opt-out if you'd not like to participate in this anonymous program, by visiting the following URL:
https://storybook.js.org/telemetry

╭──────────────────────────────────────────────────────────────────────────────╮
│                                                                              │
│   Storybook was successfully installed in your project! 🎉                   │
│   To run Storybook manually, run npm run storybook. CTRL+C to stop.          │
│                                                                              │
│   Wanna know more about Storybook? Check out https://storybook.js.org/       │
│   Having trouble or want to chat? Join us at https://discord.gg/storybook/   │
│                                                                              │
╰──────────────────────────────────────────────────────────────────────────────╯

Running Storybook

> @swcraftstras/swcraft-strasbourg-ui@0.0.0 storybook
> storybook dev -p 6006 --initial-path=/onboarding --quiet

@storybook/core v8.3.5

(node:45532) [DEP0040] DeprecationWarning: The `punycode` module is deprecated. Please use a userland alternative instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
6:16:18 PM [vite] ✨ new dependencies optimized: @storybook/blocks
6:16:18 PM [vite] ✨ optimized dependencies changed. reloading
6:17:04 PM [vite] page reload src/stories/Button.stories.js


```

http://localhost:6006/?path=/docs/configure-your-project--docs&globals=backgrounds.grid:!false&onboarding=true



Inspiration : https://github.com/SocialGouv/code-du-travail-numerique/tree/dev/packages/react-ui

CSF : https://storybook.js.org/docs/api/csf

TODO : compiler les composants rescript en un truc qui peut être utilisé avec React. Ou web component.



## TODO


- structurer l'arborescence
- Storybook
- [Atomic Design](/glossaire/atomic-design.md)
- ReScript
- 


