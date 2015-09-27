var React = require('react');
var Link = require('react-router').Link;

module.exports = React.createClass({

    render: function () {
        return (
            <div className="homePanel">
                <div className="homePanel-text">
                    Vous avez déniché des produits régionaux et vous voulez partagez vos découvertes gastronomiques ?
                </div>
                <div className="homePanel-cta">
                    <Link to="login">Je suis un pelicab</Link>
                </div>
                <img className="homePanel-image" src="/images/illustratio-peli-droite.png"/>
            </div>
        );
    }
});
