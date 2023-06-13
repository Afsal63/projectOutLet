const router = require("express").Router();
const makeCallback = require("../../utils/callback");
const userController = require("../controllers/userController");
const passwordSetUpController = require("../controllers/passwordSetUpController");
const {
  isValidResetPasswordToken,
  isValidRefreshToken,
  isUserAuthenticated,
} = require("../middlewares/authorizer");
// const {
//   auth: { loginValidator, forgotPasswordValidator, resetPasswordValidator },
//   //   user: { signUpValidator },
// } = require("../validators");

router.post("/add-ticket", makeCallback(userController.createTicket));
router.get(
  "/reset-password",
  makeCallback(passwordSetUpController.sendResetPasswordEmail),
);
router.post(
  "/set-password/:accessToken",
  makeCallback(passwordSetUpController.setPasswordThroughLink),
);

module.exports = router;
