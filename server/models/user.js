// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create the schema
var UserSchema = new mongoose.Schema( {
  username: String,
  password: String,
  fav_songs: Array,
  tag: Array
});
// register the schema as a model

var User = mongoose.model('User', UserSchema);
