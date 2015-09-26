var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;

var App = require('./App.react');
var Home = require('./Home.react');

module.exports = (
    <Route handler={App}>
        <DefaultRoute name="home" handler={Home} />
    </Route>
);
