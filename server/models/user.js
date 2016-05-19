// require mongoose
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
// create the schema
var UserSchema = new mongoose.Schema( {
  username: String,
  password: String,
  fav_songs: Array,
  deep_house: Number,
  prog_house: Number,
  electronica: Number,
  trance: Number,
  psy: Number,
  downtempo: Number,
  classics: Number,
  hip_hop: Number,
  jazz: Number,
  total_songs: Number
});
// register the schema as a model

var User = mongoose.model('User', UserSchema);
