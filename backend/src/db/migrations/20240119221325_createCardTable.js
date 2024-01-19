/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable('cards', card => {
    card.increments('card_id').primary()
    card.string('card_name')
    card.string('created_by')
    card.date('card_date')
    card.date('due_date')
    card.string('status').defaultTo('active')
    card.enu('type', ['feature request', 'bug', 're-design', 'other'])
    card.text('description')
  })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable('cards')
}
