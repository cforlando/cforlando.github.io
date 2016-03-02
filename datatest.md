---
layout: plain
title: Code for Orlando
---

<ul id="help-me-bugs"></ul>

<script type="text/javascript">


bugs_needing_help = new Array();
// when, bug url, repository name, conributors_url




(function() {
  var add_bug_to_list, bug_count, bug_list, want_count;

  bug_list = document.getElementById("help-me-bugs");

  bug_count = 0;

  want_count = 5;

  add_bug_to_list = function(project_description, project_help_bugs_url, bugs, contributors_url) {
    var a, avatarholder, bug, header, headerlink, i, len, li, p, req;
    console.log(project_description);
    if (bug_count > want_count) {
      return;
    }
    li = document.createElement("li");
    headerlink = document.createElement("a");
    headerlink.setAttribute("href", project_help_bugs_url);
    headerlink.appendChild(document.createTextNode(project_description));
    li.appendChild(headerlink);
    header = document.createElement("h3");
    header.appendChild(headerlink);
    for (i = 0, len = bugs.length; i < len; i++) {
      bug = bugs[i];
      console.log(bug);
      if (bug_count > want_count) {
        break;
      }
      a = document.createElement("a");
      a.setAttribute("href", bug.html_url);
      a.appendChild(document.createTextNode(bug.title));
      p = document.createElement("p");
      p.appendChild(a);
      p.setAttribute("class", "bug");
      li.appendChild(p);
      bug_count++;
    }
    avatarholder = document.createElement("p");
    avatarholder.setAttribute("class", "contributor photoset");
    li.appendChild(headerlink);
    req = new XMLHttpRequest;
    return (function(avatarholder, contributors_url) {
      return req.addEventListener("load", function() {
        var contributor, img, j, len1, ref, results;
        if (req.responseText) {
          ref = JSON.parse(req.responseText);
          results = [];
          for (j = 0, len1 = ref.length; j < len1; j++) {
            contributor = ref[j];
            img = document.createElement("img");
            img.setAttribute("src", contributor.avatar_url);
            img.setAttribute("title", contributor.login);
            img.setAttribute("class", "avatar");
            a = document.createElement("a");
            a.setAttribute("href", contributor.url);
            a.appendChild(img);
            results.push(avatarholder.appendChild(a));
          }
          return results;
        }
      });
    })(avatarholder, contributors_url);
  };

  document.poll_help_needed = function(project_description, issues_url_description, contributors_url) {
    var issues_url, req;
    if (bug_list) {
      issues_url = issues_url_description.replace("{/number}", "?labels=help%20wanted");
      req = new XMLHttpRequest;
      return (function(req, project_description, issues_url, contributors_url) {
        req.open("GET", issues_url);
        req.addEventListener("load", function() {
          var bugs;
          if (req.responseText) {
            bugs = JSON.parse(req.responseText);
            if (bugs) {
              return add_bug_to_list(project_description, bugs, contributors_url);
            }
          }
        });
        return req.send();
      })(req, project_description, issues_url, contributors_url);
    }
  };

}).call(this);




{% for repository in site.github.public_repositories %}document.poll_help_needed({{ repository.description | jsonify }} || {{ repository.title | jsonify }}, {{ repository.issues_url | jsonify }}, {{ repository.contributors_url | jsonify}});
{% endfor %}
</script>
