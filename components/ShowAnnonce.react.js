var React = require('react');
var Link = require('react-router').Link;
var getters = require('../modules/peligourmet/getters');
var reactor = require('../reactor')

module.exports = React.createClass({

    render: function () {
        var annonce = reactor.evaluate(getters.getAnnonceById(this.props.params.id));
        return (
            <div>Show Annonce</div>
        );
    }
});
