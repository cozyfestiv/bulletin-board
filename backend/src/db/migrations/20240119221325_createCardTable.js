/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('tickets', table => {
    table.increments('ticket_id').primary()
    table.string('ticket_name')
    table.string('created_by')
    table.date('ticket_date')
    table.date('due_date')
    table.string('status').defaultTo('active')
    table.enu('type', ['feature request', 'bug', 're-design', 'other'])
    table.text('description')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('tickets')
}
