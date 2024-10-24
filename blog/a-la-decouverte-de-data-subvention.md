---
title: À la découverte de Data.subvention
date: 2024-10-21T14:38:23+02:00
tags:
  - Candidature-en-public
  - Open-source
description: "Découvrons la startup d'état “Data.subvention”: sa mission, sa base de code. Embarquons-nous comme si c’était notre premier jour."
draft: false
---

Je poursuis ma quête pour travailler dans des organisations à fort impact social.
Cet article est le compagnon du stream de [candidature en public](/glossaire/candidature-en-public)

## Contexte

> ### **🎯 La mission proposée**
>
> Tu participeras activement au développement de la solution Data.Subvention agissant en équipe pour développer l’API et le client web en suivant une méthodologie agile. 
>
> Les technologies utilisées sont :
>
> - TypeScript
> - Express
> - MongoDB
> - Svelte
> - Jest
>
> Le projet est géré via [GitHub](https://github.com/betagouv/api-subventions-asso/projects/1).
>
> L’équipe fonctionne en cycles courts rythmés par des rituels quotidiens. La gestion de l’équipe se veut horizontale. Être autonome sur les tâches à réaliser et s’impliquer dans la conception du produit font partie de la mission.
>
> Tu pourras être en contact avec d’autres services techniques internes à l’État ainsi que des utilisateurs dans un but d’amélioration continue de nos outils.
>
> Tous les membres de l’équipe vivent dans des villes différentes et travaillent essentiellement à distance. Tu auras la possibilité de te rendre sur le site de Beta.Gouv si tu le souhaites (Paris 7ème).
>
> Des séminaires réunissant toute l’équipe sont organisés en présentiel sur un format court (2 jours-2 nuits) tous les 4 mois environ.
>
> **🔎 Le profil recherché**
>
> **Tu es :**
>
> - Capable de gérer un ensemble de tâches en autonomie, en étroite collaboration avec les autres membres de l’équipe aux profils variés (data scientist, développeurs, Ux Ui, Communication, Chargé.e de déploiement)
> - Prêt.e à t’impliquer dans la vie de la start-up 
> - Animé·e par la volonté d’améliorer le service public
> - Doté d’une expérience d’au moins 2 à 3 ans au sein de l’écosystème Beta.Gouv ou de l’administration publique, dans un rôle similaire
> - A l’écoute des autres et à l’aise dans la communication orale et écrite
>
>
> **Tu maîtrises :**
>
> - JavaScript
> - MongoDB ou les bases de données en général
> - Svelte ou un autre framework JS
> - Git et l’écosystème GitHub
> - Jest ou une autre librairie de tests
>
> **C’est encore mieux si :**
>
> - Tu as des connaissances en architecture oignon (hexagonale/clean architecture)
> - Tu as de l’appétence pour l’open source et l’open data
> - Tu es sensible à la sécurité des applications
> - Tu as l’habitude de prendre en compte les retours utilisateurs
> ### **📝 Les modalités**
>
> - Contrat : indépendant
> - TJM :  550 € (voir la [grille de rémunération Beta Gouv](https://doc.incubateur.net/communaute/travailler-chez-beta.gouv.fr/les-differents-statuts/independants-freelances/observatoire-revenus#les-tjm-une-base-pour-evaluer-le-prix-dune-prestation))
> - Charge : 4 jours par semaine
> - Durée : 3 mois (renouvelable)
> - Début souhaité : début Octobre 2024
> ### **🚀 Candidater**
>
> Partage-nous ton LinkedIn / CV / Github / site par mail à [contact@datasubvention.beta.gouv.fr](https://doc.incubateur.net/communaute/travailler-chez-beta.gouv.fr/les-differents-statuts/independants-freelances/observatoire-revenus#les-tjm-une-base-pour-evaluer-le-prix-dune-prestation) avec en objet “Recrutement - Développement full-stack JavaScript” et raconte-nous :
>
> - Pourquoi le sujet des subventions aux associations te parle
> - Ce que tu penses pouvoir apporter au projet
> - Ce qui te plaît dans le travail en équipe et l’agilité
>
> À bientôt ! 😀

Extrait de [la fiche de candidature sur Welcome to the Jungle au 08 octobre 2024](https://www.welcometothejungle.com/fr/companies/communaute-beta-gouv/jobs/developpeur-se-fullstack-javascript-de-la-start-up-d-etat-data-subvention?q=8a4078229b391e9f923f4012c12fdac5&o=7f2854cd-7b1d-4898-90c8-048206441a29)

## Découverte de la startup

Lecture de [la mission de la startup](https://beta.gouv.fr/startups/data-subvention.html).

Sans redire tout ce qui est décrit dans la fiche de la startup, voici l'essentiel de ce que j'ai retenu.

Data.subvention est une [startup d’état](/glossaire/startup-d-etat) qui a pour vocation :

- pour les instructeur-ices : de faciliter l’instruction de dossiers de subvention pour des associations ;
- pour les associations : de faciliter les demandes de subvention ;

Data.subvention s'appuie sur des données provenant de différentes sources de données.

- Chorus : versements liés aux subventions
- Registre National des Associations: pièces administratives des associations
- Le Compte Asso
- ...

Liste complète : https://datasubvention.beta.gouv.fr/article-source-de-donnees-datasubvention/

Pour résoudre le problème des instructeurs et des associations, data.subvention s'appuie sur la centralisation et l'aggrégation des données des sources variées.

### Points d'entrée

D'après sa documentation d'API et [le guide d'intégration](https://github.com/betagouv/api-subventions-asso/wiki/Documentation-API-&-Guide-d'int%C3%A9gration), Data.subvention consiste en des points d'entrée destinés à des [types de comptes différents](https://github.com/betagouv/api-subventions-asso/wiki/Documentation-API-&-Guide-d'int%C3%A9gration#les-comptes) : des comptes utilisateurs, des comptes consommateurs.

Les comptes utilisateur-ices : les agent-es, les instructeur-ices utilisent [l'outil de consultation](https://app.datasubvention.beta.gouv.fr/), iels se connectent à l'aide de [AgentConnect](https://www.proconnect.gouv.fr/)

Les comptes consommateurs : les clients logiciel dans des systèmes qui veulent utiliser les données de [l'API](https://api-subvention-asso-prod.osc-secnum-fr1.scalingo.io/)

La fiche de la startup d'état est cohérente avec l'offre de Welcome to the jungle :

Enjeux du moment :

- Complétude : environ un tiers des données est disponible
    - Données des versements ✅
    - Données des **collectivités**
    - Données des **opérateurs**

Enjeux : **confiance** dans les données

Personas:

- Instructeurs ✅
- Pilotes
- Contrôleurs

## Dive in - rentrons dans le code

https://github.com/betagouv/api-subventions-asso

```sh
git clone git@github.com:betagouv/api-subventions-asso.git
```

Je note au fur et à mesure ce que j'observe dans le code

| Capacité                           | Outil / pratique / version |
|------------------------------------|----------------------------|
| Déploiement                        | Scalingo                   |
| API doc                            | OpenApi 3.0                |
| Observabilité                      | Sentry                     |
| Node                               | 18                         |
| Client REST                        | Axios                      |
| Monorepo                           | Lerna                      |
| Release                            | Conventional commit        |
| Pre-commit hook                    | Husky                      |
| Vérification des mesages de commit | commitlint                 |
| CI-CD                              | Github Actions             |
| Framework frontend                 | Svelte                     |
| Design System                      | DSFR                       |
| Lib Design-System                  | @gouvfr/dsfr               |
| Svelte                             | 4.2                        |
| Test browser                       | Playwright                 |
| Events                             | SSE                        |

Intuition : Changelog très probablement construit avec conventional commit.

Github bots pour donner du feedback dans les PR. Covbot.

supertest ? (deja utilisé dans nestjs)

Des tests automatisés avec Jest / vitest.

La documentation d'API semble générée depuis le code.

Route `/` quelques infos sur l'API:

- [Documentation API & Guide d'intégration](https://github.com/betagouv/api-subventions-asso/wiki/Documentation-API-&-Guide-d'int%C3%A9gration)

Dto : Types si on souhaite s'intégrer avec Typescript

## Modules du monorepo

### Dto

- Commentaires en français et en anglais
- Noms en franglais
    - en français : les termes métiers (ex. Association, Personne)
        - Pour la lisibilité de l'Open Data
    - en anglais ; les termes génériques (ex. request, Search, Provider ...)

### Tools

Readme manque de contexte

Outils pour scrapper des données

- Osiris
- Annuaire service public

Je n'ai pas trouvé de tests

### Frontend

Le frontend est une application Svelte.
Elle s'appuie sur l'API.

Observation : peu de dépendances.
Simplicité

Les noms de variable sont en anglais même si les termes métier sont en français.

Je suis surpris de ce choix. Car il entraine une traduction qui ne me semble pas utile.
Après ça reste un scope assez petit (quelques lignes). Ca ne devrait pas poser de problème d'ambiguité.

Cela permet à des gens non francophones de comprendre le code.

L'arborescence est documentée dans le readme : 

```text
src
│
└───lib                                      // Contient tous les composants Svelte métier
│    │                                       
│    └───components                          // Contient tous les composants Svelte métier
│    │   │                                   
│    │   │                                   
│    │   └───Foo                             // Il existe autant de sous répertoire que de composants "intelligent"
│    │       │   Foo.svelte                  // Composant graphique Svelte (dumb)
│    │       │   Foo.controller.js           // Contrôleur qui s'occupe de récupérer/calculer la donnée renvoyée au composant graphique
│    │       │   ...                         
│    │                                       
│    └───core                                // Contient quelques fichiers "essentiels", comme le connecteur SSE
│    │                                       
│    └───dsfr                                // Contient tous les composants Svelte liés au composant du DSFR
│    │                                       
│    └───helpers                             // Contient des helpers spécifiques à un champ particulier (string, date, etc)
│    │                                       
│    └───resources                           // Contient les connecteurs (ports) HTTP
│    │                                       
│    └───services                            // Contient des services métiers qui ne sont pas liés à un composant ou à une ressource
│    │                                       
│    └───store                               // Contient une liste de stores globaux
│                                            
└───routes                                   
│    │                                       
│    └───example-route                       // nom de la route (voir routing)
│    │   │                                   
│    │   └───components                      // Contient des composants spécifiques à la route en question. Même architecture que pour les composants dans libs
│    │   │                                   
│    │   └───+page.ts                        // Il existe autant de sous répertoire que de composants "intelligent"
│    │   │                                   
│    │   └───+page.svelte                    // Il existe autant de sous répertoire que de composants "intelligent"
│    │   │                                   
│    │   └───+route.ts                       // Il existe autant de sous répertoire que de composants "intelligent"
│    │                                       
│    └───...                                 // Autant de routes que nécessaire
│    │                                       
│    └───   +error.svelte                    // Page d'erreur (notamment 404)
│    │                                       
│    └───   +layout.svelte                   // Contient le layout général (header, etc)
│    │                                       
│    └───   +layout.ts                       // Contient la logique qui doit s'appliquer pour toutes les pages
                                             
│   main.js                                  // Point d'entrée de l'application
│   global.css                               // Fichier CSS global
│   app.html                                 // Coquille minimale autour des composants svelte
│   hooks.server.ts                          // Hooks serveur. Permet notammer de spécifier les headers
```

L'arborescence telle que je l'observe aujourd'hui.

```text
src
├── lib
│   ├── assets
│   ├── components                               
│   │   ├── NomComposant                           
│   │   │   ├── NomComposant.controller.test.ts   
│   │   │   ├── NomComposant.controller.ts       
│   │   │   └── NomComposant.svelte                
│   ├── core                                      
│   ├── dsfr                                     
│   ├── entities
│   ├── enums
│   ├── errors
│   ├── helpers                                  
│   ├── resources                                
│   │   ├── associations
│   │   ├── auth
│   │   ├── document
│   │   ├── establishments
│   │   ├── externals
│   │   ├── grants
│   │   ├── open-source
│   │   ├── payments
│   │   ├── providers
│   │   ├── stats
│   │   ├── subventions
│   │   └── users 
│   ├── services                                
│   ├── store
│   └── types
├── routes
│   ├── (home)
│   ├── (noAuth)
│   │   ├── accessibilite
│   │   ├── cgu
│   │   ├── contact
│   │   ├── mentions-legales
│   │   ├── politique-de-confidentialite
│   │   └── statistiques
│   ├── admin
│   │   ├── domains
│   │   ├── stats
│   │   │   └── components
│   │   └── users
│   ├── association
│   │   └── [identifier]
│   ├── auth
│   │   ├── activate
│   │   │   └── [token]
│   │   ├── forget-password
│   │   ├── login
│   │   ├── reset-password
│   │   │   └── [token]
│   │   └── signup
│   ├── etablissement
│   │   └── [identifier]
│   ├── search
│   │   └── [name]
│   └── user
│       └── profile
```

Séparation des responsabilités

Composants "intelligents" : vont chercher des données en s'appuyant sur des controllers

Les controlleurs font passe plat avec des API / Services

Tests

```sh
cd package/front
npm run test
```

```text
⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯ Unhandled Rejection ⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯⎯
Error: Sentry CLI "info" command failed, make sure you have an auth token configured, and your `url` option is correct.
 ❯ _callee2$ ../../node_modules/@sentry/bundler-plugin-core/dist/cjs/index.js:1334:19
 ❯ tryCatch ../../node_modules/@sentry/bundler-plugin-core/dist/cjs/index.js:134:17
 ❯ Generator._invoke ../../node_modules/@sentry/bundler-plugin-core/dist/cjs/index.js:114:24
 ❯ Generator.throw ../../node_modules/@sentry/bundler-plugin-core/dist/cjs/index.js:165:21
 ❯ asyncGeneratorStep ../../node_modules/@sentry/bundler-plugin-core/dist/cjs/index.js:398:24
 ❯ _throw ../../node_modules/@sentry/bundler-plugin-core/dist/cjs/index.js:424:9

```

> [!danger] Erreur lors du lancement des tests
> Lancer les tests front échoue sans token sentry


Pour le moment je commente le plugin sentry vite pour voir les tests se lancer

`vite.config.ts`

```ts
import { fileURLToPath } from "url";  
import { readFileSync } from "fs";  
import { sentrySvelteKit } from "@sentry/sveltekit";  
import { sveltekit } from "@sveltejs/kit/vite";  
import { defineConfig, loadEnv } from "vite";  
  
const file = fileURLToPath(new URL("package.json", import.meta.url));  
const json = readFileSync(file, "utf8");  
const pkg = JSON.parse(json);  
  
export default defineConfig(({ mode }) => {  
    const env = loadEnv(mode, process.cwd(), "");  
    return {  
        plugins: [  
            // sentrySvelteKit({  
            //     sourceMapsUploadOptions: {            //         org: "betagouv",            //         project: "data-subvention-front",            //         url: "https://sentry.incubateur.net/",            //         authToken: env.SENTRY_AUTH_TOKEN || env.SENTRY_AUTH_TOKEN,            //         release: pkg.version            //     },            // }),            sveltekit(),  
        ],  
        test: {  
            include: ["src/**/*.{test,spec}.{js,ts}"],  
            globals: true,  
            environment: "jsdom",  
            clearMocks: true,  
            setupFiles: ["src/setuptest.ts"],  
        },  
        optimizeDeps: {  
            include: ["dto"],  
        },  
        build: {  
            commonjsOptions: {  
                include: [/dto/, /node_modules/],  
            },  
        },  
    };  
});
```

Le concept d'adapter semble être ici une couched anticorruption : mapper

Le concept de Port semble être un client d'API qui délègue à un service REST en général.

### API

Lors de la première session de candidature en public, j'ai à peine effleuré l'API.
Je creuse un peu plus dans la deuxième session (vidéo à venir).

| Capacité             | Outil / pratique / version |
|----------------------|----------------------------|
| Mail                 | Brevo                      |
| Observabilité        | Sentry                     |
| Client HTTP          | Axios                      |
| Base de donnée cache | MongoDb                    |
| Migrations           | MigrateMongo               |

Observation : On ne fait pas les migrations Arrière dans mongo. Peut-être que ce n'est pas grave tant que l'API n'est pas encore stabilisée ni trop utilisée par des consommateurs tiers.
Quand il y aura plus de consommateurs, pouvoir revenir en arrière sur la donnée pourra avoir du sens.

Dbo : hypothèse : objet data pour mongo

## 2eme partie

La deuxième session de ma découverte de la base de code de data.subvention.

## Exploration du site en production

Explorons le site https://datasubvention.beta.gouv.fr/ et regardons [la courte démo](https://www.loom.com/share/2720a47a15ab4929bfb0ab2059ca3fe5?t=0).

Je suis impressionné, en 3 minutes, j'ai une idée assez claire de l'utilité du service et à qui il est destiné.

Cette démon montre les capacités que donne l'outil pour les catégories d'usager actuels : les instructeur-ices.

Les usagers à venir (pilotes, contrôleurs) ne sont propablement pas encore représentés dans cette démo.

## Dashlord

Dashlord permet de grouper les métriques des services numériques des startups d'état.

https://dashlord.incubateur.net/

## Ma compréhension de l'API

https://github.com/orgs/betagouv/projects/38/views/1?pane=issue&itemId=67150218&issue=betagouv%7Capi-subventions-asso%7C2459


> [!question] API : quelle est la différence entre les `Port` et les
`Repository` ?
> Il semble que les ports et les repositories puissent être des MongoRepository. La différence entre les 2 ne semble pas être technique mais plutôt conceptuelle?
>

Batch ? Requêtes? ..

Interroger les services distants pour récupérer un instantané des données.

Stocker dans mongo.

Mongo est un peu utilisé comme un cache déjà dénormalisé pour être adapté à l'API qu'on fournit.

J'aime bien le fait qu'il y ai des Readme dans le dossier de certains providers !

![Certains data providers ont leur propre fichier Readme qui apporte des subtilités qu'il aurait été difficile de trouver en premier abord](/public/img/data-subvention-readme-interne-a-provider.png)
Mettre les informations dans le contexte : Living documentation

`modules/providers`

Chaque sous-dossier correspond à un fournisseur de données.
Il peut être interrogé via son fichier `.service.ts`
Celui-ci abstrait la façon dont est récupérée la donnée.
La donnée est persistée et dénormalisée dans mongoDb.

`modules/repository.list.ts` : repositories/services mongodb

Les points d'entrée:

![Le dossier
`interfaces` présente 4 sous-dossiers correspondant aux types de point d’entrée de l’API: cli, cron, http, sse ](/public/img/data-subvention-points-d-entree.png)

**Cli
** : ligne de commande, elle semble utilisée principalement pour synchroniser les données dans mongodb.

**Cron
** : tâches planifiées également pour resynchroniser des données tierces (ex. Démarches simplifiées, Data bretagne)

**Http
** : API REST exposée, utilisée par les clients consommateurs (ex. le frontend : interface de consultation, consommateurs d'open-data).

**SSE
** : API en Server side events pour faire des requêtes qui peuvent prendre du temps (par exemple parcequ'elles aggrègent plusieurs sources de données en live dont on ne peut pas forcément connaitre le temps de réponse à l'avance). Elles sont faites en asynchrone et en parallèle. Le client va ouvrir un canal et écouter les résultats se construire sous forme de flux jusqu'à ce que l'ensemble des données soit récupérée.

## Lecture du Readme de l'API

Dans [le readme de l'API](https://github.com/betagouv/api-subventions-asso/blob/develop/packages/api/README.md), j'apprécie que des définitions de ce qui est entendu sont rédigées.
Il y a quelques éléments de contexte qui expliquent certains choix techniques et des pratiques.

J'aime en particulier le fait qu'une définition des tests unitaires ait été apportée dans le contexte du produit. C'est souvent un concept dont la définition varie d'une contexte à l'autre et d'un individu à l'autre. Le clarifier est vraiment utile à mon sens.

Explication des variables d'environnement à configurer.

Les principales conventions de code son expliquées et les workflow de travail (notamment avec Github)

## Questions métier

- Comment va-t-on étendre l'usage pour les nouvelles catégories d'utilisateur-ices?
    - Pilotes
    - Contrôleurs
- Comment l'équipe de la startupt va communiquer, binômer, immersion ?

## Questions techniques

Les questions qui me sont venues progressivement sur le plan technique.

Sur quel IAM registre s'appuie l'authentification ?

Hypothèse : AgentConnect

config.domains : pour CORS?

code en anglais et termes métier en français
Termes métier en français traduits en en anglais dans les variables. Curieux d'en savoir un peu plus;
Hypothèse : routes en français pour l'open-data

API : quelle est la différence entre les `Port` et les `Repository` ?

Hypothèse :  Il semble que les ports et les repositories puissent être des MongoRepository.

La différence entre les 2 ne semble pas être technique mais plutôt conceptuelle?

## 3 ème session

2024-10-20

Fork et configuration sur mon laptop

```sh
git clone git@github.com:marc-bouvier/fork-api-subventions-asso.git
```

Installation de la version de nodejs pin.

```sh
nvm install 18.17
```

Installation des dépendances

```sh
npm i
```

Arborescence globale

```sh
tree -d -I 'node_modules|packages/api/node_modules|packages/dto/node_modules|packages/front/node_modules|packages/tools/node_modules'
```

```text
.
└── packages
    ├── api
    │   ├── __mocks__
    │   ├── assets
    │   │   └── images
    │   │       └── favicons
    │   ├── migrations
    │   ├── src
    │   │   ├── @enums
    │   │   ├── @types
    │   │   ├── authentication
    │   │   ├── configurations
    │   │   ├── dataProviders
    │   │   │   ├── api
    │   │   │   │   ├── dataBretagne
    │   │   │   │   │   └── __fixtures__
    │   │   │   │   └── rechercheEntreprises
    │   │   │   └── db
    │   │   │       ├── paymentFlat
    │   │   │       │   └── __fixtures__
    │   │   │       ├── rnaSiren
    │   │   │       ├── state-budget-program
    │   │   │       │   └── __fixtures__
    │   │   │       ├── uniteLegalEntreprise
    │   │   │       ├── uniteLegalImports
    │   │   │       └── uniteLegalName
    │   │   ├── decorators
    │   │   ├── entities
    │   │   ├── interfaces
    │   │   │   ├── cli
    │   │   │   ├── cron
    │   │   │   ├── http
    │   │   │   └── sse
    │   │   ├── middlewares
    │   │   ├── modules
    │   │   │   ├── _open-data
    │   │   │   │   ├── grant
    │   │   │   │   └── provider
    │   │   │   │       ├── @types
    │   │   │   │       └── entities
    │   │   │   ├── admin-structure
    │   │   │   │   ├── entities
    │   │   │   │   └── repositories
    │   │   │   ├── association-name
    │   │   │   │   ├── @types
    │   │   │   │   ├── adapters
    │   │   │   │   └── entities
    │   │   │   ├── associations
    │   │   │   │   └── @types
    │   │   │   ├── configurations
    │   │   │   │   ├── entities
    │   │   │   │   └── repositories
    │   │   │   ├── data-log
    │   │   │   │   ├── __snapshots__
    │   │   │   │   ├── entities
    │   │   │   │   └── repositories
    │   │   │   ├── data-viz
    │   │   │   │   └── paymentFlat
    │   │   │   │       └── __fixtures__
    │   │   │   ├── documents
    │   │   │   │   └── @types
    │   │   │   ├── dump
    │   │   │   │   ├── __snapshots__
    │   │   │   │   └── repositories
    │   │   │   ├── etablissements
    │   │   │   │   └── @types
    │   │   │   ├── grant
    │   │   │   │   ├── @types
    │   │   │   │   └── __snapshots__
    │   │   │   ├── index
    │   │   │   ├── notify
    │   │   │   │   ├── @types
    │   │   │   │   └── outPipes
    │   │   │   │       └── __snapshots__
    │   │   │   ├── payments
    │   │   │   │   └── @types
    │   │   │   ├── provider-request
    │   │   │   │   ├── @types
    │   │   │   │   ├── adapters
    │   │   │   │   ├── entities
    │   │   │   │   └── repositories
    │   │   │   │       ├── adapters
    │   │   │   │       └── dbo
    │   │   │   ├── providers
    │   │   │   │   ├── @types
    │   │   │   │   ├── __fixtures__
    │   │   │   │   ├── __mocks__
    │   │   │   │   ├── __snapshots__
    │   │   │   │   ├── apiAsso
    │   │   │   │   │   ├── __fixtures__
    │   │   │   │   │   ├── adapters
    │   │   │   │   │   │   └── __snapshots__
    │   │   │   │   │   └── dto
    │   │   │   │   ├── apiEntreprise
    │   │   │   │   │   ├── @types
    │   │   │   │   │   └── adapters
    │   │   │   │   ├── avisSituationInsee
    │   │   │   │   ├── bodacc
    │   │   │   │   │   ├── adapters
    │   │   │   │   │   │   └── __snapshots__
    │   │   │   │   │   └── dto
    │   │   │   │   ├── caisseDepots
    │   │   │   │   │   ├── adapters
    │   │   │   │   │   │   └── __snapshots__
    │   │   │   │   │   └── dto
    │   │   │   │   ├── chorus
    │   │   │   │   │   ├── @types
    │   │   │   │   │   ├── __fixtures__
    │   │   │   │   │   ├── adapters
    │   │   │   │   │   │   └── __snapshots__
    │   │   │   │   │   ├── entities
    │   │   │   │   │   └── repositories
    │   │   │   │   ├── dataBretagne
    │   │   │   │   ├── datagouv
    │   │   │   │   │   └── historyUniteLegal
    │   │   │   │   │       ├── @types
    │   │   │   │   │       ├── __fixtures__
    │   │   │   │   │       ├── adapters
    │   │   │   │   │       └── parser
    │   │   │   │   ├── dauphin
    │   │   │   │   │   ├── __snapshots__
    │   │   │   │   │   ├── adapters
    │   │   │   │   │   │   └── __snapshots__
    │   │   │   │   │   ├── dto
    │   │   │   │   │   └── repositories
    │   │   │   │   │       └── dbo
    │   │   │   │   ├── demarchesSimplifiees
    │   │   │   │   │   ├── @types
    │   │   │   │   │   ├── __fixtures__
    │   │   │   │   │   ├── adapters
    │   │   │   │   │   │   └── __snapshots__
    │   │   │   │   │   ├── dto
    │   │   │   │   │   ├── entities
    │   │   │   │   │   ├── queries
    │   │   │   │   │   ├── repositories
    │   │   │   │   │   └── schemas
    │   │   │   │   ├── fonjep
    │   │   │   │   │   ├── @types
    │   │   │   │   │   ├── __fixtures__
    │   │   │   │   │   ├── __snapshots__
    │   │   │   │   │   ├── adapters
    │   │   │   │   │   │   └── __snapshots__
    │   │   │   │   │   ├── entities
    │   │   │   │   │   ├── joiners
    │   │   │   │   │   └── repositories
    │   │   │   │   ├── geoApi
    │   │   │   │   │   ├── @types
    │   │   │   │   │   └── __snapshots__
    │   │   │   │   ├── gispro
    │   │   │   │   │   ├── @types
    │   │   │   │   │   └── entities
    │   │   │   │   ├── leCompteAsso
    │   │   │   │   │   ├── @types
    │   │   │   │   │   ├── adapters
    │   │   │   │   │   ├── entities
    │   │   │   │   │   └── repositories
    │   │   │   │   ├── osiris
    │   │   │   │   │   ├── @types
    │   │   │   │   │   ├── adapters
    │   │   │   │   │   │   └── __snapshots__
    │   │   │   │   │   ├── entities
    │   │   │   │   │   └── repositories
    │   │   │   │   │       └── dboAdapters
    │   │   │   │   ├── scdl
    │   │   │   │   │   ├── @types
    │   │   │   │   │   ├── __fixtures__
    │   │   │   │   │   ├── __snapshots__
    │   │   │   │   │   ├── adapters
    │   │   │   │   │   ├── dbo
    │   │   │   │   │   ├── entities
    │   │   │   │   │   └── repositories
    │   │   │   │   ├── subventia
    │   │   │   │   │   ├── @types
    │   │   │   │   │   ├── __fixtures__
    │   │   │   │   │   ├── adapters
    │   │   │   │   │   │   └── __snapshots__
    │   │   │   │   │   ├── repositories
    │   │   │   │   │   └── validators
    │   │   │   │   │       └── @types
    │   │   │   │   ├── uniteLegalEntreprises
    │   │   │   │   └── uniteLegalName
    │   │   │   ├── rna-siren
    │   │   │   ├── search
    │   │   │   │   ├── @types
    │   │   │   │   ├── entities
    │   │   │   │   └── repositories
    │   │   │   │       └── entities
    │   │   │   ├── stats
    │   │   │   │   ├── @types
    │   │   │   │   ├── entities
    │   │   │   │   ├── joiners
    │   │   │   │   ├── migrations
    │   │   │   │   └── repositories
    │   │   │   │       ├── __fixtures__
    │   │   │   │       └── __snapshots__
    │   │   │   ├── subventions
    │   │   │   │   └── @types
    │   │   │   └── user
    │   │   │       ├── @types
    │   │   │       ├── __fixtures__
    │   │   │       ├── entities
    │   │   │       ├── repositories
    │   │   │       │   ├── dbo
    │   │   │       │   └── errors
    │   │   │       └── services
    │   │   │           ├── activation
    │   │   │           ├── agentConnect
    │   │   │           ├── auth
    │   │   │           ├── check
    │   │   │           ├── consumer
    │   │   │           ├── crud
    │   │   │           ├── profile
    │   │   │           │   └── __snapshots__
    │   │   │           ├── rgpd
    │   │   │           │   └── __snapshots__
    │   │   │           ├── roles
    │   │   │           └── stats
    │   │   ├── shared
    │   │   │   ├── @types
    │   │   │   ├── __mocks__
    │   │   │   ├── __snapshots__
    │   │   │   ├── adapters
    │   │   │   ├── errors
    │   │   │   │   ├── cliErrors
    │   │   │   │   ├── dbError
    │   │   │   │   └── httpErrors
    │   │   │   │       └── NotFoundErrors
    │   │   │   └── helpers
    │   │   │       └── __snapshots__
    │   │   └── sse
    │   │       └── @types
    │   ├── tests
    │   │   ├── __fixtures__
    │   │   ├── __helpers__
    │   │   ├── __mocks__
    │   │   ├── __snapshots__
    │   │   ├── authentication
    │   │   ├── configurations
    │   │   ├── dataProviders
    │   │   │   ├── api
    │   │   │   └── db
    │   │   │       └── __fixtures__
    │   │   ├── interfaces
    │   │   │   ├── cli
    │   │   │   │   ├── __fixtures__
    │   │   │   │   └── __snapshots__
    │   │   │   ├── cron
    │   │   │   │   └── __snapshots__
    │   │   │   └── http
    │   │   │       └── __snapshots__
    │   │   └── modules
    │   │       ├── __snapshots__
    │   │       ├── providers
    │   │       │   ├── apiEntreprise
    │   │       │   ├── dauphin-gispro
    │   │       │   ├── fonjep
    │   │       │   │   ├── __fixtures__
    │   │       │   │   └── __snapshots__
    │   │       │   ├── leCompteAsso
    │   │       │   │   └── __fixtures__
    │   │       │   └── osiris
    │   │       │       └── __fixtures__
    │   │       └── user
    │   │           ├── __fixtures__
    │   │           ├── __snapshots__
    │   │           └── repositories
    │   │               └── __snapshots__
    │   └── tools
    │       ├── datagouv
    │       ├── fonjep
    │       ├── helpers
    │       └── osiris
    ├── dto
    │   ├── associations
    │   ├── auth
    │   │   └── subscriptionForm
    │   ├── configurations
    │   ├── consumer
    │   ├── documents
    │   ├── etablissements
    │   ├── geoApi
    │   ├── grant
    │   ├── payments
    │   ├── providers
    │   ├── rna-siren
    │   ├── search
    │   ├── shared
    │   ├── stats
    │   └── user
    ├── front
    │   ├── src
    │   │   ├── lib
    │   │   │   ├── assets
    │   │   │   │   └── images
    │   │   │   ├── components
    │   │   │   │   ├── AssociationCard
    │   │   │   │   ├── Auth
    │   │   │   │   ├── AutocompleteSelect
    │   │   │   │   ├── DefinePassword
    │   │   │   │   ├── Documents
    │   │   │   │   │   └── components
    │   │   │   │   ├── EstablishmentPreview
    │   │   │   │   ├── Header
    │   │   │   │   ├── InfosLegales
    │   │   │   │   ├── MainInfoBanner
    │   │   │   │   ├── MultiStepForm
    │   │   │   │   ├── SearchBar
    │   │   │   │   ├── Stats
    │   │   │   │   │   ├── MonthlyGraph
    │   │   │   │   │   └── MonthlyGraphTooltip
    │   │   │   │   ├── StructureFormStep
    │   │   │   │   │   ├── CentralSubStep
    │   │   │   │   │   ├── DecentralizedSubStep
    │   │   │   │   │   ├── OperatorSubStep
    │   │   │   │   │   ├── RegionField
    │   │   │   │   │   ├── TerritorialCollectivitySubStep
    │   │   │   │   │   └── __snapshots__
    │   │   │   │   ├── StructureTitle
    │   │   │   │   ├── SubventionsPaymentsDashboard
    │   │   │   │   │   ├── Modals
    │   │   │   │   │   ├── PaymentTable
    │   │   │   │   │   │   └── __snapshots__
    │   │   │   │   │   ├── SubventionTable
    │   │   │   │   │   │   └── StatutLabel
    │   │   │   │   │   └── SubventionsPaymentsStatistique
    │   │   │   │   ├── Tables
    │   │   │   │   └── errors
    │   │   │   ├── core
    │   │   │   ├── dsfr
    │   │   │   ├── entities
    │   │   │   ├── enums
    │   │   │   ├── errors
    │   │   │   ├── helpers
    │   │   │   ├── resources
    │   │   │   │   ├── associations
    │   │   │   │   │   ├── __fixtures__
    │   │   │   │   │   └── entities
    │   │   │   │   ├── auth
    │   │   │   │   │   └── subscriptionForm
    │   │   │   │   ├── document
    │   │   │   │   ├── establishments
    │   │   │   │   │   ├── __fixtures__
    │   │   │   │   │   └── types
    │   │   │   │   ├── externals
    │   │   │   │   │   └── geo
    │   │   │   │   ├── grants
    │   │   │   │   ├── open-source
    │   │   │   │   │   └── rna-siren
    │   │   │   │   ├── payments
    │   │   │   │   ├── providers
    │   │   │   │   ├── stats
    │   │   │   │   ├── subventions
    │   │   │   │   └── users
    │   │   │   ├── services
    │   │   │   ├── store
    │   │   │   └── types
    │   │   └── routes
    │   │       ├── (home)
    │   │       │   └── error
    │   │       ├── (noAuth)
    │   │       │   ├── accessibilite
    │   │       │   ├── cgu
    │   │       │   ├── contact
    │   │       │   ├── mentions-legales
    │   │       │   ├── politique-de-confidentialite
    │   │       │   └── statistiques
    │   │       ├── admin
    │   │       │   ├── domains
    │   │       │   ├── stats
    │   │       │   │   └── components
    │   │       │   │       ├── MonthlyRequestCountByYear
    │   │       │   │       └── TopAssociations
    │   │       │   └── users
    │   │       │       ├── composents
    │   │       │       │   ├── MonthlyUserCountByYear
    │   │       │       │   └── UserDistribution
    │   │       │       ├── create
    │   │       │       ├── list
    │   │       │       └── metrics
    │   │       ├── association
    │   │       │   └── [identifier]
    │   │       │       └── components
    │   │       │           ├── Bodacc
    │   │       │           │   └── __snapshots__
    │   │       │           ├── Establishments
    │   │       │           └── Stats
    │   │       ├── auth
    │   │       │   ├── activate
    │   │       │   │   └── [token]
    │   │       │   │       ├── __snapshots__
    │   │       │   │       └── components
    │   │       │   │           └── AgentTypeStep
    │   │       │   │               └── __snapshots__
    │   │       │   ├── forget-password
    │   │       │   ├── login
    │   │       │   ├── reset-password
    │   │       │   │   └── [token]
    │   │       │   └── signup
    │   │       ├── etablissement
    │   │       │   └── [identifier]
    │   │       │       └── components
    │   │       │           ├── ContactEtab
    │   │       │           │   └── __snapshots__
    │   │       │           └── InfosBancairesEtab
    │   │       ├── search
    │   │       │   └── [name]
    │   │       └── user
    │   │           └── profile
    │   │               └── components
    │   │                   └── ResetPwdModule
    │   ├── static
    │   │   ├── dsfr
    │   │   └── files
    │   └── tests
    └── tools
        ├── osiris-automation
        │   ├── Osiris
        │   ├── OsirisPuppeteer
        │   └── cleaned_modules
        │       └── signalR
        └── scrapping-lannuaire-service-public

422 directories
```

Désactiver Sentry pour lancer les tests.

`packages/front/vite.config.ts`

```ts
import {sveltekit} from "@sveltejs/kit/vite";
import {defineConfig, loadEnv} from "vite";

const file = fileURLToPath(new URL("package.json", import.meta.url));
const json = readFileSync(file, "utf8");
const pkg = JSON.parse(json);

export default defineConfig(({mode}) => {
    const env = loadEnv(mode, process.cwd(), "");
    return {
        plugins: [
            //    sentrySvelteKit({
            //        sourceMapsUploadOptions: {
            //            org: "betagouv",
            //            project: "data-subvention-front",
            //            url: "https://sentry.incubateur.net/",
            //            authToken: env.SENTRY_AUTH_TOKEN || env.SENTRY_AUTH_TOKEN,
            //            release: pkg.version
            //        },
            //    }),
            sveltekit(),
        ],
        test: {
            include: ["src/**/*.{test,spec}.{js,ts}"],
            globals: true,
            environment: "jsdom",
            clearMocks: true,
            setupFiles: ["src/setuptest.ts"],
        },
        optimizeDeps: {
            include: ["dto"],
        },
        build: {
            commonjsOptions: {
                include: [/dto/, /node_modules/],
            },
        },
    };
});

```

Build le projet

```sh
npm run build
```

> [!sucess]
> ```text
> 
> api-subventions-asso@0.10.3 build
> lerna run build
> 
> lerna notice cli v8.1.3
> 
>    ✔  dto:build (3s)
>    ✔  api:build (8s)
>    ✔  front:build (11s)
> 
> ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
> 
>  Lerna (powered by Nx)   Successfully ran target build for 3 projects (14s)
> ```

Lancement des tests pour voir.

```sh
npm test
```

> [!success]
> ```text
> api-subventions-asso@0.10.3 test
> lerna run test
> 
> lerna notice cli v8.1.3
> 
>    ✔  dto:test (346ms)
>    ✔  tools:test (347ms)
>    ✔  front:test (10s)
>    ✔  api:test (2m)
> 
> ——————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————————
> 
>  Lerna (powered by Nx)   Successfully ran target test for 4 projects (2m)
> ```


Configuration des variables d'environnement de l'API.

Comme indiqué dans le readme de l'API.

Création d'un fichier `.env` à la racine du projet.
Pour le moment je tente de le mettre à vide

```sh
# Required variables
# ------------------------------

# 
JWT_SECRET=
MAIL_HOST=
MAIL_PORT=
MAIL_USER=
MAIL_PASSWORD=

# Other variables
# ------------------------------

# To connect to association API
#API_ASSO_URL=
#API_ASSO_TOKEN=

# To specify a database name
#MONGO_DBNAME=datasubvention

# To connect to Entreprise API
#API_ENTREPRISE_TOKEN=

# To use Brevo e-mail services
#API_SENDINBLUE_TOKEN=
#API_SENDINBLUE_CONTACT_LIST=

# To connect ot DAUPHIN
#DAUPHIN_USERNAME=
#DAUPHIN_PASSWORD=

# To use Sentry bug reporting
#SENTRY_AUTH_TOKEN=

```

````md
## Setup

Pour utiliser l'api, vous devez au préalable avoir installé Node.js et NPM.

Vous devez ensuite installer les dépendances avec `npm install`.

Ensuite, il vous faudra créer un fichier .env à la racine du projet, avec au moins les variables d'environnement suivantes:

- JWT_SECRET
- MAIL_HOST
- MAIL_PORT
- MAIL_USER
- MAIL_PASSWORD

Les autres variables utilisées sont :

- API_ASSO_URL
- API_ASSO_TOKEN

Pour se connecter à l'API Association

- MONGO_DBNAME=datasubvention

Pour spécifier le nom de la base de donnée

- API_ENTREPRISE_TOKEN

Pour se connecter à l'API Entreprise

- API_SENDINBLUE_TOKEN
- API_SENDINBLUE_CONTACT_LIST

Pour utiliser les services Brevo (envoi de mail)

- DAUPHIN_USERNAME
- DAUPHIN_PASSWORD

Pour se connecter à DAUPHIN

- SENTRY_AUTH_TOKEN

Pour utiliser le reporting de bug Sentry

Pour fonctionner l'api doit pouvoir se connecter à une base de données mongoDB v4.0 .  
Par défaut, elle se connecte à l'url
`mongodb://localhost:27017/api-subventions-asso`.  
Il est possible de paramétrer ces informations dans le fichier .env. Le nom des variables se trouve dans
`configurations/mongo.conf.ts`.

Vous pouvez utiliser docker pour simplifier l'installation de MongoDB avec les commandes suivantes :  
`sudo docker pull mongo:4.0.3`  
`sudo docker run -d -p 27017:27017 mongo`
````

Lançons en mode dev pour voir :

```sh
npm run dev
```

Ooupsie, j'ai oublié de mettre une base de données mongodb.

Je vais créer un docker-compose pour mongo.

Je vais suivre le guide officiel :

https://www.mongodb.com/resources/products/compatibilities/docker

Un fichier `docker-compose.yml` minimaliste.

Note : j'ai changé le port exposé (
`27117:25017`) pour éviter des conflits avec d'autres projets.

```yml
services:
  mongodb:
    image: mongo:4.0.3
    environment:
    ports:
      - '27117:27017'
```

```sh
docker compose up -d
```

Quelques modifications pour faire fonctionner la base de données :

`.env`

```sh
# Required variables  
# ------------------------------  
  
JWT_SECRET=xxxxxxxxxxxxxxxx 
MAIL_HOST=  
MAIL_PORT=  
MAIL_USER=  
MAIL_PASSWORD=  
  
  
# Other variables  
# ------------------------------  
  
# To connect to association API  
#API_ASSO_URL=  
#API_ASSO_TOKEN=  
  
# To specify a database name  
MONGO_DBNAME=datasubvention  
#MONGO_USER=user  
#MONGO_PASSWORD=pass  
MONGO_PORT=27117  
  
FRONT_OFFICE_URL=http://localhost:5173  
  
# To connect to Entreprise API  
#API_ENTREPRISE_TOKEN=  
  
# To use Brevo e-mail services  
#API_SENDINBLUE_TOKEN=  
#API_SENDINBLUE_CONTACT_LIST=  
  
# To connect ot DAUPHIN  
#DAUPHIN_USERNAME=  
#DAUPHIN_PASSWORD=  
  
# To use Sentry bug reporting  
#SENTRY_AUTH_TOKEN=
```

Il semble qu'il faille que le JWT_SECRET soit renseigné, comme prévu.

```text
[0] /Users/marco/sources/Baldir/Candidatures/beta-gouv/dinum/fork-api-subventions-asso/node_modules/passport-jwt/lib/strategy.js:45
[0]         throw new TypeError('JwtStrategy requires a secret or key');
[0]               ^
[0] TypeError: JwtStrategy requires a secret or key
[0]     at new JwtStrategy (/Users/marco/sources/Baldir/Candidatures/beta-gouv/dinum/fork-api-subventions-asso/node_modules/passport-jwt/lib/strategy.js:45:15)
[0]     at registerAuthMiddlewares (/Users/marco/sources/Baldir/Candidatures/beta-gouv/dinum/fork-api-subventions-asso/packages/api/src/authentication/express.auth.hooks.ts:49:9)
[0]     at startServer (/Users/marco/sources/Baldir/Candidatures/beta-gouv/dinum/fork-api-subventions-asso/packages/api/src/server.ts:78:34)
[0]     at main (/Users/marco/sources/Baldir/Candidatures/beta-gouv/dinum/fork-api-subventions-asso/packages/api/src/index.ts:13:22)
[0]     at processTicksAndRejections (node:internal/process/task_queues:105:5)
[0] [nodemon] app crashed - waiting for file changes before starting...


```

J'en génère un au pif avec https://jwtsecret.com/generate

Et je relance

```sh
npm run dev
```

- Frontend : http://localhost:5173/
- API :  http://localhost:8080

Le site se lance !

![data.subventions dans un navigateur en local](/public/img/data-subvention-localhost.png)

Il faut maintenant que je me connecte.

Je vais voir s'il existe un moyen de se connecter quand on travaille en local.

Dans `packages/api/README.md`

````md


### Pour AgentConnect

AgentConnect ne fonctionne pas avec l'url
`localhost`. Pour qu'AgentConnect fonctionne, il faut

1. définir les variables d'environnements
    - AGENT_CONNECT_ENABLED -> `true`
    - AGENT_CONNECT_CLIENT_ID
    - AGENT_CONNECT_CLIENT_SECRET
    - AGENT_CONNECT_URL : https://fca.integ01.dev-agentconnect.fr/api/v2 en local et préprod
2. mettre en place un alias qui redirige `dev.local` vers
   `localhost`. Pour cela, ajouter au fichier `/etc/hosts` la ligne
    ```  
    127.0.0.1 dev.local  
    ```    Dans l'absolu il faut que l'alias corresponde à ce qui a été renseigné lors de la demande des client_id et client_secret utilisés.


````

Par défaut, AgentConnect ne semble pas activé.

https://github.com/marc-bouvier/fork-api-subventions-asso/blob/89c3f61f3edc8509bb2c46a8b7a9cfdfe4bbd2d5/packages/api/src/configurations/agentConnect.conf.ts

Voyons si je peux créer un compte utilisateur localement.

![](/public/img/data-subvention-creer-compte.png)

![](/public/img/data-subvention-signup-error.png)

![](/public/img/data-subvention-localhost-cors-error.png)

Créer un utilisateur

Dans `packages/api`

```sh
export JWT_SECRET=...
export MONGO_PORT=27117
```

```sh
npm run cli user create baldir.fr@gmail.com
 ```

Requête HTTP dans le client HTTP de Webstorm

```text
POST http://localhost:8080/auth/forget-password  
Content-Type: application/json  
  
{  
  "email": "baldir.fr@gmail.com"  
}
```

Token  : 21ZCxnFqUoBvlpGch7cBVNRHPL579iE6

```text
  
POST http://localhost:8080/auth/reset-password  
Content-Type: application/json  
  
{  
  "password": "P@ssw0rd",  
  "token": "21ZCxnFqUoBvlpGch7cBVNRHPL579iE6"  
}

```

![](/public/img/data-subvention-index-page.png)

I'm in !

Ajout du rôle `admin` à mon utilisateur :

![](/public/img/data-subvention-add-role-admin-mongo.png)

## Sidetracks

Comment faire que la bonne version de nodejs s'installe et switch auto quand je suis dans le dossier ?


## Alimenter avec quelques exemples de données


Données fonjep depuis des fixtures de test

Depuis `packages/api`
```sh
npm run cli fonjep parse "tests/modules/providers/fonjep/__fixtures__/fonjep-new.xlsx" 2024-10-21T19:53:15+02:00
```

