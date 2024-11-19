---
title: "Devenir de baldir.fr"
description: "Reflexions et prochaines évolutions possibles"
layout: "default.html"
---

## Réflexions en cours

### Mettre en place une base de connaissances ?

Hypothèse : Je ne connais pas de point de départ en français permettant d'avoir une vision générale simple et interconnectée des concepts outils et pratiques du numérique.

Contraintes :
- en français ;
- en [FALC](/glossaire/falc)

Options (pas mutuellement exclusives)

- Traduire des articles de référence / pratiques en français ; (ex. [traduction du concept de dojo de programmation]())
- Transcrire des vidéos en français ; (ex. [transcription et synthèse de la présentation “Lire du code sous l’influence de ses émotion de Romeu Moura”)](/blog/lire-du-code-sous-l-influence-de-ses-emotions))
- Glossaire Français / Anglais du jargon technique : pour aider chacun à connaitre les mots pour faire des recherches par eux-même
- Contribuer à [Wikipédia](https://fr.wikipedia.org/) ? 


## Ressources et possibilités en vrac



- [x] Rendre l'affichage des actualités plus lisibles.
  - [x] limiter le nombre d'actus
  - [x] afficher les actus plus récentes en premier
 
- categories
    -   https://stackoverflow.com/questions/72183639/how-to-create-a-tags-collection-and-a-categories-collection-in-eleventy

---

- [ ] footer
  - [x] lien vers le code source du site
  - [ ] liens vers mes réseaux sociaux

---

- shortcodes pour les quotes de obsidian
Ex : 
> [!success] foo
> Bar
- Liste des katas
- Page glossaire
- target="_blank" pour les liens externes
- liens automatiques quand url détectée
- passer de next.baldir.fr à baldir.fr
- mettre en place marc-bouvier.fr pour le perso
- Section  pour mon activité (ex. participation conférences, meetups, )
- URLs hyperliens auto
- glossaire
- Transformer ce making-off en collection d'article ?
- Test RSS feed in a real RSS client against github page
    - Feed needs base URL which is missing
    - Maybe inject it with a provided environment variable
- Mes articles chez Iroco

- navigation
    - Items
        - Blog posts
        - Notes (micro blogging)
        - About
        - Rss
        - Podcasts
        - Liens sortants (sites que j'aime bien ou ami-e-s)
        - Bibliothèque (inspiration de https://lazybear.io/)

---

  - A11y : Skip to content
  - [X] A11y : Skip to content
  - A11y : Skip to navigation
- pagination : https://www.11ty.dev/docs/pagination/
- écriture inclusive
    - choisir une façon d'écrire mon contenu de façon inclusive (inspiration : [La lutine du web](https://www.lalutineduweb.fr/), ...)
-

- Backlinks : https://github.com/binyamin/eleventy-plugin-backlinks#readme
- Footnotes? https://github.com/KittyGiraudel/eleventy-plugin-footnotes
- Green links ? https://github.com/fershad/eleventy-plugin-green-links  
  I can pick one of the following stuff.


- [x] fix main picture size (it is too large)
- ✅ Links followable in blogs

- Host statically on Github pages for public preview
- Pourquoi je vais écrire mon blog en Français exclusivement?
- Links followable in blogs
- Wikilinks support
    - https://photogabble.co.uk/noteworthy/adding-wiki-links-to-11ty/
    - https://github.com/oleeskild/obsidian-digital-garden/blob/d3c3b3f029d6d24d2f9dcb5676c43b7562b98ad6/src/compiler/GardenPageCompiler.ts#L197-L270

- [ ] Backlinks

- [x] Stub posts
    - https://photogabble.co.uk/changelog/adding-stub-posts/

---

- [ ] Short notes (like microblogging)
    - [ ] Make it quick and easy to write (preset) 

---

- [ ] Pagination
    - [ ]  
- [ ] Previous / next article
    - [ ] Blog
    - [ ] Making Of
    - [ ] Notes
- /uses
    - https://photogabble.co.uk/uses/
- [x] ~Host statically on Github pages for public preview~
- Reading time : https://github.com/johanbrook/eleventy-plugin-reading-time
- Header ids : https://github.com/orchidjs/eleventy-plugin-ids
- RSS (advanced)
- Podcast
- Navigation
- Generate a public knowledge base from Obsidian notes (warning ! it is an ambitious task)
- Open graph (SEO & link cover image) : https://github.com/tannerdolby/eleventy-plugin-metagen
- I18n
- Dark light modes
- Sitemap
- Maybe allow to edit and create content with an headless CMS such as https://decapcms.org/




- [chrissy-dev/awesome-eleventy: A collection of awesome Eleventy (11ty) tools, templates, plugins, guides, snippet, etc.](https://github.com/chrissy-dev/awesome-eleventy)
- [brob/eleventy-plugin-blog-tools: A collection of shortcodes, filters and tags that make blogging on 11ty more fun](https://github.com/brob/eleventy-plugin-blog-tools)
- [brob/eleventy-plugin-dynamic-categories: An 11ty plugin to dynamically generate categories of posts as well as pagination for those categories](https://github.com/brob/eleventy-plugin-dynamic-categories)
- [sielay/eleventy-plugin-blog: Zero config blog features for 11ty](https://github.com/sielay/eleventy-plugin-blog)
- [brob/plug11ty.com: A repository of 11ty plugins](https://github.com/brob/plug11ty.com)
- [rknightuk/eleventy-plugin-post-graph: Generate Github-style post distribution graph for your blog posts in Eleventy](https://github.com/rknightuk/eleventy-plugin-post-graph)
- [declanbyrd/eleventy-plugin-mastoarchive: Eleventy plugin to expose your Mastodon posts as a global data object.](https://github.com/declanbyrd/eleventy-plugin-mastoarchive)
- [bradleyburgess/eleventy-plugin-broken-links: An 11ty plugin to check your build for broken external links](https://github.com/bradleyburgess/eleventy-plugin-broken-links)
- [orchidjs/eleventy-plugin-ids: @11ty plugin for adding ids to html headings and other elements](https://github.com/orchidjs/eleventy-plugin-ids)
- [NotWoods/11ty-plugins: A collection of plugins I've written for eleventy.](https://github.com/NotWoods/11ty-plugins)
- [New Tab](chrome://newtab/)

Wiki links dans eleventy
https://photogabble.co.uk/noteworthy/adding-wiki-links-to-11ty/

Ou encore le récent https://nolebase-integrations.ayaka.io/pages/en/integrations/markdown-it-bi-directional-links/



Markdown It plugin :  pour mes citations / questions…

- https://github.com/markdown-it/markdown-it-footnote
- https://www.npmjs.com/package/markdown-it-anchor
- https://www.npmjs.com/package/markdown-it-collapsible
- https://www.npmjs.com/package/markdown-it-named-code-blocks
- https://www.npmjs.com/package/@ig3/markdown-it-wikilinks
- https://www.npmjs.com/package/@egihasdi/markdown-it-footnote
- https://www.npmjs.com/package/@nolebase/markdown-it-bi-directional-links
- https://www.npmjs.com/package/markdown-it-table-of-contents
-
https://nicolas-hoizey.com/articles/2021/02/25/accessible-anchor-links-with-markdown-it-and-eleventy/

https://11tybundle.dev/categories/

https://tylersticka.com/journal/simple-eleventy-3-excerpts/
https://coryd.dev/posts/2024/a-feed-for-everything-and-everything-in-a-feed/

https://hamatti.org/posts/community-websites-with-eleventy/

💪 https://www.bobmonsour.com/posts/adding-webmentions-to-my-site/

💪 https://jamesdoc.com/blog/2023/git-changelog-in-11ty/


https://photogabble.co.uk/changelog/alphabetising-glossary-terms/

