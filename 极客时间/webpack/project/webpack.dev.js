'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { webpack } = require('webpack');

module.exports = {
  entry: {
    index: './src/index.js',
    search: './src/search.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  mode: 'development', // production | development | none
  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [
          // Inject CSS into the DOM. 将CSS注入到DOM中。
          'style-loader',
          // The css-loader interprets @import and url() like import/require() and will resolve them.
          //css-loader对@import和url()的解释就像import/require()一样，并会解决它们。
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: ['file-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      publicPath: './',
      template: 'index.html',
    }),
  ],
  optimization: {
    moduleIds: 'named',
  },
  devServer: {
    // https://webpack.js.org/configuration/dev-server
    // 和原来老配置不一样了
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    hot: true,
  },
};
