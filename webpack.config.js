const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

// Here is your webpack configs (like Plugins)
module.exports = {
  plugins: [
    // HtmlWebpackPlugin will export your html files seperatly
    new HtmlWebpackPlugin({ template: ".//index.html" }),

    // MiniCssExtractPlugin will export your css files seperatly
    new MiniCssExtractPlugin({}),
  ],
};
