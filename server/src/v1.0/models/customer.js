const uniqueValidator = require("mongoose-unique-validator");
const {
  STATUS_ACTIVE,
  STATUS_INACTIVE,
  STATUS_SUSPENDED,
  STATUS_DISABLED,
} = require("../../config/constants");
const messages = require("../../config/messages");

module.exports = (mongoose, collectionName) => {
  const schema = mongoose.Schema(
    {
      phoneNumber: {
        type: String,
        unique: true,
        sparse: true,
        uniqueCaseInsensitive: true,
      },
      status: {
        type: Number,
        required: true,
        enum: [
          STATUS_ACTIVE,
          STATUS_INACTIVE,
          STATUS_SUSPENDED,
          STATUS_DISABLED,
        ],
        default: STATUS_ACTIVE,
      },
      otp: {
        type: String,
      },
    },
    {
      timestamps: true,
    },
  );

  schema.index({
    customerId: "text",
    phoneNumber: "text",
  });

  schema.plugin(uniqueValidator, { message: messages?.fieldIsUnique });

  const Customer = mongoose.model("Customer", schema, collectionName);
  return Customer;
};
