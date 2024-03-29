# Legacy Webpack Config

This project provides webpack configurations for legacy browser support, allowing you to bundle your JavaScript, CSS, and HTML files for deployment in environments with older browser versions.

## Features

- **Webpack Configurations**: Separate webpack configurations for development and production environments.
- **Legacy Browser Support**: Includes polyfills and optimizations for targeting legacy browsers.
- **CSS Extraction**: Extracts CSS into separate files for better performance.
- **HTML Bundling**: Bundles HTML files for deployment.
- **ES5 Transpilation**: Transpiles JavaScript code to ECMAScript 5 for wider browser compatibility.
- **Development Server**: Integrated development server for rapid development and testing.

## Prerequisites

Ensure you have Node.js and npm installed on your system.

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/Iminiume/legacy-webpack-config.git
   ```

2. Navigate to the project directory:

   ```bash
   cd legacy-webpack-config
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

## Usage

### Development Mode

To run the development server:

```bash
npm run dev
```

This will start the development server on port 4400.

### Production Mode

To run the production build locally:

```bash
npm run serve
```

This will start the production server on port 4400.

### Development Build

To build the project for development:

```bash
npm run build:dev
```

This will generate optimized development-ready files in the `dist` directory.

### Production Build

To build the project for production:

```bash
npm run build:prod
```

This will generate optimized production-ready files in the `dist` directory.

## Configuration

- `webpack.common.js`: Common webpack configuration shared between development and production environments.
- `webpack.dev.js`: Development-specific webpack configuration.
- `webpack.prod.js`: Production-specific webpack configuration.
- `webpack.config.js`: Additional webpack configurations such as plugins.

## Scripts

- `dev`: Start the development server.
- `serve`: Serve the production build locally.
- `build:dev`: Build the project for development.
- `build:prod`: Build the project for production.
- `remdist`: Remove the `dist` directory.

## License

This project is licensed under the [ISC License](LICENSE).
