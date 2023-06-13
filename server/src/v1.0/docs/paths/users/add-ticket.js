module.exports = ({ getResponses, defaultParameters }) => ({
  // operation's method
  post: {
    tags: ["Users"], // operation's tag
    summary: "Add tickets", // summary
    description: "The ticket will created when starting a call", // short desc
    operationId: "addTicket", // unique operation id
    parameters: [...defaultParameters],
    requestBody: {
      // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Add_Tickets",
          },
        },
      },
      required: true,
    },
    // expected responses
    responses: getResponses(["Add_Tickets", 400, 404]),
  },
});
