var getters = require('./getters');
var actions = require('./actions');

var AnnoncesStore = require('./stores/AnnoncesStore');


module.exports = {
    actions: actions,
    getters: getters,
    register: function(reactor) {
        reactor.registerStores({
            'annonces': AnnoncesStore,
        });
    }
};
