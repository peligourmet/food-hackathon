exports.up = function(knex, Promise) {
    return knex.schema
        .createTable('announces', function (table) {
            table.uuid('uuid');
            table.string('product_type');
            table.string('pickup_location');
            table.string('farm_location');
            table.string('pickup_time');
            table.string('description');
            table.string('pelicabname');
            table.string('pelicabemail');
            table.integer('quantity');
            table.string('quantityunit');
            table.dateTime('createdat');
        })
        .then(function () {
            console.log('the "announces" table has been created');
        });
};

exports.down = function(knex, Promise) {
    return knex.schema
        .dropTable('announces')
        .then(function () {
            console.log('the "announces" table has been dropped');
        });
};
