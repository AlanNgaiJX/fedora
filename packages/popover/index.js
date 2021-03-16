/*
 * @Author: your name
 * @Date: 2021-03-16 17:00:43
 * @LastEditTime: 2021-03-16 17:03:21
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/popover/index.js
 */
import Popover from './popover.vue';

Popover.install = (app) => app.component(Popover.name, Popover);
export default Popover;
