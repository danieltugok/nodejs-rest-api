
exports.up = knex => {
  return knex.schema.createTable('pet', td => {

      td.increments('id');
      td.string('name');
      td.string('raca');
      td.integer('idade');
      td.timestamp('created_at').defaultTo(knex.fn.now())

    console.log('create table PET');

  });
};

exports.down = knex => knex.schema.dropTable('pet');
