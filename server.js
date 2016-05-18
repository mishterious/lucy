// get the http module:
var http = require('http');
// fs module allows us to read and write content for responses!!
var fs = require('fs');
// creating a server using http module:
var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var path = require('path');


//Setting up EJS  and views
app.set('views', __dirname + '/client/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/client/static"));
app.use(bodyParser.urlencoded());
app.use(bodyParser.json());

require('./server/config/mongoose.js');

//Store Routes setter in a variable and pass it the 'app' variable



/** Routes **/
// var router = express.Router();
// app.use('/api',router);


var routes_setter = require('./server/config/routes.js');
routes_setter(app);

app.listen(8000, function() {
  console.log("listening on port 8000");
})
