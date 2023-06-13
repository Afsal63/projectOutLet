module.exports = ({ getResponses, defaultParameters, securityParameters }) => ({
  // operation's method
  put: {
    tags: ["Admin"], // operation's tag
    summary: "Create Agent ", // summary
    description: "Only admin have the access to create Agent", // short desc
    operationId: "creatAgent", // unique operation id
    parameters: [...defaultParameters, ...securityParameters],
    requestBody: {
      // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Create_Agent",
          },
        },
      },
      required: true,
    },
    // expected responses
    responses: getResponses(["Create_Agent", 400, 404]),
  },
});
