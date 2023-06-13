const data = require("../seeds/seed00001");
const { createSuperAdmin } = require("../services/internal/user");

// execution function
async function execute() {
  await createSuperAdmin(data);
}

module.exports = {
  execute,
};
