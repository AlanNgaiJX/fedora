/*
 * @Author: your name
 * @Date: 2021-03-16 17:00:35
 * @LastEditTime: 2021-03-16 17:55:45
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /fedora/packages/menu/index.js
 */
import Menu from './menu.vue';
import SubMenu from './sub-menu.vue';
import MenuItem from './menu-item.vue';
import Icon from '../icon';

Menu.install = (app) => {
  app.use(Icon);
  app.component(Menu.name, Menu);
  app.component(SubMenu.name, SubMenu);
  app.component(MenuItem.name, MenuItem);
};
export default Menu;
