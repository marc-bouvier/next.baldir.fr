---
title: Créer un dépôt GitHub dans le dossier courant
date: 2024-10-11T22:10:32+02:00
tags:
  - How-to
  - Github
  - Ligne-de-commande
description: Une petite commande qui permet de publier un dépôt git existant sur GitHub en s'appuyant sur la ligne de commande `gh`
---

Installer et configurer [la commande `gh`](https://cli.github.com/).

```sh
gh repo create ${PWD##*/} --private --source=. --remote=upstream
```

Ajouter à `.zshrc` sous la forme d'un alias

```sh
#GitHub
alias ghi="gh repo create ${PWD##*/} --private --source=. --remote=upstream"
```

Dans un dépôt existant (il faut avoir créé un dépôt : `git init`)

```sh
ghi
```
