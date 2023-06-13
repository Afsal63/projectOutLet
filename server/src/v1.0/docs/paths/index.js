const { v4: uuid } = require("uuid");
const { getResponses } = require("../components/responses");
const defaultParameters = [
  {
    in: "header",
    name: "App-Type",
    schema: { type: "string", enum: ["web", "app"], default: "web" },
  },
  {
    in: "header",
    name: "Device-Id",
    schema: { type: "string", default: uuid() },
  },
];

const securityParameters = [
  { AuthJWT: [] },
  {
    in: "header",
    name: "token",
    schema: {
      type: "string",
      default:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NDViN2RhNWY1Zjc2ZTJiOGVmNDBlMmUiLCJwaG9uZSI6IjExMjIzMzQ0NTUiLCJlbWFpbCI6InNhbXBsZUBnbWFpbC5jb20iLCJzZXNzaW9uSWQiOiI1N2NiMzQwYi00YjE0LTQ2YWYtYjBlOS01YTg1MWE1MTdjN2UiLCJpYXQiOjE2ODU4OTM4NjAsImV4cCI6MTY4NjA2NjY2MH0.Lj3k1EGrQgeGCeIzr1bcwSbC1mESIV8cBHWKp8qQWxc",
    },
  },
];

const makeWrapper = (path) =>
  path({ getResponses, defaultParameters, securityParameters });

module.exports = {
  ...require("./auth")({ makeWrapper }),
  ...require("./admin")({ makeWrapper }),
  ...require("./users")({ makeWrapper }),
};
