exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('accounts', function (table) {
            table.string('email');
            table.dateTime('createdat');
        })
        .then(function () {
            console.log('the "accounts" table has been created');
        });
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTable('accounts')
        .then(function () {
            console.log('the "accounts" table has been dropped');
        });
};
