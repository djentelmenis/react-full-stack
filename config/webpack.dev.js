/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

const entry = path.join(__dirname, '..', 'client', 'index.js');

module.exports = merge(common, {
  mode: 'development',
  entry: ['react-hot-loader/patch', entry],
  devtool: 'inline-source-map',
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
});
