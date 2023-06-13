const uniqueValidator = require("mongoose-unique-validator");
const messages = require("../../config/messages");

module.exports = (mongoose, collectionName) => {
  const schema = mongoose.Schema(
    {
      department: {
        type: String,
        required: true,
      },
      from: {
        type: String,
        required: true,
      },
      to: {
        type: String,
        required: true,
      },
      duration: {
        type: Number,
        required: true,
      },
      callStatus: {
        type: String,
        required: true,
      },
      ticketNumber: {
        type: String,
      },
      systemInformation: {
        type: String,
      },
    },
    {
      timestamps: true,
    },
  );

  schema.index({
    department: "text",
    from: "text",
    to: "text",
    callStatus: "text",
  });

  schema.plugin(uniqueValidator, { message: messages?.fieldIsUnique });

  const CallDetails = mongoose.model("CallDetails", schema, collectionName);
  return CallDetails;
};
