/*
 * @Author: your name
 * @Date: 2021-03-14 11:42:32
 * @LastEditTime: 2021-03-14 20:57:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/modal.js
 */
import { createApp } from 'vue';
import Icon from './icon.vue';
import Toast from './toast/toast.vue';
import Loading from './loading/loading.vue';
import Spin from './spin/spin.vue';
import ShadowShade from './shadow-shade/shadow-shade.vue';

// 创建app实例
function createToast(props) {
  const container = document.createElement('div');
  const toastApp = createApp(
    Toast,
    Object.assign(props, {
      destroy: destroyApp,
    }),
  );

  // 销毁方法
  function destroyApp() {
    toastApp._container.remove();
    toastApp.unmount();
  }
  toastApp.destroyApp = destroyApp;

  // 注册组件
  toastApp.component(Icon.name, Icon);

  // 挂载
  document.body.appendChild(container);
  toastApp.mount(container);

  return toastApp;
}

function createLoading(props) {
  const container = document.createElement('div');
  const loadingApp = createApp(
    Loading,
    Object.assign(props, {
      destroy: destroyApp,
    }),
  );

  // 销毁方法
  function destroyApp() {
    loadingApp._container.remove();
    loadingApp.unmount();
  }
  loadingApp.destroyApp = destroyApp;

  // 注册组件
  loadingApp.component(Spin.name, Spin);
  loadingApp.component(ShadowShade.name, ShadowShade);

  document.body.appendChild(container);
  loadingApp.mount(container);
  return loadingApp;
}

let currToastApp;
let currLoadingApp;
export default {
  install(Vue, { app }) {
    // 全局配置与全局设置方法
    const toastGlobal = {
      title: '',
      html: '',
      icon: '',
      enterAnimate: 'fadeIn', // 'none', 'fadeIn', 'slideInDown', 'slideInUp'
      leaveAnimate: 'fadeOut', // 'none', 'fadeOut', 'slideOutDown', 'slideOutUp'
      animateSpeed: 5, // 3~6
      duration: 1.5,
      mask: true,
      position: 'default', // 'default', 'top', 'middle', 'bottom'
      background: 'rgba(187, 187, 187, 0.872)',
      color: '#fff',
      maxWidth: '30%',
    };

    const loadingGlobal = {
      title: '',
      mask: true,
      maskOpacity: 0.05,
      position: 'default',
      type: 'CHASE',
      size: 40,
      speed: 1,
    };

    function setToastGlobal(props) {
      Object.assign(toastGlobal, props);
    }

    function setLoadingGlobal(props) {
      Object.assign(loadingGlobal, props);
    }

    // 工具方法
    function showToast(props) {
      const propsData = { ...toastGlobal, ...props };
      if (currToastApp) {
        currToastApp.destroyApp();
      }
      currToastApp = createToast(propsData);
    }

    function showLoading(props) {
      const propsData = { ...loadingGlobal, ...props };
      currLoadingApp = createLoading(propsData);
    }

    function hideLoading(props) {
      if (currLoadingApp) {
        currLoadingApp.destroyApp();
      }
    }

    // provide暴露
    app.provide('$showToast', showToast);
    app.provide('$setToastGlobal', setToastGlobal);
    app.provide('$showLoading', showLoading);
    app.provide('$hideLoading', hideLoading);
    app.provide('$setLoadingGlobal', setLoadingGlobal);

    // Vue.prototype暴露
    app.config.globalProperties.$showToast = showToast;
    app.config.globalProperties.$setToastGlobal = setToastGlobal;
    app.config.globalProperties.$showLoading = showLoading;
    app.config.globalProperties.$hideLoading = hideLoading;
    app.config.globalProperties.$setToastGlobal = setToastGlobal;
  },
};
