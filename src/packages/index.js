/*
 * @Author: your name
 * @Date: 2021-03-09 22:11:01
 * @LastEditTime: 2021-03-15 20:47:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/index.js
 */
import Button from './button/button.vue';
import Icon from './icon/icon.vue';
import Radio from './radio/radio.vue';
import RadioList from './radio/radioList.vue';
import Menu from './menu/menu.vue';
import SubMenu from './menu/sub-menu.vue';
import MenuItem from './menu/menu-item.vue';
import Select from './select/select.vue';
import SelectOption from './select/select-option.vue';
import Switch from './switch/switch.vue';
import Input from './input/input.vue';
import Textarea from './textarea/textarea.vue';
import Popover from './popover/popover.vue';
import Bubble from './bubble/bubble.vue';
import LazyImg from './lazy-img/lazy-img.vue';
import SquareImg from './square-img/square-img.vue';
import SkeletonItem from './skeleton/skeleton-item.vue';
import Skeleton from './skeleton/skeleton.vue';
import Tabs from './tabs/tabs.vue';
import TabsHead from './tabs/tabs-head.vue';
import TabsBody from './tabs/tabs-body.vue';
import TabsItem from './tabs/tabs-item.vue';
import TabsPane from './tabs/tabs-pane.vue';
import Slider from './slider/slider.vue';
import Spin, { setGlobalSpinColor } from './spin/spin.vue';
import ShadowShade from './shadow-shade/shadow-shade.vue';
import './styles/animate.css';
import './styles/iconfont';
import Modal from './modal';

const install = (Vue, { app }) => {
  Vue.component(Button.name, Button);
  Vue.component(Icon.name, Icon);
  Vue.component(Radio.name, Radio);
  Vue.component(RadioList.name, RadioList);
  Vue.component(Menu.name, Menu);
  Vue.component(SubMenu.name, SubMenu);
  Vue.component(MenuItem.name, MenuItem);
  Vue.component(Select.name, Select);
  Vue.component(SelectOption.name, SelectOption);
  Vue.component(Switch.name, Switch);
  Vue.component(Input.name, Input);
  Vue.component(Textarea.name, Textarea);
  Vue.component(Popover.name, Popover);
  Vue.component(Bubble.name, Bubble);
  Vue.component(LazyImg.name, LazyImg);
  Vue.component(SquareImg.name, SquareImg);
  Vue.component(SkeletonItem.name, SkeletonItem);
  Vue.component(Skeleton.name, Skeleton);
  Vue.component(Tabs.name, Tabs);
  Vue.component(TabsHead.name, TabsHead);
  Vue.component(TabsBody.name, TabsBody);
  Vue.component(TabsItem.name, TabsItem);
  Vue.component(TabsPane.name, TabsPane);
  Vue.component(Slider.name, Slider);
  Vue.component(Spin.name, Spin);
  Vue.component(ShadowShade.name, ShadowShade);
  Vue.use(Modal, { app });

  // 暴露全局设置spin color
  app.provide('setGlobalSpinColor', setGlobalSpinColor);
  app.config.globalProperties.$setGlobalSpinColor = setGlobalSpinColor;
};

// for <script>
if (typeof window.Vue !== 'undefined') {
  install(window.Vue);
}

export default {
  install,
};
