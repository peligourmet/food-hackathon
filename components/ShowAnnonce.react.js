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
                    <p className="header-details">A récupérer à <b>Bordeaux</b> le <b>lundi 12 septembre</b></p>
                </div>
                <div className="main">
                    <div className="annonceDescription">
                        <p>"Je vais chez mes parents ce week-end, je peux ramener quelques kilos de pommes. Je ne sais pas trop quelle est la variété mais elles sont très bonnes."</p>
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
