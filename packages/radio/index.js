/*
 * @Author: your name
 * @Date: 2021-03-16 17:00:47
 * @LastEditTime: 2021-03-16 17:10:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/radio/index.js
 */
import Radio from './radio.vue';
import RadioList from './radioList.vue';

Radio.install = (app) => {
  app.component(Radio.name, Radio);
  app.component(RadioList.name, RadioList);
};
export default Radio;
