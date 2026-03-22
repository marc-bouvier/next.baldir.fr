---
title: Publier un site jekyll par merge-request dans Gitlab
description: Il est parfois utile d'avoir un aperçu d'un site statique lorsqu'on est en train de préparer une mise à jour d'un site statique. Voici une façon de publier temporairement un site statique avec Jekyll à partir d'une merge request dans GitLab.
lang: fr
date: 2022-08-05
tag:
  - Gitlab
  - ci-cd
  - jekyll
  - SSR
  - SEO
  - StaticSite
date_updated: 2026-03-22T17:19
---
Il est parfois utile d'avoir un aperçu d'un site statique lorsqu'on est en train de préparer une mise à jour d'un site statique. Voici une façon de publier temporairement un site statique avec Jekyll à partir d'une merge request dans GitLab.

Ce dépôt est inspiré fortement de la vidéo de Christophe Chaudier ([@c_chaudier](https://twitter.com/c_chaudier)) pour [Les Compagnons du DevOps](https://www.compagnons-devops.fr/).

- [Un environnement (site statique) par Merge Request | Live Coding | GitLab / Froggit Pages 2](https://www.youtube.com/watch?v=OldDS6PfS8A) — Les compagnons du DevOps — Christopher Chaudier

Ce dépôt a été créé à l'aide du template de site Jekyll pour gitlab pages (proposé par Gitlab).

Pour voir les différents sites correspondants à une MR (qui a au moins un commit).
Dans gitlab depuis la rubrique "Deploiements > Environnements" (menu de gauche).
Tu devrais voir pour chaque MR un environnement avec un site déployé.

![Capture d'écran montrant la rubrique "Deploiements > Environnements" de Gitlab avec le site de production et 3 environnements correspondants à des branches associées à des merge request](/2022-08-05/deploiement-environnements.png)

Voici des extraits du fichier `.gitlab-ci.yml`.

Tout d'abord, voici le job qui permet de déployer le site "en production" c'est à dire qu'il correspond à la branche par défaut (ici `main`).
Les variables `BASE_URL` et `INDEX_URL` permettent à Jekyll et aux environnements de Gitlab de connaitre les URL absolues du site web déployé.
Ceci peut être important car les fichiers javascript ou CSS peuvent ne pas être résolus sinon. Par ailleurs, il peut être important pour l'optimisation de référencement (SEO) de disposer de liens canoniques (URLS absolues).

Jekyll a besoin de connaitre l'URL absolue du site car pour les gitlab pages (à part si on utilise des noms de domaine particuliers).
Il a besoin de savoir à partir de quelle URL commence le site.

Le truc important ici c'est de ne pas oublier de dire à `jekyll` l'URL de base du site. Ici, nous le faisons avec l'argument `--baseurl`.

```yml
pages:
  stage: deploy
  variables:
    BASE_URL: ${CI_PAGES_URL}
    INDEX_URL: ${BASE_URL}/index.html
  script:
    - echo "🚀 Deploy on ${CI_ENVIRONMENT_NAME} on ${INDEX_URL}"
    - bundle exec jekyll build --baseurl ${BASE_URL} -d public
  artifacts:
    paths:
      - public
  rules:
    - if: $CI_COMMIT_BRANCH == $CI_DEFAULT_BRANCH
  environment:
    name: production
    url: "${INDEX_URL}"
```

Dans le cas de sites déployées sur une branche de merge request, Gitlab Pages doit aller chercher les ressources sur l'artefact produit lors de la pipeline.
Cela nécessite de changer la variable `BASE_URL` (et donc implicitement la variable `INDEX_URL`) pour que le site aille chercher les fichiers dans les artefacts publiés (ici : `https://${CI_PROJECT_ROOT_NAMESPACE}.${CI_PAGES_DOMAIN}/-/${CI_PROJECT_NAME}/-/jobs/${CI_JOB_ID}/artifacts/public`).

**Remarque**:
- si vous voulez que vos sites soients accessible par tout le monde, il faudra l'activer dans la configuration du dépôt (Configuration > Visibilité > Pages). Pour vous assurer que vos pages sont disponible publiquement vous pouvez essayer de les ouvrir dans votre navigatuer en mode "navigation privée".
- comme Christophe la fait remarquer, on positionne une date de péremption pour l'artefact car une MR ne devrait pas durer plus d'une semaine. Cela est important car permet d'économiser des ressources à Gitlab.
- par ailleurs quand la MR est terminée, l'environnement est supprimé

```yml
pages:preview:
  extends: pages
  variables:
    BASE_URL: https://${CI_PROJECT_ROOT_NAMESPACE}.${CI_PAGES_DOMAIN}/-/${CI_PROJECT_NAME}/-/jobs/${CI_JOB_ID}/artifacts/public
  artifacts:
    expire_in: 1 week
  rules:
    - if: $CI_MERGE_REQUEST_IID
  environment:
    name: ${CI_MERGE_REQUEST_IID}
    on_stop: pages:preview:stop
```
Voici comment l'environment est supprimé.

```yml
pages:preview:stop:
  stage: clean
  rules:
    - if: $CI_MERGE_REQUEST_IID
      when: manual
  allow_failure: true
  environment:
    name: ${CI_MERGE_REQUEST_IID}
    action: stop
  script:
    - echo "Deleted staging page after MR is done"
```
