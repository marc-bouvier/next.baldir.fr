---
layout: post
title: "Devoxx - Why are we still writing javascript? (French)"
description: Devoxx 2018. Mais alors pourquoi encore coder en JavaScript ? (W. Goedel)
tags:
- Language
- French
- Abstraction
- Javascript
- Elm
- Closure
- TypeScript
- ReasonMl
- PureScript
date: 2018-04-19
---
[Devoxx 2018. Mais alors pourquoi encore coder en JavaScript ? (W. Goedel)](https://www.youtube.com/watch?v=Sjaur6Tvk2s)

- [...but why are we then still writing JavaScript? / ...mais alors pourquoi encore coder en
JavaScript ?](https://cfp.devoxx.fr/2018/talk/ODZ-6183/...but_why_are_we_then_still_writing_JavaScript%3F_%2F_...mais_alors_pourquoi_encore_coder_en_JavaScript_%3F)
par [Wolfgang Goedel (SFEIR)](https://cfp.devoxx.fr/2018/speaker/wolfgang_goedel)

Javascript n'est pas moche, elégant, mais peut etre dangereux, flexibles.

## Higher order langages
Langages qui promettent de faire mieux que JS.

## Javacript
Inventé en 1995, syntaxe imposée, inspirée de java.
C'est un peu du Lisp habillé en java.
Très puissant, omniprésent. A remplacé Java en FAC à Stanford. Langage fonctionnel et orienté objet.
Javascript change.
Etait verbeux et impératif est devenu déclaratif depuis peu.
En général c'est dans le browser. C'est devenu un **compilation target**. C'est du bytecode aussi.

## Promesses des langages alternatifs

Il y a des gens qui font des promesses. Il y a 60 ans quand LIPS a été inventé :
* dire aux ordinateurs ce qu'ils doivent faire et en leurs termes.
c'est devenu un peu obsolete
AUjourd'hui
* dire à un dev ce qu'un autre dev à voulu faure faire a l'ordi

LE futur
* dire aux humaions ce que les ordinateurs doivent faire en termes d'humains

Aujour'dhui résoudre des problemes pb avec abstraction et decomposition.
Exprimere une intention par de l'abstraction et de la décomposition. On veut surtout que le collegue
le comprenne. IL ne faut pas oublier ce role , q'un autre etre humain soit capable de lire ce qu'on a écrit.

Donc on utilise des langages de niveau supérieur.

Promesses des higer order langagues:
 * plus de moyens pour catpurer des patterns
 * plus de moyens de composer
 * plus de moyens d'abstraction

Quelques exemples
 * tail recursion
 * pattern matching (types)

L'abstration peut aller trop loin car l'abstraction n'est pas gratuite. on le payes parfois sur la syntaxe.

Une bonne abstraction peut donner plus d'espace pour exprimer une intention tout en la simplifiant.

TODO : reprendre le lien vers l'article de Paul Graham. En le résumant un peu, dans l'informatique, il y a 3 risques.
* **Risque opérationnel** : (Ops), jadis l'intégration et l'infrastructure était un risque majeur. Maintenant c'est
moins le cas avec le cloud, la conteneurisation ...
* **Risque d'isolation** : interopérabilité avec d'autres scripts et libs. Maintenant certains langages interop bien
avec d'autres, Kotlin, Scala, FSharp ...
* **Risque de resourcing** : est-ce que l'on va réussir à trouver des gens capable de comprendre et de maintenir nos
applications? Ce risque est toujours très présent. C'est par exemple pour ca que certaines technos sont très populaires :
Java, Spring, javascript. Car elles sont assez connues et accessibles.

Tous les langages ne sont pas égaux. En utilisant des langages plus haut niveau
* on peut avoir moins de code
* on peut avoir moins de bugs
* on peut avoir besoin de moins de programmeurs pour faire la même chose
* on peut livrer des fonctionnalité plus vite

Cela peut être un avantage compétitif. Stratégiquement c'est important, surtout si on se situe sur un marché très
concurentiel. Cela peut permettre de réaliser une nouvelle fonctionalité ou copier une fonctionalité d'un concurrent
plus vite pour ratrapper l'avantage sur la concurrence et un ROI intéressant.

## Abstraction
Cacher le détail.

Mais attention, l'abstrction a un cout.
TODO : référence à la videzo de la conf réact.
* **un cout mental** : pour comprendre ce que l'abstraction fait
* **une abstraction trop puissante ne sert a rien** : (ex. tout code avec des Object). Il faut être capable de gérer
la compléxité sand faire des God Objects qui font trop de choses

Les langages fonctionnels sont plein d'abstractions très puissantes. Le modèle mental pour les utiliser cout énormément.
Ca prend du temps pour apprendre ce genre de langages quand on vient de l'informatique car beaucoup de notions viennent
des maths. Ils sont moin connus de la communauté en général. Cela dit, on peut très bien utililiser ce vocabulaire sur
des _cas concrets_ sans en connaitre toute la théorie. Ex. list.map, reduce

Les programmes fonctionnels sont durs a comprendre car il y a plein de mots qu'on a pas l'habitude d'utiliser.

Pour qu'une abstraction fonctionne, il faut qu'elle utilise une sémantique _simple_. (ex. TODO). Il faut qu'elle soit
comprise. Elle doit être stable , générale et marcher partout. (ex. map/reduce est un concept qui fonctionne de la même
façon dans plein de langages, quelqu'un qui vient de js comprendra les map/reduce de kotlin ou java 8). Cela permet de
pouvoir comprendre de nouveaux sujjets et livres.

Une mauvaise abstraction peut être
* une abstraction mal nommée : par ex un factorisation mal nommé demandera d'aller voir dans le fichier de son
implémnetation pour la comprendre. parfois il vaut mieux dupliquer que factoriser quand on arrive par à bien nommer
cette factorisation qui est en fait une indirection.
* une super abstraction : qui fait trop de choses , trop dur a comprendre

Une bonne abstraction
 * une abstraction qui réussit a entrer dans le vocabulaire courant. Que beaucoup comprennent.

 ## Résumé
 Les langages, c'est la structure, _le vocabulaire_ (qui peut etre le meme que dans d'autres langages)

 Son role est de communiquer entre nous nos intentions, le pourquoi.Il permet de régler plus facilement des problèmes
de plus en plus complexes.

 Tout ca, c'est de _la culture_. La programmation fonctionnelle, elle est la et va etre utilisee de plus en plus.
On a interet d'apprendre ce vocabulaire pour communiquer avec nos pairs.
