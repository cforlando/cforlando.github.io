How to view
===========

Visit this site at http://cforlando.github.io/

How to write
============

The front page of this site is in `index.md`

Blog posts must be in `\_posts/` with files named in the form `YYYY-MM-DD-TITLESLUG.md`

Dates that are in the future will not be visible on the web site.

If you're new to adding stuff, add yourself to `\_config.yml` in the "authors" 
section, and use the id you put there ("alicesmith") in the top of every blog
post ("author: alicesmith"). The only required field in \_config.yml are "name", but
a "tweet" id and "avatarid" (from github profile image url!) and "display_name"
would be great to have.

How to code
===========

The css that controls styling is in images/site.css .

The code that transforms the various page types, "frontpage", "plain", and
"blog" are in \_layouts with that name.
