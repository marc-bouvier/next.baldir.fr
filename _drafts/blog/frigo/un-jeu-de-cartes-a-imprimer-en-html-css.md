---
title: Un jeu de cartes à imprimer en HTML et CSS
date: 2024-09-29T14:29:00
tags: 
description: ""
stub: false
draft: true
permalink: blog/un-jeu-de-cartes-a-imprimer-en-html-css/
---



## Échafaudage

Dans un nouveau dossier, je crée un dépôt git.

```sh
mkdir baldir-cards
cd baldir-cards
git init
```


Je crée un fichier HTML vide.

```sh
touch index.html
```


Je crée l'emplacement des assets.

```sh
mkdir -p public/img
mkdir -p public/css
```

Je crée les fichiers de style vides.

```sh
touch public/css/style.css
touch public/css/jeu-serieux.css
```


## Premier contenu et lancement de 11ty

Je crée un fichier HTML de base `index.html`

```html
<html lang="fr">  
<head>  
    <meta charset="UTF-8">  
    <meta name="description" content="Baldir - Jeu de cartes sérieux à imprimer">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">  
    <title>Baldir - Jeu de cartes sérieux à imprimer</title>  
    <style>    </style>    <link href="/public/css/style.css" rel="stylesheet">  
    <link href="/public/css/jeu-serieux.css" rel="stylesheet">  
</head>  
<body>  
Foo  
</body>  
</html>
```


Je lance le site avec 11ty en mode serveur

```sh
npx @11ty/eleventy --serve
```

Il est accessible à l'URL [http://localhost:8080/](http://localhost:8080/).

## Les styles ne sont pas importés

Erreur lors du chargement des styles `.css`.

```
Refused to apply style from 'http://localhost:8080/public/css/style.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.
localhost/:15 Refused to apply style from 'http://localhost:8080/public/css/jeu-serieux.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.
reload-client.js:21 [11ty][12:43:42.329 UTC] Connected
localhost/:1 Refused to apply style from 'http://localhost:8080/public/css/style.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.
localhost/:1 Refused to apply style from 'http://localhost:8080/public/css/jeu-serieux.css' because its MIME type ('text/html') is not a supported stylesheet MIME type, and strict MIME checking is enabled.
```

Je met en place [la copie de fichiers en passe-plat pour les fichiers CSS](https://www.11ty.dev/docs/assets/#copy-files).

`.eleventyrc.js`

```js
module.exports = function(eleventyConfig) {    eleventyConfig.addPassthroughCopy("**/*.css");  
};
```

Les styles sont maintenant chargés.

## Créer une carte en CSS


L'idée ici est de dessiner des cartes à jouer pour les découper.

Comme je veux faire des cartes recto-verso et ne pas m'embêter à calculer le positionnement sur les cartes, je vais faire des cartes dont le verso se repliera sur le recto : 

```text
  
          Plier ici  
  
             ||  
             ||  
             \/  
               
|————————————||————————————|  
|            ||            |  
|  Recto     ||   Verso    |  
|            ||            |  
|            ||            |  
|            ||            |  
|————————————||————————————|
```


C'est une astuce que m'a donné [Julien Bidoret](https://post.lurk.org/@julienbidoret) lors de [ppp-day-2-demos](blog/ppp-day-2-demos.md)

Je découperai ensuite les cartes et je les glisserai dans des sleeves (protège cartes). Ça leur donnera un toucher de meilleure qualité même si le papier n'est pas de très bonne qualité et les maintiendra en place.

Julien m'a donné quelques autres astuces : 

- Ne pas faire d'espacements entre les cartes (ça permet de couper moins de fois) ;
- Si je veux faire des cartes collées sur un carton, je peux ajouter un leger espace entre le recto et le verso pour prendre en compte l'épaisseur du carton; 
- Utiliser des unités de mesure en `mm` ;
- CSS grid pour la mise en page ;
- Eviter l'overflow dans les cartes ;

```css
break-inside:avoid;
overflow:hidden
```

## Faisons notre maquette de première carte

Avant de faire tout de suite des cartes avec un moteur de template. Regardons déjà ce que ça rend en HTML.

Je vais devoir m'initier à CSS grid


## Choisir la taille de mes cartes


https://www.sleeveyourgames.com/guide

Je vais choisir la taille standard : 
- Largeur : 63 mm
- Hauteur : 88 mm

