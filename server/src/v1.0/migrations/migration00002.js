const data = require("../seeds/seed00002");
const { WidgetPackages } = require("../models");

// execution function
async function execute() {
  for (var i = 0; i < data.length; i++) {
    console.log(data[i]);
    await new WidgetPackages(data[i]).save();
  }
}

module.exports = {
  execute,
};
