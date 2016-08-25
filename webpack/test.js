const consts = require('./utils/consts')
const config = require('./utils/config')
const webpack = require('webpack')
const OpenBrowserPlugin = require('open-browser-webpack-plugin')
const path = require('path')

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  module: {
    loaders: [
      {
        test: /\.scss$/,
        include: [
          path.resolve('src/app'),
          path.resolve('src/components')
        ],
        loader: 'style!css?modules&localIdentName=[name]__[local]-[hash:base64:5]!sass!postcss'
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        loader: 'style!css'
      },
      ...config.module.loaders
    ],
    postLoaders: [{
      test: /\.js$/,
      exclude: /test\/|node_modules/,
      loaders: ['istanbul-instrumenter']
    }]
  },
  sassLoader: config.sassLoader,
  postcss: function () {
    return [
      require('postcss-browser-reporter'),
      require('postcss-reporter'),
      ...config.postcss
    ]
  },
  resolve: config.resolve
}
