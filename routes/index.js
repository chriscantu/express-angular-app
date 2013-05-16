
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index.html', {title: 'Express Blog'});
};

exports.login = function(req, res) {
	console.log(req)
	res.send(200, {test:"name"});
}