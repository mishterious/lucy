// require mongoose
var mongoose = require('mongoose');
// create the schema
var SongSchema = new mongoose.Schema({
  artist: String,
  title: String,
  mood: String,
  genre: String,
  tag: Array,
  favorited: Boolean
});
// register the schema as a model

var Song = mongoose.model('Song', SongSchema);
