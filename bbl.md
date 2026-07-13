---
layout: layouts/default.html
title: Brown-Bag Lunch
description: Invitez-moi pendant la pause déjeuner et je vous ferai une présentation à vos équipes.
eleventyImport:
  collections: ["bbls"]
---

{% for bbl in collections.bbls %}
- [{{bbl.data.title}}]({{bbl.url}})
{% endfor %}


