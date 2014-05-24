var static = require('node-static');
var file = new static.Server('./static');
require('http').createServer(function (request, response) {

// Check if file is in accepted file types
// fs.exists('/etc/passwd', function (exists) {
//   util.debug(exists ? "it's there" : "no passwd!");
// });
    //
    // Serve files!
    //
    file.serve(request, response);

}).listen(8080);