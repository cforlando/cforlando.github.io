---
layout: plain
title: Code for Orlando
---


{% for repository in site.github.public_repositories %}
  * ('{{ repository.issues_url | remove "{/number}" }}', '{{ repository.contributors_url }}')

{% endfor %}
