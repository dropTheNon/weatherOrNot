// Requiring our npm's
var express = require('express');
var path = require('path');
var isValidZip = require('is-valid-zip');
var zipcodes = require('zipcodes');

// Getting things set "app", hur hur hur  :)
var app = express();

// Serving static files
app.use(express.static(path.join(__dirname, 'public')));

// Requiring our back-end controller
app.use('/api', require('./controllers/forecast'));

// Using a wildcard to catch all other routes
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'public/index.html'));
});

// Setting server to PORT or local
var server = app.listen(process.env.PORT || 3000);

// Exporting server
module.exports = server;