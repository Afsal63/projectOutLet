const { validationResult } = require("express-validator");
const { FormValidatorException } = require("../../utils/customExceptions");

const errorFormatter = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new FormValidatorException(
      errors
        .array()
        .reduce((acc, curr) => ((acc[curr?.param] = curr?.msg), acc), {})
    );
  }
  next();
};

module.exports = {
  auth: require("./auth")(errorFormatter),
  // user: require("./user")(errorFormatter),
  // moneyTransfer: require("./moneyTransfer")(errorFormatter),
  // order: require("./order")(errorFormatter),
  // payment: require("./payment")(errorFormatter),
  // verification: require("./verification")(errorFormatter),
  // upload: require("./upload")(errorFormatter),
  // customer: require("./customer")(errorFormatter),
  // currencyExchange: require("./currencyExchange")(errorFormatter),
  // travelCard: require("./travelCard")(errorFormatter),
  // agent: require("./agent")(errorFormatter),
  // cPartnerGroup: require("./channelPartnerGroups")(errorFormatter),
  // admin: {
  //     ...require("./admin")(errorFormatter),
  //     report: require("./admin/report")(errorFormatter),
  //     settings: require("./admin/settings")(errorFormatter),
  //     order: require("./admin/order")(errorFormatter),
  //     cPartnerAllocation: require("./admin/cPartnerAllocation")(errorFormatter),
  // },
  // channelPartner: {
  //     currency: require("./channelPartner/currency")(errorFormatter),
  //     settings: require("./channelPartner/settings")(errorFormatter),
  //     order: require("./channelPartner/order")(errorFormatter),
  // },
};
