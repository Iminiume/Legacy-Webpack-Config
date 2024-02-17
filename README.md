# WebPack Configs for Legacy Browsers

This project provides a Webpack configuration setup tailored for bundling JavaScript, CSS, and HTML files, ensuring compatibility with legacy browsers.

## Table of Contents

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Configuration](#configuration)

## Introduction

Modern web development often utilizes the latest JavaScript features and CSS capabilities, which may not be supported by older browsers. To ensure broader compatibility, it's essential to transpile and bundle your code appropriately.

This project offers a Webpack configuration optimized for generating bundles suitable for older browsers. It includes settings for minification, transpilation of modern JavaScript features to ES5, extraction of CSS into separate files, and more.

## Getting Started

To use this configuration in your project, follow these steps:

1. Clone or download this repository to your local machine.
2. Install dependencies by running `npm install` or `yarn install`.
3. Place your JavaScript, CSS, and HTML files inside the `src` directory.
4. Customize the Webpack configuration according to your project's needs (see [Configuration](#configuration)).
5. Run `npm run build` or `yarn build` to generate the bundled output in the `dist` directory.
6. Deploy the contents of the `dist` directory to your web server.

## Usage

After setting up the project and customizing the configuration, you can use the following commands:

- `npm run build` or `yarn build`: Builds the project for production, generating optimized bundles in the `dist` directory.
- `npm run serve` or `yarn serve`: Serves the dist into your localhost with the port 4400.

## Project Structure

The project structure is as follows:

```
project-root/
│
├── dist/                 # Output directory for bundled files
│
├── src/                  # Source directory
│   ├── polyfills.js      # Polyfills for browser compatibility
│   ├── scripts-entry.js  # Entry point for JavaScript files
│   ├── styles-entry.css  # Entry point for CSS files
│   └── style.css         # All the styles needed in your project
│
├── node_modules/         # Dependencies installed via npm or yarn
├── index.html            # HTML template
├── webpack.config.js     # Webpack configuration file
├── package.json          # npm package configuration file
└── README.md             # Project README file
```

## Configuration

The `webpack.config.js` file contains the Webpack configuration. You can customize it based on your project's requirements. Here are some key configuration options:

- **Entry Points**: Define entry points for JavaScript and CSS files.
- **Plugins**: Configure plugins like HtmlWebpackPlugin for HTML generation and MiniCssExtractPlugin for CSS extraction.
- **Babel Loader**: Transpile JavaScript files using Babel, ensuring compatibility with older browsers.
- **CSS Loader**: Process CSS files, enabling extraction into separate files.
- **Optimization**: Minify JavaScript and CSS files for improved performance.

