const express = require("express");
const mailer = require("nodemailer");

const config = require("../config");

const router = express.Router();

const transporter = mailer.createTransport({
  service: "gmail",
  auth: {
    user: config.EMAIL,
    pass: config.PASSWORD,
  },
});

/**
 * @route POST /contact
 * @desc Send contact info
 * @access Public
 */
router.post("/", (request, response) => {
  const mailOptions = {
    to: "giovanniantonygarcia@gmail.com",
    subject: "Contact",
    text: `
        Name: ${request.body.name}, 
        Last Name: ${request.body.lastName}, 
        Email: ${request.body.email}, 
        Phone: ${request.body.phone},
        Message: ${request.body.message}
      `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      response.status(500).json("Server error");
    } else {
      response.status(200).json("Email sent successfully");
    }
  });
});

module.exports = router;
