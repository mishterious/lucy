// here we load the Quote model that we created on the server.js page
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Song = mongoose.model('Song');
var songs = require('../controllers/songs.js');
var users = require('../controllers/users.js');

module.exports = function(app) {

  app.get('/', function (req, res) {
    // console.log("123123123");
    res.render("index");
  });

  app.post('/createUser', function (req, res) {
      users.create(req,res);
      console.log("hello there");
      res.redirect('/');
  });

  app.get("/users", function (req, res) {
    console.log("Came here from BRO1234433KEN");
    // users.getallUsers(req,res);
  });

  app.post('/login', function (req, res) {
      console.log("in the server");
      users.login(req,res);
  });

  app.get("/users/:id", function (req, res) {
      console.log("The user id requested is:", req.params.id);
      // just to illustrate that req.params is usable here:
      res.send("You requested the user with id: " + req.params.id);
      // code to get user from db goes here, etc...
  });

  app.post("/songs/:id", function (req, res) {
      songs.addFav(req,res);
  });
  
  app.get("/songs", function (req, res) {
      songs.getFav(req, res);
  });

  app.get("/playlist/:id", function (req, res) {
      songs.getPlaylist(req, res);
      console.log(res);
  });

  app.post("/createSong", function (req,res) {
      songs.createSong(req,res);
  });

}