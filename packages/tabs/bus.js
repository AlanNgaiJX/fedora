/*
 * @Author: your name
 * @Date: 2021-03-14 01:42:25
 * @LastEditTime: 2021-03-14 02:07:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/tabs/bus.js
 */
// 为保持和vue2版本中使用bus一致，emit,on,off前面都加了$
class Bus {
  constructor() {
    // 收集订阅信息,调度中心
    this.list = {};
  }

  // 订阅
  $on(name, fn) {
    this.list[name] = this.list[name] || [];
    this.list[name].push(fn);
  }

  // 发布
  $emit(name, ...args) {
    if (this.list[name]) {
      this.list[name].forEach((fn) => {
        fn(...args);
      });
    }
  }

  // 取消订阅
  $off(name) {
    if (this.list[name]) {
      delete this.list[name];
    }
  }
}
export default Bus;
