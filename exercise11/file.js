/*jslint unparam: true, node: true */

var http = require('http'),
    fs = require('fs'),
    server;

server = http.createServer(function (req, res) {
    "use strict";

    fs.createReadStream(process.argv[3]).pipe(res);
});

server.listen(+process.argv[2]);
