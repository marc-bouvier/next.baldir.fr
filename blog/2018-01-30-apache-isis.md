---
title: "Apache Isis - Domain driven applications"
date: 2018-01-30
tags: ["Domain-Driven-Design", "Framework"]
description: "Apache Isis propose une approche pour construire des applications centrées sur les objets du métier."
---

[Apache Isis ](https://isis.apache.org/index.html) propose une approche pour construire des applications centrées sur les objets du métier.

Je suis un peu sceptique à ce propos car les experts de [Domain-Driven-Design](https://fr.wikipedia.org/wiki/Conception_pilot%C3%A9e_par_le_domaine) (DDD) comme Cyrille Martraire nous avertissent souvent qu’on ne devrait pas créer ou utiliser de "framework DDD".

Selon-moi, les objets métier ne devraient pas être couplés avec le code d'infrastructure (au sens de donné par [l’architecture Hexagonale](https://fr.wikipedia.org/wiki/Architecture_hexagonale)).

Isis est supposé s'occuper de la partie d'interface graphique (GUI) et de nous permettre de nous concentrer sur la logique métier. 
Cela peut sembler approprié pour prototyper rapidement.
Mais, est-ce viable en production ?
J'utiliserai peut-être Isis sur un projet personnel pour voir si ça peut être utile.

Aussi, cela pourrait être un point de départ interessant pour des atelier pour former à [Behaviour Driven Development](https://fr.wikipedia.org/wiki/Programmation_pilot%C3%A9e_par_le_comportement) (BDD) et Domain-Driven-Design (DDD).
