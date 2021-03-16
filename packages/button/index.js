/*
 * @Author: your name
 * @Date: 2021-03-16 17:00:19
 * @LastEditTime: 2021-03-16 17:54:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/button/index.js
 */
import Button from './button.vue';
import Icon from '../icon';

Button.install = (app) => { app.use(Icon); app.component(Button.name, Button); };
export default Button;
