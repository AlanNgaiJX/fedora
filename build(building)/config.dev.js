/*
 * @Author: your name
 * @Date: 2021-03-16 16:25:44
 * @LastEditTime: 2021-03-16 17:22:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/build/config.dev.js
 */
const pub = require('./config.pub');

module.exports = {
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // 在 dist/index.html 的输出
      filename: 'index.html',
      // 当使用 title 选项时，
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'fedora test page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index'],
    },
  },
  configureWebpack: {
    resolve: pub.resolve,
  },
};
