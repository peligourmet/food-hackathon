var React = require('react');
var Router = require('react-router');
var addons = require('react-addons');
var Link = require('react-router').Link;
var uuid = require('uuid');

var getters = require('../modules/peligourmet/getters');
var reactor = require('../reactor')

var Peligourmet = require('../modules/peligourmet');
var actions = Peligourmet.actions;

module.exports = React.createClass({
    mixins: [addons.LinkedStateMixin, Router.Navigation ],

    getInitialState: function () {
        return {};
    },

    submit: function (e) {
        e.preventDefault();
        var annonce = this.state;
        var pelicab = reactor.evaluate(getters.loggedInUser);
        annonce.pelicabname = pelicab.get('name');
        annonce.pelicabemail = pelicab.get('email');
        annonce. uuid = uuid.v4();
        actions.createAnnonce(this.state);
        this.transitionTo('annonces/:uuid/publish', {uuid: annonce.uuid});
    },

    render: function () {
        return (
            <div>
                <div className="pageHeader">Nouvelle Annonce</div>
                <div className="main">
                    <form onChange={this.onChange}>
                        <p>
                            <label>Type de produit</label><input type='text' valueLink={this.linkState('product_type')} />
                        </p>
                        <p>
                            <label>Point de retrait</label><input type='text' valueLink={this.linkState('pickup_location')} />
                        </p>
                        <p>
                            <label>Ville du producteur</label><input type='text' valueLink={this.linkState('farm_location')} />
                        </p>
                        <p>
                            <label>Date de retrait</label><input type='text' valueLink={this.linkState('pickup_time')} />
                        </p>
                        <p>
                            <label>Quantité Maximum</label><input className="quantity" type='text' valueLink={this.linkState('quantity')} />
                            <input className="quantity-unit" type='text' valueLink={this.linkState('quantityunit')} />
                        </p>
                        <p>
                            <label>Dites-en plus</label><textarea valueLink={this.linkState('description')} />
                        </p>
                        <button onClick={this.submit} type='submit'>Publier</button>
                    </form>
                </div>
            </div>
        );
    }
});
