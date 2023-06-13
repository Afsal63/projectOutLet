module.exports = ({ getResponses, defaultParameters }) => ({
    // operation's method
    post: {
      tags: ["Auth"], // operation's tag
      summary: "Guest OTP", // summary
      description: "Guest OTP verifying", // short desc
      operationId: "guestOTP", // unique operation id
      parameters: [...defaultParameters],
      requestBody: {
        // expected request body
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Guest_OTP_Verify",
            },
          },
        },
        required: true,
      },
      // expected responses
      responses: getResponses(["Guest_OTP_Verify", 400, 404]),
    },
  });