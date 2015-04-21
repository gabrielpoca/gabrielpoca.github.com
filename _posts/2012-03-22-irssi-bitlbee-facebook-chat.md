---
title: "Irssi, Bitlbee and Facebook Chat"
layout: post
date: 2012-03-22
---
So today I managed to connect [Irssi](http://www.irssi.org/) to Facebook Chat through Bitlbee. Irssi is an awesome command line IRC client, I've set it up on a server and with ssh and screen. Here I explain how to setup irssi and  bitlbee with facebook chat.

Lets get Irssi and Bitlbee.

	sudo port install irssi
	sudo port install bitlbee

Then configure bitlbee.

	cp /opt/local/etc/bitlbee/bitlbee.conf.sample /opt/local/etc/bitlbee/bitlbee.conf

Open bitlbee.conf and search/edit to `RunMode = ForkDaemon`. Now start bittlbee and irssi.

	bitlebee
	irssi

Right now you're in irssi's console mode. Run the following to get things working. These commands should be easy to understand.

	/connect localhost
	account add jabber username@chat.facebook.com password

The following renames friend list default names to readable names.

	account fb set nick_source full_name

Start the chat.

	account on

And it is done. Now you should learn about irssi. Quick tip to start a conversation:

	/query Name

To chat in a new window run `/window new hide` before.
Bellow is a screenshot of mine.

![Irssi Screenshot]({{ site.baseurl }}/images/2012/03/captura-de-ecracc83-2012-03-10-acc80s-22-28-47.png)

There is plenty of information about irssi. About bitlbee and Facebook here are some useful resources:

[http://wiki.bitlbee.org/HowtoFacebook](http://wiki.bitlbee.org/HowtoFacebook)

[https://nowhere.dk/articles/facebook-chat-in-bitlbee](https://nowhere.dk/articles/facebook-chat-in-bitlbee)
