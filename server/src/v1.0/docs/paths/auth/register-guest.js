module.exports = ({ getResponses, defaultParameters }) => ({
    // operation's method
    post: {
      tags: ["Auth"], // operation's tag
      summary: "Guest Register", // summary
      description: "Guest signup using mobile number", // short desc
      operationId: "guestSignup", // unique operation id
      parameters: [...defaultParameters],
      requestBody: {
        // expected request body
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Guest_Register",
            },
          },
        },
        required: true,
      },
      // expected responses
      responses: getResponses(["Guest_Register", 400, 404]),
    },
  });
  