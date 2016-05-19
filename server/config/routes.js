// here we load the Quote model that we created on the server.js page
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Song = mongoose.model('Song');
var songs = require('../controllers/songs.js');
var users = require('../controllers/users.js');

module.exports = function(app) {

  app.get('/', function (req, res) {
    res.render("index");
  });

  app.post('/createUser', function (req, res) {
      console.log("here");
      users.create(req,res); 
  });

  app.get("/users", function (req, res) {
      users.getallUsers(req,res);
  });

  app.post('/login', function (req, res) {
      users.login(req,res);
  });

  app.get("/users/:id", function (req, res) {
      console.log("The user id requested is:", req.params.id);
      res.send("You requested the user with id: " + req.params.id);
  });

  app.post("/songs/:id", function (req, res) {
      songs.addFav(req,res);
  });
  
  app.get("/getAllSongs", function (req, res) {
      var sing = songs.getAllSongs(req, res);
      console.log(sing);
  });

  app.get("/playlist/:id", function (req, res) {
      songs.getPlaylist(req, res);
      // console.log(res);
  });

  app.post("/createSong", function (req,res) {
      songs.createSong(req,res);
      res.redirect("/");
  });

}