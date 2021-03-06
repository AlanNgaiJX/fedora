/*
 * @Author: your name
 * @Date: 2021-03-16 16:25:44
 * @LastEditTime: 2021-03-16 23:12:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/build/config.build.js
 */
const { resolve, getComponentEntries } = require('./utils');
const pub = require('./config.pub');

module.exports = {
  outputDir: resolve('lib'),
  configureWebpack: {
    entry: {
      ...getComponentEntries('packages', ['common']),
    },
    output: {
      // filename: '[name]/index.js'
      filename: ({ chunk }) => {
        if (chunk.name === 'index') { // 把index放在lib/ 下
          return 'index.js';
        }
        return '[name]/index.js';
      },
      libraryTarget: 'commonjs2',
      libraryExport: 'default',
      library: 'fedora',
    },
    resolve: pub.resolve,
  },
  css: {
    sourceMap: true,
    extract: false,
    // extract: {
    //   // filename: '[name]/style.css',
    //   filename: ({ chunk }) => {
    //     if (chunk.name === 'index') { // 把index放在lib/ 下
    //       return 'style.css';
    //     }
    //     return '[name]/style.css';
    //   },
    // },
  },
  chainWebpack: (config) => {
    /*
      删除splitChunks，在打包组件的时候，并不希望抽离每个组件的公共js出来，而是每个独立打包，于是删除这个配置；
      删除copy：不要复制public文件到打包目录；
      删除preload以及prefetch，因为删除了html插件，所以这两个也没用；
      删除html，只打包组件，不生成html页面；
      删除hmr，删除hot-module-reload；
      删除自动加上的入口：app
      下面的配置fonts这个rule，打包字体的时候，输出到打包目录的static/fonts目录下；
    */
    config.optimization.delete('splitChunks');
    config.plugins.delete('copy');
    config.plugins.delete('preload');
    config.plugins.delete('prefetch');
    config.plugins.delete('html');
    config.plugins.delete('hmr');
    config.entryPoints.delete('app');

    config.module
      .rule('fonts')
      .use('url-loader')
      .tap((option) => {
        option.fallback.options.name = 'static/fonts/[name].[hash:8].[ext]';
        return option;
      });
  },
};
