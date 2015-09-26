var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({

    render: function () {
        var navItems = [
            { path: 'home', displayName: 'Accueil' }
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
