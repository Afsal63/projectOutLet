module.exports = {
  Add_Tickets: {
    type: "object", //data type
    properties: {
      username: {
        type: "string", // data type
        description: "Username/email of the user account", // desc
        example: "admin",
      },
      password: {
        type: "string", // data type
        description: "Password of the user account", // desc
        example: "admin123",
      },
    },
  },
  Reset_Password: {
    type: "object", //data type
    properties: {
      email: {
        type: "string", // data type
        description: "Email of the user account", // desc
        example: "sample@gmail.com",
      },
    },
  },
  Set_Password: {
    type: "object", //data type
    properties: {
      password: {
        type: "string", // data type
        description: "New Password", // desc
        example: "user123",
      },
    },
  },
};
