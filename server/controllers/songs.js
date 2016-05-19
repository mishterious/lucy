var mongoose = require('mongoose');
var Song = mongoose.model('Song');
var User = mongoose.model('User');

module.exports = (function(){
	return { 

	getPlaylist: function(req,res){
		console.log(req.params.id);
		Song.find({mood : req.params.id}, function(err, songs){
			if(err){
				// console.log(err);
			} else {

				console.log(songs);

				var playlists = {
					playlist : songs
				};
				
				// foreach playlist in playlists

				// for(var i=0; i<songs.length; i++){
				// 	playlists += songs[i];
				// }

				// console.log(playlists);


				return res.json(playlists);
			}
		});
	},

	getSongbyId: function(req, res){
		Song.findOne({_id: req.params.id}, function(err, song){
			if(err){
				console.log(err);
			} else {
				console.log(song);
				return song;
			}
		});

	},


	getFav: function(req, res){
		User.findOne({username: req.body.username}, function(err, user){
			console.log(user.fav_songs);

			var all_songs = [];
			if(user.fav_songs.length > 0){
				for(var i=0; i<user.fav_songs.length; i++){
					Song.findOne({_id:user.fav_songs[i]}, function(err, song){
						var songArr = [];
						songArr.push(song.title);
						songArr.push(song.artist);
						songArr.push(song.genre);
						songArr.push(song.mood);
						songArr.push(song._id);
						all_songs.push(songArr);
					});
				}
				return all_songs;
			}
		});
	},

	getAllSongs: function(req, res){
		Song.find({}, function(err, songs){
			if(err)
			{
				console.log("couldn't do it");
			}
			else
			{
				console.log("Found him");
				console.log(songs);
				// res.json(songs);
				return res.render("users", {songs: songs})
			}
		});
	},

	getAllSongs2: function(req, res) {
		Song.find({}, function(err, songs) {
			if(err) {
				console.log(err);
			} else {
				console.log(songs);
			}
		})
	},

	createSong: function(req, res){
		Song.findOne({title: req.body.title, artist: req.body.artist}, function(err, song){
			if(!song){
				var song = new Song ({
					artist : req.body.artist,
					title : req.body.title,
					genre : req.body.genre,
					mood : req.body.mood,
					favorited : false
				});

				song.save(function(err, song){
					if(err){
						console.log('sumthin wong');
					} else {
						console.log('we did it!');
						return song;
					}
				});
			}

		});
	},

	updateSong: function(req, res){

		Song.update({_id: req.params.id}, {$set:{genre:req.body.genre, mood: req.body.mood}}, {upsert:true}, function(err, song){
			if(err)
			{
				console.log(err);
			} else {
			console.log(song);
			}
		});

	}
}
})();

