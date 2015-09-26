var React = require('react');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var Navigation = require('./Navigation.react');

module.exports = React.createClass({
    render: function () {
        return (
            <div>
                <Navigation />
                <RouteHandler />
            </div>
        );
    }
});
