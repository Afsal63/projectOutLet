module.exports = ({ getResponses, defaultParameters, securityParameters }) => ({
  // operation's method
  post: {
    tags: ["Admin"], // operation's tag
    summary: "Admin SignIn", // summary
    description: "Admin SignIn using email or mobile number", // short desc
    operationId: "adminSignIn", // unique operation id
    parameters: [...defaultParameters, ...securityParameters],
    requestBody: {
      // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Admin_SignIn",
          },
        },
      },
      required: true,
    },
    // expected responses
    responses: getResponses(["Admin_SignIn", 400, 404]),
  },
});
