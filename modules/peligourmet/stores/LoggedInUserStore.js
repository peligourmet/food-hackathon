var toImmutable = require('nuclear-js').toImmutable;
var Store = require('nuclear-js').Store;

var LOGIN = require('../actionTypes').LOGIN;

module.exports = new Store({
    getInitialState: function () {
        return null;
    },

    initialize: function () {
        this.on(LOGIN, login);
    }
});

function login(state, user) {
    return toImmutable(user);
}
