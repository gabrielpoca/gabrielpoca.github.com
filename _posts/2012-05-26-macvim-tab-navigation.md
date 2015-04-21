---
layout: post
title: "MacVim Tab Navigation"
date: 2012-05-26
---
Very usefull tip I found to have CMD+Number tab navigation in MacVim.

Past the code bellow in vimrc.

	if has("gui_macvim")
		map &ltD-1&gt :tabfirst&ltCr&gt
		map &ltD-2&gt :tabfirst&ltCr&gtgt
		map &ltD-3&gt :tabfirst&ltCr&gt3gt
		map &ltD-4&gt :tabfirst&ltCr&gt4gt
		map &ltD-5&gt :tabfirst&ltCr&gt5gt
		map &ltD-6&gt :tabfirst&ltCr&gt6gt
		map &ltD-7&gt :tabfirst&ltCr&gt7gt
		map &ltD-8&gt :tabfirst&ltCr&gt8gt
		map &ltD-9&gt :tabfirst&ltCr&gt9gt
	endif
