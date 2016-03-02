---
layout: plain
title: Code for Orlando
---


{% for repository in site.github.public_repositories %}
  * '{{ repository.issues_url |replace "{/number}", "?assignee=none&labels=help" }}', '{{ repository.contributors_url }}'

{% endfor %}
