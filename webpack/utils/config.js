const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const consts = require('./consts')
const path = require('path')

const config = {
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: 'images/[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.(eot|svg|ttf|woff)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'name=fonts/[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        include: [path.resolve('src/themes')],
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.json$/,
        use: ['json-loader']
      }
    ]
  },
  postcss: [
    require('postcss-font-magician')(),
    require('cssnano')({
      filterPlugins: false,
      sourcemap: true,
      autoprefixer: {
        add: true,
        remove: true,
        browsers: ['last 2 versions']
      },
      safe: true,
      discardComments: {
        removeAll: true
      }
    })
  ],
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: [
          require('postcss-font-magician')(),
          require('cssnano')({
            filterPlugins: false,
            sourcemap: true,
            autoprefixer: {
              add: true,
              remove: true,
              browsers: ['last 2 versions']
            },
            safe: true,
            discardComments: {
              removeAll: true
            }
          })
        ]
      }
    }),
    new HtmlWebpackPlugin({
      template: consts.TEMPLATE,
      title: consts.TITLE,
      filename: '../index.html',
      hash: true
    })
  ],
  resolve: {
    modules: ['src', 'node_modules'],
    extensions: ['.js', '.jsx', '.html', '.css', '.scss'],
    alias: {
      'react': 'react-lite',
      'react-dom': 'react-lite'
    }
  }
}

module.exports = config
