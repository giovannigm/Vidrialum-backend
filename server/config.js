const dotenv = require("dotenv").config();

module.exports = {
  EMAIL: process.env.EMAIL,
  PASSWORD: process.env.PASSWORD,
  TOKEN: process.env.TOKEN,
  DATABASE_USER: process.env.DATABASE_USER,
  DATABASE_HOST: process.env.DATABASE_HOST,
  DATABASE_PASSWORD: process.env.DATABASE_PASSWORD,
  DATABASE_NAME: process.env.DATABASE_NAME,
  DATABASE_PORT: process.env.DATABASE_PORT,
};
