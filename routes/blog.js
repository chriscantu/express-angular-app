exports.list = function( req, res ) {
	res.json(200, [
			{ 
				title: "Hello",
				body: "This is my body",
				dateCreated: new Date(),
				lastUpdated: new Date(),
				isPublic: true,
				isMarkdown: false
			}
		]);
}