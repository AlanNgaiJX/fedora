/*
 * @Author: your name
 * @Date: 2021-03-16 17:01:17
 * @LastEditTime: 2021-03-16 17:05:12
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/switch/index.js
 */
import Switch from './switch.vue';

Switch.install = (app) => app.component(Switch.name, Switch);
export default Switch;
