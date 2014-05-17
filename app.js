var feed = require('feed-read');
var url = 'http://instagram.com/tags/paradise/feed/recent.rss';

// fetch rss
feed(url, function(err, articles) {
	if(err) {
		console.log('ERROR',err);
	}
	console.log('A',articles);
})