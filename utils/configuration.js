var charmander = require('charmander-injector')
var packageJSON = charmander.register('packageJSON', require('../../package.json'));

var configuration = {};

configuration.getInfo = function(key){
   console.log('packageJSON', packageJSON);
   return packageJSON[key];
}

module.exports = charmander.inject(['packageJSON'], 
    function(packageJSON){ 
        return {
            getInfo: function(key){
                return packageJSON[key]; 
            } 
        } 
    
    
        function _internal(otherdependency){}

    }
)(); 

