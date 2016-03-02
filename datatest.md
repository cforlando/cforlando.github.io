---
layout: plain
title: Code for Orlando
---
<script type="text/javascript">


bugs_needing_help = new Array();
// when, bug url, repository name, conributors_url

poll_help_needed = function(repository_name, issues_url_description, contributors_url) {
  var issues_url, req;
  issues_url = issues_url_description.replace("{/number}", "?labels=help%20wanted");
  req = new XMLHttpRequest;
  return (function(req, repository_name, issues_url, contributors_url) {
    req.open("GET", issues_url);
    req.addEventListener("load", function() {
      var bug, i, len, ref, results;
      console.log(req);
      console.log(req.status);
      if (req.responseText) {
        ref = JSON.Parse(req.responseText);
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          bug = ref[i];
          console.log(bug.url);
          console.log(bug.title);
          results.push(console.log(bug.created_at));
        }
        return results;
      } else {
        return console.log("no response text for " + issues_url + " for " + repository_name + " after " + req.status);
      }
    });
    return req.send();
  })(req, repository_name, issues_url, contributors_url);
};


{% for repository in site.github.public_repositories %}poll_help_needed('{{ repository.name | replace "{/number", "" }}', '{{ repository.issues_url }}', '{{ repository.contributors_url }}');
{% endfor %}
</script>
