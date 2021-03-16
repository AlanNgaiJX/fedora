/*
 * @Author: your name
 * @Date: 2021-03-16 17:01:28
 * @LastEditTime: 2021-03-16 17:57:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/textarea/index.js
 */
import Textarea from './textarea.vue';
import Icon from '../icon';

Textarea.install = (app) => { app.use(Icon); app.component(Textarea.name, Textarea); };
export default Textarea;
