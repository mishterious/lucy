// require mongoose
var mongoose = require('mongoose');
// create the schema
var SongSchema = new mongoose.Schema({
  artist: String,
  title: String,
  tags: Array,
  genre: String
});
// register the schema as a model

var Song = mongoose.model('Song', SongSchema);
