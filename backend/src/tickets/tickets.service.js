const knex = require('../db/connection')

function list () {
  return knex('tickets').select('*')
}

// function create (newTicketData) {
//   return knex("tickets")
// }

module.exports = {
  list
}
