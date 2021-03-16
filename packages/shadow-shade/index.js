/*
 * @Author: your name
 * @Date: 2021-03-16 17:00:55
 * @LastEditTime: 2021-03-16 17:04:04
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/shadow-shade/index.js
 */
import ShadowShade from './shadow-shade.vue';

ShadowShade.install = (app) => app.component(ShadowShade.name, ShadowShade);
export default ShadowShade;
