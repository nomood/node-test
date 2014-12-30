var http = require('http');
var _ = require('underscore');
http.createServer(function (req, res) {
    res.writeHead(200, {
        'Content-Type': 'text/plain; charset=UTF-8'
    });
    res.end('Hello from Hello World.\n');

}).listen(80, "");

