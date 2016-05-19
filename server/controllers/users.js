var mongoose = require('mongoose');
var User = mongoose.model('User');
var Song = mongoose.model('Song');

module.exports = (function() {
	return {

	getAllUsers: function(req, res){
	console.log('in the get function');
      // hard-coded user data
      
	    User.find({}, function(err, users) {
	      	if(err){
	      		console.log(err);
	     }else{
	      	console.log(users);
	    }
    // this is the method that finds all of the users from the database
    // notice how the first parameter is the options for what to find and the second is the callback function that has an error (if any) and all of the users
    // keep in mind that everything you want to do AFTER you get the users from the database must happen inside of this callback for it to be synchronous 
    // Make sure you handle the case for when there is an error as well as the case for when there is no error
  		});	
 	},

	login: function(req,res){
		console.log(req.body);
		console.log(req.body);
		User.findOne({username: req.body.username, password: req.body.password}, function(err, user){
			if(!user){ 
     			return res.send('0');

     		}else{
      			return res.send(user.username);
      		} 
		});	
	}, 

	addFav: function(req,res){


		User.findOne({username: req.body.username}, function(err, user){
			if(err){
				console.log("errored early")
				console.log(err);
			} else {
				console.log("made it into else")
				console.log(user);
				console.log(req.body);
				if (req.body.song_genre == "Deep House")
				{
					if(user.deep_house === undefined) { user.deep_house = 0; } 
					user.deep_house += 1;
				} else if (req.body.song_genre == "Progressive House")
				{
					if(user.prog_house === undefined) { user.prog_house = 0; } 
					user.prog_house += 1;
				} else if (req.body.song_genre == "Electronica")
				{
					if(user.electronica === undefined) { user.electronica = 0; } 
					user.electronica += 1;
				} else if (req.body.song_genre == "Trance")
				{
					if(user.trance === undefined) { user.trance = 0; } 
					user.trance += 1;
				} else if (req.body.song_genre == "Psy")
				{
					if(user.psy === undefined) { user.psy = 0; } 
					user.psy += 1;
				} else if (req.body.song_genre == "Downtempo")
				{
					if(user.downtempo === undefined) { user.downtempo = 0; } 
					user.downtempo += 1;
				} else if (req.body.song_genre == "Classics")
				{
					if(user.classics === undefined) { user.classics = 0; } 
					user.classics += 1;
				} else if (req.body.song_genre == "Hip Hop")
				{
					if(user.hip_hop === undefined) { user.hip_hop = 0; } 
					user.hip_hop += 1;
				} else if (req.body.song_genre == "Jazz")
				{
					if(user.jazz === undefined) { user.jazz = 0; } 
					user.jazz += 1;
				}
				user.total_songs += 1;

				console.log("your mom");

				User.update({username: req.body.username}, {$push:{fav_songs:req.body.song_id}}, {upsert:true}, function(err, user){
					if(err)
					{
						console.log(err);
					} else {
					console.log(user);
					// user.fav_songs.push(req.params.id);
					// var update = user.tag.push(tag);
					}
				});

				User.update({username: req.body.username}, {

					deep_house: user.deep_house,
					prog_house: user.prog_house,
					electronica: user.electronica,
					trance: user.trance,
					psy: user.psy,
					downtempo: user.downtempo,
					classics: user.classics,
					hip_hop: user.hip_hop,
					jazz: user.jazz,
					total_songs: user.total_songs

					}, {upsert:true}, function(err, user){
					if(err)
					{
						console.log(err);
					} else {
					console.log(user);
					// user.fav_songs.push(req.params.id);
					// var update = user.tag.push(tag);
					}
				});
			}
		});
		
	},

	deleteFav: function(req,res){


		User.findOne({username: req.body.username}, function(err, user){
			if(err){
				console.log("errored early")
				console.log(err);
			} else {
				console.log("made it into else")
				console.log(user);
				console.log(req.body);
				if (req.body.song_genre == "Deep House")
				{
					if(user.deep_house === undefined) { user.deep_house = 0; }
					user.deep_house -= 1;
				} else if (req.body.song_genre == "Progressive House")
				{
					if(user.prog_house === undefined) { user.prog_house = 0; }
					user.prog_house -= 1;
				} else if (req.body.song_genre == "Electronica")
				{
					if(user.electronica === undefined) { user.electronica = 0; }
					user.electronica -= 1;
				} else if (req.body.song_genre == "Trance")
				{
					if(user.trance === undefined) { user.trance = 0; }
					user.trance -= 1;
				} else if (req.body.song_genre == "Psy")
				{
					if(user.psy === undefined) { user.psy = 0; }
					user.psy -= 1;
				} else if (req.body.song_genre == "Downtempo")
				{
					if(user.downtempo === undefined) { user.downtempo = 0; }
					user.downtempo -= 1;
				} else if (req.body.song_genre == "Classics")
				{
					if(user.classics === undefined) { user.classics = 0; }
					user.classics -= 1;
				} else if (req.body.song_genre == "Hip Hop")
				{
					if(user.hip_hop === undefined) { user.hip_hop = 0; }
					user.hip_hop -= 1;
				} else if (req.body.song_genre == "Jazz")
				{
					if(user.jazz === undefined) { user.jazz = 0; }
					user.jazz -= 1;
				}
				user.total_songs -= 1;

				console.log("your mom");

				User.update({username: req.body.username}, {$pull:{fav_songs:req.body.song_id}}, {upsert:true}, function(err, user){
					if(err)
					{
						console.log(err);
					} else {
					console.log(user);
					// user.fav_songs.push(req.params.id);
					// var update = user.tag.push(tag);
					}
				});

				User.update({username: req.body.username}, {

					deep_house: user.deep_house,
					prog_house: user.prog_house,
					electronica: user.electronica,
					trance: user.trance,
					psy: user.psy,
					downtempo: user.downtempo,
					classics: user.classics,
					hip_hop: user.hip_hop,
					jazz: user.jazz,
					total_songs: user.total_songs

					}, {upsert:true}, function(err, user){
					if(err)
					{
						console.log(err);
					} else {
					console.log(user);
					// user.fav_songs.push(req.params.id);
					// var update = user.tag.push(tag);
					}
				});
			}
		});
	},

	getFavs: function(req,res) {
		User.findOne({username: req.body.username}, function (err, foundUser) {
			console.log(foundUser.fav_songs);

			var favs_list = {
				list : foundUser.fav_songs
			}

			return res.json(favs_list);
		});
	},

	create: function(req,res){
		console.log("in create")
		User.findOne({username: req.body.username}, function (err, founduser){
			console.log(req.body.username);
			if(!founduser){
				console.log("didn;t find anyone")
				var user = new User ({
					username : req.body.username, 
					password: req.body.password,
					deep_house: 0,
					prog_house: 0,
					electronica: 0,
					trance: 0,
					psy: 0,
					downtempo: 0,
					classics: 0,
					hip_hop: 0,
					jazz: 0,
					total_songs: 0
		  		});

		  		user.save(function(err, user){
					if(err){
						console.log('0');
					} else {
						console.log('we did it!');
						return res.send(user.username);
					}
				});

			} else{
				console.log("Account already exists!")
			}
    	
    	});	
	},

	getRecommendations: function(req,res){

		Q.fcall(function(error){
			console.log("1123");
		})
		.then(function(error){
			console.log("in here too");
		})
		.then(promisedStep3)
		.then(promisedStep4)
		.then(function (value4) {
		    // Do something with value4
		})
		.catch(function (error) {
		    // Handle any error from all above steps
		})
		.done();
		var rec_songs = []
		User.findOne({username: req.params.id}, function(err, user){
			console.log(user);
			
			var dh = Math.floor(10*(user.deep_house/user.total_songs));
			console.log(dh);

			var dt = Math.floor(10*(user.downtempo/user.total_songs));
			console.log(dt);

			var hh = Math.floor(10*(user.hip_hop/user.total_songs));
			console.log(hh);

			var jazz = Math.floor(10*(user.jazz/user.total_songs));
			console.log(jazz);

			var psy = Math.floor(10*(user.psy/user.total_songs));
			console.log(psy);

			var classics = Math.floor(10*(user.classics/user.total_songs));
			console.log(classics);

			var trance = Math.floor(10*(user.trance/user.total_songs));
			console.log(trance);

			var elec = Math.floor(10*(user.electronica/user.total_songs));
			console.log(elec);

			var ph = Math.floor(10*(user.prog_house/user.total_songs));
			console.log(hh);

			

			if (dh > 0)
			{
				Song.find({genre: "Deep House"}, function(err, dh_song){
					if (err)
					{
						console.log(err);
					} 
					else 
					{
						for(var i=0; i<dh; i++){
						var rand_song = Math.floor(dh_song.length*(Math.random(dh_song.length)));
						rec_songs.push(dh_song[rand_song]);
						}
					} 
					// console.log(rec_songs);
				});
			}
			if (dt > 0)
			{
				Song.find({genre: "Downtempo"}, function(err, dt_song){
					if (err)
					{
						console.log(err);
					} 
					else 
					{
						for(var i=0; i<dt; i++){
						var rand_song = Math.floor(dt_song.length*(Math.random(dt_song.length)));
						rec_songs.push(dt_song[rand_song]);
						}
				
					} 
					// console.log(rec_songs);
				});
			}
			if (hh > 0)
			{
				Song.find({genre: "Hip Hop"}, function(err, hh_song){
					if (err)
					{
						console.log(err);
					} 
					else 
					{
						for(var i=0; i<hh; i++){
						var rand_song = Math.floor(hh_song.length*(Math.random(hh_song.length)));
						rec_songs.push(hh_song[rand_song]);
						}
						
					} 
					// console.log(rec_songs);
				});
			}
			if (jazz > 0)
			{
				Song.find({genre: "Jazz"}, function(err, jazz_song){
					if (err)
					{
						console.log(err);
					} 
					else 
					{
						for(var i=0; i<jazz; i++){
						var rand_song = Math.floor(jazz_song.length*(Math.random(jazz_song.length)));
						rec_songs.push(jazz_song[rand_song]);
						}
						
					} 
					// console.log(rec_songs);
				});
			}
			if (psy > 0)
			{
				Song.find({genre: "Psy"}, function(err, psy_song){
					if (err)
					{
						console.log(err);
					} 
					else 
					{
						for(var i=0; i<psy; i++){
						var rand_song = Math.floor(psy_song.length*(Math.random(psy_song.length)));
						rec_songs.push(psy_song[rand_song]);
						}
						
					} 
					// console.log(rec_songs);
				});
			}
			if (classics > 0)
			{
				Song.find({genre: "Classics"}, function(err, classics_song){
					if (err)
					{
						console.log(err);
					} 
					else 
					{
						for(var i=0; i<classics; i++){
						var rand_song = Math.floor(classics_song.length*(Math.random(classics_song.length)));
						rec_songs.push(classics_song[rand_song]);
						}
						
					} 
					// console.log(rec_songs);
				});
			}
			if (trance > 0)
			{
				Song.find({genre: "Trance"}, function(err, trance_song){
					if (err)
					{
						console.log(err);
					} 
					else 
					{
						for(var i=0; i<trance; i++){
						var rand_song = Math.floor(trance_song.length*(Math.random(trance_song.length)));
						rec_songs.push(trance_song[rand_song]);
						}
						
					} 
					// console.log(rec_songs);
				});
			}
			if (elec > 0)
			{
				Song.find({genre: "Electronica"}, function(err, elec_song){
					if (err)
					{
						console.log(err);
					} 
					else 
					{
						for(var i=0; i<elec; i++){
						var rand_song = Math.floor(elec_song.length*(Math.random(elec_song.length)));
						rec_songs.push(elec_song[rand_song]);
						}
						
					} 
					// console.log(rec_songs);
				});
			}
			if (ph > 0)
			{
				Song.find({genre: "Progressive House"}, function(err, ph_song){
					if (err)
					{
						console.log(err);
					} 
					else 
					{
						for(var i=0; i<ph; i++){
						var rand_song = Math.floor(ph_song.length*(Math.random(ph_song.length)));
						rec_songs.push(ph_song[rand_song]);
						}
						
					} 
					// console.log(rec_songs);
				});
			}
			
			return res.json(rec_songs);
		
		});
		
	}


	} 	
})();

