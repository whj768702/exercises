'use strict';
const path = require('path');

module.exports = {
  entry: {
    index: './src/index.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  optimization: {},
  module: {
    rules: [
      {
        test: /\.m?js$/,
        include: path.resolve(__dirname, 'src'),
        use: [
          {
            loader: path.resolve(__dirname, './loader/test-loader.js'),
            options: {
              name: 'test-loader',
            },
          },
        ],
      },
    ],
  },
};
