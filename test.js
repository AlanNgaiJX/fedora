/*
 * @Author: your name
 * @Date: 2021-03-16 01:38:00
 * @LastEditTime: 2021-03-16 01:43:48
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/test.js
 */

const arr = [
  "import _Button from './button/button.vue'",
  "\nimport _Icon from './icon/icon.vue'",
  "\nimport _Radio from './radio/radio.vue'",
  "\nimport _RadioList from './radio/radioList.vue'",
  "\nimport _Menu from './menu/menu.vue'",
  "\nimport _SubMenu from './menu/sub-menu.vue'",
  "\nimport _MenuItem from './menu/menu-item.vue'",
  "\nimport _Select from './select/select.vue'",
  "\nimport _SelectOption from './select/select-option.vue'",
  "\nimport _Switch from './switch/switch.vue'",
  "\nimport _Input from './input/input.vue'",
  "\nimport _Textarea from './textarea/textarea.vue'",
  "\nimport _Popover from './popover/popover.vue'",
  "\nimport _Bubble from './bubble/bubble.vue'",
  "\nimport _LazyImg from './lazy-img/lazy-img.vue'",
  "\nimport _SquareImg from './square-img/square-img.vue'",
  "\nimport _SkeletonItem from './skeleton/skeleton-item.vue'",
  "\nimport _Skeleton from './skeleton/skeleton.vue'",
  "\nimport _Tabs from './tabs/tabs.vue'",
  "\nimport _TabsHead from './tabs/tabs-head.vue'",
  "\nimport _TabsBody from './tabs/tabs-body.vue'",
  "\nimport _TabsItem from './tabs/tabs-item.vue'",
  "\nimport _TabsPane from './tabs/tabs-pane.vue'",
  "\nimport _Slider from './slider/slider.vue'",
  "\nimport _Spin from './spin/spin.vue'",
  "\nimport _ShadowShade from './shadow-shade/shadow-shade.vue'",
  "\nimport _Modal from './modal'",
];

const reg = /import(.+)from/;

const arr1 = arr.map((item) => item.match(reg)[1].trim());

let p = '';
arr1.forEach((item) => {
  p += `export const ${item.replace('_', '')} = ${item};`;
});

console.log(p);
