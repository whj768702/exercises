'use strict';
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    search: './src/search.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name]_[chunkhash:8].js',
  },
  mode: 'production', // production | development | none
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
          // 'style-loader',
          // 将ccs独立到一个css文件中
          MiniCssExtractPlugin.loader,
          // The css-loader interprets @import and url() like import/require() and will resolve them.
          //css-loader对@import和url()的解释就像import/require()一样，并会解决它们。
          'css-loader',
        ],
      },
      {
        test: /\.less$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader'],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name]_[hash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      publicPath: './',
      template: 'index.html',
    }),
    new MiniCssExtractPlugin({
      filename: '[name]_[contenthash:8].css',
    }),
  ],
  optimization: {
    moduleIds: 'named',
    minimizer: [new CssMinimizerPlugin()], // css压缩 https://webpack.docschina.org/plugins/css-minimizer-webpack-plugin/
  },
};
