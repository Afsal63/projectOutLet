const router = require("express").Router();
const makeCallback = require("../../utils/callback");
const authController = require("../controllers/auth");
const {
  isValidResetPasswordToken,
  isValidRefreshToken,
  isUserAuthenticated,
} = require("../middlewares/authorizer");
const {
  auth: { loginValidator, forgotPasswordValidator, resetPasswordValidator },
  //   user: { signUpValidator },
} = require("../validators");

// POST: login
// router.post("/login", loginValidator, makeCallback(authController.login));
router.post("/register-guest", makeCallback(authController.guestSignup));
router.post("/verify-otp", makeCallback(authController.guestOtpverify));
router.post("/logout", makeCallback(authController.logout));

// // POST : signup
// router.post("/signup", signUpValidator, makeCallback(authController.signUp));

// // POST : forgot password
// router.post(
//   "/forgot-password",
//   forgotPasswordValidator,
//   makeCallback(authController.forgotPassword)
// );

// // POST : validate reset password request
// router.post(
//   "/reset-password/validate",
//   isValidResetPasswordToken,
//   makeCallback(async () => {})
// );

// // POST : reset password
// router.post(
//   "/reset-password",
//   isValidResetPasswordToken,
//   resetPasswordValidator,
//   makeCallback(authController.resetPassword)
// );

// // POST : refresh token
// router.post(
//   "/token",
//   isValidRefreshToken,
//   makeCallback(authController.refreshToken)
// );

// POST : logout
router.post(
  "/logout",
  isUserAuthenticated,
  makeCallback(authController.logout),
);

module.exports = router;
