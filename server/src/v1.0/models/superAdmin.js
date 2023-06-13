const { STATUS_ACTIVE } = require("../../config/constants");
const uniqueValidator = require("mongoose-unique-validator");
const messages = require("../../config/messages");

module.exports = (mongoose, collectionName) => {
  const schema = mongoose.Schema(
    {
      email: {
        type: String,
        required: true,
        unique: true,
        sparse: true,
        uniqueCaseInsensitive: true,
        lowercase: true,
      },
      password: {
        type: String,
        required: true,
      },
      status: {
        type: Number,
        required: true,
        enum: [STATUS_ACTIVE],
        default: STATUS_ACTIVE,
      },
    },
    {
      timestamps: true,
    },
  );
  schema.plugin(uniqueValidator, { message: messages?.fieldIsUnique });
  const SuperAdmin = mongoose.model("SuperAdmin", schema, collectionName);
  return SuperAdmin;
};
