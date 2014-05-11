---
layout: post
title: "Excerpts on Jekyll powered by Github"
date: 2012-04-15
---
I'm now creating my blog on Github Pages with Jekyll. I was trying to get excerpts on my index page, but Jekyll doesn't allow it and Github pages doesn't allow plugins. Here is a way around.

Just replace in you posts loop

	\{\{ post.content \}\}

by

	\{\{ post.content | replace:'more start - ->','' | replace:'<\!- - more end','' \}\}

Now,in your posts, you should put the tag <\!- - more start - -> where the excerpt should end and <\!- - more end - -> in the end of the post. Notice that these are the html's comment tags, I couldn't manage to join the two -.
