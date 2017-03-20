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
  devtool: 'source-map',
  plugins: [
    new webpack.DefinePlugin({
      "process.env": { 
        NODE_ENV: JSON.stringify("production") 
      }
    }),
    // https://gist.github.com/Couto/b29676dd1ab8714a818f#gistcomment-1584602 - es6-promise
    new webpack.ProvidePlugin({
      'Promise': 'es6-promise',
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
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