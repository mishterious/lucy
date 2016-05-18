var mongoose = require('mongoose');
var Song = mongoose.model('Song');
var User = mongoose.model('User');

module.exports = {

	getPlaylist: function(req,res){
		Song.find({tag : req.body.tag}, function(err, songs){
			if(err){
				console.log(err);
			} else {

				console.log(songs);
				return songs;
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

	getRecommendedSongs: function(req,res){
		User.findOne({username: req.body.username}, function(err, user){
			console.log(user);

			var genres = [0,0,0,0,0]
			for(var i=0; i<user.tags.length; i++){
				if(user.tags == 1){
					genres[0] += 1
				}
				if(user.tags == 2){
					genres[1] += 1
				}
				if(user.tags == 3){
					genres[2] += 1
				}
				if(user.tags == 4){
					genres[3] += 1
				}
				if(user.tags == 5){
					genres[4] += 1
				}
			}

			for(var i=0; i<genres.length; i++){
				genres[i] = Math.floor(genres[i] / user.tags.length);
			}
			console.log(genres);

			// process and send recommendations
		});
	},


	addFav: function(req,res){
		var tag; 
		Song.findOne({_id: req.params.id}, function(err, song){
			if(err){
				console.log(err);
			} else {
				console.log(song);
				tag = song.tag;
			}
		});

		req.body.username = "123";
		console.log(req.body.username);
		User.findOne({username: req.body.username}, function(err, user){
			user.fav_songs.push(req.params.id);
			user.tag.push(tag);
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
						songArr.push(song._id);
						all_songs.push(songArr);
					});
				}
				return all_songs;
			}
		});
	},

	createSong: function(req, res){
		Song.findOne({title: req.body.title, artist: req.body.artist}, function(err, song){
			if(!song){
				var song = new Song ({
					artist : req.body.artist,
					title : req.body.title,
					genre : req.body.genre
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
	}



}