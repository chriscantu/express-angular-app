var ghm = require('github-flavored-markdown')

exports.list = function( req, res ) {
	var entry = { 
		title: "Hello",
		body: "#####Subtitle \nThis is just a test",
		dateCreated: new Date(),
		lastUpdated: new Date(),
		isPublic: true,
		isMarkdown: true
	}

	entry.body = ( entry.isMarkdown ) ? ghm.parse( entry.body ) : entry.body;

	res.json(200, [ entry ]);
}