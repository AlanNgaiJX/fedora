/*
 * @Author: your name
 * @Date: 2021-03-16 17:01:04
 * @LastEditTime: 2021-03-16 17:04:24
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/slider/index.js
 */
import Slider from './slider.vue';

Slider.install = (app) => app.component(Slider.name, Slider);
export default Slider;
