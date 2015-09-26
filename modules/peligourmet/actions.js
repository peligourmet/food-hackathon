var reactor = require('../../reactor');
var actionTypes = require('./actionTypes');
var getters = require('./getters');
var request = require('superagent-bluebird-promise');

module.exports = {
    createAnnonce: createAnnonce,
    fetchAnnonces: fetchAnnonces,
};

function createAnnonce(annonce) {
    request
        .post(process.env.APP_URL + '/api/announces')
        .send(annonce)
        .then(
            function (response) {
                console.log(response);
                reactor.dispatch(actionTypes.CREATE_ANNONCE, response.body);
            },
            function (error) {
                console.log(error);
            }
        );
}

function fetchAnnonces() {
    request
        .get(process.env.APP_URL + '/api/announces')
        .then(
            function (response) {
                console.log(response);
                reactor.dispatch(actionTypes.RECEIVE_ANNONCES, response.body);
            },
            function (error) {
                console.log(error);
            }
        );
}
