const Pool = require("pg").Pool;
const db = new Pool({
  user: "postgres",
  password: "312978",
  host: "localhost",
  port: 5432,
  database: "blood"
});

module.exports = db;
