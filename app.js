var feed = require('feed-read'),
	http = require("http"),
	port = process.env.PORT || 5000, // allow heroku/nodejitsu to set port 
	url  = 'http://instagram.com/tags/work/feed/recent.rss';

// fetch rss

http.createServer(function (req, res) { 
    // send basic http headers to client
    res.writeHead(200, {
        "Content-Type": "text/html",
        "Transfer-Encoding": "chunked"
    });

    res.write("<html>\n<head>\n<title>RSS Feeds - Stream</title>\n</head>\n<body>");

	feed(url, function(err, articles) {
		if(err) {
			console.log('ERROR',err);
		}
		// console.log('A',articles);
		console.log('count:',articles.length);
		for (var i = articles.length - 1; i >= 0; i--) {
			console.log(i, articles[i].link, typeof articles[i].content);
			res.write(articles[i].content.toString());
			if(i === 0) {
				console.log('END');
				res.end("</body>\n</html>"); // end http response
			}
		};
	})

}).listen(port);
console.log('HTTP Server Listening on: http://localhost:'+port)