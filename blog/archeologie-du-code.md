---
title: Archéologie du code
date: 2024-09-26T17:21:38+02:00
tags:
  - Code-patrimonial
description: Quelle est la différence entre un développeur est un archéologue ?
draft: true
---
L'archéologue cherche, découvre et étudie des artéfacts anciens.
Cela lui permet d'étudier l'être humain par les vestiges qu'il a laissés.
Les humains qui ont produit cet artéfact ne sont plus là pour en parler.
C'est une étude **indirecte** du **contexte** et **des humains** d'une époque **révolue**.

Dans le logiciel, nous avons aussi une forme d'archéologie. 
Parfois, les humains qui ont construit un artéfact logiciel ne sont plus là pour en parler, mais parfois ils sont encore là !
Il est possible de parler avec ces personnes qui ont vécu le contexte et participé aux choix concernant l'artefact.

C'est pour moi un point crucial différenciant les deux disciplines.

On peut pratiquer **une approche indirecte classique** : chercher les informations dans le code, la documentation, le [logiciel de gestion de version](/glossaire/logiciel-de-gestion-de-version), des traces d'historiques. On peut même décompiler des programmes pour regarder dans leurs entrailles.

On peut aussi pratiquer en plus une approche plus directe : parler aux gens.
Il est souvent encore temps d'aller chercher les informations et le contexte permettant de comprendre, de maintenir et de fair évoluer du code patrimonial.

Cela ressemble un peu plus à de l'investigation. Je range ça aussi dans ma définition de l'archéologie.

Mais pourquoi faire tout ça ?
C'est beaucoup d'effort ! 
Est-ce que ça en vaut vraiment la peine ?
Comme souvent dans notre métier, "Ça dépend".

Quand on parle de [code patrimonial](/glossaire/code-patrimonial) (Code Legacy), il est souvent admis que c'est du code qui a de la valeur.

Ma définition qui vaut ce qu'elle vaut : 

> Du code patrimonial est du code dont l'absence est très problématique pour une organisation.

Ce code est souvent ancien et difficile à comprendre car le contexte, qui l'a vu naître et évolué a changé. Sans efforts délibérés pour maintenir une conscience et une évolution de [l'état de l'art](/glossaire/etat-de-l-art), celui-ci est progressivement oublié.

Dans certains cas, il reste certaines de ces informations sont encore dans la tête de collègues, et aussi bien entendu dans du code et des procédures.

L'archéologie dans le développement logiciel c’est un truc qui me passionne et dont je découvre de plus en plus de facettes.

Depuis la démocratisation de [logiciels de gestion de version](glossaire/logiciel-de-gestion-de-version) comme Git, on a une mine d’or d’informations et de contexte à portée de main.

On peut parfois y retrouver des raisons pour lesquelles on a fait certains choix.
Pour autant, une bonne partie de l'intention ne se trouve pas dans ces outils.

Le temps passé à faire un choix, à considérer les options, à évaluer les alternatives, le contexte extérieur (ex. pression du marketing, technologie existante au moment du choix, etc) sont rarement capturés dans ces artefacts.

Faites le test vous même. 
Quand vous écrivez du code, vous faites des choix, des compromis. 
Vous rejetez ou acceptez en permanence des options. 
Au final il ne reste qu'un instantané, 
une synthèse de toute cette démarche intellectuelle. 
C'est d'ailleurs pour cette raison 
qu'il est malhonnête de considérer la productivité de développeur-euse 
en terme de nombre de lignes de codes produites.

Pourtant, ce que j’aime le plus par-dessus tout c’est de masse c’est de faire en sorte qu’il n’y ai pas besoin d’archéologues.

Je m’explique en prenant soin de Detre conscient de son état de lard à savoir notre compréhension du contexte et de du système de communication entre les développeurs de l’équipe technique le produit et le management on peut s’assurer d’être à tout moment à peu près au courant des problèmes et des enjeux.
Et ça ça change tout il y a des techniques qui peuvent paraître très simple mais qui sont néanmoins efficace. Je pense par exemple aux osa des R à DR qui consiste à documenter quand on fait des choix par exemples d’architecture à DR architecture des six gemmes les codes. Ça consiste à documenter quand on prend des décisions qui sont significatif et en introduisant des éléments de contexte. Par exemple je décide d’utiliser une base de données relationnelles poserai. Donc ça c’est la décision. Mais ce ne Maraite pas là. Comme j’ai dit précédemment dans un article précédent. J’aime bien rajouter un peu plus quand j’écris et quand je partage quelque chose.
Ici ce qui nous intéresse c’est pas seulement la décision qui a été prise puisqu’on la constate. C’est les éléments de contexte. Par exemple :
–je choisis en comparant d’autres base de données.
–Je prends en compte les problèmes du moment à savoir qu’il n’y a pas de base de données par exemple.
–Ou encore un je n’effectue que des opérations de lecture et d’écriture et je n’ai que 1000 utilisateurs.
–Dans ce cas là je ne vais pas choisir des bases de données fortement Distribués avant que le besoin de s’en fasse ressentir.
Voilà je vais considérer les différentes options ce qui a peser dans comme choix dans la balance en terme de contexte par exemple.
Et voilà et donc qu’est-ce qu’on fait quand on fait ça simplifie le travail de beaucoup de gens dans le futur.
Et là je fais référence encore une fois un concept de moi du futur. C’est-à-dire plutôt que d’essayer de penser à faire du code pour quelqu’un que je ne connais pas. Je vais plutôt essayer d’imaginer une expérience que j’ai eu dans le passé qui fait que j’écris du code et quand je reviens dessus moi-même je ne le comprends pas. Et donc j’essaye d’appliquerCette règle très simple de m’assurer que dans six mois quand je reviens sur cette base de code par exemple je comprends assez vite ce qui se passe et j’ai pas besoin de passer en mode archéologue.
Des fois on a pas trop le choix et ça m’arrive de faire des séances assez soutenu d’archéologie qui va constituer en plusieurs choses :
–interroger les personnes qui sont encore là t’es un point de vue externe et leur poser des questions bêtes les pistes les questions qu’une personne se pose mais moi je vais les poser ;
–de regarder le code et en particulier le verso Ning pour faire des corrélation entre le;
–Le code qui ne change pas beaucoup ;
–le code qui est changé par une seule personne et peut-être même qu’elle est plus là ;
Le code qui change beaucoup et qui échanger par plusieurs personnes ;
–
Avec ces informations là on peut avoir pas mal de the des the du risque que le logiciel peut faire porter si je ne sais pas par exemple quelqu’un s’en va ou quelqu’un tombe malade. On parle ici de base facteurs de trois facteurs.
Pour en revenir à l’archéologie les artefacts qu’on retrouve sont parfois en piteux état et ce que j’appellerai piteux état dans notre cas de code de logiciel c’est pas forcément que le code ne fonctionne pas. La ligne c’est plutôt que le code fonctionne mais on ne sait pas forcément toujours pourquoi. Et on a peur de le changer car c’est du code qui est utile est important qui rapporte de l’argent et qui a même peut-être parfois contribué au succès de l’entreprise.
Et pour moi ce sont des trésors d’archéologie ces artefacts là qui sont en même temps et lasse beaucoup trop détesté par les développeurs il est développeuses qui peuvent passer par l’arrêt et rager par exempleContre une personne qui n’est plus là en se disant mais pourquoi il a fait ça il aurait pu faire comme ça différemment et bien.
Ça on sait pas en fait moi je pense que dans la majorité des cas les gens font avec les moyens qu’ils ont du mieux qu’ils peuvent dans le contexte tu me mens et parfois le contexte il explique des choix qui peuvent paraître par la suite à compliquer mauvais.
J’essaie d’en pâtir moi c’est important d’essayer d’avoir de la compassion pour les personnes je suis sur le lesquels sur le travail du Kanny on s’appuie. Je pense et je suis optimiste, Je pense qu’il y a de la bonne volonté malgré les contraintes malgré les pressions de l’intérieur ou de l’extérieur. Et en favorisant un état de lard vertueux et transparent à l’intérieur de l’organisation j’entends.
Je pense qu’on peut limiter ce besoin d’archéologie et construire ensemble des les artefacts qui dure qui sont utiles et qui portent du sens de la valeur.

Si vous n’êtes pas encore dans cette situation où l’État de lard entre l’équipe de développement le produit et le management est harmonieux. Et que vous avez encore des sujets d’archéologie pas de panique je serai là pour vous accompagner. Dans un premier temps nous pouvons discuter ensemble regarder. Et voir si c’est la valeur de ce trésor qui est le code Legacy code patrimonial. 
