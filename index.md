---
layout: frontpage
title: Code for Orlando, tech volunteers for change
mainmenu:
  When We Meet: http://www.meetup.com/Code-For-Orlando/
  Contact Us: "#contact-code-for-orlando"
  Code of Conduct: /code-of-conduct
  Get Started!: "#dive-into-a-project"
#focuspoints:
#  - icon: images/data.png
#    title: Liberate Gov't Data
#    description: Opening data, which gives citizens trust in government, smoothes processes, and aids the economy.
#  - icon: images/launch.png
#    title: Launch Civic Apps
#    description: Creating awesome apps that connect the government to citizens.
#  - icon: images/octocat.png
#    title: Contribute Code
#    description: Participating in open-source communities. Contributing all our code to other CfA brigades.
#  - icon: images/advocate.png
#    title: Partner With Governments
#    description: Working with our state, cities, and counties. We know we can't do it alone.
contactus:
  - name: slack
    url: https://codefororlando.herokuapp.com/
    note: Get an invitation to Code for Orlando Slack group
  - name: twitter
    url: https://twitter.com/codefororlando
    note: Follow Code for Orlando on Twitter
  - name: facebook
    url: https://facebook.com/codefororlando
    note: See Code for Orlando on Facebook
#  - name: youtube
#    url: https://youtube.com/channel/UCrEAf9d6hS4C0EMbntSlDdQ/feed
#    note: Watch Code for Orlando on YouTube
---

Help make Orlando better
========================

Code for Orlando is a group of "civic hackers" who volunteer our tech
talents to improve our city for residents, visitors, and local government.

We make projects we think might help. They span topics like pet adoption,
bicycling, walking tours, road closures, and public health and vaccination.
Once you accept you have some power to change things, we're sure
you'll think of more.

We're transparent, inclusive, respectful, permissionless, and generative.  We'd like you to join us. You
[don't even have to be a programmer!](/2015/07/30/flags/) We
need all kinds of talent, so please don't let the "code" in our name scare you.

In her 2012 TED talk, Jennifer Pahlka called our parent organization 
([Code for America](https://www.codeforamerica.org/about/values/)) a
Peace Corps for geeks. 
<span class="videoframe"><a href="http://www.ted.com/talks/jennifer_pahlka_coding_a_better_government">See the whole talk.</a> It's pretty great.</span><!--- link to video shows up only when narrow screen -->

<iframe class="videoframe" src="https://embed-ssl.ted.com/talks/jennifer_pahlka_coding_a_better_government.html" width="100%" height="480" frameborder="0" scrolling="no" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe><!--- embedded video shows up only on wide screen -->

**We need you and your skills. Together, we can make Orlando more awesome.**

How can you help?
=================

At the very least, you should introduce yourself on our Slack group. Slack is how we communicate
most. <span class="attention-block"><script async defer src="https://codefororlando.herokuapp.com/slackin.js?large"></script></span>

You may like to come to a meeting, too. We get together to chat about what we're
interested in trying, or stuck on, or see a need for.
[If you're not sure what to do](/2016/02/01/your-first-hacknight/), come listen. We have 
[a Meetup group](http://www.meetup.com/Code-For-Orlando/) 
we use to advertize events.

<ul id="upcoming-meetup-events"></ul><!--- This is programatically filled. -->


Dive into a project
===================

We think you should come to some meetings, but we're not all talk.  Maybe
you already know what you want to do. Maybe you want to explore and jump
straight to the code. 

Check out [all of our code](https://github.com/cforlando/) and some of 
[the data we've accumulated](https://brigades.opendatanetwork.com/brigade?brigade=Code%20for%20Orlando).

We also have some bug reports that we've marked as a good place to look for a
way to help. Those are marked "help wanted" in 
[each project](https://github.com/cforlando/)'s issue tracker.

<ul id="help-needed-bugs"></ul><!--- This is programatically filled. -->


{% if page.focuspoints %}
What We Do
==========

{% for focuspoint in page.focuspoints %}
+ ![]( {{ focuspoint.icon }} ) <h2>{{ focuspoint.title }}</h2> <p>{{ focuspoint.description | rstrip }}</p>
{% endfor %}
{% endif %}

{% if site.posts %}
Blog
====

{% for post in site.posts %}
+ [ {{ post.title }} ]({{ post.url }}), by {{ post.author }} *{{ post.excerpt | remove: '<p>' | remove: '</p>' | rstrip }}*
{% endfor %}
{% endif %}


Contact Code For Orlando
========================

<p><a href="https://cmiller407.typeform.com/to/jh2LKo" data-mode="1" target="_blank">Send us a note</a>. It will take just a few seconds.</p>
<script type="text/javascript">(function(){var qs,js,q,s,d=document,gi=d.getElementById,ce=d.createElement,gt=d.getElementsByTagName,id='typef_orm',b='https://s3-eu-west-1.amazonaws.com/share.typeform.com/';if(!gi.call(d,id)){js=ce.call(d,'script');js.id=id;js.src=b+'share.js';q=gt.call(d,'script')[0];q.parentNode.insertBefore(js,q)}id=id+'_';if(!gi.call(d,id)){qs=ce.call(d,'link');qs.rel='stylesheet';qs.id=id;qs.href=b+'share-button.css';s=gt.call(d,'head')[0];s.appendChild(qs,s)}})()</script>

{% for socialitem in page.contactus %}
+ [{{ socialitem.note }}]({{ socialitem.url }})
{% endfor %}

