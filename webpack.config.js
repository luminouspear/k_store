const path = require('path');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }

    return config
  },
  mode: 'development',
  entry: './frontend/src/index.js',
  target: 'node',
  output: {
    filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
    globalObject: 'this',
  },
  resolve: {

         fallback: {
      "querystring": require.resolve("querystring-es3"),
      "os": false,
      "path": false,
           "fs": false,
      },
      // alias: {
      //   'sib-api-v3-sdk$': path.resolve(__dirname, '/frontend/node_modules/sib-api-v3-sdk'),
      // },
  },
    plugins: [
        new NodePolyfillPlugin(),
    ],
  module: {
    rules: [
          {
          //CSS Loader
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // PostCSS loader for Tailwind CSS
      {
        test: /\.postcss$/,
        use: ['style-loader', 'postcss-loader'],
      },
          {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },

    ],
  },
};
