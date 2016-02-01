/// <reference path="../typings/tsd.d.ts" />
var express = require('express');
var Middlewares = require('./App/Config/MiddlewaresBase');
var app = express();
var port = parseInt(process.env.PORT, 10) || 80;
app.set("port", port);
app.use(Middlewares.configuration);
app.get('/', function (req, res) {
    res.send('Rest Api Node.js');
});
module.exports = app;
//# sourceMappingURL=index.js.map