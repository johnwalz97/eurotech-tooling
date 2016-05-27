var path = require('path');
var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');
var nodemailer = require("nodemailer");

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.resolve(__dirname, 'client')));
app.set('views', path.join(__dirname, './client'));
app.set('view engine', 'ejs');

require('./server/config/mongoose.js');
var routes_setter = require("./server/config/routes.js");
routes_setter(app);

app.listen(80, function() {
    console.log("listening...");
});
