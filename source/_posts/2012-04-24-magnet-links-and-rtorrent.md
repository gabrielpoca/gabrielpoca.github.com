---
layout: post
title: "Magnet Links and rtorrent"
date: 2012-04-24
---
There seems to bem some confusion about magnet links in [rtorrent][rtorrent].

It works without patch, just type the magnetic link directly:

    load.normal> magnet:?xt=urn:btih:cf87cc0d6b0db21d2221694effae3758479ad4d1&dn=Dan+Bull+-+Sharing+Is+Caring+%2B+bonus+tracks&tr=udp%3A%2F%2Ftracker.openbittorrent.com%3A80&tr=udp%3A%2F%2Ftracker.publicbt.com%3A80&tr=udp%3A%2F%2Ftracker.ccc.de%3A80

I'm now finishing a ruby script to download from piratebay and send to rtorrent.

To install rtorrent with MacPorts just run:

<pre>
sudo port install libtorrent
sudo port install rtorrent
</pre>

[rtorrent]: http://libtorrent.rakshasa.no
