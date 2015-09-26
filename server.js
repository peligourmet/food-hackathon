var koa = require('koa');
var router = require('koa-router')();
var views = require('koa-views');
var request = require('co-request');
var serve = require('koa-static');
var bodyParser = require('koa-bodyparser');
var knexfile = require('./knexfile');
var knex = require('knex')(knexfile);
var uuid = require('uuid');
var mailgun = require('mailgun-js')({
    apiKey: 'key-06932b00494fc1a8f0949d56e266a6fe',
    domain: 'sandbox85bfb808d09e4e84aed1eef80802a2fc.mailgun.org'
});
var _ = require('underscore');

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


router.post('/api/accounts', createAccount);
router.post('/api/announces', createAnnounce);
router.get('/api/announces', listAnnounces);
router.post('/api/share-announce', shareAnnounce);
app.use(router.routes());

function *index() {
    yield this.render('index');
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
    announce.uuid = uuid.v4();
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
    var url = process.env.APP_URL + '/annonce/' + announceUuid;
    var compiledTemplate = _.template(
        "Bonjour,\n\nUne announce Peligourmet viens d'être paratgée avec vous.\n\nVoici le message de l'annonceur:\n\n-----------------------------------------------------------------------\n<%= message %>\n-----------------------------------------------------------------------\n\nPour voir l'annonce et reserver, visitez <%= url%>"
    );
    var email = {
        from: 'Peligourmet <peligourmetparis@gmail.com>',
        to: emails.join(','),
        subject: 'Nouvelle annonce',
        text: compiledTemplate({ message: message, url: url }),
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
