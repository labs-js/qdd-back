var charmander = require('charmander-injector');
    charmander.registerMock('packageJSON', {'testKey': 'test value'});

var configuration = require('../../utils/configuration');

describe('utils configuration', function(){
    
    describe('getInfo' , function(){
        
        it('is defined', function(){

            expect(configuration.getInfo).toBeDefined();
        }); 

        it('get value for key' , function(){
            expect(configuration.getInfo('testKey')).toEqual('test value');

        });
    
    });
});
