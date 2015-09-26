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
                <div className="pageHeader">Les annonces</div>
                <div className="main">
                    {this.state.annonces.map(function (annonce) {
                        return (
                            <Link className="annonce" key={annonce.get('id')} to={'annonces/:id'} params={{id: annonce.get('id')}}>
                                <img className="annonceImage" src="/images/icons/apple-organicfood-v1-codrops-wojciechzasina.svg"/>
                                <div className="annonceContent">
                                    <p className="annonceName">{annonce.get('name')}</p>
                                    <p className="annonceCity">{annonce.get('city')}</p>
                                    <p className="annonceDate">{annonce.get('date')}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        );
    }
});
