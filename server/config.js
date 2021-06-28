const dotenv = require("dotenv").config();

module.exports = {
  EMAIL: process.env.EMAIL,
  PASSWORD: process.env.PASSWORD,
  TOKEN: process.env.TOKEN,
};
