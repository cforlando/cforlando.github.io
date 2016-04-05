fisherYates = (arr) ->
	i = arr.length
	if i is 0 then return false

	while --i
		j = Math.floor(Math.random() * (i+1))
		[arr[i], arr[j]] = [arr[j], arr[i]] # use pattern matching to swap


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


		p = document.createElement "p"
		p.setAttribute "class", "bug"

		if bug.user.avatar_url
			reporter_avatar = document.createElement "img"
			reporter_avatar.setAttribute "src", bug.user.avatar_url+"&s=20"
			reporter_avatar.setAttribute "title", "reported by " + bug.user.login
			p.appendChild reporter_avatar

		a = document.createElement "a"
		a.setAttribute "href", bug.html_url
		a.setAttribute "title", bug.body
		a.appendChild document.createTextNode bug.title

		p.appendChild a

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


fill_help_needed_bugs_list = (repo_data_list) ->

	fisherYates repo_data_list  # Shuffle items to get random sample

	have_count = 0
	want_count = 5

	bug_list = document.getElementById "help-needed-bugs"
	if bug_list
		for repo_data in repo_data_list

			if have_count > want_count
				console.log "not adding any more bugs. We're full."
				return

			[project_description, project_page_url, issues_url_description, contributors_url] = repo_data

			issues_url = issues_url_description.replace "{/number}", "?labels=starter"

			req = new XMLHttpRequest

			do (req, bug_list, project_description, project_page_url, issues_url, contributors_url) ->
				req.addEventListener "load", () ->

					if have_count > want_count
						console.log "not adding any more bugs. We're full."
						return
						
					if req.responseText
						bugs = JSON.parse req.responseText
						if bugs.length > 0
							added = add_bug_to_list bug_list, want_count, have_count, project_description, project_page_url + "/issues?q=is%3Aissue+is%3Aopen+label%3A%22help%20wanted%22", bugs, contributors_url
							have_count += added

				req.open "GET", issues_url, false
				req.send()


`fill_help_needed_bugs_list([{% for repository in site.github.public_repositories %}[{{ repository.description | jsonify }} || {{ repository.title | jsonify }}, {{ repository.html_url || jsonify }}, {{ repository.issues_url | jsonify }}, {{ repository.contributors_url | jsonify}}],{% endfor %}]);`

