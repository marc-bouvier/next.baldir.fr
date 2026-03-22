---
layout: post
title: "Devoxx - Tout ce que vous avez toujours voulu savoir sur la programmation fonctionnelle (french)"
description : Devoxx France 2018. Tout ce que vous avez toujours voulu savoir sur la programmation fonctionnelle (X. Detant)
tags: 
- Devoxx
- French
- Functional-Programming
- Closure
- Lambda
date: 2018-04-19
---
Devoxx France 2018. Tout ce que vous avez toujours voulu savoir sur la programmation fonctionnelle (X. Detant)

[Tout ce que vous avez toujours voulus savoir sur la programmation fonctionnelle (X. Detant)](https://www.youtube.com/watch?v=YZwilQqzdYA)

Les effets de bord c'est mal. On essaye des les repérer et réparer le code pour éviter au maximum les effets de bord. Les effets de bord ont du bon, mais a la périphérie du programme.

## Détecter les effets de bord.

Astuce : regarder les noms des méthodes et les types. Une fonction qui prends des paramètres et ne retourne rien. Si elle est utile c'est qu'elle a des effets de bord.
La signature c'est pas magique, il faut regarder le code et connaitre un peu les frameworks qu'on utilise pour savoir s'ils ont des effets de bord ou pas.

**Functions as 1st class citizen**
Considérer les valeurs et les fonctions de la meme facon. On peut du coup passer des fonctions en parametres. (ex. predicat)

Ne pas offrir la possibilité à l'appelant de choisir la valeur de retour (parametre ouvert : out parameter). La valeur de retour doit etre un parametre fermé (caché). **Closure**.

Retourner une fonction à l'appelant. Il pourra, li faire un effet de bord.

** Higher order functions** : fonctions qui prennet et retournent des functions en parametres.

L'effet de bord est déplacé, pas supprimé. C'est plus dur a comprendre.

**Lambda function** Une fonction qui n'a pas de nom.. A la base du lambda calculus.

Il est important d'être explicite. 

Purification : transformer une fonction qui prend 2 parametres en fonctions qui prennent 1 parametre.

**Application partielle** donner une partie des parametres a la fonction. Celle ci retourne une fonction qui attend le parametre suivant.

Avec la syntaxe de lambda et l'application partielle on peut avoir quelque chose qui ressemble à ce qu'on avait avant en "plissant les yeux".
