var React = require('react');
var Link = require('react-router').Link;
var reactor = require('../reactor');
var getters = require('../modules/peligourmet/getters');

module.exports = React.createClass({

    mixins: [reactor.ReactMixin],

    getDataBindings: function () {
        return {
            annonces: getters.annonces,
        }
    },

    render: function () {
        return (
            <div>
                <div>List annonces</div>
                {this.state.annonces.map(function (annonce) {
                    return (
                        <Link key={annonce.get('id')} to={'annonces/:id'} params={{id: annonce.get('id')}}>{annonce.get('name')}</Link>
                    );
                })}
            </div>
        );
    }
});
