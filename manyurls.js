var http = require("http");


function fetchurl(n) {
    if (n > process.argv.length) {
        return;
    }

    var url = process.argv[n],
              collectedData;

    http.get(url, function (response) {
        collectedData = "";
        response.setEncoding("utf8");
        response.on("data", function (data) {
            collectedData += data;
        });
        response.on("end", function () {
            console.log(collectedData);
            fetchurl(n + 1);
        });
    });
}

fetchurl(2);
