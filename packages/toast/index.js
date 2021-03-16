/*
 * @Author: your name
 * @Date: 2021-03-16 17:01:34
 * @LastEditTime: 2021-03-16 17:59:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/toast/index.js
 */
import Toast from './toast.vue';
import Icon from '../icon';

Toast.install = (app) => {
  app.use(Icon);
  app.component(Toast.name, Toast);
};
export default Toast;
