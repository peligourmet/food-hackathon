var getters = require('./getters');
var actions = require('./actions');

var AnnoncesStore = require('./stores/AnnoncesStore');
var LoggedInUserStore = require('./stores/LoggedInUserStore');


module.exports = {
    actions: actions,
    getters: getters,
    register: function(reactor) {
        reactor.registerStores({
            'annonces': AnnoncesStore,
            'loggedInUser': LoggedInUserStore,
        });
    }
};
