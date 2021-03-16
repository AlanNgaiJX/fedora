/*
 * @Author: your name
 * @Date: 2021-03-16 16:58:01
 * @LastEditTime: 2021-03-16 18:57:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/vue.config.js
 */
const devConfig = require('./build/config.dev');
const buildConfig = require('./build/config.build');

module.exports = process.env.NODE_ENV === 'development' ? devConfig : buildConfig;
