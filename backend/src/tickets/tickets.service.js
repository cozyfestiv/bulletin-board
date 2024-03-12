const knex = require('../db/connection')

function list () {
  return knex('tickets').select('*')
}

function create (newTicketData) {
  return knex("tickets")
    .insert(newTicketData)
    .returning("*")
    .then(createdRecords => createdRecords[0])
}

module.exports = {
  list,
  create
}
