---
title: "Screen Vertical Split"
layout: post
date: 2012-03-09
---
I've already mention __screen__ before and I've been using it for a while. If you don't know what screen is you should really [google it](http://www.gnu.org/software/screen), it's a great tool for terminal lovers.

I think OSX comes with screen by default since the last major upgrade to the terminal app. The problem with it is that it doesn't allow vertical split, only horizontal.

I searched in ports for something like screen-vs but I couldn't find anything. So I started looking for a manual installation and I got it, here it is:

	$ cvs -z3 -d:pserver:anonymous@cvs.savannah.gnu.org:/sources/screen co screen
	$ curl http://old.evanmeagher.net/files/gnu-screen-vertsplit.patch &gt; gnu-screen-vertsplit.patch
	$ cd screen/src
	$ patch &lt; ../../gnu-screen-vertsplit.patch
	$ ./configure --enable-locale --enable-telnet --enable-colors256 --enable-rxct_osc
	$ make
	$ sudo make install

After the installation you can hit __C-a |__ or run __split -v__ in command line mode.
