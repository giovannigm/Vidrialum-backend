const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const config = require("../config");

const router = express.Router();

let userId = 1;
const users = [
  {
    id: 1,
    username: "User name",
    password: "encrypted password",
  },
];

/**
 * @route POST /users/signup
 * @desc Signup an Admin
 * @access Public
 */
router.post("/signup", async (request, response) => {
  const salt = await bcrypt.genSalt(10);
  const password = await bcrypt.hash(request.body.password, salt);

  const newUser = {
    id: userId++,
    username: request.body.username,
    password,
  };

  users.push(newUser);

  response.status(201).json(newUser);
});

/**
 * @route POST /users/login
 * @desc Login as an Admin
 * @access Public
 */
router.post("/login", async (request, response) => {
  const userFound = users.find(
    (user) => user.username === request.body.username
  );

  if (!userFound) {
    return response.status(404).json("User not found");
  }

  const isValidPassword = await bcrypt.compare(
    request.body.password,
    userFound.password
  );

  if (!isValidPassword) {
    return response.status(400).json("Invalid password");
  }

  const userToken = jwt.sign(
    {
      userFound,
    },
    config.TOKEN
  );

  return response.status(200).json({ userFound, userToken });
});

module.exports = router;