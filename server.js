var express = require('express');
var app = express();
bodyParser = require('body-parser'),
// creating a server

app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(request, response){
	response.sendFile('views/index.html' , { root : __dirname});
	// setting the root directory
});

var Tunely = require('./models');
var controllers = require('./controllers')


// index would be for the index function in the controller
app.get('/api', controllers.api.index);

app.get('/api/albums', controllers.albums.index);

// app.post('/api/albums', function(request, response){
// 	response.send('got post to work');
// })

// create would be for the create function in the controller and then exported
app.post('/api/albums', controllers.albums.create);









var server = app.listen(3000)
// can use app.listen(3000)