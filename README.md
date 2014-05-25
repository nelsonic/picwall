instawall
=========

Instantly display a wall of photos related to a keyword.

As part of my investigation into automated testing of image uploads
I've decided to use instagram's public feed.

Instagram RSS only returns 20 images:

![Instagram RSS for Cycling](http://i.imgur.com/7tn0wLd.jpg)

So we need to save the images we've already seen to create a wall.

Also, any keyword you search for returns selfies...





## Read More

### Instagram API

- Full API: http://instagram.com/developer/
- No Auth (Public RSS): http://stackoverflow.com/questions/14747870/instagram-public-rss-feed
- Try is yourself (returns RSS/XML): http://instagram.com/tags/YOUR_KEYWORD/feed/recent.rss
- Interesting Examples: http://mashable.com/2013/09/19/instagram-api-uses/

### Implementation Details

- Node HTTP Url parameters: http://stackoverflow.com/questions/6912584/how-to-get-get-query-string-variables-in-node-js
- Node as Simple HTTP (Web) Server: http://stackoverflow.com/questions/6084360/node-js-as-a-simple-web-server

### Related 

- https://github.com/nelsonic/node-parse-rss
- https://github.com/sentientwaffle/feed-read
- https://github.com/nelsonic/enlarge-image