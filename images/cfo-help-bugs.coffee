add_bug_to_list = (bug_list, want_count, have_count, project_description, project_help_bugs_url, bugs, contributors_url) ->

	#
	# <li><h3><a linktoprojectbugs>project description</a></h3><p><a linktobug>bug description</a></p><p>contributors</p></li>

	added_here = 0

	li = document.createElement "li"

	headerlink = document.createElement "a"
	headerlink.setAttribute "href", project_help_bugs_url
	headerlink.appendChild document.createTextNode project_description

	header = document.createElement "h3"
	header.appendChild headerlink
	li.appendChild header

	#avatarholder = document.createElement "p"
	#avatarholder.setAttribute "class", "contributor photoset"
	#li.appendChild avatarholder

	bug_list.appendChild li

	for bug in bugs
		if have_count > (want_count + added_here)
			console.log "not adding any more bugs. We're full."
			break

		a = document.createElement "a"
		a.setAttribute "href", bug.html_url
		a.setAttribute "title", bug.description
		a.appendChild document.createTextNode bug.title

		p = document.createElement "p"
		p.appendChild a
		p.setAttribute "class", "bug"

		li.appendChild p

		added_here++

	return added_here
	# don't get avatars

	req = new XMLHttpRequest
	do (avatarholder, contributors_url) ->
		req.addEventListener "load", () ->
			if req.responseText
				for contributor in JSON.parse req.responseText
					img = document.createElement "img"
					img.setAttribute "src", contributor.avatar_url
					img.setAttribute "title", contributor.login
					img.setAttribute "class", "avatar"

					a = document.createElement "a"
					a.setAttribute "href", contributor.html_url
					a.appendChild img

					avatarholder.appendChild a
		req.open "GET", contributors_url
		req.send()


document.fill_help_needed_bugs_list = (repo_data_list) ->

	have_count = 0
	want_count = 5

	bug_list = document.getElementById "help-needed-bugs"
	if bug_list
		for repo_data in repo_data_list

			[project_description, project_page_url, issues_url_description, contributors_url] = repo_data

			issues_url = issues_url_description.replace "{/number}", "?labels=help%20wanted"

			req = new XMLHttpRequest

			do (req, bug_list, project_description, project_page_url, issues_url, contributors_url) ->
				req.addEventListener "load", () ->

					if have_count > want_count
						console.log "not adding any more bugs. We're full."
						return
						
					if req.responseText
						bugs = JSON.parse req.responseText
						if bugs.length > 0
							added = add_bug_to_list bug_list, want_count, project_description,  project_page_url + "/issues?q=is%3Aissue+is%3Aopen+label%3A%22help%20wanted%22", bugs, contributors_url
							have_count += added

				req.open "GET", issues_url, false
				req.send()


