var koa = require('koa');
var router = require('koa-router')();
var views = require('koa-views');
var request = require('co-request');
var serve = require('koa-static');
var bodyParser = require('koa-bodyparser');
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
app.use(router.routes());

function *index() {
    yield this.render('index');
}

app.listen(process.env.PORT || 3000);
