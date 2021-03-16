/*
 * @Author: your name
 * @Date: 2021-03-16 16:25:44
 * @LastEditTime: 2021-03-16 17:21:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/build/config.pub.js
 */
const utils = require('./utils');
// 配置文件夹别名，extensions中的后缀在引入时可以忽略后缀，alias就是一些别名
module.exports = {
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      src: utils.resolve('src'),
      packages: utils.resolve('packages'),
      'fedora-ui': utils.resolve('packages/index.js'),
    },
  },
};
