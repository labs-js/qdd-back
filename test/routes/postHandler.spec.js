var charmander = require('charmander-injector');
var postHandler = require('../../routes/postHandler');

describe('postHandler', function(){
    it('get posts from github' , function(){
        console.log(postHandler);
        postHandler.getAll(); 
    })

})
