/**
 * Created by Administrator on 2017/4/27 0027.
 */
var ip = require('ip');

const config = {
  server: {
    host: ip.address(),
    port: 8000,
  }
}

module.exports = config;
