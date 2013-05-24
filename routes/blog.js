var Showdown = require('showdown')
var converter = new Showdown.converter();

exports.list = function( req, res ) {

	var entry = { 
		title: "Hello",
		body: "#####Subtitle \nThis is just a test",
		dateCreated: new Date(),
		lastUpdated: new Date(),
		isPublic: true,
		isMarkdown: true
	}

	entry.body = ( entry.isMarkdown ) ? converter.makeHtml( entry.body ) : entry.body;

	res.json(200, [ entry ]);
}