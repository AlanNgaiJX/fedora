/*
 * @Author: your name
 * @Date: 2021-03-16 17:00:51
 * @LastEditTime: 2021-03-16 17:56:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/select/index.js
 */
import Select from './select.vue';
import SelectOption from './select-option.vue';
import Icon from '../icon';

Select.install = (app) => {
  app.use(Icon);
  app.component(Select.name, Select);
  app.component(SelectOption.name, SelectOption);
};

export default Select;
