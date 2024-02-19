const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");
// This config is for production mode
const prodConfigs = {
  name: "WebpackProdConfig",
  mode: "production",

  // When using devtool:false all the functions in the bundled file will be the main functions and not eval
  devtool: false,

  // Set your target browsers
  target: ["web", "es5"],
};

const mergedConfigs = merge(common, prodConfigs);
module.exports = mergedConfigs;
