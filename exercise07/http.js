var http = require("http"),
    url;


url = process.argv[2];

http.get(url, function (response) {
    "use strict";

    response.setEncoding("utf8");
    response.on("data", function (data) {
        console.log(data);
    });
});
