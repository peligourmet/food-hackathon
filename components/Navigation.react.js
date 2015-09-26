var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({

    render: function () {
        return (
            <div className="header">
                <span className="logo">Logo</span>
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
                        <Link to="login">Login</Link>
                    </li>
                </ul>
            </div>
        );
    }
});
