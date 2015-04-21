---
layout: post
title: "About Jekyll, Github Pages and Plugins"
date: 2012-07-08
---
It looks like everyone is talking about jekyll and github pages so I'm also going to let my tips around here.

Github pages doesn't allow jekyll pluggins, you may not need them or you may have to find your way around like I did.

I haven't actually found a way around, to use plugins I have to generate my blog before and push it to the repo. The solution is to have a branch with my blog's source files and push the output to the master branch.

I added *site* to .gitignore and now its magic! I can switch to my source branch, do all the alterations, generate the blog, go back to the master branch and move the files from *site* to the root folder and push the updated blog.

