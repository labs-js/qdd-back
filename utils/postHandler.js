var charmander = require('charmander-injector');
    charmander.register('request', require('request'));

module.exports = charmander.inject(['request'],
    function(request, name) {
        'use strict';
        return {
            getAll: function() {
                request
                    .get('https://api.github.com/repos/labs-js/qdd-posts/contents/posts')
                    .on('data', function(chunk) {
                        console.log(chunk);
                    })

            }

        }
    }
)();
