/*
 * @Author: your name
 * @Date: 2021-03-16 17:00:28
 * @LastEditTime: 2021-03-16 17:02:42
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/lazy-img/index.js
 */
import LazyImg from './lazy-img.vue';

LazyImg.install = (app) => app.component(LazyImg.name, LazyImg);
export default LazyImg;
