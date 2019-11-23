/* eslint-disable import/no-extraneous-dependencies */
const merge = require('webpack-merge');
const path = require('path');
const common = require('./webpack.common');

const entry = path.join(__dirname, '..', 'client', 'index.js');

module.exports = merge(common, {
  mode: 'production',
  entry,
});
