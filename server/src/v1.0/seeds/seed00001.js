const { ROLE_SUPER_ADMIN } = require("../../config/constants");

module.exports = {
  // username: process?.env?.SUPERADMIN_USERNAME,
  password: process?.env?.SUPERADMIN_PASSWORD,
  email: process?.env?.SUPERADMIN_EMAIL,
  role: ROLE_SUPER_ADMIN,
};
