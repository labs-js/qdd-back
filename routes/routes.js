var postHandler = require('./postHandler'); 

module.exports = function posts(router){
  router.get('/posts/getall', postHandler.getAll);  
}
