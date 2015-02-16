
var express = require('express');
var app = express();

// database URL
var dbUrl = 'mongodb://github:1234@ds041871.mongolab.com:41871/github';

var db = require('monk')(dbUrl);

app.db = db;

app.set('view engine', 'jade');

app.use(express.static(__dirname + '/contents'));

require('./routes/repoList')(app);
require('./routes/pullRequestList')(app);
require('./routes/index')(app);

var server = app.listen((process.env.PORT || 3000), function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Listening at http://%s:%s', host, port);
	
});