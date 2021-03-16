<!--
 * @Author: your name
 * @Date: 2021-03-13 22:29:27
 * @LastEditTime: 2021-03-15 23:34:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/lazyImg/lazy-img.vue
-->
<template>
  <img
    :src="imgSrc"
    :alt="alt"
    ref="self"
    @error="handleImgError"
    @load="handleLoaded"
    :style="style"
  />
</template>

<script>
import { defineComponent, ref, onMounted } from 'vue';

export default defineComponent({
  name: 'fe-lazy-img',
  props: {
    src: { // 图片地址
      type: String,
      require: true,
    },
    errSrc: { // 错误图地址
      type: String,
      default: '',
    },
    alt: { // img.alt
      type: String,
      default: '',
    },
    root: { // 指定 intersection的窗口节点，请提供选择器
      type: String,
      default: '',
    },
    rootMargin: { // 窗口的margin，向窗口四周扩散或收缩
      type: String,
      default: '0px 0px 0px 0px', // 'px/%'
    },
    style: { // 图片样式
      type: Object,
      default: null,
    },
  },
  setup(props, context) {
    const self = ref(null);
    const imgSrc = ref('');

    function handleImgError(e) {
      if (props.errSrc) {
        imgSrc.value.src = props.errSrc;
      }
      context.emit('error', e);
    }

    function handleLoaded(e) {
      context.emit('load', e);
    }

    onMounted(() => {
      const src = props.src;
      const rootMargin = props.rootMargin;
      const options = { rootMargin };
      const root = props.root && document.querySelector(props.root);
      root && (options.root = root);
      const io = new IntersectionObserver((entries) => {
        const entry = entries[0];
        if (entry.isIntersecting && entry.intersectionRatio >= 0) {
          imgSrc.value = src;
          io.unobserve(self.value);
          io.disconnect();
        }
      }, options);
      io.observe(self.value);
    });
    return {
      self,
      imgSrc,
      handleImgError,
      handleLoaded,
    };
  },
});
</script>
