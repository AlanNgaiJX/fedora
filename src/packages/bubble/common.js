/*
 * @Author: your name
 * @Date: 2021-03-13 20:13:16
 * @LastEditTime: 2021-03-13 20:35:10
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/bubble/common.js
 */
/**
 * @description: 获取元素相对于这个页面的x坐标。
 * @param {HTMLElement} elem 元素
 * @return {number} 像素值
 */
export function getPageX(elem) {
  if (getComputedStyle(elem).position === 'fixed') {
    return elem.offsetLeft + document.documentElement.scrollLeft;
  }
  return elem.offsetParent ? (elem.offsetLeft + getPageX(elem.offsetParent)) : elem.offsetLeft;
}

/**
 * @description: 获取元素相对于这个页面的y坐标。
 * @param {HTMLElement} elem 元素
 * @return {number} 像素值
 */
export function getPageY(elem) {
  if (getComputedStyle(elem).position === 'fixed') {
    return elem.offsetTop + document.documentElement.scrollTop;
  }
  return elem.offsetParent ? (elem.offsetTop + getPageX(elem.offsetParent)) : elem.offsetTop;
}

/**
 * @description: 获取元素相对于这个页面的xy坐标。
 * @param {*} elem
 * @return {Object}{x,y}
 */
export function getPageXY(elem) {
  return {
    x: getPageX(elem),
    y: getPageY(elem),
  };
}
// getComputedStyle(target)['position']
