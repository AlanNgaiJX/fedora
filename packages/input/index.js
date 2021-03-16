/*
 * @Author: your name
 * @Date: 2021-03-16 17:00:25
 * @LastEditTime: 2021-03-16 17:55:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/input/index.js
 */
import Input from './input.vue';
import Icon from '../icon';

Input.install = (app) => {
  app.use(Icon);
  app.component(Input.name, Input);
};
export default Input;
