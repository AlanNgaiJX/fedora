<!--
 * @Author: your name
 * @Date: 2021-03-14 19:29:47
 * @LastEditTime: 2021-03-14 20:51:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /fedora/src/packages/shadow-shade.vue/shadowShade.vue
-->
<template>
  <div class="shadowShade shadeFadeIn" :style="shadeStyle"></div>
</template>

<script>
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'fe-shadow-shade',
  props: {
    opacity: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const shadeStyle = computed(() => ({
      'background-color': `rgba(0, 0, 0, ${props.opacity})`,
    }));

    return { shadeStyle };
  },
});
</script>

<style lang="scss" scoped>
@keyframes shadeFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
.shadowShade {
  display: block;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.1);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: auto;
}
.fadeInVeryFast {
  animation-name: fadeInVeryFast;
  animation-duration: 0.2s;
}
</style>
