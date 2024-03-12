const tickets = require('./00-tickets.json')

exports.seed = function (knex) {
  return knex
    .raw('TRUNCATE TABLE tickets RESTART IDENTITY CASCADE')
    .then(function () {
      return knex('tickets').insert(tickets)
    })
}
