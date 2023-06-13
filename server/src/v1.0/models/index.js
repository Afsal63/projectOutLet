const mongoose = require("mongoose");
const collectionNames = require("../../config/collectionNames");

module.exports = {
  User: require("./user")(mongoose, collectionNames?.USER),
  SuperAdmin: require("./superAdmin")(mongoose, collectionNames?.SUPERADMIN),
  Admin: require("./admin")(mongoose, collectionNames?.ADMIN),
  Customer: require("./customer")(mongoose, collectionNames?.CUSTOMER),
  Tickets: require("./tickets")(mongoose, collectionNames?.TICKETS),
  CallDetails: require("./callDetails")(mongoose, collectionNames?.CALLDETAILS),
  WidgetPackages: require("./widgetPackages")(
    mongoose,
    collectionNames?.WIDGETPACKAGES,
  ),
  Migration: require("./migration")(mongoose, collectionNames?.MIGRATION),
};
