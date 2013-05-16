
/*
 * GET users listing.
 */

exports.list = function(req, res){
	console.log("Got to list")
  	res.send(200, {msg: "Hey there!"});
};