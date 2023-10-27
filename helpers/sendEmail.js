const nodemailer = require("nodemailer");

const { MAILTRAP_USER, MAILTRAP_PASS, SENDER_EMAIL } = process.env;

const transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: MAILTRAP_USER,
    pass: MAILTRAP_PASS,
  },
});

function sendEmail(message) {
  message.from = SENDER_EMAIL;

  return transport.sendMail(message);
}

module.exports = sendEmail;
