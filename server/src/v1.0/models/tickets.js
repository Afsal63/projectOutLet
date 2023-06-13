const uniqueValidator = require("mongoose-unique-validator");
const messages = require("../../config/messages");

module.exports = (mongoose, collectionName) => {
  const schema = mongoose.Schema(
    {
      ticketNumber: {
        type: String,
        required: true,
        unique: true,
      },
      ticketStatus: {
        type: String,
        required: true,
      },
      ticketNotes: {
        type: String,
      },
      ticketPriority: {
        type: String,
      },
      agentId: {
        type: Array,
      },
      ticketOwners: {
        type: String,
      },
    },
    {
      timestamps: true,
    }
  );

  schema.index({
    ticketNumber: "text",
    ticketStatus: "text",
    ticketPriority: "text",
    ticketOwners: "text",
  });

  schema.plugin(uniqueValidator, { message: messages?.fieldIsUnique });

  const Ticket = mongoose.model("Ticket", schema, collectionName);
  return Ticket;
};
