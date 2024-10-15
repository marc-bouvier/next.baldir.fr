---
layout: default.html
title: Notes
description: Cette page est une collection de pensée courtes et spontanées qui n’a pas sa place dans un article de blog complet.
eleventyImport:
  collections: ["allNotesFromRecentToOlder"]
---

{% for note in collections.allNotesFromRecentToOlder %} 
- {{ note.data.date | toLocaleStringFr }} - [{{ note.data.title }}]({{note.url}})
{% endfor %}


