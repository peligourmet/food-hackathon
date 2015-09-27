var React = require('react');
var Link = require('react-router').Link;
var getters = require('../modules/peligourmet/getters');
var reactor = require('../reactor');

module.exports = React.createClass({

    getInitialState: function () {
        return {showPayNow: false};
    },

    onPayNow: function (e) {
        this.setState({showPayNow: e.target.checked});
    },

    renderPayForm: function () {
        if (typeof window.token === 'undefined' || this.state.showPayNow === true) {
            return (
                <div>
                    <p>
                        <label>Numéro de carte bancaire</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label>Date d expiration</label>
                        <input type="text"/>
                    </p>
                    <p>
                        <label>CCV</label>
                        <input type="text"/>
                    </p>
                </div>
            );
        }
        return <div></div>;
    },

    render: function () {
        console.log(this.state);
        token = window.token;
        var annonce = reactor.evaluate(getters.getAnnonceById(this.props.params.uuid));
        var payNow;
        if (typeof token !== 'undefined') {
            payNow = <p><label>Payer maintenant</label><input type="checkbox" onChange={this.onPayNow}/></p>
        }
        return (
            <div>
                <div className="pageHeader">
                    {annonce.get('product_type')}
                    <p className="header-details">A récupérer à <b>{annonce.get('pickup_location')}</b> le <b>{annonce.get('pickup_time')}</b></p>
                </div>
                <div className="main">
                    <div className="annonceDescription">
                        <p>"{annonce.get('description')}"</p>
                        <p>{annonce.get('pelicabname')}</p>
                    </div>

                    <h2>Réserver</h2>
                    <form className="bookingForm">
                        <p>
                            <label>Nom</label>
                            <input type="text"/>
                        </p>
                        <p>
                            <label>Quantité</label>
                            <select>
                                <option>1 {annonce.get('quantityunit')}</option>
                                <option>2 {annonce.get('quantityunit')}</option>
                                <option>3 {annonce.get('quantityunit')}</option>
                                <option>4 {annonce.get('quantityunit')}</option>
                                <option>5 {annonce.get('quantityunit')}</option>
                            </select>
                        </p>
                        {payNow}
                        {this.renderPayForm()}
                        <p>
                            <button>Réserver</button>
                        </p>
                    </form>

                    <div className="col">
                        <p className="orderSummary">Jean-Baptiste C. a réservé 2 {annonce.get('quantityunit')}</p>
                        <p className="orderSummary">Kim Laï T. a réservé 4 {annonce.get('quantityunit')}</p>
                    </div>

                    <div className="col">
                        <p className="availability">Encore {annonce.get('quantity')} {annonce.get('quantityunit')} disponibles</p>
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
            </div>
        );
    }
});
