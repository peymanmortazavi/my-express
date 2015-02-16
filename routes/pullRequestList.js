var url = require('url')

module.exports = function(app) {
	
	app.get('/pullrequests', function (request, response) {
		
		var id = url.parse(request.url, true).query.id;

		if(!id){
			app.db.get('pulls').find({}, function (error, pulls) {

				response.render('pullRequestList.jade', {

					pulls: pulls

		        });
				
			});
		} else {

			app.db.get('pulls').findOne({"id": parseInt(id)}, function (error, pull) {
			
			response.render('pullRequestView.jade', {

				pull: pull

	        });
			
		});
		}
		
	});
	
};