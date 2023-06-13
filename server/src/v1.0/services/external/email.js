const jwt = require("jsonwebtoken");
const nodemailer = require("nodemailer");

const sendPasswordResetEmail = async (email) => {
  const accessToken = jwt.sign(email, process.env.ACCESS_TOKEN_SECRET);
  const resetLink = "http://localhost:3030/api/1.0/users/set-password";

  // Configure nodemailer with your email service provider settings
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      // user: "dialerapp.widget@outlook.com",
      // pass: "widget@dialerapp",
      user: process.env.SENDING_MAIL,
      pass: process.env.SENDING_MAIL_PASSWORD,
    },
  });

  // Create the password reset email
  const mailOptions = {
    from: process.env.SENDING_MAIL,
    to: email,
    subject: "Password Reset",
    text: `Click on the following link to reset your password:\n\n${resetLink}/${accessToken}`,
  };

  // Send the email
  const info = await transporter.sendMail(mailOptions);
  return info;
  console.log("Password reset email sent:", info.response);
};

module.exports = {
  sendPasswordResetEmail,
};
