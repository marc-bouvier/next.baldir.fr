---
layout: layout.html
title: Notes
---

Cette page est une collection de pensée courtes et spontanées qui n’a pas sa place dans [un article de blog complet](/blog).

{% for note in collections.notes %} 
- {{ note.data.date | toLocaleStringFr }} - [{{ note.data.title }}]({{note.url}})
{% endfor %}


