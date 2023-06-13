module.exports = ({ getResponses, defaultParameters, securityParameters }) => ({
  // operation's method
  patch: {
    tags: ["Admin"], // operation's tag
    summary: "Edit agent name and password", // summary
    description: "Only admin have the access to change Agent password and name", // short desc
    operationId: "editAgent", // unique operation id
    parameters: [...defaultParameters, ...securityParameters],
    requestBody: {
      // expected request body
      content: {
        // content-type
        "application/json": {
          schema: {
            $ref: "#/components/schemas/Agent_Set_Pwd_And_Name",
          },
        },
      },
      required: true,
    },
    // expected responses
    responses: getResponses(["Agent_Set_Pwd_And_Name", 400, 404]),
  },
});
