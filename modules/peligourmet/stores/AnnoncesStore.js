var toImmutable = require('nuclear-js').toImmutable;
var Store = require('nuclear-js').Store;

module.exports = new Store({
    getInitialState: function () {
        return toImmutable({
            "3": {
                id: 3,
                name: "Reblochon Fermier",
            }
        });
    },

    initialize: function () {
    }
});
