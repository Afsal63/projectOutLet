module.exports = ({ getResponses, defaultParameters }) => ({
  // operation's method
  post: {
    tags: ["Admin"], // operation's tag
    summary: "Admin Signup", // summary
    description: "Admin signIn using Google SignIn methord", // short desc
    operationId: "saveAdmin", // unique operation id
    parameters: [...defaultParameters],
    requestBody: {
              // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Save_Admin",
          },
        },
      },
      required: false,
    },
    // expected responses
    responses: getResponses(["Save_Admin", 400, 404]),
  },
});
