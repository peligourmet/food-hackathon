var React = require('react');
var Router = require('react-router');
var addons = require('react-addons');
var Link = require('react-router').Link;
var reactor = require('../reactor');
var Peligourmet = require('../modules/peligourmet');
var actions = Peligourmet.actions;
var getters = Peligourmet.getters;

module.exports = React.createClass({
    mixins: [addons.LinkedStateMixin, Router.Navigation ],

    getInitialState: function () {
        return {};
    },

    submit: function (e) {
        e.preventDefault();
        var uuid = this.props.params.uuid;
        var emails = this.state.emails.split(',');
        var message = this.state.message;
        actions.publishAnnonce(uuid, emails, message);
        this.transitionTo('annonces/:uuid', {uuid: uuid});
    },

    render: function () {
        var annonce = reactor.evaluate(getters.getAnnonceById(this.props.params.uuid));
        return (
            <div>
                <div className="pageHeader">
                    Partager mon annonce
                    <p className="header-details">{annonce.get('product_type')}</p>
                </div>
                <div className="main">
                    <form>
                        <p>
                            <label>Destinataires</label>
                            <input type='text' valueLink={this.linkState('emails')} />
                        </p>
                        <p>
                            <label>Message</label>
                            <textarea valueLink={this.linkState('message')}></textarea>
                        </p>
                        <p>
                            <button onClick={this.submit}>Envoyer</button>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
});
