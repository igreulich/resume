'use strict';

const webpack = require('webpack');

let packageJson  = require('./package.json');
let dependencies = Object.keys(packageJson.dependencies);

module.exports = {
  entry: {
    app: './app/scripts/src/App.jsx',
    vendor: dependencies
  },
  output: {
    path: './app/scripts/dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test:    /\.jsx?$/,
        exclude: /node_modules/,
        loader:  'babel?cacheDirectory'
      }
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js')
  ]
};
