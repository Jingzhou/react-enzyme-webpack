/**
 * Created by Administrator on 2017/4/27 0027.
 */
var ip = require('ip');

const config = {
  server: {
    host: ip.address(),
    port: 8000,
  },

  html: [
    { name: 'index', title: '默认页面', entry: '../app/main.jsx' },
    { name: 'main2', title: '首页', entry: '../app/main2.jsx' },
  ]
}

module.exports = config;
