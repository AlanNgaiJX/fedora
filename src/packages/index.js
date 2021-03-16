/*
 * @Author: your name
 * @Date: 2021-03-09 22:11:01
 * @LastEditTime: 2021-03-16 11:24:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/index.js
 */
import _Button from './button/button.vue';
import _Icon from './icon/icon.vue';
import _Radio from './radio/radio.vue';
import _RadioList from './radio/radioList.vue';
import _Menu from './menu/menu.vue';
import _SubMenu from './menu/sub-menu.vue';
import _MenuItem from './menu/menu-item.vue';
import _Select from './select/select.vue';
import _SelectOption from './select/select-option.vue';
import _Switch from './switch/switch.vue';
import _Input from './input/input.vue';
import _Textarea from './textarea/textarea.vue';
import _Popover from './popover/popover.vue';
import _Bubble from './bubble/bubble.vue';
import _LazyImg from './lazy-img/lazy-img.vue';
import _SquareImg from './square-img/square-img.vue';
import _SkeletonItem from './skeleton/skeleton-item.vue';
import _Skeleton from './skeleton/skeleton.vue';
import _Tabs from './tabs/tabs.vue';
import _TabsHead from './tabs/tabs-head.vue';
import _TabsBody from './tabs/tabs-body.vue';
import _TabsItem from './tabs/tabs-item.vue';
import _TabsPane from './tabs/tabs-pane.vue';
import _Slider from './slider/slider.vue';
import _Spin, { setGlobalSpinColor } from './spin/spin.vue';
import _ShadowShade from './shadow-shade/shadow-shade.vue';
import _Modal from './modal';

import './styles/animate.css';
import './styles/iconfont';

export const Button = _Button;
export const Icon = _Icon;
export const Radio = _Radio;
export const RadioList = _RadioList;
export const Menu = _Menu;
export const SubMenu = _SubMenu;
export const MenuItem = _MenuItem;
export const Select = _Select;
export const SelectOption = _SelectOption;
export const Switch = _Switch;
export const Input = _Input;
export const Textarea = _Textarea;
export const Popover = _Popover;
export const Bubble = _Bubble;
export const LazyImg = _LazyImg;
export const SquareImg = _SquareImg;
export const SkeletonItem = _SkeletonItem;
export const Skeleton = _Skeleton;
export const Tabs = _Tabs;
export const TabsHead = _TabsHead;
export const TabsBody = _TabsBody;
export const TabsItem = _TabsItem;
export const TabsPane = _TabsPane;
export const Slider = _Slider;
export const Spin = _Spin;
export const ShadowShade = _ShadowShade;
export const Modal = _Modal;

function install(app) {
  app.component(_Button.name, _Button);
  app.component(_Icon.name, _Icon);
  app.component(_Radio.name, _Radio);
  app.component(_RadioList.name, _RadioList);
  app.component(_Menu.name, _Menu);
  app.component(_SubMenu.name, _SubMenu);
  app.component(_MenuItem.name, _MenuItem);
  app.component(_Select.name, _Select);
  app.component(_SelectOption.name, _SelectOption);
  app.component(_Switch.name, _Switch);
  app.component(_Input.name, _Input);
  app.component(_Textarea.name, _Textarea);
  app.component(_Popover.name, _Popover);
  app.component(_Bubble.name, _Bubble);
  app.component(_LazyImg.name, _LazyImg);
  app.component(_SquareImg.name, _SquareImg);
  app.component(_SkeletonItem.name, _SkeletonItem);
  app.component(_Skeleton.name, _Skeleton);
  app.component(_Tabs.name, _Tabs);
  app.component(_TabsHead.name, _TabsHead);
  app.component(_TabsBody.name, _TabsBody);
  app.component(_TabsItem.name, _TabsItem);
  app.component(_TabsPane.name, _TabsPane);
  app.component(_Slider.name, _Slider);
  app.component(_Spin.name, _Spin);
  app.component(_ShadowShade.name, _ShadowShade);
  app.use(_Modal);

  // 暴露全局设置spin color
  app.provide('setGlobalSpinColor', setGlobalSpinColor);
  app.config.globalProperties.$setGlobalSpinColor = setGlobalSpinColor;
}

// for <script>
if (typeof window.Vue !== 'undefined') {
  install(window.Vue);
}

export default {
  install,
};
