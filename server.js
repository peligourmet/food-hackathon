var koa = require('koa');
var router = require('koa-router')();
var views = require('koa-views');
var request = require('co-request');
var serve = require('koa-static');
var bodyParser = require('koa-bodyparser');
var knexfile = require('./knexfile');
var knex = require('knex')(knexfile);
var mailgun = require('mailgun-js')({
    apiKey: 'key-06932b00494fc1a8f0949d56e266a6fe',
    domain: 'sandbox85bfb808d09e4e84aed1eef80802a2fc.mailgun.org'
});
var _ = require('underscore');
var crypto = require('crypto');

var app = koa();

app.use(serve('./public'));

app.use(views('views', {
    map: {
        html: 'underscore',
    }
}));

app.use(bodyParser());

router.get('/', index);
router.get('/annonces', index);
router.get('/annonces/:id', showAnnounce);
router.get('/annonces/:id/publish', index);
router.get('/annonces/create', index);
router.get('/login', index);
router.get('/payment/token', index);


router.post('/api/accounts', createAccount);
router.post('/api/announces', createAnnounce);
router.get('/api/announces', listAnnounces);
router.post('/api/share-announce', shareAnnounce);
app.use(router.routes());

function *index() {
    yield this.render('index', { context: JSON.stringify([]) });
}

function *showAnnounce() {
    var announce = yield knex.select('*')
        .from('announces')
        .where({uuid: this.params.id})

    yield this.render('index', { context: JSON.stringify(announce) });
}

function *createAccount() {
    var email = this.request.body.email;
    yield knex.insert({
        email : email,
        createdat: new Date(),
    }).into('accounts');
    this.status = 201;
    this.body = "OK";
}

function *createAnnounce() {
    var announce = this.request.body;
    announce.createdat = new Date();
    yield knex
        .insert(announce)
        .into('announces');
    this.status = 201;
    this.body = announce;
}

function *listAnnounces() {
    var announces = yield knex.select('*')
        .from('announces')
        .orderBy('createdat', 'DESC')
    this.body = announces;
}

function *shareAnnounce() {
    var announceUuid = this.request.body.announceUuid;
    var emails = this.request.body.emails;
    var message = this.request.body.message;

    var announce = yield knex.select('pelicabname', 'pelicabemail')
        .from('announces')
        .where({uuid: announceUuid})
        .then(function (rows) {
            return _.map(rows, function (row) {
                return {pelicabname: row.pelicabname, pelicabemail: row.pelicabemail};
            })[0];
        });

    var shasum = crypto.createHash('sha1');
    shasum.update(message);
    var token = shasum.digest('hex');
    var url = process.env.APP_URL + '/annonces/' + announceUuid + '?token=' + token;

    var compiledTemplate = _.template(
        "Bonjour,\n\n<%= pelicabname %> vient de partager une annonce avec vous.\n\nVoici son message :\n\n-----------------------------------------------------------------------\n<%= message %>\n-----------------------------------------------------------------------\n\nPour voir l'annonce et reserver, visitez <%= url%>"
    );

    var email = {
        from: 'Peligourmet <peligourmetparis@gmail.com>',
        to: emails.join(','),
        subject: 'Nouvelle annonce',
        text: compiledTemplate({ message: message, url: url, pelicabname: announce.pelicabname}),
    };
    mailgun.messages().send(email, function (error, info) {
        if (error) {
            return console.log(error);
        }
    });

    this.status = 201;
    this.body = "OK";
}

app.listen(process.env.PORT || 3000);
