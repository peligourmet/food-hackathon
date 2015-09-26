var reactor = require('../../reactor');
var actionTypes = require('./actionTypes');
var getters = require('./getters');
var request = require('superagent-bluebird-promise');

module.exports = {
    createAnnonce: createAnnonce,
};

function createAnnonce(annonce) {
    request
        .post('http://localhost:3000/api/announces')
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
