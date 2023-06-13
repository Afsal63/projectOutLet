module.exports = ({ getResponses, defaultParameters }) => ({
    // operation's method
    get: {
      tags: ["Users"], // operation's tag
      summary: "Reset Password", // summary
      description: "You will got a link on your mail", // short desc
      operationId: "resetPassword", // unique operation id
      parameters: [...defaultParameters],
      requestBody: {
        // expected request body
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Reset_Password",
            },
          },
        },
        required: true,
      },
      // expected responses
      responses: getResponses(["Reset_Password", 400, 404]),
    },
  });