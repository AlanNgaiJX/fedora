/*
 * @Author: your name
 * @Date: 2021-03-13 22:18:41
 * @LastEditTime: 2021-03-13 23:01:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/event.js
 */
function extend(obj, fnName, cb) {
  const oldFn = obj[fnName];
  obj[fnName] = function wrap(...args) {
    let ret;
    oldFn && (ret = oldFn.apply(this, args));
    cb && cb.apply(this, args);
    return ret;
  };
}

extend(EventTarget.prototype, 'addEventListener', function (eventName) {
  const node = this;
  const ioContext = node.__IO__;

  if (eventName === 'appear' || eventName === 'disappear') {
    // 一个节点需要一个 io 即可
    if (node.__IO__) {
      ioContext.listenerNum += 1;
      return;
    }

    const io = new IntersectionObserver((entries) => {
      const _ioContext = node.__IO__;
      const { visible: lastVisible } = _ioContext;
      const entry = entries[entries.length - 1];
      const ratio = entry.intersectionRatio;
      const visible = entry.isIntersecting && ratio >= 0;

      if (lastVisible === undefined) {
        _ioContext.visible = visible;
      } else if (visible !== lastVisible) {
        _ioContext.visible = visible;

        node.dispatchEvent(
          new CustomEvent(visible ? 'appear' : 'disappear', {
            bubbles: false, // appear/disappear是节点相关的事件不能冒泡
          }),
        );
      }
    });

    node.__IO__ = {
      instance: io,
      listenerNum: 1,
    };
    io.observe(node);
  }
});

extend(EventTarget.prototype, 'removeEventListener', function (eventName) {
  const node = this;
  const ioContext = node.__IO__;

  if (eventName === 'appear' || eventName === 'disappear') {
    // 当事件为没有监听器的时候就可以把 io 注销, 释放内存
    if (ioContext.listenerNum - 1 === 0) {
      ioContext.instance.disconnect();
      ioContext.instance = null;
      node.__IO__ = null;
    }
  }
});
