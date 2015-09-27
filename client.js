var React = require('react');
var reactor = require('./reactor');
var Router = require('react-router');

var PeligourmetModule = require('./modules/peligourmet');
PeligourmetModule.register(reactor);

var App = require('./components/App.react');
var Routes = require('./components/Routes.react');

var context = JSON.parse(document.getElementById('context').textContent);
PeligourmetModule.actions.initializeAnnonces(context.announces);
window.token = context.token;
PeligourmetModule.actions.fetchAnnonces();

Router.run(Routes, Router.HistoryLocation, function (Root) {
    React.render(<Root />, document.getElementById('app'));
});
