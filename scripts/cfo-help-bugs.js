---
---
(function() {
  var add_bug_to_list, fill_help_needed_bugs_list, fisherYates;

  fisherYates = function(arr) {
    var i, j, ref, results;
    i = arr.length;
    if (i === 0) {
      return false;
    }
    results = [];
    while (--i) {
      j = Math.floor(Math.random() * (i + 1));
      results.push((ref = [arr[j], arr[i]], arr[i] = ref[0], arr[j] = ref[1], ref));
    }
    return results;
  };

  add_bug_to_list = function(bug_list, want_count, have_count, project_description, project_help_bugs_url, bugs, contributors_url) {
    var a, added_here, bug, header, headerlink, k, len, li, p, reporter_avatar, req;
    added_here = 0;
    li = document.createElement("li");
    headerlink = document.createElement("a");
    headerlink.setAttribute("href", project_help_bugs_url);
    headerlink.appendChild(document.createTextNode(project_description));
    header = document.createElement("h3");
    header.appendChild(headerlink);
    li.appendChild(header);
    bug_list.appendChild(li);
    for (k = 0, len = bugs.length; k < len; k++) {
      bug = bugs[k];
      if (have_count > (want_count + added_here)) {
        console.log("not adding any more bugs. We're full.");
        break;
      }
      p = document.createElement("p");
      p.setAttribute("class", "bug");
      if (bug.user.avatar_url) {
        reporter_avatar = document.createElement("img");
        reporter_avatar.setAttribute("src", bug.user.avatar_url + "&s=20");
        reporter_avatar.setAttribute("title", "reported by " + bug.user.login);
        p.appendChild(reporter_avatar);
      }
      a = document.createElement("a");
      a.setAttribute("href", bug.html_url);
      a.setAttribute("title", bug.body);
      a.appendChild(document.createTextNode(bug.title));
      p.appendChild(a);
      li.appendChild(p);
      added_here++;
    }
    return added_here;
    req = new XMLHttpRequest;
    return (function(avatarholder, contributors_url) {
      req.addEventListener("load", function() {
        var contributor, img, l, len1, ref, results;
        if (req.responseText) {
          ref = JSON.parse(req.responseText);
          results = [];
          for (l = 0, len1 = ref.length; l < len1; l++) {
            contributor = ref[l];
            img = document.createElement("img");
            img.setAttribute("src", contributor.avatar_url);
            img.setAttribute("title", contributor.login);
            img.setAttribute("class", "avatar");
            a = document.createElement("a");
            a.setAttribute("href", contributor.html_url);
            a.appendChild(img);
            results.push(avatarholder.appendChild(a));
          }
          return results;
        }
      });
      req.open("GET", contributors_url);
      return req.send();
    })(avatarholder, contributors_url);
  };

  fill_help_needed_bugs_list = function(repo_data_list) {
    var bug_list, contributors_url, fn, have_count, issues_url, issues_url_description, k, len, project_description, project_page_url, repo_data, req, want_count;
    fisherYates(repo_data_list);
    have_count = 0;
    want_count = 5;
    bug_list = document.getElementById("help-needed-bugs");
    if (bug_list) {
      fn = function(req, bug_list, project_description, project_page_url, issues_url, contributors_url) {
        req.addEventListener("load", function() {
          var added, bugs;
          if (have_count > want_count) {
            console.log("not adding any more bugs. We're full.");
            return;
          }
          if (req.responseText) {
            bugs = JSON.parse(req.responseText);
            if (bugs.length > 0) {
              added = add_bug_to_list(bug_list, want_count, have_count, project_description, project_page_url + "/issues?q=is%3Aissue+is%3Aopen+label%3A%22starter%22", bugs, contributors_url);
              return have_count += added;
            }
          }
        });
        req.open("GET", issues_url, false);
        return req.send();
      };
      for (k = 0, len = repo_data_list.length; k < len; k++) {
        repo_data = repo_data_list[k];
        if (have_count > want_count) {
          console.log("not adding any more bugs. We're full.");
          return;
        }
        project_description = repo_data[0], project_page_url = repo_data[1], issues_url_description = repo_data[2], contributors_url = repo_data[3];
        issues_url = issues_url_description.replace("{/number}", "?labels=starter");
        req = new XMLHttpRequest;
        fn(req, bug_list, project_description, project_page_url, issues_url, contributors_url);
      }
    }
  };

  fill_help_needed_bugs_list([{% for repository in site.github.public_repositories %}[{{ repository.description | jsonify }} || {{ repository.title | jsonify }}, {{ repository.html_url || jsonify }}, {{ repository.issues_url | jsonify }}, {{ repository.contributors_url | jsonify}}],{% endfor %}]);;

}).call(this);
