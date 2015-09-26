var toImmutable = require('nuclear-js').toImmutable;
var Store = require('nuclear-js').Store;

var CREATE_ANNONCE = require('../actionTypes').CREATE_ANNONCE;

module.exports = new Store({
    getInitialState: function () {
        return toImmutable({
            "3": {
                uuid: 3,
                product_type: "Pommes bio",
                farm_location: "Bordeaux",
                pickup_time: "Lundi 3 octobre"
            },
            "4": {
                uuid: 4,
                product_type: "Pommes bio",
                farm_location: "Bordeaux",
                pickup_time: "Lundi 3 octobre"
            },
            "5": {
                uuid: 5,
                product_type: "Pommes bio",
                farm_location: "Bordeaux",
                pickup_time: "Lundi 3 octobre"
            },
            "6": {
                uuid: 6,
                product_type: "Pommes bio",
                farm_location: "Bordeaux",
                pickup_time: "Lundi 3 octobre"
            },
            "7": {
                uuid: 7,
                product_type: "Pommes bio",
                farm_location: "Bordeaux",
                pickup_time: "Lundi 3 octobre"
            }
        });
    },

    initialize: function () {
        this.on(CREATE_ANNONCE, createAnnonce);
    }
});

function createAnnonce(state, annonce) {
    return state.set(annonce.uuid, toImmutable(annonce));
}
