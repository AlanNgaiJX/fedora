/**
 * @description: 从该el往上至endNode找，直到符合selector的节点出现。
 * @param {HTMLElement} el  起始节点
 * @param {string} selector  选择器
 * @param {HTMLElement} endNode 终止节点
 * @return {null | HTMLElement} 搜索结果：有返回节点，无null
 */
export function closetIn(el, selector, endNode = document.documentElement) {
  if (el.matches(selector)) {
    return el;
  }
  if (el === endNode) {
    return null;
  }
  return closetIn(el.parentNode, selector, endNode);
}

/**
 * @description: 从该el往上至endNode找，返回所有符合selector的节点。
 * @param {HTMLElement} el
 * @param {string} selector
 * @param {HTMLElement} endNode
 * @param {-1 | 1} sort 排序，1从里到外， -1从外到里
 * @return {Array[HTMLElement]} 返回所有符合selector的节点
 */
export function closetOut(el, selector, endNode = document.documentElement, sort = 1) {
  const result = [];
  // 递归搜索
  (function search(_el, _selector, _endNode) {
    if (_el.matches(_selector)) {
      result.push(_el);
    }
    if (_el !== _endNode) {
      search(_el.parentNode, _selector, _endNode);
    }
  }(el, selector, endNode));

  if (sort < 0) {
    result.reverse();
  }

  return result;
}

/**
 * @description: 获取标记路径
 * @param {HTMLElement} el 起始节点
 * @param {HTMLElement} root 终止节点
 * @param {string} mark 标记
 * @return {Array[string]}
 */
export function getPath(el, root, mark = 'mark') {
  const elList = closetOut(el, `[data-${mark}]`, root, -1);
  return elList.map((elItem) => elItem.getAttribute(`data-${mark}`));
}

/**
 * @description: 获取标记
 * @param {*} el
 * @return {string}
 */
export function getTarget(el, root, mark = 'mark') {
  let result = '';
  const target = closetIn(el, `[data-${mark}]`, root);
  if (target) {
    result = target.getAttribute(`data-${mark}`);
  }
  return result;
}
