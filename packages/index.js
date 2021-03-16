/*
 * @Author: your name
 * @Date: 2021-03-09 22:11:01
 * @LastEditTime: 2021-03-16 23:36:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/index.js
 */
import _Button from './button';
import _Icon from './icon';
import _Radio from './radio';
import _Menu from './menu';
import _Select from './select';
import _Switch from './switch';
import _Input from './input';
import _Textarea from './textarea';
import _Popover from './popover';
import _Bubble from './bubble';
import _LazyImg from './lazy-img';
import _SquareImg from './square-img';
import _Skeleton from './skeleton';
import _Tabs from './tabs';
import _Slider from './slider';
import _Spin from './spin';
import _ShadowShade from './shadow-shade';
import _Modal from './modal';

import './common/styles/animate.css';

export const Button = _Button;
export const Icon = _Icon;
export const Radio = _Radio;
export const Menu = _Menu;
export const Select = _Select;
export const Switch = _Switch;
export const Input = _Input;
export const Textarea = _Textarea;
export const Popover = _Popover;
export const Bubble = _Bubble;
export const LazyImg = _LazyImg;
export const SquareImg = _SquareImg;
export const Skeleton = _Skeleton;
export const Tabs = _Tabs;
export const Slider = _Slider;
export const Spin = _Spin;
export const ShadowShade = _ShadowShade;
export const Modal = _Modal;

function install(app) {
  app.use(_Button);
  app.use(_Icon);
  app.use(_Radio);
  app.use(_Menu);
  app.use(_Select);
  app.use(_Switch);
  app.use(_Input);
  app.use(_Textarea);
  app.use(_Popover);
  app.use(_Bubble);
  app.use(_LazyImg);
  app.use(_SquareImg);
  app.use(_Skeleton);
  app.use(_Tabs);
  app.use(_Slider);
  app.use(_Spin);
  app.use(_ShadowShade);
  app.use(_Modal);
}

export default {
  install,
};
