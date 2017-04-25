const webpack = require('webpack');
const path = require('path');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
  devServer: {
    historyApiFallback: true,
    hot: true,
    inline: true,
    progress: true,
    contentBase: './app',
    port: 8080
  },
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'app/main.jsx')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/',
    filename: './bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        include: path.resolve(__dirname, 'app'),
        loaders: ['style-loader', 'css-loader'],
      },
      { test: /\.js[x]?$/, include: path.resolve(__dirname, 'app'), exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, '../src/css/'), // 跳过 node_modules 目录
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
    new OpenBrowserPlugin({ url: 'http://localhost:8080' })
  ]
};
