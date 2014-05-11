---
layout: post
title: "Jekyll, nginx and capistrano"
date: 2013-08-10 16:56
---
Yes, I'm blogging about blogging again. I've just updated this blog so I'm writing about it. Mostly I will tell you about my jekyll setup.

I'm running a [nginx][nginx] server. I use github to store my code. I've setup [capistrano][capistrano] for automatic deploys. Everything else is jekyll.
<!--more-->

**How it works**: I update my blog. I push to github. I type `cap deploy`. The code on the server is updated from github. It runs bundle install if needed on the server. It compiles jekyll and it's done.

## Theme ##

I made it from scratch with html and sass (using compass and foundation like I always do). It was easy since I'm probably what you can call a web developer. Now I have a simple and organized theme to change when ever I want. 

The tricky part was to setup sass. People normally run the `compass --watch` stuff to compile sass to a folder that jekyll loads. You start compass, you start jekyll and it's fine. You can even use Foreman to make it easier. There are two problems:

To use images in css I had to write they're full path. That's not god. The solution was to make jekyll process css, but since css was generated from sass there were all kind of syntax problems.

My solution was to use `gem "jekyll-assets"`. It's gives you the same as rails asset pipeline. This solved my problems.

Also I had to put the following code in a file on the plugins folder for sass compiler to load compass. This was a hard to find solution.

    Compass.sass_engine_options[:load_paths].each do |path|
      Sass.load_paths << path
    end

## Tasks ##

There is probably only one thing I like in octopress: **Rakefile**. I used some of their code to make my life easy. The rest I got searching or writing myself.

    require "rubygems"
    require "bundler/setup"

    posts_dir = "_posts"

    desc 'Run the jekyll server'
    task :server do
      system "jekyll serve -w"
    end

    desc 'Run the jekyll dev server with drafts'
    task :preview do
      system "jekyll serve -w --drafts"
    end

    namespace :jekyll do
      desc 'Delete generated _site files'
      task :clean do
        system "rm -fR _site"
      end

      desc 'Clean temporary files and run the server'
      task :compile => [:clean] do
        system "jekyll build"
      end
    end


    # usage rake new_post[my-new-post] or rake new_post['my new post'] or rake new_post (defaults to "new-post")
    desc "Begin a new post in #{posts_dir}"
    task :new_post, :title do |t, args|
      if args.title
        title = args.title
      else
        print "Enter a title for your post: "
        title = STDIN.gets.chomp
      end
      mkdir_p "#{posts_dir}"
      filename = "#{posts_dir}/#{Time.now.strftime('%Y-%m-%d')}-#{title.to_url}.md"
      if File.exist?(filename)
        abort("rake aborted!") if ask("#{filename} already exists. Do you want to overwrite?", ['y', 'n']) == 'n'
      end
      puts "Creating new post: #{filename}"
      open(filename, 'w') do |post|
        post.puts "---"
        post.puts "layout: post"
        post.puts "title: \"#{title.gsub(/&/,'&amp;')}\""
        post.puts "date: #{Time.now.strftime('%Y-%m-%d %H:%M')}"
        post.puts "---"
      end
    end


## Deploy ##

To deploy I just run `cap deploy`. Everything else [capistrano][capistrano] takes care of.

I need two gems for this:

    gem 'capistrano'
    gem 'rvm-capistrano'

And the following code is my _deploy.rb_ file. Notice the `require "rvm/capistrano"` it is needed if you use rvm.

    require "rvm/capistrano"
    require "bundler/capistrano"

    set :user, 'USERNAME'
    set :deploy_to, "SERVER FOLDER TO DEPLOY TO"
    set :use_sudo, false

    set :application, "APPLICATION NAME"
    server "SERVER_NAME", :app, :web, :db, :primary => true

    ssh_options[:forward_agent] = true
    set :bundle_flags, "--deployment"
    ssh_options[:keys] = %w(PATH TO SSH KEY)
    set :scm, 'git'
    set :repository,  "REPOSITORY URL"
    set :branch, 'master'
    set :deploy_via, :remote_cache
    set :keep_releases, 5

    namespace :deploy do
      [:start, :stop, :restart, :finalize_update].each do |t|
        desc "#{t} task is a no-op with jekyll"
        task t, :roles => :app do ; end
      end

      # compile compass and then jekyll
      task :finalize_update do
        run "cd #{latest_release}; rake jekyll:compile"
      end
    end

## Problems ##

So I was using [Octopress][octopress] for a while. Not that I write that much, but I try to. The problem with octopress is that it is too much. Seriously, it is too much. 

Sass compilation time to slow.

[capistrano]: https://github.com/capistrano/capistrano
[nginx]: http://nginx.org/
[octopress]: http://octopress.org/
[medium]: https://medium.com/
