module.exports = {
  // Login: {
  //   type: "object", //data type
  //   properties: {
  //     username: {
  //       type: "string", // data type
  //       description: "Username/email of the user account", // desc
  //       example: "admin",
  //     },
  //     password: {
  //       type: "string", // data type
  //       description: "Password of the user account", // desc
  //       example: "admin123",
  //     },
  //   },
  // },
  Guest_Register: {
    type: "object", //data type
    properties: {
      phoneNumber: {
        type: "string", // data type
        description: "Guest mobile number", // desc
        example: "1234567890",
      },
    },
  },
  Guest_OTP_Verify: {
    type: "object", //data type
    properties: {
      mobileNumber: {
        type: "string", // data type
        description: "Guest mobile number", // desc
        example: "1234567890",
      },
      otp: {
        type: "string", // data type
        description: "Guest entering OTP", // desc
        example: "1234",
      },
    },
  },
};
