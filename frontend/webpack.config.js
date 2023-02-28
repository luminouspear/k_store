const path = require('path');
const webpack = require('webpack');
const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');
const Dotenv = require('dotenv-webpack')

module.exports = {
  // Set the mode to development
  mode: 'development',

  // Set the entry point to the main React file
  entry: './src/index.js',

  // Set the target to web, which is the default target
  target: 'web',

  // Set the output file path and name
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },

  node: {
    __dirname: true
  },

  // Set up any plugins used in the build
  plugins: [
    // Use the NodePolyfillPlugin to provide polyfills for Node.js APIs
    new NodePolyfillPlugin(),

    // Use the Dotenv plugin to load environment variables from a .env file
    new Dotenv(),
  ],

  // Set up the loaders used in the build
  module: {
    rules: [

       // Set up the Babel loader to transpile JavaScript files
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-react']
          }
        },
      },


      // Set up the CSS loader to handle CSS files
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },

      // Set up the PostCSS loader to handle PostCSS files (e.g. for Tailwind CSS)
      {
        test: /\.postcss$/,
        use: ['style-loader', 'postcss-loader'],
      },
    ],
  },

  // Set up the resolve object for file extensions and fallback options
  resolve: {
    // Set up file extensions to be resolved
    extensions: ['.js', '.jsx', '.ts', '.tsx'],

    fallback: {
      "fs": false,
      "path": require.resolve("path-browserify"),
      "os": require.resolve("os-browserify/browser"),
    },

    // Set up fallback options for Node.js built-in modules
    // fallback: {
    //   "fs": false,
    //   "path": false,
    //   "os": false,
    // },
  },
};





// const path = require('path');
// const webpack = require('webpack');
// const NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

// module.exports = {
//   webpack: (config, { isServer }) => {
//     // Fixes npm packages that depend on `fs` module
//     if (!isServer) {
//       config.node = {
//         fs: 'empty'
//       }
//     }

//     return config
//   },
//   mode: 'development',
//   entry: './frontend/src/index.js',
//   target: 'node',
//   output: {
//     filename: 'bundle.js',
//       path: path.resolve(__dirname, 'dist'),
//     globalObject: 'this',
//   },
//   resolve: {

//         fallback: {
//                 "querystring": require.resolve("querystring-es3"),
//                 "os": false,
//                 "path": false,
//                 "fs": false,
//               },
//         extensions: ['.js', '.jsx', '.ts', '.tsx'],
//       // alias: {
//       //   'sib-api-v3-sdk$': path.resolve(__dirname, '/frontend/node_modules/sib-api-v3-sdk'),
//       // },
//   },
//     plugins: [
//         new NodePolyfillPlugin(),
//     ],
//     module: {
//     rules: [
//           {
//           //CSS Loader
//         test: /\.css$/,
//         use: ['style-loader', 'css-loader'],
//       },
//       // PostCSS loader for Tailwind CSS
//       {
//         test: /\.postcss$/,
//         use: ['style-loader', 'postcss-loader'],
//       },
//           {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//         },
//       },

//     ],
//   },
//   resolve: {
//     fallback: {
//       path: require.resolve("path-browserify")
//     },
//     extensions: ['.js', '.jsx', '.ts', '.tsx'],
//   }
// };
