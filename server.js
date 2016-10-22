//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

//Set up the Express app

var app = express();
var PORT = 8080;

//Starts servers to being listening
app.listen(PORT, function () {
	console.log('App listening on PORT ' + PORT);
});

//Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

//Table Data
var currentReservations = 0;

var reservation = [];

var waitingList = [];


//Routes

app.get('/', function (req, res) {
	res.sendFile(path.join(__dirname, 'index.html'));
});

//Revise when frontend is done
app.get('/reserve', function (req, res) {
	res.sendFile(path.join(__dirname, 'reserve.html'));
});

//Revise when frontend is done
app.get('/tables', function (req, res) {
	res.sendFile(path.join(__dirname, 'tables.html'));
});

app.post('/reserve', function (req, res){
	if (currentReservations < 4){
		var newReservation = req.body;

		
		console.log(newReservation);

		reservation.push(newReservation);

		res.json(newReservation);

		currentReservations++;
	}
	else{
		var newwaitinglist = req.body;
		
		console.log(newwaitinglist);

		waitinglist.push(newwaitinglist);

		res.json(newwaitinglist);
	}
});