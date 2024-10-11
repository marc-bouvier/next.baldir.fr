---
title: "Configuration de NodeJs avec Nvm"
date: 2024-08-30T21:15:13+02:00
description: "Nvm permet de gérer plusieurs versions de nodeJs en même temps et de pouvoir passer de l'une à l'autre au besoin."
tags:
  - NodeJs
  - Nvm
  - 11ty
---

Utiliser la bonne version de nodeJs avec Nvm

# Fichier .nvmrc

J'ai ajouté un fichier `.nvmrc` pour indiquer quelle version de node utiliser à l'aide de l'outil [nvm](https://github.com/nvm-sh/nvm).

`.nvmrc`

```
20
```

Pour changer la version de node avec nvm on peut utiliser la commande :

```shell
nvm use
```
