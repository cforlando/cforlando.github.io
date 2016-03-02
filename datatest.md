---
layout: plain
title: Code for Orlando
---
<script type="text/javascript">


bugs_needing_help = new Array();
// when, bug url, repository name, conributors_url

function parse_help_needed_results(req, repository_name, issues_url, contributors_url) {
  if (! req.responseText) { return; }
  bug_list = JSON.parse(req.responseText);
  if (bug_list) {
    console.log("want to load " + bug_list + " into bug list for " + repository_name + " because of " + issues_url);
  } else {
    console.log("no interesting bugs at " + issues_url)
  }
}

function poll_help_needed(repository_name, issues_url_description, contributors_url) {
  issues_url = issues_url_description.replace("{/number}", "?assignee=none&amp;labels=help%20wanted");
  req = new XMLHttpRequest();
  req.addEventListener("load", function() { return parse_help_needed_results(req, repository_name, issues_url, contributors_url); });
  req.open("GET", issues_url);
  req.send();
}

{% for repository in site.github.public_repositories %}poll_help_needed('{{ repository.name }}', '{{ repository.issues_url }}', '{{ repository.contributors_url }}');
{% endfor %}
</script>
