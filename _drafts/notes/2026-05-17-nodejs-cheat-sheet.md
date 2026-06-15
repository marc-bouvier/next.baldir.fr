---
title: Antisèche Nodejs
date: 2026-05-08T15:38:00
description: Référence rapide des choses que j’oublie quand j’utilise Nodejs
tags:
  - Cheat-sheet
  - NodeJs
permalink: cheat-sheets/nodejs/
stub: false
---
## Nettoyer les node_module récursivement

```sh
# D'abord lister
find . -type d -name "node_modules" -prune

# Puis supprimer
find . -type d -name "node_modules" -prune -exec rm -rf '{}' +
```

## Moteur de tests intégré

```sh
node --test
```

Exemple de test auto

`debounce.test.js`

```js
import {describe, it} from "node:test"
import assert from "node:assert"
import {debounce} from "../lib/debounce.js"

describe("debounce", () => {
    it("extends delay when called during delay", (context) => {

        context.mock.timers.enable({apis: ['setTimeout']});

        let calls = 0;

        const myFunction = () => calls++

        const debounced = debounce(myFunction, 200)
        debounced()
        // Advance 200 ms
        context.mock.timers.tick(100);
        debounced()
        // only 100 ms passed since last debounce interaction
        context.mock.timers.tick(100);
        assert.strictEqual(calls, 0);

        // 200 ms passed
        context.mock.timers.tick(100);
        assert.strictEqual(calls, 1);

    })

})
```