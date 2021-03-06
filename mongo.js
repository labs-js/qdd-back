#!/bin/env node
var mongoose = require('mongoose');

module.exports = function(devIP) {
    if (process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
            connection_string = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
            process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
            process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
            process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
            process.env.OPENSHIFT_APP_NAME;
        mongoose.connect('mongodb://' + connection_string); 
    }else{
        mongoose.connect('mongodb://' + devIP + '/qdd'); 
    }
}
