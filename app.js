var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var dbname = process.env.DBName;
var dbuser = process.env.DBUser;
var dbpass = process.env.DBPass;

var connectionString = 'mongodb://' + dbuser + ':' + dbpass + '@' + dbname + '.mongolab.com:53818/oscars';
console.log('Mongo connecting to: ' + connectionString);
mongoose.connect(connectionString);

require('./models/prenom_model.js');

var app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(__dirname + '/public/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use('/', express.static(path.join(__dirname, 'public')));

require('./routes/routes.js')(app);


module.exports = app;
