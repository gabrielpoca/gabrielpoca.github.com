---
layout: post
title: "From Vim to Sublime Text 2"
date: 2012-08-31
---

I'm addicted to Vim! Or at least I was. You can really get along with vim once you get to know it.
But sooner or later you'll miss some features. I got to know Sublime Text, so here is a small review.
<!--more-->

Things I love about vim:
* You can do everything with the keyboard and there are shortcuts for everything.
* Lots of plugins.
* Very customizable.
* Geeky.

Things I miss in Vim:

* Sidebar with features for files and folders (rename, drag and drop, etc).
* Better mouse support.
* Tabs.

I could live with this, but why should I? Developing in rails I have lots of files and folders. This was my deadline, I needed a sidebar and tabs. I tried TextMate and Sublime Text. I still use vim, for editing single files in the console, but that is all.

<table style="margin: 1em 0 1em 0;">
	<tr>
		<td>
			<div style="margin: 1.5em 1em 1.5em 1em;">
				<img style="max-width:150px;" src="{{ site.baseurl }}/images/2012/09/sublime_text_icon.png" />
			</div>
		</td>
		<td>
			<div>
				Why Sublime Text? Why not TextMate? I don't like it, I liked the old interface, before it became open source. Now it has some nice new features, but I just don't like the new interface. It's a matter of taste. Besides, Sublime has <strong>support for TextMate bundles and themes</strong>. Also, it's <strong>cross platform</strong>.
			</div>
		</td>
	</tr>
</table>


So, here are my tips and tricks to customize Sublime Text.

### Install the Package Control
[Package Control](http://wbond.net/sublime_packages/package_control) allows you to install/remove packages from GitHub without leaving Sublime. This is where most of the magic happens.

### Enable Vintage Mode
With [Vintage Mode](http://www.sublimetext.com/docs/2/vintage.html) you get some vim features, like edit/visual/insert mode and w, b, e, c-w, c-d shortcuts and more. Replace `"ignored_packages": ["Vintage"]` to `"ignored_packages": []` in settings.

### Change Line Padding
Add `"line_padding_bottom": -1` to settings.

### Install Themes
Install [phoenix-theme](https://github.com/netatoo/phoenix-theme), it has sidebar icons. The best I found so far.

### Shortcuts
Besides the Vintage Mode shortcuts, knowing the shortcuts is very useful. [Here](https://gist.github.com/1207002).

## In The End
Enjoy. And let go of Vim, at leat for big stuff, it is holding you down.
