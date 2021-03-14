<!--
 * @Author: your name
 * @Date: 2021-03-13 21:15:23
 * @LastEditTime: 2021-03-14 00:06:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/squareImg/squareImg.vue
-->
<template>
  <div class="fe-square-img" :style="wrapStyle">
    <fe-lazy-img
      v-if="lazyLoad"
      :style="imgStyle"
      :src="src"
      @load="handleLoad"
      @error="handleImgError"
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
import { defineComponent, ref, computed } from 'vue';

export default defineComponent({
  name: 'fe-square-img',
  props: {
    borderRadius: {
      type: [String, Number],
      default: 0,
    },
    backgroundColor: {
      type: String,
      default: '#fff',
    },
    src: {
      type: String,
      require: true,
    },
    size: {
      type: [String, Number],
      default: '100%',
    },
    alt: {
      type: String,
      default: '',
    },
    full: {
      type: Boolean,
      default: false,
    },
    lazyLoad: {
      type: Boolean,
      default: false,
    },
  },
  setup(props, context) {
    const imgStyle = ref({});
    const wrapStyle = computed(() => {
      const size = props.size;
      return {
        backgroundColor: props.backgroundColor,
        width: size.match(/\D$/) ? size : `${size}px`,
        height: size.match(/\D$/) ? size : `${size}px`,
        paddingBottom: 0,
      };
    });

    function handleLoad(e) {
      const { clientWidth, clientHeight } = e.target;
      const { clientWidth: parentWidth, clientHeight: parentHeight } = e.target.parentNode;
      const ratio = clientWidth / clientHeight;

      if (props.full) {
        if (clientWidth >= clientHeight) {
          imgStyle.value.width = '100%';
          imgStyle.value.transform = 'translateY(25%)';
        } else {
          imgStyle.value.height = '100%';
          imgStyle.value.transform = 'translateX(25%)';
        }
      } else if (clientWidth >= clientHeight) {
        imgStyle.value.height = '100%';
        imgStyle.value.transform = `translateX(${-(ratio * parentHeight - parentWidth) / 2}px)`;
      } else {
        imgStyle.value.width = '100%';
        imgStyle.value.transform = `translateY(${-(parentWidth / ratio - parentHeight) / 2}px)`;
      }
      context.emit('load', e);
    }

    function handleImgError(e) {
      context.emit('error', e);
    }

    return {
      handleLoad, imgStyle, wrapStyle, handleImgError,
    };
  },
});
</script>

<style lang="scss" scoped>
.fe-square-img {
  width: 100%;
  height: 0;
  padding-bottom: 100%;
  overflow: hidden;
  position: relative;

  img {
    position: absolute;
  }
}
</style>
