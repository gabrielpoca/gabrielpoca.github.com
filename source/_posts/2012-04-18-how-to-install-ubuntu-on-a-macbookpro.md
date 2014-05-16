---
title: "How to install Ubuntu on a MacbookPro"
layout: post
date: 2012-04-18
---

I wrote about my ubuntu installation on my macbook pro a long time ago but I've never published because I've never finished it. Here it is now.

I've been waiting for a while to try a linux installation on my Macbook Pro. I have now a triple boot with Lion, Windows 7 and Ubuntu (actually is Xubunut now).

<!--more-->

I've just tried it and I'm probably never using it again, mostly because the battery, which gives about 3 hours on against about 6 on Lion. About Windows 7 I've installed it a long time ago. So this are the steps I followed:

1. Install and enable [refit](http://refit.sourceforge.net/).
2. Download your Ubuntu image and "burn" it to usb with [unetbootin](http://unetbootin.sourceforge.net).
3. Reboot with the usb inserted, and chose "Partition Tools" in refit. It will ask to update the partition table, do it. Then it reboots again.
4. When it opens again chose to start up from Ubuntu usb (you should see it side with OSX).
5. Proceed normally with the installation.

You should pay attention if it asks to chose the place to install GRUB. In my installation it didn't ask and everything went well, but in arch linux wiki they talk about related problems. Anyway, just don't replace the MBR. I'll try a different distro later, probably [crunch bang](http://crunchbanglinux.org/).

About the working distro: Everything works fine. The trackpad is odd, or different, it doesn't feel like it is supposed to, but I could get use to it. Also there are some minor issues on the keyboard lights (don't know why but when I tried Xubuntu next it was fixed), but nothing really annoying. Just take a look around this [here](https://help.ubuntu.com/community/MacBookPro8-2/Oneiric), or [here](https://wiki.ubuntu.com/MactelSupportTeam/CommunityHelpPages) if you're macbook pro isn't from late 2011.

Besides the battery, the wireless really sucks. There are no official drivers and you get to use ndiswrapper with windows drivers or some strange ones I don't really remember the name right now but are listed in those pages I referred to before. Anyhow you get a weak signal and it heats oddly, a lot.

I could probably live with it, but I found my way around with OSX and I like it now.
