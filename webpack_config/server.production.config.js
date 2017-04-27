/**
 * Created by Administrator on 2017/4/27 0027.
 */
const chalk = require('chalk');
const webpackProductionConfig = require('./webpack.production.config');
const server = require('pushstate-server');
const config = require('./config');


let { port, host } = config.server;
port += 1;

server.start({
  port: port,
  directory: webpackProductionConfig.output.path,
});

const url = `http://${host}:${port}`;
// openBrowser(url);

console.log(chalk.green(`Dist server listening on ${url} ...`));
