var React = require('react');
var Link = require('react-router').Link;
var getters = require('../modules/peligourmet/getters');
var reactor = require('../reactor')

module.exports = React.createClass({

    render: function () {
        var annonce = reactor.evaluate(getters.getAnnonceById(this.props.params.uuid));
        return (
            <div>
                <div className="pageHeader">
                    {annonce.get('product_type')}
                    <p className="header-details">A récupérer à <b>{annonce.get('pickup_location')}</b> le <b>{annonce.get('pickup_time')}</b></p>
                </div>
                <div className="main">
                    <div className="annonceDescription">
                        <p>{annonce.get('description')}</p>
                        <p>Agnès D.</p>
                    </div>

                    <p className="orderSummary">Jean-Baptiste C. a réservé 2 kilos</p>
                    <p className="orderSummary">Kim Laï T. a réservé 4 kilos</p>


                    <div className="buyBox">
                        <select>
                            <option>1 kg</option>
                            <option>2 kg</option>
                            <option>3 kg</option>
                            <option>4 kg</option>
                            <option>5 kg</option>
                        </select>
                        <button>Réserver</button>
                    </div>
                </div>
            </div>
        );
    }
});
