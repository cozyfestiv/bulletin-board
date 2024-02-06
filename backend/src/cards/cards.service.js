const knex = require("../db/connection");

function list() {
  return knex("cards")
    .select("*")
    .orderBy("card_id")
}


module.exports = {
  list,
}