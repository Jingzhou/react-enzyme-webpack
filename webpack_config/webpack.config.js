const webpack = require('webpack');
const path = require('path');
const cfg = require('./config');
const { port, host } = cfg.server;


module.exports = {
  devtool: 'cheap-module-eval-source-map',
  entry: {
    index: [path.resolve(__dirname, '../app/main.jsx')],
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: `http://${host}:${port}/`,
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, '../app/css/'),
        loaders: ['style-loader', 'css-loader'],
      },
      { test: /\.js[x]?$/, include: path.resolve(__dirname, '../app'), exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, '../app/css/'),
        loaders: [
          'style-loader',
          'css-loader?modules&sourceMap=true&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
        ],
      },
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
};
