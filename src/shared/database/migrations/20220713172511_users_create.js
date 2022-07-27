/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('user', table => {
    table.increments('id').primary();
    table.text('name').notNullable();
    table.boolean('type').notNullable();
    table.text('email').notNullable().unique();
    table.text('whatsapp').notNullable();
    table.text('password').notNullable();
    table.text('cep').notNullable();
    table.text('address');
    table.text('city');
    table.text('neighborhood');
    table.text('avatar');
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('user');
};
