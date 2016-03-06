---
layout: frontpage
title: Code for Orlando
mainmenu:
  About: "#what-is-this"
  Help Us: "#how-can-you-help"
  Projects: "#some-projects-so-far"
  What We Do: "#what-we-do"
  When We Meet: http://www.meetup.com/Code-For-Orlando/
  Code of Conduct: /code-of-conduct
focuspoints:
  - icon: images/data.png
    title: Liberate Gov't Data
    description: Opening data, which gives citizens trust in government, smoothes processes, and aids the economy.
  - icon: images/launch.png
    title: Launch Civic Apps
    description: Creating awesome apps that connect the government to citizens.
  - icon: images/octocat.png
    title: Contribute Code
    description: Participating in open-source communities. Contributing all our code to other CfA brigades.
  - icon: images/advocate.png
    title: Partner With Governments
    description: Working with our state, cities, and counties. We know we can't do it alone.
contactus:
  - name: twitter
    url: https://twitter.com/codefororlando
    note: Follow Code for Orlando on Twitter
  - name: facebook
    url: https://facebook.com/codefororlando
    note: Like Code for Orlando on Facebook
  - name: youtube
    url: https://youtube.com/channel/UCrEAf9d6hS4C0EMbntSlDdQ/feed
    note: Watch Code for Orlando on YouTube
---

What is this?
=============

Code for Orlando, a local 
[Code for America](https://www.codeforamerica.org/about/values/) brigade,
brings the community together to improve Orlando through technology. We are a
group of "civic hackers" from various disciplines who are committed to
volunteering our talents to make a difference in the local community. We unite
to improve the way the community, visitors, and local government experience
Orlando.

Jennifer Pahlka, in her 2012 TED talk, called Code for America "a
Peace Corps for geeks". 
<span class="videoframe"><a href="http://www.ted.com/talks/jennifer_pahlka_coding_a_better_government">See the whole talk.</a> It's pretty great.</span><!--- link to video shows up only when narrow screen -->

<iframe class="videoframe" src="https://embed-ssl.ted.com/talks/jennifer_pahlka_coding_a_better_government.html" width="100%" height="480" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe><!--- embedded video shows up only on wide screen -->

Some words to describe us:  transparent, inclusive, respectful, permissionless,
generative.

We want you to bring your talents to create a better Orlando.

How can you help?
=================

Join us.  Don't worry -- there's no commitment here.

We're not at all formal, but we do get together once a month (at least) to
chat about what we're interested in trying, or stuck on, or see a need for.  If
you're not sure what to do, just [come listen. We have a Meetup
group](http://www.meetup.com/Code-For-Orlando/) we use to advertize events.

<ul id="upcoming-meetup-events"></ul><!--- This is programatically filled. -->


Some projects so far
====================

We think you should come to some meetings, yes, but we're not all talk.  Maybe
you already know what you want to do. Maybe you want to explore and jump
straight to the code. 

We have some neat projects, spanning topics like pet adoption, bicycling,
walking tours, road closures, and public health and vaccination.

Check out [all of our code](https://github.com/cforlando/) and [the
data we've accumulated](https://brigades.opendatanetwork.com/brigade?brigade=Code%20for%20Orlando).

We also have some bug reports that we've marked as a good place to look for a way to help.

<ul id="help-needed-bugs"></ul><script>{% for repository in site.github.public_repositories %}document.fill_help_needed_bugs_list({{ repository.description | jsonify }} || {{ repository.title | jsonify }}, {{ repository.html_url || jsonify }}, {{ repository.issues_url | jsonify }}, {{ repository.contributors_url | jsonify}});{% endfor %}</script>

The Freshest
------------

Check these out! These projects were just updated.

<ol class="flatlist" id="most-recently-updated-repos"></ol><!--- This is programatically filled. -->

<script src="images/cfo-help-bugs.js"></script>
