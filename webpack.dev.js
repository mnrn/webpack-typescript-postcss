const common = require('./webpack.common')
const path = require('path')

const { merge } = require('webpack-merge')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static : {
      directory: path.resolve(__dirname, 'dist')
    },
    compress: true
  }
})
