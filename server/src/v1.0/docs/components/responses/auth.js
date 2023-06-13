const messages = require("../../../../config/messages");

module.exports = {
  // login success response
  // Login: {
  //   code: 200,
  //   response: {
  //     description: "Success",
  //     content: {
  //       "application/json": {
  //         example: {
  //           statusCode: 200,
  //           message: messages?.loggedIn,
  //           data: {
  //             role: "customer",
  //             profile: {
  //               _id: "",
  //               firstName: "Peter",
  //               lastName: "Parker",
  //               email: "peter.parker@account.com",
  //               phoneNumber: "9977000000",
  //             },
  //           },
  //         },
  //       },
  //     },
  //   },
  // },
  Guest_Register: {
    code: 200,
    response: {
      description: "Success",
      content: {
        "application/json": {
          example: {
            statusCode: 200,
            message: messages?.otpSend,
          },
        },
      },
    },
  },
  Guest_OTP_Verify: {
    code: 200,
    response: {
      description: "Success",
      content: {
        "application/json": {
          example: {
            statusCode: 200,
            message: messages?.otpVerified,
          },
        },
      },
    },
  },
};
