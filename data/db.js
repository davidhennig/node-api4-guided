const knex = require("knex");

const environment = process.env.db_ENV || "development";
const config = require("../knexfile.js")[environment];

module.exports = knex(config);
