module.exports = ({ makeWrapper }) => ({
  "/users/add-ticket": makeWrapper(require("./add-ticket")),
  "/users/reset-password": makeWrapper(require("./reset-password")),
  "/users/set-password": makeWrapper(require("./set-password")),

});
