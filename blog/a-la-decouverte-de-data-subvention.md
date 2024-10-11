---
title: À la découverte de Data.subvention
date: 2024-10-08T16:15:15+02:00
tags: 
description: "Découvrons la startup d'état “Data.subvention”: sa mission, sa base de code. Embarquons-nous comme si c’était notre premier jour."
draft: true
---


https://www.welcometothejungle.com/fr/companies/communaute-beta-gouv/jobs/developpeur-se-fullstack-javascript-de-la-start-up-d-etat-data-subvention?q=8a4078229b391e9f923f4012c12fdac5&o=7f2854cd-7b1d-4898-90c8-048206441a29

## Contexte

### **🎯 La mission proposée**

Tu participeras activement au développement de la solution Data.Subvention agissant en équipe pour développer l’API et le client web en suivant une méthodologie agile. 

Les technologies utilisées sont :

- TypeScript
    
- Express
    
- MongoDB
    
- Svelte
    
- Jest
    

Le projet est géré via [GitHub](https://github.com/betagouv/api-subventions-asso/projects/1).

L’équipe fonctionne en cycles courts rythmés par des rituels quotidiens. La gestion de l’équipe se veut horizontale. Être autonome sur les tâches à réaliser et s’impliquer dans la conception du produit font partie de la mission.

Tu pourras être en contact avec d’autres services techniques internes à l’État ainsi que des utilisateurs dans un but d’amélioration continue de nos outils.

Tous les membres de l’équipe vivent dans des villes différentes et travaillent essentiellement à distance. Tu auras la possibilité de te rendre sur le site de Beta.Gouv si tu le souhaites (Paris 7ème).

Des séminaires réunissant toute l’équipe sont organisés en présentiel sur un format court (2 jours-2 nuits) tous les 4 mois environ.

**🔎 Le profil recherché**

**Tu es :**

- Capable de gérer un ensemble de tâches en autonomie, en étroite collaboration avec les autres membres de l’équipe aux profils variés (data scientist, développeurs, Ux Ui, Communication, Chargé.e de déploiement)
    
- Prêt.e à t’impliquer dans la vie de la start-up 
    
- Animé·e par la volonté d’améliorer le service public
    
- Doté d’une expérience d’au moins 2 à 3 ans au sein de l’écosystème Beta.Gouv ou de l’administration publique, dans un rôle similaire
    
- A l’écoute des autres et à l’aise dans la communication orale et écrite
    

**Tu maîtrises :**

- JavaScript
    
- MongoDB ou les bases de données en général
    
- Svelte ou un autre framework JS
    
- Git et l’écosystème GitHub
    
- Jest ou une autre librairie de tests
    

**C’est encore mieux si :**

- Tu as des connaissances en architecture oignon (hexagonale/clean architecture)
    
- Tu as de l’appétence pour l’open source et l’open data
    
- Tu es sensible à la sécurité des applications
    
- Tu as l’habitude de prendre en compte les retours utilisateurs

### **📝 Les modalités**

- Contrat : indépendant
    
- TJM :  550 € (voir la [grille de rémunération Beta Gouv](https://doc.incubateur.net/communaute/travailler-chez-beta.gouv.fr/les-differents-statuts/independants-freelances/observatoire-revenus#les-tjm-une-base-pour-evaluer-le-prix-dune-prestation))
    
- Charge : 4 jours par semaine
    
- Durée : 3 mois (renouvelable)
    
- Début souhaité : début Octobre 2024
    

### **🚀 Candidater**

Partage-nous ton LinkedIn / CV / Github / site par mail à [contact@datasubvention.beta.gouv.fr](https://doc.incubateur.net/communaute/travailler-chez-beta.gouv.fr/les-differents-statuts/independants-freelances/observatoire-revenus#les-tjm-une-base-pour-evaluer-le-prix-dune-prestation) avec en objet “Recrutement - Développement full-stack JavaScript” et raconte-nous :

- Pourquoi le sujet des subventions aux associations te parle
    
- Ce que tu penses pouvoir apporter au projet
    
- Ce qui te plaît dans le travail en équipe et l’agilité
    

À bientôt ! 😀

## Découverte de la startup


Données provenant de

- Chorus : versements liés aux subventions
- Registre National des Associations: pièces administratives des associations
- Le Compte Asso
- ...
  
Liste complète : https://datasubvention.beta.gouv.fr/article-source-de-donnees-datasubvention/


Frontaux : 

- API : ?API?
- Outil de consultation : ? frontend?


## Journal

Lecture : https://beta.gouv.fr/startups/data-subvention.html

Changelog très probablement construit avec conventional commit.

Github bots pour donner du feedback dans les PR. Covbot.

supertest (deja utilisé dans nestjs)


Des tests automatisés avec Jest.

Enjeux du moment : 
- Complétude
	- Données des versements ✅
	- Données des **collectivités**
	- Données des **opérateurs**

Enjeux : confiance dans les données

Personas:
- Instructeurs ✅
- Pilotes
- Contrôleurs

## Dive in

https://github.com/betagouv/api-subventions-asso

```sh
git clone git@github.com:betagouv/api-subventions-asso.git
```

|                                    |                     |
|------------------------------------|---------------------|
| Déploiement                        | Scalingo            |
| API doc                            | OpenApi 3.0         |
| Observabilité                      | Sentry              |
| Node                               | 18                  |
| Client REST                        | Axios               |
| Design System                      | DSFR                |
| Monorepo                           | Lerna               |
| Release                            | Conventional commit |
| Pre-commit hook                    | Husky               |
| Vérification des mesages de commit | commitlint          |
| CI-CD                              | Github Actions      |
| Framework                          | Svelte              |
| Lib Design-System                  | @gouvfr/dsfr        |
| Svelte                             | 4.2                 |
| Test browser                       | Playwright          |
| Events                             | SSE                 |
|                                    |                     |

Doc d'API généré depuis le code.

Route `/` quelques infos sur l'API:
- [Documentation API & Guide d'intégration](https://github.com/betagouv/api-subventions-asso/wiki/Documentation-API-&-Guide-d'int%C3%A9gration)

Dto : Types si on souhaite s'intégrer avec Typescript




### Questions techniques

- Sur quel IAM registre s'appuie l'authentification ?
- config.domains : pour CORS?
- code en anglais et termes métier en français
	- termes métier en français traduits en en anglais dans les variables. Curieux d'en savoir un peu plus;
- 


## Dto

- Commentaires en français et en anglais
- Noms en franglais
	- en français : les termes métiers (ex. Association, Personne)
		- Pour la lisibilité de l'OPEN Data
	- en anglais ; les termes génériques (ex. request, Search, Provider ...)




## Tools

Readme manque de contexte

Outils pour scrapper des données
- Osiris
- Annuaire service public

Je n'ai pas trouvé de tests



## Frontend


Svelte.

Observation : peu de dépendances.
Simplicité

Les noms de variable sont en anglais même si les termes métier sont en français.

Je suis surpris de ce choix. Car il entraine une traduction qui ne me semble pas utile.
Après ça reste un scope assez petit (quelques lignes). Ca ne devrait pas poser de problème d'ambiguité.

Cela permet à des gens non francophones de comprendre le code.

L'arborescence est documentée.

  
```  
src  
│  
└───lib                                      // Contient tous les composants Svelte métier  
│    │                                       │    └───components                          // Contient tous les composants Svelte métier  
│    │   │                                   │    │   │                                   │    │   └───Foo                             // Il existe autant de sous répertoire que de composants "intelligent"  
│    │       │   Foo.svelte                  // Composant graphique Svelte (dumb)  
│    │       │   Foo.controller.js           // Contrôleur qui s'occupe de récupérer/calculer la donnée renvoyée au composant graphique  
│    │       │   ...                         │    │                                       │    └───core                                // Contient quelques fichiers "essentiels", comme le connecteur SSE  
│    │                                       │    └───dsfr                                // Contient tous les composants Svelte liés au composant du DSFR  
│    │                                       │    └───helpers                             // Contient des helpers spécifiques à un champ particulier (string, date, etc)  
│    │                                       │    └───resources                           // Contient les connecteurs (ports) HTTP  
│    │                                       │    └───services                            // Contient des services métiers qui ne sont pas liés à un composant ou à une ressource  
│    │                                       │    └───store                               // Contient une liste de stores globaux  
│                                            └───routes                                   │    │                                       │    └───example-route                       // nom de la route (voir routing)  
│    │   │                                   │    │   └───components                      // Contient des composants spécifiques à la route en question. Même architecture que pour les composants dans libs  
│    │   │                                   │    │   └───+page.ts                        // Il existe autant de sous répertoire que de composants "intelligent"  
│    │   │                                   │    │   └───+page.svelte                    // Il existe autant de sous répertoire que de composants "intelligent"  
│    │   │                                   │    │   └───+route.ts                       // Il existe autant de sous répertoire que de composants "intelligent"  
│    │                                       │    └───...                                 // Autant de routes que nécessaire  
│    │                                       │    └───   +error.svelte                    // Page d'erreur (notamment 404)  
│    │                                       │    └───   +layout.svelte                   // Contient le layout général (header, etc)  
│    │                                       │    └───   +layout.ts                       // Contient la logique qui doit s'appliquer pour toutes les pages  
                                             │   main.js                                  // Point d'entrée de l'application  
│   global.css                               // Fichier CSS global  
│   app.html                                 // Coquille minimale autour des composants svelte  
│   hooks.server.ts                          // Hooks serveur. Permet notammer de spécifier les headers  
```

Séparation des responsabilités

Composants "intelligents" : vont chercher des données en s'appuyant sur des controllers

Les controlleurs font passe plat avec des API / Services

Tests

```sh
cd package/front
npm run test
```

```
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

```
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


## API

| Mail       | Brevo        |
| ---------- | ------------ |
|            | Sentry       |
|            | Axios        |
|            | MongoDb      |
| Migrations | MigrateMongo |

Observation : On ne fait les migrations Arrière dans mongo


Dbo : hypothèse : objet data pour mongo

## 2eme partie

## Site live

## Dashlord

https://dashlord.incubateur.net/

## Ma compréhension de l'API

https://github.com/orgs/betagouv/projects/38/views/1?pane=issue&itemId=67150218&issue=betagouv%7Capi-subventions-asso%7C2459

> [!question] API : quelle est la différence entre les `Port` et les `Repository` ?
> Il semble que les ports et les repositories puissent être des MongoRepository. La différence entre les 2 ne semble pas être technique mais plutôt conceptuelle?
> 
 



Batch ? Requetes? ..

Interroger les services distants pour récupérer un instantané des données.

Stocker dans mongo.

Mongo est un peu utilisé comme un cache déjà dénormalisé pour être adapté à l'API qu'on fournit.

> [!success] Readme dans certains providers

![](/public/img/bar.png)
Mettre les informations dans le contexte : Living documentation

`modules/providers`

Chaque sous-dossier correspond à un fournisseur de données.
Il peut être interrogé via son fichier `.service.ts`
Celui-ci abstrait la façon dont est récupérée la donnée.
La donnée est persistée et dénormalisée dans mongoDb.


`modules/repository.list.ts` : repositories/services mongodb



Les points d'entrée:

![](/public/img/data-subvention-points-d-entree.png)

Readme de l'API

Définitions de ce qui est entendu
- tests unitaires
- 