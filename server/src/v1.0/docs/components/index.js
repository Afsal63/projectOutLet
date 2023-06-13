module.exports = {
  schemas: {
    ...require("./schemas/auth"), // login input schema
    ...require("./schemas/admin"),
    ...require("./schemas/users"),
  },
};
