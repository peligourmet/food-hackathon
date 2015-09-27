var reactor = require('../../reactor');
var actionTypes = require('./actionTypes');
var getters = require('./getters');
var request = require('superagent-bluebird-promise');

module.exports = {
    createAnnonce: createAnnonce,
    fetchAnnonces: fetchAnnonces,
    publishAnnonce: publishAnnonce,
    initializeAnnonces: initializeAnnonces,
    login: login,
};

function initializeAnnonces(annonces) {
    reactor.dispatch(actionTypes.RECEIVE_ANNONCES, annonces);
}

function createAnnonce(annonce) {
    reactor.dispatch(actionTypes.CREATE_ANNONCE, annonce);
    request
        .post(process.env.APP_URL + '/api/announces')
        .send(annonce)
        .then(
            function (response) {
                console.log(response);
            },
            function (error) {
                console.log(error);
            }
        );
}

function publishAnnonce(annonceUuid, emails, message) {
    request
        .post(process.env.APP_URL + '/api/share-announce')
        .send({
            announceUuid: annonceUuid,
            emails: emails,
            message: message,
        })
        .then(
            function (response) {
                console.log(response);
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

function login(user) {
    reactor.dispatch(actionTypes.LOGIN, user);
}
