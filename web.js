var fs = require('fs'),         // used by static to check if file exsists
feed   = require('feed-read'),  // read RSS feeds
http   = require("http"),       // respond to basic http requests
nstatic = require('node-static'), // serve css and client js from same script
file   = new nstatic.Server('./static'),
port   = process.env.PORT || 3000, // allow heroku to set port 
instart = 'http://instagram.com/tags',
keyword = '/kitten',
instend = '/feed/recent.rss',
url    = require('url'),
path   = require('path');

http.createServer(function (req, res) {

	if(req.url.indexOf('.') > -1){ // Serve STATIC Files
		var f = __dirname+'/static'+req.url;
		var ext = path.extname(req.url).toLowerCase();
		console.log(req.url, ' is ',ext);

		fs.exists(f, function (exists) {
			console.log(f,exists);
			if(exists){
				file.serve(req, res);
			} else {
				file.serveFile('/404.html', 404, {}, req, res);
			}
		});
	} else { // DYNAMIC Content

		// url_parts = url.parse(req.url, true),
		// query = url_parts.query;
		// console.log('U',url_parts);

		res.writeHead(200, {
			"Content-Type": "text/html",
			"Transfer-Encoding": "chunked"
		});

		res.write("<html>\n<head>\n<title>Hello Mario!</title>\n<link rel='stylesheet' media='all' href='/style.css' /> </head>\n<body>");
		if(req.url.length > 1){
			keyword = req.url;
		}
		var instaurl = instart + keyword + instend;
		feed(instaurl, function(err, articles) {
			if(err) {
				console.log('ERROR',err);
			}
			if(typeof articles === "undefined") {
				console.log('NO RESULTS');
				res.end("<h1> no results </h1></body>\n</html>"); // end http response
			} else {
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
			}
		});
	}
}).listen(port);
console.log('HTTP Server Listening on: http://localhost:'+port);