module.exports = ({ makeWrapper }) => ({
  // "/auth/login": makeWrapper(require("./login")),
  "/auth/register-guest": makeWrapper(require("./register-guest")),
  "/auth/verify-otp": makeWrapper(require("./verify-otp")),

});
