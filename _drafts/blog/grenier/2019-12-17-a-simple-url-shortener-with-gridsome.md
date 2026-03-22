---
title: Building a simple static URL shortener with Gridsome & GitLab
date: 2019-12-17
tags:
  - Gridsome
  - VueJs
  - How-to
  - GraphQL
  - yaml
  - Gitlab
  - Gitlab-CI
  - JamStack
  - Site-statique
description: This is the making of u.baldir.fr, a simple static URL shortener made with Gridsome and actionned with Gitlab CI
series: false
date_updated: 2026-03-22T17:19
---

https://u.baldir.fr is a static URL shortener. It means it is generated and 
served on a simple HTTP server (in our case NGinx). The links shortened will be 
added as yaml files pushed to a Git repo. Then a Gitlab CI will build and deploy
changes on a static http server (for my case through SSH on a Linode)

## Install gridsome cli & setup project

In my setup, I develop and deploy on the same machine. In a more traditional 
setup, an artefact would be generated during the build and then deployed 
remotely.

Follow https://gridsome.org/docs/#prerequisites

```bash
yarn global add @gridsome/cli
gridsome create u.baldir.fr
cd u.baldir.fr
# Test if it is working
gridsome develop
# go to http://localhost:8080 and http://localhost:8080/___explore (graphql)
```

## Install plugins

We want to add an entry for each url to shorten as a yaml file.
Gridsome wil read all `*.yml` files from `content/links` and convert it as a 
GraphQL collection. Then, we will use the collection in our vue components.

We need to install 
[`@gridsome/source-filesystem`](https://gridsome.org/plugins/@gridsome/source-filesystem) 
plugin.

```bash
yarn add @gridsome/source-filesystem
# or if you ar using npm
npm install @gridsome/source-filesystem
```

We also need to install a yaml transformer: 
[`@gridsome/transformer-yaml`](https://gridsome.org/plugins/@gridsome/transformer-yaml)

```bash
yarn add @gridsome/transformer-yaml
# or if you ar using npm
npm install @gridsome/transformer-yaml
```

## Configure plugin

In `gridsome.config.js` change to the following

```js
module.exports = {
  siteName: 'u.baldir.fr',
  siteDescription: 'Baldir.fr url shortener',

  plugins: [
    {
      // Create posts from markdown files
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Url',
        path: 'content/links/*.yml',
        route: '/:tinyUrl'
      }
    }

  ]
}
```

This will create a GraphQL collection `allUrl()` and also a vue Route that will 
use the property `tinyUrl` as part of the Url.

Create a folder to host the content : `content/links` 

Create the file `content/links/google.yml`

```yaml
tinyUrl: "google"
destinationUrl: "https://google.fr"
description: "A famous search engine"
```

Create the file `content/links/yahoo.yml`

```yaml
tinyUrl: "yahoo"
destinationUrl: "https://yahoo.fr"
description: "Another search engine"
```

The route `u.baldir.fr/google` will lead to 404 page because there is no template yet for the type `Url`.

Though, we can test the graphQL data by going to `localhost:4000/___explore`

Test the following query : 

```
 query {
  allUrl{
    totalCount
    edges{
      node{
        id
        path
        fileInfo{name}
        tinyUrl
        destinationUrl
      }
    }
  }
  url: url(path: "/content/links/google/"){
    id
        path
        fileInfo{name}
        tinyUrl
        destinationUrl
  }
}
```

## Create a template

Now we want a template to be applied to the site for the route we defined.

Create the file `src/templates/Url.vue`. Note that it matches the typeName we 
defined earlier.

```xml
<template>
  <Layout>
    <div>
    Redirecting to {{$page.url.destinationUrl}}...
    </div>
  </Layout>
</template>

<script>

export default {

  mounted(){
    window.location=this.$page.url.destinationUrl
  }

}
</script>

<page-query>
query Url ($path: String!) {
  url: url(path: $path){
        tinyUrl
        destinationUrl
  }
}
</page-query>
```

This template uses the data from graphQL query and redirects to the destination 
URL.

Try it : localhost:4000/google

## Cleaning up

remove the files
 * src/layouts/README.md
 * src/pages/About.vue
 * src/pages/README.md
 * src/templates/README.md

## Make the index as a list of all short links

Modify `src/pages/index.vue` with the following.

 ```xml
<template>
  <div>
  <h1>Shortened URLS</h1>
    <ul>
        <li v-for="edge in $page.urls.edges" :key="edge.node.id">
            <a :href="edge.node.destinationUrl">{{edge.node.tinyUrl}}</a>({{edge.node.destinationUrl}}) : {{edge.node.description}}
        </li>
    </ul>
  </div>
</template>

<page-query>
{
  urls: allUrl(sort: [{by: "edges.nodes.tinyUrl", order: ASC}]) {
    edges {
      node {
        tinyUrl
        destinationUrl
        description
      }
    }
  }
}
</page-query>
```

## Automate deployment with Gitlab

.gitlab-ci.yml

```yaml
image: node:10.24.0-buster

stages:
  - build
  - deploy

cache:
  paths:
    - node_modules/

build:
  stage: build
  script:
    - npm install
    - npm run build

deploy:
  image: debian:stable-slim
  stage: deploy
  script:
    - which ssh-agent || (apt-get update -y && apt-get install openssh-client -y )
    - mkdir -p ~/.ssh
    - chmod 700 ~/.ssh
    - eval $(ssh-agent -s)
    - echo "$SSH_PRIVATE_KEY" | tr -d '\r' | ssh-add -
    # - '[[ -f /.dockerenv ]] && echo -e "Host *\n\tStrictHostKeyChecking no\n\n" > ~/.ssh/config'
    # - ssh-add <(echo "$SSH_PRIVATE_KEY")
    - ssh -o StrictHostKeyChecking=no $SSH_USER_AND_HOST "source $RC_FILE_PATH && $SSH_DEPLOY_FOLDER/deploy_command.sh"

```

The previous script checkout latest version from gitlab repository and then 
builds static content with gridsome CLI.

 Set variables in your gitlab project
 * SSH_PRIVATE_KEY : ssh key to connect to ssh remote server
 * $SSH_USER_AND_HOST : user and host as if you connected with ssh like `user@example.org`
 * $RC_FILE_PATH : the path of a rc file to run so installed tools can be found (node, npm ...)
 * $SSH_DEPLOY_FOLDER : path to the folder where the repo has been checked out in the server

## Alternative deployment automation

Alternatively, we could create an artifact from generated `dist` folder and 
store it as a zip file in an artifact repository. Then the CI can trigger 
this artifact to be downloaded (for instance with a ssh command) and deflated 
in the appropriate location of the HTTP server.

## Nginx configuration

No need for rewrite configuration in NGinx, it is managed by VueJs. It works 
out of the box even if we use HTTPS.

```
server {
    server_name  u.baldir.fr;

    location / {
        root   /path/to/u-baldir-fr/dist;
        index  index.html;
    }
     
    error_page  404              /404.html;

    location = /50x.html {
        root   /usr/share/nginx/html;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/u.baldir.fr/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/u.baldir.fr/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
```

