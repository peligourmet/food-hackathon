var React = require('react');
var Link = require('react-router').Link;
var reactor = require('../reactor');
var getters = require('../modules/peligourmet/getters');

module.exports = React.createClass({
    mixins: [reactor.ReactMixin],

    getDataBindings: function () {
        return {
            user: getters.loggedInUser,
        }
    },

    render: function () {
        var loginButton;
        if (null === this.state.user) {
            loginButton = <Link to="login">Se connecter</Link>;
        } else {
            loginButton = <a>{this.state.user.get('name')}</a>;
        }
        return (
            <div className="header">
                <Link to="home" className="logo">
                    <img src="/images/peligourmet-logo.svg"/>
                </Link>
                <ul className="leftNavigation">
                    <li>
                        <Link to="annonces">Les annonces</Link>
                    </li>
                    <li>
                        <Link to="annonces/create">Poster une annonce</Link>
                    </li>
                </ul>
                <ul className="rightNavigation">
                    <li>
                        {loginButton}
                    </li>
                </ul>
            </div>
        );
    }
});
