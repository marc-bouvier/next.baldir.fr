---
title: Texte alternatif d’une image dans une figure
date: 2024-10-23T09:39:32+02:00
tags:
  - Accessibilité
  - HTML
  - FAQ
description: Faut-il mettre le texte alternatif d’une image dans une figure avec une figcaption ?
---


Exemple de [w3s](https://www.w3schools.com/TAGS/tag_figcaption.asp):

```html
<figure>
  <img src="pic_trulli.jpg" alt="Trulli" style="width:100%">
  <figcaption>Fig.1 - Trulli, Puglia, Italy.</figcaption>
</figure>
```

> I'm a blind user. I would say that there are two big categories of images on the web:
> 
> - Functional images
> - Illustrative images a.k.a. figures
> 
> AS the name says, figcaption is a caption for a figure. The caption is always visible by everybody, not only blind people. Figures are images that can be found in a book, an article, or whatever more or less long paragraphs of text. Most of the time, figures are purely illustrative.
> 
> When you use figcaption, the alt attribute should probably be empty:
> 
> - Copying the text of the figcaption into the alt attribute, or any shortened version, is almost always useless: the screen reader will read twice the same or almost the same information, and it's worth absolutely nothing
> - You may think that the alt attribute could be useful for a longer description of the image, that wouldn't fit in the figcaption; for example a detailed description of a chart or a diagram. But in fact, this kind of description is better below the image or in another page (then available for everybody), rather than in the alt attribute. The alt attribute should normally remain short.
> - You may think that the figcaption is useless and only set the alt attribute to something. 
>     Example: "Photo with Alice on the left, Bob on the right". But in fact sighted people could as well find this information useful, if they don't know Alice and Bob for example.
>     So it could be interesting to move this description to the figcaption, so that everybody benefits from it and not only blind people. 
> 
> Now, the biggest case when you won't use figure/figcaption is when images are functional: a button taht can be clicked, an icon with a precise meaning, etc. The basic rules for alt texts of functional images are:
> 
> - If you can interact with the image to perform actions (click, etc.), or if the icon conveys an information, then **you must set a non-empty alt**. It must be a **function description**, not a objective description of the image.
>     Example 1: "Go back" is good, while "Blue left arrow" is bad.
>     Example 2: "Unread message" is good, while "Closed enveloppe" is bad
> - Otherwise, if the image provide no interaction and if it doesn't convey any information, then it is illustrative; the alt should be empty in that case
> 
> — QuentinC https://stackoverflow.com/a/58468470/444769

