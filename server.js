var express = require('express');
var cors = require('cors');
var app = express();
var bodyParser = require('body-parser');
var config = require('./config');
var mongoose = require('mongoose');
var api = require('./app/routes/api')(app, express);

var middleware = require('./app/middleware/middleware');

mongoose.connect('mongodb://localhost:27017/ecommerce/products', function (err) {
	if (err)
		console.log(err);
	console.log('connected to database');
});

var http = require('http').Server(app);

app.use(bodyParser.urlencoded({
	extended: true
}))
app.use(bodyParser.json());

app.use(cors());

app.use('/', express.static(__dirname + "/public/dist"));


app.use('/api', api);

// app.get('*',function(req,res,next) {
// 	res.sendFile(__dirname+"/public/index.html");
// });

http.listen(config.port || 3000);
console.log('listening on port 3000');