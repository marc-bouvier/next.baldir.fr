Stratégie de test



Scope

Taxe hors extraction

Cout
- a les écrire
- A les maintenir

Delai de feedback
- court
- Long

Couplage avec les détails d’implémentation m
- fort : fragile en cas de refacto
- Faible :

https://m.youtube.com/watch?v=Bv6t5B2q3Dk&pp=ygUfU3RyYXRlZ2llIGRlIHRlc3QgY29tYmluYXRvaXJlcw%3D%3D



Propriétes souhaitable de stratégie de test

￼

￼

Propriétés désirables de tests

- obtenir du feed-back rapidement
- Prédit le succès du déploiement
- Au service / facilite des modifications du code et de la conception



Tests écrits avec intention servent de documentation. Ils expliquent le pourquoi.
Clarifient ce qu’on a compris et actent cette compréhension avec le code. Ils permettent de comprendre la perspective du client, de l’utilisateur.

Pour éviter les « on avait dit que » ou « non, on n’avait jamais dit que ».
Ils servent de preuve de notre compréhension mutuelle entre devs et métiers.


A quoi peut ressembler une stratégie de test ?

￼

https://philippe.bourgau.net/a-complete-workshop-for-your-team-to-see-what-s-a-good-test-strategy/


Evidemment commençons simple.



Maintenant qu’on a dit ça…

Dans la stratégie de test existante. Quoi améliorer en priorité ?

Les problèmes que m’a remonté Sébastien

—-

Quand on change un truc quelque part, ca peut casser quelque chose ailleurs.

Ex : impact des données sources génériques.

—-


- Qu'est-ce qui change tout le temps ? Pourquoi ?

---


Chaque test devrait représenter un comportement, pas orienté data

—

Tests déterministes





Prochaine étape

Ecrire un exemple de ce qu'on voudrait avoir sur un projet vide.

Le porter sur le projet courant.

Quelles sont les difficultés ?





Frigo

https://yoan-thirion.gitbook.io/knowledge-base/software-craftsmanship/technical-debt-workshop
Dette technique :
* Accumulate bugs
* Add a new functionality will cost a lot of money : reduced velocity


Mesurer
- Nombre de bugs à corriger
- Nombre d'améliorations techniques à effectuer identifées par l'équipe

Etudier les problèmes

Questions
- Ou sont les défauts ?
- Ou sont les endroits "difficiles" ? Qu'est ce qui les rend difficiles ?
- Ou sont les endroits "faciles" ? Qu'est ce qui les rend faciles ?
- Qu'est-ce qui change tout le temps ? Pourquoi ?


Tests que je propose


snapshot taxe ds saisies

Facilité d’écriture :
- classe de test abstraite avec utilitaires de test clé en mains
- Ajouter des méthodes de test avec les intentions et contexte lisible par des métiers et le numéro de dossier de l’acte

Delai de feedback
- 

- classe de test : famille d’actes
    - Ex. Pacs
- Test : correspond à un scénario
    - Ex.
- Basés sur de vrais actes
- Lancés rapidement
- Sont accompagnés d’attendus metier

Fichiers asciidoctor

Mise à jour : outil de diff

Peut-être montré aux comptable 
