/// <reference path="../typings/tsd.d.ts" />
import express = require('express');
import Middlewares = require('./App/Config/MiddlewaresBase');

var app = express();
var port = parseInt(process.env.PORT, 10) || 80;
app.set("port", port);
app.use(Middlewares.configuration);

app.get('/', (req, res) => {
	res.send('Rest Api Node.js');
});

module.exports = app;