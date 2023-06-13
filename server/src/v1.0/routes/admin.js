const router = require("express").Router();
const makeCallback = require("../../utils/callback");
const adminController = require("../controllers/admin");
const {
  isValidResetPasswordToken,
  isValidRefreshToken,
  isUserAuthenticated,
} = require("../middlewares/authorizer");
const {
  auth: { loginValidator, forgotPasswordValidator, resetPasswordValidator },
  //   user: { signUpValidator },
} = require("../validators");

router.put("/create-dpt", makeCallback(adminController.createDepartment));
router.post("/save-admin", makeCallback(adminController.saveAdminDetails));
router.post("/admin-signIn",makeCallback(adminController.adminSignIn))
router.patch("/edit-dpt", makeCallback(adminController.editDepartment));
router.put("/create-Agent", makeCallback(adminController.createAgent));
router.patch("/agent-set-pwd-and-name", makeCallback(adminController.updatePasswordAndUserName));
router.patch("/delete-agent/:id/:status", makeCallback(adminController.deleteAgent));


module.exports = router;
