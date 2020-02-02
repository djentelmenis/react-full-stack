/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const entry = path.join(__dirname, '..', 'client', 'index.tsx');
const filename = 'bundle.js';
const output = path.join(__dirname, '..', 'dist', 'app');
const template = path.join(__dirname, '..', 'client', 'index.html');
const favicon = path.join(__dirname, '..', 'client', 'public', 'favicon.ico');

module.exports = {
  entry: ['react-hot-loader/patch', entry],
  output: {
    path: output,
    filename,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.scss$/,
        use: ['style-loader', MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template,
      favicon,
    }),
    new MiniCssExtractPlugin({
      filename: 'styles.css',
    }),
  ],
};
