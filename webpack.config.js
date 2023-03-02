module.exports = {
  // ...
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
