var toImmutable = require('nuclear-js').toImmutable;
var Store = require('nuclear-js').Store;

var CREATE_ANNONCE = require('../actionTypes').CREATE_ANNONCE;
var RECEIVE_ANNONCES = require('../actionTypes').RECEIVE_ANNONCES;

module.exports = new Store({
    getInitialState: function () {
        return toImmutable({
            "3": {
                uuid: 3,
                product_type: "Pommes bio",
                farm_location: "Bordeaux",
                pickup_time: "lundi 3 octobre",
                description: "Je vais chez mes parents ce week-end, je peux ramener quelques kilos de pommes. Je ne sais pas trop quelle est la variété mais elles sont très bonnes."
            },
            "4": {
                uuid: 4,
                product_type: "Pommes bio",
                farm_location: "Bordeaux",
                pickup_time: "lundi 3 octobre",
                description: "Je vais chez mes parents ce week-end, je peux ramener quelques kilos de pommes. Je ne sais pas trop quelle est la variété mais elles sont très bonnes."
            },
            "5": {
                uuid: 5,
                product_type: "Pommes bio",
                farm_location: "Bordeaux",
                pickup_time: "lundi 3 octobre",
                description: "Je vais chez mes parents ce week-end, je peux ramener quelques kilos de pommes. Je ne sais pas trop quelle est la variété mais elles sont très bonnes."
            },
            "6": {
                uuid: 6,
                product_type: "Pommes bio",
                farm_location: "Bordeaux",
                pickup_time: "lundi 3 octobre",
                description: "Je vais chez mes parents ce week-end, je peux ramener quelques kilos de pommes. Je ne sais pas trop quelle est la variété mais elles sont très bonnes."
            },
            "7": {
                uuid: 7,
                product_type: "Pommes bio",
                farm_location: "Bordeaux",
                pickup_time: "lundi 3 octobre",
                description: "Je vais chez mes parents ce week-end, je peux ramener quelques kilos de pommes. Je ne sais pas trop quelle est la variété mais elles sont très bonnes."
            }
        });
    },

    initialize: function () {
        this.on(CREATE_ANNONCE, createAnnonce);
        this.on(RECEIVE_ANNONCES, receiveAnnonces);
    }
});

function createAnnonce(state, annonce) {
    return state.set(annonce.uuid, toImmutable(annonce));
}

function receiveAnnonces(state, annonces) {
    var newAnnonces = toImmutable(annonces)
        .toMap()
        .mapKeys(function (k, v) {
            return v.get('uuid');
        });
    return state.merge(newAnnonces);
}
