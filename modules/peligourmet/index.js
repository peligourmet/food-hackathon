var getters = require('./getters');
var actions = require('./actions');

var CurrentUserStore = require('./stores/CurrentUserStore');

module.exports = {
    actions: actions,
    getters: getters,
    register: function(reactor) {
        reactor.registerStores({
            'currentUser': CurrentUserStore,
        });
    }
};
