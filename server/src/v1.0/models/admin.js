const uniqueValidator = require("mongoose-unique-validator");
const messages = require("../../config/messages");

module.exports = (mongoose, collectionName) => {
  const schema = mongoose.Schema(
    {
      adminId: {
        type: String,
        required: false,
      },
      email: {
        type: String,
        required: false,
        unique: true,
        sparse: true,
        uniqueCaseInsensitive: true,
        lowercase: true,
      },
      phone: {
        type: String,
        unique: true,
        sparse: true,
      },
      password: {
        type: String,
        required: false,
      },
      username: {
        type: String,
        required: true,
      },
      packageId: {
        type: String,
        required: false,
      },
      department: {
        type: Array,
      },
      status: {
        type: String,
        required: false,
      },
      picture: {
        type: String,
      },
      agents: {
        type: Array,
      },
    },
    {
      timestamps: true,
    }
  );

  schema.index({
    email: "text",
    phone: "text",
    username: "text",
  });

  schema.plugin(uniqueValidator, { message: messages?.fieldIsUnique });

  const Admin = mongoose.model("Admin", schema, collectionName);
  return Admin;
};
