const jwt = require("jsonwebtoken");

const config = require("./config");

const verifyToken = (request, response, next) => {
  try {
    const token = request.headers.token;

    if (token === null) {
      return response.status(401).json('Missing "token" header');
    }

    jwt.verify(token, config.TOKEN);

    next();
  } catch (error) {
    response
      .status(403)
      .json({ error: "Sign in or sign up before continuing" });
  }
};

module.exports = verifyToken;
