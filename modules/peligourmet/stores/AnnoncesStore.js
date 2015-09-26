var toImmutable = require('nuclear-js').toImmutable;
var Store = require('nuclear-js').Store;

module.exports = new Store({
    getInitialState: function () {
        return toImmutable({
            "3": {
                id: 3,
                name: "Pommes bio",
                city: "Bordeaux",
                date: "Lundi 3 octobre"
            },
            "4": {
                id: 4,
                name: "Pommes bio",
                city: "Bordeaux",
                date: "Lundi 3 octobre"
            },
            "5": {
                id: 5,
                name: "Pommes bio",
                city: "Bordeaux",
                date: "Lundi 3 octobre"
            },
            "6": {
                id: 6,
                name: "Pommes bio",
                city: "Bordeaux",
                date: "Lundi 3 octobre"
            },
            "7": {
                id: 7,
                name: "Pommes bio",
                city: "Bordeaux",
                date: "Lundi 3 octobre"
            }
        });
    },

    initialize: function () {
    }
});
