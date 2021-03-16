/*
 * @Author: your name
 * @Date: 2021-03-12 17:55:21
 * @LastEditTime: 2021-03-16 17:47:45
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/packages/common/js/directives.js
 */
/*
  一些公用的指令
*/

// 用法：  v-click-outside="handler"
const clickOutside = {
  // 初始化指令
  mounted(el, binding) {
    function clickHandler(e) {
      // 这里判断点击的元素是否是本身，是本身，则返回
      if (el.contains(e.target)) {
        return false;
      }
      // 判断指令中是否绑定了函数
      binding.value && typeof binding.value === 'function' && binding.value(e);

      return true;
    }
    const theEl = el;
    // 给当前元素绑定个私有变量，方便在unbind中可以解除事件监听
    theEl.vueClickOutside = clickHandler;
    document.addEventListener('click', clickHandler);
  },
  unmounted(el) {
    // 解除事件监听
    document.removeEventListener('click', el.vueClickOutside);
    delete el.vueClickOutside;
  },
};

const drag = {
  beforeMount(el, binding) {
    const onDrag = binding.value;
    const startPoint = { x: 0, y: 0 };
    const endPoint = { x: 0, y: 0 };
    const lastPoint = { x: 0, y: 0 };

    function clone(obj) {
      return JSON.parse(JSON.stringify(obj));
    }

    function onDragMove(e) {
      const _lastPoint = clone(lastPoint);
      lastPoint.x = endPoint.x = e.pageX;
      lastPoint.y = endPoint.y = e.pageY;

      onDrag(
        'move',
        clone({
          startPoint,
          endPoint,
          lastPoint: _lastPoint,
        }),
      );
    }

    function onDragEnd(e) {
      const _lastPoint = clone(lastPoint);
      lastPoint.x = endPoint.x = e.pageX;
      lastPoint.y = endPoint.y = e.pageY;

      onDrag(
        'end',
        clone({
          startPoint,
          endPoint,
          lastPoint: _lastPoint,
        }),
      );

      document.removeEventListener('mousemove', onDragMove);
      document.removeEventListener('mouseup', onDragEnd);
    }

    function onDragStart(e) {
      lastPoint.x = startPoint.x = endPoint.x = e.pageX;
      lastPoint.y = startPoint.y = endPoint.y = e.pageY;

      onDrag(
        'start',
        clone({
          startPoint,
          endPoint,
          lastPoint,
        }),
      );

      document.addEventListener('mousemove', onDragMove);
      document.addEventListener('mouseup', onDragEnd);
    }
    el.__onDragStart__ = onDragStart;
    el.addEventListener('mousedown', onDragStart);
  },
  unmounted(el) {
    // 解除事件监听
    document.removeEventListener('mousedown', el.__onDragStart__);
    delete el.__onDragStart__;
  },
};

export default {
  clickOutside,
  drag,
};
