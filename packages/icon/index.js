/*
 * @Author: your name
 * @Date: 2021-03-16 17:00:22
 * @LastEditTime: 2021-03-16 17:02:13
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/icon/index.js
 */
import Icon from './icon.vue';

Icon.install = (app) => app.component(Icon.name, Icon);
export default Icon;
