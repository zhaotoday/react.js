const config = require('./utils/config')
const consts = require('./utils/consts')
const webpack = require('webpack')
const UglifyJsPlugin = webpack.optimize.UglifyJsPlugin
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const path = require('path')

module.exports = {
  entry: [
    path.resolve(consts.ENTRY)
  ],
  output: {
    path: path.resolve(consts.DIST),
    publicPath: consts.CDN,
    filename: '[id].[chunkhash].js'
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        include: [
          path.resolve('src/app'),
          path.resolve('src/components')
        ],
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[hash:base64:5]'
            }
          },
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.css$/,
        include: /node_modules/,
        use: [
          ExtractTextPlugin.extract({
            fallbackLoader: 'style-loader',
            loader: ['css-loader']
          })
        ]
      },
      ...config.module.rules
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.bundle.js'
    }),
    new UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: false
    }),
    new ExtractTextPlugin('[name].css'),
    ...config.plugins
  ],
  resolve: config.resolve
}
