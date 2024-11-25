---
layout: default.html
title: Citations
description: "Citations"
eleventyImport:
  collections: ["citations"]
---
{% for citation in collections.citations %} 
- [{{ citation.data.title }}]({{citation.url}}) - {{ citation.data.citation_auteur }} 
{% endfor %}


