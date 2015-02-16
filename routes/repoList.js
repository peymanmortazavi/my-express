var url = require('url')

module.exports = function(app) {
	
	app.get('/repositories', function (request, response) {
		
		var id = url.parse(request.url, true).query.id;

		if(!id){

			app.db.get('repos').find({}, function (error, repos) {

				response.render('repoList.jade', {

					repos: repos

		        });
				
			});

		} else {

			app.db.get('repos').findOne({"id": parseInt(id)}, function (error, repo) {
			
			response.render('repoView.jade', {

				repo: repo

	        });
			
		});
		}
		
	});
	
};