var static = require('node-static');
var file = new static.Server('./static');
require('http').createServer(function (request, response) {

    //
    // Serve files!
    //
    file.serve(request, response);

}).listen(8080);