var express = require('express');
var app = express();
// creating a server

app.use(express.static('public'));

app.get('/', function(request, response){
	response.sendFile('views/index.html' , { root : __dirname});
	// setting the root directory
});

var Tunely = require('./models');
var controllers = require('./controllers')

app.get('/api', controllers.api.index);

app.get('/api/albums', controllers.albums.index);









var server = app.listen(3000)
// can use app.listen(3000)