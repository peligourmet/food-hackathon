var koa = require('koa');
var router = require('koa-router')();
var views = require('koa-views');
var request = require('co-request');
var serve = require('koa-static');
var bodyParser = require('koa-bodyparser');
var knexfile = require('./knexfile');
var knex = require('knex')(knexfile);
var _ = require('lodash');
var uuid = require('uuid');

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
router.get('/annonces/:id', index);


router.post('/api/accounts', createAccount);
router.post('/api/announces', createAnnounce);
router.get('/api/announces', listAnnounces);
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
    this.body = "OK";
}

function *listAnnounces() {
    var announces = yield knex.select('*')
        .from('announces')
        .orderBy('createdat', 'DESC')
    this.body = announces;
}

app.listen(process.env.PORT || 3000);
