const responses = {
  ...require("./auth"),
  ...require("./admin"),
  ...require("./users"),
};

const getResponses = (keys) => {
  return keys.reduce((res, key) => {
    return (res[responses[key]?.["code"]] = responses[key]?.["response"]), res;
  }, {});
};

module.exports = { getResponses };
