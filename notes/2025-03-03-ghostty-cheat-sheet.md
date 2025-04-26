---
title: "Antisèche ghostty"
date: 2025-04-26T20:42:59+02:00
tags:
  - How-to
  - Ghostty
  - Ssh
  - Terminal
  - Cheat-sheet
permalink: cheat-sheets/ghostty/
---

## Envoyer les informations terminfo via SSH à une machine distante

Symptômes : 
- On ne peut pas utiliser des raccourcis comme `CTRL + L` pour vider l'écran
- Message au login : `tput: unknown terminal "xterm-ghostty"` 

Quand on utilise l'émulateur de terminal [ghostty](http://ghostty.org/).
Très souvent, quand on se connecte à une machine distante via `ssh` on obtient le message : 

```text
tput: unknown terminal "xterm-ghostty"
```

Ca signifie que la machine distante ne sait pas interpréter les informations qu'envoie ghossty.
Ces informations (`terminfo`) permettent à ghossty d'indiquer à la machine distante ce qu'il est capable de faire.

Il est possible de configurer la machine distante pour qu'elle dispose de ces informations : 

```sh
infocmp -x | ssh YOUR-SERVER -- tic -x -
# adapté à mon cas
infocmp -x | ssh monuserdistant@urldemonserve.ur -- tic -x -
infocmp -x | ssh mauricienne@10.0.0.17 -- tic -x -
```

La commande `tic` peut donner l'avertissement suivante qu'on peut ignorer : 
```text
"<stdin>", line 2, col 31, terminal 'xterm-ghostty': older tic versions may treat the description field as an alias
```

L'information est enregistré dans la machine distante à l'emplacement suivant : 
`/usr/share/terminfo`

