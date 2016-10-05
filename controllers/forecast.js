// Requiring node package modules
var express = require('express');
var request = require('request');
var isValidZip = require('is-valid-zip');
var zipcodes = require('zipcodes');

// Express routing
var router = express.Router();

// Our API key
var key = process.env.MY_SECRET_KEY;

router.route('/:zipcode')
  .get(function(req, res) {
    // Get our zipcode out of the parameters
    var zip = parseInt(req.params.zipcode);

    // Check if our zipcode is valid
    if (isValidZip(zip)) {

      // Then we need to convert our ZIP code to latitude and longitude
      var data = zipcodes.lookup(zip);
      var lat = data.latitude,
          long = data.longitude;

      // Cleaning this up a little by giving our API URL a variable name
      var zipCodeUrl = 'https://api.darksky.net/forecast/' + key + '/' + lat + ',' + long;

      // Our API call
      request(zipCodeUrl, function(error, response, body) {

        // Check for error
        if (error) {return alert('An error occurred.');}

        // Check for the right status code
        if (response.statusCode !== 200) {
          return console.log('Bad status code returned: ', response.statusCode);
        }

        // Send the content back to the front end
        res.send(body);
      });
    }
  });

  module.exports = router;