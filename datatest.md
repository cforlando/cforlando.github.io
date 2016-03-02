---
layout: plain
title: Code for Orlando
---
<script type="text/javascript">


bugs_needing_help = new Array();
// when, bug url, repository name, conributors_url

function parse_help_needed_results(req, repository_name, issues_url_description, contributors_url) {
  console.log(req.responseText);
}


function poll_help_needed(repository_name, issues_url_description, contributors_url) {
  
  req = new XMLHttpRequest();
  req.addEventListener("load", function() { parse_help_needed_results(req, repository_name, issues_url_description, contributors_url) });
  req.open("GET", issues_url_description.replace("{/number}", "?assignee=none&amp;labels=help%20wanted"));
  req.send();
}

{% for repository in site.github.public_repositories %}poll_help_needed('{{ repository.name }}', '{{ repository.issues_url }}', '{{ repository.contributors_url }}');
{% endfor %}
</script>
