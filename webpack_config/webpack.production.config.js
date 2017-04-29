const webpack = require('webpack');
const path = require('path');
const cfg = require('./config');
const htmlHelper = require('./html_helper');
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = {
  devtool: 'cheap-source-map',
  entry: htmlHelper.createHtmlentry(cfg.html, 'production'),
  output: {
    path: path.resolve(__dirname, '../build'),
    publicPath: './',
    filename: '[name].bundle.js'
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
    new webpack.optimize.DedupePlugin(),
    new uglifyJsPlugin({
      compress: {
        warnings: false
      }
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production')
      }
    }),
    ...htmlHelper.createHtmlPlugin(cfg.html),
  ]
};
