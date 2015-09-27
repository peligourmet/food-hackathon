var React = require('react');
var Link = require('react-router').Link;
var getters = require('../modules/peligourmet/getters');
var reactor = require('../reactor');

module.exports = React.createClass({

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
                            <input type="text" />
                        </p>
                        <p>
                            <label>Message</label>
                            <textarea></textarea>
                        </p>
                        <p>
                            <button>Envoyer</button>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
});
