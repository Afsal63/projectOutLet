const messages = require("../../../../config/messages");

module.exports = {
  Create_Department: {
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
  Admin_SignIn: {
    code: 200,
    response: {
      description: "Success",
      content: {
        "application/json": {
          example: {
            statusCode: 200,
            message: messages?.loggedIn,
            token: {
              accessToken:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDViN2RhNWY1Zjc2ZTJiOGVmNDBlMmUiLCJwaG9uZSI6IjExMjIzMzQ0NTUiLCJlbWFpbCI6InNhbXBsZUBnbWFpbC5jb20iLCJzZXNzaW9uSWQiOiJlNTg0ZGZkOC1hYzUzLTRiNjgtODViNC05ZmI0YTczYjUxNzEiLCJpYXQiOjE2ODU4OTAzNzUsImV4cCI6MTY4NjA2MzE3NX0.gtyvLzkhdGVcfbrZXLEPRcy-DI5RuRgQwHQz-gMVocE",
              refreshToken:
                "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDViN2RhNWY1Zjc2ZTJiOGVmNDBlMmUiLCJwaG9uZSI6IjExMjIzMzQ0NTUiLCJlbWFpbCI6InNhbXBsZUBnbWFpbC5jb20iLCJzZXNzaW9uSWQiOiJlNTg0ZGZkOC1hYzUzLTRiNjgtODViNC05ZmI0YTczYjUxNzEiLCJpYXQiOjE2ODU4OTAzNzUsImV4cCI6MTY4NjIzNTk3NX0.3tWXaFjaexb9fHTXchYdn480awR5vk1RHv-i8-Zi6-c",
            },
          },
        },
      },
    },
  },
  Save_Admin: {
    code: 200,
    response: {
      description: "Success",
      content: {
        "application/json": {
          example: {
            statusCode: 200,
            message: messages?.created,
          },
        },
      },
    },
  },
  Edit_Department: {
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
  Create_Agent: {
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
  Agent_Set_Pwd_And_Name: {
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
  Delete_Agent: {
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
};
