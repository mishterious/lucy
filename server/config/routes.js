// here we load the Quote model that we created on the server.js page
var mongoose = require('mongoose');
var User = mongoose.model('User');
var Song = mongoose.model('Song');
var songs = require('../controllers/songs.js');
var users = require('../controllers/users.js');

module.exports = function(app) {

  app.get('/', function (req, res) {
    res.render('index');
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

  app.post("/addFav", function (req, res) {
      users.addFav(req,res);
  });

  app.post("/deleteFav", function (req, res) {
      users.deleteFav(req,res);
  });

  app.post("/getFavs", function (req, res) {
    users.getFavs(req, res);
  });
  
  app.get("/getAllSongs", function (req, res) {
      songs.getAllSongs(req, res);
      
  });

  app.post("/getAllSongs2", function (req, res) {
    songs.getAllSongs2(req, res);
  });

  app.get("/playlist/:id", function (req, res) {
      songs.getPlaylist(req, res);
  });

  app.post("/createSong", function (req,res) {
      songs.createSong(req,res);
  });

  app.post("/addFavoriteBoolean", function(req, res) {
      songs.addFavoriteBoolean(req,res);
  });

  app.post("/updateSong/:id", function (req, res) {
      songs.updateSong(req, res);
  });

  app.get("/getRecommendations/:id", function (req, res) {
      users.getRecommendations(req, res);
  });

}