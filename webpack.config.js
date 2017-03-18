const path = require("path");
const webpack = require('webpack');

module.exports = {
  context: __dirname,

  entry: {
    app: path.join(__dirname, 'client', 'index.js')
  },
  output: {
    path: path.join('app', 'assets', 'javascripts', 'react'),
    filename: "connect4_bundle.js",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": { 
        NODE_ENV: JSON.stringify("production") 
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  }
};