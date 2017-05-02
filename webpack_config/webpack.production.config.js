const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
const uglifyJsPlugin = webpack.optimize.UglifyJsPlugin;
const cfg = require('./config');
const htmlHelper = require('./html_helper');

const extractCSS = new ExtractTextPlugin({
  filename: 'css/[name].css',
  allChunks: true,
});

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
        use: extractCSS.extract({
          use: ['css-loader?minimize', 'sass-loader'],
          publicPath: '../',
        }),
      },
      { test: /\.js[x]?$/, include: path.resolve(__dirname, '../app'), exclude: /node_modules/, loader: 'babel-loader' },
      {
        test: /\.scss$/,
        exclude: path.resolve(__dirname, '../app/css/'),
        use: extractCSS.extract({
          use: [
            'css-loader?minimize&modules&&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]',
            'sass-loader',
          ],
          publicPath: '../',
        }),
      },
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  plugins: [
    new CommonsChunkPlugin({
      name: 'vender',
      filename: 'vender.min.js',
    }),
    extractCSS,
    new uglifyJsPlugin({
      output: {
        comments: false,
      },
      compress: {
        warnings: false,
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
