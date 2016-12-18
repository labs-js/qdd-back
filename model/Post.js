var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var postSchema = new Schema({
    title: {
        type: String,
        require: true
    },
    text: {
        type: String,
        require: true
    },
    date: String,
    tags: Array
});

var Post = mongoose.model('post', postSchema);

module.exports = Post;
