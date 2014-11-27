var net = require("net"),
    strftime = require("strftime"),
    server = net.createServer(function (socket) {
        "use strict";
        var date = new Date();
        socket.end(strftime("%Y-%m-%d %H:%M\n", date));
    });

server.listen(+process.argv[2]);
