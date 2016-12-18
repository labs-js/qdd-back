var configuration = require('../utils/configuration'),
    Post = require('../model/Post');

const postHandler = {};

postHandler.getAll = function(req, res) {
    res.json('app working as a charm!'); 
    /*
     * 
     *Post.find({}, function(err, data) {
     *    if (err) throw err;
     *    console.log('new request:', new Date(), data);
     *    // object of all the users
     *    res.json(data);
     *});
     */
}

module.exports = postHandler;
