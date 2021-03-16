/*
 * @Author: your name
 * @Date: 2021-03-16 17:00:31
 * @LastEditTime: 2021-03-16 18:27:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/loading/index.js
 */
import Loading from './loading.vue';
import Icon from '../icon';
import Spin from '../spin';
import ShadowShade from '../shadow-shade';

Loading.install = (app) => {
  app.use(Icon);
  app.use(Spin);
  app.use(ShadowShade);
  app.component(Loading.name, Loading);
};
export default Loading;
