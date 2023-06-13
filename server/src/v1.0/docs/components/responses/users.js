const messages = require("../../../../config/messages");

module.exports = {
  Add_Tickets: {
    code: 200,
    response: {
      description: "Success",
      content: {
        "application/json": {
          example: {
            statusCode: 200,
            message: messages?.success,
          },
        },
      },
    },
  },
  Reset_Password: {
    code: 200,
    response: {
      description: "Success",
      content: {
        "application/json": {
          example: {
            statusCode: 200,
            message: 'Password reset email sent',
          },
        },
      },
    },
  },
  Set_Password: {
    code: 200,
    response: {
      description: "Success",
      content: {
        "application/json": {
          example: {
            statusCode: 200,
            message: 'Password set successfully',
          },
        },
      },
    },
  },
};
