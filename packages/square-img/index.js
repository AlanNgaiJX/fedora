/*
 * @Author: your name
 * @Date: 2021-03-16 17:01:12
 * @LastEditTime: 2021-03-16 17:04:51
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/square-img/index.js
 */
import SquareImg from './square-img.vue';

SquareImg.install = (app) => app.component(SquareImg.name, SquareImg);
export default SquareImg;
