var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({

    render: function () {
        return (
            <div className="homePanel">
                <div className="homePanel-text">
                    Etiam euismod malesuada cursus. Suspendisse vel tincidunt quam, porta sollicitudin enim.
                </div>
                <div className="homePanel-cta">
                    <Link to="login">Je suis un pelicab</Link>
                </div>
            </div>
        );
    }
});
