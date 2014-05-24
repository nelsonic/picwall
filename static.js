var static = require('node-static');
var file = new static.Server('./static');
require('http').createServer(function (request, response) {


// Check if file is an accepted file type?


// fs.exists('/etc/passwd', function (exists) {
//   util.debug(exists ? "it's there" : "no passwd!");
// if(exists){
// 	file.serve(request, response);
// } else {
	file.serveFile('/404.html', 404, {}, request, response);
// }
// });
    //
    // Serve files!
    //


}).listen(8080);