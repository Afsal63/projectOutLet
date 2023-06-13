// module.exports = ({ getResponses, defaultParameters }) => ({
//   // operation's method
//   post: {
//     tags: ["Auth"], // operation's tag
//     summary: "Login to your account", // summary
//     description: "Authenticate a user using the username/email and password", // short desc
//     operationId: "authLogin", // unique operation id
//     parameters: [...defaultParameters],
//     requestBody: {
//       // expected request body
//       content: {
//         // content-type
//         "application/json": {
//           schema: {
//             $ref: "#/components/schemas/Login",
//           },
//         },
//       },
//       required: true,
//     },
//     // expected responses
//     responses: getResponses(["Login", 400, 404]),
//   },
// });
