---
layout: plain
title: Code for Orlando
---
<script>

function poll_help_needed(repository_name, issues_url_description, contributors_url) {
  console.log(issues_url_description.replace("{/number}", "?assignee=none&amp;labels=help"));
}

</script>



{% for repository in site.github.public_repositories %}<script>poll_help_needed('{{ repository.name }}', '{{ repository.issues_url }}', '{{ repository.contributors_url }}');</script>{% endfor %}
