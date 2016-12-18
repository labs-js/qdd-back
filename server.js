#!/bin/env node

var express = require('express'),
    app = express(),
    port = process.env.OPENSHIFT_NODEJS_PORT || 8089,
    router = express.Router(),
    mongoose = require('mongoose'),
    serverIP = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
    mongo = require('./mongo'); 
//DB

mongo(serverIP);
//mongoose.connect('mongodb://' + serverIP + '/qdd')

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /qdd
app.use('/qdd', router);

require('./routes/routes')(router);

// START THE SERVER
// =============================================================================
app.listen(port, serverIP, function(){
 console.log('%s: Node server started on %s:%d ...',
                        Date(Date.now() ), serverIP, port);
});
