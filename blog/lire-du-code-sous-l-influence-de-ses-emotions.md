---
title: Lire du code sous l‘influence de ses émotions
date: 2024-10-12T20:53:00
description: Transcription du talk de Romeu Moura lors de XCraft à Lyon en 2023.
tags:
  - Apprenance
  - Pensée-systémique
  - Lecture-de-code
  - Écrire
  - Software-craft
cover_image: /public/img/cover_images/lire-du-code-sous-l-influence-de-ses-emotions.png
cover_image_alt: Lire du code sous l’influence de ses émotions. Propositions du livre ”How to read a book” appliqués au code.
---
[Vidéo Youtube de la présentation](https://www.youtube.com/watch?v=KSAn98i44S0) | [Board Excalidraw de la présentation](https://excalidraw.com/#room=0855769e48e79c0c12fc,qIEKzaL8rEGRMkPOdQzbOw)

## TLDR;
### Étapes de compréhension d’un livre

D'après le livre "How to read a book" de  Mortimer Adler

On peut mieux lire un livre en 4 étapes (4ème étape est très rare)

- [Indexation](/glossaire/lecture-indexation)
- [Skimming](/glossaire/lecture-skimming)
- [Analyse](/glossaire/lecture-analyse)
- [Semiologique](/glossaire/lecture-semiologique)

Romeu propose de faire le parallèle avec la lecture du code.

### Lire du code sous l'influence de ses émotions

Extension du [rasoir de Hanlon](/glossaire/rasoir-de-hanlon) par Romeu :

> Ne pas attribuer à la malveillance ce que la bêtise peut expliquer.

---

> Ne pas attribuer à la stupidité ce qui est expliqué par le manque d'attention.

---

> Ne pas attribuer au manque d'attention ce qui peut être expliqué par un contexte non dit

---

> Ne pas attribuer à un contexte non dit ce que le système autour de la personne peut expliquer

### Livres mentionnés

- [How to read a book](https://en.wikipedia.org/wiki/How_to_Read_a_Book) - Mortimer Adler
- Code reading in practice - Felienne Hermans
- Pedagogy of the oppressed - Paulo Freire
- Les mots sont des fenêtres (ou bien ce sont des murs) - Marshall B. Rosenberg

## Version longue

A l'origine de tous ces talks, ce tweet de Romeu de 2015.


![If you remake awful software from scratch without changing the culture that created it: you'll remake awful software](/public/img/romeu-moura-if-you-remake-awful-software-from-scratch.png)
Romeu présente la méthode de lecture de livre proposée par Mortimer Adler.
Et de faire le parallèle avec la lecture de code.

> L'idée entière de Adler, c'est comme le [TDD](/glossaire/TDD). La séparation d'inquiétude est quelque chose qu'on a du mal à faire. C'est dur d'accepter que ça va plus vite.
> 
> TDD : 
> - Make it work
> - Make it right
> - Make it fast
> […]
> Faire 3 fois, impression de gaspillage. Impression de perdre du temps.
> Au total, 
> essayer de trouver une solution tout court avant que ce soit la bonne, 
> puis essayer de la rendre bonne,
> puis essayer de la rendre preformante,
> va plus vite que essayer d'être tout le temps en train de réfléchir à tous ces axes à la fois.
> 
> Paraphrasé — Romeu Moura - https://youtu.be/KSAn98i44S0?t=556

Avec la lecture c'est la même chose.
Ça va plus vite de lire plusieurs fois.

## Un nombre limité de page à lire dans votre vie

Ce qui a convaincu Romeu dans le livre de Mortimer Adler :

> Il y a un nombre limité de pages que vous allez lire dans votre vie.
> Ce nombre existe. Vous ne le connaissez pas mais il existe.
> Vous ne pouvez pas changer ce nombre.
> Vous pouvez juste changer la qualité des pages.
> 
> Paraphrasé — Romeu Moura - https://youtu.be/KSAn98i44S0?t=859

Des fois, juste l'indexation suffit à de pas continuer de lire un livre.

## Indexation

L'[indexation](/glossaire/lecture-indexation) pour se donner une première carte mentale du livre.

- Lire l'index
- Lire un peu des pages à chaque chapitre, on saute beaucoup
- On s'apprivoise

C'est la technique d'Adler

Un autre technique : couper le livre en morceau et chaque personne indexe (ex. [arpentage](/glossaire/arpentage))

---

Selon Romeu Moura

Avec du code :

- Regarder les graphes de dépendances de l'IDE

Fil d'Ariane : technique de Romeu

- Prendre une feuille de papier
- Partir de quelquepart (ex. là ou il y a un bug)
- Se ballader : tout ce qui appelle et qui est appelé par ça
- Noter par où je suis passé
- Ca crée une note visuelle partout où il passe

## Skimming

Le [skimming](/glossaire/lecture-skimming) permet de se faire une idée plus précise du contenu du livre.

La version de Adler.

Difficile à faire : ne pas retourner en arrière.

Tu lis un livre, il y a un morceau que tu n'as pas compris.
Pas grave!
Tu continues.
Sans hésitation : l'hésitation coute trop cher.
Tu lis le plus vite possible jusqu'à la fin.
Pour avoir une compréhension  très très large, très légère.

N'essaye pas de raisonner, de faire du sens.

> Dans la lecture du code ou des livres, l'hésitation coûte cher.
> 
> — Romeu Moura - https://youtu.be/KSAn98i44S0?t=1130

Eviter de faire trop de choses en même temps.

Sa manière favorite du moment pour faire du skimming dans des livres : 
faire un [arpentage](/glossaire/arpentage).

Un livre qui lui aurait pris plusieurs jours à lire, dans une session de 2h il est lu pour lui et pour le groupe.

Et à la fin, il sait s'il veut faire une analyse ou pas.
L'indexation est faite, le skimming est fait.

---

Dans le code, une technique de Romeu :

Écrire pour lire.
Pas pour faire une documentation.
Tu le jette à la fin.
Je note juste mon exploration du code.
Pour se faire un schéma mental.

## Analyse

La [lecture d'analyse](/glossaire/lecture-analyse), c'est la lecture que vous appeler aujourd'hui "lecture".
C'est cette lecture là.

Je lis le livre et j'essaie d'avoir **une compréhension** de quoi il parle.

Si je suis en train de lire un truc que je n'ai pas compris, je dois revenir en arrière et relire.

---

Comment vous analysez le code aujourd'hui.
Vous le lisez. Vous vous arrêtez, vous relisez.

Romeu a tendance à dessiner beaucoup pendant qu'il lit.


## Lecture sémiologique

La [lecture sémiologique](/glossaire/lecture-semiologique), Adler défend qu'il y a très peu de livres qui méritent une lecture sémiologique.

C'est un livre que vous allez lire plusieurs fois.
Faire des comparaisons avec plusieurs autres ouvrages.
Pour en obtenir un sens beaucoup plus précis.

Ex. un théoricien de La Bible va lire La Bible dans une lecture sémiologique.

---

L'équivalent dans le code est très récurrent.

On le fait très souvent !

Dans votre codebase un morceau de code qui est appelé par beaucoup de morceaux de code.

Le livre d'Adler a aidé Romeu beaucoup plus pour la lecture de code que pour la lecture de livre étrangement.

On fait ça massivement dans la lecture de code.

Ex. dans le JDK, il relit assez souvent l'implémentation de certaines collections et la compare à d'autre morceaux de code.

Ce code là c'est important de le pointer, de le montrer à d'autres.

Une pierre angulaire qui a besoin d'être relue, relue, relue et relue.

> Une fois, j'ai écrit ce genre de code dans une codebase. Je n'en suis pas fier, c'est même une honte dans ma vie. 
> 68 lignes de code en java 8.
> Ces 68 lignes, j'ai du les expliquer une dizaine de fois.
> Elles étaient utilisées partout dans tous nos tests.
> Il faisait que les tests était très beaux, très fluent.
> Mais le code, lui,  était imbitable.
> Les gens revenaient, revenaient. Comment tu fais ça?
> 
> Paraphrasé — Romeu Moura - https://youtu.be/KSAn98i44S0?&t=1618

C'est le genre de chose qui mérite d'être vraiment très documenté.

## Éléphant dans la pièce

On parle de techniques pour lire mais…

T'es gentil Romeu, mais j'ai pas le temps de lire.

## Lire du code sous l'influence de ses émotions

Est ce que ça vous est déjà arrivé de lire du code et d'avoir des émotions avec?

Peut être quelque chose de très positif !
Des fois c'est de la surprise.
Des fois c'est plus colérique, triste, désespéré.

Parlons de ça.

Est-ce que vous connaissez le [rasoir de Hanlon](/glossaire/rasoir-de-hanlon) ?

> « Ne jamais attribuer à la malveillance ce que la bêtise suffit à expliquer. »
> 
> — Robert J. Hanlon - https://fr.wikipedia.org/wiki/Rasoir_de_Hanlon

---

- Ne pas attribuer à la malveillance ce que la bêtise peut expliquer ;
- Ne pas attribuer à la stupidité ce qui est expliqué par le manque d'attention ;
- Ne pas attribuer au manque d'attention ce qui peut être expliqué par un contexte non dit ;
- Ne pas attribuer à un contexte non dit ce que le système autour de la personne peut expliquer ;
### Ne pas attribuer à la malveillance ce que la bêtise peut expliquer


La plupart du temps, quand on lit du code, on applique déjà un peu le rasoir de Hanlon.

Mais peut-être des fois on se dit "c'est du sabotage."

Déjà je fais une première invitation à se dire que peut être la personne est stupide (avant de se dire que c'est du sabotage).

Quand je parle d'émotion, je parle d'accueillir.

Des fois on est pris par les émotions.

Je n'essaie pas de dire qu'avoir des émotions c'est mauvais.

---

Parenthèse pour accueilir ses émotions

Conseil de lecture

- Les mots sont des fenêtres (ou bien ce sont des murs) - Marshall B. Rosenberg

Sur la communication NonViolente


### Ne pas attribuer à la stupidité ce qui est expliqué par le manque d'attention.

> Vous avez un singe dans votre tête qui essaie de vous convaincre que vous avez une capacité d'attention infinie.
> Vous ne l'avez pas. 
> Vous en voulez aux gens de ne pas avoir d'attention. 
> Mais vous n'en avez pas non-plus.

Il se peut qu'une personne en face de vous n'a pas été stupide mais a juste manqué d'attention

### Ne pas attribuer au manque d'attention ce qui peut être expliqué par un contexte non dit

Vous êtes souvent cette personne quand vous lisez du code qui dit "ce code c'est de la merde".
Quelques minutes plus tard, vous vous dites "ah non, je vois. ah oui". Quand vous avez tout le contexte.

Pareillement il va y avoir du code que vous avez écrit qui va être lu par d'autres personnes. Et elle dira "c'est de la merde", alors que si elle avait l'entièreté du contexte elle aurai pris l'exacte même décision.

> Les décisions techniques se basent sur un contexte.



On est habitué à lire des exemples de code très simple sur des domaines simplifié. En réalité on travaille sur des contexte bien plus vastes que ça.
### Ne pas attribuer à un contexte non dit ce que le système autour de la personne peut expliquer

Est-ce que vous avez déjà écrit du code vite fait mal fait parce que vous étiez complètement stressé par un autre truc. Et c'est du code de merde dont vous n'êtes pas fier.

On va revenir à "je n'ai pas le temps de lire Romeu".

![If you remake awful software from scratch without changing the culture that created it: you'll remake awful software](/public/img/romeu-moura-if-you-remake-awful-software-from-scratch.png)

> On est dans un système qui nous pousse à avoir un productivisme assez exacerbé.
> À essayer d'être tout le temps dépassé, tout le temps en retard. Tout le temps épris.
> Avec une pression gigantesque dans tous les sens.
> Et ce système vous pousse à écrire du code qui est regrettable.
>
> Paraphrasé — Romeu Moura - https://youtu.be/KSAn98i44S0?t=2321


J'ai un [kata](/glossaire/kata-de-programmation) qui n'est que pour ça. Il s'appelle le [Kata Kebab](/kata-logue/kata-kebab).
Tout ce que je fais c'est recréer ça en quelques heures; Je fais en sorte que la salle entière écrive du code pourri à partir de rien.
Des développeurs très confirmés écrivent du code pourri. Car l'individu ne dépasse pas la force de ce système.

Du coup on a des modes de production qui génèrent du code qui est pourri.
Et individualiser ça sur la personne passée, vos collègues ou vous-même ne va pas vous aider en soi.
Et du coup, j'applique souvent cette petite liste de rasoir que je me crée pour accueillir.







