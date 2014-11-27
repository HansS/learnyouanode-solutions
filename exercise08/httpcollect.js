var http = require("http"),
    url,
    collectedData;


url = process.argv[2];


http.get(url, function (response) {
    "use strict";

    collectedData = "";
    response.setEncoding("utf8");
    response.on("data", function (data) {
        collectedData += data;
    });
    response.on("end", function () {
        console.log(collectedData.length);
        console.log(collectedData);
    });
});
