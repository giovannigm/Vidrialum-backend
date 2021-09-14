const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const config = require("../config");
const db = require("../db");

const router = express.Router();

/**
 * @route POST /users/signup
 * @desc Signup an Admin
 * @access Public
 */
router.post("/signup", async (request, response) => {
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(request.body.password, salt);

  const result = await db.query(
    "INSERT INTO users(name, password) VALUES ($1, $2)",
    [request.body.username, password]
  );

  return response.status(201).json("Created successfully");
});

/**
 * @route POST /users/login
 * @desc Login as an Admin
 * @access Public
 */
router.post("/login", async (request, response) => {
  const result = await db.query(`SELECT * FROM users WHERE name=$1`, [
    request.body.username,
  ]);

  const user = result.rows[0];

  if (!user) {
    return response.status(404).json("User not found");
  }

  const isValidPassword = await bcrypt.compare(
    request.body.password,
    user.password
  );

  if (!isValidPassword) {
    return response.status(400).json("Invalid password");
  }

  const userToken = jwt.sign(
    {
      user,
    },
    config.TOKEN
  );

  return response.status(200).json({ user, userToken });
});

module.exports = router;
