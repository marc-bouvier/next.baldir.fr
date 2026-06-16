---
title: Automatiser la construction d’index pour apprendre
description: "Autmatisation de la saisie et affichage des index pour apprendre dans Obsidian."
date: 2026-06-16T17:33:26+02:00
tags:
  - Obsidian
  - Productivité
  - Automation
  - QuickAdd
date_updated: 2026-06-16T17:33:30+02:00
permalink: blog/automatiser-la-construction-d-index-pour-apprendre/
---

Suite de l'article [Construire des index pour apprendre](/blog/construire-des-index-pour-apprendre/)

## Exemple de structure de notes dans Obsidian

```text
Public/Wiki/Indexes                          # dossier où sont stockées les notes d'index
Public/Wiki/Indexes/Assemblyscript.md        # exemple d'une note d'index
Public/Wiki/Indexes/...
Public/Wiki/Indexes.base                     # si on utilise les bases
Public/Wiki/Indexes.md                       # si on utilise dataview
Templates/Template_index.md                  # Le modèle pour créer les notes d'index
```

## Ecrire une note d'index

Exemple de fichier markdown de note d'index:

`Public/Wiki/Indexes/Assemblyscript.md`

````md
---
created: 2024-05-07T23:04
updated: 2026-06-16T17:56
description: "Wasm language based on typescript syntax"
lien: "https://www.assemblyscript.org/"
tags:
  - Wasm
  - WebAssembly
  - TypeScript
  - ProgrammingLanguage
---

Ici, on peut ajouter des informations au corps de la fiche

````

On verra par la suite comment automatiser sa création grâce à des templates

## Afficher les index saisis

On veut lister les notes d'index.

- Avec la fonctionnalité des bases (méthode recommandée)
- Avec dataview (ancienne méthode)

### Avec une base (plugin core)

Vue sous la forme d'un tableau

![](/public/img/automatiser-index-pour-apprendre-base-table.png)

Vue sous la forme de cartes
![](/public/img/automatiser-index-pour-apprendre-base-cards.png)

Vérifier que le plugin "Bases" est activé.

Voir [la documentation  sur les bases](https://obsidian.md/help/bases).



#### Option 1 : dans un fichier Base

1. Créer une nouvelle base
2. Sur la vue table
    1. Filtre :
        - `file`
        - `in folder`
        - `Public/Wiki/Indexes`
    2. Properties
        - `file name`
        - `lien` (à créer)
        - `description` (à créer)
        - `file tags`
    3. Sort by
        - `created time`
        - `New to Old`
3. Sur le même principe que la vue "Table", on peut créer des vues  "Card" ou  "List"

#### Option 2 : embarqué dans un fichier markdown

1. Créer une note
2. Ajouter 
   ````md
   ```base
	```
   ```` 
3. Configurer visuellement la base comme dans Option 1

Le snippet de la base doit se mettre à jour 

ex.

````md
```base
views:
  - type: table
    name: Table
    filters:
      and:
        - file.inFolder("Public/Wiki/Indexes")
    order:
      - file.name
      - lien
      - description
      - file.tags
    sort:
      - property: file.ctime
        direction: DESC
```
````

### Avec dataview (plugin community)

Vue sous la forme de tableau

![](/public/img/automatiser-index-pour-apprendre-dataview-table.png)


Vérifier que [le plugin "Dataview"](https://community.obsidian.md/plugins/dataview) est installé et activé.

Dans une note

````markdown
```dataview
table 
description as "Description",
lien as "Lien",
file.tags as "Tags"
from "Public/Wiki/Indexes"
SORT file.ctime DESC

```
````

![Liste des index depuis une requête dataview](/public/img/automatiser-index-pour-apprendre-dataview-01.png)

## Automatiser la création des index

### Créer un template

Créer un template, il servira comme modèle aux notes créées.

`Templates/Template_index.md`

````md
---
{{ "lien:: [link]({{VALUE:Lien}})" | escape }}
{{ "description:: {{VALUE:Description}}" | escape }}
---
# <% tp.file.title %>

{{ "{{VALUE:Tags}}" | escape }}

````

### Configuration des plugins

Plugins requis
- Core
    - [Templates](https://obsidian.md/help/plugins/templates)
- Community
    - [Templater](https://community.obsidian.md/plugins/templater-obsidian)
    - [Quickadd](https://obsidian.md/help/plugins/templates)

#### Templater

Dans la configuration du plugin Templater, s'assurer que le dossier de template correspond à `Templates` (ou à votre dossier de template).


#### Quickadd

1. Ouvrir les paramètres de Quickadd
2. Ajouter un "choix" : `Index` de type `Template`
   ![](/public/img/automatiser-index-pour-apprendre-quickadd-00.png)

3. Cocher le petit éclair ⚡️ . Cela permet d'ajouter l'action dans les commandes Obsidian (qu'on peut lancer avec Ctrl + P)
   ![](/public/img/automatiser-index-pour-apprendre-quickadd-01.png)
4. Ouvrir le menu de configuration ⚙️ 
	1. Template path : `Templates/Template_index`
	2. File Name Format : `Oui`
	3. {{ "File Name: Name : `{{VALUE:Name}}`" | escape }}
	4. Create in folder : `Oui`
		1. Folder Path : `Public/Wiki/Indexes` 
		2. Add
	5. Include subfolders : `Non`
	6. Create in the same folder as active file : `Non`
	7. Append link :  au choix
	8. Set default behaviour if file already exists : `Nothing` (si le fichier existe déjà on sort en erreur)
	9. Open : au choix
	10. New Split : au choix
	11. Focus new pane : au choix
	![](/public/img/automatiser-index-pour-apprendre-quickadd-02.png)
	![](/public/img/automatiser-index-pour-apprendre-quickadd-03.png)



## Créer un nouvelle fiche index

- Ouvrir le menu de commande (Ctrl + P, ou Command + P sur mac)
- saisir `index`
- valider

<video class="video-responsive" controls width="1532" height="1144" poster="/public/video/automatiser-index-pour-apprendre-command.mov-libx264_15fps.png" preload="none" ><source src="/public/video/automatiser-index-pour-apprendre-command.mov-libx264_15fps.mp4" type="video/mp4" /><p>Votre navigateur ne prend pas en charge les vidéos HTML5. Voici <a href="/public/video/automatiser-index-pour-apprendre-command.mov-libx264_15fps.mp4">un lien pour télécharger la vidéo</a>.</p></video>