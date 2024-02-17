const path = require("path");
const { merge } = require("webpack-merge");
const TerserPlugin = require("terser-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const commonConfigs = {
  // Your entry file that you want to load and export it

  // If you want to load files in seprate files you can do this instead
  // Keep in mind that, this is entry, meaning you should import the container file
  // For example if you want to export many .css files into one .js file in here, you should have an Entry
  // and import that container file in here

  // NOTE: Load polyfills before the script.js file as entry
  entry: {
    main: ["./src/polyfills.js", "./src/scripts-entry.js"],
    // css: "./src/styles-entry.css",
  },

  // Add extra plugins
  plugins: [
    // NOTE: These two plugins are for exporting the html file and css file seperately and not in the main js file

    // Uses HtmlWebpackPlugin for loading the first and main html
    new HtmlWebpackPlugin({ template: "./index.html" }),
    // Uses MiniCssExtractPlugin for exporting css file into a seperate file
    new MiniCssExtractPlugin({}),
  ],

  // Here you can tell which extensions are allowed in the project like .ts or .js
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
    extensions: [".jsx", ".js"],
  },

  // Choose your browser target based on your usage
  target: ["web", "es5"],
  module: {
    strictExportPresence: true,

    // Set some rules based on different things you have in project and configure them
    rules: [
      // Configuration for .js and .jsx extensions
      {
        // Regex for extensions
        test: /\.(js|jsx)$/,

        // Set the loader of js and jsx extension to babel loader
        loader: "babel-loader",
        options: {
          // Disable the babelRc
          babelrc: false,
          presets: [
            [
              // Set js and jsx files to transpile the ECPA 2015+ code into a backwards compatible version
              "@babel/preset-env",
              {
                loose: true,
                modules: false,

                // Set the browsers target
                targets: ">0.1%",
              },
            ],

            // Add a main loader based on your framework
            "@babel/preset-react",
          ],

          // Extra Plugins
          plugins: [],
        },
      },
      // Configuration for .html extensions
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      // Configuration for .css extensions
      {
        test: /\.css$/i,
        // If you used MiniCssExtractPlugin above use the first config and if not use the other one
        use: [MiniCssExtractPlugin.loader, "css-loader"],
        // use: ["style-loader", "css-loader"],
      },
    ],
  },
  optimization: {
    // This config here is for minifing your project (you can add your own minifier)
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          // Disable all the arrow functions and transpile them into normal function
          compress: { arrows: false },
          // Minify based on ECMAScript 5
          ecma: 5,
          module: true,
        },
      }),
    ],
    splitChunks: false,
    usedExports: false,
  },
};

const devConfig = {
  name: "LegacyWebPackConfig",
  mode: "production",

  // Configure the build file
  output: {
    // Template name based on your entry object keys
    filename: "[name].LegacyWebPackConfig.js",
    path: path.resolve(__dirname, "dist"),
    library: "LegacyWebPackConfig",
    // Set the format of js you want to transpile
    libraryTarget: "umd",
    libraryExport: "default",
    clean: true,
  },

  // This option controls if and how source maps are generated.
  // https://webpack.js.org/configuration/devtool/
  devtool: false,

  devServer: {
    open: false,
    allowedHosts: "all",
    port: 4400,
    historyApiFallback: true,
  },
};

const mergedConfig = merge(commonConfigs, devConfig);
module.exports = mergedConfig;
