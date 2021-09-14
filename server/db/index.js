const { Pool } = require("pg");

const config = require("../config");

const databaseConfig = {
  user: config.DATABASE_USER,
  host: config.DATABASE_HOST,
  password: config.DATABASE_PASSWORD,
  database: config.DATABASE_NAME,
  port: config.DATABASE_PORT,
};

const pool = new Pool(databaseConfig);

module.exports = {
  query: (text, params) => pool.query(text, params),
};
