var static    = require('node-static');
    staticDir = './static',
	file      = new static.Server(staticDir),
	fs        = require('fs'),
	path	  = require('path');


require('http').createServer(function (req, res) {
	var validFile = false;


	// Check if file is an accepted file type?

	console.log('R',req.url);
	var f = __dirname+'/static'+req.url;

	// only serve specific file types
	if(req.url.indexOf('.') > -1){
		ext = path.extname(req.ulr).toLowerCase();	
		console.log('EXT:',ext);
	}


	fs.exists(f, function (exists) {
		console.log(f,exists);
		if(exists){
			file.serve(req, res);
		} else {
			file.serveFile('/404.html', 404, {}, req, res);
		}
	});
    //
    // Serve files!
    //


}).listen(3000);