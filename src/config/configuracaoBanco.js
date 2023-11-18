const { Pool } = require("pg");

const bancoDeDados = new Pool({
  user: "postgres",
  host: "localhost",
  database: "roteiros",
  password: "postgres",
  port: 5432,
});

module.exports = bancoDeDados;
