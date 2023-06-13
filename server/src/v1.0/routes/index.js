const router = require("express").Router();
const swaggerUi = require("swagger-ui-express");
const { swaggerDocument } = require("../docs");
const { ensureRequestSanity } = require("../middlewares/request");

const auth = require("./auth");
const admin = require("./admin");
const users = require("./users");

// api documentations
if (process?.env?.NODE_ENV === "development") {
  router.use("/docs", swaggerUi.serve);
  router.get("/docs", swaggerUi.setup(swaggerDocument));
}

// middleware
// router.use(ensureRequestSanity());

// routes
router.use("/auth", auth);
router.use("/admin", admin);
router.use("/users", users);

module.exports = router;
