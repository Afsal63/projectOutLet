const { sendPasswordResetEmail } = require("../services/external/email");
const jwt = require("jsonwebtoken");
const { User } = require("../models");
const { generatePasswordHash } = require("../helpers/string");

const sendResetPasswordEmail = async (req, res) => {
  const { email } = req.body;
  const exsistingEmail = await User.findOne({ email: email });
  // console.log(exsistingEmail.email, "checking");
  if (exsistingEmail.email == email) {
    const response = await sendPasswordResetEmail(email);
    return { message: "Password reset email sent" };
  } else {
    return { message: "User not existing" };
  }
};

const setPasswordThroughLink = async (req, res) => {
  const { accessToken } = req.params;
  const { password } = req.body;

  if (accessToken == null) {
    return { message: "Token is not provided" };
  }
  if (password == null) {
    return { message: "Password is not provided" };
  }

  try {
    const decodedToken = await jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET,
    );

    const email = decodedToken;

    const passwordUpdatingUser = await User.findOne({ email: email });

    const hashedPassword = await generatePasswordHash(password);

    passwordUpdatingUser.password = hashedPassword;
    await passwordUpdatingUser.save();

    return { message: "Password set successfully" };
  } catch (error) {
    console.log(error, "eroor");
    return res.json({ message: "Invalid or expired token" });
  }
};

module.exports = {
  sendResetPasswordEmail,
  setPasswordThroughLink,
};
