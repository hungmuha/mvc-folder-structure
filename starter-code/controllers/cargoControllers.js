var db = require ('../models');

var cargoShow = function(req,res) {
	db.Cargo.find({}, function(err, cargo){
		res.render('cargoShowAll',{cargo:cargo});
	});
}

//Cargo form
var cargoGet= function(req, res) { //look at that controller
	res.render('cargoNew'); 
};

//Add new cargo
var cargoPost = function(req, res) { //and look at that controller
	db.Cargo.create({description: req.body.description, title: req.body.title}, function(error, cargo) {
		res.render('cargoShow', {cargo: cargo});
	});
};

module.exports.cargoShow=cargoShow;
module.exports.cargoGet =cargoGet;
module.exports.cargoPost=cargoPost;