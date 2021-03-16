/*
 * @Author: your name
 * @Date: 2021-03-16 17:01:08
 * @LastEditTime: 2021-03-16 17:16:26
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/spin/index.js
 */
import Spin, { setGlobalSpinColor } from './spin.vue';

Spin.install = (app) => {
  app.component(Spin.name, Spin); // 暴露全局设置spin color
  app.provide('setGlobalSpinColor', setGlobalSpinColor);
  app.config.globalProperties.$setGlobalSpinColor = setGlobalSpinColor;
};
export default Spin;
