/**
 * Created by Administrator on 2017/4/27 0027.
 */
const WebpackDevServer = require('webpack-dev-server');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');
const config = require('./config');
const chalk = require('chalk');
const path = require('path');


const { port, host } = config.server;

try {
  const compiler = webpack(webpackConfig);
  const server = new WebpackDevServer(compiler, {
    contentBase: path.resolve(__dirname, '../'),
    historyApiFallback: true,
    hot: true,
    inline: true,
    stats: {
      colors: true,
      assets: false,
      source: false,
      timings: true,
      hash: false,
      version: false,
      chunkModules: false,
      chunkOrigins: true,
    },
  });

  server.listen(port, host, () => {
    const url = `http://${host}:${port}`;
    console.log(chalk.green(`Dev server listening on ${url} ...`));
  });
} catch (e) {
  console.log(chalk.red(`The following error has ocurred: ${e}`));
}
