const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
  // ...
    devtool: 'source-map',
  mode: 'production',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'frontend', 'public', 'index.html')
    })
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
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
    ]
  }
};
