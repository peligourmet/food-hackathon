var React = require('react');
var addons = require('react-addons');
var Link = require('react-router').Link;

var Peligourmet = require('../modules/peligourmet');
var actions = Peligourmet.actions;

module.exports = React.createClass({

    mixins: [addons.LinkedStateMixin],

    getInitialState: function () {
        return {};
    },

    submit: function (e) {
        e.preventDefault();
        actions.createAnnonce(this.state);
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
                            <label>Dites-en plus</label><textarea valueLink={this.linkState('description')} />
                        </p>
                        <input onClick={this.submit} type='submit' value="Publier l'annonce" />
                    </form>
                </div>
            </div>
        );
    }
});
