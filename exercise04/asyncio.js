var fs = require("fs");

fs.readFile(process.argv[2], function (err, contents) {
    "use strict";

    if (err) {
        return console.error(err);
    }

    console.log(contents.toString().split("\n").length - 1);
});
