const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const TerserPlugin = require("terser-webpack-plugin");

const path = require("path");
const config = require("./webpack.config.js");

// Here are some common configs for your webpack
module.exports = {
  // Set your entry with polyfills being loaded before the main js file
  entry: {
    main: ["./src/polyfills.js", "./src/scripts-entry.js"],
    // css: "./src/styles-entry.css",
  },

  // Set the config of your bundled file
  output: {
    filename: "[name].WebpackLegacyConfig.js",
    path: path.resolve(__dirname, "dist"),
    library: "WebpackLegacyConfig",
    libraryTarget: "umd",
    libraryExport: "default",
    clean: true,
  },

  plugins: config.plugins,

  // Add the paths of your project for the module resolver
  resolve: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
    },
    extensions: [".jsx", ".js"],
  },

  // Set rules for different extensions
  module: {
    strictExportPresence: true,
    rules: [
      // Your config for bundling .js and .jsx files
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        options: {
          babelrc: false,
          presets: [
            [
              "@babel/preset-env",
              {
                loose: true,
                modules: false,

                // Set the target browsers for transpiling your .js and .jsx files
                targets: ">0.1%",
              },
            ],
            "@babel/preset-react",
          ],
          plugins: [],
        },
      },

      // Your config for bundling .html files
      {
        test: /\.html$/i,
        loader: "html-loader",
      },

      // Your config for bundling .css files
      {
        test: /\.css$/i,

        // MiniCssExtractPlugin will export your css files seperatly
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        // use: ["style-loader", "css-loader"],
      },
    ],
  },

  // This will optimize and minify your project based on ECMAScript 5 with terser
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          compress: { arrows: false },
          ecma: 5,
          module: true,
        },
      }),
    ],
    splitChunks: false,
    usedExports: false,
  },

  // Set limit for your bundled file size
  performance: {
    hints: false,
    maxEntrypointSize: 2000000,
    maxAssetSize: 2000000,
  },
};
