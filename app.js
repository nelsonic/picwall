var feed = require('feed-read'),  // read RSS feeds
	fs   = require('fs'),         // used by static to check if file exsists
	http = require("http"),       // respond to basic http requests
	nstatic = require('node-static'),
	file = new nstatic.Server('./static');
	port = process.env.PORT || 3000, // allow heroku/nodejitsu to set port 
	insta  = 'http://instagram.com/tags/'+'sunshine'+'/feed/recent.rss',
	url = require('url');

// fetch rss

http.createServer(function (req, res) {

	url_parts = url.parse(req.url, true),
	query = url_parts.query;
	console.log('U',url_parts);



    // send basic http headers to client
    res.writeHead(200, {
        "Content-Type": "text/html",
        "Transfer-Encoding": "chunked"
    });

    res.write("<html>\n<head>\n<title>Instawall</title>\n"
    	+"<style media='screen' type='text/css'>"
    	+"img { width:100px;} "
    	+"</style>"
    	+"</head>\n<body>");

	feed(insta, function(err, articles) {
		if(err) {
			console.log('ERROR',err);
		}
		// console.log('A',articles);
		console.log('count:',articles.length);
		// if there are no results/images show 404
		for (var i = articles.length - 1; i >= 0; i--) {
			console.log(i, articles[i].link);
			res.write(articles[i].content.toString());
			if(i === 0) {
				console.log('END');
				res.end("</body>\n</html>"); // end http response
			}
		}
	});

}).listen(port);
console.log('HTTP Server Listening on: http://localhost:'+port);