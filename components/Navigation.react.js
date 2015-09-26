var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({

    render: function () {
        var navItems = [
            { path: 'home', displayName: 'Accueil' },
            { path: 'login', displayName: 'Login' },
            { path: 'annonces/create', displayName: 'Créer une annonce' },
            { path: 'annonces', displayName: 'Voir les annonces' },
            { path: 'payment/token', displayName: 'Payer' },
        ];
        return (
            <nav className="navigation">
                <ul>
                    {navItems.map(function (navItem) {
                        return (
                            <li key={navItem.path}>
                                <Link to={navItem.path}>{navItem.displayName}</Link>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        );
    }
});
