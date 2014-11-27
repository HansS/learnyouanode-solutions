var fs = require("fs"),
    path = require("path");

var ls = function (dir, extension, callback) {
    "use strict";

    extension = "." + extension;

    fs.readdir(dir, function (err, list) {
        if (err) {
            return callback(err);
        }

        var files = list.filter(function (file) {
            return path.extname(file) === extension;
        });

        callback(null, files);
    });
};

module.exports = ls;
