var fs    = require('fs'),
nstatic   = require('node-static'),
staticDir = './static',
file      = new nstatic.Server(staticDir),
path      = require('path');

require('http').createServer(function (req, res) {
	var validFile = false;


	// Check if file is an accepted file type?

	console.log('R',req.url);

	// only serve specific file types
	if(req.url.indexOf('.') > -1){
		var f = __dirname+'/static'+req.url;
		var ext = path.extname(req.url).toLowerCase();
		console.log('EXT >> ',ext);

		fs.exists(f, function (exists) {
			console.log(f,exists);
			if(exists){
				file.serve(req, res);
			} else {
				file.serveFile('/404.html', 404, {}, req, res);
			}
		});
	}
    //
    // Serve files!
    //


}).listen(3000);