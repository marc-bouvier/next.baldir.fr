---
title: "Loading Json runtime configuration with VueJs 3 Plugin and fetch in TypeScript"
date: 2022-07-24
description: "Sometimes, it is useful to load data at runtime without building and bundling again an application. This
proposition is a way among others do to so."
tags:

- VueJs3
- VueJs
- UnitTesting
- Plugin
- Typescript
- Javascript
- Architecture
- Configuration
- Runtime
- Frontend

---

Sometimes, it is useful to load data at runtime without building and bundling again an application.
This proposition is a way among others do to so.

This is also an enabler for some 12 factor applications recommendations

- [III. store config in environment](https://12factor.net/config) — Store config in the environment
  > Apps sometimes store config as constants in the code. This is a violation of twelve-factor, which requires strict
  separation of config from code. Config varies substantially across deploys, code does not.
- [V. Build, release, run](https://12factor.net/build-release-run) — Strictly separate build and run stages
  > The twelve-factor app uses strict separation between the build, release, and run stages. For example, it is
  impossible to make changes to the code at runtime, since there is no way to propagate those changes back to the build
  stage.

## Bootstrapping a very simple vuejs Application.

```shell
npm init vue@latest
```

```
Vue.js - The Progressive JavaScript Framework

✔ Project name: … static-json-fetch-plugin
✔ Add TypeScript? … Yes
✔ Add JSX Support? … Yes
✔ Add Vue Router for Single Page Application development? … Nos
✔ Add Pinia for state management? … No
✔ Add Vitest for Unit Testing? … Yes
✔ Add Cypress for End-to-End testing? … No
✔ Add ESLint for code quality? … Yes
✔ Add Prettier for code formatting? … Yes

Scaffolding project in runtime-configuration/static-json-fetch...

Done. Now run:

  cd static-json-fetch
  npm install
  npm run lint
  npm run dev


```

## Plugin

Wrapping the feature in a plugin makes it self contained and accessible from any component.

`/src/plugins/runtimeConfiguration.ts`

```ts
import type {App, Plugin} from 'vue';

export interface RuntimeConfiguration {
    starterPokemon: string
}

export interface RuntimeConfigurationOptions {
    variables: RuntimeConfiguration
}

export const runtimeConfiguration: Plugin = {
    install: (app: App, options: RuntimeConfigurationOptions) => {
        //Runtime configuration variables can be accessed from injection : `runtimeConfiguration`.
        app.config.globalProperties.$runtimeConfiguration = options.variables

        // They can also be accessed from global property `$runtimeConfiguration`
        app.provide("runtimeConfiguration", options.variables)
    }
}

/**
 * Loads runtime configuration from static file (in /public folder).
 */
export const loadRuntimeConfiguration = async (): Promise<RuntimeConfigurationOptions> => {
    const resp = await fetch('/runtime-config.json')
    const value = await resp.json()

    return {
        variables: {
            starterPokemon: value.STARTER_POKEMON
        } as RuntimeConfiguration
    } as RuntimeConfigurationOptions
}
```

## Unit test plugin

Plugins can be unit tested in a black box testing fashion.

`/src/plugins/__tests__/runtimeConfiguration.spec.ts`

```ts
import {describe, expect, it} from "vitest";
import type {RuntimeConfigurationOptions} from "../runtimeConfiguration"
import {runtimeConfiguration} from "../runtimeConfiguration"
import {mount} from "@vue/test-utils";
import {defineComponent} from 'vue'

const App = defineComponent({
    template: "<template>{{starterPokemon}}</template>",
    data() {
        // @ts-ignore
        const starterPokemon = this.$runtimeConfiguration.starterPokemon
        return {
            starterPokemon
        }
    }
})

describe("runtimeConfiguration plugin", () => {
    it("resolves starterPokemon value from injected configuration options", () => {
        const wrapper = mount(App, {
            global: {
                plugins: [[runtimeConfiguration, {
                    variables: {
                        starterPokemon: "001"
                    }
                } as RuntimeConfigurationOptions]]
            }
        })
        expect(wrapper.text()).toBe("001")
    })
})
```

Run the tests, they should pass.

```shell
npm run test:unit

```

```

> static-json-fetch-plugin@0.0.0 test:unit
> vitest --environment jsdom


 DEV  v0.18.1 runtime-configuration/static-json-fetch-plugin

 ✓ src/plugins/__tests__/runtimeConfiguration.spec.ts (1)

Test Files  1 passed (1)
     Tests  1 passed (1)
      Time  676ms (in thread 9ms, 7507.02%)


 PASS  Waiting for file changes...
       press h to show help, press q to quit
```

## Json Data

External data is located in the `public` folder. It will be served unbundled.
This way, it can be changed without the need to rebuild the application for different environments.
To learn further : https://12factor.net/fr/config

`/public/runtime-configuration.json`

```json
{
  "STARTER_POKEMON": "Pikachu"
}
```

## Setup in main.ts

In order to be accessed, the runtime configuration plugin needs to be created.
It takes options parameter that is fetched from the json file.
Since `fetch` is asynchronous, the application is mounted after the data has been gathered successfully.
This way, we make sure the configuration is loaded to prevent incoherent state in the application.

`/src/main.ts`

```ts
import {createApp} from 'vue'
import App from './App.vue'
import {loadRuntimeConfiguration, runtimeConfiguration} from "@/plugins/runtimeConfiguration";
import './assets/main.css'

const runtimeConfigurationOptions = await loadRuntimeConfiguration()

createApp(App)
    .use(runtimeConfiguration, runtimeConfigurationOptions)
    .mount('#app')
```

## Usage in component

Runtime configuration variables can be accessed from injection : `runtimeConfiguration`.
They can also be accessed from global property `$runtimeConfiguration`

`/src/App.vue`

Composition API style with setup and Typescript.

```html

<script setup lang="ts">
import {inject} from 'vue'
import type {RuntimeConfiguration} from "@/plugins/runtimeConfiguration";

const rc = inject('runtimeConfiguration') as RuntimeConfiguration
const starter = rc.starterPokemon
</script>

<template>
  <main>
    Imported from external configuration : {{ starter }}
  </main>
</template>
```

Option API style with Javascript.

```html

<template>
  <main>
    Imported from external configuration : {{ starter }}
  </main>
</template>

<script>
export default {
  data() {
    return {
      starter: this.$runtimeConfiguration.starterPokemon
    }
  }
}
</script>
```

## Verify in dev mode

```shell
npm run dev
```

You should see the following text

> Imported from external configuration : Pikachu

Change the value in the `/public/runtime-configuration.json`

Refresh the page and check the text

> Imported from external configuration : your new value

## Verify in preview mode

Preview mode will run the application from the built application.

First let's build the application.

```shell
npm run build
```

```
> static-json-fetch-plugin@0.0.0 build
> run-p type-check build-only


> static-json-fetch-plugin@0.0.0 build-only
> vite build


> static-json-fetch-plugin@0.0.0 type-check
> vue-tsc --noEmit -p tsconfig.vitest.json --composite false

vite v3.0.2 building for production...
✓ 12 modules transformed.
dist/index.html                  0.42 KiB
dist/assets/index.8e761148.css   1.96 KiB / gzip: 0.75 KiB
dist/assets/index.a7307e39.js    51.50 KiB / gzip: 20.80 KiB
```

We can see in the previous report that the `runtime-config.json` has not been transformed.
Check in `/dist/runtime-configuration.json`, you should see the file "as is".

Now run preview mode.

```shell
npm run preview
```

```
> static-json-fetch-plugin@0.0.0 preview
> vite preview --port 4173

  ➜  Local:   http://127.0.0.1:4173/
  ➜  Network: use --host to expose
```

Open in your browser : http://127.0.0.1:4173/

You should see the value that is written in `/dist/runtime-configuration.json`.
Say, it is `Pikachu`

> Imported from external configuration : Pikachu

Now, change the value in `/dist/runtime-configuration.json`.

> Imported from external configuration : Your new value

## Conclusion

Let's recap.

- runtime configuration as json file in static resources (not transformed during bundling)
- fetch call to get static json data
- data is wrapped into a plugin to allow them to be injected in vuejs application
- a plugin can be tested "black-box" style from a mounted application
- when json data changes, reloading the bundled application refreshes the data

## What my proposition does not cover

My proposition does not cover

- Environment variables (
  e.g. [dotenv support](https://web.archive.org/web/20220714214044/https://github.com/motdotla/dotenv)).
    - Nevertheless, it can be combined with dotenv support from other mechanisms.
- Templating (ways to changes the values in the json file)
    - Nevertheless, variable substitution is not that hard to achieve
        - Using `jq`
        - Using `sed`
            - [Example using sed to replace a value in place in a json file](https://stackoverflow.com/a/63078256)
        - Using scripts in CI/CD tools
            - [Github Action variable substitution](https://github.com/marketplace/actions/variable-substitution)
            - [Azure DevOps json variable substitution](https://docs.microsoft.com/en-us/azure/devops/pipelines/tasks/transforms-variable-substitution?view=azure-devops&tabs=Classic#json-variable-substitution-example)

## Variations, other propositions and resources

Here are some resources that inspired me and other that I didn't consider for my proposition.
For most of them, they are acceptable propositions.
They just did not match exactly all the criterias I expected in my context.

- NuxtJs documentation
  — [Nuxt configuration file — runtimeConfig](https://web.archive.org/web/20220724151551/https://nuxtjs.org/docs/directory-structure/nuxt-config/#runtimeconfig)
- StackOverflow
    - [TypeScript + Vue: Loading static json configuration when opening index.html](https://web.archive.org/web/20220724150751/https://stackoverflow.com/questions/66847859/typescript-vue-loading-static-json-configuration-when-opening-index-html)
    - [Externalize vuejs configuration on statically hosted application](https://stackoverflow.com/questions/54115427/externalize-vuejs-configuration-on-statically-hosted-application/54208755)
    - [How to pass environment variables to a frontend web application?](https://stackoverflow.com/questions/48595829/how-to-pass-environment-variables-to-a-frontend-web-application)
    - [Trying to load local JSON file to show data in a html page using JQuery](https://stackoverflow.com/questions/18637418/trying-to-load-local-json-file-to-show-data-in-a-html-page-using-jquery)
- Pumping Code Blog
  — [Dynamically set Angular Environment Variables in Docker](https://web.archive.org/web/20210312110547/https://pumpingco.de/blog/environment-variables-angular-docker/)
- Vue CLI documentation
  — [Modes and Environment Variables](https://web.archive.org/web/20220512114410/https://cli.vuejs.org/guide/mode-and-env.html)
- Medium
    - [José Silva](https://medium.com/@jmanuelsilva)
      — [Vue.js runtime environment variables](https://medium.com/js-dojo/vue-js-runtime-environment-variables-807fa8f68665)
    - [Phuwadon Danrahan](https://medium.com/@dphuwadon)
      — [Passing Dynamic Environment Variables to VueJS Application at Run Time](https://medium.com/absoroute-io/passing-dynamic-environment-variables-to-vuejs-application-at-run-time-45918162bbaf)
- Reddit
  — [How to pass environment variables to a frontend web application?](https://www.reddit.com/r/docker/comments/7uyghl/how_to_pass_environment_variables_to_a_frontend/)
- [BrandonBarnett.io](https://www.brandonbarnett.io/)
  — [Accessing environment variables from a webpack bundle in a Docker container](https://www.brandonbarnett.io/blog/2018/05/accessing-environment-variables-from-a-webpack-bundle-in-a-docker-container/)
- Container Solutions Blog — [José Moreira](https://blog.container-solutions.com/author/jos%C3%A9-moreira)
  — [Deploying configurable frontend web application containers](https://blog.container-solutions.com/deploying-configurable-frontend-web-application-containers)
- Spring Cloud documentation
    - [4. Serving Plain Text](https://cloud.spring.io/spring-cloud-config/multi/multi__serving_plain_text.html)
    - [5. Embedding the Config Server](https://cloud.spring.io/spring-cloud-config/multi/multi__embedding_the_config_server.html)
