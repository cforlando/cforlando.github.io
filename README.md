How to view
===========

Visit this site at http://cforlando.github.io/

How to write
============

The front page of this site is made from `index.md`. There's a lot of data at
the preamble that describes what goes in the top-bar navigation and in the
sections at the bottom. The meat of the file is made into the main text in the
middle.

Blog posts must be in `_posts/` with files named in the form
`YYYY-MM-DD-TITLESLUG.md` .

Dates that are in the future will not be visible on the web site.

If you're new to adding stuff, add yourself to `_config.yml` in the "authors" 
section, and use the id you put there ("alicesmith") in the top of every blog
post (`author: alicesmith`). The only required field in `_config.yml` are
`name`, but a `tweet` id and `avatarid` (from github profile image url!) and
`display_name` would be great to have.

For blog entries, use format `blog`. For the front page, use `frontpage`. 
For everything else, use `plain` for now. Talk to chad if you have something
else in mind.

If you're not in the editing group on github, fork the project and propose
pull requests.


How to code
===========

The css that controls styling is in images/site.css .

The code that transforms the various page types, `frontpage`, `plain`, and
`blog` are in `_layouts` with that name.
