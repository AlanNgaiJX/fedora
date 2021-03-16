/*
 * @Author: your name
 * @Date: 2021-03-16 17:01:22
 * @LastEditTime: 2021-03-16 17:08:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/tabs/index.js
 */
import Tabs from './tabs.vue';
import TabsBody from './tabs-body.vue';
import TabsHead from './tabs-head.vue';
import TabsItem from './tabs-item.vue';
import TabsPan from './tabs-pane.vue';

Tabs.install = (app) => {
  app.component(Tabs.name, Tabs);
  app.component(TabsHead.name, TabsHead);
  app.component(TabsItem.name, TabsItem);
  app.component(TabsBody.name, TabsBody);
  app.component(TabsPan.name, TabsPan);
};

export default Tabs;
