module.exports = ({ getResponses, defaultParameters }) => ({
  // operation's method
  patch: {
    tags: ["Admin"], // operation's tag
    summary: "Edit Department ", // summary
    description: "Only admin have the access to edit department", // short desc
    operationId: "editDpt", // unique operation id
    parameters: [...defaultParameters],
    requestBody: {
      // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Edit_Department",
          },
        },
      },
      required: true,
    },
    // expected responses
    responses: getResponses(["Edit_Department", 400, 404]),
  },
});
