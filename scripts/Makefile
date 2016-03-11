all: cfo-help-bugs.js

%.js: %.coffee
	echo --- >  $@
	echo --- >> $@
	coffee --compile --no-header --print $< >>$@
