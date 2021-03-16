<!--
 * @Author: your name
 * @Date: 2021-03-13 21:15:23
 * @LastEditTime: 2021-03-16 00:04:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/squareImg/squareImg.vue
-->
<template>
  <div class="fe-square-img" :style="wrapStyle">
    <fe-lazy-img
      v-if="lazyLoad"
      :src="src"
      @load="handleLoad"
      @error="handleImgError"
      :style="imgStyle"
    ></fe-lazy-img>
    <img
      v-else
      :src="src"
      :alt="alt"
      @load="handleLoad"
      @error="handleImgError"
      :style="imgStyle"
    />
  </div>
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'fe-square-img',
  props: {
    borderRadius: { // 圆角
      type: [String, Number],
      default: 0,
    },
    backgroundColor: { // 背景色
      type: String,
      default: '#fff',
    },
    src: { // 图片地址
      type: String,
      require: true,
    },
    size: { // 大小
      type: [String, Number],
      default: '100%',
    },
    alt: { // alt
      type: String,
      default: '',
    },
    objectFit: { // 排版模式
      type: String,
      default: 'cover',
      validator: (objectFit) => ['none', 'fill', 'contain', 'cover', 'none', 'scale-down'].includes(objectFit),
    },
    lazyLoad: { // 懒加载
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const wrapStyle = computed(() => {
      const size = props.size;
      return {
        backgroundColor: props.backgroundColor,
        borderRadius: props.borderRadius,
        width: size.match(/\D$/) ? size : `${size}px`,
      };
    });

    const imgStyle = computed(() => ({
      objectFit: props.objectFit,
    }));

    function handleLoad(e) {
      context.emit('load', e);
    }

    function handleImgError(e) {
      context.emit('error', e);
    }

    return {
      wrapStyle,
      imgStyle,
      handleLoad,
      handleImgError,
    };
  },
});
</script>

<style lang="scss" scoped>
.fe-square-img {
  position: relative;

  &::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  img {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
}
</style>
