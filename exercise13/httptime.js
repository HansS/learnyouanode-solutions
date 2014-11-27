var http = require('http'),
    url = require('url'),
    server;

server = http.createServer(function (req, res) {
    "use strict";

    var query = url.parse(req.url, true),
        date,
        response;

    if (query.pathname === "/api/parsetime") {
        date = new Date(query.query.iso);

        response = {
            "hour": date.getHours(),
            "minute": date.getMinutes(),
            "second": date.getSeconds()
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response));
    } else if (query.pathname === "/api/unixtime") {
        response = {
            "unixtime": Date.parse(query.query.iso)
        };

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(response));
    } else {
        res.writeHead("404");
        res.end("{}");
    }
});

server.listen(+process.argv[2]);
