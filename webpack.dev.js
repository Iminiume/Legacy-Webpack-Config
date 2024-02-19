const { merge } = require("webpack-merge");
const common = require("./webpack.common.js");

const babelLoaderRule = common.module.rules.filter(
  (rule) => rule.loader === "babel-loader"
)[0];
babelLoaderRule.exclude = /node_modules/;
babelLoaderRule.options.babelrc = true;
const devConfigs = {
  name: "WebpackDevConfig",
  mode: "development",
  devServer: {
    open: false,
    allowedHosts: "all",
    port: 4400,
    historyApiFallback: true,
    hot: true,
  },
};

const mergedConfigs = merge(common, devConfigs);
module.exports = mergedConfigs;
