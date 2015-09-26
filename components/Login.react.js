var React = require('react');
var Router = require('react-router');
var addons = require('react-addons');
var Link = require('react-router').Link;

var Peligourmet = require('../modules/peligourmet');
var actions = Peligourmet.actions;

module.exports = React.createClass({
    mixins: [addons.LinkedStateMixin, Router.Navigation ],

    getInitialState: function () {
        return {};
    },

    submit: function (e) {
        e.preventDefault();
        actions.login(this.state);
        this.transitionTo('annonces/create');
    },

    render: function () {
        return (
            <div>
                <div className="pageHeader">S'enregister</div>
                <div className="main">
                    <form>
                        <p>
                            <label>Nom et Prénom</label><input type='text' valueLink={this.linkState('name')} />
                        </p>
                        <p>
                            <label>Email</label><input type='text' valueLink={this.linkState('email')} />
                        </p>
                        <button onClick={this.submit} type='submit'>S'enregister</button>
                    </form>
                </div>
            </div>
        );
    }
});
