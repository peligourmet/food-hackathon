var koa = require('koa');
var router = require('koa-router')();
var views = require('koa-views');
var request = require('co-request');
var serve = require('koa-static');
var bodyParser = require('koa-bodyparser');
var knexfile = require('./knexfile');
var knex = require('knex')(knexfile);
var _ = require('lodash');

var app = koa();

app.use(serve('./public'));

app.use(views('views', {
    map: {
        html: 'underscore',
    }
}));

app.use(bodyParser());

router.get('/', index);
router.post('/accounts', createAccount);
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

app.listen(process.env.PORT || 3000);
