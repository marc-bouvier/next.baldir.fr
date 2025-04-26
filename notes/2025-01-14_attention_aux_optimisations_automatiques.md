---
title: Attention aux optimisations automatiques
date: 2025-01-14T11:01:20+01:00
description: Parfois les optimisations automatiques sont conte productives
tags:
  - Simplicité
  - Frugalité
  - Sobriété-numérique
  - Optimisation
date_updated: 2025-01-25T18:25
cover_image: /public/img/cover_images/canard.gif
cover_image_alt: Dessin d’un canard, sujet de l’optimisation dans l’article
---

Ah ben, je fais des images en Gif et très peu de couleurs (4bits).

Et mon script qui optimise les images me propose des alternatives plus modernes… mais parfois plus volumineuses.

Autant sur des images modernes (avec un peu plus de couleurs) ça optimise en général.
Autant sur des images un peu plus "low-tech" ça empire.

À voir sur un échantillon plus gros.

| Image                                            | couleurs | taille   |          |
|--------------------------------------------------|----------|----------|----------|
| https://baldir.fr/public/img/C7WZXcX7IS-276.gif  | 4 bits   | 3.94 Kb  | original |
| https://baldir.fr/public/img/C7WZXcX7IS-276.jpeg | 24 bits  | 19.62 Kb |          |
| https://baldir.fr/public/img/C7WZXcX7IS-276.png  | 32 bits  | 5.58 Kb  |          |
| https://baldir.fr/public/img/C7WZXcX7IS-276.webp | 32 bits  | 7 Kb     |          |

```html

Le code généré

<picture>
    <source type="image/webp" srcset="/public/img/C7WZXcX7IS-276.webp 276w" sizes="100vw">
    <source type="image/png" srcset="/public/img/C7WZXcX7IS-276.png 276w" sizes="100vw">
    <source type="image/gif" srcset="/public/img/C7WZXcX7IS-276.gif 276w" sizes="100vw">
    <img loading="lazy" decoding="async" alt="Dessin d’un canard avec un chapeau de sorcier"
         src="/public/img/C7WZXcX7IS-276.jpeg" width="276" height="384">
</picture>
```

L'extension eleventy (voir [making of installation](/making-of/004-optimisation-des-images-plugin-license/) et [making of configuration](/making-of/005-optimisation-des-images-configuration/)) et le paramétrage qui amène à cette optimisation : 

```js
    // Create images variants of different dimensions and different formats.
    // They will be loaded depending on the viewport
eleventyConfig.addPlugin(eleventyImageTransformPlugin, {
    outputDir: "./_site/public/img/",
    urlPath: "/public/img/",

    extensions: "html",

    // output image formats
    formats: ["webp", "jpeg", "png", "auto"],

    // output image widths
    widths: ["320", "640", "800", "1024", "auto"],

    // attributes assigned on <img> override these values.
    defaultAttributes: {
        loading: "lazy",
        decoding: "async",
        sizes: `100vw`,
    },

    sharpOptions: {
        animated: true,
    },

    sharpPngOptions:{
      palette:true  
    }
})
```

Peut-être devrais-je jouer un peu avec [certains paramètres de cette extension](https://www.11ty.dev/docs/plugins/image/#advanced-control-of-sharp-image-processor) pour gagner encore en optimisation ?

