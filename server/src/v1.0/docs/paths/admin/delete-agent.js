module.exports = ({ getResponses, defaultParameters }) => ({
  // operation's method
  patch: {
    tags: ["Admin"], // operation's tag
    summary: "Delete Agent ", // summary
    description: "Only admin have the access to Delete Agent", // short desc
    operationId: "deleteAgent", // unique operation id
    parameters: [
      ...defaultParameters,
      {
        in: "path",
        name: "id",
        required: true,
        description: "Agent ID",
        schema: {
          type: "string",
          default: "3140442e-5f32-4190-ac15-7e0d766401a0",
        },
      },
      {
        in: "path",
        name: "status",
        required: true,
        description: "Agent Status change to inactive",
        schema: { type: "string", default: "inactive" },
      },
    ],
    requestBody: {
      required: false,
    },
    // expected responses
    responses: getResponses(["Delete_Agent", 400, 404]),
  },
});
