---
title: Premier meetup Software Crafters Strasbourg
tags:
  - Discipline
  - Feedback
  - Dette-technique
  - Software-craft
  - Test-logiciel
  - Complexité
date: 2019-03-31
description: Prise de notes lors du premier meetup Software Crafters Strasbourg
date_updated: 2026-03-22T17:19
---

Software crafters = Tous les professionnels du logiciel

(même les managers, chefs de trucs...)

> comprendre leurs problématiques et pourquoi ils nous cassent les pieds.

N'hesitez pas à amenez vos managers

Sans clivage techno

# Evénements

* conférences
* tables rondes : on se réunit sans savoir de quoi on va parler. Au début on fait des petits groupes. pour parler de sujets improvisés à la volée.
* coding dojos : petits groupes pour coder ensemble pour approfondir des concepts. ex. TDD avec des katas...
* d'autres idées? lancer une discussion sur le meetup. mail ou twitter

# Coding dojos

Jean-Baptiste

Régulièrement, l'organiser ensemble. se fixer un moment (ex. 12h-14h?)

SCOP "UT7?"

# Agenda

BDD & Tests 23 avril : Joffrey @ ASOS

Suivre sur twitter : @swcraftstras

# Don't panic! The Hitchhiker's guide to software

Sans slide (avec tableau)

La façon de voir les choses de comment créer du logiciel par Nicolas Verinaud.

Nicolas nous présente une vision (idéale) vers laquelle il tend.

## Créer un logiciel

> Créer le bon logiciel et le faire correctement!

### Un bon logiciel
* il répond à un besoin
* il résoud des problèmes
* user friendly
* il peut rapporter de l'argent

Un logiciel n'est utile que s'il a des utilisateurs.

#### Comprendre le besoin et les problèmes. 

> c'est la conaissance du développeur qui devient le développeur

Plus le dev s'approprie le problème et mieux le logiciel peut répondre au problème.

En tant que dev, on a une place importante à prendre. Sinon on peut perdre le contexte.

#### Quelle équipe?

**Tout le monde**.

* utilisateurs
* clients
* manager
* dev
* designer

Les solutions peuvent venir de toute l'équipe

L'intelligence collective fera qu'un meilleur produit sorte.

Le PO devrait venir avec **des problèmes**, pas des solutions.

Risque de tomber sur de la spéculation (si le PO s'ennuie).

Conseil de lecture : Lean Startup (Eric Ries)

En tant que dev, il faut avoir aussi l'aspect business en tête et la vision produit et utilisateur.

#### Livrer

Le seul moyen de vérifier si on a tapé à côté. 

Essayer de livrer le plus rapidement possible.

* Développer le moins de choses possible
* ne pas passer à vie à corriger des bugs

Puis récolter le feedback, est ce que les utilisateurs ont toujours le pb? De nouveaux pbs?

#### Quelques outils

Capturer le besoin : 

* les 5 why

Chercher la solution qui a le plus d'impact
* impact mapping : explorer des solutions, trouver la meilleure : faire un logiciel, domaine + wordpress, campagne virale youtube? page facebook? ...


Discuter directement : PLus tu parles avec tout le monde, plus tu trouvera les personnes à qui s'adresser. Pour identifier les pbs

* User story mapping
  * users stories
  * solutions techniques
  * choisir pour avoir le moins de choses à faire pour répondre au besoin de base -> livrer le plus vite possible pour avoir le feedback

Le plus simple, plus rapide, plus efficace.

L'agilité aurait plus s'appeler la méthode conversationnelle.


### Le logiciel Correctement

* il est maintenable
* performant

Pourquoi travailler correctement.

Pour gagner du temps on peut faire de la qualité.

Va à contresens de la pyramide Qualite/Cout/Délai

* Qualité interne
* Qualité perçue

> la qualité est gratuite
* Le temps de faire de la qualité interne
* On fait moins de bugs

Si on rogne la qualité on avance vite au début et on arrive tres vite à perdre en productivité

Ne pas rogner sur la qualité interne, rogner sur la qualité perçue = limiter le scope

Exception : la dette technique => doit être intentionnelle mais pas accidentelle

> Tu me demande d'aller plus vite. Ecrire mes tests. Je vais limiter mon refactoring, pas créer les bonnes abstractions. Je vais faker la fonctionalité que tu demandes ... On ne va pas implémenter le truc. mais ca va permettre de présenter le truc dans le salon.

Limiter la complexité accidentelle

* Complexité essentielle (inhérente au problème). on ne peut rien faire pour la limiter
* Complexité accidentele. Raccourcis, pas de test,trop de duplications. On veut l'éviter à tout prix
* Complexité nécessaire. Gros volume d'utilisateurs. Architecture distribuée pour pouvoir le supporter.Ex. microservices On rajoute du réseau entre les logiciels...

Pour gérer la complexité accidentelle il faut prendre soin du code. Il ne faut pas avoir peur de le modifier.
* Avoir une suite de test automatisée peut aider à ce but
* On doit avoir confiance en cette suite de tests
* des tests qui testent réellement ce qu'il faut. Il faut voir au moins le test échouer une fois. On sait qu'il est utile


> question comment avoir confiance en des test legacy
* mutation tests

### On s'adapte et on s'améliore en tant qu'équipe

Se poser la question : est ce qu'on travaille correctement. On se réunit et on se demande si on peut faire mieux en tant qu'équipe.

# Conclusion

1. Identifier le besoin
2. Coder la solution et livrer le plus rapidement possible
3. récolter le feedback
4. recommencer


