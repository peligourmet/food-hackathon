var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('./App.react');
var Home = require('./Home.react');
var Login = require('./Login.react');
var ListAnnonces = require('./ListAnnonces.react');
var CreateAnnonce = require('./CreateAnnonce.react');
var ShowAnnonce = require('./ShowAnnonce.react');
var Payment = require('./Payment.react');

module.exports = (
    <Route handler={App}>
        <DefaultRoute name="home" handler={Home} />
        <Route name="login" handler={Login}/>
        <Route name="annonces" handler={ListAnnonces}/>
        <Route name="annonces/create" handler={CreateAnnonce} />
        <Route name="annonces/:uuid" handler={ShowAnnonce} />
        <Route name="payment/token" handler={Payment} />
    </Route>
);
