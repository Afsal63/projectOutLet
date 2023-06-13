module.exports = ({ getResponses, defaultParameters }) => ({
    // operation's method
    post: {
      tags: ["Users"], // operation's tag
      summary: "Set Password", // summary
      description: "Set new password", // short desc
      operationId: "setPassword", // unique operation id
      parameters: [...defaultParameters,
        {
            in: "path",
            name: "accessToken",
            required: true,
            description: "User token",
            schema: {
              type: "string",
              default: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDViN2RhNWY1Zjc2ZTJiOGVmNDBlMmUiLCJwaG9uZSI6IjExMjIzMzQ0NTUiLCJlbWFpbCI6InNhbXBsZUBnbWFpbC5jb20iLCJzZXNzaW9uSWQiOiI1N2NiMzQwYi00YjE0LTQ2YWYtYjBlOS01YTg1MWE1MTdjN2UiLCJpYXQiOjE2ODU4OTM4NjAsImV4cCI6MTY4NjA2NjY2MH0.Lj3k1EGrQgeGCeIzr1bcwSbC1mESIV8cBHWKp8qQWxc",
            },
          },],
      requestBody: {
        // expected request body
        content: {
          // content-type
          "application/json": {
            schema: {
              $ref: "#/components/schemas/Set_Password",
            },
          },
        },
        required: true,
      },
      // expected responses
      responses: getResponses(["Set_Password", 400, 404]),
    },
  });