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
                            <Link className="annonce" key={annonce.get('uuid')} to={'annonces/:uuid'} params={{uuid: annonce.get('uuid')}}>
                                <img className="annonceImage" src="/images/icons/apple-organicfood-v1-codrops-wojciechzasina.svg"/>
                                <div className="annonceContent">
                                    <p className="annonceName">{annonce.get('product_type')}</p>
                                    <p className="annonceCity">Proposé par {annonce.get('pelicabname')}</p>
                                    <p className="annonceDate">{annonce.get('farm_location') + ', ' + annonce.get('pickup_time')}</p>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        );
    }
});
