module.exports = ({ getResponses, defaultParameters, securityParameters }) => ({
  // operation's method
  put: {
    tags: ["Admin"], // operation's tag
    summary: "Create Department ", // summary
    description: "Only admin have the access to create department", // short desc
    operationId: "creatDpt", // unique operation id
    parameters: [...defaultParameters, ...securityParameters],
    requestBody: {
      // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Create_Department",
          },
        },
      },
      required: true,
    },
    // expected responses
    responses: getResponses(["Create_Department", 400, 404]),
  },
});
