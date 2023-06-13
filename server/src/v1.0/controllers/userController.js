const messages = require("../../config/messages");
const { ticket } = require("../services/internal/user");

const createTicket = async (req) => {
  await ticket(req?.body);
};

module.exports = {
  createTicket,
};
