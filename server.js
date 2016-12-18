#!/bin/env node

var express = require('express'),
    app = express(),
    port = process.env.OPENSHIFT_NODEJS_PORT || 8089,
    router = express.Router(),
    mongoose = require('mongoose'),
    serverIP = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';
//DB


mongoose.connect('mongodb://' + serverIP + '/qdd');

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /qdd
app.use('/qdd', router);

require('./routes/routes')(router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);
