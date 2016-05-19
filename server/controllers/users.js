var mongoose = require('mongoose');
var User = mongoose.model('User');

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
     			return res.send('User data is incorrect');

     		}else{
      			return res.send('Logged In!');
      		} 
		});	
	},

	create: function(req,res){
		console.log("in create")
		User.findOne({username: req.body.username}, function (err, founduser){

			if(!founduser){
				console.log("didn;t find anyone")
				var user = new User ({
					username : req.body.username, 
					password: req.body.password
		  		});

		  		user.save(function(err, user){
					if(err){
						console.log('something went wrong');
					} else {
						console.log('we did it!');

						// console.log(user);
						return user;
					}
				});

			} else{
				console.log("Account already exists!")
			}
    	
    	});	
	}

	} 	
})();

