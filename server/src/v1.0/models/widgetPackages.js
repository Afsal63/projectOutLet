const uniqueValidator = require("mongoose-unique-validator");
const messages = require("../../config/messages");

module.exports = (mongoose, collectionName) => {
  const schema = mongoose.Schema(
    {
      numberOfUsers: {
        type: Number,
        required: true,
      },
      packageName: {
        type: String,
        required: true,
      },
      price: {
        type: Number,
        required: true,
      },
      duration: {
        type: Number,
        required: true,
      },
      status: {
        type: String,
        required: true,
      },
      numberOfDepartments: {
        type: Number,
        required: true,
      },
    },
    {
      timestamps: true,
    },
  );

  schema.index({
    packageName: "text",
    status: "text",
  });

  schema.plugin(uniqueValidator, { message: messages?.fieldIsUnique });

  const WidgetPackage = mongoose.model("WidgetPackage", schema, collectionName);
  return WidgetPackage;
};
