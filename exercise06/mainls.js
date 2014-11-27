var modulels = require("./modulels.js");

modulels(process.argv[2], process.argv[3], function (err, files) {
    "use strict";

    if (err) {
        return console.error(err);
    }

    files.forEach(function (file) { console.log(file); });
});
