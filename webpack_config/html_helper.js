/**
 * Created by Administrator on 2017/4/28 0028.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const config = require('./config');
const { host, port } = config.server;

function createHtmlentry(cfg, env = '') {
  const devEntery = [    // 开发模式的entry
    'webpack/hot/dev-server',
    `webpack-dev-server/client?http://${host}:${port}`
  ];
  const out = {};
  console.log(env);
  if (Array.isArray(cfg) && cfg.length > 0) {   // 多entry模式
    cfg.forEach(e => {
      out[e.name] = env === 'production' ? path.resolve(__dirname, e.entry)
        : devEntery.concat(path.resolve(__dirname, e.entry));
    });
    return out;
  }

  out.index = devEntery.concat(path.resolve(__dirname, '../app/main.jsx')); // html没有设置时生成默认entry
  return out;
}


function createHtmlPlugin(cfg) {
  if (Array.isArray(cfg) && cfg.length > 0) {  // 生成多个页面
    return cfg.map(e =>
      new HtmlWebpackPlugin({
        title: e.title,
        filename: `./${e.name}.html`,
        template: path.resolve(__dirname, './template/template.html'),
        chunks: [`${e.name}`],
        inject: 'true',
      })
    );
  }
  return (  // html没有设置时默认生成index页面
  [
    new HtmlWebpackPlugin({
      title: '首页',
      filename: './index.html',
      template: path.resolve(__dirname, './template/template.html'),
      inject: 'true',
    })
  ]
  );
}


module.exports = {
  createHtmlentry,
  createHtmlPlugin,
}
