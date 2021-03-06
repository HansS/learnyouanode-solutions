var map = require('through2-map'),
    http = require('http'),
    server;


server = http.createServer(function (req, res) {
    "use strict";

    req.pipe(map(function (chunk) { return chunk.toString().toUpperCase(); })).pipe(res);
});

server.listen(+process.argv[2]);
